#!/usr/bin/env node
/**
 * 按 src/data/shots.json 里的 sourceUrl 抓取截图，转 WebP 存到 src/assets/screens/。
 *
 * 只做两件事：下载 + 转码。不会改动 shots.json —— 那份清单是人工/后台维护的。
 *
 * 平时不需要跑：仓库里已经有全部图片。只有在
 *   · 新增了一条带 sourceUrl 的记录
 *   · 想用远程原图覆盖本地文件（--force）
 * 时才需要执行。
 *
 * 用法：
 *   npm run assets:fetch
 *   npm run assets:fetch -- --only=v5      # 只处理 slug 含 v5 的
 *   npm run assets:fetch -- --force        # 强制重新下载覆盖
 *   HTTPS_PROXY=http://127.0.0.1:7897 NODE_USE_ENV_PROXY=1 npm run assets:fetch
 */

import { mkdir, readFile, access, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const REGISTRY = path.join(ROOT, "src", "data", "shots.json");
const CACHE = path.join(ROOT, ".cache", "assets");
const OUT_DIR = path.join(ROOT, "src", "assets", "screens");

const CONCURRENCY = 4;
const MAX_WIDTH = 1600;
const QUALITY = 82;

const force = process.argv.includes("--force");
const only = process.argv.find((a) => a.startsWith("--only="))?.split("=")[1];

const exists = (p) => access(p).then(() => true, () => false);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function download(url, dest, { retries = 3 } = {}) {
  if (!force && (await exists(dest))) return "cached";
  let lastErr;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(45_000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) throw new Error(`响应过小（${buf.length} B）`);
      await (await import("node:fs/promises")).writeFile(dest, buf);
      return "downloaded";
    } catch (err) {
      lastErr = err;
      console.warn(`    重试 ${attempt + 1}/${retries}：${err.message}`);
      await sleep(1500 * (attempt + 1));
    }
  }
  throw lastErr;
}

async function convert(item) {
  const src = path.join(CACHE, `${item.slug}.png`);
  const out = path.join(OUT_DIR, `${item.slug}.webp`);

  if (!force && (await exists(out))) {
    const meta = await sharp(out).metadata();
    return { width: meta.width, height: meta.height, bytes: 0, skipped: true };
  }

  let pipeline = sharp(src).rotate();
  if (!item.thin) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true, fit: "inside" });
  }
  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(out);

  const meta = await sharp(out).metadata();
  const { size } = await stat(out);
  return { width: meta.width, height: meta.height, bytes: size, skipped: false };
}

async function main() {
  const registry = JSON.parse(await readFile(REGISTRY, "utf8"));
  let items = registry.SHOTS.filter((i) => i.sourceUrl);

  if (only) items = items.filter((i) => i.slug.includes(only));
  if (!items.length) {
    console.log("没有需要抓取的条目（shots.json 里没有 sourceUrl，或 --only 没匹配到）");
    return;
  }

  await mkdir(CACHE, { recursive: true });
  await mkdir(OUT_DIR, { recursive: true });

  console.log(`共 ${items.length} 项${force ? "（强制重新下载）" : ""}`);

  const queue = [...items];
  let done = 0;

  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      try {
        const dl = await download(item.sourceUrl, path.join(CACHE, `${item.slug}.png`));
        const conv = await convert(item);
        done++;
        console.log(
          `  ${conv.skipped ? "·" : "✓"} [${done}/${items.length}] ${item.slug}  ${conv.width}×${conv.height}  ${(conv.bytes / 1024).toFixed(0)}KB  ${dl}`,
        );
      } catch (err) {
        console.error(`  ✗ ${item.slug} 失败：${err.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`\n完成。图片在 src/assets/screens/，清单是 src/data/shots.json（不会被脚本改动）。`);
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
