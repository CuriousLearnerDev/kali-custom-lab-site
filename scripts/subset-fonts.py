#!/usr/bin/env python3
"""
按全站实际文案子集化 Noto Sans SC，输出 public/fonts/NotoSansSC-{400,500,600}.woff2。

为什么必须每次重跑：子集是按"当前文案用到的字"裁的，改文案后不重跑就会出现
方框字（豆腐块）。prebuild 会自动执行本脚本。

用法：
    python3 scripts/subset-fonts.py
    python3 scripts/subset-fonts.py --check     # 只检查缺字，不写文件
"""

from __future__ import annotations

import argparse
import sys
import unicodedata
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.subset import Options, Subsetter

ROOT = Path(__file__).resolve().parent.parent
FONT_OUT = ROOT / "public" / "fonts"
WEIGHTS = (400, 500, 600)

SOURCE_CANDIDATES = [
    ROOT / ".cache" / "fonts" / "NotoSansSC-VF.ttf",
    Path("/usr/share/fonts/truetype/winfonts/NotoSansSC-VF.ttf"),
]

TEXT_GLOBS = [
    "src/**/*.astro",
    "src/**/*.ts",
    "src/**/*.mdx",
    "src/**/*.json",
    "src/**/*.md",
    "astro.config.mjs",
]
# 说明：只扫描站点自身文案。scripts/readme-snapshot.md 里还有大量不会显示的
# 字符（emoji、工具名），把它们也塞进子集会让每个字重多出近 90KB。

# 永远保留的字符区间：ASCII、通用标点、带圈数字、勾选、几何图形、
# CJK 标点、全角字符、箭头。
# 1.0 的字体漏了 ①②③✓ 和中文标点，这里显式补上。
ALWAYS_RANGES = [
    (0x0020, 0x007E),
    (0x00A0, 0x00FF),
    (0x2190, 0x21FF),
    (0x25A0, 0x25FF),
    (0x2713, 0x2714),
    (0x3000, 0x303F),
    (0xFF00, 0xFFEF),
]
# 带圈数字单独给（字体里有就带上，没有也不报错）
EXTRA_RANGES = [(0x2460, 0x2473), (0x2022, 0x2022), (0x00B7, 0x00B7)]


def collect_text() -> str:
    chunks: list[str] = []
    for pattern in TEXT_GLOBS:
        for path in sorted(ROOT.glob(pattern)):
            if path.is_file():
                try:
                    chunks.append(path.read_text(encoding="utf-8", errors="ignore"))
                except OSError:
                    continue
    return "\n".join(chunks)


def is_renderable(ch: str) -> bool:
    """排除空白、控制符、零宽等不需要字形的字符。"""
    cat = unicodedata.category(ch)
    return cat not in {"Cc", "Cf", "Zs", "Zl", "Zp", "Co", "Cs"}


def text_codepoints(text: str) -> set[int]:
    return {ord(ch) for ch in text if is_renderable(ch)}


def wanted_codepoints(text_cps: set[int]) -> set[int]:
    codepoints = set(text_cps)
    for start, end in ALWAYS_RANGES + EXTRA_RANGES:
        codepoints.update(range(start, end + 1))
    return codepoints


def find_source() -> Path:
    for candidate in SOURCE_CANDIDATES:
        if candidate.exists():
            return candidate
    sys.exit(
        "✗ 找不到 Noto Sans SC 可变字体。请把 NotoSansSC-VF.ttf 放到 "
        f"{SOURCE_CANDIDATES[0]}，或安装 fonts-noto-cjk。"
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="只检查缺字")
    args = parser.parse_args()

    source = find_source()
    text = collect_text()
    text_cps = text_codepoints(text)
    codepoints = wanted_codepoints(text_cps)
    cjk = sum(1 for cp in text_cps if 0x4E00 <= cp <= 0x9FFF)

    print(f"源字体：{source}")
    print(
        f"文案：{len(text):,} 字符 / 唯一码位 {len(text_cps):,}（汉字 {cjk:,}）"
        f" · 子集目标 {len(codepoints):,} 码位"
    )

    cmap = TTFont(source, fontNumber=0).getBestCmap()
    missing = [cp for cp in sorted(text_cps) if cp not in cmap]
    if missing:
        print(f"⚠ 源字体缺少 {len(missing)} 个文案字符（这些字会回退系统字体）：")
        for cp in missing[:20]:
            print(f"    U+{cp:04X}  {chr(cp)}")
        if len(missing) > 20:
            print(f"    …另有 {len(missing) - 20} 个")
    else:
        print("✓ 源字体覆盖全部文案字符")

    if args.check:
        return

    FONT_OUT.mkdir(parents=True, exist_ok=True)
    for weight in WEIGHTS:
        font = TTFont(source, fontNumber=0)
        instance = instancer.instantiateVariableFont(
            font, {"wght": weight}, inplace=False
        )
        instance["name"].setName(f"Noto Sans SC {weight}", 4, 3, 1, 0x409)

        opts = Options()
        opts.flavor = "woff2"
        opts.desubroutinize = True
        opts.hinting = False
        opts.layout_features = ["*"]
        opts.notdef_outline = True
        opts.recalc_bounds = True
        opts.drop_tables += ["DSIG"]

        subsetter = Subsetter(options=opts)
        subsetter.populate(unicodes=sorted(codepoints))
        subsetter.subset(instance)

        out = FONT_OUT / f"NotoSansSC-{weight}.woff2"
        instance.flavor = "woff2"
        instance.save(str(out))
        print(f"  → public/fonts/{out.name}  {out.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    main()
