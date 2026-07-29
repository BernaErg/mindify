/* Mindify — module detail page, hydrated from the query string */
(function () {
  "use strict";
  var COURSE = window.MINDIFY_COURSE;
  var n = parseInt(new URLSearchParams(location.search).get("m"), 10);
  var m = COURSE.modules.find(function (x) { return x.n === n; }) || COURSE.modules[0];
  var $ = function (id) { return document.getElementById(id); };

  document.title = "Module " + m.n + ": " + m.title.replace(/^Module \d+ — /, "") + " · Mindify";
  $("m-num").textContent = "Module " + m.n + " of " + COURSE.modules.length + " · " + m.minutes + " min";
  $("m-title").textContent = m.title.replace(/^Module \d+ — /, "");
  $("m-tagline").textContent = "“" + m.tagline + "”";
  $("m-blurb").textContent = m.blurb;
  $("m-practice").textContent = m.practice;
  $("m-outcomes").innerHTML = m.outcomes.map(function (o) { return "<li>" + o + "</li>"; }).join("");
  $("m-keys").innerHTML = m.keys.map(function (k) { return '<span class="pill">' + k + "</span>"; }).join("");

  if (window.MindifyAuth) {
    window.MindifyAuth.getUser().then(function (u) {
      if (!u) return;
      var cta = $("m-cta");
      cta.textContent = "Back to my dashboard";
      cta.setAttribute("href", "dashboard.html");
    });
  }
})();
