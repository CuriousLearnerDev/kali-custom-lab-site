#!/usr/bin/env node
/**
 * 按 scripts/assets.manifest.json 抓取真实截图，转 WebP 自托管。
 *
 * 规则：
 *   - 原始 PNG 落 .cache/（不进版本库），只提交转码后的 webp；
 *   - 长边限 1600px（thin 窄条图保持原尺寸，不放大）；
 *   - 真实宽高由 sharp 回写，不手抄 —— 尺寸错了会导致 CLS；
 *   - 幂等：已存在的 webp 默认跳过，--force 强制重做。
 *
 * 用法：
 *   npm run assets:fetch
 *   HTTPS_PROXY=http://127.0.0.1:7897 NODE_USE_ENV_PROXY=1 npm run assets:fetch -- --force
 */

import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const MANIFEST = path.join(ROOT, "scripts", "assets.manifest.json");
const CACHE = path.join(ROOT, ".cache", "assets");
const SCREENS = path.join(ROOT, "src", "assets", "screens");
const META_OUT = path.join(ROOT, "src", "data", "shots.meta.json");

const CONCURRENCY = 4;
const MAX_WIDTH = 1600;
const QUALITY = 82;

const force = process.argv.includes("--force");
const only = process.argv.find((a) => a.startsWith("--only="))?.split("=")[1];

const exists = async (p) =>
  access(p).then(
    () => true,
    () => false,
  );

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
      await writeFile(dest, buf);
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
  const group = item.group ?? "misc";
  const outDir = path.join(SCREENS, group);
  await mkdir(outDir, { recursive: true });

  const src = path.join(CACHE, `${item.slug}.png`);
  const out = path.join(outDir, `${item.slug}.webp`);

  if (!force && (await exists(out))) {
    const meta = await sharp(out).metadata();
    return { width: meta.width, height: meta.height, bytes: 0, skipped: true };
  }

  let pipeline = sharp(src).rotate();
  if (!item.thin) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
    });
  }
  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(out);

  const meta = await sharp(out).metadata();
  const stat = await import("node:fs/promises").then((m) => m.stat(out));
  return { width: meta.width, height: meta.height, bytes: stat.size, skipped: false };
}

async function main() {
  const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
  let items = manifest.items;
  if (only) items = items.filter((i) => i.slug.includes(only));

  if (!items.length) {
    console.error("清单为空或 --only 没有匹配项");
    process.exit(1);
  }

  await mkdir(CACHE, { recursive: true });
  await mkdir(SCREENS, { recursive: true });

  console.log(`共 ${items.length} 项素材${force ? "（强制重做）" : ""}`);

  const results = [];
  const queue = [...items];
  let done = 0;

  async function worker(id) {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const png = path.join(CACHE, `${item.slug}.png`);
      try {
        const dl = await download(item.url, png);
        const conv = await convert(item);
        done++;
        const flag = conv.skipped ? "·" : "✓";
        console.log(
          `  ${flag} [${done}/${items.length}] ${item.slug}  ${conv.width}×${conv.height}  ${(conv.bytes / 1024).toFixed(0)}KB  ${dl}`,
        );
        results.push({
          slug: item.slug,
          group: item.group,
          category: item.category,
          product: item.product,
          version: item.version,
          alt: item.alt,
          caption: item.caption,
          sourceRef: item.sourceRef,
          usedOn: item.usedOn ?? [],
          thin: Boolean(item.thin),
          width: conv.width,
          height: conv.height,
          bytes: conv.bytes || undefined,
        });
      } catch (err) {
        console.error(`  ✗ ${item.slug} 失败：${err.message}`);
        console.error(`    ${item.url}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)));

  // 保持清单顺序，便于 diff
  const order = new Map(items.map((i, idx) => [i.slug, idx]));
  results.sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0));

  const meta = {
    $generated: "由 scripts/fetch-assets.mjs 生成，请勿手改",
    count: results.length,
    items: results,
  };
  await writeFile(META_OUT, `${JSON.stringify(meta, null, 2)}\n`, "utf8");

  const totalKb = results.reduce((s, r) => s + (r.bytes ?? 0), 0) / 1024;
  console.log(
    `\n✓ 完成 ${results.length}/${items.length} 张，新增体积 ${totalKb.toFixed(0)} KB`,
  );
  console.log(`  元数据 → ${path.relative(ROOT, META_OUT)}`);

  const failed = items.length - results.length;
  if (failed > 0) {
    console.error(`✗ ${failed} 张失败，请检查网络/代理后重跑`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
