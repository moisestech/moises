import type { Metadata } from 'next';
import { BornIntoTheMachineSprintPage } from '@/components/research/BornIntoTheMachineSprintPage';
import {
  bornIntoTheMachineSprintHeroImage,
  bornIntoTheMachineSprintSeo,
} from '@/content/research/born-into-the-machine-sprint';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: bornIntoTheMachineSprintSeo.title,
  description: bornIntoTheMachineSprintSeo.description,
  keywords: [
    'Born into the Machine',
    'AI Sprint',
    'Miami art',
    'No Vacancy',
    'public art',
    'grant writing',
    'Moises Sanabria',
    'Idea Center',
    'Miami Dade College',
  ],
  alternates: { canonical: `${SITE}/research/born-into-the-machine` },
  openGraph: {
    title: bornIntoTheMachineSprintSeo.title,
    description: bornIntoTheMachineSprintSeo.description,
    type: 'website',
    url: `${SITE}/research/born-into-the-machine`,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [
      {
        url: bornIntoTheMachineSprintHeroImage,
        alt: bornIntoTheMachineSprintSeo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: bornIntoTheMachineSprintSeo.title,
    description: bornIntoTheMachineSprintSeo.description,
    images: [bornIntoTheMachineSprintHeroImage],
  },
};

export default function BornIntoTheMachinePage() {
  return <BornIntoTheMachineSprintPage />;
}
