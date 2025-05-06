import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const TechNonprofitTechnicalKF = dynamic(
  () => import('@/components/page/TechNonprofitTechnicalKF'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Technical Details | Knight Foundation Proposal',
  description: 'Detailed technical implementation and architecture for our Knight Foundation grant proposal.',
};

export default function TechnicalDetailsPage() {
  return <TechNonprofitTechnicalKF />;
} 