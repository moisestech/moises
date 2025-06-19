"use client";
import dynamic from 'next/dynamic';

const AIToolkitsPage = dynamic(
  () => import('../../../../../components/page/AIToolkitsPage'),
  { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-[#A4FF4E]">Loading AI Toolkit...</div>
  }
);

export default function Page() {
  return <AIToolkitsPage />;
} 