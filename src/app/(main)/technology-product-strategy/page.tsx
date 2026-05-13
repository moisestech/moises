import type { Metadata } from 'next';
import TechnologyProductStrategyClient from '@/components/technology-product-strategy/TechnologyProductStrategyClient';

const title = 'Technology product strategy for public information | Moises Sanabria';
const description =
  'Selected case studies, frameworks, and capabilities for technology product strategy at the intersection of AI, civic media, and public information systems.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
  },
};

export default function TechnologyProductStrategyPage() {
  return <TechnologyProductStrategyClient />;
}
