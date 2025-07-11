import { Header } from '@/features/landing';
import Footer from '@/features/landing/components/Footer';
import { AppProvider } from '@/context/appContext';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const MobileMenuOverlayClient = dynamic(
  () => import('@/features/landing/components/MobileMenuOverlayClient'),
  { ssr: false }
);

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <MobileMenuOverlayClient>
        {children}
      </MobileMenuOverlayClient>
      <Footer />
    </AppProvider>
  );
} 