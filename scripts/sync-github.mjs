#!/usr/bin/env node
/**
 * 同步 GitHub 公开数据到本地快照（src/data/github.snapshot.json）。
 *
 * 为什么要快照而不是构建时直接请求：
 *   1. 构建必须离线可重复，不能依赖 GitHub 可达性；
 *   2. 匿名 API 限流 60 次/小时，不够一次全量同步；
 *   3. 页面需要一个明确的「数据截止时间」，避免把缓存当实时。
 *
 * 用法：
 *   GITHUB_TOKEN=xxx npm run data:sync
 *   （国内网络如需代理：HTTPS_PROXY=http://127.0.0.1:7897 NODE_USE_ENV_PROXY=1 npm run data:sync）
 *
 * 失败策略：任一关键请求失败则整体失败，绝不写入空数据或覆盖旧快照。
 */

import { writeFile, rename, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OWNER = "CuriousLearnerDev";
const REPOS = {
  kde: "kali-linux-kde-beautify",
  i3: "kali-linux-i3wm-beautify",
};

const OUT = path.resolve("src/data/github.snapshot.json");
const TMP = `${OUT}.tmp`;

const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.warn(
    "⚠  未设置 GITHUB_TOKEN，将以匿名方式请求（60 次/小时，可能失败）",
  );
}

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "kali-custom-lab-site",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function gh(pathname, { retries = 3 } = {}) {
  const url = `https://api.github.com${pathname}`;
  let lastErr;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers,
        signal: AbortSignal.timeout(30_000),
      });
      if (res.status === 404) return null;
      if (!res.ok) {
        throw new Error(`${pathname} → ${res.status} ${res.statusText}`);
      }
      return await res.json();
    } catch (err) {
      lastErr = err;
      const wait = 1200 * (attempt + 1);
      console.warn(`  重试 ${attempt + 1}/${retries} ${pathname}：${err.message}`);
      await sleep(wait);
    }
  }
  throw lastErr;
}

function pickRepo(r) {
  if (!r) return null;
  return {
    full_name: r.full_name,
    description: r.description,
    html_url: r.html_url,
    homepage: r.homepage || null,
    stars: r.stargazers_count,
    forks: r.forks_count,
    open_issues: r.open_issues_count,
    watchers: r.subscribers_count,
    created_at: r.created_at,
    pushed_at: r.pushed_at,
    default_branch: r.default_branch,
    license: r.license?.spdx_id ?? null,
    topics: r.topics ?? [],
  };
}

function pickRelease(r) {
  return {
    tag: r.tag_name,
    name: r.name,
    published_at: r.published_at,
    html_url: r.html_url,
    draft: r.draft,
    prerelease: r.prerelease,
    /** 如实保留空值：本项目两个 release 都没有说明与附件 */
    body_length: (r.body ?? "").length,
    assets: (r.assets ?? []).map((a) => ({
      name: a.name,
      size: a.size,
      download_count: a.download_count,
      browser_download_url: a.browser_download_url,
      digest: a.digest ?? null,
    })),
  };
}

function pickCommit(c) {
  return {
    sha: c.sha?.slice(0, 7),
    message: (c.commit?.message ?? "").split("\n")[0],
    date: c.commit?.author?.date ?? c.commit?.committer?.date ?? null,
    html_url: c.html_url,
  };
}

function pickIssue(i) {
  return {
    number: i.number,
    title: i.title,
    state: i.state,
    comments: i.comments,
    created_at: i.created_at,
    html_url: i.html_url,
    is_pull_request: Boolean(i.pull_request),
  };
}

async function main() {
  console.log(`同步 ${OWNER} 的仓库数据…`);
  const fetchedAt = new Date().toISOString();

  const author = await gh(`/users/${OWNER}`);
  if (!author) throw new Error(`找不到用户 ${OWNER}`);

  const repos = {};
  for (const [key, name] of Object.entries(REPOS)) {
    console.log(`  · ${name}`);
    const [repo, releases, commits] = await Promise.all([
      gh(`/repos/${OWNER}/${name}`),
      gh(`/repos/${OWNER}/${name}/releases?per_page=20`),
      gh(`/repos/${OWNER}/${name}/commits?per_page=5`),
    ]);
    // issue 列表失败不致命，但要让页面知道「没取到」而不是「没有 issue」
    let issues = null;
    try {
      const raw = await gh(
        `/repos/${OWNER}/${name}/issues?state=all&per_page=100`,
      );
      issues = Array.isArray(raw) ? raw.filter((i) => !i.pull_request) : [];
    } catch (err) {
      console.warn(`  ! ${name} 的 issue 列表同步失败：${err.message}`);
    }

    repos[key] = {
      ...pickRepo(repo),
      releases: (releases ?? []).map(pickRelease),
      releases_ok: Array.isArray(releases),
      commits: (commits ?? []).map(pickCommit),
      commits_ok: Array.isArray(commits),
      issues: issues ? issues.map(pickIssue) : null,
      issues_ok: issues !== null,
    };
  }

  const allRepos = await gh(`/users/${OWNER}/repos?per_page=100&sort=updated`);
  const otherRepos = (allRepos ?? [])
    .filter(
      (r) => !Object.values(REPOS).includes(r.name) && !r.fork && !r.archived,
    )
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((r) => ({
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      stars: r.stargazers_count,
      forks: r.forks_count,
      language: r.language,
      pushed_at: r.pushed_at,
    }));

  const snapshot = {
    fetchedAt,
    owner: OWNER,
    author: {
      login: author.login,
      name: author.name,
      bio: author.bio,
      blog: author.blog,
      followers: author.followers,
      following: author.following,
      public_repos: author.public_repos,
      created_at: author.created_at,
      html_url: author.html_url,
      avatar_url: author.avatar_url,
    },
    repos,
    otherRepos,
  };

  // 基本完整性校验：没有这两个仓库就说明数据不对，宁可失败也不写坏快照
  if (!snapshot.repos.kde?.full_name || !snapshot.repos.i3?.full_name) {
    throw new Error("快照缺少必要的仓库字段，已中止（旧快照未被覆盖）");
  }

  let previous = null;
  if (existsSync(OUT)) {
    try {
      previous = JSON.parse(await readFile(OUT, "utf8"));
    } catch {
      previous = null;
    }
  }

  await writeFile(TMP, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  await rename(TMP, OUT);

  const summary = [
    `  作者：${snapshot.author.name ?? snapshot.author.login} · ${snapshot.author.followers} followers`,
    `  KDE：${snapshot.repos.kde.stars}★ / ${snapshot.repos.kde.forks} fork / ${snapshot.repos.kde.releases.length} release / ${snapshot.repos.kde.issues?.length ?? "?"} issue`,
    `  i3：${snapshot.repos.i3.stars}★ / ${snapshot.repos.i3.forks} fork / ${snapshot.repos.i3.releases.length} release / ${snapshot.repos.i3.issues?.length ?? "?"} issue`,
  ];
  console.log(`✓ 已写入 ${path.relative(process.cwd(), OUT)}`);
  console.log(summary.join("\n"));

  if (previous?.fetchedAt) {
    const days = Math.round(
      (Date.parse(fetchedAt) - Date.parse(previous.fetchedAt)) / 86_400_000,
    );
    console.log(`  距上次同步 ${days} 天`);
  }
}

main().catch((err) => {
  console.error(`✗ 同步失败：${err.message}`);
  console.error("  旧快照保持不变，构建仍然可用。");
  process.exit(1);
});
