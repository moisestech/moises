"use client";
import dynamic from 'next/dynamic';

const SmartSignPage = dynamic(
  () => import('@/components/page/SmartSignPage'),
  { ssr: false }
);

export default function SmartSignClientPage() {
  return <SmartSignPage />;
} 