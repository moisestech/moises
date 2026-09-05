/**
 * DCC Miami /artist-infrastructure — primary institutional teaching / incubator offer.
 * Voice: DCC Miami offers this. Moises Sanabria is founder/educator, not the page identity.
 * Art-practice links go to https://moises.tech.
 */

import {
  AI24_WEBSITE_HERO_IMAGE,
  evidenceProjects,
} from '@/content/evidence/projects';
import { artistInfrastructureBanner } from '@/content/evidence/applicationBanners';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import {
  digilabAsset,
  VIBE_CODE_NET_ART_BANNER,
  VIBE_CODE_NET_ART_BANNER_ALT,
} from '@/content/oolite-arts/media';
import {
  ART_OF_AI_AGENTS_HERO,
  ART_OF_AI_AGENTS_WORKSHOP_HREF,
  N8N_LOGO,
} from '@/constants/art-of-ai-agents';
import {
  ARTIST_INFRASTRUCTURE_BANNER_WIDE,
  CREATIVE_DIRECTION_SPATIAL_INTERFACE,
  POSITIONING_ARTIST,
  POSITIONING_EDUCATOR,
  POSITIONING_SYSTEMS,
  SOFTWARE_INTERFACES_CREATOR_TOOL,
} from './artistInfrastructureMedia';
import {
  QUICKBOOKS_AUTOMATION_BANNER,
  QUICKBOOKS_AUTOMATION_COVER,
  QUICKBOOKS_AUTOMATION_WORKSHOP_HREF,
} from '@/content/workshops/quickbooksAutomation';
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
const jobsCdn = CDN;

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

/** Tool / platform marks named in the incubator offer — swap when clearer brand assets land. */
export const artistInfrastructureLogoBand: LogoBandItem[] = [
  { src: N8N_LOGO.src, alt: N8N_LOGO.alt, height: 36 },
  { src: 'https://cdn.simpleicons.org/notion', alt: 'Notion', height: 36 },
  { src: 'https://cdn.simpleicons.org/cursor', alt: 'Cursor', height: 36 },
  { src: 'https://cdn.simpleicons.org/figma/F24E1E', alt: 'Figma', height: 36 },
  { src: `${jobsCdn}/v1783032752/jobs/airtable_logo_xserwf.png`, alt: 'Airtable', height: 36 },
  { src: 'https://cdn.simpleicons.org/quickbooks/2CA01C', alt: 'QuickBooks', height: 36 },
  { src: `${jobsCdn}/v1778692505/jobs/open-ai-logo_vvvlks.png`, alt: 'OpenAI', height: 36 },
  { src: 'https://cdn.simpleicons.org/anthropic', alt: 'Anthropic', height: 36 },
  {
    src: `${jobsCdn}/v1786372919/jobs/comfy-ui-logo-full_width_viyj7a.png`,
    alt: 'ComfyUI',
    height: 36,
  },
  { src: `${jobsCdn}/v1778692505/jobs/python-logo_edccrx.png`, alt: 'Python', height: 40 },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub', height: 36 },
  { src: 'https://cdn.simpleicons.org/vercel', alt: 'Vercel', height: 36 },
  { src: 'https://cdn.simpleicons.org/nextdotjs', alt: 'Next.js', height: 36 },
  {
    src: `${jobsCdn}/v1786372919/jobs/Adobe_Firefly_Logo.svg_xcwqvc.webp`,
    alt: 'Adobe Firefly',
    height: 36,
  },
];

export const artistInfrastructurePage = {
  meta: {
    title: 'Creative Infrastructure for Artists — DCC Miami',
    description:
      'Workshops, tools, and operational systems from Digital Culture Center Miami that help artists move from idea to working prototype—across AI, vibe coding, digital fabrication, and studio automation.',
    url: 'https://dcc.miami/artist-infrastructure',
    ogImage: ARTIST_INFRASTRUCTURE_BANNER_WIDE.src,
  },

  banner: artistInfrastructureBanner,
  bannerNote: null as string | null,

  logoBand: artistInfrastructureLogoBand,
  logoBandLabel: 'Tools and systems named in this offer',

  mediaNeeded: {
    eyebrow: 'Media attached',
    title: 'Workshop and banner assets on this page',
    lead: 'Wide banner, Locust n8n photography, Email Inbox Organizer diagrams, and QuickBooks Automation slides are live.',
    items: [
      {
        id: 'locust-automation',
        title: 'Locust Projects — Art of AI Agents / n8n',
        note: 'Documentary still from Locust Projects + Email Inbox Organizer diagram and Artist Task Automation slides.',
        status: 'attached' as const,
        icon: 'video' as const,
        href: ART_OF_AI_AGENTS_WORKSHOP_HREF,
        imageSrc: ART_OF_AI_AGENTS_HERO.src,
        imageAlt: ART_OF_AI_AGENTS_HERO.alt,
      },
      {
        id: 'idea-center-quickbooks',
        title: 'QuickBooks Automation for Artists',
        note: 'Dedicated workshop banner plus three slides — studio bookkeeping, automation, and human review gates.',
        status: 'attached' as const,
        icon: 'workflow' as const,
        href: QUICKBOOKS_AUTOMATION_WORKSHOP_HREF,
        imageSrc: QUICKBOOKS_AUTOMATION_COVER.src,
        imageAlt: QUICKBOOKS_AUTOMATION_COVER.alt,
      },
      {
        id: 'custom-banner',
        title: 'Creative Infrastructure banner (2171×724)',
        note: 'Wide flagship strip is live on this page.',
        status: 'attached' as const,
        icon: 'image' as const,
        imageSrc: ARTIST_INFRASTRUCTURE_BANNER_WIDE.src,
        imageAlt: ARTIST_INFRASTRUCTURE_BANNER_WIDE.alt,
      },
    ],
  },
  hero: {
    kicker: 'Artist · Educator · Systems Builder',
    category: 'Artist infrastructure · Workshops · Institutional collaboration',
    headline: 'Creative infrastructure for artists',
    subhead:
      'DCC Miami designs workshops, tools, and operational systems that help artists move from an idea to a working prototype—across AI, vibe coding, digital fabrication, and studio automation.',
    availability: INSTITUTIONAL_COLLABORATION_AVAILABILITY,
    primaryCta: {
      label: 'Discuss a guest session',
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: 'Explore the Oolite Digital Lab',
      href: 'https://moises.tech/oolite-arts',
    },
    image: {
      src: TEACHING_HERO.src,
      alt: TEACHING_HERO.alt,
      caption:
        'Art-tech coding workshop in the Oolite Arts Digital Lab — teaching from a working environment.',
      credit: TEACHING_HERO.credit ?? 'Oolite Arts Digital Lab',
      category: 'wide' as const,
    } satisfies InstMedia,
    imageNote: 'Workshops given — swipe or use arrows. Each slide links to curriculum or a landing.',
    carousel: [
      {
        src: TEACHING_HERO.src,
        alt: TEACHING_HERO.alt,
        title: 'Art-tech coding · Digilab',
        caption: 'Teaching from a working lab — artists leave with a method, not a demo reel.',
        credit: TEACHING_HERO.credit ?? 'Oolite Arts Digital Lab',
        sectionId: 'curriculum',
        sectionLabel: 'View curriculum',
      },
      {
        src: digilabAsset('docs.vibe-apr25-35').src,
        alt: digilabAsset('docs.vibe-apr25-35').alt,
        title: 'Vibe coding · Digilab',
        caption: 'Hands-on vibe coding session — screens, participants, and live iteration.',
        credit: 'Oolite Arts Digital Lab',
        sectionId: 'curriculum',
        sectionLabel: 'Vibe coding module',
      },
      {
        src: digilabAsset('workshop.vibe-code-net-art').src,
        alt: digilabAsset('workshop.vibe-code-net-art').alt,
        title: 'Vibe Code & Net Art',
        caption: 'Workshop banner — interfaces and browser-native experiments as artistic method.',
        credit: 'Oolite Arts Digital Lab',
        href: '/workshops#institutional-offerings',
        sectionLabel: 'Open workshop formats',
      },
      {
        src: digilabAsset('workshop.artist-websites-cover').src,
        alt: digilabAsset('workshop.artist-websites-cover').alt,
        title: 'Artist Websites for Beginners',
        caption: 'Digital Lab workshop — structure, writing, and a publishable website spine.',
        credit: 'Oolite Arts Digital Lab',
        href: '/workshop/own-your-digital-presence',
        sectionLabel: 'Open workshop',
      },
      {
        src: digilabAsset('workshop.seo-banner').src,
        alt: digilabAsset('workshop.seo-banner').alt,
        title: 'SEO for Artists',
        caption: 'Discoverability for artist practices — search, metadata, and AI-era visibility.',
        credit: 'Oolite Arts Digital Lab',
        href: '/workshop/seo-for-artists-in-the-age-of-ai-search',
        sectionLabel: 'Open workshop',
      },
      {
        src: digilabAsset('workshop.resin-2026').src,
        alt: digilabAsset('workshop.resin-2026').alt,
        title: '3D Resin Printing for Artists',
        caption: 'Fabrication literacy in the Digilab — file prep through supervised production.',
        credit: 'Oolite Arts Digital Lab',
        sectionId: 'oolite-proof',
        sectionLabel: 'Oolite case study',
      },
      {
        src: ART_OF_AI_AGENTS_HERO.src,
        alt: ART_OF_AI_AGENTS_HERO.alt,
        title: 'The Art of AI Agents · Locust',
        caption: ART_OF_AI_AGENTS_HERO.caption,
        credit: ART_OF_AI_AGENTS_HERO.credit,
        href: ART_OF_AI_AGENTS_WORKSHOP_HREF,
        sectionLabel: 'Open workshop',
      },
      {
        src: QUICKBOOKS_AUTOMATION_BANNER.src,
        alt: QUICKBOOKS_AUTOMATION_BANNER.alt,
        title: 'QuickBooks Automation for Artists',
        caption: 'Studio bookkeeping made legible — light automation with human review gates.',
        href: QUICKBOOKS_AUTOMATION_WORKSHOP_HREF,
        sectionLabel: 'Open workshop',
      },
    ],
  },

  contextProof: {
    eyebrow: 'Context',
    items: [
      {
        id: 'oolite',
        label: 'Oolite Arts',
        body: 'Technical Director, Digital Lab · 2025–2026',
        icon: 'building' as const,
        accent: 'teal' as const,
      },
      {
        id: 'miami',
        label: 'Miami-based',
        body: 'Artist practice, education, and cultural technology',
        icon: 'map' as const,
        accent: 'ocean' as const,
      },
      {
        id: 'engagements',
        label: 'Engagements',
        body: 'Guest sessions · Curriculum modules · Institutional pilots',
        icon: 'calendar' as const,
        accent: 'copper' as const,
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
        body: 'Technology as material, culture, and subject—examining how interfaces, automation, platforms, and machines shape everyday life. The founder’s studio practice lives at moises.tech.',
        accent: 'ink' as const,
        icon: 'palette' as const,
        image: {
          src: POSITIONING_ARTIST.src,
          alt: POSITIONING_ARTIST.alt,
        },
      },
      {
        id: 'educator',
        title: 'Educator',
        body: 'Accessible learning experiences in which artists leave with a working artifact, a repeatable method, and resources they can continue using.',
        accent: 'ocean' as const,
        icon: 'graduation' as const,
        image: {
          src: POSITIONING_EDUCATOR.src,
          alt: POSITIONING_EDUCATOR.alt,
        },
      },
      {
        id: 'systems',
        title: 'Systems Builder',
        body: 'Infrastructure around creative work: documentation, equipment workflows, interfaces, automation, permissions, and tools that institutions can maintain.',
        accent: 'teal' as const,
        icon: 'network' as const,
        image: {
          src: POSITIONING_SYSTEMS.src,
          alt: POSITIONING_SYSTEMS.alt,
        },
      },
    ],
  },

  curriculum: {
    eyebrow: 'Incubator offer',
    title: 'What DCC can bring to an incubator',
    lead:
      'These modules complement entrepreneurship and digital-presence programs by focusing on the operational and technical layer underneath an artist’s practice. Expand a card for audience, formats, and take-homes.',
    modules: [
      {
        id: 'studio-automation',
        title: 'Studio Automation for Artists',
        promise:
          'Identify repetitive studio work and turn it into practical, human-supervised workflows — including n8n agent labs from The Art of AI Agents.',
        audience:
          'Artists, residents, and studio managers comfortable with everyday digital tools; no CS degree required.',
        formats: ['90-minute introduction', 'Half-day lab', 'Three-session curriculum'],
        artifact:
          'A mapped studio workflow plus one small working automation or reusable operating template.',
        takeHome:
          'A reusable checklist, prompt/agent notes with human review gates, and next-step tooling options.',
        equipment:
          'Laptops, projector, stable Wi-Fi; optional shared Notion / Drive / email accounts for demos.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: ART_OF_AI_AGENTS_WORKSHOP_HREF,
        accent: 'ocean' as const,
        icon: 'workflow' as const,
        image: {
          src: ART_OF_AI_AGENTS_HERO.src,
          alt: ART_OF_AI_AGENTS_HERO.alt,
        },
      },
      {
        id: 'quickbooks-automation',
        title: 'QuickBooks Automation for Artists',
        promise:
          'Make studio bookkeeping legible — invoices, expenses, and categories with light automation and clear human review.',
        audience:
          'Artists and studio managers who already touch QuickBooks (or should) and need a maintainable operating template.',
        formats: ['90-minute introduction', 'Half-day lab'],
        artifact: 'A cleaned category map plus a simple bookkeeping runbook for ongoing use.',
        takeHome: 'Templates for invoices/expenses hygiene and a checklist of what stays human-approved.',
        equipment: 'Laptops, projector, QuickBooks Online demo account or screenshots.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: QUICKBOOKS_AUTOMATION_WORKSHOP_HREF,
        accent: 'copper' as const,
        icon: 'workflow' as const,
        image: {
          src: QUICKBOOKS_AUTOMATION_BANNER.src,
          alt: QUICKBOOKS_AUTOMATION_BANNER.alt,
        },
      },
      {
        id: 'vibe-coding',
        title: 'Vibe Coding as Artistic Method',
        promise:
          'Use conversational coding tools to build small websites, interfaces, artist tools, and browser-native experiments without requiring a traditional computer-science background.',
        audience:
          'Artists and creative practitioners new to code; incubators seeking method over product tutorials.',
        formats: ['90-minute demonstration', 'Half-day build lab', 'Multi-session studio'],
        artifact:
          'A functional browser-based prototype or net-art experiment, plus a documented iteration path.',
        takeHome:
          'A published or exportable project plus a maintainable workflow for continuing iteration.',
        equipment: 'Laptops, browsers, projector; optional GitHub / hosting accounts.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: '/workshops#institutional-offerings',
        accent: 'teal' as const,
        icon: 'code' as const,
        image: {
          src: SOFTWARE_INTERFACES_CREATOR_TOOL.src,
          alt: SOFTWARE_INTERFACES_CREATOR_TOOL.alt,
        },
      },
      {
        id: 'creative-tech-infra',
        title: 'Creative-Technology Infrastructure',
        promise:
          'Build a practical production system around digital fabrication, equipment, archives, collaborative work, and public presentation.',
        audience:
          'Digital labs, fabrication programs, and institutions standing up artist-facing tech capacity.',
        formats: ['Guest session', 'Technical clinic', 'Project-based short curriculum'],
        artifact: 'A production plan, tested prototype step, and reusable documentation package.',
        takeHome:
          'Equipment/readiness notes, safety-aware process framing, and templates for open lab support.',
        equipment: 'Access to lab tools under supervision; projector; printed or digital guides.',
        options: ['Guest session', 'Co-taught module', 'Short curriculum block'],
        href: 'https://moises.tech/oolite-arts',
        accent: 'ink' as const,
        icon: 'layers' as const,
        image: {
          src: CREATIVE_DIRECTION_SPATIAL_INTERFACE.src,
          alt: CREATIVE_DIRECTION_SPATIAL_INTERFACE.alt,
        },
      },
    ],
  },

  ooliteProof: {
    eyebrow: 'Flagship institutional case study',
    title: 'From a physical room to a repeatable artist-facing program',
    lead:
      'At Oolite Arts’ Digital Lab, DCC lead Moises Sanabria worked across physical infrastructure, artist education, fabrication workflows, digital systems, and documentation. The goal was not only to make equipment available, but to create pathways artists could understand, use, and build upon.',
    credit:
      'Technical direction by Moises Sanabria, developed in collaboration with Director Fabiola Larios, Oolite Arts staff, participating artists, and institutional partners.',
    contractNote: OOLITE_CONTRACT_CONTEXT,
    href: 'https://moises.tech/oolite-arts',
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
        icon: 'ear' as const,
      },
      {
        id: 'adapt',
        title: 'Adapt the module',
        body: 'Shape examples, tools, pacing, equipment, and participant output for the institution.',
        icon: 'sliders' as const,
      },
      {
        id: 'teach',
        title: 'Teach and build',
        body: 'Facilitate a hands-on session centered on a working artifact.',
        icon: 'sparkles' as const,
      },
      {
        id: 'document',
        title: 'Document and extend',
        body: 'Deliver resources, capture approved outcomes, and identify what should repeat or grow.',
        icon: 'file' as const,
      },
    ],
  },

  supportingProof: {
    eyebrow: 'Supporting proof',
    title: 'Systems and tools underneath the practice',
    lead: 'A small number of verified proof cards—not a product pitch or logo wall.',
    cards: [
      {
        id: 'art-of-ai-agents',
        title: 'The Art of AI Agents',
        org: 'Locust Projects · The Dill',
        body: 'Artist Task Automation + Email Inbox Organizer — n8n AI agents with public chapter materials, handout prompts, and workflow screenshots.',
        status: 'completed' as DeliveryStatus,
        statusNote: 'Diagram + slides live at /workshop/the-art-of-ai-agents and /share.',
        href: ART_OF_AI_AGENTS_WORKSHOP_HREF,
        image: {
          src: ART_OF_AI_AGENTS_HERO.src,
          alt: ART_OF_AI_AGENTS_HERO.alt,
          caption: ART_OF_AI_AGENTS_HERO.caption,
          category: 'medium' as const,
        } satisfies InstMedia,
      },
      {
        id: 'bakehouse',
        title: 'Bakehouse SmartSigns',
        org: 'Bakehouse Art Complex',
        body: 'Artist-facing digital signage and kiosk infrastructure connecting spatial communication, staff-updatable programming, and maintainable technical workflows at Bakehouse Art Complex.',
        status: 'in-progress' as DeliveryStatus,
        statusNote:
          'Active implementation / in progress. Dedicated install photography pending on the Bakehouse page.',
        href: 'https://moises.tech/bakehouse',
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
        href: 'https://moises.tech/ai24',
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
    href: 'https://moises.tech/selected-works',
    hrefLabel: 'Selected works',
    projects: [
      {
        id: 'moisesgpt',
        title: 'MoisesGPT / AI24',
        body: 'Editorial and conversational systems where generative tools meet human review—practice as public interface.',
        href: 'https://moises.tech/ai24',
        icon: 'sparkles' as const,
        accent: 'rose' as const,
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
        href: 'https://moises.tech/art/smart-shoppers',
        icon: 'palette' as const,
        accent: 'ink' as const,
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
        href: 'https://moises.tech/art/doomscrolling_treadmill',
        icon: 'network' as const,
        accent: 'teal' as const,
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
        icon: 'presentation' as const,
      },
      {
        id: 'co-taught',
        title: 'Co-taught curriculum module',
        body: 'A short sequence developed with faculty or program staff, connecting the institution’s existing goals to a participant-made artifact.',
        icon: 'users' as const,
      },
      {
        id: 'pilot',
        title: 'Institutional pilot',
        body: 'A combined program and systems engagement that tests curriculum, documents outcomes, and identifies a repeatable model.',
        icon: 'rocket' as const,
      },
      {
        id: 'collaboration',
        title: 'Research or teaching collaboration',
        body: 'A longer relationship joining artistic research, curriculum development, prototypes, public programming, or institutional infrastructure.',
        icon: 'flask' as const,
      },
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Build the next layer of artist infrastructure',
    lead: 'Tell us about the artists you support, the systems or skills they need, and what you want participants to leave with. DCC will recommend a format and a practical next step.',
    email: INSTITUTIONAL_EMAIL,
    emailSubject: 'Creative infrastructure for artists — guest teaching / curriculum',
    calendlyHref: INSTITUTIONAL_CALENDLY_URL,
    calendlyLabel: 'Start an institutional conversation',
    calendlySecondaryLabel: PILOT_PRICING.calendlyLabel,
    secondaryLinks: [
      { label: 'QuickBooks Automation for Artists', href: '/workshop/quickbooks-automation-for-artists' },
      { label: 'The Art of AI Agents', href: '/workshop/the-art-of-ai-agents' },
      { label: 'View workshop formats', href: '/workshops#catalog' },
      { label: 'Oolite Arts case study', href: 'https://moises.tech/oolite-arts' },
      { label: 'Bookable workshops hub', href: '/workshops' },
      { label: 'Institutions services', href: '/institutions' },
    ],
  },
} as const;
