'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  SITE_HEADER_EXPANDED_HEIGHT_VAR,
  SITE_HEADER_HEIGHT_VAR,
  SITE_HEADER_SCROLL_THRESHOLD_PX,
} from '@/config/site-header-layout';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { isWorkshopNavContext, navigationItemsForPath } from '@/config/site-navigation';
import { isTrustLabPath, TRUST_BASE, TRUST_TITLE } from '@/content/workshops/trust-is-not-a-vibe';
import HeaderControls from './HeaderControls';
import MobileMenu from './MobileMenu';
import DesktopNavigation from './DesktopNavigation';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

export default function Header({ onMobileMenuToggle, mobileMenuOpen }: { onMobileMenuToggle: () => void, mobileMenuOpen: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SITE_HEADER_SCROLL_THRESHOLD_PX);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const el = headerRef.current;
    if (!el) return;

    const syncHeights = () => {
      const height = Math.round(el.getBoundingClientRect().height);
      if (height <= 0) return;

      document.documentElement.style.setProperty(SITE_HEADER_HEIGHT_VAR, `${height}px`);

      const scrolled = window.scrollY > SITE_HEADER_SCROLL_THRESHOLD_PX;
      if (!scrolled) {
        document.documentElement.style.setProperty(SITE_HEADER_EXPANDED_HEIGHT_VAR, `${height}px`);
      }
    };

    syncHeights();

    const ro = new ResizeObserver(syncHeights);
    ro.observe(el);

    window.addEventListener('scroll', syncHeights, { passive: true });
    window.addEventListener('resize', syncHeights);

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', syncHeights);
      window.removeEventListener('resize', syncHeights);
    };
  }, [mounted, isScrolled]);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const menuItems = navigationItemsForPath(pathname, 'desktop');
  const trustFocus = isTrustLabPath(pathname);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors font-['MoMA_Sans'] ${
          isDark 
            ? 'bg-black text-white border-black' 
            : 'bg-white text-black border-none'
        } border-b`}
      >
        {/* Fixed Header Controls */}
        {!dropdownOpen && (
          <div className={`hidden md:block absolute right-0 z-10 px-10 ${trustFocus ? 'top-1/2 -translate-y-1/2' : 'top-[30px]'}`}>
            <HeaderControls variant={trustFocus ? 'recruiting' : 'default'} />
          </div>
        )}

        <div className={`transition-all duration-300 ${isScrolled && !trustFocus ? 'h-[80px]' : 'h-auto'}`}>
          {/* First row */}
          <div className={`transition-transform duration-300 ${
            isScrolled
              ? '-translate-y-full opacity-0 md:h-0 overflow-hidden'
              : trustFocus
                ? 'md:hidden'
                : 'translate-y-0 opacity-100'
          }`}>
            <div className="max-w-7xl mx-auto px-10 pt-7 flex justify-between items-start">
              {trustFocus ? (
                <Link href={TRUST_BASE} className="text-lg font-bold tracking-tight">
                  {TRUST_TITLE}
                </Link>
              ) : (
                <Logo />
              )}
              
              {/* Mobile Controls */}
              <div className="md:hidden flex items-center gap-3">
                {!mobileMenuOpen && (
                  <button
                    onClick={onMobileMenuToggle}
                    className="p-2"
                    aria-label="Open menu"
                  >
                    <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Second row - desktop navigation only */}
          <div className={`transition-all duration-300 ${
            isDark 
              ? 'bg-black border-black' 
              : 'bg-white'
          } hidden md:block w-full ${
            isScrolled ? 'fixed top-0 left-0 right-0 border-t' : 'relative'
          }`}>
            <div className={`mx-auto flex min-w-0 max-w-7xl items-center px-11 ${trustFocus ? 'py-4 pr-24' : 'py-6'}`}>
              <DesktopNavigation
                menuItems={menuItems}
                onDropdownOpen={setDropdownOpen}
                workshopMode={isWorkshopNavContext(pathname)}
                trustFocus={trustFocus}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 