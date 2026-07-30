/* Mindify — sign in / sign up page */
(function () {
  "use strict";
  var A = window.MindifyAuth;
  var t = (window.MINDIFY_T && window.MINDIFY_T.auth) || {};
  var $ = function (id) { return document.getElementById(id); };
  var mode = "signin";

  var params = new URLSearchParams(location.search);
  var next = params.get("next") || "dashboard.html";
  if (!/^[\w.-]+\.html$/.test(next)) next = "dashboard.html";

  function show(el, msg) { if (msg != null) el.textContent = msg; el.classList.add("show"); }
  function hide(el) { el.classList.remove("show"); }
  function clearAlerts() { hide($("auth-err")); hide($("auth-ok")); }

  function setMode(m) {
    mode = m;
    var up = m === "signup";
    $("tab-in").classList.toggle("active", !up);
    $("tab-up").classList.toggle("active", up);
    $("tab-in").setAttribute("aria-pressed", String(!up));
    $("tab-up").setAttribute("aria-pressed", String(up));
    $("f-name").classList.toggle("hidden", !up);
    $("auth-heading").textContent = up ? t.createH : t.welcome;
    $("auth-sub").textContent = up ? t.createSub : t.welcomeSub;
    $("auth-submit").textContent = up ? t.tabUp : t.tabIn;
    $("i-pass").setAttribute("autocomplete", up ? "new-password" : "current-password");
    $("pw-hint").textContent = up ? t.pwHint : "";
    clearAlerts();
  }

  $("tab-in").addEventListener("click", function () { setMode("signin"); });
  $("tab-up").addEventListener("click", function () { setMode("signup"); });
  if (params.get("mode") === "signup") setMode("signup");

  /* Demo-mode banner + already-signed-in redirect */
  A.ready().then(function (m) {
    if (m === "demo") $("demo-banner").classList.add("show");
  });
  A.getUser().then(function (u) { if (u) location.replace(next); });

  $("auth-form").addEventListener("submit", function (e) {
    e.preventDefault();
    clearAlerts();
    var email = $("i-email").value.trim();
    var pass = $("i-pass").value;
    var name = $("i-name").value.trim();
    var btn = $("auth-submit");
    var label = btn.textContent;

    if (!email || !pass) return show($("auth-err"), t.errFill);
    if (mode === "signup" && !name) return show($("auth-err"), t.errName);
    if (mode === "signup" && pass.length < 8) return show($("auth-err"), t.errShort);

    btn.disabled = true; btn.textContent = t.working;
    var p = mode === "signup" ? A.signUp(email, pass, name) : A.signIn(email, pass);

    p.then(function (r) {
      btn.disabled = false; btn.textContent = label;
      if (r && r.needsConfirm) {
        // setMode rewrites the button label itself, so restore *before* calling it.
        setMode("signin");
        show($("auth-ok"), t.confirm);
        return;
      }
      location.href = next;
    }).catch(function (err) {
      btn.disabled = false; btn.textContent = label;
      show($("auth-err"), (err && err.message) || t.errGeneric);
    });
  });

  $("forgot").addEventListener("click", function (e) {
    e.preventDefault(); clearAlerts();
    var email = $("i-email").value.trim();
    if (!email) return show($("auth-err"), t.resetNeedEmail);
    A.resetPassword(email)
      .then(function () { show($("auth-ok"), t.resetSent); })
      .catch(function (err) { show($("auth-err"), err.message); });
  });
})();
