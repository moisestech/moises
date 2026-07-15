import type { Metadata } from 'next';
import { NoVacancyHubPage } from '@/components/grant/no-vacancy/NoVacancyHubPage';
import { noVacancyGrantMeta } from '@/content/grants/no-vacancy-2026/meta';
import { noVacancyHubSeo } from '@/content/grants/no-vacancy-2026/shared';
import { volverMedia } from '@/content/grants/no-vacancy-2026/volver-a-valer-media';

const SITE = 'https://moises.tech';
const og = volverMedia.priceOfExistenceRelated;

export const metadata: Metadata = {
  title: noVacancyHubSeo.title,
  description: noVacancyHubSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'No Vacancy',
    'Miami Beach',
    'public art',
    'hotel installation',
    'Moises Sanabria',
    'Volver a Valer',
    'The Value We Carry',
  ],
  alternates: { canonical: `${SITE}${noVacancyGrantMeta.hubRoute}` },
  openGraph: {
    title: noVacancyHubSeo.title,
    description: noVacancyHubSeo.description,
    type: 'website',
    url: `${SITE}${noVacancyGrantMeta.hubRoute}`,
    siteName: 'Moises Sanabria',
    images: [
      {
        url: og.src!,
        width: og.width ?? 1600,
        height: og.height ?? 1200,
        alt: og.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: noVacancyHubSeo.title,
    description: noVacancyHubSeo.description,
    images: [og.src!],
  },
};

export default function NoVacancy2026HubRoute() {
  return <NoVacancyHubPage />;
}
