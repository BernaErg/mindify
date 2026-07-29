const fs = require("fs"), path = require("path");
const { page } = require("./layout");
const { heroArt, icons, moduleCard, courseCard, audienceCard, testimonialCard,
        PLATFORM, COURSES, COURSE, TESTIMONIALS, BANNER } = require("./pieces");

const OUT = path.join(__dirname, "..");
const write = (f, html) => { fs.writeFileSync(path.join(OUT, f), html); console.log("  ✓", f); };
const live = COURSES.filter((c) => c.status === "available");
const soon = COURSES.filter((c) => c.status !== "available");
const totalHours = COURSES.reduce((a, c) => a + c.hours, 0);

/* ======================= HOME ======================= */
write("index.html", page(
  "Psychology courses, taught by an academic",
  "Mindify is a self-paced psychology school led by a UK academic psychologist. Built first for psychology students, open to practitioners, managers and anyone who wants to understand people properly.",
  `
<section style="padding:clamp(28px,4vw,52px) 0 0">
  <div class="wrap">
    <div class="hero-feature">
      <div class="art">${heroArt}</div>
      <div class="inner">
        <p class="eyebrow">${PLATFORM.promise}</p>
        <h1>University-grade psychology,<br>on your own schedule.</h1>
        <p class="lede">Self-paced courses written and taught by a UK academic psychologist. Built first for psychology students who want the depth a syllabus never has time for — and open to practitioners, managers and anyone else who'd rather understand people than manage them.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="courses.html">Browse courses</a>
          <a class="btn btn-ghost" href="about.html">What makes it different</a>
        </div>
        <p class="hero-note">${icons.clock} Start today, finish whenever you can · certificate on completion</p>
      </div>
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="stats reveal">
      <div class="stat"><b>${COURSES.length}</b><span>COURSES</span></div>
      <div class="stat"><b>${totalHours}h</b><span>OF TEACHING</span></div>
      <div class="stat"><b>100%</b><span>SELF-PACED</span></div>
      <div class="stat"><b>∞</b><span>ACCESS</span></div>
    </div>
  </div>
</section>

<section style="padding-top:clamp(30px,4vw,52px)">
  <div class="wrap">
    <div class="center" style="max-width:60ch;margin-inline:auto;margin-bottom:44px">
      <p class="eyebrow">Who it's for</p>
      <h2>Written for students first — and it shows</h2>
      <p class="lede">Courses aimed at an undergraduate audience have to be rigorous. Everyone else benefits from that, which is why the room ends up mixed.</p>
    </div>
    <div class="grid grid-2">
      ${PLATFORM.audiences.map(audienceCard).join("\n      ")}
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:62ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">Courses</p>
      <h2>What's available, and what's coming</h2>
      <p class="lede">Each course is self-contained, self-paced, and ends with a dated certificate. Access never expires.</p>
    </div>
    <div class="grid grid-3">
      ${COURSES.slice(0, 3).map(courseCard).join("\n      ")}
    </div>
    <div class="center" style="margin-top:34px">
      <a class="btn btn-primary" href="courses.html">See all courses</a>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="center" style="max-width:60ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">Why Mindify</p>
      <h2>Taught like a seminar, not a webinar</h2>
    </div>
    <div class="grid grid-3">
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.brain}</div><div>
        <h4>Named sources, honestly used</h4>
        <p>Bowlby and Ainsworth, Siegel, Perry, Hughes. Where a finding is contested or failed to replicate, we say so instead of flattening it into a slogan.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.people}</div><div>
        <h4>Taught by someone who marks essays</h4>
        <p>Written and delivered by a practising UK academic psychologist, not a content team. The tone is a supervision session, not a sales funnel.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.clock}</div><div>
        <h4>Built for real schedules</h4>
        <p>Ten minutes at 10pm counts. Progress saves automatically, so you can stop mid-module and pick it up next week without losing your place.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.repeat}</div><div>
        <h4>Theory that survives contact</h4>
        <p>Every module ends with one thing to try. Not a programme to implement — a single experiment, for a week. Messy attempts count.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.shield}</div><div>
        <h4>No shame in the room</h4>
        <p>Nothing here is framed as a verdict on how you've practised, parented or managed so far. A new lens, not a new you.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.cert}</div><div>
        <h4>Certificate on completion</h4>
        <p>Finish a course and download a dated PDF in your name — useful for CPD logs, placement portfolios, supervision records and fostering panels.</p></div></div></div>
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">From our students</p>
      <h2>What people say afterwards</h2>
    </div>
    <div class="grid grid-3">
      ${TESTIMONIALS.map(testimonialCard).join("\n      ")}
    </div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:62ch">
    <p class="eyebrow">Start when you're ready</p>
    <h2>Create an account, take your time</h2>
    <p class="lede" style="color:#BFCBE6">Work through a course at whatever pace your life allows, and download your certificate when you're done. Nothing expires.</p>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-light" href="login.html?mode=signup">Create your account</a>
      <a class="btn btn-ghost" style="color:#DCE4F5;border-color:rgba(255,255,255,.28)" href="contact.html">Talk to us first</a>
    </div>
  </div>
</section>
`));

/* ======================= COURSES ======================= */
write("courses.html", page(
  "Courses",
  "Self-paced psychology courses from Mindify — available now and in development.",
  `
<section class="hero" style="padding-bottom:clamp(32px,5vw,56px)">
  <div class="wrap" style="max-width:840px">
    <p class="eyebrow">Courses</p>
    <h1>${COURSES.length} courses, ${live.length} available now</h1>
    <p class="lede">Every course is self-contained and self-paced, ends with a dated certificate, and never expires. Start with any of them — there's no required order.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="login.html?mode=signup">Create your account</a>
      <a class="btn btn-ghost" href="#catalogue">See the catalogue</a>
    </div>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap"><div class="banner">${BANNER(2)}</div></div>
</section>

<section id="catalogue" class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:44px">
      <p class="eyebrow">Available now</p>
      <h2>Open for enrolment</h2>
    </div>
    <div class="grid grid-3">${live.map(courseCard).join("\n      ")}</div>

    <div class="center" style="max-width:56ch;margin-inline:auto;margin:64px auto 44px">
      <p class="eyebrow">In development</p>
      <h2>Coming next</h2>
      <p class="lede">Outlines are published early so you can tell us what's missing before they're written.</p>
    </div>
    <div class="grid grid-3">${soon.map((c, i) => courseCard(c, i + live.length)).join("\n      ")}</div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid grid-2" style="align-items:start;gap:clamp(32px,5vw,64px)">
      <div>
        <p class="eyebrow">How it works</p>
        <h2>Enrol, work through it, download your certificate</h2>
        <p>No live sessions to attend, no cohort to keep up with. You get the whole course the moment you enrol.</p>
        <a class="btn btn-primary" style="margin-top:12px" href="login.html?mode=signup">Create your account</a>
      </div>
      <div>
        <div class="card reveal" style="margin-bottom:14px"><div class="feature"><div class="feature-icon">1</div><div>
          <h4>Create a student account</h4><p>Email and a password. About thirty seconds.</p></div></div></div>
        <div class="card reveal" style="margin-bottom:14px"><div class="feature"><div class="feature-icon">2</div><div>
          <h4>Work through the modules</h4><p>In order is best — each leans on the last — but nothing is locked. Mark each complete as you go.</p></div></div></div>
        <div class="card reveal" style="margin-bottom:14px"><div class="feature"><div class="feature-icon">3</div><div>
          <h4>Try one small thing each week</h4><p>Every module ends with a single experiment. That's where the learning lands.</p></div></div></div>
        <div class="card reveal"><div class="feature"><div class="feature-icon">4</div><div>
          <h4>Download your certificate</h4><p>All modules complete unlocks a dated PDF in your dashboard.</p></div></div></div>
      </div>
    </div>
  </div>
</section>
`));

/* ======================= COURSE DETAIL (dynamic) ======================= */
write("course.html", page(
  "Course",
  "Course detail at Mindify.",
  `
<section class="hero" style="padding-bottom:clamp(30px,4vw,52px)">
  <div class="wrap" style="max-width:860px">
    <p class="eyebrow"><a href="courses.html">← All courses</a></p>
    <p class="eyebrow" id="c-level">Course</p>
    <h1 id="c-title">…</h1>
    <p class="lede" id="c-sub" style="font-style:italic;color:var(--blue-700)"></p>
    <p class="lede" id="c-summary"></p>
    <div class="hero-actions">
      <a class="btn btn-primary" id="c-cta" href="login.html?mode=signup">Enrol — create your account</a>
      <a class="btn btn-ghost" href="#modules">See the modules</a>
    </div>
    <p class="hero-note" id="c-meta"></p>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap"><div class="banner" id="c-banner"></div></div>
</section>

<section class="band-tint" style="padding-top:clamp(34px,4vw,56px)">
  <div class="wrap-narrow">
    <p class="eyebrow">Why this course exists</p>
    <h2 id="c-why-h">The gap it fills</h2>
    <p class="lede" id="c-why"></p>
  </div>
</section>

<section id="modules">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:44px">
      <p class="eyebrow">The curriculum</p>
      <h2 id="c-curriculum-h">Modules</h2>
    </div>
    <div class="grid grid-3" id="c-modules"></div>
    <div id="c-outline" class="wrap-narrow hidden" style="padding:0"></div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:60ch">
    <p class="eyebrow">Ready?</p>
    <h2 id="c-foot">Start tonight</h2>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-light" id="c-cta2" href="login.html?mode=signup">Create your account</a>
      <a class="btn btn-ghost" style="color:#DCE4F5;border-color:rgba(255,255,255,.28)" href="contact.html">Ask a question</a>
    </div>
  </div>
</section>
`, { scripts: `<script>window.MINDIFY_ART_BANNER=function(i){return ${JSON.stringify([1,2,3,4].map(BANNER))}[(i-1)%4];};</script>\n<script src="assets/js/course-page.js"></script>` }));

/* ======================= MODULE DETAIL ======================= */
write("module.html", page(
  "Module",
  "Module detail at Mindify.",
  `
<section class="hero" style="padding-bottom:clamp(30px,4vw,52px)">
  <div class="wrap" style="max-width:840px">
    <p class="eyebrow"><a id="m-back" href="courses.html">← Back to the course</a></p>
    <p class="eyebrow" id="m-num">Module</p>
    <h1 id="m-title">…</h1>
    <p class="lede" id="m-tagline" style="font-style:italic;color:var(--blue-700)"></p>
    <p class="lede" id="m-blurb"></p>
    <div class="hero-actions">
      <a class="btn btn-primary" id="m-cta" href="login.html?mode=signup">Enrol to unlock this module</a>
      <a class="btn btn-ghost" id="m-all" href="courses.html">See the full curriculum</a>
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <div class="grid grid-2" style="gap:clamp(28px,4vw,56px)">
      <div>
        <p class="eyebrow">By the end of this module</p>
        <h2>What you'll walk away with</h2>
        <ul id="m-outcomes" class="tick-list"></ul>
      </div>
      <div>
        <p class="eyebrow">Inside</p>
        <h2>Key ideas covered</h2>
        <div id="m-keys" style="display:flex;flex-wrap:wrap;gap:8px;margin:20px 0 28px"></div>
        <div class="card" style="background:var(--white)">
          <h4>This week's practice</h4>
          <p id="m-practice" style="margin:0"></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap-narrow center">
    <div class="card" style="padding:40px">
      <p class="eyebrow">Lesson content</p>
      <h2 style="margin-bottom:.4em">Full lesson unlocks after enrolment</h2>
      <p class="muted">Teaching blocks, reflection prompts, the applied activity and the workbook page for this module live inside your student area.</p>
      <a class="btn btn-primary" style="margin-top:18px" href="login.html?mode=signup">Create your free account</a>
    </div>
  </div>
</section>
`, { scripts: `<script src="assets/js/module-page.js"></script>` }));

/* ======================= ABOUT ======================= */
write("about.html", page(
  "About",
  "Mindify is a self-paced psychology school led by a UK academic psychologist. Here's what we teach, who it's for, and the principles behind it.",
  `
<section class="hero" style="padding-bottom:clamp(34px,5vw,60px)">
  <div class="wrap" style="max-width:820px">
    <p class="eyebrow">About Mindify</p>
    <h1>We teach the thinking, not just the techniques.</h1>
    <p class="lede">Mindify is a small UK school for applied psychology, led by an academic psychologist who teaches and supervises at university level. The courses are the ones we wished existed: rigorous enough for a psychology student, plain enough for someone meeting the material for the first time.</p>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap"><div class="banner">${BANNER(4)}</div></div>
</section>

<section>
  <div class="wrap-narrow">
    <p>Psychology has an odd gap in the middle. Undergraduate teaching is rigorous but rarely reaches application — you meet Bowlby and Ainsworth in a lecture, sit an exam, and never see the theory used on a real Tuesday afternoon. Meanwhile the applied market is full of confident, evidence-light training that has quietly dropped the sources.</p>
    <p>Mindify exists in that gap. Every course keeps the citations, says out loud where the evidence is contested, and then follows the theory all the way through to what you actually do and say.</p>
    <p>That makes it useful to more people than we first expected. It was built for psychology students. It turns out to be just as useful to a foster carer, a SENCO, or someone managing eleven people who keeps wondering why their feedback bounces off.</p>
  </div>
</section>

<section id="approach" class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">Our approach</p>
      <h2>Five principles we won't compromise on</h2>
    </div>
    <div class="grid grid-2">
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.brain}</div><div>
        <h4>Sources, kept</h4>
        <p>Named researchers, real studies, and an honest note when something is contested or failed to replicate. A tidy story that collapses when a student looks it up is worse than no story.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.shield}</div><div>
        <h4>Rigour and plain language are not opposites</h4>
        <p>Jargon is often a way of avoiding a claim. We'd rather make the claim and defend it in words anyone can follow.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.repeat}</div><div>
        <h4>Theory has to survive contact</h4>
        <p>Every module ends with one thing to try. If a model can't change what you do on an ordinary day, we haven't finished teaching it.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.people}</div><div>
        <h4>No shame in the room</h4>
        <p>Under pressure most of us default to control — as parents, as practitioners, as managers. That's human, not a failing, and nothing here is framed as a verdict on you.</p></div></div></div>
      <div class="card reveal" style="grid-column:1/-1"><div class="feature"><div class="feature-icon">${icons.cert}</div><div>
        <h4>Honest about what a certificate is</h4>
        <p>Our certificate confirms you completed the material. It's widely accepted for CPD logs, placement portfolios, supervision records and fostering panels. It is not a regulated professional qualification and we never imply otherwise.</p></div></div></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid grid-2" style="align-items:center;gap:clamp(32px,5vw,64px)">
      <div>
        <p class="eyebrow">Who studies here</p>
        <h2>One room, four reasons to be in it</h2>
        <p>The courses were written for a mixed audience and stay useful across all of it.</p>
      </div>
      <div>
        <details class="acc"><summary>Psychology students</summary><div class="acc-body">Undergraduate and postgraduate students who want application and depth their syllabus hasn't room for — and something concrete for a placement portfolio.</div></details>
        <details class="acc"><summary>Practitioners, carers and school staff</summary><div class="acc-body">Assistant psychologists, family support workers, SENCOs, TAs, foster and kinship carers, adopters. Frequently used as evidence for supervision and panel.</div></details>
        <details class="acc"><summary>Managers and team leads</summary><div class="acc-body">People responsible for other people who'd like the actual research on motivation, feedback and psychological safety rather than the airport-bookshop version.</div></details>
        <details class="acc"><summary>Parents and the plainly curious</summary><div class="acc-body">No prior training assumed and nothing dumbed down. Plenty of people arrive for one course and stay for the subject.</div></details>
      </div>
    </div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:62ch">
    <h2>“Rigour and plain language are not opposites.”</h2>
    <p class="lede" style="color:#BFCBE6">That's the whole editorial policy.</p>
    <div class="hero-actions" style="justify-content:center"><a class="btn btn-light" href="courses.html">See the courses</a></div>
  </div>
</section>
`));

/* ======================= CONTACT ======================= */
write("contact.html", page(
  "Contact Us",
  "Questions about a course, group bookings or accessibility? Get in touch with Mindify.",
  `
<section class="hero" style="padding-bottom:clamp(36px,5vw,56px)">
  <div class="wrap" style="max-width:760px">
    <p class="eyebrow">Contact us</p>
    <h1>Ask us anything</h1>
    <p class="lede">Whether a course fits your situation, group and institutional bookings, accessibility needs, or a suggestion for what we should teach next — we read every message and reply within two working days.</p>
  </div>
</section>

<section style="padding-top:0">
  <div class="wrap">
    <div class="grid grid-2" style="gap:clamp(32px,5vw,64px);align-items:start">
      <div class="card" style="padding:34px">
        <h3>Send a message</h3>
        <div class="alert alert-ok" id="c-ok" role="alert">Thank you — your message has been sent. We'll reply within two working days.</div>
        <div class="alert alert-error" id="c-err" role="alert"></div>
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" id="contact-form">
          <input type="hidden" name="form-name" value="contact">
          <p class="hidden"><label>Don't fill this in: <input name="bot-field"></label></p>
          <div class="field"><label for="cf-name">Your name</label>
            <input class="input" id="cf-name" name="name" required autocomplete="name"></div>
          <div class="field"><label for="cf-email">Email address</label>
            <input class="input" id="cf-email" name="email" type="email" required autocomplete="email"></div>
          <div class="field"><label for="cf-topic">What's this about?</label>
            <select class="input" id="cf-topic" name="topic">
              <option>A question about a course</option>
              <option>I'm a student — does this count for anything?</option>
              <option>Group, university or organisational booking</option>
              <option>Accessibility or learning support</option>
              <option>Suggest a course</option>
              <option>Problem with my account</option>
              <option>Something else</option>
            </select></div>
          <div class="field"><label for="cf-msg">Message</label>
            <textarea class="input" id="cf-msg" name="message" required></textarea></div>
          <button class="btn btn-primary btn-block" type="submit">Send message</button>
          <p class="hint" style="text-align:center">We'll only use your details to reply. Nothing is added to a mailing list.</p>
        </form>
      </div>
      <div>
        <div class="card reveal" style="margin-bottom:16px"><div class="feature"><div class="feature-icon">${icons.heart}</div><div>
          <h4>Email</h4><p><a href="mailto:hello@mindify.co.uk">hello@mindify.co.uk</a><br><span class="muted">Replies within two working days.</span></p></div></div></div>
        <div class="card reveal" style="margin-bottom:16px"><div class="feature"><div class="feature-icon">${icons.people}</div><div>
          <h4>Universities and organisations</h4><p>Departments, fostering agencies, schools and support services — we offer bulk enrolment and a facilitator pack for running modules as live seminars.</p></div></div></div>
        <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.shield}</div><div>
          <h4>Accessibility</h4><p>Tell us what you need. Transcripts, large-print workbooks and extended access are available on request, at no extra cost.</p></div></div></div>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="band-tint">
  <div class="wrap-narrow">
    <p class="eyebrow center">FAQs</p>
    <h2 class="center" style="margin-bottom:36px">Questions we get a lot</h2>
    <details class="acc"><summary>I'm a psychology student. Does this count for anything?</summary><div class="acc-body">Not as academic credit — we're not a degree-awarding body and won't pretend otherwise. What it does give you is a dated certificate and applied material that reads well in a placement application or an assistant psychologist interview, because it shows you've gone past the syllabus voluntarily.</div></details>
    <details class="acc"><summary>Do I need a psychology background?</summary><div class="acc-body">Depends on the course, and each one says so under its title. Introductory courses assume nothing. Intermediate ones assume you're comfortable with the basic vocabulary — roughly first-year undergraduate level.</div></details>
    <details class="acc"><summary>How long does a course take?</summary><div class="acc-body">Between eleven and sixteen hours depending on the course. Most people spread it over six to ten weeks, doing a module a week with the practice in between. No deadline, no expiry.</div></details>
    <details class="acc"><summary>Is there a certificate?</summary><div class="acc-body">Yes — mark every module complete and a dated PDF unlocks in your dashboard. Widely used for CPD logs, supervision records, placement portfolios and fostering panel evidence. It is not a regulated professional qualification.</div></details>
    <details class="acc"><summary>Isn't therapeutic parenting just being permissive?</summary><div class="acc-body">No, and it's the most common misreading. Permissive parenting drops the boundary to avoid conflict, which leaves a child feeling loved but not safe. The therapeutic stance holds the boundary firmly and adds empathy alongside it. The limit doesn't move.</div></details>
    <details class="acc"><summary>Can I run this as live training with a group?</summary><div class="acc-body">Each module is written as a two-hour facilitated session with check-ins, teaching blocks, paired reflection and an applied activity. Get in touch about the facilitator pack.</div></details>
    <details class="acc"><summary>When will the courses marked ‘in development’ be ready?</summary><div class="acc-body">No dates yet — we'd rather publish the outline early and hear what's missing than promise a launch we then rush. Tell us which one you want most and it moves up the queue.</div></details>
  </div>
</section>
`, { scripts: `<script src="assets/js/contact.js"></script>` }));

console.log("Pages built.");
