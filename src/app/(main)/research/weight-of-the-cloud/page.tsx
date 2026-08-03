import { Metadata } from 'next';
import WeightOfTheCloudClient from '@/components/research/WeightOfTheCloudClient';
import {
  weightOfTheCloudHeroMedia,
  weightOfTheCloudIndexImage,
} from '@/content/research/weight-of-the-cloud';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: 'The Weight of the Cloud — Moises Sanabria + Fabiola Larios',
  description:
    'Research dossier for a four-foot modular sculpture of obsolete electronics, structural metal, and embedded light. What does the cloud weigh once its previous bodies are no longer useful?',
  keywords: [
    'The Weight of the Cloud',
    'e-waste sculpture',
    'Moises Sanabria',
    'Fabiola Larios',
    'obsolete electronics',
    'Miami art',
    'research sculpture',
    'modular sculpture',
  ],
  alternates: { canonical: `${SITE}/research/weight-of-the-cloud` },
  openGraph: {
    title: 'The Weight of the Cloud — Moises Sanabria + Fabiola Larios',
    description:
      'A four-foot cube of obsolete electronics giving the cloud a body. Sculpture in development, 2026.',
    type: 'website',
    url: `${SITE}/research/weight-of-the-cloud`,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [
      {
        url: weightOfTheCloudIndexImage.url,
        alt: weightOfTheCloudHeroMedia.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [weightOfTheCloudIndexImage.url],
  },
};

export default function WeightOfTheCloudPage() {
  return <WeightOfTheCloudClient />;
}
