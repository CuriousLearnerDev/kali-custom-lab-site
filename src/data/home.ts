/**
 * 首页图片配置：哪个位置用哪张截图。
 * 数据在 home.json（后台可编辑），值是 shots.json 里的 slug。
 */

import raw from "./home.json";
import { shot, shots, type Shot } from "./shots";

interface HomeConfig {
  HERO: string;
  EDITIONS: { kde: string; i3: string };
  GALLERY: string[];
  AI: { MAIN: string; SECONDARY: string };
  TOPBARS: { PLASMA5: string; PLASMA6: string; PLASMA67: string };
}

const cfg = raw as unknown as HomeConfig;

export const HERO_SHOT: Shot = shot(cfg.HERO);
export const EDITION_SHOTS: Record<"kde" | "i3", Shot> = {
  kde: shot(cfg.EDITIONS.kde),
  i3: shot(cfg.EDITIONS.i3),
};
export const GALLERY_SHOTS: Shot[] = shots(cfg.GALLERY);
export const AI_SHOTS: Record<"MAIN" | "SECONDARY", Shot> = {
  MAIN: shot(cfg.AI.MAIN),
  SECONDARY: shot(cfg.AI.SECONDARY),
};
export const TOPBAR_SHOTS: Record<"PLASMA5" | "PLASMA6" | "PLASMA67", Shot> = {
  PLASMA5: shot(cfg.TOPBARS.PLASMA5),
  PLASMA6: shot(cfg.TOPBARS.PLASMA6),
  PLASMA67: shot(cfg.TOPBARS.PLASMA67),
};
