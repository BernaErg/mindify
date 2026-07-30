const fs = require("fs"), path = require("path");
const { page } = require("./layout");
const { LANGS } = require("./copy");
const { heroArt, icons, courseCard, audienceCard, testimonialCard, f,
        PLATFORM, COURSES, TESTIMONIALS, BANNER } = require("./pieces");

const ROOT = path.join(__dirname, "..");
const live = COURSES.filter((c) => c.status === "available");
const soon = COURSES.filter((c) => c.status !== "available");
const totalHours = COURSES.reduce((a, c) => a + c.hours, 0);
const totalModules = COURSES.reduce((a, c) => a + (c.modules ? c.modules.length : 0), 0);

function write(L, file, html) {
  const dir = path.join(ROOT, L.dir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, file), html);
  console.log("  ✓", (L.dir || "") + file);
}

const featureCard = (icon, h, p) =>
  `<div class="card reveal"><div class="feature"><div class="feature-icon">${icon}</div><div>
        <h4>${h}</h4><p>${p}</p></div></div></div>`;

for (const L of LANGS) {
  const t = L.home;

  /* ======================= HOME ======================= */
  write(L, "index.html", page(L, "index.html", t.title, t.desc, `
<section style="padding:clamp(28px,4vw,52px) 0 0">
  <div class="wrap">
    <div class="hero-feature">
      <div class="art">${heroArt}</div>
      <div class="inner">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.h1}</h1>
        <p class="lede">${t.lede}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="courses.html">${t.ctaCourses}</a>
          <a class="btn btn-ghost" href="about.html">${t.ctaAbout}</a>
        </div>
        <p class="hero-note">${icons.clock} ${t.note}</p>
      </div>
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="stats reveal">
      <div class="stat"><b>${COURSES.length}</b><span>${t.stats.courses}</span></div>
      <div class="stat"><b>${totalHours}h</b><span>${t.stats.hours}</span></div>
      <div class="stat"><b>100%</b><span>${t.stats.paced}</span></div>
      <div class="stat"><b>∞</b><span>${t.stats.access}</span></div>
    </div>
  </div>
</section>

<section style="padding-top:clamp(30px,4vw,52px)">
  <div class="wrap">
    <div class="center" style="max-width:62ch;margin-inline:auto;margin-bottom:44px">
      <p class="eyebrow">${t.howEyebrow}</p>
      <h2>${t.howH2}</h2>
      <p class="lede">${t.howLede}</p>
    </div>
    <div class="grid grid-2">
      ${PLATFORM.audiences.map((a) => audienceCard(L, a)).join("\n      ")}
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:62ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">${t.catEyebrow}</p>
      <h2>${COURSES.length} ${L.courses.modules === "modül" ? "kurs" : "courses"}, ${totalModules} ${L.courses.modules}</h2>
      <p class="lede">${t.catLede}</p>
    </div>
    <div class="grid grid-3">
      ${COURSES.map((c, i) => courseCard(L, c, i)).join("\n      ")}
    </div>
    <div class="center" style="margin-top:34px">
      <a class="btn btn-primary" href="courses.html">${t.catCta}</a>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="center" style="max-width:60ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">${t.whyEyebrow}</p>
      <h2>${t.whyH2}</h2>
    </div>
    <div class="grid grid-3">
      ${[icons.brain, icons.people, icons.heart, icons.clock, icons.repeat, icons.cert]
        .map((ic, i) => featureCard(ic, t.why[i][0], t.why[i][1])).join("\n      ")}
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid grid-2" style="align-items:center;gap:clamp(32px,5vw,64px)">
      <div>
        <p class="eyebrow">${t.liveEyebrow}</p>
        <h2>${t.liveH2}</h2>
        <p class="lede">${t.liveLede}</p>
        <p>${t.liveBody}</p>
        <p class="muted" style="font-size:.92rem">${t.liveNote}</p>
        <a class="btn btn-ghost" style="margin-top:8px" href="contact.html">${t.liveCta}</a>
      </div>
      <div>
        <div class="card reveal" style="margin-bottom:14px;border-left:3px solid var(--blue-700)">
          <span class="pill">${t.liveCard1Pill}</span>
          <h4 style="margin-top:12px">${t.liveCard1H}</h4>
          <p style="margin:0;font-size:.94rem">${t.liveCard1P}</p>
        </div>
        <div class="card reveal" style="border-left:3px solid var(--amber)">
          <span class="pill">${t.liveCard2Pill}</span>
          <h4 style="margin-top:12px">${t.liveCard2H}</h4>
          <p style="margin:0;font-size:.94rem">${t.liveCard2P}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">${t.tEyebrow}</p>
      <h2>${t.tH2}</h2>
    </div>
    <div class="grid grid-3">
      ${TESTIMONIALS.map((x) => testimonialCard(L, x)).join("\n      ")}
    </div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:62ch">
    <p class="eyebrow">${t.ctaEyebrow}</p>
    <h2>${t.ctaH2}</h2>
    <p class="lede" style="color:#BFCBE6">${t.ctaLede}</p>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-light" href="login.html?mode=signup">${t.ctaPrimary}</a>
      <a class="btn btn-ghost" style="color:#DCE4F5;border-color:rgba(255,255,255,.28)" href="contact.html">${t.ctaSecondary}</a>
    </div>
  </div>
</section>
`));

  /* ======================= COURSES ======================= */
  const cs = L.courses;
  write(L, "courses.html", page(L, "courses.html", cs.title, cs.desc, `
<section class="hero" style="padding-bottom:clamp(32px,5vw,56px)">
  <div class="wrap" style="max-width:840px">
    <p class="eyebrow">${cs.eyebrow}</p>
    <h1>${cs.h1(live.length)}</h1>
    <p class="lede">${cs.lede}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="login.html?mode=signup">${cs.ctaAccount}</a>
      <a class="btn btn-ghost" href="#catalogue">${cs.ctaCatalogue}</a>
    </div>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap"><div class="banner">${BANNER(2)}</div></div>
</section>

<section id="catalogue" class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:44px">
      <p class="eyebrow">${cs.availEyebrow}</p>
      <h2>${cs.availH2}</h2>
    </div>
    <div class="grid grid-3">${live.map((c, i) => courseCard(L, c, i)).join("\n      ")}</div>
    ${soon.length ? `
    <div class="center" style="max-width:56ch;margin-inline:auto;margin:64px auto 44px">
      <p class="eyebrow">${cs.soonEyebrow}</p>
      <h2>${cs.soonH2}</h2>
      <p class="lede">${cs.soonLede}</p>
    </div>
    <div class="grid grid-3">${soon.map((c, i) => courseCard(L, c, i + live.length)).join("\n      ")}</div>` : ""}
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid grid-2" style="align-items:start;gap:clamp(32px,5vw,64px)">
      <div>
        <p class="eyebrow">${cs.howEyebrow}</p>
        <h2>${cs.howH2}</h2>
        <p>${cs.howP}</p>
        <a class="btn btn-primary" style="margin-top:12px" href="login.html?mode=signup">${cs.ctaAccount}</a>
      </div>
      <div>
        ${cs.steps.map((s, i) => `<div class="card reveal" style="margin-bottom:14px"><div class="feature"><div class="feature-icon">${i + 1}</div><div>
          <h4>${s[0]}</h4><p>${s[1]}</p></div></div></div>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>
`));

  /* ======================= COURSE DETAIL ======================= */
  const cd = L.course;
  write(L, "course.html", page(L, "course.html", cd.title, cd.desc, `
<section class="hero" style="padding-bottom:clamp(30px,4vw,52px)">
  <div class="wrap" style="max-width:860px">
    <p class="eyebrow"><a href="courses.html">${cd.back}</a></p>
    <p class="eyebrow" id="c-level">${cd.title}</p>
    <h1 id="c-title">…</h1>
    <p class="lede" id="c-sub" style="font-style:italic;color:var(--blue-700)"></p>
    <p class="lede" id="c-summary"></p>
    <div class="notice-block hidden" id="c-notice"></div>
    <div class="hero-actions">
      <a class="btn btn-primary" id="c-cta" href="login.html?mode=signup">${cd.enrol}</a>
      <a class="btn btn-ghost" href="#modules">${cd.jump}</a>
    </div>
    <p class="hero-note" id="c-meta"></p>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap"><div class="banner" id="c-banner"></div></div>
</section>

<section class="band-tint" style="padding-top:clamp(34px,4vw,56px)">
  <div class="wrap-narrow">
    <p class="eyebrow">${cd.whyEyebrow}</p>
    <h2 id="c-why-h">${cd.whyH2}</h2>
    <p class="lede" id="c-why"></p>
  </div>
</section>

<section id="modules">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:44px">
      <p class="eyebrow">${cd.curriculumEyebrow}</p>
      <h2 id="c-curriculum-h"></h2>
    </div>
    <div class="grid grid-3" id="c-modules"></div>
    <div id="c-outline" class="wrap-narrow hidden" style="padding:0"></div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:60ch">
    <p class="eyebrow">${cd.footEyebrow}</p>
    <h2 id="c-foot">${cd.foot}</h2>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-light" id="c-cta2" href="login.html?mode=signup">${L.home.ctaPrimary}</a>
      <a class="btn btn-ghost" style="color:#DCE4F5;border-color:rgba(255,255,255,.28)" href="contact.html">${cd.ask}</a>
    </div>
  </div>
</section>
`, { scripts: `<script>window.MINDIFY_ART_BANNER=function(i){return ${JSON.stringify([1,2,3,4].map(BANNER))}[(i-1)%4];};</script>
<script src="assets/js/course-page.js"></script>` }));

  /* ======================= MODULE DETAIL ======================= */
  const md = L.module;
  write(L, "module.html", page(L, "module.html", md.title, md.desc, `
<section class="hero" style="padding-bottom:clamp(30px,4vw,52px)">
  <div class="wrap" style="max-width:840px">
    <p class="eyebrow"><a id="m-back" href="courses.html">${md.backCourse}</a></p>
    <p class="eyebrow" id="m-num">${md.title}</p>
    <h1 id="m-title">…</h1>
    <p class="lede" id="m-tagline" style="font-style:italic;color:var(--blue-700)"></p>
    <p class="lede" id="m-blurb"></p>
    <div class="hero-actions">
      <a class="btn btn-primary" id="m-cta" href="login.html?mode=signup">${md.enrol}</a>
      <a class="btn btn-ghost" id="m-all" href="courses.html">${md.full}</a>
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <div class="grid grid-2" style="gap:clamp(28px,4vw,56px)">
      <div>
        <p class="eyebrow">${md.outcomesEyebrow}</p>
        <h2>${md.outcomesH2}</h2>
        <ul id="m-outcomes" class="tick-list"></ul>
      </div>
      <div>
        <p class="eyebrow">${md.keysEyebrow}</p>
        <h2>${md.keysH2}</h2>
        <div id="m-keys" style="display:flex;flex-wrap:wrap;gap:8px;margin:20px 0 28px"></div>
        <div class="card" style="background:var(--white)">
          <h4>${md.practiceH}</h4>
          <p id="m-practice" style="margin:0"></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap-narrow center">
    <div class="card" style="padding:40px">
      <p class="eyebrow">${md.lockedEyebrow}</p>
      <h2 style="margin-bottom:.4em">${md.lockedH2}</h2>
      <p class="muted">${md.lockedP}</p>
      <a class="btn btn-primary" style="margin-top:18px" href="login.html?mode=signup">${md.lockedCta}</a>
    </div>
  </div>
</section>
`, { scripts: `<script src="assets/js/module-page.js"></script>` }));

  /* ======================= ABOUT ======================= */
  const ab = L.about;
  write(L, "about.html", page(L, "about.html", ab.title, ab.desc, `
<section class="hero" style="padding-bottom:clamp(34px,5vw,60px)">
  <div class="wrap" style="max-width:820px">
    <p class="eyebrow">${ab.eyebrow}</p>
    <h1>${ab.h1}</h1>
    <p class="lede">${ab.lede}</p>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap"><div class="banner">${BANNER(4)}</div></div>
</section>

<section>
  <div class="wrap-narrow">${ab.body.map((p) => `<p>${p}</p>`).join("\n    ")}</div>
</section>

<section id="approach" class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">${ab.approachEyebrow}</p>
      <h2>${ab.approachH2}</h2>
    </div>
    <div class="grid grid-2">
      ${[icons.brain, icons.shield, icons.repeat, icons.people].map((ic, i) =>
        featureCard(ic, ab.principles[i][0], ab.principles[i][1])).join("\n      ")}
      <div class="card reveal" style="grid-column:1/-1"><div class="feature"><div class="feature-icon">${icons.cert}</div><div>
        <h4>${ab.principles[4][0]}</h4><p>${ab.principles[4][1]}</p></div></div></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid grid-2" style="align-items:center;gap:clamp(32px,5vw,64px)">
      <div>
        <p class="eyebrow">${ab.whoEyebrow}</p>
        <h2>${ab.whoH2}</h2>
        <p>${ab.whoP}</p>
      </div>
      <div>
        ${ab.who.map((w) => `<details class="acc"><summary>${w[0]}</summary><div class="acc-body">${w[1]}</div></details>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:62ch">
    <h2>${ab.quote}</h2>
    <p class="lede" style="color:#BFCBE6">${ab.quoteSub}</p>
    <div class="hero-actions" style="justify-content:center"><a class="btn btn-light" href="courses.html">${ab.quoteCta}</a></div>
  </div>
</section>
`));

  /* ======================= CONTACT ======================= */
  const ct = L.contact;
  write(L, "contact.html", page(L, "contact.html", ct.title, ct.desc, `
<section class="hero" style="padding-bottom:clamp(36px,5vw,56px)">
  <div class="wrap" style="max-width:760px">
    <p class="eyebrow">${ct.eyebrow}</p>
    <h1>${ct.h1}</h1>
    <p class="lede">${ct.lede}</p>
  </div>
</section>

<section style="padding-top:0">
  <div class="wrap">
    <div class="grid grid-2" style="gap:clamp(32px,5vw,64px);align-items:start">
      <div class="card" style="padding:34px">
        <h3>${ct.formH}</h3>
        <div class="alert alert-ok" id="c-ok" role="alert">${ct.ok}</div>
        <div class="alert alert-error" id="c-err" role="alert"></div>
        <form name="contact-${L.code}" method="POST" data-netlify="true" netlify-honeypot="bot-field" id="contact-form">
          <input type="hidden" name="form-name" value="contact-${L.code}">
          <p class="hidden"><label>Don't fill this in: <input name="bot-field"></label></p>
          <div class="field"><label for="cf-name">${ct.fName}</label>
            <input class="input" id="cf-name" name="name" required autocomplete="name"></div>
          <div class="field"><label for="cf-email">${ct.fEmail}</label>
            <input class="input" id="cf-email" name="email" type="email" required autocomplete="email"></div>
          <div class="field"><label for="cf-topic">${ct.fTopic}</label>
            <select class="input" id="cf-topic" name="topic">
              ${ct.topics.map((o) => `<option>${o}</option>`).join("\n              ")}
            </select></div>
          <div class="field"><label for="cf-msg">${ct.fMsg}</label>
            <textarea class="input" id="cf-msg" name="message" required></textarea></div>
          <button class="btn btn-primary btn-block" type="submit">${ct.send}</button>
          <p class="hint" style="text-align:center">${ct.privacyNote}</p>
        </form>
      </div>
      <div>
        <div class="card reveal" style="margin-bottom:16px"><div class="feature"><div class="feature-icon">${icons.heart}</div><div>
          <h4>${ct.sideEmail}</h4><p><a href="mailto:hello@mindify.co.uk">hello@mindify.co.uk</a><br><span class="muted">${ct.sideEmailP}</span></p></div></div></div>
        <div class="card reveal" style="margin-bottom:16px"><div class="feature"><div class="feature-icon">${icons.people}</div><div>
          <h4>${ct.sideOrg}</h4><p>${ct.sideOrgP}</p></div></div></div>
        <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.shield}</div><div>
          <h4>${ct.sideAcc}</h4><p>${ct.sideAccP}</p></div></div></div>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="band-tint">
  <div class="wrap-narrow">
    <p class="eyebrow center">${ct.faqEyebrow}</p>
    <h2 class="center" style="margin-bottom:36px">${ct.faqH2}</h2>
    ${ct.faqs.map((q) => `<details class="acc"><summary>${q[0]}</summary><div class="acc-body">${q[1]}</div></details>`).join("\n    ")}
  </div>
</section>
`, { scripts: `<script src="assets/js/contact.js"></script>` }));
}

console.log("Pages built.");
