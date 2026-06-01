import type { Metadata } from 'next';
import WolfsonianFellowshipProposalPage from '@/components/grant/WolfsonianFellowshipProposalPage';

export const metadata: Metadata = {
  title: 'Wolfsonian Fellowship Proposal | Moises Sanabria',
  description:
    'Public but unlisted fellowship proposal page with a visual essay, institutional-role interaction, and downloadable proposal materials.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Wolfsonian Fellowship Proposal | Moises Sanabria',
    description:
      'A public but unlisted proposal that frames archival meaning through institutional relationships and accessible interaction.',
    type: 'website',
  },
};

export default function WolfsonianFellowshipPage() {
  return <WolfsonianFellowshipProposalPage />;
}
