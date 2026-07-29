const fs = require("fs"), path = require("path");
const { page } = require("./layout");
const { icons, COURSE } = require("./pieces");
const OUT = path.join(__dirname, "..");
const write = (f, html) => { fs.writeFileSync(path.join(OUT, f), html); console.log("  ✓", f); };

/* ======================= LOGIN / SIGN UP ======================= */
write("login.html", page(
  "Student Login",
  "Sign in to your Mindify student area to continue the Therapeutic Parenting course and download your certificate.",
  `
<div class="auth-wrap">
  <div class="auth-panel">
    <div class="auth-card">
      <p class="eyebrow">Student area</p>
      <h1 style="font-size:clamp(1.9rem,3.6vw,2.5rem)" id="auth-heading">Welcome back</h1>
      <p class="muted" style="margin-bottom:28px" id="auth-sub">Sign in to pick up where you left off.</p>

      <div class="alert alert-info" id="demo-banner" role="status">
        <b>Demo mode.</b> No server is connected, so accounts and progress are stored only in this browser.
        Add your Supabase keys in Netlify to switch on real accounts — see <code>README.md</code>.
      </div>
      <div class="alert alert-error" id="auth-err" role="alert"></div>
      <div class="alert alert-ok" id="auth-ok" role="alert"></div>

      <div class="tabs">
        <button type="button" id="tab-in" class="active" aria-pressed="true">Sign in</button>
        <button type="button" id="tab-up" aria-pressed="false">Create account</button>
      </div>

      <form id="auth-form" novalidate>
        <div class="field hidden" id="f-name">
          <label for="i-name">Full name</label>
          <input class="input" id="i-name" autocomplete="name" placeholder="As it should appear on your certificate">
        </div>
        <div class="field">
          <label for="i-email">Email address</label>
          <input class="input" id="i-email" type="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="i-pass">Password</label>
          <input class="input" id="i-pass" type="password" autocomplete="current-password" required>
          <p class="hint" id="pw-hint">At least 8 characters.</p>
        </div>
        <button class="btn btn-primary btn-block" type="submit" id="auth-submit">Sign in</button>
      </form>

      <p class="hint" style="text-align:center;margin-top:18px">
        <a href="#" id="forgot">Forgotten your password?</a>
      </p>
      <p class="hint" style="text-align:center;margin-top:22px">
        Not enrolled yet? <a href="courses.html">See the course first →</a>
      </p>
    </div>
  </div>

  <aside class="auth-aside">
    <div class="auth-aside-inner">
      <p class="eyebrow">${COURSE.title}</p>
      <h2>${COURSE.subtitle}</h2>
      <p>Six modules on reading behaviour as communication, regulating before reasoning, and repairing well — at whatever pace your life allows.</p>
      <ul>
        <li>Track exactly which modules you've completed</li>
        <li>Pick up on any device, right where you left off</li>
        <li>Download a dated certificate when all six are done</li>
        <li>Access never expires</li>
      </ul>
    </div>
  </aside>
</div>
`, { scripts: `<script src="assets/js/login.js"></script>` }));

/* ======================= DASHBOARD ======================= */
write("dashboard.html", page(
  "My learning",
  "Your Mindify student dashboard — track module completion and download your certificate.",
  `
<div class="dash-head">
  <div class="wrap">
    <div class="dash-head-row">
      <div>
        <p class="eyebrow">Student area</p>
        <h1 style="font-size:clamp(1.8rem,3.4vw,2.4rem);margin-bottom:.25em">Hello, <span id="u-name">…</span></h1>
        <p class="muted" style="margin:0">${COURSE.title} · ${COURSE.subtitle}</p>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-light btn-sm" href="courses.html">Course overview</a>
        <button class="btn btn-ghost btn-sm" id="signout" type="button">Sign out</button>
      </div>
    </div>

    <div class="progress-shell">
      <div class="progress-bar"><div class="progress-fill" id="bar"></div></div>
      <div class="progress-meta">
        <span id="p-count" role="status">0 of 6 modules complete</span>
        <span id="p-pct">0%</span>
      </div>
    </div>
  </div>
</div>

<section style="padding-top:44px">
  <div class="wrap">
    <div class="alert alert-info" id="dash-note" role="status"></div>
    <div class="alert alert-error" id="dash-err" role="alert"></div>

    <div class="grid" style="grid-template-columns:1.6fr 1fr;gap:34px;align-items:start" id="dash-grid">
      <div>
        <h2 style="font-size:1.5rem">Your modules</h2>
        <p class="muted" style="font-size:.92rem;margin-bottom:22px">Tick a module once you've worked through it and tried the home practice. You can untick if you want to revisit.</p>
        <div id="mod-list"></div>
      </div>

      <aside>
        <div class="cert-panel" id="cert-panel">
          <div style="width:52px;height:52px;margin:0 auto 16px;color:var(--blue-500)">${icons.cert}</div>
          <h3 id="cert-title">Certificate of Completion</h3>
          <p class="muted" style="font-size:.92rem" id="cert-msg">Complete all six modules to unlock your certificate.</p>
          <button class="btn btn-primary btn-block" id="cert-btn" type="button" disabled style="margin-top:16px">Download certificate</button>
          <p class="hint" id="cert-hint" style="margin-top:12px">Issued as a dated PDF in your name.</p>
        </div>

        <div class="card" style="margin-top:16px">
          <h4>Home practice, this week</h4>
          <p style="font-size:.92rem" id="next-practice">—</p>
        </div>

        <div class="card" style="margin-top:16px">
          <h4>Need a hand?</h4>
          <p style="font-size:.92rem">Stuck on a module, or something not saving? <a href="contact.html">Send us a message</a> and we'll sort it.</p>
        </div>
      </aside>
    </div>
  </div>
</section>
`, {
  extraHead: `<style>@media (max-width:900px){#dash-grid{grid-template-columns:1fr !important}}</style>`,
  scripts: `<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer></script>
<script src="assets/js/certificate.js"></script>
<script src="assets/js/dashboard.js"></script>`
}));

/* ======================= LEGAL ======================= */
const legal = (title, desc, body) => page(title, desc, `
<section class="hero" style="padding-bottom:clamp(28px,4vw,48px)">
  <div class="wrap" style="max-width:760px"><p class="eyebrow">Legal</p><h1>${title}</h1>
  <p class="lede">Last updated <span data-year>2026</span>. This is a working draft for the Mindify pre-launch site and has not been reviewed by a solicitor.</p></div>
</section>
<section style="padding-top:0"><div class="wrap-narrow">${body}</div></section>`);

write("privacy.html", legal("Privacy", "How Mindify handles your data.", `
<h3>What we collect</h3>
<p>If you create a student account we store your name, email address and a record of which modules you have marked complete. If you send us a message through the contact form we store what you wrote, so that we can reply.</p>
<h3>Why we collect it</h3>
<p>Your name appears on your certificate. Your email identifies your account and lets you reset your password. Module completion is what makes the progress tracker and certificate work. We do not use any of it for advertising and we do not sell it.</p>
<h3>Where it lives</h3>
<p>Account and progress data is held by our authentication and database provider. Contact form submissions are handled by our hosting provider. Both process data on our behalf under a data processing agreement.</p>
<h3>How long we keep it</h3>
<p>For as long as your account is open. Ask us to delete it and we will remove your account and progress within thirty days.</p>
<h3>Your rights</h3>
<p>Under UK GDPR you can ask for a copy of your data, ask us to correct it, or ask us to delete it. Email <a href="mailto:hello@mindify.co.uk">hello@mindify.co.uk</a> and we will respond within one month.</p>
<h3>Cookies</h3>
<p>We use a single first-party storage entry to keep you signed in. We do not run advertising or third-party analytics cookies on this site.</p>`));

write("terms.html", legal("Terms", "Terms of use for Mindify courses.", `
<h3>What you are buying</h3>
<p>Access to self-paced online course material and a certificate of completion. Access does not expire.</p>
<h3>What the certificate is — and isn't</h3>
<p>The certificate confirms that you completed the Mindify course material. It is commonly accepted as evidence for CPD logs, supervision records and fostering panels. It is <strong>not</strong> a regulated professional qualification, a licence to practise, or accreditation by any statutory body, and we never present it as one.</p>
<h3>Educational content, not clinical advice</h3>
<p>Everything on this site is educational. It is not therapy, not a diagnostic tool, and not a substitute for advice from a qualified clinician. If you have concerns about a child's development, mental health or safety, please speak to your GP, health visitor or local safeguarding team.</p>
<h3>Your account</h3>
<p>One person per account. Please don't share login details — progress and certificates are tied to a named individual, and a shared account produces a certificate in the wrong name.</p>
<h3>Refunds</h3>
<p>If the course isn't right for you, email us within fourteen days of enrolling and we will refund you in full, no explanation needed.</p>
<h3>Copyright</h3>
<p>Course material is © Mindify. You're welcome to use it in your own parenting or practice. You may not redistribute, resell or run it as paid training without a facilitator licence — which we're happy to talk about.</p>`));

console.log("Portal + legal pages built.");
