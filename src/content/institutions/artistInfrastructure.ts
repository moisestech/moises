/**
 * /artist-infrastructure — primary institutional outreach page.
 * One focused link for incubators and cultural partners.
 * Complementary to digital-presence curricula: operational + technical layer under artistic practice.
 */

import {
  AI24_WEBSITE_HERO_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
  evidenceProjects,
} from '@/content/evidence/projects';
import {
  digilabAsset,
  VIBE_CODE_NET_ART_BANNER,
  VIBE_CODE_NET_ART_BANNER_ALT,
} from '@/content/oolite-arts/media';
import {
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_EMAIL,
  PILOT_PRICING,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;
const DOOMSCROLLING = `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`;
const SMART_SHOPPERS = `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`;

export type InstMedia = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  date?: string;
  category?: 'wide' | 'medium' | 'detail';
};

export type DeliveryStatus = 'shipped' | 'prototype' | 'proposed';

export const ARTIST_INFRASTRUCTURE_AVAILABILITY =
  'Available for paid guest teaching, curriculum development, and institutional creative-technology collaborations beginning fall 2026.';

export const artistInfrastructurePage = {
  meta: {
    title: 'Creative Infrastructure for Artists — Moises Sanabria',
    description:
      'Workshops, tools, and operational systems that help artists move from idea to working prototype—across AI, vibe coding, digital fabrication, and studio automation.',
    url: 'https://moises.tech/artist-infrastructure',
    ogImage: OOLITE_DIGITAL_LAB_IMAGE,
  },

  hero: {
    kicker: 'Artist · Educator · Systems Builder',
    headline: 'Creative infrastructure for artists',
    subhead:
      'I design workshops, tools, and operational systems that help artists move from an idea to a working prototype—across AI, vibe coding, digital fabrication, and studio automation.',
    primaryCta: {
      label: 'Explore the Oolite Digital Lab',
      href: '/oolite-arts',
    },
    secondaryCta: {
      label: 'Discuss a guest session',
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    image: {
      src: OOLITE_DIGITAL_LAB_IMAGE,
      alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      caption:
        'Oolite Arts Digital Lab — production workspace for open lab, workshops, and artist support.',
      credit: 'Oolite Arts Digital Lab / Moises Sanabria',
      category: 'wide' as const,
    } satisfies InstMedia,
    imageNote:
      'Hero uses the finished lab environment; teaching-with-people documentary stills appear in the Oolite proof gallery.',
  },

  positioning: {
    eyebrow: 'Positioning',
    title: 'How the practice reads for an incubator',
    lead: 'Three roles that sit under artistic practice—not beside it as consulting theater.',
    cards: [
      {
        id: 'artist',
        title: 'Artist',
        body: 'Technology as material, culture, and subject—museum-legible work that stages belief, labor, value, and desire under networked systems.',
        accent: 'ink' as const,
      },
      {
        id: 'educator',
        title: 'Educator',
        body: 'Accessible learning experiences that produce a finished artifact—sites, tools, prototypes, and documentation artists can keep using.',
        accent: 'ocean' as const,
      },
      {
        id: 'systems',
        title: 'Systems Builder',
        body: 'Infrastructure, documentation, automation, and reusable workflows so labs and programs survive beyond a single workshop.',
        accent: 'teal' as const,
      },
    ],
  },

  curriculum: {
    eyebrow: 'Incubator offer',
    title: 'What I could bring to an incubator',
    lead:
      'Three curriculum modules designed for artist incubators and cultural partners. Websites can appear as one vibe-coding output—not the lead offer—so the pitch stays complementary to existing digital-presence teaching.',
    modules: [
      {
        id: 'studio-automation',
        title: 'Studio Automation for Artists',
        promise:
          'Automating repetitive administrative, research, documentation, and production tasks so artists keep authorship while cutting busywork.',
        audience: 'Artists, residents, and studio managers comfortable with everyday digital tools; no CS degree required.',
        formats: ['90-minute guest session', 'Half-day workshop', 'Two-part multi-session pilot'],
        artifact: 'A mapped automation recipe for one real studio workflow (capture → review → publish or file).',
        takeHome: 'A reusable checklist, prompt/agent notes with human review gates, and next-step tooling options.',
        equipment: 'Laptops, projector, stable Wi-Fi; optional shared Notion / Drive / email accounts for demos.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: '/workshops#institutional-offerings',
      },
      {
        id: 'vibe-coding',
        title: 'Vibe Coding as Artistic Method',
        promise:
          'Helping artists build small interfaces, tools, and experimental net-art projects without a traditional computer-science background.',
        audience: 'Artists and creative practitioners new to code; incubators seeking method over product tutorials.',
        formats: ['90-minute guest session', '3-hour workshop', 'Multi-session studio lab'],
        artifact:
          'A shareable interactive piece, tool, or experimental page—websites are one possible output, not the only goal.',
        takeHome: 'A published or exportable project plus a maintainable workflow for continuing iteration.',
        equipment: 'Laptops, browsers, projector; optional GitHub / hosting accounts.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: '/workshops#institutional-offerings',
      },
      {
        id: 'creative-tech-infra',
        title: 'Creative-Technology Infrastructure',
        promise:
          'Practical workflows around digital fabrication, AI, archives, equipment, project documentation, and collaborative production.',
        audience: 'Digital labs, fabrication programs, and institutions standing up artist-facing tech capacity.',
        formats: ['Half-day workshop', 'Multi-session curriculum', 'Program co-design sprint'],
        artifact: 'A documented workflow map (file → tool → finish → hand-off) tied to the host facility.',
        takeHome: 'Equipment/readiness notes, safety-aware process framing, and templates for open lab support.',
        equipment: 'Access to lab tools under supervision; projector; printed or digital guides.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: '/oolite-arts',
      },
    ],
  },

  ooliteProof: {
    eyebrow: 'Flagship proof',
    title: 'From a physical room to a repeatable artist-facing program',
    lead:
      'At Oolite Arts, the Digital Lab work connected space, fabrication, media, software, and operations so artists could learn, make, and return—beyond one-off demos.',
    credit:
      'With Director of Digital Lab Fabiola Larios; Moises Sanabria as Technical Director of Digital—with Oolite staff, participating artists, and institutional partners.',
    href: '/oolite-arts',
    hrefLabel: 'Read the Oolite Arts case study',
    points: [
      'Digital Lab space and infrastructure',
      'Artist workshops',
      'Fabrication workflows',
      'Equipment guides and educational resources',
      'Booking, communications, and operational systems',
      'Artist outcomes (anonymized patterns + public curriculum)',
    ],
    gallery: [
      {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
        caption: 'Digital Lab environment — stations ready for teaching and open lab.',
        category: 'wide' as const,
      },
      {
        src: digilabAsset('digilab.entrance').src,
        alt: digilabAsset('digilab.entrance').alt,
        caption: 'Digilab entrance — public-facing Studio 105 frontage.',
        category: 'wide' as const,
      },
      {
        src: VIBE_CODE_NET_ART_BANNER,
        alt: VIBE_CODE_NET_ART_BANNER_ALT,
        caption: 'Public Digital Lab workshop track — vibe coding and net art.',
        category: 'medium' as const,
      },
      {
        src: digilabAsset('workshop.art-tech-coding').src,
        alt: digilabAsset('workshop.art-tech-coding').alt,
        caption: 'Art-tech coding workshop in the Digital Lab.',
        category: 'medium' as const,
      },
      {
        src: digilabAsset('docs.vibe-apr25-35').src,
        alt: digilabAsset('docs.vibe-apr25-35').alt,
        caption: 'Vibe coding documentation — workshop in progress.',
        category: 'detail' as const,
      },
      {
        src: digilabAsset('workshop.resin-2026').src,
        alt: digilabAsset('workshop.resin-2026').alt,
        caption: '3D resin printing for artists — Digilab fabrication track.',
        category: 'medium' as const,
      },
      {
        src: digilabAsset('digilab.360-photo-2').src,
        alt: digilabAsset('digilab.360-photo-2').alt,
        caption: 'Lab interior — 360 documentation of the working room.',
        category: 'wide' as const,
      },
    ] satisfies InstMedia[],
    neededNote:
      'Additional headshots and participant outputs welcome; current gallery uses Digilab documentary stills with close-circle permission.',
  },

  supportingProof: {
    eyebrow: 'Supporting proof',
    title: 'Systems and tools underneath the practice',
    lead: 'Smaller cards for context. Clearly labeled—Dimitry does not need a full product pitch here.',
    cards: [
      {
        id: 'bakehouse',
        title: 'Bakehouse SmartSigns',
        org: 'Bakehouse Art Complex',
        body: 'Spatial communication and kiosk infrastructure for artist communities—shipped lobby systems with proposed expansions documented separately.',
        status: 'shipped' as DeliveryStatus,
        statusNote: 'Shipped spatial screens; additional Assembly / CMS work labeled proposed on the Bakehouse page.',
        href: '/bakehouse',
        image: {
          src: BAKEHOUSE_IMAGE,
          alt: 'Bakehouse Art Complex open studios — institutional context for SmartSign systems',
          caption: 'Bakehouse context image. Dedicated SmartSign install photography pending.',
          category: 'medium' as const,
        } satisfies InstMedia,
      },
      {
        id: 'ai24-infra24',
        title: 'AI24 / Infra24',
        org: 'Artist tools + public display systems',
        body: 'Experimental publishing, artist tools, and approval-governed automation (AI24); public display and smart-signage infrastructure (Infra24).',
        status: 'prototype' as DeliveryStatus,
        statusNote: 'Mix of shipped deployments, prototypes, and proposed institutional packages—see project pages.',
        href: '/ai24',
        secondaryHref: '/infra24',
        secondaryLabel: 'Infra24',
        image: {
          src: AI24_WEBSITE_HERO_IMAGE,
          alt: evidenceProjects.ai24.imageAlt,
          caption: 'AI24 program and tools hub.',
          category: 'medium' as const,
        } satisfies InstMedia,
      },
    ],
  },

  practice: {
    eyebrow: 'Artistic practice',
    title: 'Teaching from a live artistic practice',
    lead:
      'Technical teaching comes from cultural and artistic inquiry—not software consulting alone.',
    href: '/selected-works',
    hrefLabel: 'Selected works',
    projects: [
      {
        id: 'moisesgpt',
        title: 'MoisesGPT / AI24',
        body: 'Editorial and conversational systems where generative tools meet human review—practice as public interface.',
        href: '/ai24',
        image: {
          src: AI24_WEBSITE_HERO_IMAGE,
          alt: evidenceProjects.ai24.imageAlt,
          category: 'detail' as const,
        } satisfies InstMedia,
      },
      {
        id: 'smart-shoppers',
        title: 'Smart Shoppers',
        body: 'Cognition staged as consumer product—object and interface as critique.',
        href: '/art/smart-shoppers',
        image: {
          src: SMART_SHOPPERS,
          alt: 'Smart Shoppers — sculptural consumer cognition work',
          category: 'detail' as const,
        } satisfies InstMedia,
      },
      {
        id: 'doomscrolling',
        title: 'Doomscrolling Treadmill',
        body: 'Installed work from Born into the Machine — attention, body, and platform governance.',
        href: '/art/doomscrolling_treadmill',
        image: {
          src: DOOMSCROLLING,
          alt: 'Doomscrolling Treadmill installation — touchgrass stations',
          category: 'wide' as const,
        } satisfies InstMedia,
      },
    ],
  },

  engagement: {
    eyebrow: 'Engagement',
    title: 'Concrete ways to work together',
    availability: ARTIST_INFRASTRUCTURE_AVAILABILITY,
    formats: [
      {
        id: 'guest',
        title: 'Guest session',
        body: 'A focused 90-minute or half-day session inside an existing incubator or program calendar.',
      },
      {
        id: 'co-taught',
        title: 'Co-taught curriculum module',
        body: 'A multi-session block designed with your faculty or program leads—shared authorship, clear outcomes.',
      },
      {
        id: 'collaboration',
        title: 'Short research or teaching collaboration',
        body: 'A time-boxed partnership on curriculum, lab systems, or artist-facing tooling—scoped to what the institution can sustain.',
      },
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Discuss a guest session or curriculum module',
    lead: ARTIST_INFRASTRUCTURE_AVAILABILITY,
    email: INSTITUTIONAL_EMAIL,
    emailSubject: 'Creative infrastructure for artists — guest teaching / curriculum',
    calendlyHref: INSTITUTIONAL_CALENDLY_URL,
    calendlyLabel: PILOT_PRICING.calendlyLabel,
    secondaryLinks: [
      { label: 'Oolite Arts case study', href: '/oolite-arts' },
      { label: 'Bookable workshops', href: '/workshops' },
      { label: 'Miami institutions directory', href: '/institutions' },
    ],
  },
} as const;
