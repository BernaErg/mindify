/* Brand sheet — the single reference for anyone touching Mindify's visuals. */
const fs = require("fs"), path = require("path");
const { page } = require("./layout");
const { MARK, MARK_ON_DARK, HERO, COVER, BANNER } = require("./art");

const SMALL = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><clipPath id="sm"><circle cx="32" cy="32" r="29"/></clipPath></defs>
  <circle cx="32" cy="32" r="29" fill="#17233D"/>
  <g clip-path="url(#sm)">
    <path d="M-2 40C4 22 10 56 16 40s10 20 16 8 10 10 16 4 8 3 20 2v40H-2Z" fill="#8FA3CE" opacity=".6"/>
    <path d="M-2 52C6 44 12 60 20 52s12 8 20 3 10 2 22 1v26H-2Z" fill="#D99A3E"/></g></svg>`;

const TILE = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><clipPath id="tl"><rect width="64" height="64" rx="15"/></clipPath>
    <linearGradient id="tg" x1="0" y1="0" x2=".8" y2="1">
      <stop offset="0" stop-color="#2E4372"/><stop offset="1" stop-color="#141F36"/></linearGradient></defs>
  <g clip-path="url(#tl)"><rect width="64" height="64" fill="url(#tg)"/>
    <path d="M-2 30C3 10 8 50 13 30s9 26 14 13 8 14 13 5 9 5 22 3v62H-2Z" fill="#8FA3CE" opacity=".3"/>
    <path d="M-2 41C3 26 8 58 13 41s9 21 14 10 8 11 13 4 9 4 22 2v40H-2Z" fill="#8FA3CE" opacity=".55"/>
    <path d="M-2 52C3 44 8 62 13 52s9 13 14 6 8 7 13 2 9 2 22 1v26H-2Z" fill="#D99A3E"/></g></svg>`;

const sw = (hex, name, use) =>
  `<div class="sw"><i style="background:${hex}"></i><div><b>${name}</b><code>${hex}</code><code>${use}</code></div></div>`;

const html = page("Brand", "The Mindify visual system: mark, palette, type and image language.", `
<section class="section-tight" style="padding-bottom:0">
  <div class="wrap"><div class="banner">${BANNER(3)}</div></div>
</section>

<section>
  <div class="wrap" style="max-width:860px">
    <p class="eyebrow">Brand · Strata · Ink &amp; Amber</p>
    <h1>The visual system</h1>
    <p class="lede">One mark, one palette, one image language. Everything on this site is generated from the four functions in <code>tools/art.js</code>, which is why a new course costs a number rather than a design brief.</p>
  </div>
</section>

<section class="band-tint" style="padding-top:0">
  <div class="wrap">
    <h2>The mark, in four drawings</h2>
    <p class="lede" style="margin-bottom:34px">Strata is a filled disc, so unlike an outline mark it does not survive a dark background, and its three layers close into a blob below about 22px. Both are solved by drawing, not by CSS. Using the wrong file makes the logo disappear.</p>
    <div class="grid grid-2">
      <div class="card center"><div style="width:110px;margin:0 auto 18px">${MARK("bs1")}</div>
        <h4>On light grounds</h4><p class="muted" style="font-size:.9rem">Dark disc. Paper, white, any light panel. The default.</p></div>
      <div class="card center" style="background:var(--blue-900);border-color:var(--blue-700)">
        <div style="width:110px;margin:0 auto 18px">${MARK_ON_DARK("bs2")}</div>
        <h4 style="color:#fff">On dark grounds</h4><p style="font-size:.9rem;color:#BFCBE6">Light disc. Navy panels, hero art, the footer.</p></div>
      <div class="card center"><div style="width:64px;margin:0 auto 18px">${SMALL}</div>
        <h4>Below 22px</h4><p class="muted" style="font-size:.9rem">Two layers instead of three. Favicon, browser tab, list rows, embroidery.</p>
        <div style="display:flex;gap:18px;justify-content:center;align-items:flex-end;margin-top:16px">
          <div style="width:16px">${SMALL}</div><div style="width:22px">${SMALL}</div><div style="width:32px">${SMALL}</div></div></div>
      <div class="card center"><div style="width:96px;margin:0 auto 18px">${TILE}</div>
        <h4>App tile</h4><p class="muted" style="font-size:.9rem">Rounded square, full bleed, no inner disc. iOS and Android icons, avatars.</p></div>
    </div>
    <div class="card" style="margin-top:18px;border-left:3px solid var(--amber)">
      <h4>Never</h4>
      <p style="margin:0;font-size:.94rem">Outline it, add a shadow, rotate it, stretch it, recolour the amber, or put the light-ground version on a dark ground. Keep clear space equal to the amber band's height on all four sides.</p>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <h2>Palette</h2>
    <p class="lede" style="margin-bottom:24px">Two ambers, deliberately. <code>--amber</code> is for fills and never for text — it fails contrast at body sizes. <code>--amber-ink</code> is the text-safe tone. Every pairing used on this site meets WCAG AA.</p>
    <div class="pal-grid">
      ${sw("#17233D","Midnight","Headings, mark base")}
      ${sw("#2E4372","Deep blue","Buttons, links")}
      ${sw("#41598F","Mid blue","Eyebrows, small text")}
      ${sw("#8FA3CE","Cornflower","Strata layers, fills")}
      ${sw("#D99A3E","Amber","Accents — fills only")}
      ${sw("#9E6420","Amber ink","Amber as text")}
      ${sw("#E2E8F4","Tint 100","Pills, tinted panels")}
      ${sw("#FAF7F2","Paper","Page background")}
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <h2>Image language</h2>
    <p class="lede" style="margin-bottom:30px">Layered strata, decaying oscillation, the disc as a window, the amber base line. The hero is the mark at four hundred times its size. Four cover compositions cycle by module number, so covers never repeat next to each other.</p>
    <div class="grid grid-3">
      <div class="cv-demo card" style="padding:0;overflow:hidden">${COVER(1)}</div>
      <div class="cv-demo card" style="padding:0;overflow:hidden">${COVER(2)}</div>
      <div class="cv-demo card" style="padding:0;overflow:hidden">${COVER(3)}</div>
    </div>
    <div class="card" style="margin-top:22px">
      <h4>Adding a course</h4>
      <p style="margin:0;font-size:.94rem">Add it to <code>assets/js/data.js</code> and run <code>npm run build</code>. The cover generates itself from the module number. No image files, no design request, no upload.</p>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <h2>Type</h2>
    <p class="lede">Headings in <b>Fraunces</b> at -1.5% to -3.8% tracking — a soft serif with a humanist skeleton, warm rather than institutional. Body in <b>Inter</b>. Both open source, both free, both loaded from Google Fonts.</p>
    <div style="display:flex;flex-wrap:wrap;gap:40px;align-items:flex-end;margin-top:26px">
      <div><span style="font-family:var(--font-serif);font-size:3rem;letter-spacing:-.038em;color:var(--blue-900)">mindify</span>
        <p class="muted" style="margin:4px 0 0">Wordmark — lowercase</p></div>
      <div><span style="font-family:var(--font-serif);font-size:2rem;letter-spacing:.16em;color:var(--blue-900)">MINDIFY</span>
        <p class="muted" style="margin:4px 0 0">Tracked caps — certificates, seals</p></div>
    </div>
  </div>
</section>
`, {
  extraHead: `<style>
    .pal-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:14px}
    .sw{border-radius:16px;overflow:hidden;border:1px solid var(--line);background:#fff}
    .sw i{display:block;height:74px}
    .sw div{padding:10px 13px}
    .sw b{display:block;font-size:.8rem;font-weight:600}
    .sw code{display:block;font-size:.68rem;color:var(--muted);font-family:ui-monospace,monospace}
    .cv-demo svg{width:100%;height:auto;display:block}
    code{font-family:ui-monospace,monospace;font-size:.88em;background:var(--tint-50);padding:2px 6px;border-radius:5px}
  </style>`
});

fs.writeFileSync(path.join(__dirname, "..", "brand.html"), html);
console.log("  ✓ brand.html");
