import Footer from '@/features/landing/components/Footer';
import { AppProvider } from '@/context/appContext';
import { MobileMenuWrapper } from '@/components/MobileMenuWrapper';
import type { ReactNode } from 'react';

export default function WolfsonianFellowshipLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <MobileMenuWrapper>{children}</MobileMenuWrapper>
      <Footer />
    </AppProvider>
  );
}
