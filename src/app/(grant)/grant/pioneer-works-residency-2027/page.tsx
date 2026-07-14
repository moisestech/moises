import type { Metadata } from 'next';
import { PioneerWorksResidencyHubPage } from '@/components/grant/pioneer-works-residency-2027/PioneerWorksResidencyHubPage';
import { pioneerWorksMeta } from '@/content/grants/pioneer-works-residency-2027/meta';
import { pioneerWorksHubSeo } from '@/content/grants/pioneer-works-residency-2027/shared';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: pioneerWorksHubSeo.title,
  description: pioneerWorksHubSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'Pioneer Works',
    'Visual Arts Residency',
    'Machine Sentences',
    'Moises Sanabria',
    'kinetic sculpture',
  ],
  alternates: { canonical: `${SITE}${pioneerWorksMeta.hubRoute}` },
  openGraph: {
    title: pioneerWorksHubSeo.title,
    description: pioneerWorksHubSeo.description,
    type: 'website',
    url: `${SITE}${pioneerWorksMeta.hubRoute}`,
    siteName: 'Moises Sanabria',
  },
  twitter: {
    card: 'summary_large_image',
    title: pioneerWorksHubSeo.title,
    description: pioneerWorksHubSeo.description,
  },
};

export default function PioneerWorksResidency2027HubRoute() {
  return <PioneerWorksResidencyHubPage />;
}
