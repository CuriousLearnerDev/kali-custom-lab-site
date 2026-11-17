/**
 * 截图注册表。
 *
 * 元数据（slug / alt / caption / 分类）在 shots.json —— 后台可编辑。
 * 图片文件放 src/assets/screens/<slug>.webp，宽高由 Astro 从文件本身读取，
 * 不再单独维护一份尺寸清单。
 */

import type { ImageMetadata } from "astro";
import registry from "./shots.json";

export type ShotCategory =
  | "desktop"
  | "terminal"
  | "ai"
  | "tools"
  | "system"
  | "login"
  | "boot"
  | "launcher"
  | "brand";

interface ShotRecord {
  slug: string;
  category: string;
  product: string;
  version: string;
  alt: string;
  caption: string;
  sourceRef: string;
  usedOn: string[];
  thin: boolean;
  sourceUrl?: string;
}

export interface Shot {
  slug: string;
  category: ShotCategory;
  product: "kde" | "i3";
  version: string;
  alt: string;
  caption: string;
  sourceRef: string;
  usedOn: string[];
  thin: boolean;
  width: number;
  height: number;
  image: ImageMetadata;
}

const modules = import.meta.glob<ImageMetadata>("../assets/screens/*.webp", {
  eager: true,
  import: "default",
});

const bySlug = new Map<string, ImageMetadata>();
for (const [file, image] of Object.entries(modules)) {
  const slug = file.split("/").pop()?.replace(/\.webp$/, "");
  if (slug) bySlug.set(slug, image);
}

export const SHOTS: Shot[] = (registry.SHOTS as ShotRecord[]).map((item) => {
  const image = bySlug.get(item.slug);
  if (!image) {
    throw new Error(
      `截图文件缺失：shots.json 里有 "${item.slug}"，但 src/assets/screens/${item.slug}.webp 不存在。` +
        `请把图片放到该路径，或运行 npm run assets:fetch 重新抓取。`,
    );
  }
  return {
    slug: item.slug,
    category: item.category as ShotCategory,
    product: item.product === "i3" ? "i3" : "kde",
    version: item.version,
    alt: item.alt,
    caption: item.caption,
    sourceRef: item.sourceRef,
    usedOn: item.usedOn ?? [],
    thin: Boolean(item.thin),
    width: image.width,
    height: image.height,
    image,
  };
});

export const SHOTS_BY_SLUG = new Map(SHOTS.map((s) => [s.slug, s]));

export function shot(slug: string): Shot {
  const found = SHOTS_BY_SLUG.get(slug);
  if (!found) {
    throw new Error(
      `未知素材 slug: ${slug}（shots.json 里有：${SHOTS.map((s) => s.slug).slice(0, 8).join(", ")} …）`,
    );
  }
  return found;
}

export function shots(slugs: string[]): Shot[] {
  return slugs.map(shot);
}

export function galleryBy(
  predicate: (s: Shot) => boolean,
  limit?: number,
): Shot[] {
  const list = SHOTS.filter(predicate);
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

/** 分类中文名（图集筛选器用） */
export const CATEGORY_LABELS: Record<string, string> = {
  desktop: "桌面",
  terminal: "终端",
  ai: "AI 终端",
  tools: "工具",
  system: "系统",
  login: "登录",
  boot: "启动",
  launcher: "菜单",
  brand: "顶栏",
};
