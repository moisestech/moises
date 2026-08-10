/**
 * Shared institutional outreach constants for Miami cultural partners.
 */

export const INSTITUTIONAL_CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/moisestech/15-minute-meeting';

export const INSTITUTIONAL_EMAIL = 'm@moises.tech';

/**
 * Public collaboration offer line — single source for artist-infrastructure hero,
 * engagement, and CTA. Do not invent metrics or institutional fees here.
 */
export const INSTITUTIONAL_COLLABORATION_AVAILABILITY =
  'Available for paid guest teaching, curriculum development, and institutional creative-technology collaborations beginning fall 2026.';

/**
 * Oolite case-study context only — not a competing hero availability line.
 * Year-long Technical Director of Digital engagement concludes September 17, 2026.
 */
export const OOLITE_CONTRACT_CONTEXT =
  'Year-long engagement as Technical Director of Digital at Oolite Arts concludes September 17, 2026.';

/**
 * @deprecated Prefer INSTITUTIONAL_COLLABORATION_AVAILABILITY for offer pages,
 * or OOLITE_CONTRACT_CONTEXT for Oolite-specific framing.
 * Kept as alias so hub/Bakehouse/YoungArts can migrate without a hard break.
 */
export const INSTITUTIONAL_AVAILABILITY = INSTITUTIONAL_COLLABORATION_AVAILABILITY;

/**
 * Cross-page nav for the institutional outreach family.
 * Keep YoungArts (/artist-sustainability) out — private application supplement.
 *
 * Colors are accent tokens for nav chips + section markers (not full page themes).
 */
export const INSTITUTIONAL_FAMILY_NAV = [
  {
    href: '/artist-infrastructure',
    label: 'Offer',
    match: 'artist-infrastructure',
    short: 'Primary',
    accent: 'ink',
  },
  {
    href: '/oolite-arts',
    label: 'Oolite',
    match: 'oolite-arts',
    short: 'Proof',
    accent: 'teal',
  },
  {
    href: '/bakehouse',
    label: 'Bakehouse',
    match: 'bakehouse',
    short: 'Systems',
    accent: 'copper',
  },
  {
    href: '/workshops',
    label: 'Workshops',
    match: 'workshops',
    short: 'Pilots',
    accent: 'ocean',
  },
  {
    href: '/institutions',
    label: 'Hub',
    match: 'institutions',
    short: 'Directory',
    accent: 'rose',
  },
] as const;

export type InstitutionalFamilyMatch =
  (typeof INSTITUTIONAL_FAMILY_NAV)[number]['match'];

export type InstitutionalAccent = (typeof INSTITUTIONAL_FAMILY_NAV)[number]['accent'];

/** Artist-owned cultural-technology practice operating as DCC Miami. */
export const DCC_MIAMI = {
  name: 'DCC Miami',
  fullName: 'Digital Culture Center Miami',
  href: 'https://dcc.miami',
  label: 'Artist-owned practice',
} as const;

/**
 * Public seat pricing aligned with current Oolite Arts Digital Lab workshops
 * (Artist Websites / Vibe Coding / Resin — publicly listed at $45 / ~3hr).
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
  /** Lucide icon key resolved in UI. */
  icon?: 'leadership' | 'programs' | 'platforms' | 'prototypes';
  accent?: InstitutionalAccent | 'rose' | 'sky';
};

export type PlaceholderAsset = {
  label: string;
  note: string;
  /** Optional existing image while production assets are prepared. */
  src?: string;
  alt?: string;
};
