import type { Metadata } from 'next';
import { MachineSentencePage } from '@/components/grant/modal-gray-area-2026/MachineSentencePage';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { incompleteContainmentSeo } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';
import { incompleteContainmentOgImage } from '@/content/grants/modal-gray-area-2026/incomplete-containment-media';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: incompleteContainmentSeo.title,
  description: incompleteContainmentSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'INCOMPLETE CONTAINMENT OF A MODEL',
    'Machine Sentences',
    'Modal',
    'Gray Area',
    'Born into the Machine',
    'Moises Sanabria',
  ],
  alternates: { canonical: `${SITE}${modalGrayAreaMeta.proposalRoute}` },
  openGraph: {
    title: incompleteContainmentSeo.title,
    description: incompleteContainmentSeo.description,
    type: 'website',
    url: `${SITE}${modalGrayAreaMeta.proposalRoute}`,
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
    title: incompleteContainmentSeo.title,
    description: incompleteContainmentSeo.description,
    images: [`${SITE}${incompleteContainmentOgImage.src}`],
  },
};

export default function MachineSentenceNo1Route() {
  return <MachineSentencePage />;
}
