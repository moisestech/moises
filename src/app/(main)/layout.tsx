import { ConditionalFooter } from '@/components/cv/ConditionalFooter';
import { AppProvider } from '@/context/appContext';
import type { ReactNode } from 'react';
import { MobileMenuWrapper } from '@/components/MobileMenuWrapper';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <MobileMenuWrapper>
        {children}
      </MobileMenuWrapper>
      <ConditionalFooter />
    </AppProvider>
  );
} 