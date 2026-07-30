/* ==========================================================================
   Every visible string on the site, in both languages.
   Page builders read from here — never hard-code copy in a template again.
   Module-level teaching content is deliberately NOT here: it lives in
   assets/js/data.js and is pending translation by the course author.
   ========================================================================== */

const EN = {
  code: "en", htmlLang: "en-GB", other: "tr", otherLabel: "Türkçe", selfLabel: "English",
  dir: "", // English lives at the site root

  nav: { home: "Home", about: "About", courses: "Courses", contact: "Contact Us", login: "Student Login", dashboard: "My dashboard" },

  footer: {
    blurb: "Self-paced psychology training from a UK academic — for students, practitioners, managers and parents.",
    learn: "Learn", allCourses: "All courses", brand: "Brand", logoGuide: "Logo guide (PDF)", studentLogin: "Student login",
    company: "Company", aboutUs: "About Mindify", approach: "Our approach", contactUs: "Contact us",
    legal: "Legal", faqs: "FAQs", privacy: "Privacy", terms: "Terms",
    madeFor: "Psychology, taught properly.", skip: "Skip to content"
  },

  home: {
    title: "Psychology courses, taught by an academic",
    desc: "Mindify is a self-paced psychology school led by a UK academic psychologist. Rigorous courses in applied psychology, open to anyone who'll do the reading.",
    eyebrow: "Psychology, taught properly",
    h1: "University-grade psychology,<br>on your own schedule.",
    lede: "Self-paced courses written and taught by a UK academic psychologist. Rigorous enough to hold up in a seminar, plain enough to be useful on an ordinary Tuesday.",
    ctaCourses: "Browse courses", ctaAbout: "What makes it different",
    note: "Start today, finish whenever you can · certificate on completion",
    stats: { courses: "COURSES", hours: "OF TEACHING", paced: "SELF-PACED", access: "ACCESS" },
    howEyebrow: "How we teach", howH2: "Learning that behaves like scholarship",
    howLede: "Understanding people is not a skill you acquire once. It's a practice you keep returning to, with better questions each time. Everything here is built to be held to an academic standard — and then carried out of the room.",
    catEyebrow: "The catalogue",
    catLede: "Attachment and developmental practice, psychedelic science, breathwork facilitation, nature-based wellbeing. Each is self-contained, self-paced, and ends with a dated certificate.",
    catCta: "See all courses",
    whyEyebrow: "Why Mindify", whyH2: "Taught like a seminar, not a slideshow",
    why: [
      ["Named sources, honestly used", "Bowlby and Ainsworth, Siegel, Perry, Hughes. Where a finding is contested or failed to replicate, we say so instead of flattening it into a slogan."],
      ["Taught by someone who marks essays", "Written and delivered by a practising UK academic psychologist, not a content team. The tone is a supervision session, not a sales funnel."],
      ["Live sessions alongside the courses", "Free monthly open webinars on a single idea, plus deeper ticketed sessions attached to individual modules — where you can ask the question a recording can't answer."],
      ["Built for real schedules", "Ten minutes at 10pm counts. Progress saves automatically, so you can stop mid-module and pick it up next week without losing your place."],
      ["Theory that survives contact", "Every module ends with one thing to try. Not a programme to implement — a single experiment, for a week. Messy attempts count."],
      ["Certificate on completion", "Finish a course and download a dated PDF in your name — useful for CPD logs, placement portfolios, supervision records and fostering panels."]
    ],
    liveEyebrow: "Live sessions", liveH2: "Some things only work in a room",
    liveLede: "Self-paced material is the right shape for theory. It's the wrong shape for the question you only think of afterwards.",
    liveBody: "So the courses are paired with live sessions: a <b>free monthly open webinar</b> on a single idea, taken to more depth than a self-paced module allows — and <b>ticketed sessions attached to individual modules</b>, where a small group works a case through with the tutor rather than watching one.",
    liveNote: "Schedule to be announced. Tell us which topic you'd come for and it goes first.",
    liveCta: "Suggest a topic",
    liveCard1Pill: "Free · monthly", liveCard1H: "Open webinar",
    liveCard1P: "One idea, one hour, open to anyone. Recorded and released afterwards, but the live Q&amp;A stays with the room.",
    liveCard2Pill: "Ticketed · per module", liveCard2H: "Module deep-dive",
    liveCard2P: "A small group, a real case, and the parts of a module that need discussion rather than delivery. Attached to the module you've just finished.",
    tEyebrow: "From our students", tH2: "What people say afterwards",
    ctaEyebrow: "Start when you're ready", ctaH2: "Create an account, take your time",
    ctaLede: "Work through a course at whatever pace your life allows, and download your certificate when you're done. Nothing expires.",
    ctaPrimary: "Create your account", ctaSecondary: "Talk to us first"
  },

  courses: {
    title: "Courses", desc: "Self-paced psychology courses from Mindify.",
    eyebrow: "Courses", h1: (n) => `${n} courses, all open`,
    lede: "Every course is self-contained and self-paced, ends with a dated certificate, and never expires. Start with any of them — there's no required order.",
    ctaAccount: "Create your account", ctaCatalogue: "See the catalogue",
    availEyebrow: "Available now", availH2: "Open for enrolment",
    soonEyebrow: "In development", soonH2: "Coming next",
    soonLede: "Outlines are published early so you can tell us what's missing before they're written.",
    howEyebrow: "How it works", howH2: "Enrol, work through it, download your certificate",
    howP: "No live sessions to attend, no cohort to keep up with. You get the whole course the moment you enrol.",
    steps: [
      ["Create a student account", "Email and a password. About thirty seconds."],
      ["Work through the modules", "In order is best — each leans on the last — but nothing is locked. Mark each complete as you go."],
      ["Try one small thing each week", "Every module ends with a single experiment. That's where the learning lands."],
      ["Download your certificate", "All modules complete unlocks a dated PDF in your dashboard."]
    ],
    modules: "modules", topics: "topics", hours: "hours",
    availableNow: "Available now", inDevelopment: "In development", comingSoon: "Coming soon",
    viewCourse: "View course", noticeShort: "Educational content only · not a recommendation of personal use"
  },

  course: {
    title: "Course", desc: "Course detail at Mindify.",
    back: "← All courses", jump: "See the modules",
    enrol: "Enrol — create your account", dashboard: "Go to my dashboard",
    whyEyebrow: "Why this course exists", whyH2: "The gap it fills",
    devH2: "Not written yet",
    devP: "This course is still being written. The outline below is published early so you can tell us what's missing — say the word and it moves up the queue.",
    curriculumEyebrow: "The curriculum",
    curriculum: "{n} modules, one thread",
    outlineH: "Planned outline",
    devCta: "Tell us to write this one", devFoot: "Want this sooner?",
    footEyebrow: "Ready?", foot: "Start tonight", ask: "Ask a question",
    noticeLead: "Please read first.",
    metaSelf: "self-paced", metaCert: "certificate on completion", metaDev: "in development",
    details: "Details"
  },

  module: {
    title: "Module", desc: "Module detail at Mindify.",
    backCourse: "← Back to the course", of: "of", min: "min",
    enrol: "Enrol to unlock this module", dashboard: "Back to my dashboard", full: "See the full curriculum",
    outcomesEyebrow: "By the end of this module", outcomesH2: "What you'll walk away with",
    keysEyebrow: "Inside", keysH2: "Key ideas covered", practiceH: "This week's practice",
    lockedEyebrow: "Lesson content", lockedH2: "Full lesson unlocks after enrolment",
    lockedP: "Teaching blocks, reflection prompts, the applied activity and the workbook page for this module live inside your student area.",
    lockedCta: "Create your free account"
  },

  about: {
    title: "About", desc: "Mindify is a self-paced psychology school led by a UK academic psychologist.",
    eyebrow: "About Mindify", h1: "We teach the thinking, not just the techniques.",
    lede: "Mindify is a small UK school for applied psychology, led by an academic psychologist who teaches and supervises at university level. The courses are the ones we wished existed: rigorous enough to survive a seminar, plain enough for someone meeting the material for the first time.",
    body: [
      "Psychology has an odd gap in the middle. University teaching is rigorous but rarely reaches application — you meet Bowlby and Ainsworth in a lecture, sit an exam, and never see the theory used on a real Tuesday afternoon. Meanwhile the applied market is full of confident, evidence-light training that has quietly dropped the sources.",
      "Mindify exists in that gap. Every course keeps the citations, says out loud where the evidence is contested, and then follows the theory all the way through to what you actually do and say.",
      "That makes it useful to more people than we first expected — an assistant psychologist, a foster carer, a SENCO, someone managing eleven people who keeps wondering why their feedback bounces off. The material doesn't change for each of them. It doesn't need to."
    ],
    approachEyebrow: "Our approach", approachH2: "Five principles we won't compromise on",
    principles: [
      ["Sources, kept", "Named researchers, real studies, and an honest note when something is contested or failed to replicate. A tidy story that collapses when someone looks it up is worse than no story."],
      ["Rigour and plain language are not opposites", "Jargon is often a way of avoiding a claim. We'd rather make the claim and defend it in words anyone can follow."],
      ["Theory has to survive contact", "Every module ends with one thing to try. If a model can't change what you do on an ordinary day, we haven't finished teaching it."],
      ["No shame in the room", "Under pressure most of us default to control — as parents, as practitioners, as managers. That's human, not a failing, and nothing here is framed as a verdict on you."],
      ["Honest about what a certificate is", "Our certificate confirms you completed the material. It's widely accepted for CPD logs, placement portfolios, supervision records and fostering panels. It is not a regulated professional qualification and we never imply otherwise."]
    ],
    whoEyebrow: "Who studies here", whoH2: "One room, four reasons to be in it",
    whoP: "The courses were written for a mixed audience and stay useful across all of it.",
    who: [
      ["Psychology students", "Undergraduate and postgraduate students who want application and depth their syllabus hasn't room for — and something concrete for a placement portfolio."],
      ["Practitioners, carers and school staff", "Assistant psychologists, family support workers, SENCOs, TAs, foster and kinship carers, adopters. Frequently used as evidence for supervision and panel."],
      ["Managers and team leads", "People responsible for other people who'd like the actual research on motivation, feedback and psychological safety rather than the airport-bookshop version."],
      ["Parents and the plainly curious", "No prior training assumed and nothing dumbed down. Plenty of people arrive for one course and stay for the subject."]
    ],
    quote: "“Rigour and plain language are not opposites.”", quoteSub: "That's the whole editorial policy.",
    quoteCta: "See the courses"
  },

  contact: {
    title: "Contact Us", desc: "Questions about a course, group bookings or accessibility? Get in touch with Mindify.",
    eyebrow: "Contact us", h1: "Ask us anything",
    lede: "Whether a course fits your situation, group and institutional bookings, accessibility needs, or a suggestion for what we should teach next — we read every message and reply within two working days.",
    formH: "Send a message", ok: "Thank you — your message has been sent. We'll reply within two working days.",
    fName: "Your name", fEmail: "Email address", fTopic: "What's this about?", fMsg: "Message",
    send: "Send message", privacyNote: "We'll only use your details to reply. Nothing is added to a mailing list.",
    topics: ["A question about a course", "Does this count for anything?", "Group, university or organisational booking",
             "Accessibility or learning support", "Suggest a course or a webinar topic", "Problem with my account", "Something else"],
    sideEmail: "Email", sideEmailP: "Replies within two working days.",
    sideOrg: "Universities and organisations",
    sideOrgP: "Departments, fostering agencies, schools and support services — we offer bulk enrolment and a facilitator pack for running modules as live seminars.",
    sideAcc: "Accessibility",
    sideAccP: "Tell us what you need. Transcripts, large-print workbooks and extended access are available on request, at no extra cost.",
    faqEyebrow: "FAQs", faqH2: "Questions we get a lot",
    faqs: [
      ["I'm a psychology student. Does this count for anything?", "Not as academic credit — we're not a degree-awarding body and won't pretend otherwise. What it does give you is a dated certificate and applied material that reads well in a placement application or an assistant psychologist interview, because it shows you've gone past the syllabus voluntarily."],
      ["Do I need a psychology background?", "Depends on the course, and each one says so under its title. Introductory courses assume nothing. Intermediate ones assume you're comfortable with the basic vocabulary — roughly first-year undergraduate level."],
      ["How long does a course take?", "Between six and sixteen hours depending on the course. Most people spread it over six to ten weeks, doing a module a week with the practice in between. No deadline, no expiry."],
      ["Is there a certificate?", "Yes — mark every module complete and a dated PDF unlocks in your dashboard. Widely used for CPD logs, supervision records, placement portfolios and fostering panel evidence. It is not a regulated professional qualification."],
      ["Are there any live sessions?", "Yes — a free monthly open webinar on a single idea, open to anyone, and ticketed deep-dive sessions attached to individual modules for people who want to work a case through in a small group. The schedule is still being set; tell us which topic you'd come for and it moves up."],
      ["Isn't therapeutic parenting just being permissive?", "No, and it's the most common misreading. Permissive parenting drops the boundary to avoid conflict, which leaves a child feeling loved but not safe. The therapeutic stance holds the boundary firmly and adds empathy alongside it. The limit doesn't move."],
      ["Can I run this as live training with a group?", "Each module is written as a facilitated session with check-ins, teaching blocks, paired reflection and an applied activity. Get in touch about the facilitator pack."]
    ]
  },

  auth: {
    title: "Student Login", desc: "Sign in to your Mindify student area.",
    eyebrow: "Student area", welcome: "Welcome back", welcomeSub: "Sign in to pick up where you left off.",
    createH: "Create your account", createSub: "Thirty seconds, and the whole catalogue is yours.",
    demo: "<b>Demo mode.</b> No server is connected, so accounts and progress are stored only in this browser.",
    tabIn: "Sign in", tabUp: "Create account",
    fName: "Full name", fNamePh: "As it should appear on your certificate",
    fEmail: "Email address", fPass: "Password", pwHint: "At least 8 characters.",
    forgot: "Forgotten your password?", notEnrolled: "Not enrolled yet?", seeCourses: "See the courses →",
    asideH: "Everything, in one account",
    asideP: "One login for every Mindify course — progress, certificates and access that never expires.",
    asideList: ["Track exactly which modules you've completed", "Pick up on any device, right where you left off",
                "Download a dated certificate for each course you finish", "Access never expires"],
    errFill: "Please fill in both fields.", errName: "Please tell us your name — it goes on your certificate.",
    errShort: "Password must be at least 8 characters.", errGeneric: "Something went wrong. Please try again.",
    confirm: "Almost there — check your inbox and click the confirmation link, then come back and sign in.",
    resetNeedEmail: "Enter your email address above first, then click again.",
    resetSent: "If that address has an account, a reset link is on its way.",
    working: "One moment…"
  },

  dash: {
    title: "My learning", desc: "Your Mindify dashboard.",
    eyebrow: "Student area", hello: "Hello,", browse: "Browse courses", signout: "Sign out",
    loading: "Loading…", yourCourses: "Your courses",
    coursesInProgress: "{n} courses in progress",
    progress: "{d} of {t} modules complete across {n} courses",
    demo: "<b>Demo mode.</b> Progress is saved in this browser only. Connect Supabase to make it follow you across devices.",
    complete: "complete", open: "Open", completeTag: "Complete",
    certReady: "Certificate ready", certTitle: "Certificate of Completion",
    certDone: "Congratulations — all {n} modules done.",
    certToGo: "{n} modules to go.",
    certBtn: "Download certificate",
    nextH: "Next practice", nextDone: "All done. The long game now: ‘good enough’, repeatedly, for years.",
    helpH: "Need a hand?", helpP: "Stuck on a module, or something not saving?", helpLink: "Send us a message",
    errSave: "Couldn't save that just now:", errLoad: "Couldn't load your progress:", errRetry: "Try reloading the page."
  },

  legal: {
    lastUpdated: "Last updated", draftNote: "This is a working draft for the Mindify pre-launch site and has not been reviewed by a solicitor.",
    privacyTitle: "Privacy", termsTitle: "Terms",
    privacy: [
      ["What we collect", "If you create a student account we store your name, email address and a record of which modules you have marked complete. If you send us a message through the contact form we store what you wrote, so that we can reply."],
      ["Why we collect it", "Your name appears on your certificate. Your email identifies your account and lets you reset your password. Module completion is what makes the progress tracker and certificate work. We do not use any of it for advertising and we do not sell it."],
      ["Where it lives", "Account and progress data is held by our authentication and database provider. Contact form submissions are handled by our hosting provider. Both process data on our behalf under a data processing agreement."],
      ["How long we keep it", "For as long as your account is open. Ask us to delete it and we will remove your account and progress within thirty days."],
      ["Your rights", "Under UK GDPR you can ask for a copy of your data, ask us to correct it, or ask us to delete it. Email hello@mindify.co.uk and we will respond within one month."],
      ["Cookies", "We use a single first-party storage entry to keep you signed in. We do not run advertising or third-party analytics cookies on this site."]
    ],
    terms: [
      ["What you are buying", "Access to self-paced online course material and a certificate of completion. Access does not expire."],
      ["What the certificate is — and isn't", "The certificate confirms that you completed the Mindify course material. It is commonly accepted as evidence for CPD logs, supervision records, placement portfolios and fostering panels. It is <strong>not</strong> a regulated professional qualification, a licence to practise, or accreditation by any statutory body, and we never present it as one."],
      ["Educational content, not clinical advice", "Everything on this site is educational. It is not therapy, not a diagnostic tool, and not a substitute for advice from a qualified clinician. Courses covering controlled substances are informational only and never describe sourcing, dosing or method of use."],
      ["Your account", "One person per account. Please don't share login details — progress and certificates are tied to a named individual, and a shared account produces a certificate in the wrong name."],
      ["Refunds", "If a course isn't right for you, email us within fourteen days of enrolling and we will refund you in full, no explanation needed."],
      ["Copyright", "Course material is © Mindify. You're welcome to use it in your own practice. You may not redistribute, resell or run it as paid training without a facilitator licence — which we're happy to talk about."]
    ]
  }
};

const TR = {
  code: "tr", htmlLang: "tr", other: "en", otherLabel: "English", selfLabel: "Türkçe",
  dir: "tr/",

  nav: { home: "Ana Sayfa", about: "Hakkımızda", courses: "Kurslar", contact: "İletişim", login: "Öğrenci Girişi", dashboard: "Panelim" },

  footer: {
    blurb: "Bir akademisyen psikolog tarafından hazırlanan, kendi hızınızda ilerlediğiniz psikoloji eğitimleri.",
    learn: "Öğren", allCourses: "Tüm kurslar", brand: "Marka", logoGuide: "Logo kılavuzu (PDF)", studentLogin: "Öğrenci girişi",
    company: "Kurum", aboutUs: "Mindify hakkında", approach: "Yaklaşımımız", contactUs: "İletişim",
    legal: "Yasal", faqs: "SSS", privacy: "Gizlilik", terms: "Koşullar",
    madeFor: "Psikoloji, hakkı verilerek anlatıldığında.", skip: "İçeriğe geç"
  },

  home: {
    title: "Bir akademisyenden psikoloji kursları",
    desc: "Mindify, İngiltere'de görev yapan bir akademisyen psikolog tarafından yürütülen, kendi hızınızda ilerlediğiniz bir uygulamalı psikoloji okuludur.",
    eyebrow: "Psikoloji, hakkı verilerek",
    h1: "Akademik derinlikte psikoloji,<br>kendi programınıza göre.",
    lede: "İngiltere'de ders veren bir akademisyen psikolog tarafından yazılan ve anlatılan, kendi hızınızda ilerlediğiniz kurslar. Bir seminerde savunulacak kadar sağlam, sıradan bir salı gününde işe yarayacak kadar açık.",
    ctaCourses: "Kursları incele", ctaAbout: "Farkı ne?",
    note: "Bugün başla, ne zaman bitirebilirsen bitir · tamamlama sertifikası",
    stats: { courses: "KURS", hours: "SAATLİK İÇERİK", paced: "KENDİ HIZINDA", access: "ERİŞİM" },
    howEyebrow: "Nasıl öğretiyoruz", howH2: "Bilimsel titizlikte bir öğrenme",
    howLede: "İnsanı anlamak bir kez edinilip biten bir beceri değil. Her seferinde daha iyi sorularla geri dönülen bir pratik. Buradaki her şey akademik ölçütlere dayanacak şekilde kuruldu — ve sonra odadan dışarı taşınacak şekilde.",
    catEyebrow: "Katalog",
    catLede: "Bağlanma ve gelişimsel uygulama, psychedelic bilimi, nefes çalışması eğitmenliği, doğa temelli iyi oluş. Her kurs kendi içinde bütün, kendi hızınızda ve tarihli bir sertifikayla bitiyor.",
    catCta: "Tüm kursları gör",
    whyEyebrow: "Neden Mindify", whyH2: "Slayt gösterisi değil, seminer",
    why: [
      ["Kaynaklar yerinde", "Bowlby ve Ainsworth, Siegel, Perry, Hughes. Bir bulgu tartışmalıysa ya da tekrarlanamadıysa, bunu bir slogana indirgemek yerine açıkça söylüyoruz."],
      ["Ödev okuyan biri tarafından anlatılıyor", "İçerik ekibi değil, halen ders veren bir akademisyen psikolog yazdı ve anlatıyor. Ton bir satış hunisinin değil, bir süpervizyon görüşmesinin tonu."],
      ["Kursların yanında canlı oturumlar", "Tek bir fikir üzerine her ay ücretsiz açık webinar, ayrıca belirli modüllere bağlı, biletli derinleşme oturumları — kaydın cevaplayamadığı soruyu sorabileceğiniz yer."],
      ["Gerçek programlara göre", "Gece 10'da on dakika da sayılır. İlerleme kendiliğinden kaydediliyor; modülün ortasında bırakıp haftaya kaldığınız yerden devam edebilirsiniz."],
      ["Temasla sınanan teori", "Her modül denenecek tek bir şeyle bitiyor. Uygulanacak bir program değil — bir hafta boyunca tek bir deney. Dağınık denemeler de sayılır."],
      ["Tamamlama sertifikası", "Kursu bitirdiğinizde adınıza tarihli bir PDF indiriyorsunuz — sürekli mesleki gelişim kayıtları, staj dosyaları ve süpervizyon için kullanılabilir."]
    ],
    liveEyebrow: "Canlı oturumlar", liveH2: "Bazı şeyler yalnızca odada olur",
    liveLede: "Kendi hızında ilerleyen içerik teori için doğru biçim. Sonradan aklınıza gelen soru için yanlış biçim.",
    liveBody: "Bu yüzden kurslar canlı oturumlarla eşleşiyor: tek bir fikri, kendi hızında bir modülün izin verdiğinden daha derine götüren <b>ayda bir ücretsiz açık webinar</b> — ve <b>belirli modüllere bağlı biletli oturumlar</b>; küçük bir grubun eğitmenle birlikte gerçek bir vakayı izlemek yerine birlikte çalıştığı yer.",
    liveNote: "Takvim yakında açıklanacak. Hangi konu için geleceğinizi söyleyin, sıraya o girsin.",
    liveCta: "Konu öner",
    liveCard1Pill: "Ücretsiz · aylık", liveCard1H: "Açık webinar",
    liveCard1P: "Tek fikir, bir saat, herkese açık. Sonrasında kaydı yayınlanıyor ama canlı soru-cevap odada kalıyor.",
    liveCard2Pill: "Biletli · modül başına", liveCard2H: "Modül derinleşmesi",
    liveCard2P: "Küçük bir grup, gerçek bir vaka ve modülün anlatılmaktan çok tartışılması gereken kısımları. Yeni bitirdiğiniz modüle bağlı.",
    tEyebrow: "Öğrencilerimizden", tH2: "Sonrasında ne söylüyorlar",
    ctaEyebrow: "Hazır olduğunuzda", ctaH2: "Hesabınızı açın, acele etmeyin",
    ctaLede: "Kursu hayatınızın izin verdiği hızda ilerletin, bitirdiğinizde sertifikanızı indirin. Hiçbir şeyin süresi dolmuyor.",
    ctaPrimary: "Hesap oluştur", ctaSecondary: "Önce konuşalım"
  },

  courses: {
    title: "Kurslar", desc: "Mindify'ın kendi hızınızda ilerlediğiniz psikoloji kursları.",
    eyebrow: "Kurslar", h1: (n) => `${n} kurs, hepsi açık`,
    lede: "Her kurs kendi içinde bütün, kendi hızınızda ilerliyor, tarihli bir sertifikayla bitiyor ve süresi hiç dolmuyor. Hangisinden başlarsanız başlayın — zorunlu bir sıra yok.",
    ctaAccount: "Hesap oluştur", ctaCatalogue: "Kataloğa git",
    availEyebrow: "Şu anda açık", availH2: "Kayıtlar açık",
    soonEyebrow: "Hazırlanıyor", soonH2: "Sırada ne var",
    soonLede: "Ders planlarını erken yayınlıyoruz ki yazılmadan önce eksiğini söyleyebilesiniz.",
    howEyebrow: "Nasıl işliyor", howH2: "Kaydol, ilerle, sertifikanı indir",
    howP: "Katılmanız gereken canlı ders yok, yetişmeniz gereken bir sınıf yok. Kaydolduğunuz anda kursun tamamı sizin.",
    steps: [
      ["Öğrenci hesabı oluştur", "E-posta ve bir şifre. Otuz saniye sürüyor."],
      ["Modülleri ilerlet", "Sırayla en iyisi — her biri bir öncekine yaslanıyor — ama hiçbiri kilitli değil. İlerledikçe tamamlandı olarak işaretleyin."],
      ["Her hafta küçük bir şey dene", "Her modül tek bir deneyle bitiyor. Öğrenmenin gerçekten yerleştiği yer orası."],
      ["Sertifikanı indir", "Tüm modüller tamamlandığında panelinizde tarihli bir PDF açılıyor."]
    ],
    modules: "modül", topics: "başlık", hours: "saat",
    availableNow: "Şu anda açık", inDevelopment: "Hazırlanıyor", comingSoon: "Yakında",
    viewCourse: "Kursa git", noticeShort: "Yalnızca eğitim amaçlıdır · kişisel kullanım önerisi değildir"
  },

  course: {
    title: "Kurs", desc: "Mindify kurs detayı.",
    back: "← Tüm kurslar", jump: "Modülleri gör",
    enrol: "Kaydol — hesap oluştur", dashboard: "Panelime git",
    whyEyebrow: "Bu kurs neden var", whyH2: "Doldurduğu boşluk",
    devH2: "Henüz yazılmadı",
    devP: "Bu kurs hâlâ yazılıyor. Aşağıdaki plan, yazılmadan önce eksiğini söyleyebilmeniz için erken yayınlandı — söyleyin, sırası öne alınsın.",
    curriculumEyebrow: "Müfredat",
    curriculum: "{n} modül, tek bir hat",
    outlineH: "Planlanan içerik",
    devCta: "Bunu yazmamızı iste", devFoot: "Daha erken ister misiniz?",
    footEyebrow: "Hazır mısınız?", foot: "Bu akşam başlayın", ask: "Soru sor",
    noticeLead: "Önce bunu okuyun.",
    metaSelf: "kendi hızınızda", metaCert: "tamamlama sertifikası", metaDev: "hazırlanıyor",
    details: "Detaylar"
  },

  module: {
    title: "Modül", desc: "Mindify modül detayı.",
    backCourse: "← Kursa dön", of: "/", min: "dk",
    enrol: "Bu modülü açmak için kaydol", dashboard: "Panelime dön", full: "Tüm müfredatı gör",
    outcomesEyebrow: "Bu modülün sonunda", outcomesH2: "Neyle ayrılacaksınız",
    keysEyebrow: "İçinde", keysH2: "Ele alınan temel fikirler", practiceH: "Bu haftanın pratiği",
    lockedEyebrow: "Ders içeriği", lockedH2: "Tam ders kayıt sonrası açılıyor",
    lockedP: "Bu modülün anlatım blokları, düşünme soruları, uygulama etkinliği ve çalışma kitabı sayfası öğrenci alanınızın içinde.",
    lockedCta: "Ücretsiz hesabınızı oluşturun"
  },

  about: {
    title: "Hakkımızda", desc: "Mindify, bir akademisyen psikolog tarafından yürütülen uygulamalı psikoloji okuludur.",
    eyebrow: "Mindify hakkında", h1: "Yalnızca teknikleri değil, düşünme biçimini öğretiyoruz.",
    lede: "Mindify, üniversite düzeyinde ders veren ve süpervizyon yapan bir akademisyen psikoloğun yürüttüğü küçük bir uygulamalı psikoloji okulu. Kurslar, keşke olsaydı dediğimiz kurslar: bir seminerde ayakta kalacak kadar sağlam, konuyla ilk kez karşılaşan biri için yeterince açık.",
    body: [
      "Psikolojinin ortasında tuhaf bir boşluk var. Üniversite eğitimi titiz ama uygulamaya nadiren iniyor — Bowlby ve Ainsworth'le bir derste tanışıyorsunuz, sınava giriyorsunuz ve o teorinin gerçek bir salı öğleden sonrasında kullanıldığını hiç görmüyorsunuz. Öte yandan uygulamalı piyasa, kaynaklarını sessizce düşürmüş, kendinden emin ama kanıtı zayıf eğitimlerle dolu.",
      "Mindify tam o boşlukta duruyor. Her kurs kaynakları koruyor, kanıtın tartışmalı olduğu yeri açıkça söylüyor ve sonra teoriyi ne yapacağınıza ve ne söyleyeceğinize kadar takip ediyor.",
      "Bu da onu başta beklediğimizden çok daha fazla kişiye yarar hâle getiriyor — bir asistan psikolog, bir koruyucu aile, bir okul rehber öğretmeni, on bir kişiyi yöneten ve geri bildiriminin neden geri sektiğini merak eden biri. İçerik her biri için değişmiyor. Değişmesi de gerekmiyor."
    ],
    approachEyebrow: "Yaklaşımımız", approachH2: "Taviz vermediğimiz beş ilke",
    principles: [
      ["Kaynaklar korunur", "İsmiyle araştırmacılar, gerçek çalışmalar ve bir şey tartışmalıysa ya da tekrarlanamadıysa dürüst bir not. Biri kaynağa baktığında çöken düzgün bir hikâye, hiç hikâye olmamasından kötüdür."],
      ["Titizlik ile sade dil karşıt değildir", "Jargon çoğu zaman bir iddiadan kaçınmanın yoludur. Biz iddiayı kurup, herkesin izleyebileceği kelimelerle savunmayı tercih ediyoruz."],
      ["Teori temasla sınanmalı", "Her modül denenecek tek bir şeyle bitiyor. Bir model sıradan bir günde ne yaptığınızı değiştiremiyorsa, onu anlatmayı bitirmemişiz demektir."],
      ["Odada utanç yok", "Baskı altında çoğumuz kontrole kaçarız — ebeveyn olarak da, uygulayıcı olarak da, yönetici olarak da. Bu bir kusur değil, insanlık; buradaki hiçbir şey sizin hakkınızda bir hüküm olarak kurulmadı."],
      ["Sertifikanın ne olduğu konusunda dürüstlük", "Sertifikamız içeriği tamamladığınızı belgeler. Sürekli mesleki gelişim kayıtları, staj dosyaları ve süpervizyon için yaygın olarak kabul edilir. Düzenlenmiş bir mesleki yeterlilik değildir ve öyleymiş gibi de sunmayız."]
    ],
    whoEyebrow: "Kimler öğrenim görüyor", whoH2: "Tek bir oda, orada olmak için dört sebep",
    whoP: "Kurslar karma bir kitle için yazıldı ve hepsinde işlevini koruyor.",
    who: [
      ["Psikoloji öğrencileri", "Müfredatın yer ayıramadığı uygulama ve derinliği isteyen lisans ve yüksek lisans öğrencileri — ve staj dosyasına koyacak somut bir şey."],
      ["Uygulayıcılar, bakım verenler ve okul çalışanları", "Asistan psikologlar, aile destek çalışanları, rehber öğretmenler, koruyucu ve akraba bakım verenler, evlat edinenler. Süpervizyon ve komisyon için kanıt olarak sıkça kullanılıyor."],
      ["Yöneticiler ve ekip liderleri", "Başkalarından sorumlu olan ve motivasyon, geri bildirim ve psikolojik güvenlik konusunda havalimanı kitapçısı sürümünü değil gerçek araştırmayı isteyen kişiler."],
      ["Ebeveynler ve meraklılar", "Ön eğitim varsayılmıyor, hiçbir şey de basitleştirilmiyor. Pek çok kişi tek bir kurs için geliyor, konu için kalıyor."]
    ],
    quote: "“Titizlik ile sade dil karşıt değildir.”", quoteSub: "Tüm yayın politikamız bundan ibaret.",
    quoteCta: "Kursları gör"
  },

  contact: {
    title: "İletişim", desc: "Kurslar, kurumsal kayıtlar veya erişilebilirlik hakkında Mindify'a ulaşın.",
    eyebrow: "İletişim", h1: "Ne isterseniz sorun",
    lede: "Bir kursun durumunuza uyup uymadığı, grup ve kurumsal kayıtlar, erişilebilirlik ihtiyaçları ya da sırada ne öğretmemiz gerektiğine dair bir öneri — her mesajı okuyoruz ve iki iş günü içinde yanıtlıyoruz.",
    formH: "Mesaj gönder", ok: "Teşekkürler — mesajınız iletildi. İki iş günü içinde yanıtlayacağız.",
    fName: "Adınız", fEmail: "E-posta adresi", fTopic: "Konu nedir?", fMsg: "Mesaj",
    send: "Mesajı gönder", privacyNote: "Bilgilerinizi yalnızca yanıt vermek için kullanıyoruz. Hiçbir listeye eklenmiyorsunuz.",
    topics: ["Bir kurs hakkında soru", "Bu bir işe yarıyor mu?", "Grup, üniversite veya kurumsal kayıt",
             "Erişilebilirlik veya öğrenme desteği", "Kurs ya da webinar konusu öner", "Hesabımla ilgili sorun", "Başka bir şey"],
    sideEmail: "E-posta", sideEmailP: "İki iş günü içinde yanıt.",
    sideOrg: "Üniversiteler ve kurumlar",
    sideOrgP: "Bölümler, koruyucu aile kurumları, okullar ve destek hizmetleri — toplu kayıt ve modülleri canlı seminer olarak yürütmek için eğitmen paketi sunuyoruz.",
    sideAcc: "Erişilebilirlik",
    sideAccP: "Neye ihtiyacınız olduğunu söyleyin. Deşifre metinleri, büyük puntolu çalışma kitapları ve uzatılmış erişim ek ücret olmadan sağlanıyor.",
    faqEyebrow: "SSS", faqH2: "Sık gelen sorular",
    faqs: [
      ["Psikoloji öğrencisiyim. Bu bir işe yarıyor mu?", "Akademik kredi olarak hayır — diploma veren bir kurum değiliz ve öyleymiş gibi yapmayacağız. Size verdiği şey tarihli bir sertifika ve staj başvurusunda ya da asistan psikolog görüşmesinde iyi duran uygulamalı bir içerik; çünkü müfredatın ötesine kendi isteğinizle geçtiğinizi gösteriyor."],
      ["Psikoloji altyapısı gerekiyor mu?", "Kursa göre değişiyor ve her kurs bunu başlığının altında yazıyor. Giriş düzeyi kurslar hiçbir şey varsaymıyor. Orta düzey olanlar temel kavramlara aşina olduğunuzu varsayıyor — kabaca lisans birinci sınıf seviyesi."],
      ["Bir kurs ne kadar sürüyor?", "Kursa göre altı ila on altı saat arası. Çoğu kişi altı-on haftaya yayıyor; haftada bir modül, arasında pratik. Süre sınırı yok, erişim süresi dolmuyor."],
      ["Sertifika var mı?", "Evet — tüm modülleri tamamlandı olarak işaretlediğinizde panelinizde tarihli bir PDF açılıyor. Sürekli mesleki gelişim kayıtları, süpervizyon, staj dosyaları ve koruyucu aile komisyonu için yaygın olarak kullanılıyor. Düzenlenmiş bir mesleki yeterlilik değildir."],
      ["Canlı oturum var mı?", "Evet — tek bir fikir üzerine herkese açık, ayda bir ücretsiz webinar; ve küçük bir grupta gerçek bir vaka üzerinde çalışmak isteyenler için belirli modüllere bağlı biletli derinleşme oturumları. Takvim hâlâ oluşuyor; hangi konu için geleceğinizi söyleyin, sırası öne alınsın."],
      ["Terapötik ebeveynlik sadece izin verici olmak değil mi?", "Hayır, ve bu en yaygın yanlış okuma. İzin verici ebeveynlik çatışmadan kaçınmak için sınırı düşürür; bu da çocuğu sevilmiş ama güvende hissetmemiş bırakır. Terapötik duruş sınırı sıkıca tutar ve yanına empatiyi ekler. Sınır yerinden oynamaz."],
      ["Bunu bir grupla canlı eğitim olarak yürütebilir miyim?", "Her modül; açılış turu, anlatım blokları, ikili paylaşım ve uygulama etkinliği olan kolaylaştırılmış bir oturum olarak yazıldı. Eğitmen paketi için bize yazın."]
    ]
  },

  auth: {
    title: "Öğrenci Girişi", desc: "Mindify öğrenci alanınıza giriş yapın.",
    eyebrow: "Öğrenci alanı", welcome: "Tekrar hoş geldiniz", welcomeSub: "Kaldığınız yerden devam etmek için giriş yapın.",
    createH: "Hesabınızı oluşturun", createSub: "Otuz saniye, ve tüm katalog sizin.",
    demo: "<b>Demo modu.</b> Bağlı bir sunucu yok; hesaplar ve ilerleme yalnızca bu tarayıcıda saklanıyor.",
    tabIn: "Giriş yap", tabUp: "Hesap oluştur",
    fName: "Ad soyad", fNamePh: "Sertifikanızda görünmesini istediğiniz şekilde",
    fEmail: "E-posta adresi", fPass: "Şifre", pwHint: "En az 8 karakter.",
    forgot: "Şifrenizi mi unuttunuz?", notEnrolled: "Henüz kayıtlı değil misiniz?", seeCourses: "Kursları görün →",
    asideH: "Her şey, tek bir hesapta",
    asideP: "Tüm Mindify kursları için tek giriş — ilerleme, sertifikalar ve süresi hiç dolmayan erişim.",
    asideList: ["Hangi modülleri tamamladığınızı tam olarak takip edin", "Hangi cihazda olursanız olun kaldığınız yerden devam edin",
                "Bitirdiğiniz her kurs için tarihli sertifika indirin", "Erişim süresi hiç dolmuyor"],
    errFill: "Lütfen iki alanı da doldurun.", errName: "Lütfen adınızı yazın — sertifikanıza o yazılacak.",
    errShort: "Şifre en az 8 karakter olmalı.", errGeneric: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
    confirm: "Neredeyse tamam — gelen kutunuzu kontrol edip onay bağlantısına tıklayın, sonra dönüp giriş yapın.",
    resetNeedEmail: "Önce yukarıya e-posta adresinizi yazın, sonra tekrar tıklayın.",
    resetSent: "Bu adrese ait bir hesap varsa, sıfırlama bağlantısı yola çıktı.",
    working: "Bir saniye…"
  },

  dash: {
    title: "Öğrenmelerim", desc: "Mindify öğrenci paneliniz.",
    eyebrow: "Öğrenci alanı", hello: "Merhaba,", browse: "Kursları incele", signout: "Çıkış yap",
    loading: "Yükleniyor…", yourCourses: "Kurslarınız",
    coursesInProgress: "{n} kurs devam ediyor",
    progress: "{n} kursta {t} modülün {d} tanesi tamamlandı",
    demo: "<b>Demo modu.</b> İlerleme yalnızca bu tarayıcıda saklanıyor. Cihazlar arası taşınması için Supabase'i bağlayın.",
    complete: "tamamlandı", open: "Aç", completeTag: "Tamamlandı",
    certReady: "Sertifikanız hazır", certTitle: "Tamamlama Sertifikası",
    certDone: "Tebrikler — {n} modülün hepsi tamam.",
    certToGo: "{n} modül kaldı.",
    certBtn: "Sertifikayı indir",
    nextH: "Sıradaki pratik", nextDone: "Hepsi tamam. Bundan sonrası uzun oyun: ‘yeterince iyi’, tekrar tekrar, yıllarca.",
    helpH: "Yardım gerekiyor mu?", helpP: "Bir modülde takıldınız ya da bir şey kaydedilmiyor mu?", helpLink: "Bize yazın",
    errSave: "Bu şu anda kaydedilemedi:", errLoad: "İlerlemeniz yüklenemedi:", errRetry: "Sayfayı yenilemeyi deneyin."
  },

  legal: {
    lastUpdated: "Son güncelleme", draftNote: "Bu, Mindify lansman öncesi sitesi için hazırlanmış bir taslaktır ve bir hukukçu tarafından incelenmemiştir.",
    privacyTitle: "Gizlilik", termsTitle: "Koşullar",
    privacy: [
      ["Neleri topluyoruz", "Öğrenci hesabı oluşturursanız adınızı, e-posta adresinizi ve hangi modülleri tamamlandı olarak işaretlediğinizi saklıyoruz. İletişim formundan mesaj gönderirseniz, yanıt verebilmek için yazdıklarınızı saklıyoruz."],
      ["Neden topluyoruz", "Adınız sertifikanızda görünüyor. E-postanız hesabınızı tanımlıyor ve şifrenizi sıfırlamanızı sağlıyor. Modül tamamlama bilgisi ilerleme takibini ve sertifikayı çalışır kılan şey. Hiçbirini reklam için kullanmıyoruz ve satmıyoruz."],
      ["Nerede tutuluyor", "Hesap ve ilerleme verisi kimlik doğrulama ve veritabanı sağlayıcımızda tutuluyor. İletişim formu gönderimleri barındırma sağlayıcımız tarafından işleniyor. Her ikisi de bizim adımıza, bir veri işleme sözleşmesi kapsamında işlem yapıyor."],
      ["Ne kadar süreyle saklıyoruz", "Hesabınız açık kaldığı sürece. Silmemizi isterseniz hesabınızı ve ilerlemenizi otuz gün içinde kaldırıyoruz."],
      ["Haklarınız", "İngiltere GDPR kapsamında verilerinizin bir kopyasını isteyebilir, düzeltilmesini ya da silinmesini talep edebilirsiniz. hello@mindify.co.uk adresine yazın, bir ay içinde yanıt verelim."],
      ["Çerezler", "Oturumunuzu açık tutmak için tek bir birinci taraf depolama kaydı kullanıyoruz. Bu sitede reklam ya da üçüncü taraf analiz çerezi çalıştırmıyoruz."]
    ],
    terms: [
      ["Ne satın alıyorsunuz", "Kendi hızınızda ilerleyen çevrimiçi kurs içeriğine erişim ve bir tamamlama sertifikası. Erişimin süresi dolmuyor."],
      ["Sertifika nedir — ve ne değildir", "Sertifika, Mindify kurs içeriğini tamamladığınızı belgeler. Sürekli mesleki gelişim kayıtları, süpervizyon kayıtları, staj dosyaları ve koruyucu aile komisyonları için kanıt olarak yaygın biçimde kabul edilir. Düzenlenmiş bir mesleki yeterlilik, bir uygulama lisansı ya da herhangi bir resmî kurum tarafından verilmiş bir akreditasyon <strong>değildir</strong> ve bunu hiçbir zaman öyle sunmuyoruz."],
      ["Eğitim içeriği, klinik tavsiye değil", "Bu sitedeki her şey eğitim amaçlıdır. Terapi değildir, tanı aracı değildir ve nitelikli bir klinisyenin görüşünün yerine geçmez. Kontrole tabi maddeleri konu alan kurslar yalnızca bilgilendirme amaçlıdır; hiçbir temin yolu, doz ya da kullanım yöntemi anlatılmaz."],
      ["Hesabınız", "Hesap başına bir kişi. Giriş bilgilerinizi paylaşmayın — ilerleme ve sertifikalar adı geçen kişiye bağlıdır; paylaşılan bir hesap yanlış isimde sertifika üretir."],
      ["İade", "Bir kurs size uygun değilse, kayıttan sonraki on dört gün içinde bize yazın, açıklama gerekmeden tamamını iade edelim."],
      ["Telif", "Kurs içeriği © Mindify. Kendi uygulamanızda kullanmanızda bir sakınca yok. Eğitmen lisansı olmadan yeniden dağıtamaz, satamaz ya da ücretli eğitim olarak yürütemezsiniz — bunu konuşmaktan memnuniyet duyarız."]
    ]
  }
};

module.exports = { EN, TR, LANGS: [EN, TR] };
