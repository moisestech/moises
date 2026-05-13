import Footer from '@/features/landing/components/Footer';
import { AppProvider } from '@/context/appContext';
import type { ReactNode } from 'react';
import { MobileMenuWrapper } from '@/components/MobileMenuWrapper';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <MobileMenuWrapper>
        {children}
      </MobileMenuWrapper>
      <Footer />
    </AppProvider>
  );
} 