/* Reusable markup fragments. */
const { COURSE, TESTIMONIALS } = require("./data-node");

const heroArt = `<svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An illustration of the window of tolerance: an agitated line settling into a calm band">
  <defs>
    <linearGradient id="band" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#E4EDE7"/><stop offset="1" stop-color="#F1F6F2"/>
    </linearGradient>
    <linearGradient id="ln" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#BE7454"/><stop offset=".55" stop-color="#4A7D6B"/><stop offset="1" stop-color="#2C5548"/>
    </linearGradient>
  </defs>
  <circle cx="220" cy="220" r="208" fill="#fff" opacity=".55"/>
  <circle cx="220" cy="220" r="208" fill="none" stroke="#DFE6E0"/>
  <rect x="44" y="176" width="352" height="90" rx="45" fill="url(#band)"/>
  <text x="220" y="150" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" letter-spacing="2.6" fill="#8FB09E">HYPERAROUSAL</text>
  <text x="220" y="305" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" letter-spacing="2.6" fill="#8FB09E">HYPOAROUSAL</text>
  <text x="220" y="226" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="15" letter-spacing="1.4" fill="#4A7D6B">window of tolerance</text>
  <path d="M44 221 C60 96 76 344 92 221 C106 118 120 322 134 221 C147 140 160 300 173 221 C184 168 195 274 206 221 C215 186 224 256 233 221 C240 199 247 243 254 221 C260 208 266 234 272 221 C277 213 282 229 287 221 L396 221"
        fill="none" stroke="url(#ln)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="396" cy="221" r="7.5" fill="#2C5548"/>
  <circle cx="396" cy="221" r="15" fill="none" stroke="#2C5548" stroke-width="1.2" opacity=".35"/>
</svg>`;

const icons = {
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 9 19a3 3 0 0 0 3-1.5"/><path d="M12 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 15 19a3 3 0 0 1-3-1.5"/><path d="M12 5v14"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 1.9"/></svg>`,
  cert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="M8.4 13.6 7 22l5-2.4L17 22l-1.4-8.4"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.7-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.3 12 20 12 20Z"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-8 5-13 16-14 0 11-5 15-11 15-2.8 0-5-1.2-5-1Z"/><path d="M9 15c1.5-3 3.7-5.2 7-6.6"/></svg>`,
  people: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.8 19a6.2 6.2 0 0 1 12.4 0"/><path d="M16 5.4A3.2 3.2 0 0 1 16 11"/><path d="M17.6 13.6A6.2 6.2 0 0 1 21.2 19"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 20 6v6c0 4.5-3.3 7.8-8 9-4.7-1.2-8-4.5-8-9V6Z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>`,
  repeat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16"/><path d="M4 20v-4h4"/></svg>`,
};

function moduleCard(m, { link = true } = {}) {
  return `<article class="card card-hover module-card reveal">
        <div class="module-num">Module ${m.n} · ${m.minutes} min</div>
        <h3>${m.title.replace(/^Module \d+ — /, "")}</h3>
        <p class="tagline">“${m.tagline}”</p>
        <p>${m.blurb}</p>
        <ul>${m.outcomes.slice(0, 3).map((o) => `<li>${o}</li>`).join("")}</ul>
        <div class="card-foot">
          ${m.keys.slice(0, 2).map((k) => `<span class="pill">${k}</span>`).join("")}
          ${link ? `<a class="btn btn-ghost btn-sm" style="margin-left:auto" href="module.html?m=${m.n}">Details</a>` : ""}
        </div>
      </article>`;
}

function testimonialCard(t) {
  return `<figure class="quote reveal">
        <div class="stars">★★★★★</div>
        <blockquote>“${t.quote}”</blockquote>
        <figcaption class="who">
          <span class="avatar">${t.initials}</span>
          <span><b>${t.name}</b><span>${t.role}</span></span>
        </figcaption>
      </figure>`;
}

module.exports = { heroArt, icons, moduleCard, testimonialCard, COURSE, TESTIMONIALS };
