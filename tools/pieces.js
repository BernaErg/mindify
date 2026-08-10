/* Reusable markup fragments. Everything takes a language object `L`. */
const { PLATFORM, COURSES, COURSE, TESTIMONIALS } = require("./data-node");
const { HERO, COVER, COVER_FOR, BANNER } = require("./art");

const heroArt = HERO();

const icons = {
  brain: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 9 19a3 3 0 0 0 3-1.5"/><path d="M12 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 15 19a3 3 0 0 1-3-1.5"/><path d="M12 5v14"/></svg>`,
  clock: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 1.9"/></svg>`,
  cert: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="M8.4 13.6 7 22l5-2.4L17 22l-1.4-8.4"/></svg>`,
  heart: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.7-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.3 12 20 12 20Z"/></svg>`,
  leaf: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-8 5-13 16-14 0 11-5 15-11 15-2.8 0-5-1.2-5-1Z"/><path d="M9 15c1.5-3 3.7-5.2 7-6.6"/></svg>`,
  people: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.8 19a6.2 6.2 0 0 1 12.4 0"/><path d="M16 5.4A3.2 3.2 0 0 1 16 11"/><path d="M17.6 13.6A6.2 6.2 0 0 1 21.2 19"/></svg>`,
  shield: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 20 6v6c0 4.5-3.3 7.8-8 9-4.7-1.2-8-4.5-8-9V6Z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>`,
  repeat: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16"/><path d="M4 20v-4h4"/></svg>`,
};

/* Language-aware field lookup: falls back to English when a translation is absent. */
const f = (obj, key, L) => (L.code !== "en" && obj.tr && obj.tr[key]) || obj[key];

function courseCard(L, c, i) {
  const t = L.courses;
  const live = c.status === "available";
  const count = live ? `${c.modules.length} ${t.modules}` : `${(c.outline || []).length} ${t.topics}`;
  return `<article class="card card-hover module-card reveal">
        <div class="cover">
          <span class="cover-tag">${live ? t.availableNow : t.inDevelopment}</span>
          ${COVER_FOR(c.slug, i + 1)}
        </div>
        <h3>${c.title}</h3>
        <div class="card-foot">
          <span class="foot-pills"><span class="pill">${count}</span><span class="pill">${c.hours} ${t.hours}</span></span>
          ${live
            ? `<a class="btn btn-primary btn-sm stretch" href="course.html?c=${c.slug}">${t.viewCourse}</a>`
            : `<span class="pill pill-soon">${t.comingSoon}</span>`}
        </div>
      </article>`;
}

function audienceCard(L, a) {
  const d = L.code !== "en" && a.tr ? a.tr : a;
  return `<div class="aud reveal" style="--accent:${a.accent};--chip:${a.chip}">
        <span class="chip">${icons[a.icon]}</span>
        <div><h4>${d.label}</h4><p>${d.line}</p><span class="tagx">${d.tag}</span></div>
      </div>`;
}

function testimonialCard(L, t) {
  const quote = L.code !== "en" && t.trQuote ? t.trQuote : t.quote;
  const role = L.code !== "en" && t.trRole ? t.trRole : t.role;
  return `<figure class="quote reveal">
        <div class="stars">★★★★★</div>
        <blockquote>“${quote}”</blockquote>
        <figcaption class="who">
          <span class="avatar">${t.initials}</span>
          <span><b>${t.name}</b><span>${role}</span></span>
        </figcaption>
      </figure>`;
}

module.exports = { heroArt, icons, courseCard, audienceCard, testimonialCard, f,
                   PLATFORM, COURSES, COURSE, TESTIMONIALS, HERO, COVER, BANNER };
