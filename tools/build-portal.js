const fs = require("fs"), path = require("path");
const { page } = require("./layout");
const { LANGS } = require("./copy");
const { icons, COURSES } = require("./pieces");

const ROOT = path.join(__dirname, "..");
function write(L, file, html) {
  const dir = path.join(ROOT, L.dir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, file), html);
  console.log("  ✓", (L.dir || "") + file);
}

for (const L of LANGS) {
  const a = L.auth, d = L.dash, lg = L.legal;

  /* ======================= LOGIN / SIGN UP ======================= */
  write(L, "login.html", page(L, "login.html", a.title, a.desc, `
<div class="auth-wrap">
  <div class="auth-panel">
    <div class="auth-card">
      <p class="eyebrow">${a.eyebrow}</p>
      <h1 style="font-size:clamp(1.9rem,3.6vw,2.5rem)" id="auth-heading">${a.welcome}</h1>
      <p class="muted" style="margin-bottom:28px" id="auth-sub">${a.welcomeSub}</p>

      <div class="alert alert-info" id="demo-banner" role="status">${a.demo}</div>
      <div class="alert alert-error" id="auth-err" role="alert"></div>
      <div class="alert alert-ok" id="auth-ok" role="alert"></div>

      <div class="tabs">
        <button type="button" id="tab-in" class="active" aria-pressed="true">${a.tabIn}</button>
        <button type="button" id="tab-up" aria-pressed="false">${a.tabUp}</button>
      </div>

      <form id="auth-form" novalidate>
        <div class="field hidden" id="f-name">
          <label for="i-name">${a.fName}</label>
          <input class="input" id="i-name" autocomplete="name" placeholder="${a.fNamePh}">
        </div>
        <div class="field">
          <label for="i-email">${a.fEmail}</label>
          <input class="input" id="i-email" type="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="i-pass">${a.fPass}</label>
          <input class="input" id="i-pass" type="password" autocomplete="current-password" required>
          <p class="hint" id="pw-hint">${a.pwHint}</p>
        </div>
        <button class="btn btn-primary btn-block" type="submit" id="auth-submit">${a.tabIn}</button>
      </form>

      <p class="hint" style="text-align:center;margin-top:18px"><a href="#" id="forgot">${a.forgot}</a></p>
      <p class="hint" style="text-align:center;margin-top:22px">
        ${a.notEnrolled} <a href="courses.html">${a.seeCourses}</a>
      </p>
    </div>
  </div>

  <aside class="auth-aside">
    <div class="auth-aside-inner">
      <p class="eyebrow">${L.nav.courses}</p>
      <h2>${a.asideH}</h2>
      <p>${a.asideP}</p>
      <ul>${a.asideList.map((x) => `<li>${x}</li>`).join("")}</ul>
    </div>
  </aside>
</div>
`, { scripts: `<script src="assets/js/login.js"></script>` }));

  /* ======================= DASHBOARD ======================= */
  write(L, "dashboard.html", page(L, "dashboard.html", d.title, d.desc, `
<div class="dash-head">
  <div class="wrap">
    <div class="dash-head-row">
      <div>
        <p class="eyebrow">${d.eyebrow}</p>
        <h1 style="font-size:clamp(1.8rem,3.4vw,2.4rem);margin-bottom:.25em">${d.hello} <span id="u-name">…</span></h1>
        <p class="muted" style="margin:0" id="u-sub">${d.yourCourses}</p>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-light btn-sm" href="courses.html">${d.browse}</a>
        <button class="btn btn-ghost btn-sm" id="signout" type="button">${d.signout}</button>
      </div>
    </div>

    <div class="progress-shell">
      <div class="progress-bar"><div class="progress-fill" id="bar"></div></div>
      <div class="progress-meta">
        <span id="p-count" role="status">${d.loading}</span>
        <span id="p-pct">0%</span>
      </div>
    </div>
  </div>
</div>

<section style="padding-top:44px">
  <div class="wrap">
    <div class="alert alert-info" id="dash-note" role="status"></div>
    <div class="alert alert-error" id="dash-err" role="alert"></div>
    <div id="courses"></div>

    <div class="card" style="margin-top:26px">
      <h4>${d.helpH}</h4>
      <p style="font-size:.92rem;margin:0">${d.helpP} <a href="contact.html">${d.helpLink}</a>.</p>
    </div>
  </div>
</section>
`, {
    extraHead: `<style>
    .course-block{margin-bottom:40px}
    .course-block .head{display:flex;justify-content:space-between;align-items:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:8px}
    .course-block .bar-wrap{margin:14px 0 22px}
    .dash-grid{display:grid;grid-template-columns:1.6fr 1fr;gap:30px;align-items:start}
    @media (max-width:900px){.dash-grid{grid-template-columns:1fr}}
  </style>`,
    scripts: `<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer></script>
<script src="assets/js/certificate.js"></script>
<script src="assets/js/dashboard.js"></script>`
  }));

  /* ======================= LEGAL ======================= */
  const legalPage = (title, sections) => page(L, title === lg.privacyTitle ? "privacy.html" : "terms.html",
    title, title + " — Mindify", `
<section class="hero" style="padding-bottom:clamp(28px,4vw,48px)">
  <div class="wrap" style="max-width:760px"><p class="eyebrow">${L.footer.legal}</p><h1>${title}</h1>
  <p class="lede">${lg.lastUpdated} <span data-year>2026</span>. ${lg.draftNote}</p></div>
</section>
<section style="padding-top:0"><div class="wrap-narrow">
  ${sections.map((s) => `<h3>${s[0]}</h3>\n  <p>${s[1]}</p>`).join("\n  ")}
</div></section>`);

  write(L, "privacy.html", legalPage(lg.privacyTitle, lg.privacy));
  write(L, "terms.html", legalPage(lg.termsTitle, lg.terms));
}

console.log("Portal + legal pages built.");
