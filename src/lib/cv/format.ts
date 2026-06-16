import type { CVExhibition } from '@/types/cv';

/** Public-facing venue label: prefer Venue Full Name when set, else Institution. */
export function getDisplayVenue(exhibition: CVExhibition): string {
  return exhibition.venueFullName?.trim() || exhibition.institution;
}

export function formatExhibitionLocation(exhibition: CVExhibition): string {
  const displayVenue = getDisplayVenue(exhibition);
  return `${displayVenue}, ${exhibition.city}, ${exhibition.stateOrCountry}`;
}
