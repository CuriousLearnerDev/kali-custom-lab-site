import snapshot from "@/data/github.snapshot.json";
import { SNAPSHOT_STALE_DAYS } from "@/data/site";

export type RepoKey = "kde" | "i3";

export type SnapshotRepo = (typeof snapshot)["repos"]["kde"];
export type SnapshotRelease = SnapshotRepo["releases"][number];
export type SnapshotCommit = SnapshotRepo["commits"][number];
export type SnapshotIssue = NonNullable<SnapshotRepo["issues"]>[number];

export const SNAPSHOT = snapshot;
export const SNAPSHOT_DATE = snapshot.fetchedAt.slice(0, 10);

/** 快照是否已过期（页面与构建日志用来提示重新同步） */
export const SNAPSHOT_STALE =
  (Date.now() - Date.parse(snapshot.fetchedAt)) / 86_400_000 >
  SNAPSHOT_STALE_DAYS;

export function getRepo(key: RepoKey): SnapshotRepo {
  return snapshot.repos[key];
}

export function getReleases(key: RepoKey): SnapshotRelease[] {
  return snapshot.repos[key].releases;
}

export function getReleasesOk(key: RepoKey): boolean {
  return snapshot.repos[key].releases_ok;
}

export function getCommits(key: RepoKey, limit = 3): SnapshotCommit[] {
  return snapshot.repos[key].commits.slice(0, limit);
}

export function getIssues(key: RepoKey): SnapshotIssue[] | null {
  return snapshot.repos[key].issues;
}

export function getAuthor() {
  return snapshot.author;
}

export function getOtherRepos() {
  return snapshot.otherRepos;
}

/**
 * 指标展示：缺失时返回 "—" 而不是 0。
 * "取不到" 与 "真的是 0" 必须能区分开（1.0 站点的教训）。
 */
export function stat(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("zh-CN").format(value);
}

/** 站点合计指标（首页与关于页用） */
export const TOTALS = {
  stars: snapshot.repos.kde.stars + snapshot.repos.i3.stars,
  forks: snapshot.repos.kde.forks + snapshot.repos.i3.forks,
  releases: snapshot.repos.kde.releases.length + snapshot.repos.i3.releases.length,
  openIssues:
    snapshot.repos.kde.open_issues + snapshot.repos.i3.open_issues,
} as const;
