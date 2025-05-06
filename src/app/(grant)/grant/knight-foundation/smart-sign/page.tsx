import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const SmartSignPage = dynamic(
  () => import('@/components/page/SmartSignPage'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Smart Signage | Knight Foundation Proposal',
  description: 'Technical details and implementation plan for the Smart Sign platform, including features, tech stack, and development timeline.'
};

export default function SmartSignDetailsPage() {
  return <SmartSignPage />;
} 