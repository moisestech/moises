'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Logo } from '@/features/landing';
import HeaderControls from '@/features/landing/components/HeaderControls';
import { RECRUITING_SITE_NAV_ITEMS } from '@/config/recruiting-navigation';

type RecruitingSiteHeaderProps = {
  onMobileMenuToggle: () => void;
  mobileMenuOpen: boolean;
};

export function RecruitingSiteHeader({ onMobileMenuToggle, mobileMenuOpen }: RecruitingSiteHeaderProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const linkClass = (active: boolean) =>
    `transition-colors py-2 font-bold ${
      active
        ? isDark
          ? 'border-b-4 border-white pb-0 text-white'
          : 'border-b-4 border-black pb-0 text-black'
        : isDark
          ? 'text-white hover:text-gray-300'
          : 'text-black hover:text-gray-600'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 font-['MoMA_Sans'] transition-colors ${
        isDark ? 'border-b border-black bg-black text-white' : 'border-b border-none bg-white text-black'
      }`}
    >
      {!mobileMenuOpen ? (
        <div className="hidden md:block absolute right-0 top-[30px] z-10 px-10">
          <HeaderControls variant="recruiting" />
        </div>
      ) : null}

      <div className="max-w-7xl mx-auto flex items-start justify-between gap-4 px-6 pt-6 md:px-10 md:pt-7">
        <Logo size="sm" />
        <button
          type="button"
          className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden ${
            isDark ? 'text-white' : 'text-black'
          }`}
          onClick={onMobileMenuToggle}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <Menu className="h-8 w-8" aria-hidden />
        </button>
      </div>

      <div
        className={`hidden md:block w-full ${isDark ? 'border-black bg-black' : 'border-none bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-11 py-5">
          <nav aria-label="Professional site">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xl lg:gap-x-8">
              {RECRUITING_SITE_NAV_ITEMS.map((item) => {
                const active =
                  !item.external &&
                  (pathname === item.path ||
                    (item.path.length > 1 && pathname.startsWith(`${item.path}/`)));
                return (
                  <li key={`${item.label}:${item.path}`}>
                    {item.external ? (
                      <a
                        href={item.path}
                        className={linkClass(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.path} className={linkClass(active)}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
