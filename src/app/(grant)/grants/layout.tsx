import Footer from '@/features/landing/components/Footer';
import { AppProvider } from '@/context/appContext';
import { MobileMenuWrapper } from '@/components/MobileMenuWrapper';
import type { ReactNode } from 'react';

export default function GrantsDirectoryLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <MobileMenuWrapper>
        <div className="min-h-screen bg-[#f7f4ef] text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
          {children}
        </div>
      </MobileMenuWrapper>
      <Footer />
    </AppProvider>
  );
}
