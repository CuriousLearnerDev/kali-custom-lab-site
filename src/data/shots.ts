import type { ImageMetadata } from "astro";
import meta from "./shots.meta.json";

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

export interface Shot {
  slug: string;
  group: string;
  category: ShotCategory;
  product: "kde" | "i3";
  version: "v2" | "v3" | "v4" | "i3";
  alt: string;
  caption: string;
  sourceRef: string;
  usedOn: string[];
  thin: boolean;
  width: number;
  height: number;
  image: ImageMetadata;
}

/**
 * 图片用 import.meta.glob 静态引入，Astro 才能拿到真实宽高并生成多尺寸产物。
 * 尺寸来自 shots.meta.json（由 fetch-assets 用 sharp 读出，不手抄）。
 */
const modules = import.meta.glob<ImageMetadata>(
  "../assets/screens/*/*.webp",
  { eager: true, import: "default" },
);

const bySlug = new Map<string, ImageMetadata>();
for (const [file, image] of Object.entries(modules)) {
  const slug = file.split("/").pop()?.replace(/\.webp$/, "");
  if (slug) bySlug.set(slug, image);
}

export const SHOTS: Shot[] = meta.items.map((item) => {
  const image = bySlug.get(item.slug);
  if (!image) {
    throw new Error(
      `素材缺失：manifest 里有 ${item.slug}，但 src/assets/screens 下找不到对应 webp。请运行 npm run assets:fetch`,
    );
  }
  return { ...item, category: item.category as ShotCategory, image } as Shot;
});

export const SHOTS_BY_SLUG = new Map(SHOTS.map((s) => [s.slug, s]));

export function shot(slug: string): Shot {
  const found = SHOTS_BY_SLUG.get(slug);
  if (!found) {
    throw new Error(
      `未知素材 slug: ${slug}（可用：${SHOTS.map((s) => s.slug).join(", ")}）`,
    );
  }
  return found;
}

/** 按 slug 列表取素材，顺序保持不变 */
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
