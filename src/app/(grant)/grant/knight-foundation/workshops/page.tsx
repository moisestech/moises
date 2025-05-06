import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const WorkshopsPage = dynamic(
  () => import('@/components/page/WorkshopsPage'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Workshop Program | Knight Foundation Proposal',
  description: 'Comprehensive workshop program details for the Knight Foundation grant proposal, including schedules, venues, and community impact metrics.'
};

export default function WorkshopsDetailsPage() {
  return <WorkshopsPage />;
} 