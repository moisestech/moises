"use client";
import dynamic from 'next/dynamic';

const RoadmapPage = dynamic(
  () => import('@/components/page/RoadmapPage'),
  { ssr: false }
);

export default function RoadmapClientPage() {
  return <RoadmapPage />;
} 