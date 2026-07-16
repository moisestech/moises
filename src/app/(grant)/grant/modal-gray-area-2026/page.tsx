import type { Metadata } from 'next';
import { ModalGrayAreaHubPage } from '@/components/grant/modal-gray-area-2026/ModalGrayAreaHubPage';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { modalGrayAreaHubSeo } from '@/content/grants/modal-gray-area-2026/shared';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: modalGrayAreaHubSeo.title,
  description: modalGrayAreaHubSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'Modal',
    'Gray Area',
    'Incomplete Containment of a Model',
    'Machine Sentences',
    'AI art',
    'Moises Sanabria',
  ],
  alternates: { canonical: `${SITE}${modalGrayAreaMeta.hubRoute}` },
  openGraph: {
    title: modalGrayAreaHubSeo.title,
    description: modalGrayAreaHubSeo.description,
    type: 'website',
    url: `${SITE}${modalGrayAreaMeta.hubRoute}`,
    siteName: 'Moises Sanabria',
  },
  twitter: {
    card: 'summary_large_image',
    title: modalGrayAreaHubSeo.title,
    description: modalGrayAreaHubSeo.description,
  },
};

export default function ModalGrayArea2026HubRoute() {
  return <ModalGrayAreaHubPage />;
}
