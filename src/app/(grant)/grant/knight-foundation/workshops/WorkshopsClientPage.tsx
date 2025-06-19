"use client";
import dynamic from 'next/dynamic';

const WorkshopsPage = dynamic(
  () => import('@/components/page/KFWorkshopsPage'),
  { ssr: false }
);

export default function WorkshopsClientPage() {
  return <WorkshopsPage />;
} 