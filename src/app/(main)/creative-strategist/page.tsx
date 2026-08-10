import type { Metadata } from 'next';
import { CreativeStrategistClient } from '@/components/flagships/CreativeStrategistClient';
import { creativeStrategistFlagship } from '@/content/flagships/creative-strategist';

const { seo } = creativeStrategistFlagship;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: 'https://moises.tech/creative-strategist',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export default function CreativeStrategistPage() {
  return <CreativeStrategistClient />;
}
