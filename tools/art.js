/* =========================================================================
   Mindify — Direction A visual system.
   Every image on the site is generated from this file at build time, so
   covers ship as inline SVG: no image requests, no JS, infinitely scalable.
   The vocabulary is the Strata mark's own geometry and nothing else.
   ========================================================================= */

const GRAIN = (k, o = 0.18) => `<filter id="gr${k}" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="n"/>
    <feColorMatrix type="saturate" values="0" in="n" result="m"/>
    <feComponentTransfer in="m"><feFuncA type="linear" slope="${o}"/></feComponentTransfer></filter>`;

const SOFT = (k, dev = 34) => `<filter id="sf${k}" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="${dev}"/></filter>`;

/* An open decaying oscillation — the mark's line, at any size. */
const wave = (x0, x1, y, amp, decay, cycles, stroke, sw) => {
  const N = 200; let d = "";
  for (let i = 0; i <= N; i++) {
    const t = i / N, a = amp * Math.exp(-decay * t);
    d += (i ? "L" : "M") + (x0 + t * (x1 - x0)).toFixed(1) + " " + (y - a * Math.sin(t * Math.PI * cycles)).toFixed(1);
  }
  return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`;
};

/* The same oscillation, closed downward into a filled band. */
const band = (x0, x1, y, amp, decay, cycles, bottom, fill, op = 1) => {
  const N = 180; let d = "";
  for (let i = 0; i <= N; i++) {
    const t = i / N, a = amp * Math.exp(-decay * t);
    d += (i ? "L" : "M") + (x0 + t * (x1 - x0)).toFixed(1) + " " + (y - a * Math.sin(t * Math.PI * cycles)).toFixed(1);
  }
  return `<path d="${d}L${x1} ${bottom}L${x0} ${bottom}Z" fill="${fill}" opacity="${op}"/>`;
};

/* Three layers in the mark's proportions: the amber base stays a sliver. */
const strata = (x0, x1, yTop, span, bottom, layer, base) => {
  const s = span / 3;
  return band(x0, x1, yTop,         s * .58, 3.3, 9, bottom, layer, .3)
       + band(x0, x1, yTop + s,     s * .44, 3.6, 8, bottom, layer, .55)
       + band(x0, x1, yTop + s * 2, s * .28, 4.0, 7, bottom, base,  1);
};

const rings = (cx, cy, from, to, step, stroke, sw, op) => {
  let out = "";
  for (let r = from; r <= to; r += step)
    out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-width="${sw}" opacity="${op}"/>`;
  return out;
};

/* ---------------- the mark ---------------- */
const strataInner = (k, layer, base) => `<g clip-path="url(#lc${k})">
    <path d="M-2 30C3 10 8 50 13 30s9 26 14 13 8 14 13 5 9 5 22 3v62H-2Z" fill="${layer}" opacity=".3"/>
    <path d="M-2 41C3 26 8 58 13 41s9 21 14 10 8 11 13 4 9 4 22 2v40H-2Z" fill="${layer}" opacity=".55"/>
    <path d="M-2 52C3 44 8 62 13 52s9 13 14 6 8 7 13 2 9 2 22 1v26H-2Z" fill="${base}"/></g>`;

// On light grounds. The disc is dark, so it reads against paper.
const MARK = (k = "a") => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <defs><clipPath id="lc${k}"><circle cx="32" cy="32" r="29"/></clipPath>
    <linearGradient id="lg${k}" x1="0" y1="0" x2=".8" y2="1">
      <stop offset="0" stop-color="#2E4372"/><stop offset="1" stop-color="#17233D"/></linearGradient></defs>
  <circle cx="32" cy="32" r="29" fill="url(#lg${k})"/>${strataInner(k, "#8FA3CE", "#D99A3E")}</svg>`;

// On dark grounds. Inverted, or the disc disappears into the background.
const MARK_ON_DARK = (k = "b") => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <defs><clipPath id="lc${k}"><circle cx="32" cy="32" r="29"/></clipPath>
    <linearGradient id="lg${k}" x1="0" y1="0" x2=".8" y2="1">
      <stop offset="0" stop-color="#A8B9DC"/><stop offset="1" stop-color="#6E85B8"/></linearGradient></defs>
  <circle cx="32" cy="32" r="29" fill="url(#lg${k})"/>${strataInner(k, "#2E4372", "#D99A3E")}</svg>`;

/* ---------------- hero ---------------- */
const HERO = () => `<svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Layers of turbulence settling into a level line">
  <defs>${GRAIN("ah", .2)}${SOFT("ah", 42)}
    <linearGradient id="ahbg" x1="0" y1="0" x2=".9" y2="1">
      <stop offset="0" stop-color="#1C2B4B"/><stop offset="1" stop-color="#0C1424"/></linearGradient>
    <linearGradient id="ahd" x1=".1" y1="0" x2=".9" y2="1">
      <stop offset="0" stop-color="#3A5285"/><stop offset="1" stop-color="#1B2947"/></linearGradient>
    <clipPath id="ahc"><rect width="900" height="520" rx="26"/></clipPath>
    <clipPath id="ahdc"><circle cx="672" cy="256" r="196"/></clipPath></defs>
  <g clip-path="url(#ahc)">
    <rect width="900" height="520" fill="url(#ahbg)"/>
    <circle cx="770" cy="70" r="200" fill="#2E4372" opacity=".42" filter="url(#sfah)"/>
    ${rings(672, 256, 214, 336, 34, "#8FA3CE", 1.2, .2)}
    <circle cx="672" cy="256" r="196" fill="url(#ahd)"/>
    <g clip-path="url(#ahdc)">${strata(476, 872, 250, 210, 470, "#8FA3CE", "#D99A3E")}</g>
    <circle cx="672" cy="256" r="196" fill="none" stroke="#8FA3CE" stroke-width="1.4" opacity=".36"/>
    ${wave(0, 900, 478, 22, 3.2, 9, "#8FA3CE", 2.4)}
    ${wave(0, 900, 501, 12, 3.6, 8, "#D99A3E", 1.8)}
    <rect width="900" height="520" filter="url(#grah)" opacity=".6"/>
  </g></svg>`;

/* ---------------- course covers ----------------
   Four compositions, cycled. A new course costs one number. */
const COVER = (i) => {
  const k = "cv" + i;
  const body = [
    `${rings(300, 132, 106, 190, 28, "#8FA3CE", 1.1, .24)}
     <circle cx="300" cy="132" r="96" fill="#2E4372"/>
     <g clip-path="url(#dc${k})">${strata(200, 400, 128, 110, 240, "#8FA3CE", "#D99A3E")}</g>
     <circle cx="300" cy="132" r="96" fill="none" stroke="#8FA3CE" stroke-width="1.2" opacity=".38"/>`,
    `${strata(-10, 450, 132, 180, 320, "#8FA3CE", "#D99A3E")}
     <circle cx="356" cy="72" r="28" fill="#D99A3E"/>`,
    `${wave(-10, 450, 148, 60, 3.2, 11, "#8FA3CE", 3.4)}
     ${wave(-10, 450, 194, 36, 3.6, 9, "#5A76B0", 2.6)}
     ${wave(-10, 450, 230, 19, 4, 7, "#D99A3E", 2.2)}
     <circle cx="418" cy="148" r="13" fill="#D99A3E"/>`,
    `${strata(-10, 450, 152, 168, 320, "#8FA3CE", "#D99A3E")}
     <circle cx="152" cy="110" r="58" fill="#111C31" opacity=".8"/>
     <circle cx="152" cy="110" r="58" fill="none" stroke="#8FA3CE" stroke-width="1.2" opacity=".45"/>
     <circle cx="152" cy="110" r="18" fill="#D99A3E"/>`
  ][(i - 1) % 4];
  return `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Course cover" preserveAspectRatio="xMidYMid slice">
    <defs>${GRAIN(k, .18)}${SOFT(k, 26)}
      <linearGradient id="bg${k}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1C2B4B"/><stop offset="1" stop-color="#0E1728"/></linearGradient>
      <clipPath id="cp${k}"><rect width="440" height="300"/></clipPath>
      <clipPath id="dc${k}"><circle cx="300" cy="132" r="96"/></clipPath></defs>
    <g clip-path="url(#cp${k})">
      <rect width="440" height="300" fill="url(#bg${k})"/>
      <circle cx="70" cy="34" r="110" fill="#2E4372" opacity=".42" filter="url(#sf${k})"/>
      ${body}
      <rect width="440" height="300" filter="url(#gr${k})" opacity=".5"/>
    </g></svg>`;
};

/* Wide banner for interior page headers. */
const BANNER = (i) => `<svg viewBox="0 0 1200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Section banner" preserveAspectRatio="xMidYMid slice">
  <defs>${GRAIN("bn" + i, .16)}${SOFT("bn" + i, 40)}
    <linearGradient id="bnb${i}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1C2B4B"/><stop offset="1" stop-color="#0D1526"/></linearGradient></defs>
  <rect width="1200" height="260" fill="url(#bnb${i})"/>
  <circle cx="1050" cy="30" r="170" fill="#2E4372" opacity=".4" filter="url(#sfbn${i})"/>
  ${strata(-10, 1210, 150, 150, 280, "#8FA3CE", "#D99A3E")}
  <rect width="1200" height="260" filter="url(#grbn${i})" opacity=".5"/></svg>`;

module.exports = { MARK, MARK_ON_DARK, HERO, COVER, BANNER, wave, strata, rings, GRAIN, SOFT };
