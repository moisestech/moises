import type { Metadata } from 'next';
import { ModalGrayAreaHubPage } from '@/components/grant/modal-gray-area-2026/ModalGrayAreaHubPage';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { machineSentenceOgImage } from '@/content/grants/modal-gray-area-2026/machine-sentence-media';

const SITE = 'https://moises.tech';

const title = 'Modal × Gray Area 2026 Proposal — Moises Sanabria';
const description =
  'Application packet for MACHINE SENTENCE NO. 1 — a proposed self-standing cubic inference sculpture for Modal × Gray Area, October 2026.';

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  keywords: ['Modal', 'Gray Area', 'Machine Sentence', 'AI art', 'Moises Sanabria'],
  alternates: { canonical: `${SITE}${modalGrayAreaMeta.hubRoute}` },
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${SITE}${modalGrayAreaMeta.hubRoute}`,
    siteName: 'Moises Sanabria',
    images: [
      {
        url: machineSentenceOgImage.src,
        width: machineSentenceOgImage.width,
        height: machineSentenceOgImage.height,
        alt: machineSentenceOgImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [machineSentenceOgImage.src],
  },
};

export default function ModalGrayArea2026HubRoute() {
  return <ModalGrayAreaHubPage />;
}
