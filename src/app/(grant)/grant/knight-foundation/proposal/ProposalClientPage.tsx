"use client";
import dynamic from 'next/dynamic';

const ProposalPage = dynamic(
  () => import('@/components/page/KnightFoundationProposalPage'),
  { ssr: false }
);

export default function ProposalClientPage() {
  return <ProposalPage />;
} 