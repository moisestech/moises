import type { Metadata } from 'next';
import { BornIntoTheMachineSprintPage } from '@/components/research/BornIntoTheMachineSprintPage';
import { bornIntoTheMachineSprintSeo } from '@/content/research/born-into-the-machine-sprint';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: bornIntoTheMachineSprintSeo.title,
  description: bornIntoTheMachineSprintSeo.description,
  keywords: [
    'Born into the Machine',
    'AI Sprint for Artists',
    'The Idea Center',
    'Miami Dade College',
    'Miami art',
    'No Vacancy',
    'public art',
    'Moises Sanabria',
  ],
  alternates: { canonical: `${SITE}/research/born-into-the-machine/sprint` },
  openGraph: {
    title: bornIntoTheMachineSprintSeo.title,
    description: bornIntoTheMachineSprintSeo.description,
    type: 'website',
    url: `${SITE}/research/born-into-the-machine/sprint`,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [
      {
        url: bornIntoTheMachineSprintSeo.ogImage,
        alt: bornIntoTheMachineSprintSeo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: bornIntoTheMachineSprintSeo.title,
    description: bornIntoTheMachineSprintSeo.description,
    images: [bornIntoTheMachineSprintSeo.ogImage],
  },
};

export default function BornIntoTheMachineSprintRoute() {
  return <BornIntoTheMachineSprintPage />;
}
