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
  seo: {
    title: 'Air Space Intelligence — Full Stack Engineer — Moises Sanabria | moises.tech',
    description:
      'Private Algora introduction packet for Air Space Intelligence Full Stack Engineer — React, TypeScript, Mapbox-adjacent product work, AWS, and honest stretch framing for mission-critical airspace systems.',
    indexable: false,
  },
  visibilityNote:
    'Algora introduction · Air Space Intelligence Full Stack Engineer. Not affiliated with or endorsed by Air Space Intelligence or Algora.',
  company: 'Air Space Intelligence',
  roleTitle: 'Full Stack Engineer',
  heroEyebrow: 'Algora introduction · Air Space Intelligence',
  candidateName: 'Moises Sanabria',
  heroRoleMeta: 'Boston · Full Stack Engineer · React · TypeScript · Mapbox · AWS',
  heroMetaChips: [
    'Series B · a16z',
    '$875M FAA contract',
    'Mission-critical UX',
    'LLM-accelerated engineering',
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
      { label: 'Full Stack Engineer', detail: 'React · Redux · Mapbox · TypeScript · Python' },
      { label: 'Air Space Intelligence', detail: 'AI for aviation, defense, and critical infrastructure' },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Approach' },
    { id: 'resume', label: 'Résumé' },
  ],
  hero: {
    headline: 'Full-stack product for mission-critical operations',
    subheadline:
      'React · TypeScript · spatial UX · AWS — framed honestly for Air Space Intelligence',
    introParagraphs: [
      'This dossier is a private Algora introduction for Air Space Intelligence’s Full Stack Engineer role. ASI is modernizing U.S. airspace with an AI platform already optimizing a meaningful share of national traffic — work that demands precision, resilience, and legible operator UX.',
      'Strongest alignment: founding-engineer full-stack delivery (Lore Machine), React/TypeScript product surfaces, AWS data and cloud work (Playwire), and current LLM-accelerated engineering practice. Gaps — especially Kubernetes/Terraform depth, Redux-at-scale, and aviation/defense domain — are flagged below rather than inflated.',
    ],
    trustLine:
      'Full-Stack AI Engineer · Miami-based · open to Boston travel / hybrid conversation · honest stretch application',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit (honest mapping)',
  roleMatchIntro:
    'What I can defend in a first conversation with Kyle, plus gaps that need role-specific depth before a full loop.',
  roleMatchColumnHeaders: {
    left: 'Role emphasis',
    right: 'My evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Full-stack product in React, Redux, TypeScript',
      evidence:
        'Founding engineer at Lore Machine: owned frontend, auth, and AI/data API integrations for a real-time generative platform. Day-to-day stack is TypeScript, React, and Next.js. [GAP: Redux-at-scale production depth is lighter than React/TS product ownership — flag for interview pairing.]',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — full-stack AI product UI',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Mapbox / spatial & operational UX',
      evidence:
        'Comfortable building complex, real-time operator-facing interfaces and data-dense product surfaces. Closest production pattern: live generative and ops UIs with continuous state, not aviation GIS. [GAP: no shipped Mapbox airspace product — ready to ramp on ASI’s map stack quickly.]',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Digital culture infrastructure — complex public product surfaces',
        local: evidenceProjects['digital-culture-infrastructure'].imageLocal,
      },
    },
    {
      requirement: 'Python + APIs through to the UI',
      evidence:
        'Python and TypeScript across AI/media pipelines (Lore Machine, generative workflows) and API-integrated product layers. Comfortable owning the path from models/services to user-facing features.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Multimodal systems — Python and TypeScript pipeline work',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'AWS, Kubernetes, Docker, Terraform',
      evidence:
        'AWS production exposure via Playwire (Kinesis, Athena, Snowflake migration path) plus Docker in day-to-day delivery. [GAP: Kubernetes and Terraform are working knowledge / adjacent — not the deepest claim on this résumé. Honest about needing ASI-context pairing.]',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — AWS data pipelines and analytics',
        local: true,
      },
    },
    {
      requirement: 'Modern LLM tools to accelerate engineering',
      evidence:
        'Current practice: Cursor, Claude Code, and multi-agent orchestration for delivery and ops tooling — used to raise code quality and throughput, not as a substitute for systems judgment.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — applied AI tooling and literacy',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Cross-team collaboration & independent lead energy',
      evidence:
        'Technical Director of Digital at Oolite Arts — public digital infrastructure with artists, staff, and institutional partners. Founding-engineer ownership at Lore Machine required shipping without waiting for perfect specs.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Oolite / digital culture — cross-team product delivery',
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
  caseStudiesSectionTitle: 'Selected work',
  caseStudiesIntro:
    'Evidence I would walk Kyle through on an intro call — product ownership, data/cloud discipline, and LLM-accelerated shipping.',
  skillsSectionTitle: 'Core technical skills',
  skillsMatrixRows: [
    {
      category: 'Full-stack',
      skills: 'TypeScript, JavaScript, React, Next.js, API design, real-time UX',
      icon: 'code2',
    },
    {
      category: 'Spatial / ops UX',
      skills: 'Complex interactive UIs, data-dense operator surfaces, Mapbox-ready ramp',
      icon: 'layers',
    },
    {
      category: 'Backend & data',
      skills: 'Python, SQL, ETL patterns, Snowflake-adjacent analytics, service integration',
      icon: 'lineChart',
    },
    {
      category: 'Cloud & infra',
      skills: 'AWS (Kinesis, Athena, S3, Amplify), Docker; Kubernetes/Terraform — growing depth',
      icon: 'cloud',
    },
    {
      category: 'AI-accelerated engineering',
      skills: 'Cursor, Claude Code, agentic workflows, production n8n / Make automation',
      icon: 'sparkles',
    },
    {
      category: 'Practice',
      skills: 'Cross-functional delivery, rapid prototyping, institutional / high-stakes stakeholders',
      icon: 'users',
    },
  ],
  processSectionTitle: 'How I would approach this role',
  processIntro:
    'Start from the operator decision and the safety envelope — then map UI, APIs, and infra that make trajectory and decision-support systems trustworthy under pressure.',
  processSteps: [
    {
      title: 'Learn the operational decision loop',
      description:
        'Who acts on the map, what latency and correctness they need, and which failure modes are unacceptable in ATC-adjacent UX.',
      logoIds: ['react', 'typescript'],
    },
    {
      title: 'Map product surfaces to services',
      description:
        'From database models and APIs to React/Mapbox views — keep the path from data to action short and auditable.',
      logoIds: ['python', 'aws'],
    },
    {
      title: 'Prototype with LLM-accelerated rigor',
      description:
        'Use modern LLM tooling to move faster without skipping review — pair generated speed with human systems judgment.',
      logoIds: ['anthropic', 'github'],
    },
    {
      title: 'Ship resilient increments',
      description:
        'Dockerized delivery, monitoring habits, and tight loops with defense/design partners as priorities shift.',
      logoIds: ['docker', 'aws'],
    },
  ],
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Why this intro',
  innovationLabBody:
    'ASI sits at the hard edge of full-stack product work: real-time optimization, spatial UX, and systems that cannot afford casual failure. I am a stretch candidate on aviation domain and deep Kubernetes/Terraform — and a concrete candidate on React/TypeScript product ownership, AWS-adjacent data work, and LLM-accelerated delivery. This packet exists so Kyle can see the evidence before a call, not as a claim that I already operate inside FAA programs.',
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
    'python',
    'aws',
    'docker',
    'mapbox',
    'kubernetes',
    'terraform',
    'redux',
  ],
  resumeSectionTitle: 'Schedule, résumé & contact',
  resumeSectionNote:
    'Primary next step: schedule with Kyle on Algora. Technology CV at moises.tech/cv/tech. Gaps in this dossier are intentional — better raised early than papered over.',
};
