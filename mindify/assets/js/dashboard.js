/* Mindify — student dashboard: progress tracking + certificate unlock */
(function () {
  "use strict";
  var A = window.MindifyAuth;
  var COURSE = window.MINDIFY_COURSE;
  var $ = function (id) { return document.getElementById(id); };
  var TOTAL = COURSE.modules.length;
  var user = null;
  var done = [];
  var busy = false;

  var TICK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';

  function render() {
    var pct = Math.round((done.length / TOTAL) * 100);
    $("bar").style.width = pct + "%";
    $("p-count").textContent = done.length + " of " + TOTAL + " modules complete";
    $("p-pct").textContent = pct + "%";

    $("mod-list").innerHTML = COURSE.modules.map(function (m) {
      var isDone = done.indexOf(m.n) !== -1;
      return '<div class="mod-row ' + (isDone ? "done" : "") + '">' +
        '<button class="mod-check ' + (isDone ? "done" : "") + '" data-n="' + m.n + '" type="button" ' +
        'aria-pressed="' + isDone + '" aria-label="Mark module ' + m.n + ' ' + (isDone ? "incomplete" : "complete") + '">' + TICK + '</button>' +
        '<div class="mod-body"><b>' + m.n + '. ' + m.title.replace(/^Module \d+ — /, "") + '</b>' +
        '<span>' + m.minutes + ' min · ' + m.keys.slice(0, 3).join(" · ") + '</span></div>' +
        (isDone ? '<span class="pill pill-done">Complete</span>' : '') +
        '<a class="btn btn-ghost btn-sm" href="module.html?m=' + m.n + '">Open</a>' +
        '</div>';
    }).join("");

    $("mod-list").querySelectorAll(".mod-check").forEach(function (b) {
      b.addEventListener("click", function () { toggle(Number(b.dataset.n)); });
    });

    var nextMod = COURSE.modules.find(function (m) { return done.indexOf(m.n) === -1; });
    $("next-practice").textContent = nextMod
      ? "Module " + nextMod.n + " — " + nextMod.practice
      : "All six done. The long game now: ‘good enough’, repeatedly, for years.";

    var complete = done.length === TOTAL;
    $("cert-panel").classList.toggle("unlocked", complete);
    $("cert-btn").disabled = !complete;
    $("cert-title").textContent = complete ? "Your certificate is ready" : "Certificate of Completion";
    $("cert-msg").textContent = complete
      ? "Congratulations. Six modules, twelve hours, and a genuinely different lens."
      : (TOTAL - done.length) + " module" + (TOTAL - done.length === 1 ? "" : "s") + " to go before this unlocks.";
  }

  function toggle(n) {
    if (busy) return;
    busy = true;
    var willBeDone = done.indexOf(n) === -1;
    // Optimistic update, rolled back if the write fails.
    var before = done.slice();
    done = willBeDone ? done.concat([n]).sort(function (a, b) { return a - b; }) : done.filter(function (x) { return x !== n; });
    render();
    A.setModuleComplete(n, willBeDone).catch(function (err) {
      done = before; render();
      $("dash-err").textContent = "Couldn't save that just now: " + (err.message || "unknown error");
      $("dash-err").classList.add("show");
    }).finally(function () { busy = false; });
  }

  $("signout").addEventListener("click", function () {
    A.signOut().then(function () { location.href = "index.html"; });
  });

  $("cert-btn").addEventListener("click", function () {
    try {
      window.MindifyCertificate.generate({
        name: user.name,
        course: COURSE.title,
        subtitle: COURSE.subtitle,
        modules: COURSE.modules.map(function (m) { return "Module " + m.n + ": " + m.title.replace(/^Module \d+ — /, ""); })
      });
    } catch (e) {
      $("dash-err").textContent = e.message;
      $("dash-err").classList.add("show");
    }
  });

  A.requireUser().then(function (u) {
    if (!u) return;
    user = u;
    $("u-name").textContent = u.name;
    return A.ready().then(function (m) {
      if (m === "demo") {
        $("dash-note").innerHTML = "<b>Demo mode.</b> Progress is saved in this browser only. Connect Supabase to make it follow you across devices.";
        $("dash-note").classList.add("show");
      }
      return A.getProgress();
    }).then(function (p) { done = p; render(); });
  }).catch(function (err) {
    $("dash-err").textContent = "Couldn't load your progress: " + ((err && err.message) || "unknown error") + ". Try reloading the page.";
    $("dash-err").classList.add("show");
    render();
  });
})();
