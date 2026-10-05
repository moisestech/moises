/**
 * /bakehouse/smart-signs — institutional delivery case.
 * Install photography is unpublished. Do not fill slots with artist portraits
 * or the DCC website screenshot.
 */

import type { PlaceholderAsset } from './shared';

export const BAKEHOUSE_SMART_SIGNS_HREF = '/bakehouse/smart-signs';

export const bakehouseSmartSigns = {
  meta: {
    title: 'Bakehouse Smart Signs — Institutional Display Case | Moises Sanabria',
    description:
      'Raspberry Pi and Anthias displays at Bakehouse Art Complex: vertical screens, content workflow, and operational handoff in progress. Install photography is not published yet.',
    url: 'https://moises.tech/bakehouse/smart-signs',
  },
  hero: {
    eyebrow: 'Bakehouse Art Complex · Institutional delivery',
    headline: 'Smart Signs in the building',
    lead:
      'Vertical screens at Bakehouse Art Complex promote artists, events, and studio activity through a repeatable format. The stack is Raspberry Pi running Anthias on Linux, coordinated with Bakehouse technology leadership. This page is the technical case. The partnership ask lives on the Bakehouse page.',
    status: 'Client / institutional delivery',
    statusNote: 'Operational handoff of Anthias is in progress.',
  },
  audience: {
    eyebrow: 'Who it is for',
    title: 'Artists, staff, and visitors in the building',
    body: 'The screens make studio and program activity visible without ad-hoc file drops. Staff and technology leadership are the operators. Visitors read the result.',
  },
  proven: {
    eyebrow: 'What is on record',
    title: 'Proven on this page',
    items: [
      'Raspberry Pi display hardware',
      'Linux',
      'Anthias as the display stack',
      'A repeatable vertical screen format for artist and event promotion',
      'A content workflow meant to replace one-off file drops',
      'Coordination with Bakehouse technology leadership',
    ],
  },
  withheld: {
    eyebrow: 'Not on this page yet',
    title: 'Withheld until there is a public artifact',
    items: [
      'Screen count',
      'Install dates',
      'A lobby or studio map',
      'VLAN, VPN, or other network topology',
      'A remote-administration runbook',
      'Uptime or playback metrics',
    ],
  },
  distinctions: [
    {
      label: 'Commercial pitch',
      href: '/services/smartsign',
      body: 'The SmartSign service page is a product pitch. It is not this deployment.',
    },
    {
      label: 'Knight proposal',
      href: '/grant/knight-foundation/community-smart-signs',
      body: 'The Knight materials are a proposal and a different technical appendix. They are not a record of this install.',
    },
  ],
  placeholders: [
    {
      label: 'Live SmartSign installation photo',
      note: 'Permission-cleared photo of a running Bakehouse screen. Not an artist portrait and not a website screenshot.',
    },
    {
      label: 'Anthias dashboard / device still',
      note: 'Operational still showing device management. No credentials, URLs with tokens, or private network details.',
    },
  ] satisfies PlaceholderAsset[],
  next: [
    { label: 'Bakehouse partnership page', href: '/bakehouse' },
    { label: 'Forward-deployed hardware evidence', href: '/forward-deployed#hardware' },
  ],
} as const;
