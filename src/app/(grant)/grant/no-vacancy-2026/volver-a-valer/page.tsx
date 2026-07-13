import type { Metadata } from 'next';
import { VolverAValerPage } from '@/components/grant/no-vacancy/VolverAValerPage';
import { noVacancyGrantMeta } from '@/content/grants/no-vacancy-2026/meta';
import { volverSeo } from '@/content/grants/no-vacancy-2026/volver-a-valer';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: volverSeo.title,
  description: volverSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'Volver a Valer',
    'No Vacancy',
    'Miami Beach',
    'migrating value',
    'Venezuelan currency',
    'public art',
    'Moises Sanabria',
  ],
  alternates: { canonical: `${SITE}${noVacancyGrantMeta.volverRoute}` },
  openGraph: {
    title: volverSeo.title,
    description: volverSeo.description,
    type: 'website',
    url: `${SITE}${noVacancyGrantMeta.volverRoute}`,
    siteName: 'Moises Sanabria',
  },
  twitter: {
    card: 'summary_large_image',
    title: volverSeo.title,
    description: volverSeo.description,
  },
};

export default function VolverAValerRoute() {
  return <VolverAValerPage />;
}
