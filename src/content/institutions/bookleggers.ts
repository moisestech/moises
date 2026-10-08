/**
 * /bookleggers — Bookleggers Library commerce sync.
 * Verified: a live Make.com scenario sends Square POS transactions to Airtable
 * so staff can see sales and inventory without a manual spreadsheet handoff.
 * Unpublished: sync frequency, field map, go-live date, sanitized execution log.
 */

import {
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_EMAIL,
  INSTITUTIONAL_SCHEDULE_CTA_LABEL,
} from './shared';

const BANNER =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788209502/dccmiami/workshops/make-airtable-no-code-square-data-ingestion-ai-automation-banner-bookleggers_h4e9k9.png';
const LOGO =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788214440/dccmiami/logo/bookleggers-logo-transparent_wpspd5.png';

export const bookleggersPage = {
  meta: {
    title: 'Bookleggers Library — Square to Airtable | Moises Sanabria',
    description:
      'A live Make.com scenario syncs Square point-of-sale transactions into Airtable so Bookleggers Library staff can see sales and inventory without a manual spreadsheet handoff.',
    url: 'https://moises.tech/bookleggers',
  },
  hero: {
    eyebrow: 'Bookleggers Library · Completed handoff',
    headline: 'Square sales land in Airtable, so staff are not the spreadsheet.',
    lead:
      'A live Make.com scenario connects Square point-of-sale transactions to Airtable. Bookleggers Library staff use that view for sales and inventory.',
    status: 'Completed production handoff. Not current employment, and not a Bakehouse partnership proposal.',
    image: {
      src: BANNER,
      alt: 'Bookleggers — Make, Airtable, and Square no-code data-ingestion automation banner',
      caption: 'A diagram of the sync. Not a photograph of the library floor.',
    },
    logo: {
      src: LOGO,
      alt: 'Bookleggers Library',
    },
  },
  stages: [
    {
      id: 'context',
      stage: 'Context',
      text: 'Bookleggers Library, a resident organization at Bakehouse Art Complex, runs a nonprofit bookstore. Sales happen at a Square point of sale.',
    },
    {
      id: 'responsibility',
      stage: 'Responsibility',
      text: 'Staff needed sales and inventory visibility in Airtable without exporting spreadsheets by hand.',
    },
    {
      id: 'contribution',
      stage: 'Contribution',
      text: 'A Make.com scenario sends Square transactions into Airtable for a sales and inventory view.',
    },
    {
      id: 'artifact',
      stage: 'Artifact',
      text: 'The live scenario, and the Airtable view staff use. The public artifact on this page is the system diagram.',
    },
    {
      id: 'result',
      stage: 'Result',
      text: 'Library staff can see sales and inventory without a manual spreadsheet handoff.',
    },
    {
      id: 'ownership',
      stage: 'Ownership',
      text: 'Bookleggers Library staff operate the view. This was independent client work. It does not describe Bakehouse Art Complex systems.',
    },
  ],
  tools: [
    { name: 'Square', role: 'Point of sale' },
    { name: 'Make.com', role: 'The live scenario' },
    { name: 'Airtable', role: 'Sales and inventory view' },
  ],
  bridge:
    'This is one completed operations handoff. It informs how a registration or reporting workflow can be scoped, built, and left with a named owner.',
  return: { label: 'Back to institutional overview', href: '/institutions' },
  primaryCta: {
    href: INSTITUTIONAL_CALENDLY_URL,
    label: INSTITUTIONAL_SCHEDULE_CTA_LABEL,
  },
  email: INSTITUTIONAL_EMAIL,
} as const;
