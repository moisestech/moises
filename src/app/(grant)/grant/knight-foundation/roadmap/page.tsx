import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const RoadmapPage = dynamic(
  () => import('@/components/page/RoadmapPage'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Project Roadmap | Knight Foundation Proposal',
  description: 'Detailed project timeline and implementation roadmap for our Knight Foundation grant proposal.',
};

export default function RoadmapDetailsPage() {
  return <RoadmapPage />;
} 