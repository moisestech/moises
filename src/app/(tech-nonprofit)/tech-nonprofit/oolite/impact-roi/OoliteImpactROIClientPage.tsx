"use client";

import dynamic from 'next/dynamic';

const OoliteImpactROIPage = dynamic(
  () => import('@/components/page/OoliteImpactROIPage'),
  { ssr: false }
);

export default function OoliteImpactROIClientPage() {
  return <OoliteImpactROIPage />;
} 