/* ==========================================================================
   Mindify — certificate generator (A4 landscape PDF, drawn as vectors)
   Depends on jsPDF (loaded from CDN in dashboard.html).
   ========================================================================== */
(function () {
  "use strict";

  var GREEN = [46, 67, 114];     // #2E4372  deep blue  (name kept for diff clarity)
  var SAGE  = [143, 163, 206];   // #8FA3CE  cornflower
  var INK   = [21, 28, 46];      // #151C2E
  var MUTED = [85, 96, 117];     // #556075
  var CREAM = [250, 247, 242];   // #FAF7F2
  var AMBER = [217, 154, 62];    // #D99A3E

  /* jsPDF's built-in fonts are WinAnsi-encoded, which has no ğ ş İ ı ř ł etc.
     Rather than ship a ~300KB embedded Unicode font for a certificate, we
     transliterate the characters WinAnsi can't draw. Accents it *can* draw
     (ü ö ç é à) are left exactly as the student typed them. */
  var TRANSLIT = {
    "ğ":"g","Ğ":"G","ş":"s","Ş":"S","ı":"i","İ":"I",
    "ł":"l","Ł":"L","ř":"r","Ř":"R","č":"c","Č":"C","ě":"e","Ě":"E",
    "š":"s","Š":"S","ž":"z","Ž":"Z","ď":"d","ť":"t","ň":"n",
    "ą":"a","Ą":"A","ę":"e","Ę":"E","ć":"c","Ć":"C","ń":"n","Ń":"N",
    "ś":"s","Ś":"S","ź":"z","Ź":"Z","ż":"z","Ż":"Z","ő":"o","ű":"u",
    "ā":"a","ē":"e","ī":"i","ū":"u","ō":"o","–":"-","—":"-","’":"'","‘":"'"
  };
  function win(s) {
    var raw = String(s == null ? "" : s);
    var NUL = "\u0000";
    var map = function (ch) {
      return Object.prototype.hasOwnProperty.call(TRANSLIT, ch) ? TRANSLIT[ch] : NUL;
    };
    // First pass: keep the accents WinAnsi *can* draw exactly as typed (ü ö ç é).
    var kept = raw.replace(/[^\x20-\xFF]/g, map);
    if (kept.indexOf(NUL) === -1) return kept;
    // Something still isn't drawable. Strip diacritics and retry; anything left
    // over becomes "?" rather than vanishing, so the name is never silently blank.
    var base = raw.normalize ? raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : raw;
    return base.replace(/[^\x20-\xFF]/g, function (ch) {
      var m = map(ch);
      return m === NUL ? "?" : m;
    });
  }

  /* Shrink a string's font size until it fits maxW, down to a floor. */
  function fitText(doc, text, maxW, start, floor) {
    var size = start;
    doc.setFontSize(size);
    while (size > floor && doc.getTextWidth(text) > maxW) {
      size -= 0.5;
      doc.setFontSize(size);
    }
    return size;
  }

  /* Deterministic short id from name + course + date, so a re-download
     of the same certificate carries the same reference. */
  function certId(seed) {
    var h = 2166136261, i;
    for (i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
    return "MDF-" + (h >>> 0).toString(36).toUpperCase().padStart(7, "0").slice(0, 7);
  }

  /* The Strata mark, drawn as filled mass rather than a line — the same
     drawing as the SVG logo. jsPDF has no reliable clipping, so each layer is
     closed along the disc's own arc instead, which keeps it inside by
     construction. Opacities are pre-blended against the disc colour because
     PDF transparency groups are not worth the compatibility risk here. */
  var DISC  = [46, 67, 114];    // #2E4372
  var LAY_1 = [75, 96, 142];    // cornflower at 30% over DISC
  var LAY_2 = [99, 120, 165];   // cornflower at 55% over DISC

  function layer(doc, cx, cy, r, y, amp, decay, cycles, col) {
    var dy = y - cy;
    if (Math.abs(dy) >= r) return;
    var halfW = Math.sqrt(r * r - dy * dy);
    var x0 = cx - halfW, x1 = cx + halfW;
    var pts = [], N = 80, i, t, a, x, u;

    // the settling line, left to right
    for (i = 0; i <= N; i++) {
      t = i / N;
      a = amp * Math.exp(-decay * t);
      pts.push([x0 + t * (x1 - x0), y - a * Math.sin(t * Math.PI * cycles)]);
    }
    // back along the bottom of the disc, right to left (PDF y grows downward)
    for (i = 0; i <= N; i++) {
      x = x1 + (x0 - x1) * (i / N);
      u = r * r - (x - cx) * (x - cx);
      pts.push([x, cy + Math.sqrt(u > 0 ? u : 0)]);
    }

    var rel = [], j;
    for (j = 1; j < pts.length; j++) rel.push([pts[j][0] - pts[j - 1][0], pts[j][1] - pts[j - 1][1]]);
    doc.setFillColor(col[0], col[1], col[2]);
    doc.lines(rel, pts[0][0], pts[0][1], [1, 1], "F", true);
  }

  function drawMark(doc, cx, cy, r) {
    doc.setFillColor(DISC[0], DISC[1], DISC[2]);
    doc.circle(cx, cy, r, "F");
    layer(doc, cx, cy, r, cy - r * 0.07, r * 0.20, 3.3, 9, LAY_1);
    layer(doc, cx, cy, r, cy + r * 0.31, r * 0.15, 3.6, 8, LAY_2);
    layer(doc, cx, cy, r, cy + r * 0.62, r * 0.09, 4.0, 7, AMBER);
    doc.setDrawColor(SAGE[0], SAGE[1], SAGE[2]);
    doc.setLineWidth(0.35);
    doc.circle(cx, cy, r, "S");
  }

  function generate(opts) {
    if (!window.jspdf || !window.jspdf.jsPDF) throw new Error("Certificate library is still loading — try again in a second.");
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    var W = 297, H = 210, M = 14;

    var rawName = (opts.name || "Student").trim();
    var name = win(rawName);
    var course = win(opts.course || "Therapeutic Parenting");
    var subtitle = win(opts.subtitle || "");
    var modules = (opts.modules || []).map(win);
    var date = opts.date || new Date();
    var dateStr = date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    var id = certId(rawName.toLowerCase() + "|" + course + "|" + date.toISOString().slice(0, 10));

    /* Background + frame */
    doc.setFillColor(CREAM[0], CREAM[1], CREAM[2]);
    doc.rect(0, 0, W, H, "F");
    doc.setDrawColor(GREEN[0], GREEN[1], GREEN[2]); doc.setLineWidth(1.0);
    doc.rect(M, M, W - M * 2, H - M * 2, "S");
    doc.setDrawColor(SAGE[0], SAGE[1], SAGE[2]); doc.setLineWidth(0.3);
    doc.rect(M + 3.5, M + 3.5, W - (M + 3.5) * 2, H - (M + 3.5) * 2, "S");

    /* Mark + wordmark */
    drawMark(doc, W / 2, 36, 13);
    doc.setFont("times", "normal"); doc.setFontSize(22);
    doc.setTextColor(GREEN[0], GREEN[1], GREEN[2]);
    doc.text("mindify", W / 2, 60, { align: "center" });

    /* Title */
    doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
    doc.setTextColor(SAGE[0], SAGE[1], SAGE[2]);
    doc.text("C E R T I F I C A T E   O F   C O M P L E T I O N", W / 2, 71, { align: "center" });

    doc.setFont("helvetica", "normal"); doc.setFontSize(10);
    doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
    doc.text("This is to certify that", W / 2, 84, { align: "center" });

    /* Name — auto-shrunk to stay inside the rule, then hard-truncated if a
       genuinely absurd name still won't fit at the minimum size. */
    doc.setFont("times", "normal");
    doc.setTextColor(INK[0], INK[1], INK[2]);
    var NAMEW = 120;
    fitText(doc, name, NAMEW, 34, 14);
    if (doc.getTextWidth(name) > NAMEW) {
      while (name.length > 4 && doc.getTextWidth(name + "…") > NAMEW) name = name.slice(0, -1);
      name = name.replace(/\s+$/, "") + "…";
    }
    doc.text(name, W / 2, 100, { align: "center" });
    doc.setDrawColor(SAGE[0], SAGE[1], SAGE[2]); doc.setLineWidth(0.4);
    doc.line(W / 2 - 62, 105, W / 2 + 62, 105);

    /* Course */
    doc.setFont("helvetica", "normal"); doc.setFontSize(10);
    doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
    doc.text("has successfully completed all six modules of", W / 2, 116, { align: "center" });

    doc.setFont("times", "bold");
    doc.setTextColor(GREEN[0], GREEN[1], GREEN[2]);
    fitText(doc, course, 200, 17, 10);
    doc.text(course, W / 2, 127, { align: "center" });
    if (subtitle) {
      doc.setFont("times", "italic"); doc.setFontSize(11.5);
      doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
      doc.text(subtitle, W / 2, 134.5, { align: "center" });
    }

    /* Module list, two columns. Each entry is forced onto one line so the
       fixed row rhythm can never collide with a wrapped title. */
    doc.setFont("helvetica", "normal"); doc.setFontSize(7.4);
    doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
    var COLW = 60;
    var half = Math.ceil(modules.length / 2), col, row, x, y, line;
    modules.forEach(function (m, i) {
      col = i < half ? 0 : 1;
      row = i < half ? i : i - half;
      x = col === 0 ? W / 2 - 64 : W / 2 + 6;
      y = 148 + row * 5.6;
      line = "· " + m;
      if (doc.getTextWidth(line) > COLW) {
        while (line.length > 4 && doc.getTextWidth(line + "…") > COLW) line = line.slice(0, -1);
        line = line.replace(/[\s,\-—·]+$/, "") + "…";
      }
      doc.text(line, x, y);
    });

    /* Footer: date / id / signature */
    var fy = H - 34;
    doc.setDrawColor(SAGE[0], SAGE[1], SAGE[2]); doc.setLineWidth(0.3);
    doc.line(M + 22, fy, M + 82, fy);
    doc.line(W - M - 82, fy, W - M - 22, fy);

    doc.setFont("helvetica", "normal"); doc.setFontSize(7.4);
    doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
    doc.text("DATE OF COMPLETION", M + 22, fy + 6);
    doc.text("MINDIFY · MINDIFY.CO.UK", W - M - 82, fy + 6);

    doc.setFont("times", "normal"); doc.setFontSize(12);
    doc.setTextColor(INK[0], INK[1], INK[2]);
    doc.text(dateStr, M + 22, fy - 3);
    doc.text("Course Director", W - M - 82, fy - 3);

    doc.setFont("helvetica", "normal"); doc.setFontSize(6.6);
    doc.setTextColor(SAGE[0], SAGE[1], SAGE[2]);
    doc.text("Certificate ref " + id + "  ·  Self-paced online training  ·  Not a regulated professional qualification",
      W / 2, H - M - 6, { align: "center" });

    doc.setProperties({
      title: "Mindify \u2014 Certificate of Completion \u2014 " + rawName,
      subject: course, author: "Mindify", creator: "mindify.co.uk"
    });

    // Fold accents for the filename so nothing is silently dropped (Çağrı → Cagri).
    var slug = rawName.normalize ? rawName.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : rawName;
    slug = win(slug).replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 60).replace(/-+$/, "");
    var file = "Mindify-Certificate-" + (slug || "Student") + ".pdf";
    doc.save(file);
    return id;
  }

  window.MindifyCertificate = { generate: generate, id: certId };
})();
