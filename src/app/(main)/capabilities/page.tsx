import type { Metadata } from 'next';
import { CapabilitiesPageClient } from '@/components/capabilities/CapabilitiesPageClient';

export const metadata: Metadata = {
  title: 'Moises Sanabria — Technical Capabilities',
  description:
    'Technical Proof Engine: six capability pillars with Proven, Building, and Planned skills — each Proven skill links to a public repo, case study, or demo.',
  alternates: { canonical: '/capabilities' },
  openGraph: {
    title: 'Moises Sanabria — Technical Capabilities',
    description:
      'Week-one proof map across AI engineering, software, data, creative technology, DevOps, and leadership.',
    type: 'website',
    url: '/capabilities',
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesPageClient />;
}
