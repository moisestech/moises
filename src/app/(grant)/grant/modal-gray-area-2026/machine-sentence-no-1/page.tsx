import type { Metadata } from 'next';
import { MachineSentencePage } from '@/components/grant/modal-gray-area-2026/MachineSentencePage';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { machineSentenceOgImage } from '@/content/grants/modal-gray-area-2026/machine-sentence-media';

const SITE = 'https://moises.tech';

const title = 'Machine Sentence No. 1 — Moises Sanabria';
const description =
  'A proposal for a self-standing cubic inference sculpture that translates human language into temporary physical states, distributed imagery, and a central latent void.';

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  keywords: [
    'MACHINE SENTENCE NO. 1',
    'Latent Monument',
    'Modal',
    'Gray Area',
    'Born into the Machine',
    'Moises Sanabria',
  ],
  alternates: { canonical: `${SITE}${modalGrayAreaMeta.proposalRoute}` },
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${SITE}${modalGrayAreaMeta.proposalRoute}`,
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

export default function MachineSentenceNo1Route() {
  return <MachineSentencePage />;
}
