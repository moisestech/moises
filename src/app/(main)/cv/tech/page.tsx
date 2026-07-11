import type { Metadata } from 'next';
import TechnologyCvView from '@/components/cv/TechnologyCvView';

export const metadata: Metadata = {
  title: 'Technology CV | Moises Sanabria',
  description:
    'Full-Stack AI Engineer — applied AI product engineering, solutions engineering, and agentic development workflows.',
  keywords: [
    'Full-Stack AI Engineer',
    'Applied AI Engineer',
    'Solutions Engineer',
    'AI Product Engineer',
    'Miami AI engineer',
    'full-stack developer Miami',
  ],
  alternates: { canonical: 'https://moises.tech/cv/tech' },
  openGraph: {
    title: 'Technology CV | Moises Sanabria',
    description:
      'Full-Stack AI Engineer — applied AI product engineering, solutions engineering, and agentic development workflows.',
    url: 'https://moises.tech/cv/tech',
  },
  robots: { index: true, follow: true },
};

export default function TechnologyCvPage() {
  return <TechnologyCvView />;
}
