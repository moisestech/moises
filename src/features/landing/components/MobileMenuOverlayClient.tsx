"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Header from './Header';
import { isWorkshopNavContext, navigationItemsForPath } from '@/config/site-navigation';

export default function MobileMenuOverlayClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = navigationItemsForPath(pathname, 'mobile');

  return (
    <>
      <Header
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        mobileMenuOpen={mobileMenuOpen}
      />
      <MobileMenu
        menuItems={menuItems}
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen((v) => !v)}
        workshopMode={isWorkshopNavContext(pathname)}
      />
      {children}
    </>
  );
} 