"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Header from './Header';
import { RecruitingSiteHeader } from '@/components/opportunities/RecruitingSiteHeader';
import { isWorkshopNavContext, navigationItemsForPath } from '@/config/site-navigation';
import {
  isRecruitingSitePath,
  recruitingNavItemsForPath,
  usesRecruitingHeader,
} from '@/config/recruiting-navigation';
import { RECRUITING_MAIN_PADDING_TOP, RECRUITING_PAGE_SURFACE } from '@/config/recruiting-layout';
import { cn } from '@/lib/utils';

export default function MobileMenuOverlayClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const recruiting = usesRecruitingHeader(pathname);
  const recruitingSurface = isRecruitingSitePath(pathname);
  const menuItems = recruiting
    ? recruitingNavItemsForPath(pathname)
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
      {recruitingSurface ? (
        <div className={cn(RECRUITING_MAIN_PADDING_TOP, RECRUITING_PAGE_SURFACE)}>{children}</div>
      ) : (
        children
      )}
    </>
  );
}