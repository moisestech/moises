import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const ImpactROIPage = dynamic(
  () => import('@/components/page/ImpactROIPage'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Impact & ROI | Knight Foundation Proposal',
  description: 'Detailed impact analysis and return on investment metrics for our Knight Foundation grant proposal.',
};

export default function ImpactROIDetailsPage() {
  return <ImpactROIPage />;
} 