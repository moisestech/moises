"use client";
import dynamic from 'next/dynamic';

const ImpactROIPage = dynamic(
  () => import('@/components/page/ImpactROIPage'),
  { ssr: false }
);

export default function ImpactROIClientPage() {
  return <ImpactROIPage />;
} 