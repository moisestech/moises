import { Metadata } from 'next';
import NoisySystemsPageClient from '@/components/page/NoisySystemsPageClient';

export const metadata: Metadata = {
  title: 'Noisy Systems | Moises Sanabria',
  description:
    'Research companion for a practice-based paper on noise, slop, delusion amplification, and conscious decoding in generative AI. Abstract, selected works, and process notes related to the Noisy Systems call for papers.',
  keywords: [
    'noisy systems',
    'aesthetics',
    'epistemology',
    'computation',
    'practice-based research',
    'algorithmic culture',
    'Moises Sanabria',
  ],
};

export default function NoisySystemsPage() {
  return <NoisySystemsPageClient />;
}
