/* Mindify — shared UI behaviour: nav, scroll reveal, header state, auth-aware links */
(function () {
  "use strict";

  /* Mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Sticky header hairline */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
        io.observe(el);
      });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }
  }

  /* Mark current nav item. Netlify rewrites /about → /about.html, so compare
     on the basename with any .html suffix stripped. */
  var base = function (u) {
    return (u.split("?")[0].split("#")[0].split("/").pop() || "index").toLowerCase().replace(/\.html$/, "") || "index";
  };
  var here = base(location.pathname);
  document.querySelectorAll(".nav-links a[href]").forEach(function (a) {
    // buttons keep their own colour scheme — never mark them active
    if (a.classList.contains("lang-switch") || a.classList.contains("btn")) return;
    if (base(a.getAttribute("href")) === here) a.classList.add("active");
  });

  /* Swap the "Student Login" CTA to "My dashboard" when already signed in */
  if (window.MindifyAuth) {
    window.MindifyAuth.getUser().then(function (u) {
      if (!u) return;
      document.querySelectorAll("[data-auth-cta]").forEach(function (el) {
        el.textContent = "My dashboard";
        el.setAttribute("href", "dashboard.html");
      });
    });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
