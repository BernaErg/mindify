/* Mindify — course detail page, hydrated from data.js by ?c=<slug> */
(function () {
  "use strict";
  var T = window.MINDIFY_T || {};
  var t = T.course || {}, tc = T.courses || {};
  var LANG = T.lang || "en";
  var loc = function (o, k) { return (LANG !== "en" && o.tr && o.tr[k]) || o[k]; };
  var ALL = window.MINDIFY_COURSES || [];
  var slug = new URLSearchParams(location.search).get("c");
  var c = ALL.filter(function (x) { return x.slug === slug; })[0] || ALL[0];
  var $ = function (id) { return document.getElementById(id); };
  var live = c.status === "available";

  document.title = c.title + " · Mindify";
  $("c-level").textContent = loc(c, "level");
  $("c-title").textContent = c.title;
  $("c-sub").textContent = loc(c, "subtitle");
  $("c-summary").textContent = loc(c, "summary");
  $("c-meta").textContent =
    (live ? c.modules.length + " " + tc.modules : (c.outline || []).length + " " + tc.topics) +
    " · " + c.hours + " " + tc.hours + " · " + t.metaSelf +
    " · " + (live ? t.metaCert : t.metaDev);

  if (c.notice) {
    var nb = $("c-notice");
    nb.innerHTML = "<b>" + t.noticeLead + "</b> " + loc(c, "notice");
    nb.classList.remove("hidden");
  }

  $("c-why").textContent = loc(c, "why");
  if (!live) {
    $("c-why-h").textContent = t.devH2;
    $("c-why").textContent = t.devP;
  }

  var oc = (LANG !== "en" && c.tr && c.tr.outcomes) || c.outcomes || [];
  var ocEl = $("c-outcomes");
  if (ocEl) {
    ocEl.innerHTML = oc.map(function (o) { return "<li>" + o + "</li>"; }).join("");
    if (!oc.length) ocEl.closest("section").classList.add("hidden");
  }

  /* Banner art, reused from the generated system. */
  var i = ALL.indexOf(c);
  var b = document.getElementById("c-banner");
  if (b && window.MINDIFY_ART_BANNER) b.innerHTML = window.MINDIFY_ART_BANNER(i + 1);

  if (live) {
    $("c-curriculum-h").textContent = t.curriculum ? t.curriculum.replace("{n}", c.modules.length) : c.modules.length;
    $("c-modules").innerHTML = c.modules.map(function (m) {
      return '<article class="card card-hover module-card reveal">' +
        '<div class="module-num">Module ' + m.n + ' · ' + m.minutes + ' min</div>' +
        '<h3>' + m.title + '</h3>' +
        '<p class="tagline">“' + m.tagline + '”</p>' +
        '<p>' + m.blurb + '</p>' +
        '<div class="card-foot">' +
          '<span class="foot-pills">' + m.keys.slice(0, 2).map(function (k) { return '<span class="pill">' + k + '</span>'; }).join("") + '</span>' +
          '<a class="btn btn-ghost btn-sm stretch" href="module.html?c=' + c.slug + '&m=' + m.n + '">Details</a>' +
        '</div></article>';
    }).join("");
  } else {
    $("c-curriculum-h").textContent = t.outlineH;
    $("c-modules").classList.add("hidden");
    var o = $("c-outline");
    o.classList.remove("hidden");
    o.innerHTML = '<ul class="tick-list">' +
      (c.outline || []).map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>";
    $("c-cta").textContent = t.devCta;
    $("c-cta").setAttribute("href", "contact.html");
    $("c-cta2").textContent = t.devCta;
    $("c-cta2").setAttribute("href", "contact.html");
    $("c-foot").textContent = t.devFoot;
  }

  if (window.MindifyAuth) {
    window.MindifyAuth.getUser().then(function (u) {
      if (!u || !live) return;
      [$("c-cta"), $("c-cta2")].forEach(function (el) {
        el.textContent = t.dashboard;
        el.setAttribute("href", "dashboard.html");
      });
    });
  }
})();
