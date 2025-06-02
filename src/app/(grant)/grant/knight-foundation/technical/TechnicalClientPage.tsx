"use client";
import dynamic from 'next/dynamic';

const TechNonprofitTechnicalKF = dynamic(
  () => import('@/components/page/TechNonprofitTechnicalKF'),
  { ssr: false }
);

export default function TechnicalClientPage() {
  return <TechNonprofitTechnicalKF />;
} 