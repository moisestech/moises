import type { Metadata } from 'next';
import { TouchGrassNoVacancyPage } from '@/components/grant/no-vacancy/TouchGrassNoVacancyPage';
import { noVacancyGrantMeta } from '@/content/grants/no-vacancy-2026/meta';
import { touchGrassNvSeo } from '@/content/grants/no-vacancy-2026/touch-grass';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: touchGrassNvSeo.title,
  description: touchGrassNvSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'Touch Grass',
    'Circuit Floor',
    'No Vacancy',
    'Miami Beach',
    'reclaimed electronics',
    'public art',
    'Moises Sanabria',
  ],
  alternates: { canonical: `${SITE}${noVacancyGrantMeta.touchGrassRoute}` },
  openGraph: {
    title: touchGrassNvSeo.title,
    description: touchGrassNvSeo.description,
    type: 'website',
    url: `${SITE}${noVacancyGrantMeta.touchGrassRoute}`,
    siteName: 'Moises Sanabria',
  },
  twitter: {
    card: 'summary_large_image',
    title: touchGrassNvSeo.title,
    description: touchGrassNvSeo.description,
  },
};

export default function TouchGrassNoVacancyRoute() {
  return <TouchGrassNoVacancyPage />;
}
