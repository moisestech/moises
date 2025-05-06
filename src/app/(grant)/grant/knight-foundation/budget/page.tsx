import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const BudgetPage = dynamic(
  () => import('@/components/page/BudgetPage'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Budget Details | Knight Foundation Proposal',
  description: 'Detailed budget breakdown and allocation strategy for the Knight Foundation grant proposal, including interactive visualizations and quarterly projections.'
};

export default function BudgetDetailsPage() {
  return <BudgetPage />;
} 