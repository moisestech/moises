"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Header from './Header';
import { RecruitingSiteHeader } from '@/components/opportunities/RecruitingSiteHeader';
import { isWorkshopNavContext, navigationItemsForPath } from '@/config/site-navigation';
import { isRecruitingSitePath, RECRUITING_SITE_NAV_ITEMS } from '@/config/recruiting-navigation';
import { RECRUITING_MAIN_PADDING_TOP } from '@/config/recruiting-layout';

export default function MobileMenuOverlayClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const recruiting = isRecruitingSitePath(pathname);
  const menuItems = recruiting
    ? RECRUITING_SITE_NAV_ITEMS
    : navigationItemsForPath(pathname, 'mobile');

  return (
    <>
      {recruiting ? (
        <RecruitingSiteHeader
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          mobileMenuOpen={mobileMenuOpen}
        />
      ) : (
        <Header
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          mobileMenuOpen={mobileMenuOpen}
        />
      )}
      <MobileMenu
        menuItems={menuItems}
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen((v) => !v)}
        workshopMode={isWorkshopNavContext(pathname)}
        hidePrimaryMobileToggle={recruiting}
      />
      {recruiting ? <div className={RECRUITING_MAIN_PADDING_TOP}>{children}</div> : children}
    </>
  );
}