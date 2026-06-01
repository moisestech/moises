import type { Metadata } from 'next';
import WolfsonianFellowshipProposalPage from '@/components/grant/WolfsonianFellowshipProposalPage';

export const metadata: Metadata = {
  title: 'The Archive Dreams in Public | Moises Sanabria',
  description:
    'A Wolfsonian-FIU Creative Fellowship proposal by Moises Sanabria exploring what happens when a museum archive becomes the incomplete memory of a living digital society. Archival objects, metadata, agents, citation trails, and synthetic saturation converge inside a durational digital painting.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/grant/wolfsonian-fellowship',
  },
  openGraph: {
    title: 'The Archive Dreams in Public | Moises Sanabria',
    description:
      'A Wolfsonian-FIU Creative Fellowship proposal by Moises Sanabria exploring what happens when a museum archive becomes the incomplete memory of a living digital society. Archival objects, metadata, agents, citation trails, and synthetic saturation converge inside a durational digital painting.',
    type: 'website',
  },
};

export default function WolfsonianFellowshipPage() {
  return <WolfsonianFellowshipProposalPage />;
}
