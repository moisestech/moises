/**
 * /institutions — institutional technology services page.
 * Organizations and case studies must match verified site/CV evidence.
 * Do not invent affiliations. Application-only orgs stay out of the worked-with list.
 */

import {
  AI24_WEBSITE_HERO_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
  evidenceProjects,
} from '@/content/evidence/projects';
import { institutionsDigitalSystemsBanner } from '@/content/evidence/applicationBanners';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import type { OpportunityAudienceKeywords } from '@/content/opportunities/types';
import { N8N_LOGO } from '@/constants/art-of-ai-agents';
import { digilabAsset } from '@/content/oolite-arts/media';
import {
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_EMAIL,
  INSTITUTIONAL_SERVICES_AVAILABILITY,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const jobsCdn = CDN;
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;
const BAKEHOUSE_STUDIO = `${CDN}/v1783907488/art/moisestech-website/studio/moises-sanabria-open-studios-red-world-eye-2024_zdyayj.jpg`;
const LOCUST_IMAGE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786389637/dccmiami/workshops/the-art-of-ai-agents/the-art-of-ai-agents-locust-projects-the-dill-2026_abkuj1.jpg';
const SMART_SHOPPERS = `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`;
const TOUCH_GRASS = `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`;
const MOMUS = `${CDN}/v1740950484/art/moisestech-website/exhibitions/apr_2025_technofetishism_momus/momus-exhibition-banner_uun9rx.jpg`;
const ICA_NOTIONS = `${CDN}/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg`;
const TRANSMEDIALE = `${CDN}/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png`;
const AFIRME = `${CDN}/v1751123479/art/moisestech-website/exhibitions/june_2025_algoritmica_intima_cdmx/algoritmica-intima-exhibitions-june-2025_zmg4mq.jpg`;
const N8N_DIAGRAM = `${CDN}/v1786386766/dccmiami/workshops/the-art-of-ai-agents/n8n-diagram-email-inbox-organizer_nqwn9r.png`;
const DCC = evidenceProjects['digital-culture-infrastructure'];

export type OrgRelationship =
  | 'lab'
  | 'residency'
  | 'employment'
  | 'exhibition'
  | 'workshop'
  | 'platform'
  | 'funder'
  | 'education'
  | 'festival';

export type InstitutionOrg = {
  id: string;
  name: string;
  location: string;
  relationship: OrgRelationship;
  relationshipLabel: string;
  summary: string;
  href?: string;
  external?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  /** Shown in the compact archive before “View full experience”. */
  archiveFeatured?: boolean;
};

export type InstitutionCaseStudy = {
  id: string;
  title: string;
  org: string;
  kind: 'systems' | 'program' | 'exhibition' | 'platform' | 'workshop';
  kindLabel: string;
  body: string;
  href: string;
  external?: boolean;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
};

export type PracticeLaneId =
  | 'web-salesforce'
  | 'automation-operations'
  | 'livestream-production'
  | 'digital-labs-programs';

export type PracticeLaneAccent = 'web' | 'automation' | 'live' | 'lab';

export type PracticeLane = {
  id: PracticeLaneId;
  index: string;
  title: string;
  description: string;
  solves: string;
  href: string;
  linkLabel: string;
  accent: PracticeLaneAccent;
  icon: 'database' | 'workflow' | 'radio' | 'flask';
  proofTags: string[];
  stack: LogoBandItem[];
};

export const ORG_RELATIONSHIP_LABELS: Record<OrgRelationship, string> = {
  lab: 'Employment · Lab operations',
  residency: 'Residency',
  employment: 'Employment',
  exhibition: 'Exhibition',
  workshop: 'Teaching / workshop',
  platform: 'Platform',
  funder: 'Funder context',
  education: 'Education',
  festival: 'Exhibition / festival',
};

const STACK = {
  salesforce: {
    src: 'https://cdn.simpleicons.org/salesforce/00A1E0',
    alt: 'Salesforce',
    height: 28,
  },
  wordpress: {
    src: 'https://cdn.simpleicons.org/wordpress/21759B',
    alt: 'WordPress',
    height: 28,
  },
  bloomerang: {
    src: '/images/tech-logos/bloomerang.svg',
    alt: 'Bloomerang',
    height: 28,
  },
  airtable: {
    src: `${jobsCdn}/v1783032752/jobs/airtable_logo_xserwf.png`,
    alt: 'Airtable',
    height: 28,
  },
  n8n: { src: N8N_LOGO.src, alt: N8N_LOGO.alt, height: 28 },
  obs: {
    src: 'https://cdn.simpleicons.org/obsstudio/302E31',
    alt: 'OBS Studio',
    height: 28,
  },
  aws: { src: '/images/tech-logos/aws.svg', alt: 'AWS', height: 28 },
  github: { src: '/images/tech-logos/github.svg', alt: 'GitHub', height: 28 },
} as const satisfies Record<string, LogoBandItem>;

export const institutionsLogoBand: LogoBandItem[] = [
  STACK.salesforce,
  STACK.wordpress,
  STACK.bloomerang,
  STACK.airtable,
  STACK.n8n,
  STACK.obs,
  STACK.aws,
  STACK.github,
  { src: 'https://cdn.simpleicons.org/zoom/2D8CFF', alt: 'Zoom', height: 36 },
  { src: 'https://cdn.simpleicons.org/youtube/FF0000', alt: 'YouTube', height: 36 },
];

export const institutionsAudienceKeywords: OpportunityAudienceKeywords = {
  lead: 'I work inside the software cultural organizations already use—',
  terms: [
    {
      label: 'Salesforce',
      detail: 'Collection data, membership, registration, and reporting connected to public web systems.',
    },
    {
      label: 'web support',
      detail: 'WordPress, CMS, SEO, forms, and site maintenance without a new vendor for every update.',
    },
    {
      label: 'automation',
      detail: 'Intake, booking, communications, and documentation with human review and handoff.',
    },
    {
      label: 'livestreaming',
      detail: 'OBS production, captions, hybrid events, and reusable media workflows for public programs.',
    },
  ],
};

export const institutionsHub = {
  meta: {
    title: 'Digital Systems for Arts Institutions — Moises Sanabria',
    description:
      'Moises Sanabria builds web, Salesforce, automation, livestreaming, and digital-lab systems for museums, arts organizations, and artist-facing programs.',
    url: 'https://moises.tech/institutions',
  },
  banner: institutionsDigitalSystemsBanner,
  bannerNote: null as string | null,
  logoBand: institutionsLogoBand,
  logoBandLabel: 'Institutional software and production tools',
  audienceKeywords: institutionsAudienceKeywords,
  profile: {
    src: digilabAsset('portrait.moises').src,
    alt: digilabAsset('portrait.moises').alt,
    label: 'Profile',
  },
  hero: {
    eyebrow: 'Institutional technology · Miami',
    headline: 'Digital systems for museums, arts organizations, and artist-facing programs.',
    lead:
      'I help cultural organizations improve the systems behind their public programs—from websites, Salesforce, and operational automation to livestreaming, digital production, and creative-technology labs.',
    support:
      'With previous experience inside ICA Miami and recent technical direction at Oolite Arts, I can step into existing institutional environments quickly, reduce vendor handoffs, and move focused projects from diagnosis to implementation.',
    availability: INSTITUTIONAL_SERVICES_AVAILABILITY,
    availabilityLabel: 'Currently available · project-based + fractional engagements',
    primaryCta: {
      label: 'Discuss a project',
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: 'View selected institutional work',
      href: '#work',
      external: false,
    },
    collage: {
      main: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
        caption: 'Oolite Digital Lab — operated environment for artist programs.',
      },
      teaching: {
        src: digilabAsset('workshop.art-tech-coding').src,
        alt: digilabAsset('workshop.art-tech-coding').alt,
        caption: 'Creative-coding workshop in use.',
      },
      workflow: {
        src: N8N_DIAGRAM,
        alt: 'n8n workflow diagram for an email inbox organizer used in artist automation teaching',
        caption: 'Automation workflow — human review built in.',
      },
      captionCard: 'ICA Miami · Digital Producer · 2019–2020',
    },
  },
  nav: [
    { id: 'top', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'system', label: 'System' },
    { id: 'work', label: 'Selected work' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'engage', label: 'Engage' },
    { id: 'archive', label: 'Experience' },
  ],
  proof: {
    eyebrow: 'Institutional context',
    items: [
      {
        id: 'ica',
        name: 'ICA Miami',
        role: 'Digital Producer',
        dates: '2019–2020',
        accent: 'web' as PracticeLaneAccent,
        href: '/ica-miami',
      },
      {
        id: 'oolite',
        name: 'Oolite Arts',
        role: 'Technical Director of Digital',
        dates: '2025–2026',
        accent: 'lab' as PracticeLaneAccent,
        href: '/oolite-arts',
      },
      {
        id: 'bakehouse',
        name: 'Bakehouse Art Complex',
        role: 'Studio 43 · institutional systems',
        dates: 'Active',
        accent: 'automation' as PracticeLaneAccent,
        href: '/bakehouse',
      },
      {
        id: 'ai24',
        name: 'AI24 / DCC Miami',
        role: 'Artist-owned cultural-technology practice',
        dates: 'Ongoing',
        accent: 'live' as PracticeLaneAccent,
        href: 'https://dcc.miami',
        external: true,
      },
    ],
  },
  lanes: [
    {
      id: 'web-salesforce',
      index: '01',
      title: 'Web and Salesforce systems',
      description:
        'Website management, CMS support, Salesforce integrations, registration and membership workflows, forms, analytics, search, and SEO.',
      solves: 'Keeps public sites, CRM data, and registration in one maintainable system.',
      href: '#work-ica',
      linkLabel: 'ICA systems case study',
      accent: 'web',
      icon: 'database',
      proofTags: ['ICA Miami', 'WordPress', 'Salesforce', 'GraphQL', 'AWS CloudFront', 'Registration'],
      stack: [STACK.salesforce, STACK.wordpress, STACK.bloomerang, STACK.aws],
    },
    {
      id: 'automation-operations',
      index: '02',
      title: 'Automation and digital operations',
      description:
        'Reporting, intake, booking, communications, documentation, and repetitive administrative workflows designed with human review and handoff.',
      solves: 'Removes repetitive handoffs so staff time goes back to programs.',
      href: '#work-bakehouse',
      linkLabel: 'Bakehouse systems',
      accent: 'automation',
      icon: 'workflow',
      proofTags: ['Airtable', 'n8n / Make', 'APIs', 'Structured outputs', 'Documentation'],
      stack: [STACK.airtable, STACK.n8n],
    },
    {
      id: 'livestream-production',
      index: '03',
      title: 'Livestreaming and digital production',
      description:
        'Public programs, member events, webinars, OBS production, captioning, hybrid events, and reusable media workflows.',
      solves: 'Makes public programs reach remote audiences without a new vendor every time.',
      href: '#work-ica',
      linkLabel: 'ICA digital production',
      accent: 'live',
      icon: 'radio',
      proofTags: ['ICA Miami Channel', 'OBS', 'Zoom webinars', 'Captions', 'YouTube', 'After Effects'],
      stack: [STACK.obs],
    },
    {
      id: 'digital-labs-programs',
      index: '04',
      title: 'Digital labs and artist programs',
      description:
        'Technical infrastructure, equipment planning, fabrication workflows, workshops, documentation, and artist support.',
      solves: 'Turns a room of tools into an artist-facing program that staff can keep running.',
      href: '#work-oolite',
      linkLabel: 'Oolite Digital Lab',
      accent: 'lab',
      icon: 'flask',
      proofTags: ['Oolite Arts', '3D printing', '3D scanning', 'VR', 'Laser cutting', 'Creative coding'],
      stack: [],
    },
  ] satisfies PracticeLane[],
  system: {
    eyebrow: 'Operating method',
    title: 'Need → system → use → evidence → continued capacity',
    caption:
      'The deliverable is not only the tool. It is the organization’s ability to keep using it.',
    callout:
      'At Oolite, equipment, workshops, open-lab support, documentation, and artist access operated as one connected program. That same logic can be adapted to web systems, Salesforce workflows, public media, or institutional AI.',
    steps: [
      {
        id: 'listen',
        title: 'Listen',
        body: 'Map institutional, staff, artist, and audience needs.',
      },
      {
        id: 'connect',
        title: 'Connect',
        body: 'Align existing space, software, hardware, and people.',
      },
      {
        id: 'build',
        title: 'Build',
        body: 'Ship a workflow, platform, program, or production system.',
      },
      {
        id: 'adopt',
        title: 'Adopt',
        body: 'Support staff and artists through use, teaching, and iteration.',
      },
      {
        id: 'document',
        title: 'Document',
        body: 'Leave reusable systems and institutional memory.',
      },
    ],
  },
  flagship: [
    {
      id: 'oolite',
      slug: 'oolite-arts',
      institution: 'Oolite Arts',
      headline: 'From a room of tools to an artist-facing digital program.',
      role: 'Technical Director of Digital',
      dates: '2025–2026',
      statusLabel: 'Operated / delivered',
      status: 'operated' as const,
      primaryLane: 'lab' as PracticeLaneAccent,
      summary:
        'Technical direction connecting lab infrastructure, operations, booking, workshops, fabrication, vendors, and documentation into one artist-facing program.',
      proofSequence: [
        { stage: 'Need', text: 'A new lab, tools, and an artist-support mandate.' },
        {
          stage: 'Intervention',
          text: 'Layout, equipment and software readiness, workshops, open lab, vendor coordination, fabrication workflows, documentation.',
        },
        {
          stage: 'Adoption',
          text: 'Published open-lab days, English and Spanish support, workshops, consultations, and return visits.',
        },
        {
          stage: 'Capacity',
          text: 'Documented workflows and a reusable institutional model.',
        },
      ],
      facts: [
        { value: 'Tue / Thu', label: 'Published open-lab days', verification: 'public' as const },
        { value: '10–5', label: 'Published hours', verification: 'public' as const },
        { value: 'EN / ES', label: 'Language support', verification: 'public' as const },
        { value: '10', label: 'Artist Website workshop capacity', verification: 'public' as const },
        { value: '8', label: 'Resin workshop capacity', verification: 'public' as const },
      ],
      media: [
        {
          src: OOLITE_DIGITAL_LAB_IMAGE,
          alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
        },
        {
          src: digilabAsset('workshop.art-tech-coding').src,
          alt: digilabAsset('workshop.art-tech-coding').alt,
        },
        {
          src: digilabAsset('workshop.resin-2026').src,
          alt: digilabAsset('workshop.resin-2026').alt,
        },
      ],
      href: '/oolite-arts',
      cta: 'Open Oolite case study',
    },
    {
      id: 'ica',
      slug: 'ica-miami',
      institution: 'ICA Miami',
      headline: 'Connecting museum data, public programming, and digital audiences.',
      role: 'Digital Producer',
      dates: 'October 2019–December 2020',
      statusLabel: 'Employment / operated',
      status: 'operated' as const,
      primaryLane: 'web' as PracticeLaneAccent,
      summary:
        'Salesforce-to-WordPress workflows, ticketing, website management, livestreaming, interactive video, cloud infrastructure, SEO, and vendor coordination.',
      proofSequence: [
        {
          stage: 'Need',
          text: 'Digital autonomy, faster updates, connected collection and program data, remote programs.',
        },
        {
          stage: 'Intervention',
          text: 'Web and data integration, vendor coordination, streaming workflows, captioning, forms, reporting, and production.',
        },
        {
          stage: 'Adoption',
          text: 'Cross-department use across development, external affairs, education, curatorial, and programs.',
        },
        {
          stage: 'Capacity',
          text: 'Lower vendor friction and reusable public-program workflows.',
        },
      ],
      facts: [
        { value: 'Salesforce', label: 'Collection data → WordPress / ticketing', verification: 'public' as const },
        { value: 'WordPress', label: 'Site management, GitHub, GraphQL, CloudFront', verification: 'public' as const },
        { value: 'OBS', label: 'Livestreaming, YouTube, captions, After Effects', verification: 'public' as const },
      ],
      media: [],
      href: '/ica-miami',
      cta: 'Open ICA systems case study',
      diagram: true,
    },
    {
      id: 'bakehouse',
      slug: 'bakehouse',
      institution: 'Bakehouse Art Complex',
      headline: 'Building artist-owned infrastructure inside an existing creative community.',
      role: 'Studio 43 resident · institutional systems',
      dates: 'Ongoing',
      statusLabel: 'Mixed — labeled by module',
      status: 'active' as const,
      primaryLane: 'automation' as PracticeLaneAccent,
      summary:
        'SmartSigns, kiosk infrastructure, artist-facing systems, and portal planning—with shipped work separated from proposed work.',
      proofSequence: [
        {
          stage: 'Need',
          text: 'Make artist and program activity visible without recurring ad-hoc file drops.',
        },
        {
          stage: 'Intervention',
          text: 'Reusable vertical display formats, device and content workflow, portal and governance planning.',
        },
        {
          stage: 'Adoption',
          text: 'Active operational coordination and handoff in progress.',
        },
        {
          stage: 'Capacity',
          text: 'A future shared content model across screens, portal, programs, and staff workflows.',
        },
      ],
      facts: [
        { value: 'Shipped', label: 'SmartSigns + Raspberry Pi / Anthias displays', verification: 'public' as const },
        { value: 'Proposed', label: 'Artist Portal on Assembly', verification: 'public' as const },
        { value: 'Future', label: 'Connected digital lab and communications partnership', verification: 'public' as const },
      ],
      modules: [
        { status: 'shipped' as const, label: 'Shipped / active implementation', text: 'SmartSigns and Raspberry Pi / Anthias display infrastructure.' },
        { status: 'proposed' as const, label: 'Proposed', text: 'Artist Portal on Assembly.' },
        { status: 'proposed' as const, label: 'Future opportunity', text: 'Connected digital lab, communications, and programming partnership.' },
      ],
      media: [
        {
          src: BAKEHOUSE_IMAGE,
          alt: 'Bakehouse Art Complex — open studios and public-facing cultural context',
        },
      ],
      href: '/bakehouse',
      cta: 'Open Bakehouse systems case study',
    },
  ],
  additionalEvidence: [
    {
      id: 'locust-ai-agents',
      title: 'The Art of AI Agents',
      org: 'Locust Projects',
      kind: 'workshop',
      kindLabel: 'Workshop',
      body: 'Public workshop and talk on artist task automation, agents, and human review—delivered in a Miami contemporary art context.',
      href: '/workshop/the-art-of-ai-agents',
      imageSrc: LOCUST_IMAGE,
      imageAlt: 'The Art of AI Agents workshop at Locust Projects',
    },
    {
      id: 'dcc-miami',
      title: 'Digital Culture Center Miami',
      org: 'DCC Miami',
      kind: 'platform',
      kindLabel: 'Platform',
      body: 'Artist-owned cultural-technology practice—institutional platforms and the operating name for embedded Digital Lab partnerships.',
      href: DCC.href ?? 'https://dcc.miami',
      external: true,
      imageSrc: DCC.imageSrc,
      imageAlt: DCC.imageAlt,
    },
    {
      id: 'ai24-studio',
      title: 'AI24 — cultural R&D and literacy',
      org: 'AI24',
      kind: 'program',
      kindLabel: 'Program · Platform',
      body: 'AI literacy, tools, and cultural R&D systems for artists and institutions—education, prototypes, and public-facing programs.',
      href: '/ai24',
      imageSrc: AI24_WEBSITE_HERO_IMAGE,
      imageAlt: 'AI24 website — program and product hub',
    },
    {
      id: 'munag-continuum',
      title: 'CONTINUUM — Smart Shoppers',
      org: 'MUNAG · Fundación Paiz',
      kind: 'exhibition',
      kindLabel: 'Exhibition',
      body: 'International museum exhibition of Smart Shoppers / Price of Existence—cognition staged as consumer product within CONTINUUM.',
      href: '/art/smart-shoppers',
      imageSrc: SMART_SHOPPERS,
      imageAlt: 'Smart Shoppers — CONTINUUM exhibition work',
    },
    {
      id: 'chroma-touch-grass',
      title: 'Touch Grass / Doomscrolling',
      org: 'Chroma Art Film Festival · Superblue',
      kind: 'exhibition',
      kindLabel: 'Festival install',
      body: 'Public festival installation staging attention, bodies, and platform governance.',
      href: '/art/doomscrolling_treadmill',
      imageSrc: TOUCH_GRASS,
      imageAlt: 'Doomscrolling Treadmill / Touch Grass festival install',
    },
    {
      id: 'momus-technofetishism',
      title: 'Technofetishism',
      org: 'MOMus — Thessaloniki',
      kind: 'exhibition',
      kindLabel: 'Exhibition',
      body: 'International exhibition at MOMus Experimental Center for the Arts.',
      href: '/calendar/exhibitions',
      imageSrc: MOMUS,
      imageAlt: 'MOMus Technofetishism exhibition banner',
    },
  ] satisfies InstitutionCaseStudy[],
  process: {
    eyebrow: 'How work begins',
    title: 'Review, then build, then leave it usable',
    reassurance: [
      'Works with existing tools',
      'Human review for AI/automation',
      'Clear shipped / proposed labeling',
      'Documentation included',
      'Scope and ownership defined',
    ],
    steps: [
      {
        id: 'review',
        icon: 'search' as const,
        title: 'Technical review',
        body: 'Map tools, owners, handoffs, bottlenecks, permissions, and current costs. Define what should be repaired, automated, connected, or left alone.',
      },
      {
        id: 'build',
        icon: 'wrench' as const,
        title: 'Build',
        body: 'Deliver a focused implementation with clear scope, review gates, evidence, and practical staff involvement.',
      },
      {
        id: 'support',
        icon: 'layers' as const,
        title: 'Support and handoff',
        body: 'Document the system, train the people using it, measure adoption, and establish the next maintenance rhythm.',
      },
    ],
  },
  engagement: {
    eyebrow: 'Start with the right scope',
    title: 'Three ways to begin',
    lead: 'Tell me what is slowing your team down.',
    modes: [
      {
        id: 'review',
        title: 'Technical review',
        duration: '2–4 weeks',
        outcome:
          'System map, bottleneck analysis, risk list, prioritized roadmap, and implementation options.',
        bestFor:
          'Institutions unsure whether the problem is the website, CRM, workflow, vendor structure, or ownership.',
        icon: 'search' as const,
      },
      {
        id: 'project',
        title: 'Focused project',
        duration: '4–12 weeks',
        outcome:
          'One clearly defined system, integration, workflow, public program, or technical production setup—shipped and documented.',
        bestFor: 'A known bottleneck with a bounded owner and a shippable artifact.',
        icon: 'wrench' as const,
      },
      {
        id: 'fractional',
        title: 'Fractional support',
        duration: 'Monthly / term-based',
        outcome:
          'Ongoing webmaster, automation, digital production, or technical leadership embedded alongside staff and vendors.',
        bestFor: 'Teams that need continuity without a full-time hire or another vendor handoff.',
        icon: 'layers' as const,
      },
    ],
    primaryCta: {
      label: 'Schedule a 20-minute conversation',
      href: INSTITUTIONAL_CALENDLY_URL,
    },
    secondaryCta: {
      label: 'Email Moises',
      href: `mailto:${INSTITUTIONAL_EMAIL}`,
    },
  },
  contact: {
    headline:
      'A website problem is often a workflow problem. A workflow problem is often an ownership problem. Let’s map the system.',
    body: 'I am currently available for focused projects, technical reviews, institutional workshops, and fractional digital support in Miami and remotely.',
    image: {
      src: digilabAsset('portrait.moises').src,
      alt: digilabAsset('portrait.moises').alt,
    },
    cvHref: '/cv/tech',
    email: INSTITUTIONAL_EMAIL,
  },
  artBand: {
    title: 'Cultural judgment is part of the technical work.',
    body: 'My artistic practice keeps the systems work accountable to the cultural questions institutions actually hold: authorship, attention, labor, access, value, and the public meaning of technology.',
    items: [
      { src: SMART_SHOPPERS, alt: 'Smart Shoppers sculpture', href: '/art/smart-shoppers', label: 'Smart Shoppers / CONTINUUM · MUNAG' },
      { src: TOUCH_GRASS, alt: 'Touch Grass / Doomscrolling installation', href: '/art/doomscrolling_treadmill', label: 'Touch Grass · Chroma / Superblue' },
      { src: MOMUS, alt: 'Technofetishism at MOMus', href: '/calendar/exhibitions', label: 'Technofetishism · MOMus' },
      { src: AFIRME, alt: 'Algoritmica Intima exhibition', href: '/calendar/exhibitions', label: 'Algoritmica Intima · Mexico City' },
    ],
  },
  organizations: [
    {
      id: 'oolite',
      name: 'Oolite Arts',
      location: 'Miami Beach, FL',
      relationship: 'lab',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.lab,
      summary:
        'Technical Director of Digital — Knight-supported Digital Lab: workshops, fabrication, documentation, and artist support. With Director of Digital Lab Fabiola Larios.',
      href: '/oolite-arts',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      archiveFeatured: true,
    },
    {
      id: 'ica',
      name: 'Institute of Contemporary Art, Miami',
      location: 'Miami, FL',
      relationship: 'employment',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.employment,
      summary: 'Digital Producer (2019–2020): Salesforce–WordPress workflows, website management, livestreaming, SEO, and vendor coordination.',
      href: '/ica-miami',
      archiveFeatured: true,
    },
    {
      id: 'bakehouse',
      name: 'Bakehouse Art Complex',
      location: 'Miami, FL',
      relationship: 'residency',
      relationshipLabel: 'Residency · institutional systems',
      summary:
        'Studio 43 residency; SmartSigns / Anthias display systems; open studios; proposed Artist Portal on Assembly.',
      href: '/bakehouse',
      imageSrc: BAKEHOUSE_STUDIO,
      imageAlt: 'Bakehouse Art Complex — Studio 43 and open studios context',
      archiveFeatured: true,
    },
    {
      id: 'locust',
      name: 'Locust Projects',
      location: 'Miami, FL',
      relationship: 'workshop',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.workshop,
      summary: 'Public workshops and talks including The Art of AI Agents / Artist in the Automation.',
      href: '/workshop/the-art-of-ai-agents',
      imageSrc: LOCUST_IMAGE,
      imageAlt: 'Workshop at Locust Projects',
      archiveFeatured: true,
    },
    {
      id: 'dcc',
      name: 'Digital Culture Center Miami (DCC Miami)',
      location: 'Miami, FL',
      relationship: 'platform',
      relationshipLabel: 'Artist-owned practice · Platform',
      summary:
        'Artist-owned cultural-technology practice—institutional platforms and the operating name for embedded Digital Lab partnerships.',
      href: 'https://dcc.miami',
      external: true,
      imageSrc: DCC.imageSrc,
      imageAlt: DCC.imageAlt,
      archiveFeatured: true,
    },
    {
      id: 'mdc-idea',
      name: 'MDC Idea Center',
      location: 'Miami, FL',
      relationship: 'education',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.education,
      summary: 'AI Sprint for Artists — workshop and education partnership.',
      href: '/workshops',
      archiveFeatured: true,
    },
    {
      id: 'knight',
      name: 'John S. and James L. Knight Foundation',
      location: 'Miami / national',
      relationship: 'funder',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.funder,
      summary: 'Funder of Oolite Arts Digital Lab; related civic-technology and proposal work archived on site. Not a direct employer.',
      href: '/grant/knight-foundation',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      id: 'museum-of-sex',
      name: 'Museum of Sex Miami',
      location: 'Miami, FL',
      relationship: 'exhibition',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.exhibition,
      summary: 'F*ck Art: Nature & Artifice — Taste the Algorithm.',
      href: '/calendar/exhibitions',
    },
    {
      id: 'munag',
      name: 'MUNAG — National Museum of Art of Guatemala',
      location: 'Guatemala',
      relationship: 'exhibition',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.exhibition,
      summary: 'CONTINUUM — Smart Shoppers and The Price of Existence (with collaborators).',
      href: '/art/smart-shoppers',
      imageSrc: SMART_SHOPPERS,
      imageAlt: 'Smart Shoppers exhibition work',
    },
    {
      id: 'paiz',
      name: 'Fundación Paiz',
      location: 'Guatemala',
      relationship: 'exhibition',
      relationshipLabel: 'Exhibition partner',
      summary: 'Support / partner context for CONTINUUM exhibition work.',
      href: '/art/smart-shoppers',
      imageSrc: SMART_SHOPPERS,
      imageAlt: 'CONTINUUM exhibition context',
    },
    {
      id: 'momus',
      name: 'MOMus',
      location: 'Thessaloniki, Greece',
      relationship: 'exhibition',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.exhibition,
      summary: 'Technofetishism — MOMus Experimental Center for the Arts.',
      href: '/calendar/exhibitions',
      imageSrc: MOMUS,
      imageAlt: 'MOMus exhibition banner',
    },
    {
      id: 'chroma',
      name: 'Chroma Art Film Festival',
      location: 'Miami, FL',
      relationship: 'festival',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.festival,
      summary: 'Touch Grass / Doomscrolling public festival install.',
      href: '/art/doomscrolling_treadmill',
      imageSrc: TOUCH_GRASS,
      imageAlt: 'Touch Grass festival install',
    },
    {
      id: 'superblue',
      name: 'Superblue',
      location: 'Miami, FL',
      relationship: 'festival',
      relationshipLabel: 'Festival venue',
      summary: 'Host context for Chroma / Touch Grass festival presentation.',
      href: '/art/doomscrolling_treadmill',
      imageSrc: TOUCH_GRASS,
      imageAlt: 'Festival install context',
    },
    {
      id: 'transmediale',
      name: 'transmediale',
      location: 'Berlin, Germany',
      relationship: 'exhibition',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.exhibition,
      summary: 'Dark Drives / Incompatible (2012, ART404) — archival exhibition credit.',
      href: '/calendar/exhibitions',
    },
    {
      id: 'hkw',
      name: 'Haus der Kulturen der Welt (HKW)',
      location: 'Berlin, Germany',
      relationship: 'exhibition',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.exhibition,
      summary: 'International presentation context with transmediale.',
      href: '/calendar/exhibitions',
    },
    {
      id: 'afirme',
      name: 'Centro Cultural Afirme',
      location: 'Mexico City, Mexico',
      relationship: 'exhibition',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.exhibition,
      summary: 'Algoritmica Intima: Runtime (2025).',
      href: '/calendar/exhibitions',
      imageSrc: AFIRME,
      imageAlt: 'Algoritmica Intima exhibition',
    },
    {
      id: 'postmasters',
      name: 'Postmasters Gallery',
      location: 'New York, NY',
      relationship: 'exhibition',
      relationshipLabel: 'Screening',
      summary: 'Low Resolution screening (2024).',
      href: '/calendar/exhibitions',
      imageSrc: TRANSMEDIALE,
      imageAlt: 'Low Resolution screening poster',
    },
    {
      id: 'cooper',
      name: 'The Cooper Union',
      location: 'New York, NY',
      relationship: 'education',
      relationshipLabel: 'Education',
      summary: 'BFA; early exhibition context (F* Real Life, 2015).',
      href: '/bio',
    },
    {
      id: 'sfpc',
      name: 'School for Poetic Computation',
      location: 'New York, NY',
      relationship: 'education',
      relationshipLabel: 'Education',
      summary: '2013 cohort — computational art and poetic systems.',
      href: '/bio',
    },
    {
      id: 'nwsa',
      name: 'New World School of the Arts',
      location: 'Miami, FL',
      relationship: 'education',
      relationshipLabel: 'Education · Alumni',
      summary:
        'Alum (2009–2011). Natural fit for guest workshops, visiting artist sessions, and creative-technology curriculum with Visual Arts.',
      href: '/workshops',
    },
  ] satisfies InstitutionOrg[],
  honestyNote:
    'Listed through employment, residency, lab operations, workshops, exhibitions, platform builds, education, or funder credits documented on this site. Application-only relationships are not listed.',
  icaNotions: {
    src: ICA_NOTIONS,
    alt: 'Notions of Home — later ICA Miami × Dminti exhibition context',
    caption: 'Later exhibition context — not visual evidence of the 2019–2020 Digital Producer role.',
  },
} as const;
