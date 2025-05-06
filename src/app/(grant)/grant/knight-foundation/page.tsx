import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import the client component dynamically with no SSR
const KnightFoundationLanding = dynamic(
    () => import('@/components/page/KnightFoundationLanding'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'AI24 Operating Ethos | Knight Foundation Proposal',
  description: 'Building sustainable digital capacity through human-centered technology - A proposal for the Knight Foundation.',
};

export default function KnightFoundationPage() {
  return <KnightFoundationLanding />;
}
