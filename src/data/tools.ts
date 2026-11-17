/**
 * 外观配置与预装项。本体在 tools.json（后台可编辑）。
 *
 * 注意：V5 起不再预装第三方渗透工具，这里只保留桌面环境相关的配置与预装项。
 */

import raw from "./tools.json";

export interface SpecRow {
  label: string;
  value: string;
}

export interface PresetGroup {
  title: string;
  items: string[];
}

export interface AiScenario {
  title: string;
  prompt: string;
  shots: string[];
  result: string;
}

export const APPEARANCE = raw.APPEARANCE as SpecRow[];
export const PRESETS = raw.PRESETS as PresetGroup[];
export const AI_SCENARIOS = raw.AI_SCENARIOS as AiScenario[];

export const BILIBILI_TUTORIAL = "https://www.bilibili.com/video/BV1UJCcYcEuL/";
