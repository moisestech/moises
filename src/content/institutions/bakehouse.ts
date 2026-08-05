/**
 * /bakehouse — institutional digital systems page for Bakehouse Art Complex.
 * Clearly separate shipped work, proposed work, and future opportunity.
 */

import {
  INSTITUTIONAL_AVAILABILITY,
  INSTITUTIONAL_CALENDLY_URL,
  type PlaceholderAsset,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;

export const bakehousePage = {
  meta: {
    title: 'Bakehouse Art Complex — Digital Systems | Moises Sanabria',
    description:
      'SmartSigns and kiosk infrastructure shipped at Bakehouse Art Complex; Artist Portal proposed on Assembly; a connected institutional communication system as the next layer.',
    url: 'https://moises.tech/bakehouse',
  },
  hero: {
    eyebrow: 'Bakehouse Art Complex',
    headline: 'Digital systems that make an artist building legible.',
    lead:
      'Screens, workflows, and artist-facing infrastructure—so studios, events, and public life stay connected without turning artists into systems administrators.',
    availability: INSTITUTIONAL_AVAILABILITY,
    image: {
      src: BAKEHOUSE_IMAGE,
      alt: 'Bakehouse Art Complex — open studios context',
      label: 'Context photo',
      note: 'Production SmartSign installation photos pending; this image is contextual Bakehouse work.',
    } satisfies PlaceholderAsset & { src: string; alt: string },
  },
  buckets: [
    {
      id: 'shipped',
      status: 'Shipped',
      title: 'SmartSigns, kiosks, and display infrastructure',
      body: 'Vertical smart-sign systems and Raspberry Pi / Anthias-based display workflows that promote artists, events, and studio activity through a repeatable screen format. Handoff of Anthias/SmartSigns operations is in progress.',
      items: [
        'Artist and event promotion on vertical screens',
        'Raspberry Pi / Anthias display stack',
        'Repeatable content formats for building life',
        'Operational coordination with Bakehouse technology leadership',
      ],
      placeholders: [
        {
          label: 'Live SmartSign installation photo',
          note: 'Permission-cleared photo of a running Bakehouse screen.',
        },
        {
          label: 'Anthias dashboard / device still',
          note: 'Operational still showing device management (no credentials).',
        },
      ] satisfies PlaceholderAsset[],
    },
    {
      id: 'proposed',
      status: 'Proposed',
      title: 'Artist Portal on Assembly',
      body: 'An artist-facing portal running on Assembly to extend content governance across spatial screens and digital touchpoints—so artists and staff can update institutional visibility without ad-hoc file drops.',
      items: [
        'Artist-facing content submission and updates',
        'Governance for what appears on screens and related channels',
        'Connection between studio activity and public communication',
        'Built to reduce one-off requests and lost files',
      ],
      placeholders: [
        {
          label: 'Assembly portal wireframes / screens',
          note: 'Mark shipped screens vs proposed flows when ready.',
        },
      ] satisfies PlaceholderAsset[],
    },
    {
      id: 'future',
      status: 'Future opportunity',
      title: 'A connected institutional communication system',
      body: 'The next layer is not another isolated tool. It is coherence: SmartSigns, Artist Portal, artist communications, digital programming, and technical infrastructure operating as one system under embedded digital leadership.',
      items: [
        'Shared content model across screens, portal, and programming',
        'Clear roles for staff, artists, and contractors',
        'Documentation and handoff so the system survives turnover',
        '6–12 month embedded / fractional digital leadership option',
      ],
      placeholders: [
        {
          label: 'System map diagram',
          note: 'One diagram: screens ↔ Assembly portal ↔ programming ↔ ops.',
        },
      ] satisfies PlaceholderAsset[],
    },
  ],
  ask: {
    title: 'Conversation for Bakehouse leadership',
    body: 'Rather than proposing another isolated project, the useful next step is an embedded part-time role or six-to-twelve-month engagement focused on digital strategy, artist technology, and institutional systems.',
    primaryCta: {
      label: 'Schedule 30 minutes',
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: 'Related Oolite proof',
      href: '/oolite-arts',
    },
  },
  related: [
    { label: 'Institutions hub', href: '/institutions' },
    { label: 'SmartSign service page', href: '/services/smartsign' },
    { label: 'Oolite Arts case study', href: '/oolite-arts' },
  ],
} as const;
