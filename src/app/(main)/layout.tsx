import { Header } from '@/features/landing';
import Footer from '@/features/landing/components/Footer';
import { AppProvider } from '@/context/appContext';
import type { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <Header />
      {children}
      <Footer />
    </AppProvider>
  );
} 