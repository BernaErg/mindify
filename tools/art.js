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
const wave = (x0, x1, y, amp, decay, cycles, stroke, sw, cls) => {
  const N = 200; let d = "";
  for (let i = 0; i <= N; i++) {
    const t = i / N, a = amp * Math.exp(-decay * t);
    d += (i ? "L" : "M") + (x0 + t * (x1 - x0)).toFixed(1) + " " + (y - a * Math.sin(t * Math.PI * cycles)).toFixed(1);
  }
  return `<path class="${cls || ""}" d="${d}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`;
};

/* The same oscillation, closed downward into a filled band. */
const band = (x0, x1, y, amp, decay, cycles, bottom, fill, op = 1, cls) => {
  const N = 180; let d = "";
  for (let i = 0; i <= N; i++) {
    const t = i / N, a = amp * Math.exp(-decay * t);
    d += (i ? "L" : "M") + (x0 + t * (x1 - x0)).toFixed(1) + " " + (y - a * Math.sin(t * Math.PI * cycles)).toFixed(1);
  }
  return `<path class="${cls || ""}" d="${d}L${x1} ${bottom}L${x0} ${bottom}Z" fill="${fill}" opacity="${op}"/>`;
};

/* Three layers in the mark's proportions: the amber base stays a sliver. */
const strata = (x0, x1, yTop, span, bottom, layer, base, anim) => {
  const s = span / 3;
  const c = anim ? ["st-a", "st-b", "st-c"] : ["", "", ""];
  return band(x0, x1, yTop,         s * .58, 3.3, 9, bottom, layer, .3,  c[0])
       + band(x0, x1, yTop + s,     s * .44, 3.6, 8, bottom, layer, .55, c[1])
       + band(x0, x1, yTop + s * 2, s * .28, 4.0, 7, bottom, base,  1,   c[2]);
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
    <g class="hr-rings">${rings(672, 256, 214, 336, 34, "#8FA3CE", 1.2, .2)}</g>
    <circle cx="672" cy="256" r="196" fill="url(#ahd)"/>
    <g clip-path="url(#ahdc)">${strata(456, 892, 250, 210, 480, "#8FA3CE", "#D99A3E", true)}</g>
    <circle cx="672" cy="256" r="196" fill="none" stroke="#8FA3CE" stroke-width="1.4" opacity=".36"/>
    ${wave(-70, 970, 478, 22, 3.2, 9, "#8FA3CE", 2.4, "hw-a")}
    ${wave(-70, 970, 501, 12, 3.6, 8, "#D99A3E", 1.8, "hw-b")}
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

/* =========================================================================
   Topic-specific course covers. Same palette, grain and strata grammar as
   the generic covers — each course just gains a motif that gestures at its
   subject. Keyed by slug; an unknown slug falls back to COVER().
   ========================================================================= */
const MOTIF = {
  // Attachment: a smaller form cradled by a larger one.
  "therapeutic-parenting": () => `
    ${rings(300, 142, 88, 164, 26, "#8FA3CE", 1.1, .22)}
    <path d="M206 142a94 94 0 0 1 188 0v104H206Z" fill="#2E4372" opacity=".5"/>
    <circle cx="300" cy="142" r="54" fill="#16213B"/>
    <circle cx="300" cy="142" r="54" fill="none" stroke="#8FA3CE" stroke-width="1.2" opacity=".45"/>
    <circle cx="300" cy="142" r="18" fill="#D99A3E"/>
    ${strata(-10, 450, 214, 96, 320, "#8FA3CE", "#D99A3E")}`,

  // Psychedelics: an entropic network — nodes and edges spreading from a core.
  "psychedelics-in-mental-health": () => `
    ${rings(214, 126, 44, 180, 26, "#8FA3CE", 1, .16)}
    <g stroke="#8FA3CE" stroke-width="1.4" opacity=".5" fill="none">
      <path d="M214 126 116 70M214 126 320 64M214 126 88 172M214 126 348 158M214 126 156 208M214 126 292 212"/>
      <path d="M116 70 320 64M88 172 156 208M348 158 292 212M320 64 348 158"/>
    </g>
    ${[[116,70,9],[320,64,11],[88,172,7],[348,158,10],[156,208,8],[292,212,9]]
      .map(([x,y,r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#8FA3CE" opacity=".85"/>`).join("")}
    <circle cx="214" cy="126" r="24" fill="#D99A3E"/>
    <circle cx="214" cy="126" r="38" fill="none" stroke="#D99A3E" stroke-width="1.2" opacity=".45"/>
    ${strata(-10, 450, 236, 80, 320, "#8FA3CE", "#D99A3E")}`,

  // Breathwork: expanding rings and one swell that rises then settles.
  "integrative-breathwork": () => `
    ${[0,1,2,3].map(i => `<circle cx="112" cy="140" r="${32 + i*26}" fill="none" stroke="#8FA3CE" stroke-width="${1.9 - i*.35}" opacity="${.5 - i*.1}"/>`).join("")}
    <circle cx="112" cy="140" r="19" fill="#D99A3E"/>
    <path d="M-10 206C58 206 92 92 162 92s102 114 172 114 108-38 118-38" fill="none"
      stroke="#8FA3CE" stroke-width="3.6" stroke-linecap="round" opacity=".9"/>
    <path d="M-10 234C58 234 92 150 162 150s102 84 172 84 108-24 118-24" fill="none"
      stroke="#5A76B0" stroke-width="2.8" stroke-linecap="round" opacity=".8"/>
    ${strata(-10, 450, 250, 74, 320, "#8FA3CE", "#D99A3E")}`,

  // Forest bathing: canopy mass behind, thin trunks in front.
  "forest-bathing": () => `
    ${[[40,60,72,.13],[130,38,88,.11],[236,56,80,.13],[330,34,84,.10],[410,70,66,.12]]
      .map(([x,y,r,o]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#8FA3CE" opacity="${o}"/>`).join("")}
    <circle cx="356" cy="58" r="24" fill="#D99A3E"/>
    <circle cx="356" cy="58" r="39" fill="none" stroke="#D99A3E" stroke-width="1.1" opacity=".38"/>
    ${[[46,.78,158],[74,.50,120],[108,.86,186],[144,.44,104],[176,.70,148],[216,.56,128],
       [250,.84,176],[290,.42,96],[322,.66,140],[360,.48,112],[396,.74,154]]
      .map(([x,o,h]) => `<rect x="${x}" y="${240-h}" width="${(3.6 + o*3.4).toFixed(1)}" height="${h}" rx="${(1.8 + o*1.7).toFixed(1)}"
        fill="#8FA3CE" opacity="${(o*.46).toFixed(2)}"/>`).join("")}
    ${strata(-10, 450, 230, 88, 320, "#8FA3CE", "#D99A3E")}`
};

const COVER_FOR = (slug, i) => {
  const motif = MOTIF[slug];
  if (!motif) return COVER(i);
  const k = "cf" + slug.replace(/[^a-z]/g, "");
  return `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Course cover" preserveAspectRatio="xMidYMid slice">
    <defs>${GRAIN(k, .18)}${SOFT(k, 26)}
      <linearGradient id="bg${k}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1C2B4B"/><stop offset="1" stop-color="#0E1728"/></linearGradient>
      <clipPath id="cp${k}"><rect width="440" height="300"/></clipPath></defs>
    <g clip-path="url(#cp${k})">
      <rect width="440" height="300" fill="url(#bg${k})"/>
      <circle cx="70" cy="34" r="110" fill="#2E4372" opacity=".38" filter="url(#sf${k})"/>
      ${motif()}
      <rect width="440" height="300" filter="url(#gr${k})" opacity=".5"/>
    </g></svg>`;
};

module.exports.COVER_FOR = COVER_FOR;
module.exports.MOTIF = MOTIF;

/* About-page hero. A sibling of HERO(), not a copy: the disc sits lower and
   smaller, the ring field is wider, and an amber disc balances the top. */
const HERO_ABOUT = () => `<svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Layered strata inside a disc">
  <defs>
    ${GRAIN("bh", .2)}${SOFT("bh", 46)}
    <linearGradient id="bhbg" x1="0" y1="0" x2=".9" y2="1">
      <stop offset="0" stop-color="#1E2E52"/><stop offset="1" stop-color="#0B1220"/></linearGradient>
    <linearGradient id="bhd" x1=".1" y1="0" x2=".9" y2="1">
      <stop offset="0" stop-color="#3A5285"/><stop offset="1" stop-color="#1B2947"/></linearGradient>
    <clipPath id="bhc"><rect width="900" height="520" rx="26"/></clipPath>
    <clipPath id="bhdc"><circle cx="702" cy="330" r="152"/></clipPath>
  </defs>
  <g clip-path="url(#bhc)">
    <rect width="900" height="520" fill="url(#bhbg)"/>
    <circle cx="700" cy="40" r="220" fill="#2E4372" opacity=".38" filter="url(#sfbh)"/>
    ${rings(702, 330, 168, 430, 30, "#8FA3CE", 1.1, .17)}
    <circle cx="702" cy="330" r="152" fill="url(#bhd)"/>
    <g clip-path="url(#bhdc)">${strata(560, 850, 358, 168, 500, "#8FA3CE", "#D99A3E")}</g>
    <circle cx="702" cy="330" r="152" fill="none" stroke="#8FA3CE" stroke-width="1.4" opacity=".34"/>
    <circle cx="548" cy="104" r="30" fill="#D99A3E" opacity=".9"/>
    <circle cx="548" cy="104" r="46" fill="none" stroke="#D99A3E" stroke-width="1.1" opacity=".35"/>
    ${wave(-70, 970, 452, 26, 3.2, 9, "#8FA3CE", 2.4, "hw-a")}
    ${wave(-70, 970, 480, 14, 3.6, 8, "#D99A3E", 1.9, "hw-b")}
    <rect width="900" height="520" filter="url(#grbh)" opacity=".6"/>
  </g></svg>`;

module.exports.HERO_ABOUT = HERO_ABOUT;
