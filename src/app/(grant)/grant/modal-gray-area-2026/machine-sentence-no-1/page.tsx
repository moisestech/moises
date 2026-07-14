import type { Metadata } from 'next';
import { MachineSentencePage } from '@/components/grant/modal-gray-area-2026/MachineSentencePage';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { machineSentenceSeo } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: machineSentenceSeo.title,
  description: machineSentenceSeo.description,
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
    title: machineSentenceSeo.title,
    description: machineSentenceSeo.description,
    type: 'website',
    url: `${SITE}${modalGrayAreaMeta.proposalRoute}`,
    siteName: 'Moises Sanabria',
  },
  twitter: {
    card: 'summary_large_image',
    title: machineSentenceSeo.title,
    description: machineSentenceSeo.description,
  },
};

export default function MachineSentenceNo1Route() {
  return <MachineSentencePage />;
}
