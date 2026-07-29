/* Shared chrome for every page. Edit here, then run `npm run build:pages`. */

const { MARK, MARK_ON_DARK } = require("./art");
const fs = require("fs");
const crypto = require("crypto");

// Content hash on the stylesheet URL. Netlify caches /assets/* for an hour, so
// without this a returning visitor keeps the old CSS after a rebrand.
const CSS_V = crypto
  .createHash("md5")
  .update(fs.readFileSync(require("path").join(__dirname, "..", "assets", "css", "styles.css")))
  .digest("hex")
  .slice(0, 8);

// Two drawings, not one: Strata is a filled disc and vanishes on a dark ground.
const LOGO = MARK("hdr");
const LOGO_DARK = MARK_ON_DARK("ftr");

const NAV = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["courses.html", "Courses"],
  ["contact.html", "Contact Us"],
];

function head(title, desc, extraHead = "") {
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} · Mindify</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title} · Mindify">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#FAF7F2">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/styles.css?v=${CSS_V}">
${extraHead}</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="index.html">${LOGO}<span class="brand-name">mindify</span></a>
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <nav class="nav-links">
      ${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join("\n      ")}
      <a class="btn btn-primary btn-sm nav-cta" href="login.html" data-auth-cta>Student Login</a>
    </nav>
  </div>
</header>
<main id="main">`;
}

const FOOT = `</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="index.html">${LOGO_DARK}<span class="brand-name">mindify</span></a>
        <p style="max-width:34ch">Self-paced psychology training from a UK academic — for students, practitioners, managers and parents.</p>
      </div>
      <div>
        <h5>Learn</h5>
        <a href="courses.html">All courses</a>
        <a href="brand.html">Brand</a>
        <a href="course.html?c=therapeutic-parenting">Therapeutic Parenting</a>
        <a href="login.html">Student login</a>
      </div>
      <div>
        <h5>Company</h5>
        <a href="about.html">About Mindify</a>
        <a href="about.html#approach">Our approach</a>
        <a href="contact.html">Contact us</a>
      </div>
      <div>
        <h5>Legal</h5>
        <a href="contact.html#faq">FAQs</a>
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
      </div>
    </div>
    <div class="footer-bot">
      <span>© <span data-year>2026</span> Mindify · mindify.co.uk</span>
      <span>Made for parents, carers and the people who support them.</span>
    </div>
  </div>
</footer>
<script src="assets/js/config.js"></script>
<script src="assets/js/data.js"></script>
<script src="assets/js/auth.js"></script>
<script src="assets/js/main.js"></script>
__PAGE_SCRIPTS__
</body>
</html>`;

function page(title, desc, body, { scripts = "", extraHead = "" } = {}) {
  return head(title, desc, extraHead) + body + FOOT.replace("__PAGE_SCRIPTS__", scripts);
}

module.exports = { page, LOGO };
