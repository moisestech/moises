"use client";
import dynamic from 'next/dynamic';

const SmartSignClient = dynamic(() => import('@/components/page/SmartSignClient'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading...</div>
      </div>
    </div>
  )
});

export default function SmartSignClientPage() {
  return <SmartSignClient />;
} 