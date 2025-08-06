"use client";

import dynamic from 'next/dynamic';

const OoliteDigitalLabPage = dynamic(
  () => import('@/components/page/OoliteDigitalLabPage'),
  { ssr: false }
);

export default function OoliteDigitalLabClientPage() {
  return <OoliteDigitalLabPage />;
} 