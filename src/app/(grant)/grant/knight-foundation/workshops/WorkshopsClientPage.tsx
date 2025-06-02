"use client";
import dynamic from 'next/dynamic';

const WorkshopsPage = dynamic(
  () => import('@/components/page/WorkshopsPage'),
  { ssr: false }
);

export default function WorkshopsClientPage() {
  return <WorkshopsPage />;
} 