/**
 * /artist-sustainability — private YoungArts application supplement.
 * AI is supporting evidence, not the headline.
 */

import { OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/evidence/projects';
import { INSTITUTIONAL_AVAILABILITY, INSTITUTIONAL_CALENDLY_URL } from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const BAKEHOUSE_IMAGE = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;

export const artistSustainabilityPage = {
  meta: {
    title: 'Artist Sustainability — YoungArts Application Supplement | Moises Sanabria',
    description:
      'Private portfolio page for YoungArts Senior Manager, Artist Sustainability: artist-centered programs, operations, data systems, mentorship infrastructure, and institutional partnerships.',
    url: 'https://moises.tech/artist-sustainability',
    indexable: false,
  },
  visibilityNote:
    'Private application supplement — unlisted, noindex. Prepared for YoungArts Lifetime Support for Artists.',
  hero: {
    eyebrow: 'YoungArts · Application supplement',
    headline: 'Artist-centered systems that sustain practice across a career.',
    subheadline:
      'Senior Manager, Artist Sustainability · Lifetime Support for Artists — Moises Sanabria',
    intro: [
      'I build programs and operational systems that help artists move through career stages with clarity: mentorship infrastructure, documentation, partnerships, data hygiene, and the quiet logistics that keep support real.',
      'This page supplements my August 3 application. It foregrounds institutional practice at Oolite Arts and Bakehouse Art Complex—not an AI product pitch.',
    ],
    availability: INSTITUTIONAL_AVAILABILITY,
  },
  nav: [
    { id: 'overview', label: 'Overview' },
    { id: 'fit', label: 'Role alignment' },
    { id: 'programs', label: 'Programs & ops' },
    { id: 'systems', label: 'Data & systems' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'contact', label: 'Contact' },
  ],
  fit: {
    title: 'Alignment with Artist Sustainability',
    intro:
      'Mapped to Lifetime Support responsibilities: program architecture, artist services, relationships, reporting, and cross-disciplinary support. YoungArts employment is not claimed.',
    rows: [
      {
        requirement: 'Artist-centered program architecture',
        evidence:
          'Oolite Digital Lab: workshops, open hours, documentation, and sustained artist support designed as one connected program—not isolated classes.',
        status: 'demonstrated' as const,
      },
      {
        requirement: 'Career-stage resources and mentorship infrastructure',
        evidence:
          'Public workshops, one-on-one artist support, and literacy programs that translate emerging tools into finishable practice without flattening authorship.',
        status: 'demonstrated' as const,
      },
      {
        requirement: 'Data systems, documentation, and reporting',
        evidence:
          'Institutional documentation, handoff materials, and operational records across lab and screen systems. Airtable/CRM depth labeled honestly where role-specific tooling differs.',
        status: 'transferable' as const,
      },
      {
        requirement: 'Contracts, budgets, communications, partnerships',
        evidence:
          'Vendor and equipment coordination; cross-institutional collaboration; clear communication with artists and staff. Formal nonprofit ACD/HR title path not claimed.',
        status: 'transferable' as const,
      },
      {
        requirement: 'Wellness / capacity as sustainable practice',
        evidence:
          'Workshop pedagogy that treats attention, burnout culture, and human review as part of sustainable creative work—not only productivity tooling.',
        status: 'transferable' as const,
      },
      {
        requirement: 'YoungArts Lifetime Support employment history',
        evidence: 'Not claimed. This page is an application supplement for the Senior Manager role.',
        status: 'todo' as const,
      },
    ],
  },
  programs: {
    title: 'Programs across career stages',
    intro:
      'Support that holds when artists change mediums, tools, and institutions—operations as care, not bureaucracy for its own sake.',
    points: [
      {
        title: 'Entry and orientation',
        body: 'Onboarding into shared facilities, tools, and expectations so artists can start making without guesswork.',
      },
      {
        title: 'Skill and practice development',
        body: 'Workshops and coaching that build durable studio habits: documentation, presence, automation under human control, fabrication literacy.',
      },
      {
        title: 'Visibility and partnerships',
        body: 'Screens, portals, and communications that connect studio activity to audiences and institutional partners without overclaiming outcomes.',
      },
      {
        title: 'Capacity and continuity',
        body: 'Handoff docs, templates, and review checkpoints so support survives staff turnover and artist transitions.',
      },
    ],
  },
  systems: {
    title: 'Operational systems (supporting evidence)',
    intro:
      'Technology here is infrastructure for artist support—Airtable-style records, documentation, contractor coordination, and reporting—not the brand story.',
    items: [
      'Documentation and handoff packages for labs and display systems',
      'Content and device workflows (SmartSigns / Anthias operations)',
      'Proposed artist portal governance on Assembly (Bakehouse)',
      'Workshop curricula and reusable educational resources',
      'AI literacy and studio automation taught with human review gates',
    ],
    aiNote:
      'AI appears only as one method inside artist-centered operations and teaching—not as the headline of this application.',
  },
  evidence: {
    title: 'Selected evidence',
    cards: [
      {
        title: 'Oolite Arts Digital Lab',
        body: 'Technical direction: lab operations, workshops, equipment systems, artist support, documentation.',
        href: '/oolite-arts',
        imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
        imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
      {
        title: 'Bakehouse digital systems',
        body: 'Shipped SmartSigns / kiosk infrastructure; Artist Portal proposed on Assembly; connected communications next.',
        href: '/bakehouse',
        imageSrc: BAKEHOUSE_IMAGE,
        imageAlt: 'Bakehouse Art Complex — public-facing cultural context',
      },
      {
        title: 'Workshops for artists and institutions',
        body: 'Bookable programs in digital presence, studio automation, and creative-technology prototyping.',
        href: '/workshops',
        imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
        imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    ],
  },
  contact: {
    title: 'Contact',
    body: 'Thank you for considering this supplement alongside my August 3 application.',
    email: 'm@moises.tech',
    emailSubject: 'YoungArts — Artist Sustainability — Moises Sanabria',
    site: 'https://moises.tech',
    calendly: INSTITUTIONAL_CALENDLY_URL,
    related: [
      { label: 'Institutions hub', href: '/institutions' },
      { label: 'Oolite Arts', href: '/oolite-arts' },
      { label: 'Bakehouse', href: '/bakehouse' },
    ],
  },
} as const;
