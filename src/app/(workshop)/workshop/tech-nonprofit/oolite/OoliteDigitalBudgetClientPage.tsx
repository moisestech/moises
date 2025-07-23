"use client";
import dynamic from 'next/dynamic';

const OoliteDigitalBudgetPage = dynamic(
  () => import('@/components/page/OoliteDigitalBudgetPage'),
  { ssr: false }
);

export default function OoliteDigitalBudgetClientPage() {
  return <OoliteDigitalBudgetPage />;
} 