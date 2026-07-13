/**
 * Institutional press + exhibition documentation for Born Into the Machine.
 * Primary surface: Studio chapter (Vernissage visit); case studies carry exhibition links.
 */

export type BitmPressKind = 'studio-visit' | 'exhibition' | 'institutional';

export type BitmPressItem = {
  id: string;
  kind: BitmPressKind;
  title: string;
  source: string;
  date?: string;
  summary: string;
  href: string;
  youtubeId?: string;
  relatedCaseStudySlugs?: string[];
};

export const bitmPressItems: BitmPressItem[] = [
  {
    id: 'vernissage-studio-visit-2025',
    kind: 'studio-visit',
    title: 'Studio Visit: Moises Sanabria — Bakehouse Art Complex, Miami',
    source: 'VernissageTV',
    date: '2025-12-29',
    summary:
      'On-site studio visit documenting Studio 43 at Bakehouse — production environment, works in progress, and how machine-born propositions become material practice.',
    href: 'https://vernissage.tv/2025/12/29/studio-visit-moises-sanabria-bakehouse-art-complex-miami/',
    youtubeId: '_8UDJ-n-PB0',
  },
  {
    id: 'breadbytes-2023',
    kind: 'exhibition',
    title: 'Breadbytes: Artmaking for the Next Generation',
    source: 'Bakehouse Art Complex',
    date: '2023-11',
    summary:
      'Group exhibition context for Baby AGI / From Cradle to AGI — site-specific installs integrating art and technology at Bakehouse.',
    href: 'https://www.bacfl.org/exhibitions/breadbytes-artmaking-for-the-next-generation',
    relatedCaseStudySlugs: ['baby_agi'],
  },
  {
    id: 'continuum-munag-2024',
    kind: 'exhibition',
    title: 'CONTINUUM — National Museum of Art of Guatemala',
    source: 'Bakehouse Art Complex',
    date: '2024',
    summary:
      'Bakehouse artists Fabiola Larios, Moises Sanabria, and Leo Castañeda in CONTINUUM at MUNAG. Related works: Smart Shoppers and The Price of Existence.',
    href: 'https://www.bacfl.org/blog/csiu59p0euqb6bnpyojclicd6bjjiw',
    relatedCaseStudySlugs: ['smart_shoppers'],
  },
];

export const bitmStudioVisit = bitmPressItems.find((p) => p.id === 'vernissage-studio-visit-2025')!;

export function getPressForCaseStudy(slug: string): BitmPressItem[] {
  return bitmPressItems.filter((p) => p.relatedCaseStudySlugs?.includes(slug));
}
