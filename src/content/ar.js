import { LINKS } from "../constants";

export const ar = {
  dir: "rtl",
  langSwitchLabel: "English",

  nav: {
    links: [
      { id: "now", label: "الآن" },
      { id: "experience", label: "الخبرات" },
      { id: "projects", label: "المشاريع" },
      { id: "skills", label: "التقنيات" },
      { id: "contact", label: "تواصل" },
    ],
    resume: "السيرة الذاتية",
    resumeOptions: [
      { id: "fullstack", label: "Full-Stack · Node و React", file: LINKS.cvFullStack },
      { id: "dotnet", label: "مطوّر .NET · ASP.NET Core", file: LINKS.cvDotNet },
    ],
    menu: "القائمة",
    close: "إغلاق",
  },

  hero: {
    status: "مطوّر Full-Stack في the change cue",
    name: "أسامة عثمان",
    role: "مهندس برمجيات Full-Stack",
    headline: "أبني برمجيات حقيقية من البداية للنهاية: قاعدة البيانات، الـ API، الواجهة، والنشر.",
    description:
      "‏.NET و Node.js في الخلفية، React في الواجهة، والذكاء الاصطناعي حيث يضيف قيمة فعلية. مقيم في الرياض، وأعمل حالياً على منصة لتقييم نضج تجربة العملاء مدعومة بالذكاء الاصطناعي في the change cue، وعلى «مركز»: نظام ERP عربي أولاً لسوق الخليج.",
    location: "الرياض، المملكة العربية السعودية",
    workStatus: "تأشيرة عمل سعودية · إقامة قابلة للنقل",
    ctaPrimary: "تواصل معي",
    ctaSecondary: "شاهد المشاريع",
    stats: [
      { value: "+700", label: "مساهمة على GitHub خلال السنة الماضية" },
      { value: "5", label: "منتجات بنيتها من البداية للنهاية" },
      { value: "ذهبية", label: "شهادة AI Showcase · هاكاثون Kanz للذكاء الاصطناعي 2026" },
      { value: "2", label: "بيئتا عمل إنتاجيتان: .NET و Node.js" },
    ],
  },

  now: {
    eyebrow: "الآن",
    title: "على ماذا أعمل حالياً",
    items: [
      {
        id: "changecue",
        kind: "مطوّر Full-Stack",
        org: "the change cue",
        text: "أبني منصة مصممة لتتوسع إلى آلاف تقييمات نضج تجربة العملاء: خلفية Node.js تنسّق مع خدمة ذكاء اصطناعي مستقلة بلغة Python.",
        tags: ["Node.js", "React", "Python AI", "AWS RDS"],
      },
      {
        id: "markaz",
        kind: "أبني",
        org: "مركز",
        text: "نظام محاسبة و ERP عربي أولاً للشركات في السعودية والخليج، بدفتر قيد مزدوج تضمن قاعدة البيانات نفسها سلامته.",
        tags: ["NestJS", "PostgreSQL", "React"],
      },
    ],
  },

  experience: {
    eyebrow: "الخبرات",
    title: "أين عملت وماذا سلّمت",
    present: "حالياً",
    items: [
      {
        id: "changecue",
        current: true,
        company: "the change cue",
        role: "مطوّر Full-Stack",
        type: "تدريب مدفوع · عن بُعد",
        period: "سبتمبر 2026 – حالياً",
        bullets: [
          "تصميم نظام قادر على التوسع لآلاف تقييمات نضج تجربة العملاء، بتنسيق خلفية Node.js مع خدمة ذكاء اصطناعي مستقلة بـ Python.",
          "بناء REST endpoints باستخدام Node.js/Express وواجهات React فوقها، ثم ربطها واختبارها من البداية للنهاية.",
          "تصميم قواعد بيانات علائقية على AWS RDS بعلاقات many-to-many معقدة.",
          "ربط الخلفية بخدمات ذكاء اصطناعي خارجية، ونشر الخدمات وإدارتها باستخدام Docker و Redis والبنية السحابية.",
        ],
        tech: ["Node.js", "Express", "React", "Python", "AWS RDS", "Docker", "Redis"],
      },
      {
        id: "alfahad",
        company: "شركة الفهد القابضة",
        role: "متدرّب ERP — Microsoft Dynamics 365 F&O",
        type: "الرياض، السعودية",
        period: "أغسطس 2026 – سبتمبر 2026",
        bullets: [
          "تدريب منظّم على Microsoft Dynamics 365 Finance & Operations: الإعداد الأساسي والتطبيق.",
          "تعلّمت دورات العمل المالية والتشغيلية في مجموعة قابضة تضم شركات صناعية وعقارية وتجارية.",
        ],
        tech: ["Dynamics 365", "Finance & Operations", "ERP"],
      },
      {
        id: "hope",
        company: "The Hope International",
        role: "متدرّب تعلّم آلة",
        type: "تدريب · عن بُعد",
        period: "مايو 2026 – أغسطس 2026",
        bullets: [
          "أكملت برنامجاً من 60 ساعة في Python وتعلّم الآلة والذكاء الاصطناعي ضمن قسم تعلّم الآلة.",
          "اكتسبت خبرة عملية في استخدام Python لمعالجة البيانات وبناء نماذج تعلّم الآلة.",
        ],
        tech: ["Python", "Machine Learning", "AI"],
      },
      {
        id: "truetime",
        company: "True Time Solution",
        role: "مطوّر Full-Stack (تدريب)",
        type: "المطوّر الوحيد",
        period: "يونيو 2025 – ديسمبر 2025",
        bullets: [
          "بنيت منصة تجارة إلكترونية + ERP كاملة بمفردي: قاعدة البيانات والخلفية والواجهة.",
          "سلّمت أكثر من 40 REST endpoint باستخدام ASP.NET Core Web API ضمن معمارية N-Tier من 3 طبقات.",
          "صممت قاعدة SQL Server من 12 جدولاً مع EF Core و LINQ، واستخدام Repository Pattern و DI قلّل تكرار الاستعلامات بنحو 30%.",
          "أمّنت الـ API بـ JWT وصلاحيات حسب الدور لثلاثة أدوار، وبنيت واجهة React متجاوبة من 10 شاشات ونقلتها إلى Vite (بناء أسرع بنحو 40%).",
        ],
        tech: ["ASP.NET Core", "EF Core", "SQL Server", "React", "JWT"],
      },
      {
        id: "annajah",
        company: "جامعة النجاح الوطنية",
        role: "مطوّر Full-Stack — مشروع التخرج",
        type: "مشروع تخرج · نابلس",
        period: "فبراير 2025 – يونيو 2025",
        bullets: [
          "منصة تعليم إلكتروني مدعومة بالذكاء الاصطناعي لأربعة أدوار: إدارة الدورات والاختبارات ولوحات الطلاب.",
          "تصميم REST APIs باستخدام Node.js/Express فوق قاعدة MySQL من 23 جدولاً (Sequelize ORM).",
          "ربط OpenAI API لتوليد أسئلة الاختبارات من محتوى الدورة، مع تطبيق ويب React وتطبيق موبايل React Native.",
        ],
        tech: ["Node.js", "Express", "MySQL", "React Native", "OpenAI API"],
      },
    ],
  },

  projects: {
    eyebrow: "أعمال مختارة",
    title: "ما بنيته",
    subtitle: "منتجات، ومشاريع لعملاء، ومشروع هاكاثون — كل واحد منها امتلكته من قاعدة البيانات حتى النشر.",
    code: "الكود",
    live: "مباشر",
    flagshipLabel: "المشروع الرئيسي",
    flagship: {
      id: "markaz",
      status: "قيد التطوير النشط",
      title: "مركز",
      subtitle: "نظام ERP مبسّط لشركات السعودية والخليج",
      description:
        "منتج تجاري للمحاسبة وتخطيط الموارد، بالعربية والإنجليزية من اليوم الأول: دفتر الأستاذ العام، المخزون، المشتريات مع المطابقة الثلاثية، المبيعات، المدفوعات، تقارير أعمار الديون، وفواتير PDF. كل عميل يحصل على نسخة معزولة بالكامل تُشحن كحزمة Docker Compose واحدة.",
      highlights: [
        "دفتر قيد مزدوج تضمن قاعدة البيانات سلامته: triggers مؤجلة تفرض تساوي المدين والدائن عند الـ commit وترفض الترحيل في الفترات المقفلة.",
        "سجل تدقيق وقيود يومية غير قابلة للتعديل عبر دور Postgres مقيّد لا يملك صلاحية UPDATE أو DELETE.",
        "مصادقة JWT مع تدوير refresh tokens وكشف إعادة استخدامها، وصلاحيات مبنية على البيانات بمبدأ الرفض الافتراضي.",
        "عمّال BullMQ، ونمط Outbox، ومفاتيح idempotency، وسير موافقات قابل للإعداد.",
        "اختبارات property-based لسلامة الدفتر على Postgres حقيقي، و CI يشغّل lint و typecheck وحدود الوحدات والاختبارات وتدقيق الاعتماديات.",
      ],
      tech: ["NestJS", "TypeScript", "React", "PrimeReact", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Docker", "Turborepo"],
      links: { github: LINKS.repo("Markaz") },
    },
    items: [
      {
        id: "saudiplot",
        tagline: "Kanz AI Hackathon 2026 · شهادة ذهبية",
        title: "SaudiPlot AI",
        description:
          "يرفع مالك الأرض صك القطعة، ويجيب عن أسئلة موجّهة، ويحصل على تصور مبدئي لفيلا يتوافق مع اشتراطات البناء السعودية، مع عرض ثلاثي الأبعاد وخرائط ودفع عبر Stripe.",
        tech: ["React 19", "LangGraph", "FastAPI", "PostGIS", "Supabase", "MapLibre"],
        links: { live: "https://saudi-plot-frontend.vercel.app", github: LINKS.repo("Saudi-Plot-Frontend") },
      },
      {
        id: "dental",
        tagline: "مباشر · مبني لعيادة حقيقية",
        title: "نظام إدارة عيادة أسنان",
        description:
          "إدارة عيادتين لطبيب أسنان: المرضى، المواعيد، صور الأشعة والمستندات، مع تذكيرات تلقائية بالبريد.",
        tech: ["React", "Zustand", "Express", "PostgreSQL", "Cloudinary", "Resend"],
        links: { live: "https://dental-clinic-gray-nine.vercel.app", github: LINKS.repo("Dental_Clinic") },
      },
      {
        id: "ecommerce",
        tagline: "مشروع عميل · True Time Solution",
        title: "منصة تجارة إلكترونية و ERP",
        description:
          "كتالوج وطلبات ومخزون وسير عمل ERP حسب الدور، بنيتها بمفردي على خلفية .NET من 3 طبقات: أكثر من 40 endpoint، و12 جدولاً، و3 أدوار.",
        tech: ["ASP.NET Core", "EF Core", "SQL Server", "React", "JWT"],
        links: {},
      },
      {
        id: "elearning",
        tagline: "مشروع التخرج",
        title: "منصة تعليم بالذكاء الاصطناعي",
        description:
          "دورات واختبارات ولوحات تحكم لأربعة أدوار، مع محرك اختبارات من OpenAI يكتب الأسئلة من مواد الدورة المرفوعة.",
        tech: ["Node.js", "Express", "MySQL", "React", "React Native", "OpenAI"],
        links: { github: LINKS.repo("Software-GP-FE-BE") },
      },
    ],
    moreTitle: "المزيد على GitHub",
    more: [
      { name: "HealthPal", text: "منصة صحية لخمسة أدوار: استشارات مجهولة الهوية، مكالمات فيديو، وتبرعات.", url: LINKS.repo("Advance-Software-Full-Project") },
      { name: "NoteNest", text: "تطبيق ملاحظات بأسلوب Notion مع Express API بطبقات ومصادقة JWT.", url: LINKS.repo("NoteNest") },
      { name: "AI Maze Solver", text: "خط تعلّم آلي مبني على Perceptron مع عرض تفاعلي بـ React.", url: LINKS.repo("AI-Maze-Solver") },
    ],
  },

  skills: {
    eyebrow: "التقنيات",
    title: "الأدوات التي أعمل بها",
    groups: [
      { title: "الخلفية", items: ["Node.js", "NestJS", "Express", "ASP.NET Core", "REST · OpenAPI", "WebSockets", "JWT · RBAC"] },
      { title: "الواجهة", items: ["React", "TypeScript", "React Native", "Vite", "Tailwind CSS", "Zustand", "i18n · RTL"] },
      { title: "البيانات", items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Prisma", "EF Core", "Redis"] },
      { title: "السحابة و DevOps", items: ["Docker", "AWS (RDS)", "GitHub Actions", "Vercel", "Railway", "Supabase"] },
      { title: "الذكاء الاصطناعي والتكاملات", items: ["OpenAI API", "LangGraph", "FastAPI", "Stripe", "Cloudinary", "n8n"] },
      { title: "المعمارية و ERP", items: ["Modular monolith", "N-Tier · Repository", "Outbox · Idempotency", "Dynamics 365 F&O"] },
    ],
  },

  credentials: {
    eyebrow: "التعليم والشهادات",
    degree: {
      title: "بكالوريوس هندسة الحاسوب",
      school: "جامعة النجاح الوطنية",
      period: "2021 – 2026",
    },
    items: [
      { title: "Kanz AI Hackathon 2026 — شهادة AI Showcase الذهبية", org: "SaudiPlot AI", year: "2026" },
      { title: "موسوعة Guinness — أكبر درس ذكاء اصطناعي أونلاين", org: "Kanz AI · ‏14,075 مشاركاً", year: "2026" },
      { title: "تطوير الويب Full-Stack ‏(200 ساعة)", org: "Knowledge Academy", year: "2025" },
    ],
  },

  contact: {
    eyebrow: "تواصل",
    title: "لنبنِ شيئاً معاً.",
    subtitle: "منفتح على وظائف Full-Stack في الرياض أو عن بُعد، وعلى أعمال المنتجات المثيرة. أرد عادةً خلال يوم.",
    email: LINKS.email,
    phone: "+966 53 003 1266",
    emailCta: "أرسل بريداً",
    copy: "نسخ البريد",
    copied: "تم النسخ",
    whatsapp: "واتساب",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  footer: {
    text: "تصميم وتطوير أسامة عثمان",
    backToTop: "العودة للأعلى",
  },
};
