/**
 * AI24 studio landing — public front door for the creative technology company.
 * Distinct from /ai-engineering, /research, /technology-product-strategy, and /work/...
 */

import {
  AI24_WEBSITE_HERO_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';

export type ProjectStatus =
  | 'EXHIBITED'
  | 'DEPLOYED'
  | 'PUBLIC PROGRAM'
  | 'RESEARCH'
  | 'PROTOTYPE'
  | 'IN DEVELOPMENT';

export type PartnerCategory =
  | 'Clients'
  | 'Project partners'
  | 'Exhibiting institutions'
  | 'Programs and presentations'
  | 'Collaborators';

export const AI24_STUDIO = {
  meta: {
    title: 'AI24 — Creative Technology Studio | Miami',
    description:
      'AI24 is a Miami-based creative technology studio building artworks, public programs, prototypes, and digital infrastructure for a world being reorganized by AI. Founded by Moises Sanabria and Fabiola Larios.',
    url: 'https://moises.tech/ai24',
    ogImage: AI24_WEBSITE_HERO_IMAGE,
  },

  positioning: {
    short:
      'AI24 is a Miami-based creative technology studio building artworks, public programs, prototypes, and digital infrastructure for a world being reorganized by AI.',
    sharp:
      'AI24 turns emerging technology into cultural work, public learning, and durable systems for artists and institutions.',
  },

  hero: {
    eyebrow: 'AI24 / CREATIVE TECHNOLOGY STUDIO / MIAMI',
    headline: 'Culture needs more than AI adoption.',
    support:
      'AI24 builds artworks, learning programs, prototypes, and digital systems that help artists and institutions understand, use, and question emerging technology.',
    founders: 'Founded by Moises Sanabria and Fabiola Larios.',
    ctas: [
      { label: 'View selected work', href: '#case-studies' },
      { label: 'Work with AI24', href: '#work-with-us' },
    ],
    montage: [
      {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png',
        alt: 'Exhibition installation — Eternal Reflections of Digital Divinities',
        label: 'Exhibition',
      },
      {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
        label: 'Workshop / lab',
      },
      {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
        alt: 'Fabricated sculptural object — Simulation Faith with VR headset',
        label: 'Fabrication',
      },
      {
        src: AI24_WEBSITE_HERO_IMAGE,
        alt: 'AI24 product and program interface',
        label: 'Interface',
      },
      {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779573344/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities-FutureMuses_fpvc0n.jpg',
        alt: 'People encountering generative portrait output in Digital Divinities',
        label: 'Public encounter',
      },
    ],
  },

  practices: [
    {
      id: 'culture',
      title: 'Cultural Work',
      body: 'We create artworks and experiences that make the social consequences of technology physical, visible, and debatable.',
    },
    {
      id: 'systems',
      title: 'Institutional Systems',
      body: 'We translate messy organizational processes into usable portals, archives, workflows, prototypes, and technical infrastructure.',
    },
    {
      id: 'learning',
      title: 'Public Learning',
      body: 'We design workshops and programs that give artists and communities practical access to AI, creative coding, digital fabrication, and emerging media.',
    },
  ],

  practicesBridge:
    'The shared activity is translating technology into something people can encounter and use.',

  caseStudies: [
    {
      id: 'oolite-digital-lab',
      title: 'Oolite Arts Digital Lab',
      status: 'DEPLOYED' as ProjectStatus,
      href: '/oolite-arts',
      image: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
      context:
        'Oolite Arts, Miami — ongoing technical direction for an artist-facing digital lab inside a cultural institution.',
      challenge:
        'Artists and staff needed reliable equipment readiness, fabrication workflows, documentation, and longer-term operating systems—not one-off demos.',
      system:
        'Lab operations, booking pathways, signage, fabrication and printing workflows, AI and media literacy programs, vendor coordination, grant documentation, and leadership updates.',
      outcome:
        'Artist-facing creative infrastructure that keeps the Digital Lab usable day to day while building capacity for workshops, demos, and public programs.',
      evidence: 'Production workspace documentation; public Digital Lab presence at Oolite Arts.',
      roles:
        'Moises — technical direction, systems, fabrication workflows, and AI literacy programs. Fabiola — digital presence, documentation, and public-facing digital programs.',
      credits: 'Oolite Arts',
      year: '2024–',
    },
    {
      id: 'taste-the-algorithm',
      title: 'Taste the Algorithm',
      status: 'EXHIBITED' as ProjectStatus,
      href: '/art/taste_the_algorithm',
      image: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
        alt: 'Taste the Algorithm — installation documentation',
      },
      context:
        'Museum of Sex, Miami — F*ck Art: Nature & Artifice, curated by Tam Gryn (2026).',
      challenge:
        'How do recommendation systems shape desire, preference, and what we learn to want—and how can that loop become physical and public?',
      system:
        'Mixed-media sculpture with video component; smartphones, silicone tongues, scrolling feeds, and exhibition construction with collaborators.',
      outcome:
        'An embodied artwork that stages algorithmic governance of desire inside a museum exhibition.',
      evidence: 'Exhibition documentation and installation views.',
      roles: 'Concept and fabrication — Moises Sanabria, with collaborators.',
      credits: 'Museum of Sex Miami; curator Tam Gryn; photo credit Mateo SeZa / SeZa Studios where noted.',
      year: '2026',
    },
    {
      id: 'neural-chapel',
      title: 'Neural Chapel',
      status: 'RESEARCH' as ProjectStatus,
      href: '/research/born-into-the-machine',
      image: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
        alt: 'Related sculptural research — Simulation Faith with VR headset',
      },
      context:
        'Generative AI, digital fabrication, VR, and architectural sculpture — with the accepted ECCV 2026 Tech Prophecies presentation.',
      challenge:
        'How do belief, prophecy, and sacred space mutate when generative models and immersive systems become environments rather than tools?',
      system:
        'Research and fabrication pipeline spanning generative imagery, architectural sculpture, VR, and critical presentation for a computer-vision research audience.',
      outcome:
        'A research-led sculptural and presentation track that connects studio fabrication to peer research venues—without treating speculative renders as finished commissions.',
      evidence: 'ECCV 2026 Tech Prophecies acceptance; related studio sculpture and BITM research.',
      roles: 'Moises — research direction, fabrication, and presentation. Studio collaborators as needed.',
      credits: 'ECCV 2026 · Tech Prophecies; related studio research under Born into the Machine.',
      year: '2025–2026',
    },
    {
      id: 'institutional-memory',
      title: 'Institutional Memory Systems',
      status: 'IN DEVELOPMENT' as ProjectStatus,
      href: '/projects/ai24',
      image: {
        src: AI24_WEBSITE_HERO_IMAGE,
        alt: 'AI24 systems and program infrastructure interface',
      },
      context:
        'Archive protection, migration analysis, structured Airtable systems, and research infrastructure for cultural organizations.',
      challenge:
        'Cultural institutions hold fragile digital memory—scattered files, undocumented workflows, and no durable path from research to public access.',
      system:
        'Structured knowledge bases, migration analysis, automation workflows, and agent-assisted retrieval prototypes designed for institutional operators.',
      outcome:
        'Working prototypes and operating systems that protect institutional memory without replacing authorship, judgment, or archival expertise.',
      evidence: 'Internal system architecture and pilot documentation (public partner naming expands as scopes are approved).',
      roles: 'Moises — systems architecture and AI workflows. Fabiola — digital presence and organizational translation.',
      credits: 'Cultural organization partners — named publicly as scopes are approved.',
      year: '2025–',
    },
    {
      id: 'public-learning',
      title: 'Public Learning and Workshops',
      status: 'PUBLIC PROGRAM' as ProjectStatus,
      href: '/workshops',
      image: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753132684/ai24/app/instructors/fabiola-larios-portrait-ai-and-the-arts_x86sax.png',
        alt: 'Fabiola Larios — AI and the Arts instructor portrait',
      },
      context:
        'Bakehouse Art Complex, Oolite Arts, Locust Projects, and partner venues across Miami — bilingual public programs since 2020.',
      challenge:
        'Artists and communities need practical access to AI, creative coding, digital fabrication, and emerging media—without treating literacy as a product pitch.',
      system:
        'Workshop curricula, vibe coding and artist-website programs, AI literacy intensives, fabrication labs, and a longer-term LMS architecture.',
      outcome:
        'A teaching practice that aggregates into public programs now, with individual offerings spinning into separate case studies as they mature.',
      evidence: 'Workshop hubs, curricula pages, and institutional partnerships.',
      roles:
        'Moises — technical curricula, automation, and creative technology. Fabiola — digital presence, SEO workshops, immersive documentation, and community programs.',
      credits: 'Oolite Arts; Bakehouse Art Complex; Locust Projects; partner venues.',
      year: '2020–',
    },
    {
      id: 'pamm-new-media',
      title: 'PAMM / New Media Programming',
      status: 'PUBLIC PROGRAM' as ProjectStatus,
      href: '/workshops',
      image: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779573358/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities-FutureMuses-2_krpuis.jpg',
        alt: 'Public new media encounter — generative muse portrait',
      },
      context:
        'Pérez Art Museum Miami and Miami new-media public programming — workshops, partnerships, and artist-facing digital culture events.',
      challenge:
        'Museums need public formats where emerging technology is encountered critically—not only demonstrated as novelty.',
      system:
        'Public workshops, partner programming, and artist-led sessions that sit between exhibition, education, and technical practice.',
      outcome:
        'Institutional public contact points for AI literacy and new media culture; New Media Block Party and related events included where AI24’s role is precisely documented.',
      evidence: 'Program partnerships and public workshop documentation.',
      roles: 'AI24 — workshop design, facilitation, and creative-technology direction as specified per engagement.',
      credits: 'Pérez Art Museum Miami; partner organizers per program.',
      year: '2024–',
    },
  ],

  method: {
    title: 'How AI24 works',
    stages: [
      {
        n: '01',
        title: 'Observe',
        body: 'Understand the people, institution, workflow and cultural question.',
      },
      {
        n: '02',
        title: 'Prototype',
        body: 'Make the idea tangible through code, media, fabrication or spatial testing.',
      },
      {
        n: '03',
        title: 'Deploy',
        body: 'Put it into a real exhibition, program or working environment.',
      },
      {
        n: '04',
        title: 'Document and transfer',
        body: 'Create the instructions, archive, curriculum or system that survives the first presentation.',
      },
    ],
    principle:
      'We treat AI as one component inside a human-directed system—not as a substitute for authorship, judgment or institutional knowledge.',
  },

  engagements: {
    title: 'Ways to work with AI24',
    types: [
      'Creative technology commissions and installations',
      'Institutional workflow and archive systems',
      'AI prototypes and artist-facing tools',
      'Workshops, curricula and public programs',
    ],
    cta: 'Bring us a difficult workflow, a public question, or an impossible prototype.',
    projectTypes: [
      'Commission / installation',
      'Institutional systems',
      'AI prototype / tool',
      'Workshop / curriculum',
      'Other',
    ],
    budgetBands: [
      'Exploring / TBD',
      'Under $10k',
      '$10k–$50k',
      '$50k–$150k',
      '$150k+',
    ],
  },

  transmission: {
    title: 'Research and transmission',
    lead: 'AI24 observes technology in real time and converts that observation into artworks, systems, writing and public experiments.',
    items: [
      {
        title: 'MoisesGPT',
        status: 'PROTOTYPE' as ProjectStatus,
        body: 'A studio-facing transmission experiment: conversational research shaped by the practice rather than generic chatbot theater.',
        href: '/research',
      },
      {
        title: 'Born into the Machine',
        status: 'RESEARCH' as ProjectStatus,
        body: 'An artistic and research framework on what happens when technological systems stop feeling like tools and begin operating as environments.',
        href: '/research/born-into-the-machine',
      },
      {
        title: 'AI24 broadcasts and essays',
        status: 'PUBLIC PROGRAM' as ProjectStatus,
        body: 'Broadcasts, essays, and visual experiments from the studio channel—attention, outsourced cognition, automation, and creative labor.',
        href: 'https://ai24.live',
        external: true,
      },
      {
        title: 'In-progress investigations',
        status: 'IN DEVELOPMENT' as ProjectStatus,
        body: 'Selected studio investigations on interface aesthetics, platform dependency, and intentional non-automated cultural production.',
        href: '/research',
      },
    ],
  },

  team: {
    lead: 'AI24 assembles collaborators across art, engineering, fabrication, design, education and production according to the needs of each project.',
    members: [
      {
        name: 'Moises Sanabria',
        role: 'Co-founder · Creative & Technical Direction',
        portrait:
          'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750944896/portraits/moises-sanabria-portrait_qtathx.jpg',
        bio: 'Venezuelan-born, Miami-based interdisciplinary artist and systems builder. His practice materializes the internet through sculpture, installation, machine learning, and networked infrastructure.',
        responsibilities: [
          'Creative technology direction',
          'Systems architecture and AI workflows',
          'Fabrication and installation',
          'Research and curricula',
        ],
        institutions: [
          'Bakehouse Art Complex (resident)',
          'Oolite Arts — Technical Director of Digital',
          'ART404 co-founder',
          'School of Poetic Computation; Cooper Union',
        ],
        website: { label: 'moises.tech', href: 'https://moises.tech' },
      },
      {
        name: 'Fabiola Larios',
        role: 'Co-founder · Community, Growth & Digital Programs',
        portrait:
          'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750944838/portraits/fabiola-larios-portrait_nhilh4.jpg',
        bio: 'Mexican interdisciplinary artist based in Miami. Her work examines surveillance, self-representation, and obsolescence through immersive installations that fuse e-waste, vintage electronics, and glittered critique.',
        responsibilities: [
          'Community and public programs',
          'Digital presence and documentation',
          'Workshop design and facilitation',
          'Growth and institutional partnerships',
        ],
        institutions: [
          'Bakehouse Art Complex (resident)',
          'Oolite Arts — Director of Digital',
          'Pérez Art Museum Miami (exhibited)',
          'Jóvenes Creadores — New Technologies (2021)',
        ],
        website: { label: 'fabiola.io', href: 'https://fabiola.io' },
      },
    ],
  },

  partners: [
    {
      category: 'Clients' as PartnerCategory,
      names: ['Oolite Arts'],
    },
    {
      category: 'Project partners' as PartnerCategory,
      names: ['Bakehouse Art Complex', 'Locust Projects'],
    },
    {
      category: 'Exhibiting institutions' as PartnerCategory,
      names: ['Museum of Sex Miami', 'Pérez Art Museum Miami', 'Institute of Contemporary Art Miami'],
    },
    {
      category: 'Programs and presentations' as PartnerCategory,
      names: ['ECCV 2026 · Tech Prophecies', 'Transmediale'],
    },
    {
      category: 'Collaborators' as PartnerCategory,
      names: ['ART404', 'Miami cultural educators and fabricators (project-based)'],
    },
  ],

  finalCta: {
    headline: 'Build something that leaves more than a demo behind.',
    body: 'AI24 works with artists, cultural organizations, educators and mission-driven teams on projects connecting technology with public life.',
    buttons: [
      { label: 'Start a conversation', href: '#work-with-us' },
      { label: 'Visit the studio', href: '/visit' },
      { label: 'Follow AI24', href: 'https://ai24.live', external: true },
    ],
  },

  relatedRoutes: [
    { label: 'AI engineering packet', href: '/ai-engineering', note: 'Recruiter-facing technical proof' },
    { label: 'Research archive', href: '/research', note: 'Broader research and proposals' },
    { label: 'Technology & product strategy', href: '/technology-product-strategy', note: 'Individual strategy expertise' },
    { label: 'Selected works', href: '/selected-works', note: 'Art practice canon' },
  ],

  contact: {
    email: 'm@moises.tech',
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      'https://calendly.com/moisestech/15-minute-meeting',
  },
} as const;
