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
  },
};

export default function AiEngineeringPage() {
  return <AiEngineeringPageClient />;
}
