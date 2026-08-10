import type { Opportunity } from './types';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { evidenceProjects } from '@/content/evidence/projects';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';

/** Algora intro scheduler for Kyle (ASI Recruiting Lead). */
export const AIR_SPACE_INTELLIGENCE_ALGORA_SCHEDULE_URL =
  'https://algora.io/airspace-intelligence/moisestech';

export const airSpaceIntelligenceFullStackEngineerOpportunity: Opportunity = {
  slug: 'air-space-intelligence-full-stack-engineer',
  status: 'active',
  listed: false,
  variant: 'compact',
  capabilitiesHref: '/capabilities#software-engineering',
  seo: {
    title: 'Air Space Intelligence — Full Stack Engineer — Moises Sanabria | moises.tech',
    description:
      'Private Algora introduction for Air Space Intelligence Full Stack Engineer — React, TypeScript, Python, AWS, LLM-accelerated delivery, and mission-critical product ownership.',
    indexable: false,
  },
  visibilityNote:
    'Algora introduction · Air Space Intelligence Full Stack Engineer. Not affiliated with or endorsed by Air Space Intelligence or Algora.',
  company: 'Air Space Intelligence',
  roleTitle: 'Full Stack Engineer',
  heroEyebrow: 'Algora introduction · Air Space Intelligence',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Ideal-loop profile for this role: full-stack product ownership in React/TypeScript, Python-to-UI delivery, AWS-adjacent cloud/data work, and daily LLM-accelerated engineering — plus clear ramp plan for Mapbox airspace UX and deeper Kubernetes/Terraform.',
  heroRoleMeta: 'Boston · Full Stack Engineer · React · TypeScript · Python · Mapbox · AWS',
  heroMetaChips: [
    'React + TypeScript product owner',
    'Python → API → UI',
    'AWS + Docker shipping',
    'LLM-accelerated engineering',
    'Open to Boston travel',
  ],
  heroPrimaryCta: {
    label: 'Schedule intro with Kyle',
    href: AIR_SPACE_INTELLIGENCE_ALGORA_SCHEDULE_URL,
  },
  heroSecondaryCta: { label: 'Role fit', href: '#fit' },
  audienceKeywords: {
    lead: 'Private packet for',
    terms: [
      { label: 'Kyle Buschmann', detail: 'ASI Recruiting Lead — intro via Algora' },
      { label: 'Zafer Cesur', detail: 'Founder & CTO, Algora — outbound intro' },
      { label: 'Full Stack Engineer', detail: 'React · Redux · Mapbox · TypeScript · Python · AWS' },
      { label: 'Air Space Intelligence', detail: 'AI for aviation, defense, and critical infrastructure' },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Approach' },
    { id: 'resume', label: 'Schedule' },
  ],
  hero: {
    headline: 'Full-stack engineer for mission-critical operator products',
    subheadline:
      'Ship React/TypeScript surfaces, Python services, and AWS-backed pipelines — then ramp into ASI’s Mapbox airspace stack',
    introParagraphs: [
      'ASI is rebuilding U.S. airspace decision systems under an $875M FAA mandate with a16z Series B backing. That work needs engineers who can own the path from models and APIs to operator-facing UX — with precision, resilience, and LLM-accelerated throughput.',
      'I match the core hire signal: founding-engineer full-stack delivery (Lore Machine), React/TypeScript product ownership, Python + API integrations, AWS data/cloud exposure (Playwire), Dockerized shipping, and current Cursor/Claude Code practice. Aviation GIS and deep Kubernetes/Terraform are explicit ramp priorities — labeled below, not inflated.',
    ],
    trustLine:
      'Full-Stack AI Engineer · Miami-based · flexible for Boston travel and shifting priorities · ready for an intro with Kyle this week',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit — ideal candidate mapping',
  roleMatchIntro:
    'Color-coded evidence against the ASI Full Stack Engineer requisites. Demonstrated and transferable first; ramp priorities called out honestly.',
  roleMatchColumnHeaders: {
    left: 'ASI requisite',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Strong software skills in Python, JavaScript, TypeScript',
      status: 'demonstrated',
      evidence:
        'Daily TypeScript/JavaScript product work; Python across AI/media pipelines and service integrations at Lore Machine. Comfortable owning backend contracts through to the UI without handoff theater.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — TypeScript and Python product delivery',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'User-facing features in React, Redux, Mapbox, TypeScript',
      status: 'transferable',
      evidence:
        'Founding engineer ownership of React/TypeScript product surfaces, auth, and real-time generative UX at Lore Machine. State-management patterns are production-proven; Redux-at-scale and Mapbox airspace layers are the targeted ramp — architecture literacy is already there.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — React operator-facing product UI',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Database models → APIs → product UI',
      status: 'demonstrated',
      evidence:
        'End-to-end ownership from data/API integrations to shipped frontend features on a live generative platform. Same shape ASI needs for trajectory/decision-support surfaces: durable models, clear contracts, legible UI.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Multimodal systems — API and pipeline ownership',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'AWS, Kubernetes, Docker, Terraform infrastructure',
      status: 'transferable',
      evidence:
        'AWS production exposure via Playwire (Kinesis → Athena → Snowflake path) plus Docker in day-to-day delivery. Kubernetes and Terraform are active ramp priorities with enough adjacent cloud discipline to ramp inside ASI’s stack quickly.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — AWS data and cloud pipelines',
        local: true,
      },
    },
    {
      requirement: 'Modern LLM tools to accelerate development & code quality',
      status: 'demonstrated',
      evidence:
        'Current practice: Cursor, Claude Code, and multi-agent orchestration for delivery — used to raise throughput and review quality, not to skip systems judgment. Matches ASI’s explicit LLM-tooling value.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — LLM-accelerated engineering practice',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Collaborate across defense & design; lead independently',
      status: 'demonstrated',
      evidence:
        'Technical Director of Digital at Oolite Arts — shipped public digital infrastructure with artists, staff, and institutional partners. Founding-engineer mode at Lore Machine required independent lead energy without waiting for perfect specs.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Digital culture infrastructure — cross-team product delivery',
        local: evidenceProjects['digital-culture-infrastructure'].imageLocal,
      },
    },
    {
      requirement: 'Travel flexibility & shifting business priorities',
      status: 'demonstrated',
      evidence:
        'Miami-based and open to Boston travel for collaboration. Used to priority shifts across product, institutional, and ops contexts — can adjust without losing delivery discipline.',
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'Production ops automation — adapting to live priorities',
        local: evidenceProjects['n8n-gmail-intelligence'].imageLocal,
      },
    },
    {
      requirement: 'Mission-critical / high-stakes operator UX',
      status: 'transferable',
      evidence:
        'Built real-time, failure-visible product surfaces where correctness and legibility matter. Aviation ATC is domain-new; the operator-product muscle (latency, clarity, auditability) is transferable and the right interview topic.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Complex public product surfaces under operational pressure',
        local: evidenceProjects['digital-culture-infrastructure'].imageLocal,
      },
    },
  ],
  featuredProjectIds: [
    'lore-machine',
    'playwire-alumni',
    'digital-culture-infrastructure',
    'n8n-gmail-intelligence',
    'ai24',
  ],
  caseStudiesSectionTitle: 'Selected work for this loop',
  caseStudiesIntro:
    'What I would walk Kyle through on an intro call — product ownership, cloud/data discipline, and LLM-accelerated shipping that maps to ASI’s stack.',
  skillsSectionTitle: 'Core technical skills',
  skillsMatrixRows: [
    {
      category: 'Full-stack product',
      skills: 'TypeScript, JavaScript, React, Next.js, API design, real-time UX, auth',
      icon: 'code2',
    },
    {
      category: 'Spatial / ops UX',
      skills: 'Data-dense interactive UIs, continuous-state product surfaces, Mapbox-ready ramp',
      icon: 'layers',
    },
    {
      category: 'Backend & data',
      skills: 'Python, SQL, ETL patterns, Snowflake-adjacent analytics, service integration',
      icon: 'lineChart',
    },
    {
      category: 'Cloud & infra',
      skills: 'AWS (Kinesis, Athena, S3, Amplify), Docker; Kubernetes + Terraform ramp plan',
      icon: 'cloud',
    },
    {
      category: 'LLM-accelerated engineering',
      skills: 'Cursor, Claude Code, agentic workflows, production n8n / Make automation',
      icon: 'sparkles',
    },
    {
      category: 'Collaboration',
      skills: 'Cross-functional delivery, independent lead energy, institutional / high-stakes stakeholders',
      icon: 'users',
    },
  ],
  processSectionTitle: 'How I would ramp into this role',
  processIntro:
    'Treat the first 90 days like joining a mission-critical product team: learn the operator decision loop, then ship small, auditable increments on ASI’s React/Mapbox stack.',
  processSteps: [
    {
      title: 'Instrument the operator decision loop',
      description:
        'Who acts on the map, what latency and correctness they need, and which failure modes are unacceptable in ATC-adjacent UX.',
      logoIds: ['react', 'typescript', 'mapbox'],
    },
    {
      title: 'Own database → API → UI slices',
      description:
        'Ship vertical features end-to-end — models, contracts, and React surfaces — so defense and design partners can react to working software.',
      logoIds: ['python', 'redux', 'react'],
    },
    {
      title: 'Accelerate with LLM rigor',
      description:
        'Use Cursor/Claude Code to move faster on boilerplate and tests while keeping human review on safety-critical paths.',
      logoIds: ['anthropic', 'github'],
    },
    {
      title: 'Harden infra habits',
      description:
        'Dockerized delivery first; deepen Kubernetes/Terraform inside ASI’s existing patterns rather than inventing a parallel stack.',
      logoIds: ['docker', 'kubernetes', 'terraform', 'aws'],
    },
  ],
  innovationLabSectionTitle: 'Why I’m a strong intro for Kyle',
  innovationLabLead: 'Ideal candidate signal — without domain cosplay',
  innovationLabBody:
    'ASI’s Full Stack Engineer hire needs someone who can already ship React/TypeScript product, speak Python and APIs, operate around AWS, and use modern LLM tools as a force multiplier — then learn the airspace map stack inside a high-stakes team. That is my demonstrated center of gravity. Mapbox aviation GIS and deeper Kubernetes/Terraform are the honest ramp — the kind of gap a strong team closes quickly when the product muscle is already real. This packet is built so Kyle can see the fit before we talk.',
  ctas: recruitingCtas({
    emailSubject: 'Air Space Intelligence Full Stack Engineer (Algora) — Moises Sanabria',
    caseStudiesAnchor: '#case-studies',
    resumePdfPath: technologyCvPdfPath,
    resumePrintPath: '/cv/tech/print',
    cv: '/cv/tech',
    scheduleUrl: AIR_SPACE_INTELLIGENCE_ALGORA_SCHEDULE_URL,
    scheduleLabel: 'Schedule intro with Kyle',
  }),
  techLogoIds: [
    'typescript',
    'javascript',
    'react',
    'redux',
    'python',
    'mapbox',
    'aws',
    'docker',
    'kubernetes',
    'terraform',
  ],
  resumeSectionTitle: 'Schedule, résumé & contact',
  resumeSectionNote:
    'Primary next step: schedule with Kyle on Algora. Technology CV at moises.tech/cv/tech. Comp range on the Algora card ($155k–$460k total) is context for the conversation — happy to discuss Boston hybrid/travel and authorization requirements on the call.',
};
