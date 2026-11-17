#!/usr/bin/env node
/**
 * 构建产物检查（postbuild 执行）：
 * 确认 dist 里没有任何外链图片域名 —— 也就是所有素材都真的自托管了。
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const BANNED = ["myqcloud.com", "raw.githubusercontent.com"];
const CHECK_EXT = new Set([".html", ".css", ".js", ".json", ".xml", ".svg"]);

let scanned = 0;
const hits = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    if (!CHECK_EXT.has(path.extname(entry.name))) continue;
    scanned++;
    const text = await readFile(full, "utf8");
    for (const domain of BANNED) {
      if (text.includes(domain)) {
        hits.push(`${path.relative(DIST, full)} → ${domain}`);
      }
    }
  }
}

try {
  await stat(DIST);
} catch {
  console.error("✗ 找不到 dist/，先跑 npm run build");
  process.exit(1);
}

await walk(DIST);

if (hits.length) {
  console.error("✗ 产物里发现外链图片域名（素材没有自托管）：");
  for (const h of hits) console.error("   " + h);
  process.exit(1);
}
console.log(`✓ 产物检查通过：${scanned} 个文件，无外链图片域名`);
