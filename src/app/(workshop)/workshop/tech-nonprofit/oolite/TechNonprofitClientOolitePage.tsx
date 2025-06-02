"use client";
import dynamic from 'next/dynamic';

const TechNonprofitClientOolite = dynamic(() => import('@/components/page/TechNonprofitClientOolite'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function TechNonprofitClientOolitePage() {
  return <TechNonprofitClientOolite />;
} 