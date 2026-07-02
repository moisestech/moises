import {
  AI24_WEBSITE_HERO_IMAGE,
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';

export type StackGroup = {
  area: string;
  tools: string;
};

export type ProofProject = {
  slug: string;
  title: string;
  whatItIs: string;
  whatIBuilt: string;
  stack: string[];
  whyItMatters: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  external?: boolean;
};

export type DownloadAsset = {
  label: string;
  path: string;
  available: boolean;
  /** Fallback link when file is not yet available */
  fallbackPath?: string;
  fallbackLabel?: string;
};

export const aiEngineeringPacket = {
  seo: {
    title: 'AI Engineering — Moises Sanabria | moises.tech',
    description:
      'Full-stack AI systems builder: agentic workflows, automation, Next.js, TypeScript, Supabase, Airtable, n8n, and LLM tooling. Recruiter packet for applied AI and product engineering roles.',
  },
  hero: {
    headline:
      'Full-stack AI systems builder working across agentic workflows, automation, and creative technical infrastructure.',
    subheadline:
      'I build applied AI tools, workflow systems, and production-ready prototypes using Next.js, TypeScript, Supabase, Airtable, n8n, Claude/OpenAI workflows, and modern deployment stacks.',
  },
  bestFitRoles: [
    'AI Engineer',
    'Full-Stack AI Engineer',
    'Applied AI Engineer',
    'Agentic AI Developer',
    'AI Product Engineer',
    'Automation Engineer',
    'Creative Technologist',
    'Technical Director, Digital Systems',
  ],
  bestFitNote:
    'Best fit: small teams, ambiguous builds, AI workflow/product systems, automation-heavy teams, creative tools, internal tools, and teams needing strong technical communication with non-technical stakeholders.',
  stackGroups: [
    { area: 'Frontend', tools: 'Next.js, React, TypeScript' },
    { area: 'Backend/Data', tools: 'Supabase, PostgreSQL, APIs' },
    { area: 'AI', tools: 'Claude, OpenAI, Gemini, LLM workflows, agentic systems' },
    { area: 'Automation', tools: 'n8n, Airtable, Make-style workflows' },
    { area: 'Deployment', tools: 'Vercel, GitHub' },
    { area: 'Product/Ops', tools: 'CRM design, dashboards, documentation, workflow architecture' },
    {
      area: 'Creative Tech',
      tools: 'projection, 3D scanning, resin printing, signage systems, digital lab infrastructure',
    },
  ] satisfies StackGroup[],
  recruiterBlurb:
    'Moises Sanabria is a Miami-based artist-engineer and full-stack AI systems builder. He works across Next.js, TypeScript, Supabase, Airtable, n8n, and LLM workflows, with experience building applied AI tools, automation systems, and creative technical infrastructure. He is especially strong in ambiguous roles that require both technical execution and product/scoping judgment.',
  proofProjects: [
    {
      slug: 'lore-machine',
      title: 'Lore Machine',
      whatItIs: 'AI narrative-to-media platform turning scripts, books, and lyrics into structured multimedia outputs.',
      whatIBuilt:
        'Founding engineer / Chief Prompt Officer: frontend web app, authentication, design systems, data API transactions, prompt workflows, generative image pipelines, and contractor/sprint coordination in a 3-person engineering team.',
      stack: ['TypeScript', 'Next.js', 'Vercel', 'LLMs', 'Stable Diffusion', 'Replicate', 'Azure'],
      whyItMatters:
        'Demonstrates production AI product engineering, agentic creative workflows, and startup-speed delivery with non-technical leadership stakeholders.',
      href: '/projects/lore-machine',
      imageSrc: evidenceProjects['lore-machine'].imageSrc,
      imageAlt: evidenceProjects['lore-machine'].imageAlt,
    },
    {
      slug: 'ai24',
      title: 'AI24',
      whatItIs: 'AI education, tools, and cultural R&D platform for artists and institutions.',
      whatIBuilt:
        'Full-stack AI infrastructure, workshop programs, LMS-oriented architecture, automation strategy, and applied AI systems that make emerging tools legible and deployable.',
      stack: ['Next.js', 'TypeScript', 'GenAI education', 'Automation', 'Multimodal workflows'],
      whyItMatters:
        'Shows end-to-end AI systems ownership — product, workflows, institutional delivery, and research translation into usable tools.',
      href: '/projects/ai24',
      imageSrc: AI24_WEBSITE_HERO_IMAGE,
      imageAlt: 'AI24 website — above-the-fold product and program hub',
    },
    {
      slug: 'infra24',
      title: 'Infra24 / Smart Sign',
      whatItIs:
        'Public display and digital infrastructure exploring how screens, signage, and civic systems shape attention.',
      whatIBuilt:
        'Deployed smart signage systems: CMS-driven content, Raspberry Pi hardware, venue integrations, and automation for community-facing digital displays.',
      stack: ['Raspberry Pi', 'CMS', 'Signage systems', 'Automation', 'Hardware deployment'],
      whyItMatters:
        'Proof of real-world systems engineering beyond the browser — hardware, ops, and content workflows in production contexts.',
      href: '/projects/infra24',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
      imageAlt: 'Smart signage and digital infrastructure deployment',
    },
    {
      slug: 'oolite-digital-lab',
      title: 'Oolite Digital Lab',
      whatItIs:
        'Technical direction for a Miami arts institution digital lab — artist access, equipment, programs, and public-facing infrastructure.',
      whatIBuilt:
        'Lab operations support, AI/media literacy programs, booking pathways, signage, documentation, vendor coordination, fabrication workflows, and leadership reporting.',
      stack: ['Technical direction', 'Documentation', 'Digital fabrication', 'AI literacy', 'Stakeholder support'],
      whyItMatters:
        'Demonstrates technical leadership with non-engineering stakeholders, institutional systems, and education-adjacent product judgment.',
      href: '/projects/oolite-digital-lab',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
  ] satisfies ProofProject[],
  availability: {
    summary:
      'Open to full-time, contract-to-hire, and selective consulting roles in applied AI, full-stack AI engineering, automation, and creative technical systems.',
    email: 'm@moises.tech',
    location: 'Miami, FL / Remote-friendly',
  },
  downloads: {
    resumePdf: {
      label: 'Download Resume (PDF)',
      path: '/downloads/Moises_Sanabria_AI_Engineer_Resume.pdf',
      available: true,
    },
    resumeDocx: {
      label: 'Download Resume (DOCX)',
      path: '/downloads/Moises_Sanabria_AI_Engineer_Resume.docx',
      available: false,
      fallbackPath: '/cv/tech/print',
      fallbackLabel: 'Print to PDF',
    },
    portfolioPacket: {
      label: 'Portfolio Packet (PDF)',
      path: '/downloads/Moises_Sanabria_AI_Engineering_Portfolio_Packet.pdf',
      available: false,
      fallbackPath: '/ai-engineering',
      fallbackLabel: 'View AI Engineering packet',
    },
  } satisfies Record<string, DownloadAsset>,
  resumeWebPath: '/cv/tech',
  email: 'm@moises.tech',
} as const;
