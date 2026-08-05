/**
 * /institutions — modular institutional portfolio hub.
 */

import { OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/evidence/projects';
import {
  INSTITUTIONAL_AVAILABILITY,
  INSTITUTIONAL_CALENDLY_URL,
  type InstitutionalLane,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;

export const institutionsHub = {
  meta: {
    title: 'Institutions — Artist-Centered Digital Systems | Moises Sanabria',
    description:
      'Embedded digital leadership, artist professional-development programs, institutional platforms and workflows, and creative-technology prototypes for cultural organizations.',
    url: 'https://moises.tech/institutions',
  },
  hero: {
    eyebrow: 'Institutional practice',
    headline: 'I build artist-centered digital systems, programs, and experiences.',
    lead:
      'Not a generic availability pitch. A practice connecting programming, technology, infrastructure, and institutional operations—so artists can make work without becoming IT staff.',
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
      href: '/artist-sustainability',
      linkLabel: 'Artist sustainability portfolio',
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
      href: '/workshops',
      linkLabel: 'Bookable workshops',
    },
  ] satisfies InstitutionalLane[],
  proof: {
    title: 'Flagship proof',
    intro: 'Start with the work already built inside Miami institutions.',
    cards: [
      {
        id: 'oolite',
        title: 'Oolite Arts Digital Lab',
        body: 'Lab build and operations, workshops, equipment systems, documentation, and handoff.',
        href: '/oolite-arts',
        image: {
          src: OOLITE_DIGITAL_LAB_IMAGE,
          alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
          label: 'Lab context',
          note: 'Production finished-lab photography pending.',
        },
      },
      {
        id: 'bakehouse',
        title: 'Bakehouse Art Complex',
        body: 'Shipped SmartSigns and kiosk infrastructure; Artist Portal proposed on Assembly; connected communications system next.',
        href: '/bakehouse',
        image: {
          src: BAKEHOUSE_IMAGE,
          alt: 'Bakehouse Art Complex — open studios and public-facing cultural context',
          label: 'Building context',
          note: 'Live SmartSign installation photo pending.',
        },
      },
    ],
  },
  nextSteps: {
    title: 'How to work together',
    items: [
      'Embedded / fractional digital leadership (6–12 months)',
      'Paid workshop pilots and curriculum collaboration',
      'Artist-facing platforms and institutional workflows',
      'Creative-technology programming and production support',
    ],
  },
} as const;
