/* Mindify — static sanity check. Verifies every local link and asset resolves. */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const pages = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let errors = 0, checked = 0;

const skip = (u) =>
  !u || u.startsWith("http") || u.startsWith("mailto:") || u.startsWith("#") ||
  u.startsWith("//") || u.startsWith("data:") || u === "";

for (const p of pages) {
  const html = fs.readFileSync(path.join(ROOT, p), "utf8");
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const raw of refs) {
    if (skip(raw)) continue;
    const target = raw.split("#")[0].split("?")[0];
    if (!target) continue;
    checked++;
    if (!fs.existsSync(path.join(ROOT, target))) {
      console.error(`  ✗ ${p} → missing "${target}"`);
      errors++;
    }
  }
  // Every page should carry the shared chrome (logos.html is a standalone brand sheet).
  if (p === "logos.html") continue;
  for (const need of ["site-header", "site-footer", "assets/js/main.js"]) {
    if (!html.includes(need)) { console.error(`  ✗ ${p} is missing ${need}`); errors++; }
  }
}

// IDs the page scripts depend on.
const contracts = {
  "login.html":     ["auth-form", "i-email", "i-pass", "i-name", "tab-in", "tab-up", "auth-submit", "auth-err", "demo-banner", "forgot"],
  "dashboard.html": ["u-name", "u-sub", "bar", "p-count", "p-pct", "courses", "signout", "dash-err", "dash-note"],
  "course.html":    ["c-level", "c-title", "c-sub", "c-summary", "c-meta", "c-why", "c-why-h", "c-modules", "c-outline", "c-cta", "c-cta2", "c-curriculum-h", "c-foot", "c-notice"],
  "module.html":    ["m-num", "m-title", "m-tagline", "m-blurb", "m-outcomes", "m-keys", "m-practice", "m-cta", "m-back", "m-all"],
  "contact.html":   ["contact-form", "c-ok", "c-err"],
};
for (const [file, ids] of Object.entries(contracts)) {
  const html = fs.readFileSync(path.join(ROOT, file), "utf8");
  for (const id of ids) {
    if (!html.includes(`id="${id}"`)) { console.error(`  ✗ ${file} missing #${id}`); errors++; }
  }
}

console.log(`\nChecked ${pages.length} pages, ${checked} local references.`);
if (errors) { console.error(`${errors} problem(s) found.`); process.exit(1); }
console.log("All good. ✓");
