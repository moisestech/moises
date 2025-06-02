"use client";
import dynamic from 'next/dynamic';

const AIMarketingClient = dynamic(() => import('@/components/page/AIMarketingClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function AIMarketingClientPage() {
  return <AIMarketingClient />;
} 