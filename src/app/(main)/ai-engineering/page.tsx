import type { Metadata } from 'next';
import { AiEngineeringPageClient } from '@/components/ai-engineering/AiEngineeringPageClient';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';

const { seo } = aiEngineeringPacket;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: 'https://moises.tech/ai-engineering',
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Moises Sanabria — Full-Stack AI Systems Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export default function AiEngineeringPage() {
  return <AiEngineeringPageClient />;
}
