"use client";
import dynamic from 'next/dynamic';

const OoliteRoadmapPage = dynamic(
  () => import('@/components/page/OoliteRoadmapPage'),
  { ssr: false }
);

export default function OoliteRoadmapClientPage() {
  return <OoliteRoadmapPage />;
} 