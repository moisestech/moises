import type { ReactNode } from 'react';
import Footer from '@/features/landing/components/Footer';
import { AppProvider } from '@/context/appContext';
import { MobileMenuWrapper } from '@/components/MobileMenuWrapper';

export default function NoVacancy2026Layout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <MobileMenuWrapper>{children}</MobileMenuWrapper>
      <Footer />
    </AppProvider>
  );
}
