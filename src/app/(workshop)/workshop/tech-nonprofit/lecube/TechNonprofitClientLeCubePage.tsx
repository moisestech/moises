"use client";
import dynamic from 'next/dynamic';

const TechNonprofitClientLeCube = dynamic(() => import('@/components/page/TechNonprofitClientLeCube'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function TechNonprofitClientLeCubePage() {
  return <TechNonprofitClientLeCube />;
} 