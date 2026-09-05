/**
 * DCC Miami — shared constants for /institutions and /artist-infrastructure.
 * Adapted from moises.tech institutional outreach. Do not reuse Moises personal Calendly/email.
 */

export const INSTITUTIONAL_CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/dccmiami';

export const INSTITUTIONAL_EMAIL = 'contact@dcc.miami';

export const ART_PRACTICE_ORIGIN = 'https://moises.tech';

/**
 * Public collaboration offer line — guest teaching / curriculum / institutional pilots.
 */
export const INSTITUTIONAL_COLLABORATION_AVAILABILITY =
  'Available for paid guest teaching, curriculum development, and institutional creative-technology collaborations beginning fall 2026.';

/**
 * /institutions services page — current availability for technical review,
 * focused projects, and fractional digital support.
 */
export const INSTITUTIONAL_SERVICES_AVAILABILITY =
  'Currently available for project-based and fractional engagements.';

/**
 * Oolite case-study context only — not a competing hero availability line.
 */
export const OOLITE_CONTRACT_CONTEXT =
  'Year-long engagement as Technical Director of Digital at Oolite Arts concludes September 17, 2026.';

export const INSTITUTIONAL_AVAILABILITY = INSTITUTIONAL_COLLABORATION_AVAILABILITY;

/**
 * Cross-page nav for DCC institutional offerings.
 * Infra24 stays the product door (signs, kiosks, portals). These two pages are the services + teaching doors.
 */
export const INSTITUTIONAL_FAMILY_NAV = [
  {
    href: '/artist-infrastructure',
    label: 'Offer',
    match: 'artist-infrastructure',
    short: 'Workshops',
    accent: 'ink',
  },
  {
    href: '/institutions',
    label: 'Institutions',
    match: 'institutions',
    short: 'Services',
    accent: 'rose',
  },
  {
    href: '/workshops',
    label: 'Workshops',
    match: 'workshops',
    short: 'Catalog',
    accent: 'ocean',
  },
  {
    href: '/infra24',
    label: 'Infra24',
    match: 'infra24',
    short: 'Systems',
    accent: 'teal',
  },
  {
    href: '/partners',
    label: 'Partners',
    match: 'partners',
    short: 'Host',
    accent: 'copper',
  },
] as const;

export type InstitutionalFamilyMatch =
  (typeof INSTITUTIONAL_FAMILY_NAV)[number]['match'];

export type InstitutionalAccent = (typeof INSTITUTIONAL_FAMILY_NAV)[number]['accent'];

export const DCC_MIAMI = {
  name: 'DCC Miami',
  fullName: 'Digital Culture Center Miami',
  href: 'https://dcc.miami',
  label: 'Artist-owned cultural-technology practice',
} as const;

/**
 * Public seat pricing aligned with current Oolite Arts Digital Lab workshops.
 * Do not present these as institutional teaching fees on /artist-infrastructure.
 */
export const PILOT_PRICING = {
  sourceNote:
    'Aligned with current Oolite Arts Digital Lab public workshop pricing ($45 / participant / ~3 hours).',
  sourceUrl: 'https://oolitearts.org/event/artist-websites-for-beginners/',
  seat: {
    amount: 45,
    display: '$45',
    unit: 'per participant / ~3 hours',
    capacityTypical: '8–10 participants',
  },
  hostedFlat: {
    min: 360,
    max: 450,
    display: '$360–$450',
    unit: 'flat institutional host rate for one 3-hour session (8–10 seats)',
    mathNote: 'Same economics as $45 × 8–10 seats; institution hosts the cohort.',
  },
  twoPart: {
    min: 720,
    max: 900,
    display: '$720–$900',
    unit: 'two-part pilot (2 × 3 hours) for 8–10 seats',
    mathNote: 'Double the single-session flat range; toolkit can be scoped separately.',
  },
  calendlyLabel: 'Book a planning call',
  calendlyHref: INSTITUTIONAL_CALENDLY_URL,
} as const;

export type InstitutionalLane = {
  id: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  icon?: 'leadership' | 'programs' | 'platforms' | 'prototypes';
  accent?: InstitutionalAccent | 'rose' | 'sky';
};

export type PlaceholderAsset = {
  label: string;
  note: string;
  src?: string;
  alt?: string;
};
