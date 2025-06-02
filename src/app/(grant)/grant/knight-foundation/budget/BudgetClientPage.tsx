"use client";
import dynamic from 'next/dynamic';

const BudgetPage = dynamic(
  () => import('@/components/page/BudgetPage'),
  { ssr: false }
);

export default function BudgetClientPage() {
  return <BudgetPage />;
} 