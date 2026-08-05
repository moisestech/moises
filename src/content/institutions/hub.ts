/**
 * /institutions — modular institutional portfolio hub.
 * Organizations and case studies must match verified site/CV evidence.
 * Do not invent affiliations. Application-only orgs stay out of the worked-with list.
 */

import {
  AI24_WEBSITE_HERO_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
  evidenceProjects,
} from '@/content/evidence/projects';
import {
  INSTITUTIONAL_AVAILABILITY,
  INSTITUTIONAL_CALENDLY_URL,
  type InstitutionalLane,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;
const BAKEHOUSE_STUDIO = `${CDN}/v1783907488/art/moisestech-website/studio/moises-sanabria-open-studios-red-world-eye-2024_zdyayj.jpg`;
const LOCUST_IMAGE =
  'https://res.cloudinary.com/du1ysiumj/image/upload/v1774829074/the-art-of-ai-agents-locust-projects-the-dill-2026_xjb76m.jpg';
const SMART_SHOPPERS = `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`;
const TOUCH_GRASS = `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`;
const MOMUS = `${CDN}/v1740950484/art/moisestech-website/exhibitions/apr_2025_technofetishism_momus/momus-exhibition-banner_uun9rx.jpg`;
const ICA_NOTIONS = `${CDN}/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg`;
const TRANSMEDIALE = `${CDN}/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png`;
const AFIRME = `${CDN}/v1751123479/art/moisestech-website/exhibitions/june_2025_algoritmica_intima_cdmx/algoritmica-intima-exhibitions-june-2025_zmg4mq.jpg`;
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

export const ORG_RELATIONSHIP_LABELS: Record<OrgRelationship, string> = {
  lab: 'Lab operations',
  residency: 'Studio residency',
  employment: 'Employment',
  exhibition: 'Exhibition',
  workshop: 'Workshop / teaching',
  platform: 'Platform build',
  funder: 'Funder',
  education: 'Education partner',
  festival: 'Festival host',
};

export const institutionsHub = {
  meta: {
    title: 'Institutions — Artist-Centered Digital Systems | Moises Sanabria',
    description:
      'Organizations and case studies from Moises Sanabria’s institutional practice: Oolite Arts Digital Lab, Bakehouse Art Complex, Locust Projects, ICA Miami, DCC Miami, and exhibition partners.',
    url: 'https://moises.tech/institutions',
  },
  hero: {
    eyebrow: 'Institutional practice',
    headline: 'I build artist-centered digital systems, programs, and experiences.',
    lead:
      'A practice connecting programming, technology, infrastructure, and institutional operations—so artists can make work without becoming IT staff. Below: verified organizations and case studies from that work.',
    availability: INSTITUTIONAL_AVAILABILITY,
    primaryCta: {
      label: 'Start an institutional conversation',
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: 'Email Moises',
      href: 'mailto:m@moises.tech?subject=Institutional%20conversation%20%E2%80%94%20Moises%20Sanabria',
    },
  },
  nav: [
    { id: 'practice', label: 'Practice' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'organizations', label: 'Organizations' },
    { id: 'engage', label: 'Engage' },
  ],
  lanes: [
    {
      id: 'embedded-leadership',
      title: 'Embedded digital and creative-technology leadership',
      body: 'Fractional or term-based roles that connect labs, screens, documentation, and artist support into one coherent institutional system—not isolated projects.',
      href: '/oolite-arts',
      linkLabel: 'Oolite Arts case study',
    },
    {
      id: 'artist-pd',
      title: 'Artist professional-development programs',
      body: 'Workshops, mentorship infrastructure, and career-stage resources designed for artists—operations, capacity, and craft together.',
      href: '/workshops',
      linkLabel: 'Bookable workshops',
    },
    {
      id: 'platforms',
      title: 'Institutional platforms, kiosks, and workflows',
      body: 'SmartSigns, kiosk infrastructure, content systems, and proposed artist portals that make buildings and programs legible.',
      href: '/bakehouse',
      linkLabel: 'Bakehouse digital systems',
    },
    {
      id: 'prototypes',
      title: 'Creative-technology prototypes and public experiences',
      body: 'Fabrication workflows, public installations, and educational toolkits that move from lab experiment to shared institutional capacity.',
      href: '/ai24',
      linkLabel: 'AI24 studio',
    },
  ] satisfies InstitutionalLane[],
  caseStudies: [
    {
      id: 'oolite-digital-lab',
      title: 'Oolite Arts Digital Lab',
      org: 'Oolite Arts',
      kind: 'systems',
      kindLabel: 'Systems · Lab ops',
      body: 'Technical direction turning space, tools, curriculum, documentation, and sustained artist support into an accessible creative-technology program.',
      href: '/oolite-arts',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      featured: true,
    },
    {
      id: 'bakehouse-systems',
      title: 'Bakehouse digital systems',
      org: 'Bakehouse Art Complex',
      kind: 'systems',
      kindLabel: 'Systems · Screens',
      body: 'Shipped SmartSigns and Raspberry Pi / Anthias kiosk infrastructure; Artist Portal proposed on Assembly; connected institutional communications next.',
      href: '/bakehouse',
      imageSrc: BAKEHOUSE_IMAGE,
      imageAlt: 'Bakehouse Art Complex — open studios and public-facing cultural context',
      featured: true,
    },
    {
      id: 'smartsign',
      title: 'SmartSign institutional display',
      org: 'Bakehouse · Infra24',
      kind: 'platform',
      kindLabel: 'Platform',
      body: 'Repeatable vertical display formats for artists, events, and studio activity—service and workshop surface for institutional screens.',
      href: '/services/smartsign',
      imageSrc: BAKEHOUSE_STUDIO,
      imageAlt: 'Bakehouse studio context for public-facing screen systems',
    },
    {
      id: 'dcc-miami',
      title: 'Digital Culture Center Miami',
      org: 'DCC Miami',
      kind: 'platform',
      kindLabel: 'Platform',
      body: DCC.summary,
      href: DCC.href ?? 'https://dcc.miami',
      external: true,
      imageSrc: DCC.imageSrc,
      imageAlt: DCC.imageAlt,
    },
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
      featured: true,
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
      id: 'ica-employment',
      title: 'ICA Miami — digital production',
      org: 'Institute of Contemporary Art, Miami',
      kind: 'program',
      kindLabel: 'Employment · Exhibition',
      body: 'Digital Producer (2019–2020) plus later exhibition contexts including Notions of Home (ICA × Dminti).',
      href: '/cv',
      imageSrc: ICA_NOTIONS,
      imageAlt: 'Notions of Home — ICA Miami × Dminti exhibition banner',
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
      id: 'museum-of-sex',
      title: 'Taste the Algorithm',
      org: 'Museum of Sex Miami',
      kind: 'exhibition',
      kindLabel: 'Exhibition',
      body: 'F*ck Art: Nature & Artifice — Miami exhibition examining ecology, technology, and mediated desire.',
      href: '/ai24',
      imageSrc: TRANSMEDIALE,
      imageAlt: 'Exhibition context for Taste the Algorithm / related screening materials',
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
      id: 'algoritmica-intima',
      title: 'Algoritmica Intima: Runtime',
      org: 'Centro Cultural Afirme · CDMX',
      kind: 'exhibition',
      kindLabel: 'Exhibition',
      body: 'Exhibition on algorithms, intimacy, and computational experience in Mexico City.',
      href: '/calendar/exhibitions',
      imageSrc: AFIRME,
      imageAlt: 'Algoritmica Intima exhibition, Centro Cultural Afirme',
    },
  ] satisfies InstitutionCaseStudy[],
  organizations: [
    {
      id: 'oolite',
      name: 'Oolite Arts',
      location: 'Miami Beach, FL',
      relationship: 'lab',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.lab,
      summary:
        'Technical Director of Digital — Knight-supported Digital Lab: workshops, fabrication, documentation, and artist support.',
      href: '/oolite-arts',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      id: 'bakehouse',
      name: 'Bakehouse Art Complex',
      location: 'Miami, FL',
      relationship: 'residency',
      relationshipLabel: 'Studio residency · Systems',
      summary:
        'Studio 43 residency; SmartSigns / Anthias display systems; open studios; proposed Artist Portal on Assembly.',
      href: '/bakehouse',
      imageSrc: BAKEHOUSE_STUDIO,
      imageAlt: 'Bakehouse Art Complex — Studio 43 and open studios context',
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
    },
    {
      id: 'ica',
      name: 'Institute of Contemporary Art, Miami',
      location: 'Miami, FL',
      relationship: 'employment',
      relationshipLabel: 'Employment · Exhibition',
      summary: 'Digital Producer (2019–2020); later exhibition contexts including Notions of Home.',
      href: '/cv',
      imageSrc: ICA_NOTIONS,
      imageAlt: 'ICA Miami exhibition context',
    },
    {
      id: 'dcc',
      name: 'Digital Culture Center Miami',
      location: 'Miami, FL',
      relationship: 'platform',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.platform,
      summary: 'Institutional website and digital infrastructure for cultural programming.',
      href: 'https://dcc.miami',
      external: true,
      imageSrc: DCC.imageSrc,
      imageAlt: DCC.imageAlt,
    },
    {
      id: 'knight',
      name: 'John S. and James L. Knight Foundation',
      location: 'Miami / national',
      relationship: 'funder',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.funder,
      summary: 'Funder of Oolite Arts Digital Lab; related civic-technology and proposal work archived on site.',
      href: '/grant/knight-foundation',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      id: 'mdc-idea',
      name: 'MDC Idea Center',
      location: 'Miami, FL',
      relationship: 'education',
      relationshipLabel: ORG_RELATIONSHIP_LABELS.education,
      summary: 'AI Sprint for Artists — workshop and education partnership.',
      href: '/workshops',
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
      relationshipLabel: 'Education',
      summary: 'Formative Miami arts education (2009–2011).',
      href: '/bio',
    },
  ] satisfies InstitutionOrg[],
  nextSteps: {
    title: 'How to work together',
    items: [
      'Embedded / fractional digital leadership (6–12 months)',
      'Paid workshop pilots and curriculum collaboration',
      'Artist-facing platforms and institutional workflows',
      'Creative-technology programming and production support',
    ],
  },
  honestyNote:
    'Organizations listed above are verified through employment, residency, lab operations, workshops, exhibitions, platform builds, education, or funder credits documented on this site. Application-only relationships (for example YoungArts) are not listed as prior affiliations.',
} as const;
