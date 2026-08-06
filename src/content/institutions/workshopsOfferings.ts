/**
 * Three bookable institutional workshop offerings for /workshops and outreach.
 * Pricing mirrors current Oolite Arts Digital Lab public rates.
 */

import { INSTITUTIONAL_CALENDLY_URL, PILOT_PRICING } from './shared';

export const institutionalWorkshopOfferings = {
  intro: {
    eyebrow: 'Bookable offerings',
    title: 'Three workshops institutions can pilot',
    lead:
      'Designed for cultural organizations and artist communities. Propose the same offerings in parallel—we’ll coordinate calendar with whoever responds. One Calendly for planning.',
    calendlyLabel: PILOT_PRICING.calendlyLabel,
    calendlyHref: INSTITUTIONAL_CALENDLY_URL,
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Oolite-aligned pilot rates',
    lead: PILOT_PRICING.sourceNote,
    sourceUrl: PILOT_PRICING.sourceUrl,
    sourceLabel: 'Oolite Arts — public workshop listing',
    packages: [
      {
        id: 'seat',
        label: 'Public / participant seat',
        price: PILOT_PRICING.seat.display,
        detail: PILOT_PRICING.seat.unit,
        note: PILOT_PRICING.seat.capacityTypical,
      },
      {
        id: 'hosted',
        label: 'Institutional host — single session',
        price: PILOT_PRICING.hostedFlat.display,
        detail: PILOT_PRICING.hostedFlat.unit,
        note: PILOT_PRICING.hostedFlat.mathNote,
      },
      {
        id: 'two-part',
        label: 'Two-part institutional pilot',
        price: PILOT_PRICING.twoPart.display,
        detail: PILOT_PRICING.twoPart.unit,
        note: PILOT_PRICING.twoPart.mathNote,
      },
    ],
  },
  offerings: [
    {
      id: 'vibe-coding',
      title: 'Vibe Coding and Digital Presence for Artists',
      body: 'Practical studio presence: sites, portfolios, and lightweight coding workflows artists can maintain—complementing entrepreneurial / web-presence curricula rather than competing with them.',
      duration: '3 hours · one session',
      priceLabel: `${PILOT_PRICING.seat.display} / seat · or ${PILOT_PRICING.hostedFlat.display} hosted`,
      fits: 'FIU / RA+DI · NWSA Visual Arts · MAD Arts · artist incubators',
      relatedHref: '/workshop/own-your-digital-presence',
      relatedLabel: 'Related digital presence program',
    },
    {
      id: 'ai-automation',
      title: 'AI and Automation for the Artist Studio',
      body: 'Two-part pilot friendly: capture → summarize → publish patterns, agent literacy, and human review gates so automation serves authorship instead of erasing it.',
      duration: '2 × 3 hours · recommended pilot',
      priceLabel: `${PILOT_PRICING.twoPart.display} hosted (8–10 seats)`,
      fits: 'MAD Arts · NWSA · Oolite-adjacent literacy · institutional PD',
      relatedHref: '/workshop/the-art-of-ai-agents',
      relatedLabel: 'Related AI agents workshop',
    },
    {
      id: 'prototyping',
      title: 'Creative Technology Prototyping and Digital Fabrication',
      body: 'From idea to shared-facility prototype: fabrication literacy, documentation, and production workflows for artists using institutional labs.',
      duration: '3 hours · one session',
      priceLabel: `${PILOT_PRICING.seat.display} / seat · or ${PILOT_PRICING.hostedFlat.display} hosted`,
      fits: 'Digital labs · NWSA · fabrication programs · public workshops',
      relatedHref: '/oolite-arts',
      relatedLabel: 'Oolite Digital Lab proof',
    },
  ],
} as const;
