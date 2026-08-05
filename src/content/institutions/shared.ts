/**
 * Shared institutional outreach constants for Miami cultural partners.
 */

export const INSTITUTIONAL_CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/moisestech/15-minute-meeting';

export const INSTITUTIONAL_EMAIL = 'm@moises.tech';

export const INSTITUTIONAL_AVAILABILITY =
  'My year-long contract as Technical Director of Digital at Oolite Arts concludes September 17.';

export type InstitutionalLane = {
  id: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
};

export type PlaceholderAsset = {
  label: string;
  note: string;
  /** Optional existing image while production assets are prepared. */
  src?: string;
  alt?: string;
};
