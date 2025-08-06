"use client";
import dynamic from 'next/dynamic';

const OoliteDigitalOverviewPage = dynamic(
  () => import('@/components/page/OoliteDigitalOverviewPage'),
  { ssr: false }
);

export default function OoliteDigitalOverviewClientPage() {
  return <OoliteDigitalOverviewPage />;
} 