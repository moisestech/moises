import { Metadata } from 'next';
import ProposalClientPage from './ProposalClientPage';

export const metadata: Metadata = {
  title: 'Proposal Details | Knight Foundation Grant',
  description: 'Detailed proposal for the Knight Foundation Art + Tech Expansion Fund, including activities, outcomes, and sustainability plan.',
};

export default function ProposalPage() {
  return <ProposalClientPage />;
}