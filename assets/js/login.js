/* Mindify — sign in / sign up page */
(function () {
  "use strict";
  var A = window.MindifyAuth;
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
    $("auth-heading").textContent = up ? "Create your account" : "Welcome back";
    $("auth-sub").textContent = up
      ? "Thirty seconds, and the whole course is yours."
      : "Sign in to pick up where you left off.";
    $("auth-submit").textContent = up ? "Create account" : "Sign in";
    $("i-pass").setAttribute("autocomplete", up ? "new-password" : "current-password");
    $("pw-hint").textContent = up ? "At least 8 characters." : "";
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

    if (!email || !pass) return show($("auth-err"), "Please fill in both fields.");
    if (mode === "signup" && !name) return show($("auth-err"), "Please tell us your name — it goes on your certificate.");
    if (mode === "signup" && pass.length < 8) return show($("auth-err"), "Password must be at least 8 characters.");

    btn.disabled = true; btn.textContent = "One moment…";
    var p = mode === "signup" ? A.signUp(email, pass, name) : A.signIn(email, pass);

    p.then(function (r) {
      btn.disabled = false; btn.textContent = label;
      if (r && r.needsConfirm) {
        // setMode rewrites the button label itself, so restore *before* calling it.
        setMode("signin");
        show($("auth-ok"), "Almost there — check your inbox and click the confirmation link, then come back and sign in.");
        return;
      }
      location.href = next;
    }).catch(function (err) {
      btn.disabled = false; btn.textContent = label;
      show($("auth-err"), (err && err.message) || "Something went wrong. Please try again.");
    });
  });

  $("forgot").addEventListener("click", function (e) {
    e.preventDefault(); clearAlerts();
    var email = $("i-email").value.trim();
    if (!email) return show($("auth-err"), "Enter your email address above first, then click again.");
    A.resetPassword(email)
      .then(function () { show($("auth-ok"), "If that address has an account, a reset link is on its way."); })
      .catch(function (err) { show($("auth-err"), err.message); });
  });
})();
