/**
 * 站点元信息与固定文案。
 * 内容本体在 site.json（后台可编辑）；导航结构属于代码，留在本文件。
 */

import raw from "./site.json";

export interface SiteMeta {
  name: string;
  shortName: string;
  url: string;
  lang: string;
  tagline: string;
  description: string;
  author: { name: string; handle: string; url: string; blog: string };
  githubOrg: string;
}

export interface Disclaimer {
  short: string;
  affiliation: string;
  license: string;
  usage: string;
  screenshots: string;
}

export const SITE = raw.SITE as SiteMeta;
export const DISCLAIMER = raw.DISCLAIMER as Disclaimer;

export const NAV = [
  { href: "/", label: "首页" },
  { href: "/products/kde/", label: "KDE 版" },
  { href: "/products/i3wm/", label: "i3wm 版" },
  { href: "/download/", label: "下载" },
  { href: "/docs/", label: "文档" },
  { href: "/about/", label: "关于" },
] as const;

/** GitHub 快照超过这个天数就在页面与构建日志里提示更新 */
export const SNAPSHOT_STALE_DAYS = 45;
