/**
 * Three bookable institutional workshop offerings for /workshops and outreach.
 */

import { INSTITUTIONAL_CALENDLY_URL } from './shared';

export const institutionalWorkshopOfferings = {
  intro: {
    eyebrow: 'Bookable offerings',
    title: 'Three workshops institutions can pilot',
    lead:
      'Designed for cultural organizations and artist communities. One Calendly for all three—tell me which offering fits your cohort.',
    calendlyLabel: 'Book a planning call',
    calendlyHref: INSTITUTIONAL_CALENDLY_URL,
  },
  offerings: [
    {
      id: 'vibe-coding',
      title: 'Vibe Coding and Digital Presence for Artists',
      body: 'Practical studio presence: sites, portfolios, and lightweight coding workflows artists can maintain—complementing entrepreneurial / web-presence curricula rather than competing with them.',
      fits: 'FIU / RA+DI · MAD Arts · artist incubators',
      relatedHref: '/workshop/own-your-digital-presence',
      relatedLabel: 'Related digital presence program',
    },
    {
      id: 'ai-automation',
      title: 'AI and Automation for the Artist Studio',
      body: 'Two-part pilot friendly: capture → summarize → publish patterns, agent literacy, and human review gates so automation serves authorship instead of erasing it.',
      fits: 'MAD Arts pilot · Oolite-adjacent literacy · institutional PD',
      relatedHref: '/workshop/the-art-of-ai-agents',
      relatedLabel: 'Related AI agents workshop',
    },
    {
      id: 'prototyping',
      title: 'Creative Technology Prototyping and Digital Fabrication',
      body: 'From idea to shared-facility prototype: fabrication literacy, documentation, and production workflows for artists using institutional labs.',
      fits: 'Digital labs · fabrication programs · public workshops',
      relatedHref: '/oolite-arts',
      relatedLabel: 'Oolite Digital Lab proof',
    },
  ],
} as const;
