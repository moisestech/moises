"use client";
import dynamic from 'next/dynamic';

const KnightFoundationLanding = dynamic(
  () => import('@/components/page/KnightFoundationLanding'),
  { ssr: false }
);

export default function KnightFoundationClientPage() {
  return <KnightFoundationLanding />;
} 