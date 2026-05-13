'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { RECRUITING_SITE_NAV_ITEMS } from '@/config/recruiting-navigation';

type RecruitingSiteHeaderProps = {
  onMobileMenuToggle: () => void;
  mobileMenuOpen: boolean;
};

export function RecruitingSiteHeader({ onMobileMenuToggle, mobileMenuOpen }: RecruitingSiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-stone-200 bg-stone-50/95 backdrop-blur supports-[backdrop-filter]:bg-stone-50/90">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-serif text-lg font-semibold tracking-tight text-stone-900 hover:text-cyan-900"
        >
          moises.tech
        </Link>

        <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Professional site">
          {RECRUITING_SITE_NAV_ITEMS.map((item) => {
            const active =
              !item.external &&
              (pathname === item.path ||
                (item.path.length > 1 && pathname.startsWith(`${item.path}/`)));
            const base =
              'rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ' +
              (active
                ? 'bg-stone-900 text-white'
                : 'text-stone-700 hover:bg-white hover:text-stone-900 border border-transparent hover:border-stone-200');
            return item.external ? (
              <a key={item.path} href={item.path} className={base}>
                {item.label}
              </a>
            ) : (
              <Link key={item.path} href={item.path} className={base}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-800 md:hidden"
          onClick={onMobileMenuToggle}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </div>
    </header>
  );
}
