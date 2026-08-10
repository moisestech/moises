import type { Metadata } from 'next';
import { CreativeAiClient } from '@/components/flagships/CreativeAiClient';
import { creativeAiFlagship } from '@/content/flagships/creative-ai';

const { seo } = creativeAiFlagship;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: 'https://moises.tech/creative-ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export default function CreativeAiPage() {
  return <CreativeAiClient />;
}
