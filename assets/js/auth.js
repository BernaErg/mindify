/* ==========================================================================
   Mindify auth + progress layer
   Two interchangeable backends behind one API:
     • supabase — real accounts, progress persisted server-side (production)
     • demo     — localStorage only, no server (used when keys are absent)
   Every page talks only to MindifyAuth. Swapping backends changes nothing else.
   ========================================================================== */
(function () {
  "use strict";

  var CFG = window.MINDIFY_CONFIG || {};
  var DEFAULT_COURSE = "therapeutic-parenting";
  var slugOf = function (s) { return s || DEFAULT_COURSE; };
  var SB_CDN = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js";
  var LIVE = !!(CFG.supabaseUrl && CFG.supabaseAnonKey);

  var LS_USERS = "mindify.demo.users";
  var LS_SESSION = "mindify.demo.session";
  var LS_PROGRESS = "mindify.demo.progress";

  var sb = null;
  var readyResolve;
  var ready = new Promise(function (r) { readyResolve = r; });

  /* ---------- helpers ---------- */
  function readLS(k, fb) {
    try { return JSON.parse(localStorage.getItem(k)) || fb; } catch (e) { return fb; }
  }
  function writeLS(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
  }
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = src; s.async = true; s.onload = res; s.onerror = function () { rej(new Error("script load failed")); };
      document.head.appendChild(s);
    });
  }
  // Not security — demo mode is explicitly not secure. Just avoids plaintext
  // passwords sitting in localStorage in readable form during a demo.
  function scramble(s) {
    var h = 5381, i;
    for (i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return "d" + h.toString(36) + "." + s.length;
  }

  /* ---------- init ---------- */
  (function init() {
    if (!LIVE) { readyResolve("demo"); return; }
    loadScript(SB_CDN).then(function () {
      sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {
        auth: { persistSession: true, autoRefreshToken: true }
      });
      readyResolve("supabase");
    }).catch(function () {
      console.warn("[Mindify] Supabase SDK failed to load — falling back to demo mode.");
      LIVE = false;
      readyResolve("demo");
    });
  })();

  /* ---------- API ---------- */
  var API = {
    mode: function () { return LIVE ? "supabase" : "demo"; },
    ready: function () { return ready; },

    signUp: function (email, password, fullName) {
      email = String(email || "").trim().toLowerCase();
      return ready.then(function () {
        if (LIVE) {
          return sb.auth.signUp({
            email: email, password: password,
            options: { data: { full_name: fullName } }
          }).then(function (r) {
            if (r.error) throw r.error;
            var needsConfirm = r.data.user && !r.data.session;
            return { user: r.data.user, needsConfirm: needsConfirm };
          });
        }
        var users = readLS(LS_USERS, {});
        if (users[email]) throw new Error("An account already exists for that email address.");
        if (String(password).length < 8) throw new Error("Password must be at least 8 characters.");
        users[email] = { email: email, name: fullName || email.split("@")[0], pw: scramble(password), joined: Date.now() };
        writeLS(LS_USERS, users);
        writeLS(LS_SESSION, { email: email });
        return { user: { email: email, user_metadata: { full_name: users[email].name } }, needsConfirm: false };
      });
    },

    signIn: function (email, password) {
      email = String(email || "").trim().toLowerCase();
      return ready.then(function () {
        if (LIVE) {
          return sb.auth.signInWithPassword({ email: email, password: password }).then(function (r) {
            if (r.error) throw r.error;
            return { user: r.data.user };
          });
        }
        var users = readLS(LS_USERS, {});
        var u = users[email];
        if (!u || u.pw !== scramble(password)) throw new Error("Email or password is incorrect.");
        writeLS(LS_SESSION, { email: email });
        return { user: { email: email, user_metadata: { full_name: u.name } } };
      });
    },

    signOut: function () {
      return ready.then(function () {
        if (LIVE) return sb.auth.signOut();
        localStorage.removeItem(LS_SESSION);
      });
    },

    resetPassword: function (email) {
      return ready.then(function () {
        if (LIVE) {
          return sb.auth.resetPasswordForEmail(String(email).trim().toLowerCase(), {
            redirectTo: location.origin + "/login.html"
          }).then(function (r) { if (r.error) throw r.error; return true; });
        }
        throw new Error("Password reset needs a live Supabase connection. In demo mode, just sign up again.");
      });
    },

    /* Returns a normalised user object or null. */
    getUser: function () {
      return ready.then(function () {
        if (LIVE) {
          return sb.auth.getUser().then(function (r) {
            var u = r.data && r.data.user;
            if (!u) return null;
            return {
              id: u.id, email: u.email,
              name: (u.user_metadata && u.user_metadata.full_name) || u.email.split("@")[0]
            };
          }).catch(function () { return null; });
        }
        var s = readLS(LS_SESSION, null);
        if (!s) return null;
        var u = readLS(LS_USERS, {})[s.email];
        if (!u) return null;
        return { id: "demo:" + u.email, email: u.email, name: u.name };
      });
    },

    /* Array of completed module numbers for a course, e.g. [1,2,4] */
    getProgress: function (courseSlug) {
      var course = slugOf(courseSlug);
      return API.getUser().then(function (user) {
        if (!user) return [];
        if (LIVE) {
          return sb.from("progress").select("module_no")
            .eq("user_id", user.id).eq("course_slug", course)
            .then(function (r) {
              if (r.error) { console.warn("[Mindify] progress read failed", r.error.message); return []; }
              return (r.data || []).map(function (x) { return x.module_no; }).sort(function (a, b) { return a - b; });
            });
        }
        var all = readLS(LS_PROGRESS, {});
        var key = user.email + "|" + course;
        return (all[key] || []).slice().sort(function (a, b) { return a - b; });
      });
    },

    setModuleComplete: function (courseSlug, moduleNo, done) {
      var course = slugOf(courseSlug);
      moduleNo = Number(moduleNo);
      return API.getUser().then(function (user) {
        if (!user) throw new Error("Not signed in.");
        if (LIVE) {
          if (done) {
            return sb.from("progress").upsert(
              { user_id: user.id, course_slug: course, module_no: moduleNo },
              { onConflict: "user_id,course_slug,module_no" }
            ).then(function (r) { if (r.error) throw r.error; return true; });
          }
          return sb.from("progress").delete()
            .eq("user_id", user.id).eq("course_slug", course).eq("module_no", moduleNo)
            .then(function (r) { if (r.error) throw r.error; return true; });
        }
        var all = readLS(LS_PROGRESS, {});
        var key = user.email + "|" + course;
        var list = all[key] || [];
        if (done) { if (list.indexOf(moduleNo) === -1) list.push(moduleNo); }
        else { list = list.filter(function (n) { return n !== moduleNo; }); }
        all[key] = list;
        writeLS(LS_PROGRESS, all);
        return true;
      });
    },

    /* Redirect guard for protected pages. */
    requireUser: function () {
      return API.getUser().then(function (u) {
        if (u) return u;
        // Netlify serves /dashboard as well as /dashboard.html — normalise either
        // form to a bare "<name>.html" so the login page's allow-list accepts it.
        var leaf = (location.pathname.split("/").pop() || "dashboard").replace(/\.html$/, "");
        if (!/^[\w-]+$/.test(leaf)) leaf = "dashboard";
        location.replace("login.html?next=" + encodeURIComponent(leaf + ".html"));
        return null;
      });
    }
  };

  window.MindifyAuth = API;
})();
