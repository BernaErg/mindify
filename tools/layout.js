/* Shared chrome for every page, in every language.
   Edit here, then run `npm run build`. */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { MARK, MARK_ON_DARK } = require("./art");

// Content hash on the stylesheet URL. Netlify caches /assets/* for an hour, so
// without this a returning visitor keeps the old CSS after a rebrand.
const CSS_V = crypto.createHash("md5")
  .update(fs.readFileSync(path.join(__dirname, "..", "assets", "css", "styles.css")))
  .digest("hex").slice(0, 8);

const LOGO = MARK("hdr");
const LOGO_DARK = MARK_ON_DARK("ftr");

/* Strings the browser-side scripts need. Kept to the subset actually used so
   the payload stays small. */
function clientStrings(L) {
  return JSON.stringify({
    lang: L.code,
    courses: L.courses, course: L.course, module: L.module, auth: L.auth, dash: L.dash,
    nav: { dashboard: L.nav.dashboard }
  });
}

function head(L, page, title, desc, extraHead = "") {
  const B = L.dir ? "../" : "";                 // asset prefix
  const alt = L.dir ? page : "tr/" + page;      // the other language's URL, from the site root
  const self = L.dir ? "tr/" + page : page;
  return `<!DOCTYPE html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} · Mindify</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title} · Mindify">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#FAF7F2">
<link rel="alternate" hreflang="en-GB" href="/${page}">
<link rel="alternate" hreflang="tr" href="/tr/${page}">
<link rel="alternate" hreflang="x-default" href="/${page}">
<link rel="canonical" href="/${self}">
<link rel="icon" href="${B}assets/img/favicon.svg" type="image/svg+xml">
<link rel="icon" href="${B}assets/img/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="${B}assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${B}assets/css/styles.css?v=${CSS_V}">
${extraHead}</head>
<body>
<a class="skip" href="#main">${L.footer.skip}</a>
<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="index.html">${LOGO}<span class="brand-name">mindify</span></a>
    <button class="nav-toggle" aria-label="${L.nav.home}" aria-expanded="false">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <nav class="nav-links">
      <a href="index.html">${L.nav.home}</a>
      <a href="about.html">${L.nav.about}</a>
      <a href="courses.html">${L.nav.courses}</a>
      <a href="contact.html">${L.nav.contact}</a>
      <a class="lang-switch" href="${L.dir ? "../" + page : "tr/" + page}" hreflang="${L.other}" lang="${L.other}">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
        ${L.otherLabel}
      </a>
      <a class="btn btn-primary btn-sm nav-cta" href="login.html" data-auth-cta>${L.nav.login}</a>
    </nav>
  </div>
</header>
<main id="main">`;
}

function foot(L, page) {
  const B = L.dir ? "../" : "";
  return `</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="index.html">${LOGO_DARK}<span class="brand-name">mindify</span></a>
        <p>${L.footer.blurb}</p>
      </div>
      <div>
        <h5>${L.footer.learn}</h5>
        <a href="courses.html">${L.footer.allCourses}</a>
        <a href="login.html">${L.footer.studentLogin}</a>
      </div>
      <div>
        <h5>${L.footer.company}</h5>
        <a href="about.html">${L.footer.aboutUs}</a>
        <a href="about.html#approach">${L.footer.approach}</a>
        <a href="contact.html">${L.footer.contactUs}</a>
      </div>
      <div>
        <h5>${L.footer.legal}</h5>
        <a href="contact.html#faq">${L.footer.faqs}</a>
        <a href="privacy.html">${L.footer.privacy}</a>
        <a href="terms.html">${L.footer.terms}</a>
      </div>
    </div>
    <div class="footer-bot">
      <span>© <span data-year>2026</span> Mindify · mindify.co.uk</span>
    </div>
  </div>
</footer>
<script>window.MINDIFY_T = ${clientStrings(L)};</script>
<script src="${B}assets/js/config.js"></script>
<script src="${B}assets/js/data.js"></script>
<script src="${B}assets/js/auth.js"></script>
<script src="${B}assets/js/main.js"></script>
__PAGE_SCRIPTS__
</body>
</html>`;
}

/* page(L, filename, title, desc, body, opts) */
function page(L, filename, title, desc, body, { scripts = "", extraHead = "" } = {}) {
  const B = L.dir ? "../" : "";
  return head(L, filename, title, desc, extraHead)
    + body
    + foot(L, filename).replace("__PAGE_SCRIPTS__", scripts.replace(/assets\//g, B + "assets/"));
}

module.exports = { page, LOGO, LOGO_DARK, CSS_V };
