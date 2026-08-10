/* Static sanity check across both language trees. */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const DIRS = ["", "tr"];
let errors = 0, checked = 0, pages = 0;

const skip = (u) =>
  !u || u.startsWith("http") || u.startsWith("mailto:") || u.startsWith("#") ||
  u.startsWith("//") || u.startsWith("data:") || u === "";

for (const d of DIRS) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) { console.error(`  ✗ missing tree: ${d || "root"}`); errors++; continue; }
  const files = fs.readdirSync(abs).filter((f) => f.endsWith(".html"));
  if (!files.length) { console.error(`  ✗ no pages in ${d || "root"}`); errors++; continue; }

  for (const p of files) {
    pages++;
    const rel = path.join(d, p);
    const html = fs.readFileSync(path.join(ROOT, rel), "utf8");
    for (const raw of [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1])) {
      if (skip(raw)) continue;
      const target = raw.split("#")[0].split("?")[0];
      if (!target) continue;
      checked++;
      // "/x" resolves from the site root; anything else from the page's own directory
      const resolved = target.startsWith("/")
        ? path.normalize(path.join(ROOT, target.slice(1)))
        : path.normalize(path.join(ROOT, d, target));
      if (!fs.existsSync(resolved)) { console.error(`  ✗ ${rel} → missing "${target}"`); errors++; }
    }
    if (p === "brand.html") continue;              // standalone reference sheet
    for (const need of ["site-header", "site-footer", "assets/js/main.js", "lang-switch"]) {
      if (!html.includes(need)) { console.error(`  ✗ ${rel} is missing ${need}`); errors++; }
    }
    if (!/window\.MINDIFY_T = \{/.test(html)) { console.error(`  ✗ ${rel} has no client string table`); errors++; }
  }
}

/* Both trees must contain the same page set. */
const setOf = (d) => fs.readdirSync(path.join(ROOT, d || ".")).filter((f) => f.endsWith(".html")).sort().join(",");
if (setOf("") !== setOf("tr")) { console.error("  ✗ language trees have different pages"); errors++; }

/* IDs the page scripts depend on, checked in both languages. */
const contracts = {
  "login.html":     ["auth-form", "i-email", "i-pass", "i-name", "tab-in", "tab-up", "auth-submit", "auth-err", "demo-banner", "forgot"],
  "dashboard.html": ["u-name", "u-sub", "bar", "p-count", "p-pct", "courses", "signout", "dash-err", "dash-note"],
  "course.html":    ["c-level", "c-title", "c-sub", "c-summary", "c-meta", "c-why", "c-why-h", "c-outcomes", "c-modules", "c-outline", "c-cta", "c-cta2", "c-curriculum-h", "c-foot", "c-notice"],
  "module.html":    ["m-num", "m-title", "m-tagline", "m-blurb", "m-outcomes", "m-keys", "m-practice", "m-cta", "m-back", "m-all"],
  "contact.html":   ["contact-form", "c-ok", "c-err"],
};
for (const d of DIRS) {
  for (const [file, ids] of Object.entries(contracts)) {
    const f = path.join(ROOT, d, file);
    if (!fs.existsSync(f)) continue;
    const html = fs.readFileSync(f, "utf8");
    for (const id of ids) {
      if (!html.includes(`id="${id}"`)) { console.error(`  ✗ ${path.join(d, file)} missing #${id}`); errors++; }
    }
  }
}

console.log(`\nChecked ${pages} pages across ${DIRS.length} languages, ${checked} local references.`);
if (errors) { console.error(`${errors} problem(s) found.`); process.exit(1); }
console.log("All good. ✓");
