"use client";

import dynamic from 'next/dynamic';

const OoliteWorkshopsPage = dynamic(
  () => import('@/components/page/OoliteWorkshopsPage'),
  { ssr: false }
);

export default function OoliteWorkshopsClientPage() {
  return <OoliteWorkshopsPage />;
} 