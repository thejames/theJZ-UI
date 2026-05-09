// Bumps package.json to the next semver-encoded calver version, commits the
// change, and creates a matching git tag.
//
// Versioning scheme:
//   MAJOR.MINOR.PATCH where
//     MAJOR = full year (e.g. 2026)
//     MINOR = month * 100 + day, no leading zeros (e.g. May 9 → 509, Oct 8 → 1008)
//     PATCH = release counter for that day, starts at 1
//
//   Examples:
//     2026.508.1   — first release on May 8, 2026
//     2026.508.2   — second release on the same day
//     2026.509.1   — first release on May 9
//     2026.1008.1  — first release on Oct 8
//
// This format is valid semver (so npm publish accepts it) AND date-encoded
// (so the version itself tells you when it was cut). The same string is
// used for the npm version and the git tag, eliminating dual-track drift.
//
// Usage:
//   pnpm release                              # bump + commit + tag
//   git push --follow-tags && npm publish     # publish (push the tag, then npm)
//
// Note: prepublishOnly in package.json ensures `pnpm build` runs before
// any `npm publish`, so dist/ is always fresh on the registry.
//
// Migration from the old YYYY.MMDD[a-z] calver:
//   v2026.0508  → v2026.508.1
//   v2026.0508a → v2026.508.2
//   v2026.0509a → v2026.509.2

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const PKG_PATH = path.resolve("package.json");

function todayParts() {
  const d = new Date();
  return {
    year: d.getFullYear(),
    md: (d.getMonth() + 1) * 100 + d.getDate(),
  };
}

function highestPatchToday(today) {
  // Source of truth for "what's already been released today" is git tags,
  // not package.json — the latter can drift (e.g. after npm publish bumps
  // version manually) and produce collisions when this script tries to
  // create a tag that already exists.
  try {
    const out = execSync(
      `git tag --list "v${today.year}.${today.md}.*"`,
      { encoding: "utf8" },
    ).trim();
    if (!out) return 0;
    return out
      .split("\n")
      .map((tag) => {
        const m = tag.match(/^v\d+\.\d+\.(\d+)$/);
        return m ? Number(m[1]) : 0;
      })
      .reduce((a, b) => Math.max(a, b), 0);
  } catch {
    return 0;
  }
}

function computeNext(today) {
  return `${today.year}.${today.md}.${highestPatchToday(today) + 1}`;
}

function main() {
  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, "utf8"));
  const current = pkg.version;
  const today = todayParts();
  const next = computeNext(today);

  if (next === current) {
    console.error(`Already at ${current} — no bump produced.`);
    process.exit(1);
  }

  pkg.version = next;
  fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + "\n");

  execSync(`git add ${PKG_PATH}`, { stdio: "inherit" });
  execSync(`git commit -m "chore: release ${next}"`, { stdio: "inherit" });
  execSync(`git tag v${next}`, { stdio: "inherit" });

  console.log(
    `\nReleased ${next}. Push with:\n  git push --follow-tags && npm publish\n`,
  );
}

main();
