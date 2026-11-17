#!/usr/bin/env node
/**
 * 给两个仓库添加 MIT LICENSE。
 *
 * 用法（任选一种提供 token）：
 *   GITHUB_TOKEN=xxx node scripts/add-license.mjs
 *   或把 token 写进文件：echo 'xxx' > /tmp/gh_token && node scripts/add-license.mjs
 *
 * token 需要 repo 权限（classic PAT 勾 repo，或 fine-grained 勾 Contents: Read and write）。
 * 脚本是幂等的：仓库里已有 LICENSE 就跳过，不会覆盖。
 */

import { readFile, access } from "node:fs/promises";

const OWNER = "CuriousLearnerDev";
const REPOS = ["kali-linux-kde-beautify", "kali-linux-i3wm-beautify"];
const COPYRIGHT = "Copyright (c) 2021-2026 W啥都学 (CuriousLearnerDev)";

const MIT = `MIT License

${COPYRIGHT}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

async function getToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN.trim();
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN.trim();
  try {
    return (await readFile("/tmp/gh_token", "utf8")).trim();
  } catch {
    console.error(
      "✗ 没有 token。请设置 GITHUB_TOKEN，或把 token 写进 /tmp/gh_token",
    );
    process.exit(1);
  }
}

const token = await getToken();
const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "User-Agent": "kali-custom-lab-license-script",
  "X-GitHub-Api-Version": "2022-11-28",
};

async function api(path, init = {}) {
  const res = await fetch(`https://api.github.com${path}`, { headers, ...init });
  const body = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(`${path} → ${res.status} ${body?.message ?? res.statusText}`);
  }
  return body;
}

// 先验证 token 和权限
const me = await api("/user");
console.log(`已认证：${me.login}`);

let created = 0;
let skipped = 0;

for (const repo of REPOS) {
  const base = `/repos/${OWNER}/${repo}`;
  const info = await api(base);
  const branch = info.default_branch;

  // 已存在就跳过
  try {
    await api(`${base}/contents/LICENSE`);
    console.log(`· ${repo}：已有 LICENSE，跳过`);
    skipped++;
    continue;
  } catch (err) {
    if (!String(err.message).includes("404")) throw err;
  }

  await api(`${base}/contents/LICENSE`, {
    method: "PUT",
    body: JSON.stringify({
      message: "Add MIT License",
      content: Buffer.from(MIT, "utf8").toString("base64"),
      branch,
    }),
  });

  console.log(`✓ ${repo}：已添加 MIT LICENSE（分支 ${branch}）`);
  created++;
}

console.log(`\n完成：新增 ${created} 个，跳过 ${skipped} 个。`);
if (created > 0) {
  console.log("下一步：npm run data:sync 刷新站点快照，然后告诉我，我更新站点文案。");
}
