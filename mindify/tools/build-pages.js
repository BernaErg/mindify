const fs = require("fs"), path = require("path");
const { page } = require("./layout");
const { heroArt, icons, moduleCard, testimonialCard, COURSE, TESTIMONIALS, BANNER } = require("./pieces");

const OUT = path.join(__dirname, "..");
const write = (f, html) => { fs.writeFileSync(path.join(OUT, f), html); console.log("  ✓", f); };

/* ======================= HOME ======================= */
write("index.html", page(
  "Therapeutic parenting training, self-paced",
  "Mindify runs self-paced psychology-led training for parents, carers and practitioners. Six modules on connection, regulation and repair — with a certificate on completion.",
  `
<section style="padding:clamp(28px,4vw,52px) 0 0">
  <div class="wrap">
    <div class="hero-feature">
      <div class="art">${heroArt}</div>
      <div class="inner">
        <p class="eyebrow">Psychology, taught properly</p>
        <h1>Evidence-led training,<br>at the pace your life allows.</h1>
        <p class="lede">Self-paced courses written and delivered by a UK academic psychologist — for psychology students, practitioners, managers, and parents who want to understand people rather than manage them.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="courses.html">Browse courses</a>
          <a class="btn btn-ghost" href="about.html">How it works</a>
        </div>
        <p class="hero-note">${icons.clock} Start today, finish whenever you can · certificate on completion</p>
      </div>
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="stats reveal">
      <div class="stat"><b>6</b><span>MODULES</span></div>
      <div class="stat"><b>12h</b><span>OF TEACHING</span></div>
      <div class="stat"><b>100%</b><span>SELF-PACED</span></div>
      <div class="stat"><b>1</b><span>CERTIFICATE</span></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="center" style="max-width:64ch;margin-inline:auto;margin-bottom:52px">
      <p class="eyebrow">Why Mindify</p>
      <h2>Training that respects both the science and the 6pm meltdown</h2>
      <p class="lede">Most parenting courses hand you techniques. This one hands you a lens — then shows you what to do with it on a genuinely terrible Tuesday.</p>
    </div>
    <div class="grid grid-3">
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.brain}</div><div>
        <h4>Grounded in the research</h4>
        <p>Bowlby and Ainsworth on attachment, Siegel on the developing brain, Perry on regulation, Hughes on PACE. Named sources, not folk wisdom.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.clock}</div><div>
        <h4>Built for real lives</h4>
        <p>Ten minutes at 10pm with a cup of tea counts. Progress saves automatically, so you can stop mid-module and pick it up next week.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.heart}</div><div>
        <h4>Never a verdict on you</h4>
        <p>You already love your child and you're already trying hard. This is a new lens, not a new you — and ‘good enough’ is the explicit goal.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.people}</div><div>
        <h4>Warm <em>and</em> firm</h4>
        <p>This isn't permissive parenting in nicer language. Boundaries stay exactly where they are. What changes is everything around them.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.repeat}</div><div>
        <h4>One small thing to try</h4>
        <p>Every module ends with a single home experiment. Not a programme to implement — one thing, for one week. Messy attempts count.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.cert}</div><div>
        <h4>Certificate on completion</h4>
        <p>Mark all six modules complete and download a dated certificate from your dashboard — useful for CPD logs, fostering panels and supervision.</p></div></div></div>
    </div>
  </div>
</section>

<section class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:60ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">The course</p>
      <h2>${COURSE.title}: ${COURSE.subtitle}</h2>
      <p class="lede">${COURSE.summary}</p>
    </div>
    <div class="grid grid-3">
      ${COURSE.modules.slice(0, 3).map((m) => moduleCard(m)).join("\n      ")}
    </div>
    <div class="center" style="margin-top:34px">
      <a class="btn btn-primary" href="courses.html">See all six modules</a>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">One idea, three ways in</p>
      <h2>What changes when you look beneath the waterline</h2>
    </div>
    <div class="grid grid-3">
      <div class="card reveal center" style="padding:36px 28px">
        <div style="font-family:var(--font-serif);font-size:2.4rem;color:var(--blue-500);line-height:1">01</div>
        <h3 style="margin-top:14px">Judge → detective</h3>
        <p>A judge asks what they did and what they deserve. A detective asks what happened and what they need. Only one of those keeps the relationship open.</p>
      </div>
      <div class="card reveal center" style="padding:36px 28px">
        <div style="font-family:var(--font-serif);font-size:2.4rem;color:var(--blue-500);line-height:1">02</div>
        <h3 style="margin-top:14px">Won't → can't yet</h3>
        <p>The prefrontal cortex isn't fully wired until the mid-twenties. Much of what looks like defiance is machinery that hasn't been built.</p>
      </div>
      <div class="card reveal center" style="padding:36px 28px">
        <div style="font-family:var(--font-serif);font-size:2.4rem;color:var(--blue-500);line-height:1">03</div>
        <h3 style="margin-top:14px">Rupture → repair</h3>
        <p>Rupture is normal and it isn't what wounds. Unrepaired rupture is. Repair is a skill you can learn — and it's the most freeing idea in the course.</p>
      </div>
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
      ${TESTIMONIALS.map((t) => testimonialCard(t)).join("\n      ")}
    </div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:62ch">
    <p class="eyebrow">Start when you're ready</p>
    <h2>Six weeks, one idea at a time</h2>
    <p class="lede" style="color:#BFD3C7">Create a student account, work through the modules at whatever pace your life allows, and download your certificate when you're done.</p>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-light" href="login.html?mode=signup">Create your account</a>
      <a class="btn btn-ghost" style="color:#DCE8E0;border-color:rgba(255,255,255,.28)" href="contact.html">Talk to us first</a>
    </div>
  </div>
</section>
`));

/* ======================= ABOUT ======================= */
write("about.html", page(
  "About",
  "Mindify is a UK self-paced learning studio for therapeutic parenting and applied psychology. Here's what we teach, who it's for, and the principles behind it.",
  `
<section class="hero" style="padding-bottom:clamp(40px,6vw,72px)">
  <div class="wrap" style="max-width:820px">
    <p class="eyebrow">About Mindify</p>
    <h1>We teach the thinking, not just the techniques.</h1>
    <p class="lede">Mindify is a small UK learning studio building self-paced psychology training for the people doing the hardest, least-credited work there is: parents, foster and kinship carers, adopters, and the practitioners who support them.</p>
  </div>
</section>

<section class="section-tight">
  <div class="wrap-narrow">
    <p>Almost every parenting resource starts from the same place — a behaviour that needs to stop. Stop the hitting, stop the meltdowns, stop the refusal. And the techniques on offer often work, at first, which is exactly why they're so sticky.</p>
    <p>But managing the surface leaves the reason untouched. The alarm quiets while the fire keeps burning. Over time, control-based methods teach a child to avoid getting caught rather than to change, and they quietly wear through the relationship that was your real source of influence in the first place.</p>
    <p>We built Mindify around the opposite move: understand what's driving the behaviour, keep the boundary exactly where it was, and change everything around it.</p>
  </div>
</section>

<section id="approach" class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">Our approach</p>
      <h2>Five principles we won't compromise on</h2>
    </div>
    <div class="grid grid-2">
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.shield}</div><div>
        <h4>Warm and firm, never soft</h4>
        <p>Boundaries are part of safety. A child who feels loved but not safe hasn't been given enough. We hold the limit <em>and</em> the relationship, at the same time.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.brain}</div><div>
        <h4>Regulate, relate, reason — in that order</h4>
        <p>No learning happens in survival mode. Try to reason with a flipped lid and it bounces off, because the part that hears reason has left the building.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.leaf}</div><div>
        <h4>‘Good enough’ is the goal</h4>
        <p>Perfect parenting isn't a target, it's a trap. What children need is a present parent who repairs — and repair is a skill, not a personality trait.</p></div></div></div>
      <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.people}</div><div>
        <h4>No shame in the room</h4>
        <p>Under pressure, most of us default to control. That's human, not a failing. Nothing we teach is framed as a verdict on how you've parented so far.</p></div></div></div>
      <div class="card reveal" style="grid-column:1/-1"><div class="feature"><div class="feature-icon">${icons.cert}</div><div>
        <h4>Named sources, honestly represented</h4>
        <p>We draw on Bowlby and Ainsworth on attachment, Dan Siegel on interpersonal neurobiology and the hand model, Bruce Perry on the regulate–relate–reason sequence, and Dan Hughes on PACE. Where the evidence is contested or still developing, we say so rather than flattening it into a slogan.</p></div></div></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid grid-2" style="align-items:center;gap:clamp(32px,5vw,64px)">
      <div>
        <p class="eyebrow">Who it's for</p>
        <h2>If you're holding a dysregulated child, this is for you</h2>
        <p>The course was written for a mixed room, and it stays useful across all of them.</p>
      </div>
      <div>
        <details class="acc"><summary>Parents</summary><div class="acc-body">Especially if you have a child whose feelings run bigger than their ability to manage them, and the standard advice has stopped working.</div></details>
        <details class="acc"><summary>Foster, kinship and adoptive carers</summary><div class="acc-body">Where developmental trauma is in the picture and behaviour needs reading as history rather than character. Frequently used as evidence for supervision and panel.</div></details>
        <details class="acc"><summary>School and setting staff</summary><div class="acc-body">SENCOs, TAs, pastoral leads and early years staff who want a shared language across a team. ‘Regulate, relate, reason’ travels well down a corridor.</div></details>
        <details class="acc"><summary>Practitioners and support-group leads</summary><div class="acc-body">Family support workers, social workers and group facilitators looking for a coherent, teachable model rather than a bag of tips.</div></details>
      </div>
    </div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:60ch">
    <h2>“You already love your child and you're already trying hard.”</h2>
    <p class="lede" style="color:#BFD3C7">This is about a new lens, not a new you.</p>
    <div class="hero-actions" style="justify-content:center"><a class="btn btn-light" href="courses.html">See the course</a></div>
  </div>
</section>
`));

/* ======================= COURSES ======================= */
write("courses.html", page(
  "Courses",
  "Therapeutic Parenting: Connection, Regulation & Repair — six self-paced modules with a certificate on completion.",
  `
<section class="hero" style="padding-bottom:clamp(40px,6vw,64px)">
  <div class="wrap" style="max-width:820px">
    <p class="eyebrow">Courses</p>
    <h1>${COURSE.title}</h1>
    <p class="lede">${COURSE.summary}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="login.html?mode=signup">Enrol — create your account</a>
      <a class="btn btn-ghost" href="#modules">Jump to the modules</a>
    </div>
    <p class="hero-note">${icons.clock} ${COURSE.format} · ${COURSE.level}</p>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="stats reveal">
      <div class="stat"><b>6</b><span>MODULES</span></div>
      <div class="stat"><b>2h</b><span>PER MODULE</span></div>
      <div class="stat"><b>24</b><span>LEARNING OUTCOMES</span></div>
      <div class="stat"><b>∞</b><span>ACCESS</span></div>
    </div>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap"><div class="banner">${BANNER(2)}</div></div>
</section>

<section id="modules" class="band-tint">
  <div class="wrap">
    <div class="center" style="max-width:56ch;margin-inline:auto;margin-bottom:48px">
      <p class="eyebrow">The curriculum</p>
      <h2>Six modules, one thread</h2>
      <p class="lede">Each module builds on the last. Full lesson content unlocks in your student area once you're enrolled.</p>
    </div>
    <div class="grid grid-3">
      ${COURSE.modules.map((m) => moduleCard(m)).join("\n      ")}
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid grid-2" style="align-items:start;gap:clamp(32px,5vw,64px)">
      <div>
        <p class="eyebrow">How it works</p>
        <h2>Enrol, work through it, download your certificate</h2>
        <p>There are no live sessions to attend and no cohort to keep up with. You get the whole course the moment you enrol.</p>
        <a class="btn btn-primary" style="margin-top:12px" href="login.html?mode=signup">Create your account</a>
      </div>
      <div>
        <div class="card reveal" style="margin-bottom:14px"><div class="feature"><div class="feature-icon">1</div><div>
          <h4>Create a student account</h4><p>Email and a password. Takes about thirty seconds.</p></div></div></div>
        <div class="card reveal" style="margin-bottom:14px"><div class="feature"><div class="feature-icon">2</div><div>
          <h4>Work through the six modules</h4><p>In order is best — each one leans on the last — but nothing is locked. Mark each complete as you go.</p></div></div></div>
        <div class="card reveal" style="margin-bottom:14px"><div class="feature"><div class="feature-icon">3</div><div>
          <h4>Try one small thing each week</h4><p>Every module ends with a single home experiment. That's where the learning actually lands.</p></div></div></div>
        <div class="card reveal"><div class="feature"><div class="feature-icon">4</div><div>
          <h4>Download your certificate</h4><p>All six marked complete unlocks a dated PDF certificate in your dashboard.</p></div></div></div>
      </div>
    </div>
  </div>
</section>

<section class="band-ink">
  <div class="wrap center" style="max-width:60ch">
    <p class="eyebrow">Ready?</p>
    <h2>Start with Module 1 tonight</h2>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-light" href="login.html?mode=signup">Enrol now</a>
      <a class="btn btn-ghost" style="color:#DCE8E0;border-color:rgba(255,255,255,.28)" href="contact.html">Ask a question</a>
    </div>
  </div>
</section>
`));

/* ======================= MODULE DETAIL ======================= */
write("module.html", page(
  "Module",
  "Module detail — Therapeutic Parenting at Mindify.",
  `
<section class="hero" style="padding-bottom:clamp(36px,5vw,56px)">
  <div class="wrap" style="max-width:840px">
    <p class="eyebrow"><a href="courses.html">← Back to all modules</a></p>
    <p class="eyebrow" id="m-num">Module</p>
    <h1 id="m-title">…</h1>
    <p class="lede" id="m-tagline" style="font-style:italic;color:var(--blue-700)"></p>
    <p class="lede" id="m-blurb"></p>
    <div class="hero-actions">
      <a class="btn btn-primary" id="m-cta" href="login.html?mode=signup">Enrol to unlock this module</a>
      <a class="btn btn-ghost" href="courses.html">See the full curriculum</a>
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
          <h4>Home practice</h4>
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
`, {
  scripts: `<script src="assets/js/module-page.js"></script>`
}));

/* ======================= CONTACT ======================= */
write("contact.html", page(
  "Contact Us",
  "Questions about the course, group bookings or accessibility? Get in touch with Mindify.",
  `
<section class="hero" style="padding-bottom:clamp(36px,5vw,56px)">
  <div class="wrap" style="max-width:760px">
    <p class="eyebrow">Contact us</p>
    <h1>Ask us anything</h1>
    <p class="lede">Questions about whether the course fits your situation, group and organisational bookings, accessibility needs, or anything else — we read every message and reply within two working days.</p>
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
          <div class="field"><label for="c-name">Your name</label>
            <input class="input" id="c-name" name="name" required autocomplete="name"></div>
          <div class="field"><label for="c-email">Email address</label>
            <input class="input" id="c-email" name="email" type="email" required autocomplete="email"></div>
          <div class="field"><label for="c-topic">What's this about?</label>
            <select class="input" id="c-topic" name="topic">
              <option>A question about the course</option>
              <option>Group or organisational booking</option>
              <option>Accessibility or learning support</option>
              <option>Problem with my student account</option>
              <option>Something else</option>
            </select></div>
          <div class="field"><label for="c-msg">Message</label>
            <textarea class="input" id="c-msg" name="message" required></textarea></div>
          <button class="btn btn-primary btn-block" type="submit">Send message</button>
          <p class="hint" style="text-align:center">We'll only use your details to reply. Nothing is added to a mailing list.</p>
        </form>
      </div>
      <div>
        <div class="card reveal" style="margin-bottom:16px"><div class="feature"><div class="feature-icon">${icons.heart}</div><div>
          <h4>Email</h4><p><a href="mailto:hello@mindify.co.uk">hello@mindify.co.uk</a><br><span class="muted">Replies within two working days.</span></p></div></div></div>
        <div class="card reveal" style="margin-bottom:16px"><div class="feature"><div class="feature-icon">${icons.people}</div><div>
          <h4>Groups and organisations</h4><p>Schools, fostering agencies and support services — we offer bulk enrolment and a facilitator pack for running the modules as live sessions.</p></div></div></div>
        <div class="card reveal"><div class="feature"><div class="feature-icon">${icons.shield}</div><div>
          <h4>Accessibility</h4><p>Tell us what you need. We can supply transcripts, large-print workbooks and extended access on request, at no extra cost.</p></div></div></div>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="band-tint">
  <div class="wrap-narrow">
    <p class="eyebrow center">FAQs</p>
    <h2 class="center" style="margin-bottom:36px">Questions we get a lot</h2>
    <details class="acc"><summary>Isn't therapeutic parenting just being permissive?</summary><div class="acc-body">No — and this is the single most common misunderstanding. Permissive parenting drops the boundary to avoid conflict, which leaves a child feeling loved but not safe. Therapeutic parenting holds the boundary firmly and adds empathy alongside it. “I won't let you hit. I'm right here.” The limit doesn't move.</div></details>
    <details class="acc"><summary>How long does the course take?</summary><div class="acc-body">Around twelve hours of material across six modules. Most people spread it over six to ten weeks, doing a module a week with the home practice in between. There's no deadline and no expiry — your access doesn't run out.</div></details>
    <details class="acc"><summary>Is there a certificate?</summary><div class="acc-body">Yes. Mark all six modules complete in your dashboard and a dated PDF certificate unlocks for download. It's widely used for CPD logs, supervision records and fostering panel evidence. It isn't a regulated professional qualification and we don't claim it is.</div></details>
    <details class="acc"><summary>My child is autistic / has ADHD / has experienced trauma. Does this still apply?</summary><div class="acc-body">The underlying model — regulation before reasoning, connection before correction — holds across all of these, and much of the material was originally written with developmental trauma in mind. It isn't a substitute for a diagnostic assessment or specialist therapeutic input, and we'd never suggest it is.</div></details>
    <details class="acc"><summary>Can I do this with a partner or co-parent?</summary><div class="acc-body">You can, and it works noticeably better when you do — a shared language matters more than either person's individual technique. Each person needs their own account so progress and certificates stay accurate.</div></details>
    <details class="acc"><summary>Do you offer this as live training?</summary><div class="acc-body">Each module is written as a two-hour facilitated session with check-ins, teaching blocks, paired reflection and an applied activity. If you'd like to run it live with a group, get in touch about the facilitator pack.</div></details>
  </div>
</section>
`, {
  scripts: `<script src="assets/js/contact.js"></script>`
}));

console.log("Pages built.");
