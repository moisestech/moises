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
  DCC_MIAMI,
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_EMAIL,
  INSTITUTIONAL_SCHEDULE_CTA_LABEL,
  INSTITUTIONAL_SERVICES_AVAILABILITY,
} from './shared';

export const CONCEPTUAL_SYSTEM_VIEW_LABEL = 'Conceptual system view';

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

export type PracticeLaneIllustration = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

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
  /** Historical example. Not a promise about a current stack. */
  priorExample: string;
  illustration: PracticeLaneIllustration;
};

export const LANE_ILLUSTRATIONS = {
  web: {
    src: `${CDN}/v1790015570/art/moisestech-website/institutions/service-web-salesforce-v01_lhqnqr.png`,
    alt: 'A friendly three-dimensional collection and ticketing workstation connected by woven cables, with a ticket extending toward the viewer.',
    width: 1254,
    height: 1254,
  },
  automation: {
    src: `${CDN}/v1790015569/art/moisestech-website/institutions/service-automation-operations-v02_fgkfod.png`,
    alt: 'A connected automation workflow with intake, routing, timing, reports, folders, and documentation arranged as a tactile miniature system.',
    width: 1536,
    height: 1536,
  },
  live: {
    src: `${CDN}/v1790015571/art/moisestech-website/institutions/service-livestream-digital-production-v01_pvzcd8.png`,
    alt: 'A camera-to-archive livestream workflow with audio, switching, captions, distribution, and storage connected as one production system.',
    width: 1254,
    height: 1254,
  },
  lab: {
    src: `${CDN}/v1790015573/art/moisestech-website/institutions/service-digital-labs-artist-programs-v01_bydydm.png`,
    alt: 'A connected digital arts lab with a workstation, scanner, enclosed 3D printer, workshop table, VR dock, materials, and documentation binder.',
    width: 1254,
    height: 1254,
  },
} as const satisfies Record<PracticeLaneAccent, PracticeLaneIllustration>;

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
  lead: 'Examples of software from prior institutional work—',
  terms: [
    {
      label: 'Salesforce',
      detail: 'Collection data, membership, registration, and reporting connected to public web systems.',
    },
    {
      label: 'web support',
      detail: 'CMS support, forms, event pages, and site maintenance for publishing workflows.',
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
      'Moises Sanabria helps museums and arts organizations connect websites, communications, and operational workflows—with clear ownership and practical documentation.',
    url: 'https://moises.tech/institutions',
  },
  banner: institutionsDigitalSystemsBanner,
  bannerNote: null as string | null,
  logoBand: institutionsLogoBand,
  logoBandLabel: 'Tools from past work',
  logoBandCaption:
    'Software and production tools used in prior engagements. This is not a claim about any institution’s current stack.',
  audienceKeywords: institutionsAudienceKeywords,
  profile: {
    src: digilabAsset('portrait.moises').src,
    alt: digilabAsset('portrait.moises').alt,
    label: 'Profile',
  },
  hero: {
    eyebrow: 'Institutional technology · Miami',
    headline: 'Less coordination. More capacity for your programs.',
    lead:
      'I help museums and arts organizations connect their websites, communications, and operational workflows—so staff can spend less time managing handoffs and more time supporting programs and audiences.',
    support:
      'Previous work inside ICA Miami, and technical direction at Oolite Arts, inform how I approach connected digital operations for cultural organizations.',
    availability: INSTITUTIONAL_SERVICES_AVAILABILITY,
    availabilityLabel: 'Currently available · project-based + fractional engagements',
    primaryCta: {
      label: INSTITUTIONAL_SCHEDULE_CTA_LABEL,
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: 'Explore selected work',
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
    { id: 'top', label: 'Overview', quiet: false },
    { id: 'services', label: 'Services', quiet: false },
    { id: 'work', label: 'Work', quiet: false },
    { id: 'process', label: 'Process', quiet: false },
    { id: 'engage', label: 'Engage', quiet: false },
    { id: 'system', label: 'Method', quiet: true },
    { id: 'tools', label: 'Tools', quiet: true },
    { id: 'evidence', label: 'Further', quiet: true },
    { id: 'archive', label: 'Experience', quiet: true },
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
    ],
  },
  lanes: [
    {
      id: 'web-salesforce',
      index: '01',
      title: 'Website and communications',
      description:
        'CMS support, forms, event pages, integrations, and analytics.',
      solves:
        'Clearer publishing workflows and more consistent information across pages and communications.',
      href: '#work-ica',
      linkLabel: 'ICA systems case study',
      accent: 'web',
      icon: 'database',
      proofTags: ['ICA Miami', 'WordPress', 'Salesforce', 'GraphQL', 'AWS CloudFront', 'Registration'],
      priorExample:
        'At ICA Miami (2019–2020), collection records in Salesforce were connected to WordPress and ticketing. That describes the tenure, not ICA’s systems today.',
      stack: [STACK.salesforce, STACK.wordpress, STACK.bloomerang, STACK.aws],
      illustration: LANE_ILLUSTRATIONS.web,
    },
    {
      id: 'automation-operations',
      index: '02',
      title: 'Registration, data, and reporting',
      description:
        'Salesforce integrations, data mapping, workflow automation, and reporting.',
      solves:
        'Less repeated entry and a clearer path from registration to useful reporting.',
      href: '#work-bakehouse',
      linkLabel: 'Bakehouse systems',
      accent: 'automation',
      icon: 'workflow',
      proofTags: ['Airtable', 'n8n / Make', 'APIs', 'Structured outputs', 'Documentation'],
      priorExample:
        'Registration, intake, and reporting work has used Airtable and n8n, with a person reviewing the handoff. Tools are chosen for the workflow in front of us.',
      stack: [STACK.airtable, STACK.n8n],
      illustration: LANE_ILLUSTRATIONS.automation,
    },
    {
      id: 'livestream-production',
      index: '03',
      title: 'Livestreaming and digital production',
      description:
        'Streaming, audio and video workflows, captioning, and reusable production procedures.',
      solves:
        'A documented workflow from registration and production through captions and archive.',
      href: '#work-ica',
      linkLabel: 'ICA digital production',
      accent: 'live',
      icon: 'radio',
      proofTags: ['ICA Miami Channel', 'OBS', 'Zoom webinars', 'Captions', 'YouTube', 'After Effects'],
      priorExample:
        'At ICA Miami (2019–2020), livestreams, captions, and the Art + Research Center video channel were produced for programs beyond the building.',
      stack: [STACK.obs],
      illustration: LANE_ILLUSTRATIONS.live,
    },
    {
      id: 'digital-labs-programs',
      index: '04',
      title: 'Digital labs and artist programs',
      description:
        'Lab operations, fabrication workflows, training, and vendor coordination.',
      solves:
        'Equipment, booking, documentation, and artist support organized into a usable program.',
      href: '#work-oolite',
      linkLabel: 'Oolite Digital Lab',
      accent: 'lab',
      icon: 'flask',
      proofTags: ['Oolite Arts', '3D printing', '3D scanning', 'VR', 'Laser cutting', 'Creative coding'],
      priorExample:
        'At Oolite Arts, with Fabiola Larios, lab space, workshops, open hours, fabrication, and documentation were run as one artist-facing program.',
      stack: [],
      illustration: LANE_ILLUSTRATIONS.lab,
    },
  ] satisfies PracticeLane[],
  system: {
    eyebrow: 'Operating method',
    title: 'Need → system → use → evidence → continued capacity',
    caption:
      'The deliverable is not only the tool. It is the organization’s ability to keep using it.',
    callout:
      'At Oolite Arts, with Fabiola Larios, equipment, workshops, open-lab support, documentation, and artist access operated as one program. The same sequence can be applied to a website, a registration workflow, or a public-program production.',
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
        'With Director of Digital Lab Fabiola Larios, technical direction connected lab infrastructure, booking, workshops, fabrication, and documentation into one artist-facing program.',
      proofSequence: [
        {
          stage: 'Context',
          text: 'Oolite Arts Digital Lab, Miami Beach. Technical Director of Digital, 2025–2026, with Director of Digital Lab Fabiola Larios.',
        },
        {
          stage: 'Responsibility',
          text: 'Turn a new lab and its tools into an artist-facing program that could host classes, open hours, and follow-up support.',
        },
        {
          stage: 'Contribution',
          text: 'Technical direction across layout, equipment readiness, workshops, open-lab hours, fabrication workflows, intake, scheduling, and documentation.',
        },
        {
          stage: 'Artifact',
          text: 'A public Digital Lab with published hours, workshops, and written equipment and teaching workflows. Photographs and class listings are on the case study.',
        },
        {
          stage: 'Result',
          text: 'Open lab published Tuesday and Thursday, 10 a.m.–5 p.m., in English and Spanish. Public workshops include Artist Website for Beginners (capacity 10) and Intro to 3D Resin Printing (capacity 8).',
        },
        {
          stage: 'Ownership',
          text: 'Co-developed with Fabiola Larios and Oolite staff. Independent case study, not an official Oolite publication. Intake, scheduling, safety, and follow-up notes are how workshop knowledge continues into open-lab practice.',
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
          caption: 'Oolite Digital Lab. Documentary photograph of the operated room, not a rendering.',
        },
        {
          src: digilabAsset('workshop.art-tech-coding').src,
          alt: digilabAsset('workshop.art-tech-coding').alt,
          caption: 'Creative-coding workshop in use.',
        },
        {
          src: digilabAsset('workshop.resin-2026').src,
          alt: digilabAsset('workshop.resin-2026').alt,
          caption: 'Resin printing workshop.',
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
      statusLabel: 'Completed',
      status: 'operated' as const,
      primaryLane: 'web' as PracticeLaneAccent,
      summary:
        'During a completed Digital Producer tenure, collection data, the public site, livestreams, and vendor coordination for interactive video were part of one role.',
      proofSequence: [
        {
          stage: 'Context',
          text: 'Institute of Contemporary Art, Miami. Completed employment as Digital Producer, October 2019–December 2020.',
        },
        {
          stage: 'Responsibility',
          text: 'The public website, collection data connected to ticketing, and digital production for programs that had to reach beyond the building.',
        },
        {
          stage: 'Contribution',
          text: 'Connected Salesforce collection records to WordPress and ticketing, maintained the public site, produced livestreams and captions, and coordinated vendors for interactive HTML5 video.',
        },
        {
          stage: 'Artifact',
          text: 'The public video channel for Art + Research Center lectures, plus the site and registration workflows operated during the tenure. Channel screenshots are on the case study.',
        },
        {
          stage: 'Result',
          text: 'Collection records could feed public pages and ticketing. Livestreams and captions were produced for remote programs, including the Institute’s international music program.',
        },
        {
          stage: 'Ownership',
          text: 'The role ended in December 2020. The lecture archive continued after that tenure. This does not describe ICA Miami’s current systems.',
        },
      ],
      facts: [
        { value: '2019–2020', label: 'Digital Producer tenure. Not current employment.', verification: 'public' as const },
        { value: 'Collection → web', label: 'Salesforce records connected to WordPress and ticketing during the tenure', verification: 'public' as const },
        { value: 'Public channel', label: 'A+RC lectures and programs. The archive continued after 2020.', verification: 'public' as const },
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
        'SmartSigns and kiosk infrastructure in the building, with portal and partnership work still proposed.',
      proofSequence: [
        {
          stage: 'Context',
          text: 'Bakehouse Art Complex. Studio 43 work on institutional display systems. Active, with proposed modules labeled separately.',
        },
        {
          stage: 'Responsibility',
          text: 'Make artist and program activity visible on in-building screens without recurring ad-hoc file drops.',
        },
        {
          stage: 'Contribution',
          text: 'SmartSigns and Raspberry Pi / Anthias display infrastructure. An Artist Portal on Assembly is proposed, not shipped.',
        },
        {
          stage: 'Artifact',
          text: 'Display infrastructure in the building, with handoff in progress. Install photography is not on this page.',
        },
        {
          stage: 'Result',
          text: 'The SmartSigns implementation is active. No adoption counts or time-saved figures are published.',
        },
        {
          stage: 'Ownership',
          text: 'Handoff for the display workflow is in progress. A connected digital lab and communications partnership remains a future proposal.',
        },
      ],
      facts: [
        { value: 'In the building', label: 'SmartSigns + Raspberry Pi / Anthias — handoff in progress', verification: 'public' as const },
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
          alt: 'Bakehouse Art Complex open studios. Cultural context, not a photograph of the SmartSigns installation.',
          caption:
            'Open studios at Bakehouse. This photograph is cultural context. It is not documentation of the SmartSigns installation.',
        },
      ],
      href: '/bakehouse',
      cta: 'Open Bakehouse',
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
    eyebrow: 'How an engagement works',
    title: 'Understand, scope, build, hand off',
    reassurance: [
      'One real workflow at a time',
      'Deliverables, timeline, and fee agreed before build',
      'Reviewed against written acceptance criteria',
      'Documentation and a named owner at handoff',
      'Completed, active, and proposed work stay labeled',
    ],
    steps: [
      {
        id: 'understand',
        icon: 'search' as const,
        title: 'Understand',
        body: 'Examine one real workflow and agree on the desired change. The first conversation is not a technical audit.',
      },
      {
        id: 'scope',
        icon: 'clipboard' as const,
        title: 'Scope',
        body: 'Define deliverables, responsibilities, timeline, and fee before implementation starts.',
      },
      {
        id: 'build',
        icon: 'wrench' as const,
        title: 'Build',
        body: 'Implement and review the work against the acceptance criteria in the scope.',
      },
      {
        id: 'handoff',
        icon: 'book' as const,
        title: 'Handoff',
        body: 'Document the result, train the people who will use it, and clarify who owns it afterward.',
      },
    ],
  },
  engagement: {
    eyebrow: 'Start with the right scope',
    title: 'Three ways to begin',
    lead: 'A first project can be a bounded build, a paid review, or support after the scope is already clear.',
    modes: [
      {
        id: 'project',
        title: 'Focused project',
        outcome: 'Solve one defined problem, with deliverables and acceptance criteria written down.',
        bestFor: 'A known workflow, a named owner, and a result the team can use.',
        icon: 'wrench' as const,
      },
      {
        id: 'review',
        title: 'Paid technical review',
        outcome:
          'Resolve a specific uncertainty before implementation: what should change, what should stay, and what a next project would include.',
        bestFor: 'When the problem is real but the right intervention is not yet clear.',
        icon: 'search' as const,
      },
      {
        id: 'fractional',
        title: 'Ongoing support',
        outcome:
          'Maintain agreed systems after scope, responsibilities, and ownership are clear.',
        bestFor: 'Teams that already know what should keep running, and who is responsible for it.',
        icon: 'layers' as const,
      },
    ],
    primaryCta: {
      label: INSTITUTIONAL_SCHEDULE_CTA_LABEL,
      href: INSTITUTIONAL_CALENDLY_URL,
    },
    secondaryCta: {
      label: 'Email Moises',
      href: `mailto:${INSTITUTIONAL_EMAIL}`,
    },
  },
  contact: {
    headline: 'Tell me what takes more effort than it should.',
    body: 'The first conversation identifies the problem, the priority, and whether a focused engagement makes sense.',
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
      { src: MOMUS, alt: 'Technofetishism at MOMus', href: '/calendar/exhibitions/technofetishism', label: 'Technofetishism · MOMus' },
      { src: AFIRME, alt: 'Algorítmica Íntima exhibition graphic', href: '/calendar/exhibitions/algoritmica-intima', label: 'Algorítmica Íntima · Mexico City' },
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
      href: '/calendar/exhibitions/technofetishism',
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
      summary: 'Algorítmica Íntima :: Runtime :: (June–July 2025).',
      href: '/calendar/exhibitions/algoritmica-intima',
      imageSrc: AFIRME,
      imageAlt: 'Algoritmica Intima exhibition',
    },
    {
      id: 'postmasters',
      name: 'Postmasters Gallery',
      location: 'New York, NY',
      relationship: 'exhibition',
      relationshipLabel: 'Screening',
      summary: 'Low Resolution screening (October 19, 2024).',
      href: '/calendar/exhibitions/low-resolution',
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
