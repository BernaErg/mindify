/* Mindify — contact form. Posts to Netlify Forms; falls back to a mailto draft locally. */
(function () {
  "use strict";
  var form = document.getElementById("contact-form");
  if (!form) return;
  var ok = document.getElementById("c-ok"), err = document.getElementById("c-err");
  var LOCAL = ["localhost", "127.0.0.1", ""].indexOf(location.hostname) !== -1;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    ok.classList.remove("show"); err.classList.remove("show");
    var data = new FormData(form);
    var btn = form.querySelector('button[type="submit"]');

    if (LOCAL) {
      ok.textContent = "Local preview — no form backend here. On Netlify this submits to Netlify Forms and lands in your dashboard.";
      ok.classList.add("show"); form.reset(); return;
    }

    btn.disabled = true; btn.textContent = "Sending…";
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      ok.textContent = "Thank you — your message has been sent. We'll reply within two working days.";
      ok.classList.add("show"); form.reset();
    }).catch(function () {
      err.textContent = "That didn't send. Please email hello@mindify.co.uk instead.";
      err.classList.add("show");
    }).finally(function () {
      btn.disabled = false; btn.textContent = "Send message";
    });
  });
})();
