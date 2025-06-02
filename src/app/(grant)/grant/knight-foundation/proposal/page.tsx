import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const ProposalPage = dynamic(
  () => import('@/components/page/ProposalPage'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Full Proposal | Knight Foundation',
  description: 'Complete 1,000-word proposal narrative for the AI24 × Knight Art + Tech Expansion Fund.',
};

export default function ProposalDetailsPage() {
  return <ProposalPage />;
} 