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
    { key: "academic", icon: "brain", accent: "#2E4372", chip: "#E2E8F4",
      label: "Academic depth, kept",
      line: "Named researchers, real studies, and an honest note wherever a finding is contested. Nothing is simplified past the point where it stays true.",
      tag: "Rigour",
      tr: { label: "Akademik derinlik korunur",
            line: "İsmiyle araştırmacılar, gerçek çalışmalar ve bir bulgu tartışmalıysa dürüst bir not. Hiçbir şey doğruluğunu yitireceği noktaya kadar basitleştirilmiyor.",
            tag: "Titizlik" } },
    { key: "applied", icon: "repeat", accent: "#41598F", chip: "#E4EAF6",
      label: "Theory that survives contact",
      line: "Every module ends with something to try. A model that can't change what you do on an ordinary day hasn't finished being taught.",
      tag: "Application",
      tr: { label: "Temasla sınanan teori",
            line: "Her modül denenecek bir şeyle bitiyor. Sıradan bir günde ne yaptığınızı değiştiremeyen bir modelin anlatımı bitmemiştir.",
            tag: "Uygulama" } },
    { key: "open", icon: "people", accent: "#9E6420", chip: "#F4EADA",
      label: "Open to anyone who'll do the reading",
      line: "No prerequisite, no gatekeeping, nothing dumbed down. Each course states plainly what it assumes you already know.",
      tag: "Access",
      tr: { label: "Okumayı yapacak herkese açık",
            line: "Ön koşul yok, kapıda bekletme yok, hiçbir şey de basitleştirilmiyor. Her kurs neyi bildiğinizi varsaydığını açıkça yazıyor.",
            tag: "Erişim" } },
    { key: "practice", icon: "shield", accent: "#2E4372", chip: "#E2E8F4",
      label: "Built for the long run",
      line: "Access never expires and courses are revised as the evidence moves. Learning here is a habit, not a purchase.",
      tag: "Continuity",
      tr: { label: "Uzun vade için kuruldu",
            line: "Erişimin süresi hiç dolmuyor ve kanıt değiştikçe kurslar güncelleniyor. Buradaki öğrenme bir satın alma değil, bir alışkanlık.",
            tag: "Süreklilik" } }
  ]
};

window.MINDIFY_COURSES = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: "therapeutic-parenting",
    tr: {
      subtitle: "Bağ, Düzenleme ve Onarım",
      level: "Giriş düzeyi · ön eğitim gerekmez",
      summary: "Bağlanma kuramı ve duygulanım nörobiliminin uygulamaya bakan ucu. Davranışı iletişim olarak okumak, akıl yürütmeden önce düzenlemek ve iyi onarmak üzerine altı modül — İngiltere'de okulların ve koruyucu aile hizmetlerinin travma-bilgili uygulamasının dayandığı model.",
      why: "Öğrenciler Bowlby ve Siegel ile derslerde tanışıyor, sonra bunların kullanıldığını hiç görmüyor. Bu kurs o köprü: aynı teori, salı akşamı saat altıda ağzınızdan çıkacak cümleye kadar takip edilmiş.",
    },
    title: "Therapeutic Parenting",
    subtitle: "Connection, Regulation & Repair",
    status: "available",
    level: "Introductory · no prior training required",
    hours: 12,
    forWho: ["students", "practitioners", "curious"],
    summary:
      "The applied end of attachment theory and affective neuroscience. Six modules on reading behaviour as communication, regulating before reasoning, and repairing well — the model underpinning most trauma-informed practice in UK schools and fostering services.",
    why:
      "Students meet Bowlby and Siegel in lectures and then never see them used. This course is the bridge: the same theory, followed all the way through to what you actually say at six o'clock on a Tuesday.",
    modules: [
      { n: 1, slug: "foundations", title: "Foundations — From Control to Connection",
        tagline: "Behaviour is communication. Connection comes before correction.", minutes: 120,
        blurb: "Locate your own default stance without judgement, then meet the reframe the whole course rests on: behaviour is the tip of an iceberg, and the interesting part sits below the waterline.",
        outcomes: ["Tell control-based, permissive and therapeutic approaches apart","Explain why connection has to come before correction","Use the iceberg to find the need beneath a behaviour","Reframe one recurring struggle through a connection lens"],
        keys: ["The judge vs. the detective","The smoke alarm","Siegel's 4 S's","Map your iceberg"],
        practice: "Your ‘detective week’ — pick one behaviour and simply notice it for seven days." },
      { n: 2, slug: "brain-and-nervous-system", title: "The Developing Brain & Nervous System",
        tagline: "You are working with a brain and a body still under construction.", minutes: 120,
        blurb: "Why ‘just calm down’ asks for something a child's brain may not have built yet. The hand model, flipping your lid, and the window of tolerance — plus the response sequence that actually lands.",
        outcomes: ["Use the hand model to explain the upstairs and downstairs brain","Explain why the thinking brain comes online last","Recognise the window of tolerance and hyper/hypo-arousal","Map a window of tolerance: triggers, signs, what helps"],
        keys: ["Siegel's hand model","Regulate → Relate → Reason","Window of tolerance","Name it to tame it"],
        practice: "Catch the flip — notice the first bodily sign that your own lid is going up." },
      { n: 3, slug: "attachment-and-pace", title: "Attachment & the PACE Way of Being",
        tagline: "Be the secure base. Relate with PACE.", minutes: 120,
        blurb: "Attachment as a launchpad and a harbour. Why coping patterns are clever survival strategies rather than flaws — and how the PACE stance deepens felt safety in ordinary exchanges.",
        outcomes: ["Explain attachment as a secure base and a safe haven","See coping patterns as survival strategies, not labels","Describe the PACE stance and why it builds felt safety","Turn an everyday exchange into a PACE-based response"],
        keys: ["Bowlby & Ainsworth","Serve and return","‘Good enough’","PACE role-play"],
        practice: "One PACE element a day for a week — playfulness, acceptance, curiosity, empathy." },
      { n: 4, slug: "co-regulation", title: "Co-Regulation & Big Feelings",
        tagline: "Children borrow our calm. Regulate before you educate.", minutes: 120,
        blurb: "Self-regulation is built from thousands of experiences of being co-regulated. The shape of the wave, why we never teach at the peak, and a five-step ladder you can climb in a live moment of overwhelm.",
        outcomes: ["Explain co-regulation and why it precedes self-regulation","Tell a tantrum from a meltdown — and respond to each","Use a five-step regulation ladder in a live moment","Build a co-regulation toolkit and a calm-down plan"],
        keys: ["Borrowing calm","The wave","Tantrum vs. meltdown","The regulation ladder"],
        practice: "Climb the ladder — use the five steps once and write down what happened." },
      { n: 5, slug: "the-reason-not-the-behaviour", title: "The Reason, Not the Behaviour",
        tagline: "Every behaviour is a message. Respond to the need, not just the act.", minutes: 120,
        blurb: "The hidden reasons behind the behaviours that test you most, why reward charts and punishments so often disappoint with a dysregulated child, and how to design a response that keeps the boundary intact.",
        outcomes: ["Read behaviour as communication of an unmet need","Tell natural and logical consequences apart from punishment","Explain why reward charts fail a dysregulated child","Design a therapeutic response to one real behaviour"],
        keys: ["Hidden reasons","Consequences vs. punishment","The flashpoint toolkit","Decode & design"],
        practice: "Try the five steps on one flashpoint behaviour this week." },
      { n: 6, slug: "rupture-repair-long-game", title: "Rupture, Repair & the Long Game",
        tagline: "Repair is where connection is rebuilt.", minutes: 120,
        blurb: "The most freeing idea in the course: rupture is normal and it isn't what wounds. The repair sequence, the shame/guilt distinction that protects a child from the inside out, and how to keep going through setbacks.",
        outcomes: ["Repair a rupture skilfully — own your part and reconnect","Tell shame from guilt and reduce toxic shame","Sustain change through setbacks; embrace ‘good enough’","Write a one-page Connection Plan and a self-care commitment"],
        keys: ["Rupture & repair","Shame vs. guilt","The long game","Connection Plan"],
        practice: "Write your Connection Plan and one self-care commitment you'll actually keep." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: "psychedelics-in-mental-health",
    tr: {
      subtitle: "Maddeler, Kanıt ve Terapötik Süreç",
      level: "Orta düzey · akademik; psikoloji ve tıp öğrencilerine uygun",
      summary: "Psychedelic rönesansının eleştirel okuması. Farmakoloji, varsayılan mod ağı, klinik araştırma kanıtının durum durum incelenmesi, terapötik model, gerçek riskler ve dünyada ile Türkiye'deki yasal tablo üzerine altı adet iki saatlik modül.",
      why: "Kamuoyu tartışması mucize ilaç ile ahlaki panik arasında gidip geliyor ve araştırma literatürünü iyi okumak gerçekten zor. Bu kursun amacı ne savunuculuk ne de reddiye — sağlam bir bulguyu erken bir bulgudan ayırt edebilir hâle gelmeniz.",
      notice: "Yalnızca eğitim ve akademik içerik. Hiçbir temin yolu, doz veya kullanım yöntemi anlatılmaz; kişisel kullanım önerilmez. Türkiye'de bu maddeler Türk Ceza Kanunu 188 ve 191. maddeleri kapsamında yasa dışıdır; anlatılan klinik uygulamalar yalnızca yasal olduğu ülkeler için geçerlidir.",
    },
    title: "Psychedelics in Mental Health",
    subtitle: "Substances, Evidence and the Therapeutic Process",
    status: "available",
    level: "Intermediate · academic; suits psychology and medical students",
    hours: 12,
    forWho: ["students", "practitioners"],
    notice:
      "Educational and academic content only. No sourcing, dosing or method of use is described, and personal use is not recommended. In Türkiye these substances are illegal under the Turkish Penal Code (arts. 188 and 191); the clinical practices described apply only in jurisdictions where they are lawful.",
    summary:
      "The psychedelic renaissance read critically. Six two-hour modules covering pharmacology, the default mode network, the clinical trial evidence condition by condition, the therapeutic model, the real risks, and the legal picture in the world and in Türkiye.",
    why:
      "The public conversation runs between miracle cure and moral panic, and the research literature is genuinely hard to read well. The aim of this course is neither advocacy nor dismissal — it is to leave you able to tell a solid finding from an early one.",
    modules: [
      { n: 1, slug: "introduction", title: "Introduction to Psychedelics",
        tagline: "Definitions, history, and the ‘psychedelic renaissance’.", minutes: 120,
        blurb: "Where the word came from and why naming has been fought over. The four substance families, the ancient roots, the 1938–1965 age of science, prohibition, and the renaissance that followed.",
        outcomes: ["Distinguish psychedelic, entheogen and hallucinogen, and say why it matters","Classify the four substance families by chemistry and effect","Trace the arc from ancient use through prohibition to the renaissance","Frame the field without becoming either an advocate or a sceptic"],
        keys: ["Osmond & Huxley","Four substance families","Prohibition","The renaissance"],
        practice: "Find one recent psychedelics headline and identify what the underlying study actually showed." },
      { n: 2, slug: "substances-and-the-brain", title: "Substances and the Brain",
        tagline: "What exactly do these substances do in the brain?", minutes: 120,
        blurb: "Serotonin and the 5-HT2A receptor, the default mode network, entropy and neuroplasticity — and the subjective experience they add up to. Built as a mental map rather than a list to memorise.",
        outcomes: ["Explain the 5-HT2A mechanism of the classic psychedelics","Describe the default mode network and what disrupting it does","Connect entropy and neuroplasticity to the subjective experience","Say where the mechanistic story is confident and where it is speculative"],
        keys: ["5-HT2A","Default mode network","Entropic brain","Neuroplasticity"],
        practice: "Draw the mechanism from memory, then mark the two weakest links in your own diagram." },
      { n: 3, slug: "evidence", title: "Psychedelics and Mental Health",
        tagline: "Clinical research: what does the evidence actually say?", minutes: 120,
        blurb: "Psilocybin and depression, MDMA and PTSD, end-of-life anxiety, addiction, ketamine and esketamine — condition by condition, with the strength of evidence stated honestly each time.",
        outcomes: ["Summarise the evidence base condition by condition","Explain why treatment-resistant cases are the research target","Read a psychedelic trial critically — blinding, expectancy, sample size","Tell a solid finding from an early one"],
        keys: ["Psilocybin & depression","MDMA & PTSD","Ketamine","Reading the evidence"],
        practice: "Read one trial abstract and list every reason its effect size might be overstated." },
      { n: 4, slug: "therapeutic-model", title: "The Therapeutic Model",
        tagline: "Set, setting and integration: not a drug, a process.", minutes: 120,
        blurb: "Why the ‘take a pill and heal’ narrative misleads. Set and setting, the three-phase model, the therapist's role and the trust it depends on, and how difficult experiences are worked with rather than avoided.",
        outcomes: ["Explain why the substance is a catalyst and the therapy is the centre","Describe set, setting and the three-phase model","Account for the therapist's role and the trust it requires","Explain how difficult experiences are held and integrated"],
        keys: ["Set & setting","Three-phase model","Integration","Psychedelic-assisted therapy"],
        practice: "Write the sentence you'd use to correct someone who says psilocybin ‘cures’ depression." },
      { n: 5, slug: "risks-and-ethics", title: "Risks, Safety and Ethics",
        tagline: "Neither ‘dangerous drug’ panic nor ‘risk-free miracle’ fantasy.", minutes: 120,
        blurb: "Physical and psychological risks, contraindications and interactions, the harm-reduction principle, and the field's genuinely difficult ethical problems — including power, touch and suggestibility in an altered state.",
        outcomes: ["Weigh the physical and psychological risks proportionately","State the main contraindications and drug interactions","Apply the harm-reduction principle","Name the field's ethical fault lines around power and consent"],
        keys: ["Contraindications","Harm reduction","Suggestibility","Ethics of the field"],
        practice: "Write a screening question you'd want asked before anyone entered a session." },
      { n: 6, slug: "legal-and-future", title: "Legal Status and the Future",
        tagline: "Where the picture stands — and what the responsible path is.", minutes: 120,
        blurb: "The legal landscape in the US, Australia, Europe and Türkiye; plausible future scenarios; and what responsible engagement with this field looks like from where you're standing.",
        outcomes: ["Describe the legal position across major jurisdictions","State the legal situation in Türkiye accurately","Assess plausible regulatory futures without overclaiming","Identify a responsible, lawful path into the field"],
        keys: ["Schedule I","Australia & Europe","Türkiye: TPC 188/191","Responsible engagement"],
        practice: "Write your own one-paragraph position on the field — and the evidence that would change it." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: "integrative-breathwork",
    tr: {
      subtitle: "Fizyoloji, Teknik ve Alan Tutma",
      level: "Giriş–orta düzey · eğitmen eğitimi",
      summary: "Mistisizm üzerine değil fizyoloji üzerine kurulmuş bir eğitmen eğitimi. Nefes alan beden, HRV ve CO₂ toleransı, teknik seti, alan tutma zanaati, travma-bilgili güvenlik ve oturum tasarımı üzerine altı modül.",
      why: "Nefes çalışması eğitimleri genelde ya pratiği olmayan anatomi dersine ya da mekanizması olmayan pratiğe ayrılıyor. Burada ikisi birlikte: her teknik sinir sistemine ne yaptığına kadar geri götürülüyor ve her iddia desteklenmiş, makul ya da spekülatif olarak işaretleniyor.",
    },
    title: "Integrative Breathwork Facilitation",
    subtitle: "Physiology, Technique and Holding Space",
    status: "available",
    level: "Introductory to intermediate · facilitator training",
    hours: 9,
    forWho: ["students", "practitioners", "curious"],
    summary:
      "A facilitator training built on physiology rather than mysticism. Six modules covering the breathing body, HRV and CO₂ tolerance, the technique toolkit, the craft of holding space, trauma-informed safety, and how to design and run a session.",
    why:
      "Breathwork training tends to split into anatomy lectures with no practice, or practice with no mechanism. This keeps both: every technique is traced back to what it does to the nervous system, and every claim is marked as supported, plausible or speculative.",
    modules: [
      { n: 1, slug: "foundations-of-breath", title: "Foundations of Breath",
        tagline: "The breathing body and the field of breathwork.", minutes: 90,
        blurb: "What breathwork is and what it isn't. The diaphragm, gas exchange, and the surprising role of carbon dioxide — plus the traditions this integrative approach draws from, and where the scope of practice ends.",
        outcomes: ["Define breathwork and the integrative stance","Describe the breathing apparatus and the mechanics of a breath","Explain why carbon dioxide, not oxygen, drives the urge to breathe","State the scope and limits of a facilitator's role"],
        keys: ["The diaphragm","CO₂ and the urge to breathe","Pressure, not suction","Scope of practice"],
        practice: "Spend five minutes a day noticing your own default breathing pattern without changing it." },
      { n: 2, slug: "science-of-breath", title: "The Science of Breath",
        tagline: "Nervous system states, HRV, CO₂ tolerance and altered states.", minutes: 90,
        blurb: "Heart-rate variability as a window on autonomic flexibility, the resonance frequency around six breaths a minute, the BOLT score, and the physiology behind expansive breathwork — with the evidence graded honestly.",
        outcomes: ["Explain HRV and why slow breathing amplifies it","Find and use a resonance breathing rate","Measure CO₂ tolerance with the BOLT score","Say what the evidence supports and where it is thin"],
        keys: ["HRV & vagal tone","Resonance ~6 bpm","BOLT score","Altered states"],
        practice: "Measure your BOLT score on three mornings and note what changes it." },
      { n: 3, slug: "core-techniques", title: "Core Techniques & the Applied Toolkit",
        tagline: "Every technique is a setting of five dials.", minutes: 90,
        blurb: "Rate, depth, ratio, route and retention — the five variables behind every method. Diaphragmatic and nasal breathing as the base, coherent and box breathing for functional calm, then pranayama and connected breathing, and how to sequence them.",
        outcomes: ["Describe any technique in terms of the five variables","Teach diaphragmatic and nasal breathing as a foundation","Apply coherent and box breathing appropriately","Sequence techniques toward a session goal"],
        keys: ["The five variables","Coherent & box","Connected breathing","Sequencing"],
        practice: "Compose a new three-minute technique by changing only two of the five dials." },
      { n: 4, slug: "facilitation-skills", title: "Facilitation Skills & the Art of Holding Space",
        tagline: "Your regulated nervous system is the container.", minutes: 90,
        blurb: "Presence, attunement, voice and cueing. Why regulation is contagious, how to read a room in real time, and the trauma-informed language that keeps choice with the participant.",
        outcomes: ["Ground and regulate yourself before facilitating","Track a participant's state and adapt in real time","Use voice, pace and cueing deliberately","Apply trauma-informed language and choice"],
        keys: ["Presence","Co-regulation","Cueing","Reading the room"],
        practice: "Record yourself cueing two minutes of practice and listen back for pace and pressure." },
      { n: 5, slug: "safety-and-ethics", title: "Safety, Ethics & Trauma-Informed Practice",
        tagline: "Intensity and safety pull apart.", minutes: 90,
        blurb: "Contraindications, screening and consent, managing tetany, over-breathing, catharsis and dissociation — and the scope, boundary and referral decisions that keep the work ethical.",
        outcomes: ["State the cardiovascular, respiratory and psychiatric contraindications","Run a screening and informed consent process","Manage tetany, over-breathing and emotional release safely","Recognise the limit of your scope and refer"],
        keys: ["Contraindications","Screening & consent","Managing intensity","Scope & referral"],
        practice: "Draft your own intake form, then remove every question you couldn't justify." },
      { n: 6, slug: "designing-sessions", title: "Designing & Delivering Sessions",
        tagline: "One well-supported rise, and a gentle return.", minutes: 90,
        blurb: "The five-phase session arc, designing for a goal, integration and aftercare, adapting to studio, online, corporate and one-to-one settings — and the ethics and practicalities of building a practice.",
        outcomes: ["Structure a session across the five phases","Design a session for a specific goal","Run integration and aftercare properly","Adapt a session to different settings and formats"],
        keys: ["Five-phase arc","Intensity curve","Integration","Building a practice"],
        practice: "Write a full session plan for one real person you know, with timings." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: "forest-bathing",
    tr: {
      subtitle: "Psikolojik İyi Oluş Kolaylaştırıcılığı",
      level: "Giriş düzeyi · eğitmen eğitimi",
      summary: "Shinrin-yoku bir wellness trendi olarak değil, kanıta dayalı bir uygulama olarak anlatılıyor. Kökenler ve etik çerçeve, fizyolojik araştırma, psikolojik mekanizmalar ve sınırları, ANFT standart dizisi, oturum tasarımı ve profesyonel uygulama üzerine altı modül.",
      why: "Doğa temelli iyi oluş alanı fazla iddiaya açık. Bu kurs çalışmaları koruyor — fitonsitler ve NK hücreleri, kortizol, ART ve SRT — kanıt düzeylerini dürüstçe söylüyor, kolaylaştırıcılık zanaatını da bunun üzerine kuruyor.",
    },
    title: "Forest Bathing & Silvotherapy",
    subtitle: "Psychological Wellbeing Facilitation",
    status: "available",
    level: "Introductory · facilitator training",
    hours: 6,
    forWho: ["students", "practitioners", "curious"],
    summary:
      "Shinrin-yoku taught as an evidence-based practice rather than a wellness trend. Six modules covering the origins and ethical frame, the physiological research, the psychological mechanisms and their limits, the ANFT standard sequence, session design, and professional practice.",
    why:
      "Nature-based wellbeing attracts a lot of overclaiming. This course keeps the studies — phytoncides and NK cells, cortisol, ART and SRT — and states their evidence levels honestly, then teaches the facilitation craft on top of that.",
    modules: [
      { n: 1, slug: "introduction", title: "Introduction to Forest Bathing and Silvotherapy",
        tagline: "Roots, concepts and the ethical framework.", minutes: 60,
        blurb: "Where shinrin-yoku came from, how it differs from a nature walk or a hike, and the measurable foundations of the human–nature bond — plus an honest framing of what this training does and does not qualify you to do.",
        outcomes: ["Explain the origins and history of shinrin-yoku and silvotherapy","Distinguish forest bathing from walking, hiking and botanical excursions","Explain biophilia and nature-connection measurement","Frame the scope, promise and ethical boundaries of the practice"],
        keys: ["Shinrin-yoku, 1982","Biophilia","Nature-connection scales","Scope & ethics"],
        practice: "Sit in one outdoor place for twenty minutes without a phone, and write down what changed." },
      { n: 2, slug: "scientific-foundations", title: "Scientific Foundations",
        tagline: "Body, brain and forest.", minutes: 60,
        blurb: "Stress physiology, phytoncides and NK-cell activity, the cortisol and autonomic findings from Park's 24-forest study and the Antonelli meta-analysis, and the two competing restoration theories.",
        outcomes: ["Explain the effect of phytoncides on immune markers","Summarise the cortisol, blood pressure and autonomic findings","Distinguish Attention Restoration Theory from Stress Reduction Theory","Convey findings with their evidence levels and limitations"],
        keys: ["Phytoncides & NK cells","Cortisol & the HPA axis","ART vs. SRT","Evidence levels"],
        practice: "Pick one popular forest-bathing claim and trace it back to its original study." },
      { n: 3, slug: "psychology", title: "Forest Bathing and Psychology",
        tagline: "Psychological mechanisms, and their limits.", minutes: 60,
        blurb: "Effects on stress, anxiety and depressive symptoms; rumination and Bratman's sgPFC findings; the mindfulness bridge; and the boundary between complementary support and clinical intervention.",
        outcomes: ["Explain the effects on stress, anxiety and depressive symptoms","Place rumination, mindfulness and emotion regulation in context","Invite self-compassion and meaning into a session","Define the referral boundary and recognise red flags"],
        keys: ["POMS findings","Rumination & the sgPFC","The mindfulness bridge","Red flags & referral"],
        practice: "Write the exact words you'd use to refer someone on, kindly and clearly." },
      { n: 4, slug: "art-of-practice", title: "The Art of Practice",
        tagline: "The forest is the therapist; the guide opens the door.", minutes: 60,
        blurb: "The guiding philosophy and the four core stances, the ANFT standard sequence stage by stage, and how to build and offer an ‘invitation’ — using pace, silence, voice and body as instruments.",
        outcomes: ["Internalise the guiding philosophy and its humility","Apply the ANFT Standard Sequence in order","Design and improvise an invitation","Use pace, silence and voice as guiding tools"],
        keys: ["The Standard Sequence","Invitations","Pleasures of Presence","Pace & silence"],
        practice: "Write three invitations, then cut each one to a single sentence." },
      { n: 5, slug: "session-design", title: "Session Design and Group Management",
        tagline: "Place, safety and people.", minutes: 60,
        blurb: "The recce and risk assessment, a two-hour session skeleton, managing group dynamics and sharing circles, adapting for anxiety, burnout, grief, corporate groups, children and older adults — and handling emotional openings ethically.",
        outcomes: ["Assess and choose a venue for safety and accessibility","Build a timed session plan and manage group dynamics","Adapt for specific groups and needs","Handle difficult moments ethically and decide on referral"],
        keys: ["The recce","Session skeleton","Sharing circles","Special groups"],
        practice: "Do a real recce of one local site and write the risk assessment." },
      { n: 6, slug: "professional-practice", title: "Professional Practice",
        tagline: "Ethics, measurement and career.", minutes: 60,
        blurb: "Building a sustainable practice, tracking participant change with validated tools, an ethical framework covering scope, privacy, consent and self-care, and the final project against the certification criteria.",
        outcomes: ["Design a sustainable, ethical practice in your own context","Track participant progress with validated measures","Adopt a framework for scope, privacy, consent and self-care","Prepare a final project and personal development plan"],
        keys: ["Value proposition","Validated measures","Code of ethics","Final project"],
        practice: "Write your one-sentence value proposition: to whom, what value, how." }
    ]
  }
];

/* The portal currently tracks the first available course. */
window.MINDIFY_COURSE = window.MINDIFY_COURSES[0];

window.MINDIFY_TESTIMONIALS = [
  {
    quote:
      "I'd covered attachment three times at university and never once seen it applied. This was the first time the theory turned into something I could actually do.",
    name: "Hannah R.", role: "MSc Psychology student, Manchester", trQuote: "Üniversitede bağlanmayı üç kez gördüm ve bir kez bile uygulandığını görmedim. Teorinin gerçekten yapabileceğim bir şeye dönüştüğü ilk seferdi.", trRole: "Psikoloji yüksek lisans öğrencisi, Manchester", initials: "HR"
  },
  {
    quote:
      "The iceberg exercise undid fifteen years of ‘what's wrong with this child’ thinking in about forty minutes. I've since run it with my whole foster carer group.",
    name: "Delia O.", role: "Foster carer & support group lead", trQuote: "Buzdağı çalışması, on beş yıllık ‘bu çocuğun nesi var’ düşüncesini kırk dakikada çözdü. O günden beri tüm koruyucu aile grubumla yapıyorum.", trRole: "Koruyucu aile ve destek grubu lideri", initials: "DO"
  },
  {
    quote:
      "As a SENCO I've sat through a lot of training. This is the first that gave staff a shared language — ‘regulate, relate, reason’ is now said out loud in our corridors.",
    name: "Michael T.", role: "SENCO, primary school", trQuote: "Rehber öğretmen olarak çok eğitim gördüm. Ekibe ortak bir dil veren ilki bu — ‘düzenle, bağ kur, akıl yürüt’ artık koridorlarımızda yüksek sesle söyleniyor.", trRole: "Rehber öğretmen, ilkokul", initials: "MT"
  },
  {
    quote:
      "It's taught like a seminar, not a webinar. You get told where the evidence is contested instead of a tidy story that falls apart when you look it up.",
    name: "Priya S.", role: "Assistant psychologist", trQuote: "Bir slayt gösterisi gibi değil, seminer gibi anlatılıyor. Kaynağa baktığınızda dağılan düzgün bir hikâye yerine kanıtın nerede tartışmalı olduğu söyleniyor.", trRole: "Asistan psikolog", initials: "PS"
  },
  {
    quote:
      "Self-paced was the only way this was ever going to happen for me. I did most of it at 10pm with a cup of tea, ten minutes at a time.",
    name: "Jo A.", role: "Kinship carer", trQuote: "Kendi hızımda olması bunun benim için gerçekleşmesinin tek yoluydu. Büyük kısmını gece onda, bir çay eşliğinde, onar dakikada yaptım.", trRole: "Akraba bakım veren", initials: "JA"
  },
  {
    quote:
      "I manage a team of eleven and came in sceptical. Left with a much better sense of why my feedback kept bouncing off certain people.",
    name: "Ellie W.", role: "Operations manager, Bristol", trQuote: "On bir kişilik bir ekip yönetiyorum ve şüpheyle geldim. Geri bildirimimin neden bazı insanlardan geri sektiğini çok daha iyi anlayarak ayrıldım.", trRole: "Operasyon müdürü, Bristol", initials: "EW"
  }
];
