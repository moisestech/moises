import type { Metadata } from 'next';
import { VolverAValerPage } from '@/components/grant/no-vacancy/VolverAValerPage';
import { noVacancyGrantMeta } from '@/content/grants/no-vacancy-2026/meta';
import { volverSeo } from '@/content/grants/no-vacancy-2026/volver-a-valer';
import { volverMedia, volverOgImage } from '@/content/grants/no-vacancy-2026/volver-a-valer-media';

const SITE = 'https://moises.tech';

/** Prefer true proposal render for OG; fall back to Price of Existence related-work with honest alt (not hotel install) */
const og = volverOgImage ?? volverMedia.priceOfExistenceRelated;

export const metadata: Metadata = {
  title: volverSeo.title,
  description: volverSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'Volver a Valer',
    'The Value We Carry',
    'No Vacancy',
    'Miami Beach',
    'migrating value',
    'currency floor',
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
    images: og.src
      ? [
          {
            url: og.src,
            width: og.width ?? 1600,
            height: og.height ?? 1200,
            alt: og.alt,
          },
        ]
      : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: volverSeo.title,
    description: volverSeo.description,
    images: og.src ? [og.src] : undefined,
  },
};

export default function VolverAValerRoute() {
  return <VolverAValerPage />;
}
