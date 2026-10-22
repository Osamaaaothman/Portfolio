import { LINKS } from "../constants";

export const en = {
  dir: "ltr",
  langSwitchLabel: "العربية",

  nav: {
    links: [
      { id: "now", label: "Now" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Stack" },
      { id: "contact", label: "Contact" },
    ],
    resume: "Résumé",
    resumeOptions: [
      { id: "fullstack", label: "Full-Stack · Node & React", file: LINKS.cvFullStack },
      { id: "dotnet", label: ".NET Developer · ASP.NET Core", file: LINKS.cvDotNet },
    ],
    menu: "Menu",
    close: "Close",
  },

  hero: {
    status: "Full-Stack Developer at the change cue",
    name: "Osama Othman",
    role: "Full-Stack Software Engineer",
    headline: "I build production software end to end — schema, API, interface, deployment.",
    description:
      ".NET and Node.js on the backend, React on the front, AI where it earns its place. Based in Riyadh, currently building an AI-driven CX assessment platform at the change cue and Markaz, an Arabic-first ERP for the Gulf.",
    location: "Riyadh, Saudi Arabia",
    workStatus: "Saudi work visa · Transferable Iqama",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View projects",
    stats: [
      { value: "700+", label: "GitHub contributions in the past year" },
      { value: "5", label: "Products shipped end to end" },
      { value: "Gold", label: "AI Showcase certificate · Kanz AI Hackathon 2026" },
      { value: "2", label: "Production stacks: .NET & Node.js" },
    ],
  },

  now: {
    eyebrow: "Right now",
    title: "What I'm working on",
    items: [
      {
        id: "changecue",
        kind: "Full-Stack Developer",
        org: "the change cue",
        text: "Building a platform designed to scale to thousands of CX maturity assessments — a Node.js backend coordinating a dedicated Python AI microservice.",
        tags: ["Node.js", "React", "Python AI", "AWS RDS"],
      },
      {
        id: "markaz",
        kind: "Building",
        org: "Markaz",
        text: "An Arabic-first accounting & ERP product for Saudi and Gulf businesses, with a database-enforced double-entry ledger.",
        tags: ["NestJS", "PostgreSQL", "React"],
      },
    ],
  },

  experience: {
    eyebrow: "Experience",
    title: "Where I've shipped",
    present: "Present",
    items: [
      {
        id: "changecue",
        current: true,
        company: "the change cue",
        role: "Full-Stack Developer",
        type: "Paid internship · Remote",
        period: "Sep 2026 – Present",
        bullets: [
          "Architecting a system designed to scale to thousands of CX maturity assessments, coordinating a Node.js backend with a dedicated Python AI microservice.",
          "Building REST endpoints in Node.js/Express and the React interfaces on top, then integrating and testing them end to end.",
          "Designing relational schemas on AWS RDS with complex many-to-many relationships.",
          "Integrating external AI services; deploying and running services with Docker, Redis and cloud infrastructure.",
        ],
        tech: ["Node.js", "Express", "React", "Python", "AWS RDS", "Docker", "Redis"],
      },
      {
        id: "alfahad",
        company: "Al Fahad Holding Company",
        role: "ERP Trainee — Microsoft Dynamics 365 F&O",
        type: "Riyadh, Saudi Arabia",
        period: "Aug 2026 – Sep 2026",
        bullets: [
          "Structured training on Microsoft Dynamics 365 Finance & Operations: core configuration and implementation.",
          "Learned enterprise finance and operations workflows across a holding group spanning industrial, real estate and trading businesses.",
        ],
        tech: ["Dynamics 365", "Finance & Operations", "ERP"],
      },
      {
        id: "hope",
        company: "The Hope International",
        role: "Machine Learning Trainee",
        type: "Internship · Remote",
        period: "May 2026 – Aug 2026",
        bullets: [
          "Completed a 60-hour Python, Machine Learning & AI program in the machine learning department.",
          "Built hands-on experience with Python for data processing and machine learning model development.",
        ],
        tech: ["Python", "Machine Learning", "AI"],
      },
      {
        id: "truetime",
        company: "True Time Solution",
        role: "Full-Stack Developer Intern",
        type: "Sole developer",
        period: "Jun 2025 – Dec 2025",
        bullets: [
          "Built a complete e-commerce + ERP platform solo — database design, backend and frontend.",
          "Shipped 40+ REST endpoints in ASP.NET Core Web API on a 3-layer N-Tier architecture.",
          "Modeled a 12-table SQL Server schema with EF Core and LINQ; Repository Pattern + DI cut duplicated query code by ~30%.",
          "Secured the API with JWT and role-based authorization across 3 roles; built a 10-screen responsive React frontend and moved it to Vite (~40% faster builds).",
        ],
        tech: ["ASP.NET Core", "EF Core", "SQL Server", "React", "JWT"],
      },
      {
        id: "annajah",
        company: "An-Najah National University",
        role: "Full-Stack Developer — Graduation Project",
        type: "Capstone · Nablus",
        period: "Feb 2025 – Jun 2025",
        bullets: [
          "Built an AI-assisted e-learning platform across 4 roles: course management, quizzes and student dashboards.",
          "Designed REST APIs in Node.js/Express over a 23-table MySQL schema (Sequelize ORM).",
          "Integrated the OpenAI API to generate quiz questions from course content; React web and React Native mobile clients.",
        ],
        tech: ["Node.js", "Express", "MySQL", "React Native", "OpenAI API"],
      },
    ],
  },

  projects: {
    eyebrow: "Selected work",
    title: "Things I've built",
    subtitle: "Products, client work and a hackathon build — each one owned from schema to deployment.",
    code: "Code",
    live: "Live",
    flagshipLabel: "Flagship",
    flagship: {
      id: "markaz",
      status: "In active development",
      title: "Markaz",
      subtitle: "ERP-Lite for Saudi & Gulf businesses",
      description:
        "A commercial accounting and ERP product, Arabic and English from day one: general ledger, inventory, purchasing with three-way matching, sales, payments, ageing reports and invoice PDFs. Every customer gets a fully isolated deployment, shipped as one Docker Compose bundle.",
      highlights: [
        "Double-entry ledger with database-enforced integrity: deferred triggers guarantee debit = credit at commit and reject posting into closed periods.",
        "Append-only audit log and journals through a restricted Postgres role with no UPDATE or DELETE grant.",
        "JWT auth with refresh-token rotation and reuse detection; deny-by-default, data-driven permissions.",
        "BullMQ workers, outbox pattern, idempotency keys and configurable approval workflows.",
        "Property-based ledger tests against real Postgres; CI runs lint, typecheck, module boundaries, tests and dependency audit.",
      ],
      tech: ["NestJS", "TypeScript", "React", "PrimeReact", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Docker", "Turborepo"],
      links: { github: LINKS.repo("Markaz") },
    },
    items: [
      {
        id: "saudiplot",
        tagline: "Kanz AI Hackathon 2026 · Gold showcase",
        title: "SaudiPlot AI",
        description:
          "Landowners upload a plot deed, answer a guided questionnaire and get a villa concept aligned to Saudi building rules — with a 3D result view, maps and Stripe checkout.",
        tech: ["React 19", "LangGraph", "FastAPI", "PostGIS", "Supabase", "MapLibre"],
        links: { live: "https://saudi-plot-frontend.vercel.app", github: LINKS.repo("Saudi-Plot-Frontend") },
      },
      {
        id: "dental",
        tagline: "Live · Built for a real practice",
        title: "Dental Clinic Manager",
        description:
          "Practice management for a dentist running two clinics: patients, appointments, X-rays and documents, with automated email reminders.",
        tech: ["React", "Zustand", "Express", "PostgreSQL", "Cloudinary", "Resend"],
        links: { live: "https://dental-clinic-gray-nine.vercel.app", github: LINKS.repo("Dental_Clinic") },
      },
      {
        id: "ecommerce",
        tagline: "Client project · True Time Solution",
        title: "E-Commerce & ERP Platform",
        description:
          "Catalog, orders, inventory and role-based ERP workflows, built solo on a 3-layer .NET backend: 40+ endpoints, 12-table schema, 3 roles.",
        tech: ["ASP.NET Core", "EF Core", "SQL Server", "React", "JWT"],
        links: {},
      },
      {
        id: "elearning",
        tagline: "Graduation project",
        title: "AI E-Learning Platform",
        description:
          "Courses, quizzes and dashboards for 4 roles, with an OpenAI quiz engine that writes questions from uploaded course material.",
        tech: ["Node.js", "Express", "MySQL", "React", "React Native", "OpenAI"],
        links: { github: LINKS.repo("Software-GP-FE-BE") },
      },
    ],
    moreTitle: "More on GitHub",
    more: [
      { name: "HealthPal", text: "Healthcare platform for 5 roles: anonymous consultations, video calls, donations.", url: LINKS.repo("Advance-Software-Full-Project") },
      { name: "NoteNest", text: "Notion-style notes app with a layered Express API and JWT auth.", url: LINKS.repo("NoteNest") },
      { name: "AI Maze Solver", text: "Perceptron-based ML pipeline with a live React visualization.", url: LINKS.repo("AI-Maze-Solver") },
    ],
  },

  skills: {
    eyebrow: "Stack",
    title: "Tools I ship with",
    groups: [
      { title: "Backend", items: ["Node.js", "NestJS", "Express", "ASP.NET Core", "REST · OpenAPI", "WebSockets", "JWT · RBAC"] },
      { title: "Frontend", items: ["React", "TypeScript", "React Native", "Vite", "Tailwind CSS", "Zustand", "i18n · RTL"] },
      { title: "Data", items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Prisma", "EF Core", "Redis"] },
      { title: "Cloud & DevOps", items: ["Docker", "AWS (RDS)", "GitHub Actions", "Vercel", "Railway", "Supabase"] },
      { title: "AI & Integrations", items: ["OpenAI API", "LangGraph", "FastAPI", "Stripe", "Cloudinary", "n8n"] },
      { title: "Architecture & ERP", items: ["Modular monolith", "N-Tier · Repository", "Outbox · Idempotency", "Double-entry accounting", "Three-way matching", "Dynamics 365 F&O"] },
    ],
  },

  credentials: {
    eyebrow: "Education & credentials",
    degree: {
      title: "B.Sc. in Computer Engineering",
      school: "An-Najah National University",
      period: "2021 – 2026",
    },
    items: [
      { title: "Kanz AI Hackathon 2026 — Gold AI Showcase", org: "SaudiPlot AI", year: "2026" },
      { title: "Guinness World Records — largest online AI lesson", org: "Kanz AI · 14,075 participants", year: "2026" },
      { title: "Full-Stack Web Development (200h)", org: "Knowledge Academy", year: "2025" },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's build something.",
    subtitle: "Open to full-stack roles in Riyadh or remote, and to interesting product work. I usually reply within a day.",
    email: LINKS.email,
    phone: "+966 53 003 1266",
    emailCta: "Send an email",
    copy: "Copy email",
    copied: "Copied",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  footer: {
    text: "Designed & built by Osama Othman",
    backToTop: "Back to top",
  },
};
