// Bumps package.json to the next date-based version, commits the change,
// and creates a matching git tag.
//
// Versioning scheme (see MEMORY for full doc):
//   YYYY.MMDD          — first release of a given day
//   YYYY.MMDDa         — second release of the same day
//   YYYY.MMDDb         — third, and so on (a..z, then aa..az, ba..bz, ...)
//
// Usage:
//   pnpm release
//   git push --follow-tags

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const PKG_PATH = path.resolve("package.json");

function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}${day}`;
}

function nextSuffix(suffix) {
  if (!suffix) return "a";
  const arr = suffix.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "z") {
      arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
      return arr.join("");
    }
    arr[i] = "a";
  }
  return "a" + arr.join("");
}

function computeNext(current, today) {
  const m = String(current || "").match(/^(\d{4}\.\d{4})([a-z]*)$/);
  if (!m || m[1] !== today) return today;
  return today + nextSuffix(m[2]);
}

function main() {
  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, "utf8"));
  const current = pkg.version;
  const today = todayKey();
  const next = computeNext(current, today);

  if (next === current) {
    console.error(`Already at ${current} — no bump produced.`);
    process.exit(1);
  }

  pkg.version = next;
  fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + "\n");

  execSync(`git add ${PKG_PATH}`, { stdio: "inherit" });
  execSync(`git commit -m "chore: release ${next}"`, { stdio: "inherit" });
  execSync(`git tag v${next}`, { stdio: "inherit" });

  console.log(`\nReleased ${next}. Push with:\n  git push --follow-tags\n`);
}

main();
