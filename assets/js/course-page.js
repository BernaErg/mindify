/* Mindify — course detail page, hydrated from data.js by ?c=<slug> */
(function () {
  "use strict";
  var ALL = window.MINDIFY_COURSES || [];
  var slug = new URLSearchParams(location.search).get("c");
  var c = ALL.filter(function (x) { return x.slug === slug; })[0] || ALL[0];
  var $ = function (id) { return document.getElementById(id); };
  var live = c.status === "available";

  document.title = c.title + " · Mindify";
  $("c-level").textContent = c.level;
  $("c-title").textContent = c.title;
  $("c-sub").textContent = c.subtitle;
  $("c-summary").textContent = c.summary;
  $("c-meta").textContent =
    (live ? c.modules.length + " modules" : (c.outline || []).length + " topics") +
    " · " + c.hours + " hours · self-paced" + (live ? " · certificate on completion" : " · in development");

  $("c-why").textContent = c.why;
  if (!live) {
    $("c-why-h").textContent = "Not written yet";
    $("c-why").textContent =
      "This course is still being written. The outline below is published early so you can tell us what's missing — say the word and it moves up the queue.";
  }

  /* Banner art, reused from the generated system. */
  var i = ALL.indexOf(c);
  var b = document.querySelector('.banner');
  if (b && window.MINDIFY_ART_BANNER) b.innerHTML = window.MINDIFY_ART_BANNER(i + 1);

  if (live) {
    $("c-curriculum-h").textContent = c.modules.length + " modules, one thread";
    $("c-modules").innerHTML = c.modules.map(function (m) {
      return '<article class="card card-hover module-card reveal">' +
        '<div class="module-num">Module ' + m.n + ' · ' + m.minutes + ' min</div>' +
        '<h3>' + m.title + '</h3>' +
        '<p class="tagline">“' + m.tagline + '”</p>' +
        '<p>' + m.blurb + '</p>' +
        '<div class="card-foot">' +
          m.keys.slice(0, 2).map(function (k) { return '<span class="pill">' + k + '</span>'; }).join("") +
          '<a class="btn btn-ghost btn-sm" style="margin-left:auto" href="module.html?c=' + c.slug + '&m=' + m.n + '">Details</a>' +
        '</div></article>';
    }).join("");
  } else {
    $("c-curriculum-h").textContent = "Planned outline";
    $("c-modules").classList.add("hidden");
    var o = $("c-outline");
    o.classList.remove("hidden");
    o.innerHTML = '<ul class="tick-list">' +
      (c.outline || []).map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>";
    $("c-cta").textContent = "Tell us to write this one";
    $("c-cta").setAttribute("href", "contact.html");
    $("c-cta2").textContent = "Tell us to write this one";
    $("c-cta2").setAttribute("href", "contact.html");
    $("c-foot").textContent = "Want this sooner?";
  }

  if (window.MindifyAuth) {
    window.MindifyAuth.getUser().then(function (u) {
      if (!u || !live) return;
      [$("c-cta"), $("c-cta2")].forEach(function (el) {
        el.textContent = "Go to my dashboard";
        el.setAttribute("href", "dashboard.html");
      });
    });
  }
})();
