#!/usr/bin/env node
/**
 * 生成 1200×630 的 OG 分享图（构建期一次性产物，不进运行时）。
 * 用法：node scripts/gen-og.mjs
 * 依赖系统里装有 Noto Sans SC（Kali 默认有 fonts-noto-cjk）。
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join(process.cwd(), "public", "og");

const PAGES = [
  { file: "home.png", kicker: "KALI CUSTOM LAB", title: "把 Kali 桌面做成你每天愿意用的样子", sub: "KDE Plasma 6.7 版 V5 · i3wm 版 · 八年打磨" },
  { file: "kde.png", kicker: "KDE 魔改版 V5", title: "Plasma 6.7 · fcitx5 输入法 · 工具集成", sub: "Kali Linux 2026.3 · 内核 7.1.5 · BIOS" },
  { file: "i3wm.png", kicker: "i3wm 魔改版", title: "超轻量平铺桌面，全键盘工作流", sub: "Kali Linux 2023.3 · 已归档" },
  { file: "download.png", kicker: "下载中心", title: "全部版本与网盘渠道", sub: "V5 / V4 / V3 / V2 / i3wm · 完整版与系统版" },
  { file: "docs.png", kicker: "文档中心", title: "从选版本到排错的全流程", sub: "8 篇文档 · 依据 README 与真实 issue" },
  { file: "about.png", kicker: "关于项目", title: "一个人维护了八年的桌面项目", sub: "CuriousLearnerDev · W啥都学" },
];

const escapeXml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * 中英混排折行：按显示宽度计算（汉字算 2），并且只在空格 / 分隔符处断行，
 * 避免把 fcitx5 这种英文单词劈成两半。
 */
function wrapTitle(text, limit = 30) {
  const isWide = (ch) => /[\u3000-\u303f\u4e00-\u9fff\uff00-\uffef]/.test(ch);
  const widthOf = (s) => [...s].reduce((n, ch) => n + (isWide(ch) ? 2 : 1), 0);

  const lines = [];
  let line = "";
  let lastBreak = -1;

  for (const ch of text) {
    line += ch;
    if (ch === " " || ch === "·" || ch === "，") lastBreak = line.length;

    if (widthOf(line) > limit) {
      if (lastBreak > 0) {
        lines.push(line.slice(0, lastBreak).trim());
        line = line.slice(lastBreak).trimStart();
      } else {
        lines.push(line.trim());
        line = "";
      }
      lastBreak = -1;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

function svg({ kicker, title, sub }) {
  const lines = wrapTitle(title);

  const titleSvg = lines
    .map(
      (l, i) =>
        `<text x="88" y="${272 + i * 84}" font-family="Noto Sans SC, sans-serif" font-size="68" font-weight="700" fill="#0b1524">${escapeXml(l)}</text>`,
    )
    .join("");

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4f6fb"/>
      <stop offset="1" stop-color="#e8edf7"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#2c9be6" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#2c9be6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.26"/>
      <stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1278c4"/>
      <stop offset="0.58" stop-color="#2c9be6"/>
      <stop offset="1" stop-color="#8b5cf6"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1010" cy="80" r="380" fill="url(#g2)"/>
  <circle cx="180" cy="600" r="420" fill="url(#g1)"/>


  <text x="160" y="118" font-family="Noto Sans SC, sans-serif" font-size="24" font-weight="500" fill="#51637a" letter-spacing="4">${escapeXml(kicker)}</text>

  ${titleSvg}

  <text x="88" y="${272 + lines.length * 84 + 26}" font-family="Noto Sans SC, sans-serif" font-size="26" fill="#51637a">${escapeXml(sub)}</text>

  <rect x="88" y="${272 + lines.length * 84 + 62}" width="72" height="5" rx="2.5" fill="#2c9be6"/>
  <text x="88" y="576" font-family="Noto Sans SC, sans-serif" font-size="21" fill="#6c7f96">kali custom lab · kali-linux-kde-beautify / kali-linux-i3wm-beautify</text>
</svg>`;
}

const LOGO = path.join(process.cwd(), "public", "brand", "logo.png");

async function main() {
  await mkdir(OUT, { recursive: true });
  // 站点 logo（卡通头像）先缩放到 OG 图上的尺寸
  const logo = await sharp(LOGO).resize(64, 64).toBuffer();

  for (const page of PAGES) {
    const buf = Buffer.from(svg(page));
    await sharp(buf)
      .composite([{ input: logo, top: 74, left: 88 }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUT, page.file));
    console.log(`✓ public/og/${page.file}`);
  }
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
