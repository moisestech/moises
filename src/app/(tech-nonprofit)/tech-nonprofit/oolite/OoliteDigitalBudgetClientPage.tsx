"use client";
import dynamic from 'next/dynamic';

console.log('🟢 [OoliteDigitalBudgetClientPage] Module loaded');

const OoliteDigitalBudgetPage = dynamic(
  () => {
    console.log('🟢 [OoliteDigitalBudgetClientPage] Dynamic import starting...');
    return import('@/components/page/OoliteDigitalBudgetPage').then((module) => {
      console.log('🟢 [OoliteDigitalBudgetClientPage] Dynamic import completed');
      return module;
    });
  },
  { 
    ssr: false,
    loading: () => {
      console.log('🟢 [OoliteDigitalBudgetClientPage] Loading component...');
      return <div>Loading budget page...</div>;
    }
  }
);

export default function OoliteDigitalBudgetClientPage() {
  console.log('🟢 [OoliteDigitalBudgetClientPage] Component rendering');
  console.log('🟢 [OoliteDigitalBudgetClientPage] Current pathname:', typeof window !== 'undefined' ? window.location.pathname : 'SSR');
  console.log('🟢 [OoliteDigitalBudgetClientPage] About to render OoliteDigitalBudgetPage');
  
  return <OoliteDigitalBudgetPage />;
} 