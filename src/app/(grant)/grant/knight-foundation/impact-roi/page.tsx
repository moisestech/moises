import { Metadata } from 'next';
import ImpactROIClientPage from './ImpactROIClientPage';

export const metadata: Metadata = {
  title: 'Impact & ROI | Knight Foundation Proposal',
  description: 'Detailed impact analysis and return on investment metrics for our Knight Foundation grant proposal.',
};

export default function ImpactROIDetailsPage() {
  return <ImpactROIClientPage />;
} 