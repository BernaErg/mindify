/* =========================================================================
   Lesson pages. One static HTML page per module per language, generated
   from assets/lessons/<lang>/<slug>.json — itself extracted from the course
   decks. Static rather than fetched, so the content is indexable and works
   without JavaScript.
   ========================================================================= */
const fs = require("fs"), path = require("path");
const { page } = require("./layout");
const { LANGS } = require("./copy");
const { COURSES } = require("./pieces");

const ROOT = path.join(__dirname, "..");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function renderSection(s) {
  const items = s.items.map((it) => {
    if (it.type === "pair")
      return `<div class="l-pair"><b>${esc(it.term)}</b><span>${esc(it.def)}</span></div>`;
    if (it.type === "list")
      return `<ul class="l-list">${it.lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>`;
    return `<p>${esc(it.text)}</p>`;
  }).join("\n        ");
  const pairs = s.items.filter((i) => i.type === "pair").length;
  return `<section class="l-sec${pairs >= 2 ? " has-pairs" : ""}">
        ${s.label ? `<p class="eyebrow">${esc(s.label)}</p>` : ""}
        ${s.heading ? `<h2>${esc(s.heading)}</h2>` : ""}
        ${items}
        ${s.source ? `<p class="l-source">${esc(s.source)}</p>` : ""}
      </section>`;
}

let count = 0;
for (const L of LANGS) {
  const dir = path.join(ROOT, L.dir);
  fs.mkdirSync(dir, { recursive: true });
  for (const c of COURSES) {
    if (!c.modules) continue;
    const src = path.join(ROOT, "assets", "lessons", L.code, c.slug + ".json");
    if (!fs.existsSync(src)) { console.warn("  ! no lesson file:", L.code, c.slug); continue; }
    const lessons = JSON.parse(fs.readFileSync(src, "utf8")).modules;
    for (const m of c.modules) {
      const lesson = lessons.find((x) => x.n === m.n);
      if (!lesson) { console.warn("  ! no lesson body:", c.slug, m.n); continue; }
      const prev = c.modules.find((x) => x.n === m.n - 1);
      const next = c.modules.find((x) => x.n === m.n + 1);
      const file = `module-${c.slug}-${m.n}.html`;
      const md = L.module;
      const body = `
<section class="hero" style="padding-bottom:clamp(24px,3vw,40px)">
  <div class="wrap" style="max-width:840px">
    <p class="eyebrow"><a href="course.html?c=${c.slug}">← ${esc(c.title)}</a></p>
    <p class="eyebrow">Module ${m.n} ${md.of} ${c.modules.length} · ${m.minutes} ${md.min}</p>
    <h1>${esc(m.title)}</h1>
    <p class="lede" style="font-style:italic;color:var(--blue-700)">“${esc(m.tagline)}”</p>
    <p class="lede">${esc(m.blurb)}</p>
  </div>
</section>

<section class="band-tint" style="padding:clamp(30px,4vw,52px) 0">
  <div class="wrap">
    <div class="grid grid-2" style="gap:clamp(26px,4vw,52px)">
      <div>
        <p class="eyebrow">${md.outcomesEyebrow}</p>
        <h2 style="font-size:1.4rem">${md.outcomesH2}</h2>
        <ul class="tick-list">${m.outcomes.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">${md.keysEyebrow}</p>
        <h2 style="font-size:1.4rem">${md.keysH2}</h2>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 24px">
          ${m.keys.map((k) => `<span class="pill">${esc(k)}</span>`).join("")}
        </div>
        <div class="card" style="background:var(--white)">
          <h4>${md.practiceH}</h4><p style="margin:0">${esc(m.practice)}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="lesson">
  <div class="wrap-narrow">
    ${lesson.sections.map(renderSection).join("\n    ")}
  </div>
</div>

<section class="section-tight">
  <div class="wrap">
    <div class="l-nav">
      ${prev ? `<a class="btn btn-ghost" href="module-${c.slug}-${prev.n}.html">← ${esc(prev.title)}</a>`
             : `<a class="btn btn-ghost" href="course.html?c=${c.slug}">${md.full}</a>`}
      ${next ? `<a class="btn btn-primary" href="module-${c.slug}-${next.n}.html">${esc(next.title)} →</a>`
             : `<a class="btn btn-primary" href="dashboard.html">${md.dashboard}</a>`}
    </div>
  </div>
</section>
`;
      fs.writeFileSync(path.join(dir, file),
        page(L, file, `${m.title} · ${c.title}`, m.blurb.slice(0, 155), body));
      count++;
    }
  }
}
console.log(`  ✓ ${count} lesson pages`);
