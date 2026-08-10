/**
 * /artist-infrastructure — primary institutional outreach page.
 * One focused link for incubators and cultural partners.
 * Complementary to digital-presence curricula: operational + technical layer under artistic practice.
 */

import {
  AI24_WEBSITE_HERO_IMAGE,
  evidenceProjects,
} from '@/content/evidence/projects';
import {
  digilabAsset,
  VIBE_CODE_NET_ART_BANNER,
  VIBE_CODE_NET_ART_BANNER_ALT,
} from '@/content/oolite-arts/media';
import {
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_COLLABORATION_AVAILABILITY,
  INSTITUTIONAL_EMAIL,
  OOLITE_CONTRACT_CONTEXT,
  PILOT_PRICING,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;
const DOOMSCROLLING = `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`;
const SMART_SHOPPERS = `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`;

const TEACHING_HERO = digilabAsset('workshop.art-tech-coding');

export type InstMedia = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  date?: string;
  category?: 'wide' | 'medium' | 'detail';
};

/** Handoff vocabulary — do not use public “Shipped” / “Live” without evidence. */
export type DeliveryStatus =
  | 'active'
  | 'in-progress'
  | 'prototype'
  | 'proposed'
  | 'completed';

/** @deprecated Use INSTITUTIONAL_COLLABORATION_AVAILABILITY from shared.ts */
export const ARTIST_INFRASTRUCTURE_AVAILABILITY = INSTITUTIONAL_COLLABORATION_AVAILABILITY;

export const artistInfrastructurePage = {
  meta: {
    title: 'Creative Infrastructure for Artists — Moises Sanabria',
    description:
      'Workshops, tools, and operational systems that help artists move from idea to working prototype—across AI, vibe coding, digital fabrication, and studio automation.',
    url: 'https://moises.tech/artist-infrastructure',
    ogImage: TEACHING_HERO.src,
  },

  hero: {
    kicker: 'Artist · Educator · Systems Builder',
    category: 'Artist infrastructure · Workshops · Institutional collaboration',
    headline: 'Creative infrastructure for artists',
    subhead:
      'I design workshops, tools, and operational systems that help artists move from an idea to a working prototype—across AI, vibe coding, digital fabrication, and studio automation.',
    availability: INSTITUTIONAL_COLLABORATION_AVAILABILITY,
    primaryCta: {
      label: 'Discuss a guest session',
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: 'Explore the Oolite Digital Lab',
      href: '/oolite-arts',
    },
    image: {
      src: TEACHING_HERO.src,
      alt: TEACHING_HERO.alt,
      caption:
        'Art-tech coding workshop in the Oolite Arts Digital Lab — teaching from a working environment.',
      credit: TEACHING_HERO.credit ?? 'Oolite Arts Digital Lab',
      category: 'wide' as const,
    } satisfies InstMedia,
    imageNote:
      'Documentary teaching still from Digilab. Finished lab environment and additional workshop photography appear in the Oolite proof gallery.',
  },

  contextProof: {
    eyebrow: 'Context',
    items: [
      {
        id: 'oolite',
        label: 'Oolite Arts',
        body: 'Technical Director, Digital Lab · 2025–2026',
      },
      {
        id: 'miami',
        label: 'Miami-based',
        body: 'Artist practice, education, and cultural technology',
      },
      {
        id: 'engagements',
        label: 'Engagements',
        body: 'Guest sessions · Curriculum modules · Institutional pilots',
      },
    ],
  },

  positioning: {
    eyebrow: 'Positioning',
    title: 'One practice, three connected roles',
    lead: 'Artist, educator, and systems builder are overlapping roles—not three unrelated service cards.',
    cards: [
      {
        id: 'artist',
        title: 'Artist',
        body: 'I use technology as material, culture, and subject—examining how interfaces, automation, platforms, and machines shape everyday life.',
        accent: 'ink' as const,
      },
      {
        id: 'educator',
        title: 'Educator',
        body: 'I build accessible learning experiences in which artists leave with a working artifact, a repeatable method, and resources they can continue using.',
        accent: 'ocean' as const,
      },
      {
        id: 'systems',
        title: 'Systems Builder',
        body: 'I design the infrastructure around creative work: documentation, equipment workflows, interfaces, automation, permissions, and tools that institutions can maintain.',
        accent: 'teal' as const,
      },
    ],
  },

  curriculum: {
    eyebrow: 'Incubator offer',
    title: 'What I can bring to an incubator',
    lead:
      'These modules complement entrepreneurship and digital-presence programs by focusing on the operational and technical layer underneath an artist’s practice.',
    modules: [
      {
        id: 'studio-automation',
        title: 'Studio Automation for Artists',
        promise:
          'Identify repetitive studio work and turn it into practical, human-supervised workflows.',
        audience: 'Artists, residents, and studio managers comfortable with everyday digital tools; no CS degree required.',
        formats: ['90-minute introduction', 'Half-day lab', 'Three-session curriculum'],
        artifact: 'A mapped studio workflow plus one small working automation or reusable operating template.',
        takeHome: 'A reusable checklist, prompt/agent notes with human review gates, and next-step tooling options.',
        equipment: 'Laptops, projector, stable Wi-Fi; optional shared Notion / Drive / email accounts for demos.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: '/workshops#institutional-offerings',
      },
      {
        id: 'vibe-coding',
        title: 'Vibe Coding as Artistic Method',
        promise:
          'Use conversational coding tools to build small websites, interfaces, artist tools, and browser-native experiments without requiring a traditional computer-science background.',
        audience: 'Artists and creative practitioners new to code; incubators seeking method over product tutorials.',
        formats: ['90-minute demonstration', 'Half-day build lab', 'Multi-session studio'],
        artifact:
          'A functional browser-based prototype or net-art experiment, plus a documented iteration path.',
        takeHome: 'A published or exportable project plus a maintainable workflow for continuing iteration.',
        equipment: 'Laptops, browsers, projector; optional GitHub / hosting accounts.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: '/workshops#institutional-offerings',
      },
      {
        id: 'creative-tech-infra',
        title: 'Creative-Technology Infrastructure',
        promise:
          'Build a practical production system around digital fabrication, equipment, archives, collaborative work, and public presentation.',
        audience: 'Digital labs, fabrication programs, and institutions standing up artist-facing tech capacity.',
        formats: ['Guest session', 'Technical clinic', 'Project-based short curriculum'],
        artifact: 'A production plan, tested prototype step, and reusable documentation package.',
        takeHome: 'Equipment/readiness notes, safety-aware process framing, and templates for open lab support.',
        equipment: 'Access to lab tools under supervision; projector; printed or digital guides.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: '/oolite-arts',
      },
    ],
  },

  ooliteProof: {
    eyebrow: 'Flagship institutional case study',
    title: 'From a physical room to a repeatable artist-facing program',
    lead:
      'At Oolite Arts’ Digital Lab, I worked across physical infrastructure, artist education, fabrication workflows, digital systems, and documentation. The goal was not only to make equipment available, but to create pathways artists could understand, use, and build upon.',
    credit:
      'Technical direction by Moises Sanabria, developed in collaboration with Director Fabiola Larios, Oolite Arts staff, participating artists, and institutional partners.',
    contractNote: OOLITE_CONTRACT_CONTEXT,
    href: '/oolite-arts',
    hrefLabel: 'View the Oolite case study',
    points: [
      'Access and orientation — making tools and workflows legible',
      'Workshops and learning — curriculum, facilitation, participant artifacts',
      'Fabrication and production — scanning, printing, prototyping support',
      'Systems and continuity — documentation, booking, communications, handoff',
    ],
    gallery: [
      {
        src: digilabAsset('digilab.room-cyan').src,
        alt: digilabAsset('digilab.room-cyan').alt,
        caption: 'Digital Lab environment — stations ready for teaching and open lab.',
        category: 'wide' as const,
      },
      {
        src: digilabAsset('workshop.art-tech-coding').src,
        alt: digilabAsset('workshop.art-tech-coding').alt,
        caption: 'Art-tech coding workshop — teaching in the working room.',
        category: 'medium' as const,
      },
      {
        src: digilabAsset('docs.vibe-apr25-35').src,
        alt: digilabAsset('docs.vibe-apr25-35').alt,
        caption: 'Vibe coding workshop in progress — screens and participants.',
        category: 'detail' as const,
      },
      {
        src: VIBE_CODE_NET_ART_BANNER,
        alt: VIBE_CODE_NET_ART_BANNER_ALT,
        caption: 'Public Digital Lab workshop track — vibe coding and net art.',
        category: 'medium' as const,
      },
      {
        src: digilabAsset('workshop.resin-2026').src,
        alt: digilabAsset('workshop.resin-2026').alt,
        caption: '3D resin printing for artists — Digilab fabrication track.',
        category: 'medium' as const,
      },
      {
        src: digilabAsset('digilab.entrance').src,
        alt: digilabAsset('digilab.entrance').alt,
        caption: 'Digilab entrance — public-facing Studio 105 frontage.',
        category: 'wide' as const,
      },
    ] satisfies InstMedia[],
    neededNote:
      'Additional participant-output photography welcome when permissions allow; gallery uses Digilab documentary stills with close-circle permission.',
  },

  engagementProcess: {
    eyebrow: 'How an engagement works',
    title: 'From institutional need to reusable artist resource',
    valueLine:
      'The workshop is the visible event. The durable value is the method, documentation, participant artifact, and pathway for continued use.',
    steps: [
      {
        id: 'listen',
        title: 'Listen and map',
        body: 'Clarify the cohort, goals, constraints, access needs, and existing programming.',
      },
      {
        id: 'adapt',
        title: 'Adapt the module',
        body: 'Shape examples, tools, pacing, equipment, and participant output for the institution.',
      },
      {
        id: 'teach',
        title: 'Teach and build',
        body: 'Facilitate a hands-on session centered on a working artifact.',
      },
      {
        id: 'document',
        title: 'Document and extend',
        body: 'Deliver resources, capture approved outcomes, and identify what should repeat or grow.',
      },
    ],
  },

  supportingProof: {
    eyebrow: 'Supporting proof',
    title: 'Systems and tools underneath the practice',
    lead: 'A small number of verified proof cards—not a product pitch or logo wall.',
    cards: [
      {
        id: 'bakehouse',
        title: 'Bakehouse SmartSigns',
        org: 'Bakehouse Art Complex',
        body: 'Artist-facing digital signage and kiosk infrastructure connecting spatial communication, staff-updatable programming, and maintainable technical workflows at Bakehouse Art Complex.',
        status: 'in-progress' as DeliveryStatus,
        statusNote: 'Active implementation / in progress. Dedicated install photography pending on the Bakehouse page.',
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
        body: 'Experimental tools and publishing systems exploring artist workflows, grounded retrieval, permissions, human review, and approval-governed automation.',
        status: 'prototype' as DeliveryStatus,
        statusNote: 'Prototype and experimental systems—see project pages for scope boundaries.',
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
      'The curriculum grows from an active practice concerned with technology not only as a tool, but as an environment that shapes attention, labor, identity, and cultural memory.',
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
    title: 'Ways to work together',
    availability: INSTITUTIONAL_COLLABORATION_AVAILABILITY,
    formats: [
      {
        id: 'guest',
        title: 'Guest session',
        body: 'A focused talk, demonstration, or hands-on workshop adapted to an existing class, cohort, or public program.',
      },
      {
        id: 'co-taught',
        title: 'Co-taught curriculum module',
        body: 'A short sequence developed with faculty or program staff, connecting the institution’s existing goals to a participant-made artifact.',
      },
      {
        id: 'pilot',
        title: 'Institutional pilot',
        body: 'A combined program and systems engagement that tests curriculum, documents outcomes, and identifies a repeatable model.',
      },
      {
        id: 'collaboration',
        title: 'Research or teaching collaboration',
        body: 'A longer relationship joining artistic research, curriculum development, prototypes, public programming, or institutional infrastructure.',
      },
    ],
  },

  claimsHonesty: {
    eyebrow: 'Claims policy',
    title: 'What this page will and will not claim',
    lead: 'Institutional partners should be able to trust the evidence boundary.',
    points: [
      'Oolite Digital Lab work is credited with Director Fabiola Larios first, then Moises Sanabria as Technical Director of Digital, with staff, artists, and partners.',
      'No invented participant counts, satisfaction scores, revenue, or “first/leading” claims.',
      'Bakehouse SmartSigns is labeled in progress; AI24 / Infra24 are labeled prototype unless a destination page proves more.',
      'DCC.MIAMI and Knight Foundation application context are not presented as awards or endorsements on this page.',
      'This is not a consulting pitch, job announcement, or replacement for the art-practice portfolio.',
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Build the next layer of artist infrastructure',
    lead: 'Tell me about the artists you support, the systems or skills they need, and what you want participants to leave with. I’ll recommend a format and a practical next step.',
    email: INSTITUTIONAL_EMAIL,
    emailSubject: 'Creative infrastructure for artists — guest teaching / curriculum',
    calendlyHref: INSTITUTIONAL_CALENDLY_URL,
    calendlyLabel: 'Start an institutional conversation',
    calendlySecondaryLabel: PILOT_PRICING.calendlyLabel,
    secondaryLinks: [
      { label: 'View workshop formats', href: '/workshops#catalog' },
      { label: 'Oolite Arts case study', href: '/oolite-arts' },
      { label: 'Bookable workshops hub', href: '/workshops' },
      { label: 'Miami institutions directory', href: '/institutions' },
    ],
  },
} as const;
