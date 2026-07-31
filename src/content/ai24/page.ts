import {
  AI24_WEBSITE_HERO_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

const SITE = 'https://moises.tech';
const AI24_LIVE = 'https://www.ai24.live';
export const AI24_LOGO_SIMPLE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785508878/ai24/app/logo/AI24_logo_simple_ltfbsn.png';
/** Local SVG fallback if Cloudinary is blocked or slow. */
export const AI24_LOGO_PLACEHOLDER = '/images/ai24/ai24-logo-placeholder.svg';

/** Lucide icon keys resolved in the page client. */
export type Ai24IconId =
  | 'bot'
  | 'workflow'
  | 'layout'
  | 'palette'
  | 'graduation'
  | 'database'
  | 'building'
  | 'sparkles'
  | 'users'
  | 'compass'
  | 'rocket'
  | 'mail'
  | 'external'
  | 'chevron';

export type Ai24Accent =
  | 'teal'
  | 'sky'
  | 'amber'
  | 'emerald'
  | 'rose'
  | 'slate'
  | 'cyan';

export type Ai24NavItem = {
  id: string;
  label: string;
};

export type Ai24Category = {
  id: string;
  title: string;
  summary: string;
  icon: Ai24IconId;
  accent: Ai24Accent;
  items: string[];
  /** Optional deep detail shown when expanded. */
  detail?: string;
};

export type Ai24ProofCard = {
  id: string;
  title: string;
  summary: string;
  categoryLabel: string;
  accent: Ai24Accent;
  imageSrc: string;
  imageAlt: string;
  /** Local public file (e.g. SVG) — render with plain img. */
  imageLocal?: boolean;
  href?: string;
  hrefLabel?: string;
  externalHref?: string;
  externalLabel?: string;
};

export type Ai24Expandable = {
  id: string;
  title: string;
  body: string;
  defaultOpen?: boolean;
};

export const ai24Seo = {
  title: 'AI24, Inc. — AI systems and digital infrastructure for cultural organizations',
  description:
    'Miami-based creative technology and AI systems company helping cultural institutions, creative businesses, and mission-driven organizations turn fragmented operations into usable digital infrastructure.',
  keywords: [
    'AI24',
    'AI24 Inc',
    'ai24.live',
    'creative technology',
    'AI systems',
    'cultural institutions',
    'Airtable',
    'n8n',
    'Make',
    'Next.js',
    'Miami',
    'Moises Sanabria',
  ],
  canonical: `${SITE}/ai24`,
  ogImage: AI24_WEBSITE_HERO_IMAGE,
  ogImageAlt: 'AI24 website — above-the-fold product and program hub',
} as const;

export const ai24Page = {
  liveUrl: AI24_LIVE,
  liveLabel: 'www.ai24.live',
  logoSrc: AI24_LOGO_SIMPLE,
  logoAlt: 'AI24',

  nav: [
    { id: 'overview', label: 'Overview' },
    { id: 'categories', label: 'Categories' },
    { id: 'proof', label: 'Work' },
    { id: 'approach', label: 'Approach' },
    { id: 'audiences', label: 'Audiences' },
    { id: 'founder', label: 'Founder' },
    { id: 'contact', label: 'Contact' },
  ] satisfies Ai24NavItem[],

  hero: {
    eyebrow: 'Miami · Creative technology · AI systems',
    title: 'AI24, Inc.',
    tagline: 'AI systems, automation, and web applications for cultural and creative organizations.',
    subhead:
      'We turn fragmented workflows, information, and institutional knowledge into useful digital infrastructure.',
    imageSrc: AI24_WEBSITE_HERO_IMAGE,
    imageAlt: 'AI24.live — above-the-fold product and program hub',
    logoSrc: AI24_LOGO_SIMPLE,
    logoAlt: 'AI24 logo',
    primaryCta: { label: 'Visit AI24.live', href: AI24_LIVE, external: true },
    secondaryCta: { label: 'Discuss a project', href: '#contact', external: false },
  },

  positioning:
    'AI24, Inc. is a Miami-based creative technology and AI systems company that helps cultural institutions, creative businesses, and mission-driven organizations turn fragmented operations into usable digital infrastructure.',

  categoriesTitle: 'What we build',
  categoriesIntro:
    'Six color-coded practice areas with icons. Tap a card to expand capabilities and detail.',
  categories: [
    {
      id: 'ai-automation',
      title: 'AI + Automation',
      summary: 'Language-model workflows, agents, and automation that stay operable.',
      icon: 'bot',
      accent: 'teal',
      items: [
        'LLM integrations and prompt orchestration',
        'n8n and Make automation',
        'Human-in-the-loop review paths',
        'Structured outputs into Airtable and ops tools',
      ],
      detail:
        'We design AI that fits real institutional constraints: permissions, review gates, failure modes, and handoff documentation — not demos that die after the workshop.',
    },
    {
      id: 'web-apps',
      title: 'Web Applications',
      summary: 'TypeScript / Next.js products, portals, and dashboards.',
      icon: 'layout',
      accent: 'sky',
      items: [
        'Public program and institutional sites',
        'Internal tools and staff portals',
        'Dashboards and operational UIs',
        'Auth, data models, and API integrations',
      ],
      detail:
        'Full-stack delivery with maintainable TypeScript, clear information architecture, and interfaces non-technical teams can actually use.',
    },
    {
      id: 'ops-systems',
      title: 'Operating Systems',
      summary: 'Airtable bases, pipelines, and institutional memory.',
      icon: 'database',
      accent: 'emerald',
      items: [
        'Airtable operating systems',
        'Knowledge and document workflows',
        'Inbox and CRM-adjacent triage',
        'Sync between tools teams already use',
      ],
      detail:
        'Operational systems that turn scattered spreadsheets and inboxes into triageable records with automation and AI assist where it helps.',
    },
    {
      id: 'creative-tech',
      title: 'Creative Technology',
      summary: 'Installations, media systems, and studio-facing infrastructure.',
      icon: 'palette',
      accent: 'amber',
      items: [
        'Interactive installations',
        'Media production tooling',
        'Hardware–software integration',
        'Studio and lab digital infrastructure',
      ],
      detail:
        'Creative-tech systems that connect artistic practice to institutional operations — visibility, access, and reliability in real spaces.',
    },
    {
      id: 'education',
      title: 'Workshops + Training',
      summary: 'AI literacy and hands-on adoption for teams and artists.',
      icon: 'graduation',
      accent: 'rose',
      items: [
        'Public and institutional workshops',
        'Team onboarding to new tools',
        'Curriculum and repeatable session formats',
        'Critical AI literacy without hype',
      ],
      detail:
        'Training that leaves runbooks and confidence behind — so institutions are not dependent on a single contractor forever.',
    },
    {
      id: 'institutional',
      title: 'Institutional Infrastructure',
      summary: 'Programs, labs, and digital presence for cultural orgs.',
      icon: 'building',
      accent: 'slate',
      items: [
        'Digital Lab and program operations',
        'Documentation and support models',
        'Stakeholder communication systems',
        'Long-term stewardship planning',
      ],
      detail:
        'Infrastructure work for organizations that need systems people will keep using after launch day.',
    },
  ] satisfies Ai24Category[],

  audiences: {
    title: 'Who we work with',
    items: [
      { label: 'Cultural institutions', icon: 'building' as const },
      { label: 'Arts organizations', icon: 'palette' as const },
      { label: 'Artists and creative studios', icon: 'sparkles' as const },
      { label: 'Mission-driven businesses', icon: 'compass' as const },
      { label: 'Teams adopting AI without an internal engineering staff', icon: 'users' as const },
    ],
  },

  proof: {
    title: 'Selected work',
    intro: 'Institutional and product surfaces — with links to dossiers and AI24.live.',
    cards: [
      {
        id: 'ai24-live',
        title: 'AI24.live — product and program hub',
        categoryLabel: 'Web + education',
        accent: 'cyan',
        summary:
          'Public hub for AI literacy, tools, and cultural R&D — the live face of AI24 programs and applied systems.',
        imageSrc: AI24_WEBSITE_HERO_IMAGE,
        imageAlt: 'AI24.live website above-the-fold',
        externalHref: AI24_LIVE,
        externalLabel: 'Open www.ai24.live',
      },
      {
        id: 'oolite-digital-lab',
        title: 'Oolite Digital Lab',
        categoryLabel: 'Institutional',
        accent: 'slate',
        summary:
          'Technical direction for Oolite Arts Digital Lab — fabrication, media production, AI literacy, lab operations, documentation, and stakeholder support.',
        href: '/projects/oolite-digital-lab',
        hrefLabel: 'Project dossier',
        externalHref: 'https://oolitearts.org/digital-lab/',
        externalLabel: 'Oolite Digital Lab',
        imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
        imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
      {
        id: 'bakehouse-institutional-systems',
        title: 'Bakehouse / institutional systems',
        categoryLabel: 'Creative tech',
        accent: 'amber',
        summary:
          'Digital presence and institutional systems — including smart signage for artists, events, and studio activity that makes program life more visible.',
        href: '/projects/infra24',
        hrefLabel: 'Infra24 / Smart Sign',
        imageSrc:
          'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
        imageAlt: 'Smart signage and digital infrastructure deployment',
      },
      {
        id: 'airtable-ai-ops',
        title: 'Airtable + AI operational systems',
        categoryLabel: 'Ops systems',
        accent: 'emerald',
        summary:
          'Operating systems connecting Airtable with n8n, Make, and LLM workflows — turning inbox volume and institutional records into triageable operational data.',
        imageSrc:
          'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
        imageAlt: 'Operational systems — Airtable and automation workflows',
        externalHref: AI24_LIVE,
        externalLabel: 'See AI24.live',
      },
      {
        id: 'n8n-agent',
        title: 'Production agentic workflows',
        categoryLabel: 'AI + automation',
        accent: 'teal',
        summary: automationProjectSpecs['n8n-gmail-intelligence'].summary,
        imageSrc: automationProjectSpecs['n8n-gmail-intelligence'].imageSrc,
        imageAlt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
        imageLocal: true,
        externalHref: AI24_LIVE,
        externalLabel: 'AI24.live context',
      },
    ] satisfies Ai24ProofCard[],
  },

  approach: {
    title: 'How we work',
    intro: 'Expand each stage — strategy first, then fixed-scope delivery, support, and training.',
    items: [
      {
        id: 'audit',
        title: '01 · Strategy and workflow audit',
        body: 'Map existing tools, handoffs, and information gaps before proposing systems.',
        defaultOpen: true,
      },
      {
        id: 'implement',
        title: '02 · Fixed-scope implementation',
        body: 'Ship defined web apps, Airtable bases, and automation with clear deliverables.',
      },
      {
        id: 'support',
        title: '03 · Ongoing systems support',
        body: 'Maintain, adjust, and extend infrastructure as institutional needs change.',
      },
      {
        id: 'train',
        title: '04 · Workshops and organizational training',
        body: 'Teach teams to use and steward the systems after delivery.',
      },
    ] satisfies Ai24Expandable[],
  },

  growth: {
    title: 'Current growth direction',
    body: 'AI24 is moving from founder-dependent custom work toward productized services, diversified clients, recurring support revenue, clean financial operations, and scalable delivery — so institutional partners get reliable infrastructure rather than one-off projects that only the founder can maintain.',
  },

  founder: {
    title: 'Founder',
    name: 'Moises Sanabria',
    role: 'Founder · AI Engineer · Creative Technologist',
    body: 'Builds TypeScript and Next.js web applications, Airtable operating systems, and Make and n8n automation for cultural and creative organizations. Prior AI startup experience informs product judgment; a sculpture and media art practice, with a studio at Bakehouse Art Complex, anchors the work in institutional and cultural contexts.',
    imageSrc: moisesSanabriaHeadshot,
    imageAlt: 'Moises Sanabria',
    profileHref: '/cv/tech',
    profileLabel: 'Technology CV',
  },

  research: {
    title: 'Research and artistic differentiation',
    body: 'Born into the Machine is a longer research thread on intelligence as infrastructure — attention, adaptation, and agency under machine systems. It informs AI24’s cultural judgment without replacing the company focus on usable digital infrastructure.',
    href: '/research/born-into-the-machine',
    label: 'Born into the Machine',
  },

  faq: [
    {
      id: 'what-is-ai24',
      title: 'Is AI24 a product company or a services studio?',
      body: 'Both, deliberately. AI24.live is the public product and program surface; AI24, Inc. also delivers fixed-scope systems and training for cultural and creative organizations.',
      defaultOpen: true,
    },
    {
      id: 'ai-hype',
      title: 'Do you install chatbots for the sake of AI?',
      body: 'No. We start from workflows, permissions, and what staff will actually operate. AI is a component when it reduces toil or unlocks access — not a default headline feature.',
    },
    {
      id: 'maintain',
      title: 'What happens after launch?',
      body: 'Documentation, training, and optional ongoing support so systems do not collapse into founder-only knowledge.',
    },
  ] satisfies Ai24Expandable[],

  cta: {
    title: 'Discuss a project',
    body: 'If you need digital infrastructure for a cultural institution, creative business, or mission-driven organization, start a conversation — or explore the live hub.',
    email: 'm@moises.tech',
    emailHref: 'mailto:m@moises.tech?subject=AI24%20project',
    linkedinHref: 'https://www.linkedin.com/in/moisesdsanabria',
    linkedinLabel: 'LinkedIn',
    selectedWorkHref: '/selected-works',
    selectedWorkLabel: 'Selected work',
    liveHref: AI24_LIVE,
    liveLabel: 'Visit www.ai24.live',
  },
} as const;
