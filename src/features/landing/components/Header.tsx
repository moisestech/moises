'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import HeaderControls from './HeaderControls';
import MobileMenu from './MobileMenu';
import DesktopNavigation from './DesktopNavigation';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

interface MenuItem {
  label: string;
  path: string;
  enabled?: boolean;
  external?: boolean;
}

export default function Header({ onMobileMenuToggle, mobileMenuOpen }: { onMobileMenuToggle: () => void, mobileMenuOpen: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const menuItems: MenuItem[] = [
    { label: 'Visit', path: '/visit' },
    { label: 'Exhibitions', path: '/exhibitions' },
    { label: 'Events', path: '/events' },
    { label: 'Art and Artist', path: '/portfolio', enabled: true },
    { label: 'Bio', path: '/bio', enabled: true },
    { label: 'Store', path: 'https://www.artsy.net/artist/moises-sanabria', external: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors font-['MoMA_Sans'] ${
          isDark 
            ? 'bg-black text-white border-black' 
            : 'bg-white text-black border-none'
        } border-b`}
      >
        {/* Fixed Header Controls */}
        {!dropdownOpen && (
          <div className="hidden md:block absolute right-0 top-[30px] px-10 z-10">
            <HeaderControls />
          </div>
        )}

        <div className={`transition-all duration-300 ${isScrolled ? 'h-[80px]' : 'h-auto'}`}>
          {/* First row */}
          <div className={`transition-transform duration-300 ${
            isScrolled
              ? '-translate-y-full opacity-0 md:h-0 overflow-hidden'
              : 'translate-y-0 opacity-100'
          }`}>
            <div className="max-w-7xl mx-auto px-10 pt-7 flex justify-between items-start">
              <Logo />
              
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
            <div className="max-w-7xl mx-auto px-11 py-6 flex justify-between items-center">
              <DesktopNavigation menuItems={menuItems} onDropdownOpen={setDropdownOpen} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 