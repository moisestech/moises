import type { Metadata } from 'next';
import TheInternetIsOtherAiClient from '@/components/research/the-internet-is-other-ai/TheInternetIsOtherAiClient';
import {
  PROJECT_PATH,
  media,
  projectMeta,
} from '@/content/research/the-internet-is-other-ai/projectData';

const SITE = 'https://moises.tech';
const canonical = `${SITE}${PROJECT_PATH}`;
const ogImage = `${SITE}${media.og.src}`;

export const metadata: Metadata = {
  title: projectMeta.seoTitle,
  description: projectMeta.seoDescription,
  keywords: [
    'The Internet Is Other AI',
    'Born into the Machine',
    'browser artwork',
    'multi-agent simulation',
    'Moises Sanabria',
    'net art',
    'Prompt API',
    'WebMCP',
  ],
  alternates: { canonical },
  openGraph: {
    title: projectMeta.seoTitle,
    description: projectMeta.seoDescription,
    type: 'website',
    url: canonical,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: media.og.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: projectMeta.seoTitle,
    description: projectMeta.seoDescription,
    images: [ogImage],
  },
};

export default function TheInternetIsOtherAiPage() {
  return <TheInternetIsOtherAiClient />;
}
