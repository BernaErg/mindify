/* Mindify — module detail page, hydrated by ?c=<slug>&m=<n> */
(function () {
  "use strict";
  var ALL = window.MINDIFY_COURSES || [];
  var q = new URLSearchParams(location.search);
  var c = ALL.filter(function (x) { return x.slug === q.get("c"); })[0] || ALL[0];
  var mods = c.modules || [];
  var n = parseInt(q.get("m"), 10);
  var m = mods.filter(function (x) { return x.n === n; })[0] || mods[0];
  var $ = function (id) { return document.getElementById(id); };
  if (!m) { location.replace("course.html?c=" + c.slug); return; }

  document.title = "Module " + m.n + ": " + m.title + " · Mindify";
  $("m-back").setAttribute("href", "course.html?c=" + c.slug);
  $("m-back").textContent = "← " + c.title;
  $("m-all").setAttribute("href", "course.html?c=" + c.slug + "#modules");
  $("m-num").textContent = "Module " + m.n + " of " + mods.length + " · " + m.minutes + " min";
  $("m-title").textContent = m.title;
  $("m-tagline").textContent = "“" + m.tagline + "”";
  $("m-blurb").textContent = m.blurb;
  $("m-practice").textContent = m.practice;
  $("m-outcomes").innerHTML = m.outcomes.map(function (o) { return "<li>" + o + "</li>"; }).join("");
  $("m-keys").innerHTML = m.keys.map(function (k) { return '<span class="pill">' + k + "</span>"; }).join("");

  if (window.MindifyAuth) {
    window.MindifyAuth.getUser().then(function (u) {
      if (!u) return;
      $("m-cta").textContent = "Back to my dashboard";
      $("m-cta").setAttribute("href", "dashboard.html");
    });
  }
})();
