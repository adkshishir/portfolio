export const siteUrl =
  process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || 'https://adhikarishishir.com.np';

export const portfolioData = {
  personal: {
    name: 'Shishir Adhikari',
    givenName: 'Shishir',
    familyName: 'Adhikari',
    title: 'Senior Full Stack Developer',
    brand: 'shishir.dev',
    eyebrow: 'available for new roles & freelance work',
    headline: 'builds full‑stack systems that ship.',
    tagline:
      'Senior Full Stack Developer based in Pokhara, Nepal — 4+ years turning product ideas into scalable, secure web applications with React, Next.js, NestJS and Node.js.',
    profileSummary:
      "I'm a Senior Full Stack Developer with around 4 years of professional experience designing, building and deploying modern web applications — from public government data portals to healthcare systems and e‑commerce platforms.",
    profileSummaryExtra:
      'I work primarily across the MERN/PERN stack, building scalable backend systems with NestJS, Node.js and Express, and responsive, accessible frontends with React, Next.js, Tailwind CSS and Shadcn/ui. I care about clean architecture, performance, and code that\'s easy for the next developer to pick up.',
    profileSummaryCurrent:
      'Currently a Senior Full Stack Developer at Infomation Care Pvt. Ltd., previously shipping production work at Aarambha IT and Skybase Innovations.',
    yearsExperience: '4+',
    projectsShipped: '15+',
    companiesCount: '3',
    contact: {
      phone: '+9779806680725',
      phoneDisplay: '+977 9806680725',
      email: 'adhikarishishir50@gmail.com',
      location: 'Pokhara, Nepal',
      website: 'www.adhikarishishir.com.np',
      cvPath: '/cv-shishir.pdf',
    },
    seo: {
      title:
        'Shishir Adhikari | Senior Full Stack Developer | React, Next.js, NestJS',
      description:
        'Shishir Adhikari — Senior Full Stack Developer from Pokhara, Nepal. 4+ years building scalable web apps with React, Next.js, NestJS and Node.js.',
      keywords: [
        'Shishir Adhikari',
        'Senior Full Stack Developer',
        'Full Stack Developer Nepal',
        'Web Developer Pokhara',
        'React Developer',
        'Next.js Developer',
        'Node.js Developer',
        'NestJS Developer',
        'TypeScript Developer',
        'JavaScript Developer',
        'Frontend Developer Nepal',
        'Backend Developer Nepal',
        'Freelance Web Developer Nepal',
        'Hire Full Stack Developer',
        'Nepal Software Engineer',
        'Pokhara Developer',
        'MERN Stack Developer',
        'PERN Stack Developer',
        'Tailwind CSS Developer',
        'PostgreSQL Developer',
        'Prisma Developer',
        'REST API Developer',
      ],
    },
  },
  education: [
    {
      institution: 'Prithivi Narayan Campus',
      degree: 'BSC CSIT',
      period: '2020 - Present',
    },
    {
      institution: 'Rastrya Mabi',
      degree: 'Science (Math)',
      period: '2018-2020',
      gpa: '3.09 / 4.0',
    },
  ],
  skillBars: [
    { label: 'TypeScript / JavaScript', percent: 92 },
    { label: 'React / Next.js', percent: 90 },
    { label: 'NestJS / Node.js / Express', percent: 88 },
    { label: 'PostgreSQL / MySQL / MongoDB', percent: 82 },
    { label: 'Tailwind CSS / Shadcn UI', percent: 85 },
  ],
  skillChips: [
    'Prisma',
    'Git & GitHub',
    'GitHub Actions',
    'Stripe',
    'eSewa',
    'REST APIs',
    'Docker',
    'Figma → Code',
    'English',
    'Nepali',
    'Hindi',
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'Express',
    'Tailwind CSS',
    'Shadcn UI',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Prisma',
    'REST API',
    'Docker',
    'Full Stack Development',
    'Web Development',
  ],
  experience: [
    {
      company: 'Infomation Care Pvt. Ltd.',
      position: 'Senior Full Stack Developer',
      period: 'Jan 2025 — Present',
      location: 'Pokhara, Nepal',
      current: true,
      responsibilities: [
        {
          title: 'Koshi Data Portal',
          detail:
            'public data portal for Koshi Province government to visualize and publish provincial datasets.',
        },
        {
          title: 'Syanko Katti Rolls Dashboard',
          detail:
            'admin dashboard for order and business management for a food service brand.',
        },
        {
          title: 'Info Forms',
          detail:
            'dynamic form-building and data-collection platform for internal and client use.',
        },
      ],
    },
    {
      company: 'Aarambha IT',
      position: 'Full Stack Developer',
      period: 'Jun 2024 — Jan 2025',
      location: 'Pokhara, Nepal',
      current: false,
      responsibilities: [
        {
          title: 'Healthcare System',
          detail:
            'secure appointment and patient management for a hospital.',
        },
        {
          title: 'Café Site',
          detail:
            'modern, responsive frontend with Stripe payments for a catering business.',
        },
        {
          title: 'Static Business Site, Typography Platform & Tourism Promo Site',
          detail: 'three additional client builds.',
        },
      ],
    },
    {
      company: 'Skybase Innovations',
      position: 'Software Developer',
      period: 'Jul 2023 — May 2024',
      location: 'Pokhara, Nepal',
      current: false,
      responsibilities: [
        {
          title: 'Single-Page Food Ordering App',
          detail: 'fast, responsive single-page app for seamless ordering.',
        },
        {
          title: 'Flight System',
          detail:
            'contributed to Sasto Ticket, a leading flight booking platform in Nepal.',
        },
      ],
    },
  ],
  projectTabs: [
    { id: 'all', label: 'All' },
    { id: 'personal', label: 'Personal' },
    { id: 'company', label: 'Company Work' },
  ] as const,
  projects: [
    {
      title: 'PDF to Excel',
      tag: 'tool',
      category: 'personal' as const,
      description:
        'Web tool that converts PDF tables and data into clean, editable Excel spreadsheets in seconds.',
      link: 'https://pdfintoexcel.com/',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'AlgoFinanceLab',
      tag: 'fintech',
      category: 'personal' as const,
      description:
        'Platform for testing and analyzing algorithmic trading and finance strategies.',
      link: 'https://algofinancelab.com/',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'TwoFaced',
      tag: 'web app',
      category: 'personal' as const,
      description:
        'Personal full-stack web application project showcasing end-to-end product development.',
      link: 'https://twofaced.adhikarishishir.com.np/',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'Koshi Data Portal',
      tag: 'gov / data',
      category: 'company' as const,
      description:
        'Public data portal built for Koshi Province to visualize and publish provincial datasets.',
      link: 'https://dataportal.koshi.gov.np/',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'Syanko Katti Rolls',
      tag: 'dashboard',
      category: 'company' as const,
      description:
        'Admin dashboard for order and business management for a food service brand.',
      link: 'https://syanko-test.dashboard.cliffbyte.com/en',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'Info Forms',
      tag: 'platform',
      category: 'company' as const,
      description:
        'Dynamic form-building and data-collection platform for internal and client use.',
      link: 'https://infoforms.cliffbyte.com/',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'Tishy & Co',
      tag: 'e-commerce',
      category: 'company' as const,
      description:
        'Modern, responsive café and catering site with online ordering and Stripe payments.',
      link: 'https://www.tishyandco.com.au/',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'Immigration Self-Declaration',
      tag: 'gov / forms',
      category: 'company' as const,
      description:
        'Nepal immigration self-declaration system for travelers to submit personal, travel, and document details online.',
      link: 'https://immigration.infocarenepal.com/',
      schemaType: 'WebApplication' as const,
    },
    {
      title: 'Med Tracker',
      tag: 'healthcare',
      category: 'personal' as const,
      description:
        'Role-based patient, session and treatment management system built with NestJS and Prisma.',
      link: 'https://github.com/the-null-pointers/medtracker-backend',
      schemaType: 'SoftwareSourceCode' as const,
    },
  ],
  socialLinks: {
    github: 'https://github.com/adkshishir',
    linkedin: 'https://www.linkedin.com/in/shishir-adhikari-917432254/',
    instagram: 'https://www.instagram.com/shishir0605/',
    facebook: 'https://www.facebook.com/shishir0605',
  },
  nav: [
    { href: '#about', label: 'about', index: '01' },
    { href: '#skills', label: 'skills', index: '02' },
    { href: '#experience', label: 'experience', index: '03' },
    { href: '#projects', label: 'projects', index: '04' },
    { href: '#contact', label: 'contact', index: '05' },
  ],
} as const;

export type PortfolioData = typeof portfolioData;
