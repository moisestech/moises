"use client";
import dynamic from 'next/dynamic';

const TechNonprofitClient = dynamic(() => import('@/components/page/TechNonprofitClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function TechNonprofitClientPage() {
  return <TechNonprofitClient />;
} 