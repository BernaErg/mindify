/* Mindify — dashboard: per-course progress and certificates */
(function () {
  "use strict";
  var A = window.MindifyAuth;
  var ALL = (window.MINDIFY_COURSES || []).filter(function (c) { return c.status === "available"; });
  var $ = function (id) { return document.getElementById(id); };
  var TICK = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
  var CERT = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="M8.4 13.6 7 22l5-2.4L17 22l-1.4-8.4"/></svg>';

  var user = null;
  var done = {};      // slug -> [module numbers]
  var busy = false;

  function totals() {
    var t = 0, d = 0;
    ALL.forEach(function (c) { t += c.modules.length; d += (done[c.slug] || []).length; });
    return { total: t, done: d };
  }

  function render() {
    var g = totals();
    var pct = g.total ? Math.round((g.done / g.total) * 100) : 0;
    $("bar").style.width = pct + "%";
    $("p-count").textContent = g.done + " of " + g.total + " modules complete across " +
      ALL.length + " course" + (ALL.length === 1 ? "" : "s");
    $("p-pct").textContent = pct + "%";
    $("u-sub").textContent = ALL.length === 1 ? ALL[0].title : ALL.length + " courses in progress";

    $("courses").innerHTML = ALL.map(function (c) {
      var list = done[c.slug] || [];
      var cp = Math.round((list.length / c.modules.length) * 100);
      var complete = list.length === c.modules.length;
      var next = c.modules.filter(function (m) { return list.indexOf(m.n) === -1; })[0];

      return '<div class="course-block" data-slug="' + c.slug + '">' +
        '<div class="head"><div><h2 style="font-size:1.5rem;margin-bottom:.15em">' + c.title + '</h2>' +
        '<p class="muted" style="margin:0;font-size:.92rem">' + c.subtitle + '</p></div>' +
        '<span class="pill' + (complete ? ' pill-done' : '') + '">' + list.length + ' / ' + c.modules.length + ' complete</span></div>' +
        '<div class="bar-wrap"><div class="progress-bar"><div class="progress-fill" style="width:' + cp + '%"></div></div></div>' +
        '<div class="dash-grid"><div>' +
        c.modules.map(function (m) {
          var isDone = list.indexOf(m.n) !== -1;
          return '<div class="mod-row ' + (isDone ? "done" : "") + '">' +
            '<button class="mod-check ' + (isDone ? "done" : "") + '" data-slug="' + c.slug + '" data-n="' + m.n + '" type="button" ' +
            'aria-pressed="' + isDone + '" aria-label="Mark module ' + m.n + ' ' + (isDone ? "incomplete" : "complete") + '">' + TICK + '</button>' +
            '<div class="mod-body"><b>' + m.n + '. ' + m.title + '</b>' +
            '<span>' + m.minutes + ' min · ' + m.keys.slice(0, 3).join(" · ") + '</span></div>' +
            (isDone ? '<span class="pill pill-done">Complete</span>' : '') +
            '<a class="btn btn-ghost btn-sm" href="module.html?c=' + c.slug + '&m=' + m.n + '">Open</a></div>';
        }).join("") +
        '</div><aside>' +
          '<div class="cert-panel' + (complete ? ' unlocked' : '') + '">' +
            '<div style="width:46px;height:46px;margin:0 auto 14px;color:var(--blue-500)">' + CERT + '</div>' +
            '<h3 style="font-size:1.1rem">' + (complete ? "Certificate ready" : "Certificate of Completion") + '</h3>' +
            '<p class="muted" style="font-size:.9rem">' + (complete
              ? "Congratulations — all " + c.modules.length + " modules done."
              : (c.modules.length - list.length) + " module" + (c.modules.length - list.length === 1 ? "" : "s") + " to go.") + '</p>' +
            '<button class="btn btn-primary btn-block cert-btn" data-slug="' + c.slug + '" type="button"' +
            (complete ? "" : " disabled") + ' style="margin-top:14px">Download certificate</button>' +
          '</div>' +
          '<div class="card" style="margin-top:14px"><h4>Next practice</h4>' +
          '<p style="font-size:.92rem;margin:0">' + (next
            ? "Module " + next.n + " — " + next.practice
            : "All done. The long game now: ‘good enough’, repeatedly, for years.") + '</p></div>' +
        '</aside></div></div>';
    }).join("");

    $("courses").querySelectorAll(".mod-check").forEach(function (b) {
      b.addEventListener("click", function () { toggle(b.dataset.slug, Number(b.dataset.n)); });
    });
    $("courses").querySelectorAll(".cert-btn").forEach(function (b) {
      b.addEventListener("click", function () { download(b.dataset.slug); });
    });
  }

  function toggle(slug, n) {
    if (busy) return;
    busy = true;
    var list = done[slug] || [];
    var willBeDone = list.indexOf(n) === -1;
    var before = list.slice();
    done[slug] = willBeDone ? list.concat([n]).sort(function (a, b) { return a - b; })
                            : list.filter(function (x) { return x !== n; });
    render();
    A.setModuleComplete(slug, n, willBeDone).catch(function (err) {
      done[slug] = before; render();
      $("dash-err").textContent = "Couldn't save that just now: " + (err.message || "unknown error");
      $("dash-err").classList.add("show");
    }).finally(function () { busy = false; });
  }

  function download(slug) {
    var c = ALL.filter(function (x) { return x.slug === slug; })[0];
    try {
      window.MindifyCertificate.generate({
        name: user.name, course: c.title, subtitle: c.subtitle,
        modules: c.modules.map(function (m) { return "Module " + m.n + ": " + m.title; })
      });
    } catch (e) {
      $("dash-err").textContent = e.message;
      $("dash-err").classList.add("show");
    }
  }

  $("signout").addEventListener("click", function () {
    A.signOut().then(function () { location.href = "index.html"; });
  });

  A.requireUser().then(function (u) {
    if (!u) return;
    user = u;
    $("u-name").textContent = u.name;
    return A.ready().then(function (mode) {
      if (mode === "demo") {
        $("dash-note").innerHTML = "<b>Demo mode.</b> Progress is saved in this browser only. Connect Supabase to make it follow you across devices.";
        $("dash-note").classList.add("show");
      }
      return Promise.all(ALL.map(function (c) {
        return A.getProgress(c.slug).then(function (p) { done[c.slug] = p; });
      }));
    }).then(render);
  }).catch(function (err) {
    $("dash-err").textContent = "Couldn't load your progress: " + ((err && err.message) || "unknown error") + ". Try reloading the page.";
    $("dash-err").classList.add("show");
  });
})();
