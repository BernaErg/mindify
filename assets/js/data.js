/* ==========================================================================
   Mindify — content model.
   One place for everything the site says about itself and its courses.
   Add a course here and the cards, detail pages, covers and dashboard all
   follow. Nothing else needs touching.
   ========================================================================== */

window.MINDIFY_PLATFORM = {
  name: "Mindify",
  promise: "Psychology, taught properly",
  /* Ordered. This ordering drives the copy across the whole site. */
  audiences: [
    { key: "students",      label: "Psychology students",
      line: "Depth your syllabus doesn't have time for, taught by someone who marks the essays." },
    { key: "practitioners", label: "Practitioners & carers",
      line: "Applied models you can use on Monday, with the evidence behind them intact." },
    { key: "managers",      label: "Managers & teams",
      line: "How people actually behave under pressure, without the business-book shortcuts." },
    { key: "curious",       label: "Parents & the curious",
      line: "No prior training assumed. Nothing dumbed down either." }
  ]
};

window.MINDIFY_COURSES = [
  {
    slug: "therapeutic-parenting",
    title: "Therapeutic Parenting",
    subtitle: "Connection, Regulation & Repair",
    status: "available",
    level: "Introductory · no prior training required",
    hours: 12,
    forWho: ["students", "practitioners", "curious"],
    summary:
      "The applied end of attachment theory and affective neuroscience. Six modules on reading behaviour as communication, regulating before reasoning, and repairing well — the model that underpins most trauma-informed practice in UK schools and fostering services.",
    why:
      "Students meet Bowlby and Siegel in lectures and then never see them used. This course is the bridge: the same theory, followed all the way through to what you actually say at six o'clock on a Tuesday.",
    modules: [
      {
        n: 1, slug: "foundations",
        title: "Foundations — From Control to Connection",
        tagline: "Behaviour is communication. Connection comes before correction.",
        minutes: 120,
        blurb:
          "Locate your own default stance without judgement, then meet the reframe the whole course rests on: behaviour is the tip of an iceberg, and the interesting part sits below the waterline.",
        outcomes: [
          "Tell control-based, permissive and therapeutic approaches apart",
          "Explain why connection has to come before correction",
          "Use the iceberg to find the need beneath a behaviour",
          "Reframe one recurring struggle through a connection lens"
        ],
        keys: ["The judge vs. the detective", "The smoke alarm", "Siegel's 4 S's", "Map your iceberg"],
        practice: "Your ‘detective week’ — pick one behaviour and simply notice it for seven days."
      },
      {
        n: 2, slug: "brain-and-nervous-system",
        title: "The Developing Brain & Nervous System",
        tagline: "You are working with a brain and a body still under construction.",
        minutes: 120,
        blurb:
          "Why ‘just calm down’ asks for something a child's brain may not have built yet. The hand model, flipping your lid, and the window of tolerance — plus the response sequence that actually lands.",
        outcomes: [
          "Use the hand model to explain the upstairs and downstairs brain",
          "Explain why the thinking brain comes online last",
          "Recognise the window of tolerance and hyper/hypo-arousal",
          "Map a window of tolerance: triggers, signs, what helps"
        ],
        keys: ["Siegel's hand model", "Regulate → Relate → Reason", "Window of tolerance", "Name it to tame it"],
        practice: "Catch the flip — notice the first bodily sign that your own lid is going up."
      },
      {
        n: 3, slug: "attachment-and-pace",
        title: "Attachment & the PACE Way of Being",
        tagline: "Be the secure base. Relate with PACE.",
        minutes: 120,
        blurb:
          "Attachment as a launchpad and a harbour. Why coping patterns are clever survival strategies rather than flaws — and how the PACE stance deepens felt safety in ordinary exchanges.",
        outcomes: [
          "Explain attachment as a secure base and a safe haven",
          "See coping patterns as survival strategies, not labels",
          "Describe the PACE stance and why it builds felt safety",
          "Turn an everyday exchange into a PACE-based response"
        ],
        keys: ["Bowlby & Ainsworth", "Serve and return", "‘Good enough’", "PACE role-play"],
        practice: "One PACE element a day for a week — playfulness, acceptance, curiosity, empathy."
      },
      {
        n: 4, slug: "co-regulation",
        title: "Co-Regulation & Big Feelings",
        tagline: "Children borrow our calm. Regulate before you educate.",
        minutes: 120,
        blurb:
          "Self-regulation is built from thousands of experiences of being co-regulated. The shape of the wave, why we never teach at the peak, and a five-step ladder you can climb in a live moment of overwhelm.",
        outcomes: [
          "Explain co-regulation and why it precedes self-regulation",
          "Tell a tantrum from a meltdown — and respond to each",
          "Use a five-step regulation ladder in a live moment",
          "Build a co-regulation toolkit and a calm-down plan"
        ],
        keys: ["Borrowing calm", "The wave", "Tantrum vs. meltdown", "The regulation ladder"],
        practice: "Climb the ladder — use the five steps once and write down what happened."
      },
      {
        n: 5, slug: "the-reason-not-the-behaviour",
        title: "The Reason, Not the Behaviour",
        tagline: "Every behaviour is a message. Respond to the need, not just the act.",
        minutes: 120,
        blurb:
          "The hidden reasons behind the behaviours that test you most, why reward charts and punishments so often disappoint with a dysregulated child, and how to design a response that keeps the boundary intact.",
        outcomes: [
          "Read behaviour as communication of an unmet need",
          "Tell natural and logical consequences apart from punishment",
          "Explain why reward charts fail a dysregulated child",
          "Design a therapeutic response to one real behaviour"
        ],
        keys: ["Hidden reasons", "Consequences vs. punishment", "The flashpoint toolkit", "Decode & design"],
        practice: "Try the five steps on one flashpoint behaviour this week."
      },
      {
        n: 6, slug: "rupture-repair-long-game",
        title: "Rupture, Repair & the Long Game",
        tagline: "Repair is where connection is rebuilt.",
        minutes: 120,
        blurb:
          "The most freeing idea in the course: rupture is normal and it isn't what wounds. The repair sequence, the shame/guilt distinction that protects a child from the inside out, and how to keep going through setbacks.",
        outcomes: [
          "Repair a rupture skilfully — own your part and reconnect",
          "Tell shame from guilt and reduce toxic shame",
          "Sustain change through setbacks; embrace ‘good enough’",
          "Write a one-page Connection Plan and a self-care commitment"
        ],
        keys: ["Rupture & repair", "Shame vs. guilt", "The long game", "Connection Plan"],
        practice: "Write your Connection Plan and one self-care commitment you'll actually keep."
      }
    ]
  },

  /* ------------------------------------------------------------------
     PLACEHOLDERS — replace titles, summaries and outlines with the real
     courses before launch. They exist so the platform structure is visible.
     Set status to "available" and add a modules array to publish one.
     ------------------------------------------------------------------ */
  {
    slug: "developmental-neuroscience",
    title: "The Developing Brain",
    subtitle: "Neuroscience for People Who Work With People",
    status: "in-development",
    level: "Intermediate · some psychology background helpful",
    hours: 14,
    forWho: ["students", "practitioners"],
    summary:
      "What the neuroscience genuinely supports, what it doesn't, and how to tell the difference. Stress physiology, plasticity, critical periods, and the neuromyths that keep circulating in training rooms.",
    why: "Placeholder course — outline only.",
    outline: ["Stress physiology and the HPA axis", "Plasticity and critical periods",
              "Executive function across development", "Reading a neuroimaging paper critically",
              "Neuromyths and how they spread"]
  },
  {
    slug: "attachment-in-practice",
    title: "Attachment in Clinical Practice",
    subtitle: "From Strange Situation to the Consulting Room",
    status: "in-development",
    level: "Intermediate · for students and practitioners",
    hours: 16,
    forWho: ["students", "practitioners"],
    summary:
      "Attachment theory taken past the undergraduate summary: measurement and its limits, adult attachment, disorganisation, and what the evidence does and does not license you to claim.",
    why: "Placeholder course — outline only.",
    outline: ["Ainsworth's paradigm and what it measures", "The Adult Attachment Interview",
              "Disorganised attachment and developmental trauma", "Attachment and culture: the replication picture",
              "Formulation using attachment"]
  },
  {
    slug: "psychology-at-work",
    title: "Psychology for Managers",
    subtitle: "People, Teams & Motivation",
    status: "in-development",
    level: "Introductory · no prior training required",
    hours: 11,
    forWho: ["managers", "curious"],
    summary:
      "Organisational psychology without the business-book shortcuts. Motivation, feedback, psychological safety and group dynamics — with the actual studies, including the ones that failed to replicate.",
    why: "Placeholder course — outline only.",
    outline: ["Motivation: what self-determination theory really claims", "Feedback that changes behaviour",
              "Psychological safety and its evidence base", "Group dynamics and decision quality",
              "Stress, recovery and burnout"]
  }
];

/* The portal currently tracks the first available course. */
window.MINDIFY_COURSE = window.MINDIFY_COURSES[0];

window.MINDIFY_TESTIMONIALS = [
  {
    quote:
      "I'd covered attachment three times at university and never once seen it applied. This was the first time the theory turned into something I could actually do.",
    name: "Hannah R.", role: "MSc Psychology student, Manchester", initials: "HR"
  },
  {
    quote:
      "The iceberg exercise undid fifteen years of ‘what's wrong with this child’ thinking in about forty minutes. I've since run it with my whole foster carer group.",
    name: "Delia O.", role: "Foster carer & support group lead", initials: "DO"
  },
  {
    quote:
      "As a SENCO I've sat through a lot of training. This is the first that gave staff a shared language — ‘regulate, relate, reason’ is now said out loud in our corridors.",
    name: "Michael T.", role: "SENCO, primary school", initials: "MT"
  },
  {
    quote:
      "It's taught like a seminar, not a webinar. You get told where the evidence is contested instead of a tidy story that falls apart when you look it up.",
    name: "Priya S.", role: "Assistant psychologist", initials: "PS"
  },
  {
    quote:
      "Self-paced was the only way this was ever going to happen for me. I did most of it at 10pm with a cup of tea, ten minutes at a time.",
    name: "Jo A.", role: "Kinship carer", initials: "JA"
  },
  {
    quote:
      "I manage a team of eleven and came in sceptical. Left with a much better sense of why my feedback kept bouncing off certain people.",
    name: "Ellie W.", role: "Operations manager, Bristol", initials: "EW"
  }
];
