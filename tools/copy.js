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
    blurb: "Psychology, taught properly.",
    learn: "Learn", allCourses: "All courses", brand: "Brand", logoGuide: "Logo guide (PDF)", studentLogin: "Student login",
    company: "Company", aboutUs: "About Mindify", approach: "Our approach", contactUs: "Contact us",
    legal: "Legal", faqs: "FAQs", privacy: "Privacy", terms: "Terms",
    skip: "Skip to content"
  },

  home: {
    title: "Psychology courses, taught by an academic",
    desc: "Mindify is a self-paced psychology school led by a UK academic psychologist. Rigorous courses in applied psychology, open to anyone who'll do the reading.",
    eyebrow: "Simplify. Mindify. Qualify.",
    h1: "University-level professional development,<br>on your own schedule.",
    lede: "Self-paced courses, developed by practising UK academics. Accredited, practical and useful.",
    ctaCourses: "Browse our courses", ctaAbout: "What makes it different",
    note: "Start today, finish whenever you can · certification on completion",
    allH2: "All courses are",
    allItems: ["self-paced", "certified on completion", "quality-checked by accrediting bodies"],
    allNote: "On completion you will receive a Mindify UK certificate detailing the contents of your course, in addition to certificates from Continuing Professional Development UK (CPDUK) and International Practitioners of Holistic Medicine (IPHM).",
    howEyebrow: "How and why, Mindify?", howH2: "Join our virtual classrooms and leave with practical skills",
    howLede: "Understanding people is not a skill you acquire once and for all. Our courses are developed by distinguished, practising UK academics, blending academic rigour with practical reality.",
    howBullets: ["Master the content of your course", "Gain an accredited CPD certificate", "Apply it in the real world"],
    catEyebrow: "The catalogue", catH2: "Courses & Modules",
    catLede: "Attachment and developmental practice, psychedelic science, breathwork facilitation, nature-based wellbeing. Each is self-contained, self-paced, and ends with a dated certificate.",
    catCta: "See all courses",
    boxes: [
      ["Developed by UK academics and experts in the field",
        "Each course is designed by UK academics such as lecturers, professors and experienced professionals in education. All course content is based on empirical evidence in the field, to familiarise you with up-to-date research on the topic."],
      ["Open to anyone",
        "Our courses are for anyone. Whether you are a psychology student, a trainee or qualified counsellor, or any professional seeking to understand and promote wellbeing, our courses are for you."],
      ["Applicable to the real world",
        "All courses are designed with the real world in mind. You will develop practical skills to apply in real situations."],
      ["Built for the long run",
        "After creating an account, your access will never expire. Course content is regularly revised to reflect the most recent changes in the field. Learning here is a habit, not a purchase."],
      ["Built for real schedules",
        "Ten minutes at 10pm counts. Progress saves automatically, so you can stop mid-module and pick it up next week without losing your place."],
      ["Gain a recognised UK certificate",
        "Sign up, work through and complete your course to download a fully accredited CPD certificate that enhances both your CV and your practical skills."]
    ],
    tEyebrow: "From our students", tH2: "What people say afterwards",
    ctaEyebrow: "Start when you're ready", ctaH2: "Create an account, take your time",
    ctaLede: "Work through a course at whatever pace your life allows, and download your certificate when you're done. Nothing expires.",
    ctaPrimary: "Create your account", ctaSecondary: "Talk to us first"
  },

  courses: {
    title: "Courses", desc: "Self-paced psychology courses from Mindify.",
    eyebrow: "Courses", h1: "All courses",
    lede: "Every course is self-contained and self-paced, ends with a dated certificate, and never expires. Start with any of them — there's no required order.",
    ctaAccount: "Create your account", ctaCatalogue: "See the catalogue",
    availEyebrow: "Available now", availH2: "Current courses",
    soonEyebrow: "In development", soonH2: "Coming next",
    soonLede: "Outlines are published early so you can tell us what's missing before they're written.",
    howEyebrow: "How it works", howH2: "Enrol, work through it, collect your certificate",
    howP: "No live sessions to attend, no cohort to keep up with, no written assignments. You get the whole course the moment you enrol.",
    steps: [
      ["Create an account in thirty seconds", ""],
      ["Work through the modules", ""],
      ["Complete tasks and reflect", ""],
      ["Download your certificate", ""]
    ],
    stepsNote: "On completion you will receive a Mindify UK certificate detailing the contents of your course, in addition to certificates from Continuing Professional Development UK (CPDUK) and International Practitioners of Holistic Medicine (IPHM).",
    modules: "modules", topics: "topics", hours: "hours",
    availableNow: "Available now", inDevelopment: "In development", comingSoon: "Coming soon",
    viewCourse: "View course", noticeShort: "Educational content only · not a recommendation of personal use"
  },

  course: {
    title: "Course", desc: "Course detail at Mindify.",
    back: "← All courses", jump: "See the modules",
    enrol: "Enrol — create your account", dashboard: "Go to my dashboard",
    whyEyebrow: "Why this course exists", whyH2: "The gap it fills",
    outcomesEyebrow: "What you'll be able to do", outcomesH2: "Learning outcomes",
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
    eyebrow: "About Mindify", h1: "We teach the thinking and the skills.",
    lede: "Mindify is a boutique UK-based enterprise for applied psychology with a global reach. Behind the scenes at Mindify is a professional team of UK academics, including counsellors, psychologists and academic leaders, who have decades of experience teaching and supervising students and other professionals.",
    body: [
      "We believe that academic learning and plain language are not opposites. The courses we promote are academically rigorous but clear enough for someone studying the material for the first time.",
      "That makes them useful to more people than you might expect. A psychology student, an assistant psychologist, a foster carer, a SENCO, someone managing a team who keeps wondering why their feedback bounces off. The material doesn't change for each of them. It doesn't need to."
    ],
    approachEyebrow: "Our approach", approachH2: "Four principles we won't compromise on",
    principles: [
      ["Sources, kept", "Named researchers, real studies, and an honest note when something is contested or failed to replicate. A tidy story that collapses when someone looks it up is worse than no story."],
      ["Rigour and plain language are not opposites", "Jargon is often a way of avoiding a claim. We'd rather make the claim and defend it in words anyone can follow."],
      ["Theory has to survive contact", "We teach models for use, not for recall. Where a module can offer something concrete to try, it does. Where the material is more conceptual, it still closes by asking what it would change in your practice."],
      ["No shame in the room", "Under pressure most of us default to control — as parents, as practitioners, as managers. That's human, not a failing, and nothing here is framed as a verdict on you."]
    ],
    whoEyebrow: "Who studies here", whoH2: "A virtual classroom for anyone",
    whoP: "Our courses are designed for people from all walks of life.",
    who: [
      ["Psychology students", "Undergraduate and postgraduate students who want application and depth their syllabus hasn't room for. Completing our courses will enhance your understanding of the field and develop your CV to stand out from the crowd when looking for future opportunities."],
      ["Practitioners, carers, parents and school staff", "Assistant psychologists, family support workers, SENCOs, TAs, foster and kinship carers, adopters. Completing our courses will help you learn specific skills to apply to your daily life — whether personal or professional."],
      ["The simply curious", "No prior training is required to complete our courses. Plenty of people arrive for one course and stay for their passion for psychology, counselling, and personal and professional development."]
    ],
    quote: "“Academic learning and plain language are not opposites.”", quoteSub: "That's the whole editorial policy.",
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
    sideAccP: "Tell us what you need and we will try to meet it. Transcripts and extended access are available on request, at no extra cost. If anything about the format doesn't work for you, or you are unsure whether a course fits, just ask — we would rather adjust than have you struggle through.",
    faqEyebrow: "FAQs", faqH2: "Questions we get a lot",
    faqs: [
      ["I'm a psychology student. Does this count for anything?", "Not as academic credit — we're not a degree-awarding body and won't pretend otherwise. What it does give you is a dated certificate and applied material that reads well in a placement application or an assistant psychologist interview, because it shows you've gone past the syllabus voluntarily."],
      ["Do I need a psychology background?", "Depends on the course, and each one says so under its title. Introductory courses assume nothing. Intermediate ones assume you're comfortable with the basic vocabulary — roughly first-year undergraduate level."],
      ["How long does a course take?", "Between six and sixteen hours depending on the course. Most people spread it over six to ten weeks, doing a module a week with the practice in between. No deadline, no expiry."],
      ["Is there a certificate?", "Yes — mark every module complete and a dated PDF unlocks in your dashboard. Widely used for CPD logs, supervision records, placement portfolios and fostering panel evidence. It is not a regulated professional qualification."],
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
      ["What the certificate is — and isn't", "The certificate confirms that you completed the Mindify course material. Our courses are accredited by Continuing Professional Development UK (CPDUK) and the International Practitioners of Holistic Medicine (IPHM); on completion you receive certificates from both bodies in addition to your Mindify UK certificate. These are professional CPD accreditations. They are <strong>not</strong> a regulated qualification or a licence to practise, and we never present them as one."],
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
    blurb: "Psikoloji, hakkı verilerek anlatıldığında.",
    learn: "Öğren", allCourses: "Tüm kurslar", brand: "Marka", logoGuide: "Logo kılavuzu (PDF)", studentLogin: "Öğrenci girişi",
    company: "Kurum", aboutUs: "Mindify hakkında", approach: "Yaklaşımımız", contactUs: "İletişim",
    legal: "Yasal", faqs: "SSS", privacy: "Gizlilik", terms: "Koşullar",
    skip: "İçeriğe geç"
  },

  home: {
    title: "Bir akademisyenden psikoloji kursları",
    desc: "Mindify, İngiltere'de görev yapan bir akademisyen psikolog tarafından yürütülen, kendi hızınızda ilerlediğiniz bir uygulamalı psikoloji okuludur.",
    eyebrow: "Simplify. Mindify. Qualify.",
    h1: "Üniversite düzeyinde mesleki gelişim,<br>kendi programınıza göre.",
    lede: "İngiltere'de halen ders veren akademisyenler tarafından hazırlanan, kendi hızınızda ilerlediğiniz kurslar. Akredite, uygulanabilir ve işe yarar.",
    ctaCourses: "Kurslarımıza göz atın", ctaAbout: "Farkı ne?",
    note: "Bugün başlayın, ne zaman bitirebilirseniz bitirin · tamamlandığında sertifikasyon",
    allH2: "Bütün kurslarımız",
    allItems: ["kendi hızınızda ilerliyor", "tamamlandığında sertifikalı", "akreditasyon kurumlarınca kalite denetiminden geçmiş"],
    allNote: "Kursu tamamladığınızda, kursunuzun içeriğini ayrıntılandıran bir Mindify UK sertifikasının yanı sıra Continuing Professional Development UK (CPDUK) ve International Practitioners of Holistic Medicine (IPHM) sertifikalarını da alırsınız.",
    howEyebrow: "Nasıl ve neden Mindify?", howH2: "Sanal sınıflarımıza katılın, uygulanabilir becerilerle ayrılın",
    howLede: "İnsanı anlamak bir kez edinilip biten bir beceri değil. Kurslarımız, İngiltere'de halen ders veren saygın akademisyenler tarafından, akademik titizlikle pratik gerçekliği harmanlayarak hazırlanıyor.",
    howBullets: ["Kursunuzun içeriğine hâkim olun", "Akredite bir CPD sertifikası kazanın", "Gerçek hayatta uygulayın"],
    catEyebrow: "Katalog", catH2: "Kurslar ve Modüller",
    catLede: "Bağlanma ve gelişimsel uygulama, psychedelic bilimi, nefes çalışması eğitmenliği, doğa temelli iyi oluş. Her kurs kendi içinde bütün, kendi hızınızda ve tarihli bir sertifikayla bitiyor.",
    catCta: "Tüm kursları gör",
    boxes: [
      ["İngiltere akademisyenleri ve alan uzmanları tarafından hazırlandı",
        "Her kurs, İngiltere'den öğretim görevlileri, profesörler ve eğitimde deneyimli profesyoneller tarafından tasarlanıyor. Bütün kurs içeriği alandaki ampirik kanıta dayanıyor; böylece konudaki güncel araştırmayla tanışıyorsunuz."],
      ["Herkese açık",
        "Kurslarımız herkes için. İster psikoloji öğrencisi olun, ister danışman adayı ya da diplomalı danışman, ister iyi oluşu anlamak ve desteklemek isteyen herhangi bir profesyonel — kurslarımız size göre."],
      ["Gerçek hayatta uygulanabilir",
        "Bütün kurslar gerçek hayat düşünülerek tasarlandı. Gerçek durumlarda uygulayacağınız pratik beceriler geliştireceksiniz."],
      ["Uzun vade için kuruldu",
        "Hesabınızı oluşturduktan sonra erişiminizin süresi hiç dolmuyor. Kurs içeriği, alandaki en güncel değişiklikleri yansıtacak şekilde düzenli olarak gözden geçiriliyor. Buradaki öğrenme bir satın alma değil, bir alışkanlık."],
      ["Gerçek programlara göre",
        "Gece 10'da on dakika da sayılır. İlerleme kendiliğinden kaydediliyor; modülün ortasında bırakıp haftaya kaldığınız yerden devam edebilirsiniz."],
      ["Tanınan bir UK sertifikası kazanın",
        "Kaydolun, çalışın ve kursunuzu tamamlayarak hem CV'nizi hem pratik becerilerinizi güçlendiren, tam akredite bir CPD sertifikası indirin."]
    ],
    tEyebrow: "Öğrencilerimizden", tH2: "Sonrasında ne söylüyorlar",
    ctaEyebrow: "Hazır olduğunuzda", ctaH2: "Hesabınızı açın, acele etmeyin",
    ctaLede: "Kursu hayatınızın izin verdiği hızda ilerletin, bitirdiğinizde sertifikanızı indirin. Hiçbir şeyin süresi dolmuyor.",
    ctaPrimary: "Hesap oluştur", ctaSecondary: "Önce konuşalım"
  },

  courses: {
    title: "Kurslar", desc: "Mindify'ın kendi hızınızda ilerlediğiniz psikoloji kursları.",
    eyebrow: "Kurslar", h1: "Tüm kurslar",
    lede: "Her kurs kendi içinde bütün, kendi hızınızda ilerliyor, tarihli bir sertifikayla bitiyor ve süresi hiç dolmuyor. Hangisinden başlarsanız başlayın — zorunlu bir sıra yok.",
    ctaAccount: "Hesap oluştur", ctaCatalogue: "Kataloğa git",
    availEyebrow: "Şu anda açık", availH2: "Mevcut kurslar",
    soonEyebrow: "Hazırlanıyor", soonH2: "Sırada ne var",
    soonLede: "Ders planlarını erken yayınlıyoruz ki yazılmadan önce eksiğini söyleyebilesiniz.",
    howEyebrow: "Nasıl işliyor", howH2: "Kaydolun, ilerleyin, sertifikanızı alın",
    howP: "Katılmanız gereken canlı ders yok, yetişmeniz gereken bir sınıf yok, yazılı ödev yok. Kaydolduğunuz anda kursun tamamı sizin.",
    steps: [
      ["Otuz saniyede hesap oluşturun", ""],
      ["Modülleri ilerletin", ""],
      ["Görevleri tamamlayın ve düşünün", ""],
      ["Sertifikanızı indirin", ""]
    ],
    stepsNote: "Kursu tamamladığınızda, kursunuzun içeriğini ayrıntılandıran bir Mindify UK sertifikasının yanı sıra Continuing Professional Development UK (CPDUK) ve International Practitioners of Holistic Medicine (IPHM) sertifikalarını da alırsınız.",
    modules: "modül", topics: "başlık", hours: "saat",
    availableNow: "Şu anda açık", inDevelopment: "Hazırlanıyor", comingSoon: "Yakında",
    viewCourse: "Kursa git", noticeShort: "Yalnızca eğitim amaçlıdır · kişisel kullanım önerisi değildir"
  },

  course: {
    title: "Kurs", desc: "Mindify kurs detayı.",
    back: "← Tüm kurslar", jump: "Modülleri gör",
    enrol: "Kaydol — hesap oluştur", dashboard: "Panelime git",
    whyEyebrow: "Bu kurs neden var", whyH2: "Doldurduğu boşluk",
    outcomesEyebrow: "Neler yapabileceksiniz", outcomesH2: "Öğrenim çıktıları",
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
    eyebrow: "Mindify hakkında", h1: "Hem düşünme biçimini hem becerileri öğretiyoruz.",
    lede: "Mindify, İngiltere merkezli, küresel erişimi olan butik bir uygulamalı psikoloji girişimi. Perde arkasında; danışmanlar, psikologlar ve akademik yöneticiler dahil olmak üzere, öğrencilere ve diğer profesyonellere ders verme ve süpervizyon konusunda onlarca yıllık deneyimi olan profesyonel bir İngiltere akademisyenleri ekibi var.",
    body: [
      "Akademik öğrenme ile sade dilin karşıt olmadığına inanıyoruz. Sunduğumuz kurslar akademik olarak titiz, ama konuyla ilk kez çalışan biri için yeterince açık.",
      "Bu da onları beklediğinizden çok daha fazla kişiye yarar hâle getiriyor. Bir psikoloji öğrencisi, bir asistan psikolog, bir koruyucu aile, bir okul rehber öğretmeni, ekibini yöneten ve geri bildiriminin neden geri sektiğini merak eden biri. İçerik her biri için değişmiyor. Değişmesi de gerekmiyor."
    ],
    approachEyebrow: "Yaklaşımımız", approachH2: "Taviz vermediğimiz dört ilke",
    principles: [
      ["Kaynaklar korunur", "İsmiyle araştırmacılar, gerçek çalışmalar ve bir şey tartışmalıysa ya da tekrarlanamadıysa dürüst bir not. Biri kaynağa baktığında çöken düzgün bir hikâye, hiç hikâye olmamasından kötüdür."],
      ["Titizlik ile sade dil karşıt değildir", "Jargon çoğu zaman bir iddiadan kaçınmanın yoludur. Biz iddiayı kurup, herkesin izleyebileceği kelimelerle savunmayı tercih ediyoruz."],
      ["Teori temasla sınanmalı", "Modelleri ezberlenmek için değil, kullanılmak için anlatıyoruz. Bir modül somut olarak denenecek bir şey sunabiliyorsa sunuyor. İçerik daha kavramsalsa yine de uygulamanızda neyi değiştireceğini sorarak kapanıyor."],
      ["Odada utanç yok", "Baskı altında çoğumuz kontrole kaçarız — ebeveyn olarak da, uygulayıcı olarak da, yönetici olarak da. Bu bir kusur değil, insanlık; buradaki hiçbir şey sizin hakkınızda bir hüküm olarak kurulmadı."]
    ],
    whoEyebrow: "Kimler öğrenim görüyor", whoH2: "Herkese açık bir sanal sınıf",
    whoP: "Kurslarımız hayatın her alanından insanlar için tasarlandı.",
    who: [
      ["Psikoloji öğrencileri", "Müfredatın yer ayıramadığı uygulama ve derinliği isteyen lisans ve yüksek lisans öğrencileri. Kurslarımızı tamamlamak alana dair anlayışınızı derinleştirir ve gelecekteki fırsatları ararken kalabalıktan sıyrılmanızı sağlayacak şekilde CV'nizi geliştirir."],
      ["Uygulayıcılar, bakım verenler, ebeveynler ve okul çalışanları", "Asistan psikologlar, aile destek çalışanları, rehber öğretmenler, koruyucu ve akraba bakım verenler, evlat edinenler. Kurslarımızı tamamlamak, kişisel ya da mesleki günlük hayatınızda uygulayacağınız belirli beceriler öğrenmenize yardımcı olur."],
      ["Sadece meraklı olanlar", "Kurslarımızı tamamlamak için ön eğitim gerekmiyor. Pek çok kişi tek bir kurs için geliyor, psikolojiye, danışmanlığa ve kişisel-mesleki gelişime duyduğu tutku için kalıyor."]
    ],
    quote: "“Akademik öğrenme ile sade dil karşıt değildir.”", quoteSub: "Tüm yayın politikamız bundan ibaret.",
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
    sideAccP: "Neye ihtiyacınız olduğunu söyleyin, karşılamaya çalışalım. Deşifre metinleri ve uzatılmış erişim, ek ücret olmadan talep üzerine sağlanıyor. Biçimle ilgili size uymayan bir şey varsa ya da bir kursun size uygun olup olmadığından emin değilseniz, çekinmeden sorun — zorlanmanızdansa uyarlamayı tercih ederiz.",
    faqEyebrow: "SSS", faqH2: "Sık gelen sorular",
    faqs: [
      ["Psikoloji öğrencisiyim. Bu bir işe yarıyor mu?", "Akademik kredi olarak hayır — diploma veren bir kurum değiliz ve öyleymiş gibi yapmayacağız. Size verdiği şey tarihli bir sertifika ve staj başvurusunda ya da asistan psikolog görüşmesinde iyi duran uygulamalı bir içerik; çünkü müfredatın ötesine kendi isteğinizle geçtiğinizi gösteriyor."],
      ["Psikoloji altyapısı gerekiyor mu?", "Kursa göre değişiyor ve her kurs bunu başlığının altında yazıyor. Giriş düzeyi kurslar hiçbir şey varsaymıyor. Orta düzey olanlar temel kavramlara aşina olduğunuzu varsayıyor — kabaca lisans birinci sınıf seviyesi."],
      ["Bir kurs ne kadar sürüyor?", "Kursa göre altı ila on altı saat arası. Çoğu kişi altı-on haftaya yayıyor; haftada bir modül, arasında pratik. Süre sınırı yok, erişim süresi dolmuyor."],
      ["Sertifika var mı?", "Evet — tüm modülleri tamamlandı olarak işaretlediğinizde panelinizde tarihli bir PDF açılıyor. Sürekli mesleki gelişim kayıtları, süpervizyon, staj dosyaları ve koruyucu aile komisyonu için yaygın olarak kullanılıyor. Düzenlenmiş bir mesleki yeterlilik değildir."],
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
      ["Sertifika nedir — ve ne değildir", "Sertifika, Mindify kurs içeriğini tamamladığınızı belgeler. Kurslarımız Continuing Professional Development UK (CPDUK) ve International Practitioners of Holistic Medicine (IPHM) tarafından akredite edilmiştir; kursu tamamladığınızda Mindify UK sertifikanızın yanı sıra her iki kurumdan da sertifika alırsınız. Bunlar mesleki CPD akreditasyonlarıdır. Düzenlenmiş bir yeterlilik ya da uygulama lisansı <strong>değildir</strong> ve bunu hiçbir zaman öyle sunmuyoruz."],
      ["Eğitim içeriği, klinik tavsiye değil", "Bu sitedeki her şey eğitim amaçlıdır. Terapi değildir, tanı aracı değildir ve nitelikli bir klinisyenin görüşünün yerine geçmez. Kontrole tabi maddeleri konu alan kurslar yalnızca bilgilendirme amaçlıdır; hiçbir temin yolu, doz ya da kullanım yöntemi anlatılmaz."],
      ["Hesabınız", "Hesap başına bir kişi. Giriş bilgilerinizi paylaşmayın — ilerleme ve sertifikalar adı geçen kişiye bağlıdır; paylaşılan bir hesap yanlış isimde sertifika üretir."],
      ["İade", "Bir kurs size uygun değilse, kayıttan sonraki on dört gün içinde bize yazın, açıklama gerekmeden tamamını iade edelim."],
      ["Telif", "Kurs içeriği © Mindify. Kendi uygulamanızda kullanmanızda bir sakınca yok. Eğitmen lisansı olmadan yeniden dağıtamaz, satamaz ya da ücretli eğitim olarak yürütemezsiniz — bunu konuşmaktan memnuniyet duyarız."]
    ]
  }
};

module.exports = { EN, TR, LANGS: [EN, TR] };
