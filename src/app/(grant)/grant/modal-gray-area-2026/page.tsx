import type { Metadata } from 'next';
import { ModalGrayAreaHubPage } from '@/components/grant/modal-gray-area-2026/ModalGrayAreaHubPage';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { modalGrayAreaHubSeo } from '@/content/grants/modal-gray-area-2026/shared';
import { incompleteContainmentOgImage } from '@/content/grants/modal-gray-area-2026/incomplete-containment-media';

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
    images: [
      {
        url: `${SITE}${incompleteContainmentOgImage.src}`,
        width: incompleteContainmentOgImage.width,
        height: incompleteContainmentOgImage.height,
        alt: incompleteContainmentOgImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: modalGrayAreaHubSeo.title,
    description: modalGrayAreaHubSeo.description,
    images: [`${SITE}${incompleteContainmentOgImage.src}`],
  },
};

export default function ModalGrayArea2026HubRoute() {
  return <ModalGrayAreaHubPage />;
}
