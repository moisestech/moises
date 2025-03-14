import Header from '@/components/Header';
import Footer from '@/components/Footer';
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