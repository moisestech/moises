"use client";

import dynamic from 'next/dynamic';

const OoliteAIToolsPage = dynamic(
  () => import('@/components/page/OoliteAIToolsPage'),
  { ssr: false }
);

export default function OoliteAIToolsClientPage() {
  return <OoliteAIToolsPage />;
} 