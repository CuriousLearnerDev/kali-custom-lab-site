/**
 * 快捷键表。本体在 shortcuts.json（后台可编辑）。
 * KDE 部分来自作者发布说明；i3 部分来自 i3wm 仓库 README 的两张表。
 */

import raw from "./shortcuts.json";

export interface Shortcut {
  keys: string;
  action: string;
}

export const KDE_SHORTCUTS = raw.KDE_SHORTCUTS as Shortcut[];
export const I3_BASIC_SHORTCUTS = raw.I3_BASIC_SHORTCUTS as Shortcut[];
export const I3_CUSTOM_SHORTCUTS = raw.I3_CUSTOM_SHORTCUTS as Shortcut[];

export const I3_MOD_NOTE =
  "i3 里 $mod 对应键盘上的 Alt 键；方向键和 vi 一样：j 左、k 下、l 上、; 右。";
