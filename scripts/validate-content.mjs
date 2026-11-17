#!/usr/bin/env node
/**
 * 内容与素材校验。CI 与 prebuild 都会跑，失败即中止构建。
 *
 * 检查项：
 *   1. 每个下载条目都有溯源、体积、提取码，且 URL 主机在白名单内；
 *   2. 源码里不允许残留外链图片（必须自托管）；
 *   3. 字体文件齐全；
 *   4. FAQ / 数据 id 唯一、互不矛盾；
 *   5. GitHub 快照是否过期（只警告不阻断）。
 */

import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const errors = [];
const warnings = [];

const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

async function walk(dir, exts, acc = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", "dist", ".astro", ".cache"].includes(entry.name)) continue;
      await walk(full, exts, acc);
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      acc.push(full);
    }
  }
  return acc;
}

// ---------- 1 & 4：数据文件 ----------
// 数据已迁到 JSON，直接读文件（不再走 TS 模块，避免 Node 的 JSON 导入限制）
const readData = async (name) =>
  JSON.parse(await readFile(path.join(ROOT, "src/data", `${name}.json`), "utf8"));

const { EDITIONS } = await readData("downloads");
const { VERSIONS } = await readData("versions");
const { FAQ } = await readData("faq");

// 允许的网盘（与 downloads.ts 里的 PROVIDERS 保持一致）
const VALID_PROVIDERS = new Set(["quark", "baidu", "tianyi"]);

// 素材清单直接读 JSON（不走 shots.ts，避免依赖 Astro 的图片 glob）
const shotMeta = JSON.parse(
  await readFile(path.join(ROOT, "src/data/shots.meta.json"), "utf8"),
);
const SHOTS = shotMeta.items;

const ALLOWED_HOSTS = new Set(["pan.quark.cn", "pan.baidu.com", "cloud.189.cn"]);

for (const edition of EDITIONS) {
  const where = `edition "${edition.id}"`;
  if (!edition.archiveSize) fail(`${where} 缺少压缩包大小`);
  if (!edition.extractedSize) fail(`${where} 缺少解压后大小`);
  const pending = edition.status === "pending";
  if (!pending && !edition.channels?.length) {
    fail(`${where} 没有任何下载渠道（若尚未发布请标 status: "pending"）`);
  }
  if (pending && edition.channels?.length) {
    warn(`${where} 标记为待发布，却配置了下载渠道`);
  }
  if (!VERSIONS.some((v) => v.id === edition.versionId)) {
    fail(`${where} 的 versionId "${edition.versionId}" 不存在于 versions.ts`);
  }
  for (const channel of edition.channels ?? []) {
    if (!VALID_PROVIDERS.has(channel.provider)) {
      fail(`${where} 使用了未定义的网盘 ${channel.provider}`);
    }
    let url;
    try {
      url = new URL(channel.url);
    } catch {
      fail(`${where} 的下载地址不是合法 URL：${channel.url}`);
      continue;
    }
    if (!ALLOWED_HOSTS.has(url.hostname)) {
      fail(`${where} 的下载地址主机不在白名单：${url.hostname}`);
    }
    if (!channel.code) warn(`${where} 的 ${channel.provider} 渠道没有提取码，请确认确实不需要`);
    if (!channel.source) fail(`${where} 的 ${channel.provider} 渠道缺少溯源 source`);
  }
}

const faqIds = new Set();
for (const entry of FAQ) {
  if (faqIds.has(entry.id)) fail(`FAQ id 重复：${entry.id}`);
  faqIds.add(entry.id);
  if (!entry.question?.trim()) fail(`FAQ ${entry.id} 没有问题文本`);
  if (!entry.answer?.trim()) fail(`FAQ ${entry.id} 没有回答文本`);
  if (!entry.relatedIssues?.length) warn(`FAQ ${entry.id} 没有关联 issue，缺乏可追溯来源`);
}

// ---------- 素材 ----------
if (!SHOTS.length) fail("没有加载到任何素材");
for (const s of SHOTS) {
  if (!s.alt?.trim()) fail(`素材 ${s.slug} 缺少 alt`);
  if (!s.caption?.trim()) fail(`素材 ${s.slug} 缺少 caption`);
  if (!s.width || !s.height) fail(`素材 ${s.slug} 缺少真实宽高`);
  try {
    await stat(path.join(ROOT, "src/assets/screens", s.group, `${s.slug}.webp`));
  } catch {
    fail(`素材文件缺失：src/assets/screens/${s.group}/${s.slug}.webp`);
  }
}

// ---------- 2：源码里不能有外链图片 ----------
const sourceFiles = await walk(path.join(ROOT, "src"), [
  ".astro",
  ".ts",
  ".tsx",
  ".mdx",
  ".json",
  ".css",
]);
for (const file of sourceFiles) {
  const text = await readFile(file, "utf8");
  for (const domain of ["myqcloud.com", "raw.githubusercontent.com"]) {
    if (text.includes(domain)) {
      fail(
        `源码中残留外链图片域名 ${domain}：${path.relative(ROOT, file)}（素材必须自托管）`,
      );
    }
  }
}

// ---------- 3：字体 ----------
const fontDir = path.join(ROOT, "public/fonts");
const requiredFonts = [
  "SpaceGrotesk-Subset.woff2",
  "IBMPlexMono-Regular.woff2",
  "IBMPlexMono-Medium.woff2",
  "IBMPlexMono-SemiBold.woff2",
  "NotoSansSC-400.woff2",
  "NotoSansSC-500.woff2",
  "NotoSansSC-600.woff2",
];
for (const font of requiredFonts) {
  try {
    const info = await stat(path.join(fontDir, font));
    if (info.size < 1000) fail(`字体文件异常（过小）：${font}`);
  } catch {
    fail(`缺少字体文件 public/fonts/${font}（先跑 npm run fonts:subset）`);
  }
}
for (const license of ["OFL-NotoSansSC.txt", "OFL-IBMPlexMono.txt", "OFL-SpaceGrotesk.txt"]) {
  try {
    await stat(path.join(fontDir, license));
  } catch {
    fail(`缺少字体许可文件 public/fonts/${license}`);
  }
}

// ---------- 5：快照新鲜度 ----------
const snapshot = JSON.parse(
  await readFile(path.join(ROOT, "src/data/github.snapshot.json"), "utf8"),
);
const ageDays = Math.round(
  (Date.now() - Date.parse(snapshot.fetchedAt)) / 86_400_000,
);
if (ageDays > 45) {
  warn(
    `GitHub 快照已 ${ageDays} 天未更新，运行 npm run data:sync 刷新（页面会显示快照日期，不影响构建）`,
  );
}

// ---------- 输出 ----------
for (const w of warnings) console.warn(`⚠  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`\n校验失败：${errors.length} 个问题`);
  process.exit(1);
}
console.log(
  `✓ 内容校验通过（${EDITIONS.length} 个下载条目 · ${FAQ.length} 条 FAQ · ${SHOTS.length} 张素材 · 快照 ${ageDays} 天）`,
);
