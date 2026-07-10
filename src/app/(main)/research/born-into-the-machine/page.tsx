import type { Metadata } from 'next';
import { BitmPageClient } from '@/components/born-into-the-machine/BitmPageClient';
import { bitmSeo } from '@/content/born-into-the-machine/bitm-page';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: bitmSeo.title,
  description: bitmSeo.description,
  keywords: [
    'Born into the Machine',
    'AI studio infrastructure',
    'public art',
    'Miami art',
    'Moises Sanabria',
    'sculpture',
    'generative AI',
    'museum practice',
  ],
  alternates: { canonical: `${SITE}/research/born-into-the-machine` },
  openGraph: {
    title: bitmSeo.title,
    description: bitmSeo.description,
    type: 'website',
    url: `${SITE}/research/born-into-the-machine`,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [
      {
        url: bitmSeo.ogImage,
        alt: bitmSeo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: bitmSeo.title,
    description: bitmSeo.description,
    images: [bitmSeo.ogImage],
  },
};

export default function BornIntoTheMachinePage() {
  return <BitmPageClient />;
}
