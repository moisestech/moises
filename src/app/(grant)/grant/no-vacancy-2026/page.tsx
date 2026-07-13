import type { Metadata } from 'next';
import { NoVacancyHubPage } from '@/components/grant/no-vacancy/NoVacancyHubPage';
import { noVacancyGrantMeta } from '@/content/grants/no-vacancy-2026/meta';
import { noVacancyHubSeo } from '@/content/grants/no-vacancy-2026/shared';

const SITE = 'https://moises.tech';

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
    'Touch Grass',
  ],
  alternates: { canonical: `${SITE}${noVacancyGrantMeta.hubRoute}` },
  openGraph: {
    title: noVacancyHubSeo.title,
    description: noVacancyHubSeo.description,
    type: 'website',
    url: `${SITE}${noVacancyGrantMeta.hubRoute}`,
    siteName: 'Moises Sanabria',
  },
  twitter: {
    card: 'summary_large_image',
    title: noVacancyHubSeo.title,
    description: noVacancyHubSeo.description,
  },
};

export default function NoVacancy2026HubRoute() {
  return <NoVacancyHubPage />;
}
