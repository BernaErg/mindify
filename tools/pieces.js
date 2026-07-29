/* Reusable markup fragments. */
const { COURSE, TESTIMONIALS } = require("./data-node");

const { HERO, COVER, BANNER } = require("./art");

const heroArt = HERO();

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
        <div class="cover"><span class="cover-tag">Module ${m.n}</span>${COVER(m.n)}</div>
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

module.exports = { heroArt, icons, moduleCard, testimonialCard, COURSE, TESTIMONIALS, HERO, COVER, BANNER };
