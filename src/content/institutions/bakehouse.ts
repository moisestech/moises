/**
 * /bakehouse — institutional digital systems page for Bakehouse Art Complex.
 * Clearly separate shipped work, proposed work, and future opportunity.
 * Ask: part-time embedded (negotiable) via artist-owned practice DCC Miami.
 */

import {
  DCC_MIAMI,
  INSTITUTIONAL_AVAILABILITY,
  INSTITUTIONAL_CALENDLY_URL,
  type PlaceholderAsset,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;

export const bakehousePage = {
  meta: {
    title: 'Bakehouse Art Complex — Digital Lab Systems | Moises Sanabria · DCC Miami',
    description:
      'SmartSigns and kiosk infrastructure shipped at Bakehouse; Artist Portal proposed on Assembly; part-time embedded digital leadership through artist-owned practice DCC Miami.',
    url: 'https://moises.tech/bakehouse',
  },
  hero: {
    eyebrow: 'Bakehouse Art Complex · DCC Miami',
    headline: 'An artist-owned Digital Lab model—inside the building artists already use.',
    lead:
      'We already proved the lab model at Oolite: tools, workshops, documentation, and artist support as one system. At Bakehouse, the next step is standing up that same coherence—screens, portal, programming, and ops—through DCC Miami, an artist-owned practice, in a part-time embedded partnership.',
    availability: INSTITUTIONAL_AVAILABILITY,
    image: {
      src: BAKEHOUSE_IMAGE,
      alt: 'Bakehouse Art Complex — open studios context',
      label: 'Context photo',
      note: 'Production SmartSign installation photos pending; this image is contextual Bakehouse work.',
    } satisfies PlaceholderAsset & { src: string; alt: string },
  },
  thesis: {
    eyebrow: 'Why this ask',
    title: 'Not another isolated project—an artist-owned lab practice',
    body: `The goal is to promote and extend the Digital Lab approach we built and operated: artist-facing technology that institutions can trust. ${DCC_MIAMI.fullName} (${DCC_MIAMI.name}) is the artist-owned name for that practice—partnering with Bakehouse on part-time embedded digital leadership, negotiable in scope and schedule.`,
    points: [
      'Proof first: SmartSigns / Anthias already shipping in the building',
      'Next layer: Artist Portal on Assembly for content governance',
      'Operating model: DCC Miami as artist-owned practice + Bakehouse as host institution',
      'Engagement: part-time embedded / fractional—negotiable, not a generic staff IT hire',
    ],
    dcc: DCC_MIAMI,
  },
  buckets: [
    {
      id: 'shipped',
      status: 'Shipped',
      title: 'SmartSigns, kiosks, and display infrastructure',
      body: 'Vertical smart-sign systems and Raspberry Pi / Anthias-based display workflows that promote artists, events, and studio activity through a repeatable screen format. Handoff of Anthias/SmartSigns operations is in progress—completion is the trust gate for the leadership conversation.',
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
      title: 'Bakehouse Digital Lab — connected communications + programming',
      body: 'Coherence under part-time embedded leadership via DCC Miami: SmartSigns, Artist Portal, artist communications, digital programming, and technical infrastructure as one artist-centered system—the same class of work as the Oolite Digital Lab, adapted to Bakehouse.',
      items: [
        'Shared content model across screens, portal, and programming',
        'Clear roles for Bakehouse staff, artists, and DCC Miami',
        'Documentation and handoff so the system survives turnover',
        'Part-time embedded engagement—scope and schedule negotiable',
      ],
      placeholders: [
        {
          label: 'System map diagram',
          note: 'One diagram: screens ↔ Assembly portal ↔ programming ↔ DCC Miami ops.',
        },
      ] satisfies PlaceholderAsset[],
    },
  ],
  ask: {
    title: 'Conversation for Bakehouse leadership',
    body: `Rather than proposing another isolated tool, I’d like to discuss a part-time embedded partnership—negotiable—between Bakehouse and ${DCC_MIAMI.name}: digital strategy, artist technology, and institutional systems that promote a Digital Lab culture artists already recognize from Oolite.`,
    primaryCta: {
      label: 'Schedule 30 minutes',
      href: INSTITUTIONAL_CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: 'Oolite Digital Lab proof',
      href: '/oolite-arts',
    },
    tertiaryCta: {
      label: `${DCC_MIAMI.name} site`,
      href: DCC_MIAMI.href,
      external: true,
    },
  },
  related: [
    { label: 'Institutions hub', href: '/institutions' },
    { label: 'SmartSign service page', href: '/services/smartsign' },
    { label: 'Oolite Arts case study', href: '/oolite-arts' },
    { label: DCC_MIAMI.name, href: DCC_MIAMI.href, external: true },
  ],
} as const;
