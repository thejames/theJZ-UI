// Bumps the npm placeholder semver, computes the next calver git tag,
// appends a row to the README version map, commits, and tags.
//
// Versioning scheme — two tracks in lockstep:
//
//   Git tag (human identity):  vYYYY.MMDD[letter]
//     v2026.0510   — first release on May 10, 2026
//     v2026.0510a  — second release the same day
//     v2026.0510b  — third, etc.
//
//   npm version (registry id): 0.0.N (patch bump per release)
//
//   The README "Version map" table records the correspondence.
//
// Why dual-track: npm's registry enforces semver — leading zeros (0510) and
// alphanumeric mid-components (0510a) are rejected at publish time. Calver
// gives readable date identity in git; npm gets a registry-compatible
// placeholder.
//
// Usage:
//   pnpm release                              # bump + commit + tag
//   git push --follow-tags && npm publish     # push the tag, then publish
//
// prepublishOnly in package.json runs `pnpm build` before any npm publish,
// so dist/ is always fresh on the registry.

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const PKG_PATH = path.resolve("package.json");
const README_PATH = path.resolve("README.md");
const SHOWCASE_PATH = path.resolve("showcase/page.tsx");
const VERSION_MAP_MARKER = "<!-- version-map-rows -->";

function todayParts() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return { year: d.getFullYear(), mmdd: `${mm}${dd}` };
}

function nextCalverTag(today) {
  const prefix = `v${today.year}.${today.mmdd}`;
  let tags = "";
  try {
    tags = execSync(`git tag --list "${prefix}*"`, { encoding: "utf8" }).trim();
  } catch {
    tags = "";
  }
  if (!tags) return prefix;

  // -1 means only the suffixless tag exists (next gets "a"); otherwise the
  // letter charcode of the highest used suffix (next is +1).
  let maxCode = "a".charCodeAt(0) - 1;
  let suffixlessExists = false;
  for (const t of tags.split("\n")) {
    if (t === prefix) {
      suffixlessExists = true;
      continue;
    }
    const m = t.match(/^v\d+\.\d+([a-z])$/);
    if (m && m[1].charCodeAt(0) > maxCode) maxCode = m[1].charCodeAt(0);
  }

  if (!suffixlessExists && maxCode === "a".charCodeAt(0) - 1) {
    // Tags matched the prefix but none were the bare prefix or [a-z]-suffixed.
    // Don't try to be clever — bail.
    throw new Error(
      `Found tags matching ${prefix}* but none in expected format. Investigate.`,
    );
  }

  const next = String.fromCharCode(maxCode + 1);
  if (next > "z") {
    throw new Error(
      `Already at suffix 'z' for ${prefix}. Either it's a wild day or the script needs extension.`,
    );
  }
  return `${prefix}${next}`;
}

function nextNpmVersion(currentVersion) {
  const m = currentVersion.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!m) throw new Error(`Cannot parse npm version: ${currentVersion}`);
  return `${m[1]}.${m[2]}.${Number(m[3]) + 1}`;
}

function updateShowcaseBadge(calverTag) {
  const showcase = fs.readFileSync(SHOWCASE_PATH, "utf8");
  // The version Badge in showcase/page.tsx renders the calver tag so anyone
  // viewing the showcase (locally or copy-pasted into a consumer app) sees
  // which package version they're looking at. Match the badge by its
  // surrounding markup, not just the version string, to avoid replacing
  // unrelated v-prefixed identifiers.
  const re = /(<Badge variant="accent" soft>)v\d{4}\.\d{4}[a-z]?(<\/Badge>)/;
  if (!re.test(showcase)) {
    throw new Error(
      `Could not find version Badge in ${SHOWCASE_PATH}. Cannot update.`,
    );
  }
  fs.writeFileSync(
    SHOWCASE_PATH,
    showcase.replace(re, `$1${calverTag}$2`),
  );
}

function appendReadmeRow(calverTag, npmVersion) {
  const readme = fs.readFileSync(README_PATH, "utf8");
  if (!readme.includes(VERSION_MAP_MARKER)) {
    throw new Error(
      `README is missing the marker ${VERSION_MAP_MARKER}. Cannot update version map.`,
    );
  }
  const row = `| \`${calverTag}\` | \`${npmVersion}\` |`;
  fs.writeFileSync(
    README_PATH,
    readme.replace(VERSION_MAP_MARKER, `${VERSION_MAP_MARKER}\n${row}`),
  );
}

function main() {
  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, "utf8"));
  const today = todayParts();
  const calverTag = nextCalverTag(today);
  const npmVersion = nextNpmVersion(pkg.version);

  pkg.version = npmVersion;
  fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + "\n");
  appendReadmeRow(calverTag, npmVersion);
  updateShowcaseBadge(calverTag);

  execSync(
    `git add ${PKG_PATH} ${README_PATH} ${SHOWCASE_PATH}`,
    { stdio: "inherit" },
  );
  execSync(
    `git commit -m "chore: release ${calverTag} (npm ${npmVersion})"`,
    { stdio: "inherit" },
  );
  // Annotated tag (-a) so that `git push --follow-tags` will push it.
  // Lightweight tags are filtered out by --follow-tags and would otherwise
  // need a separate `git push origin <tag>`.
  execSync(
    `git tag -a ${calverTag} -m "Release ${calverTag} (npm ${npmVersion})"`,
    { stdio: "inherit" },
  );

  console.log(
    `\nReleased ${calverTag} (npm ${npmVersion}). Push with:\n  git push --follow-tags && npm publish\n`,
  );
}

main();
