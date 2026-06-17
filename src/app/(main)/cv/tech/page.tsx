import type { Metadata } from 'next';
import TechnologyCvView from '@/components/cv/TechnologyCvView';

export const metadata: Metadata = {
  title: 'Technology CV | Moises Sanabria',
  description:
    'Technology curriculum vitae — engineering, data pipelines, publisher systems, and AI product experience.',
  robots: { index: true, follow: true },
};

export default function TechnologyCvPage() {
  return <TechnologyCvView />;
}
