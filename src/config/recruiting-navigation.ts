import type { SiteNavItem } from '@/config/site-navigation';

/** Desktop + mobile menu for recruiting / professional dossier pages (not the main exhibition nav). */
export const RECRUITING_SITE_NAV_ITEMS: SiteNavItem[] = [
  { label: 'Home', path: '/', enabled: true },
  { label: 'Opportunities', path: '/opportunities', enabled: true },
  { label: 'Teaching', path: '/teaching', enabled: true },
  { label: 'Web CV', path: '/cv', enabled: true },
  { label: 'Portfolio', path: '/portfolio', enabled: true },
  { label: 'Bio', path: '/bio', enabled: true },
  { label: 'Email', path: 'mailto:m@moises.tech', external: true, enabled: true },
];

export function isRecruitingSitePath(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === '/opportunities') return true;
  if (pathname.startsWith('/opportunities/')) return true;
  if (pathname === '/technology-product-strategy') return true;
  if (pathname.startsWith('/technology-product-strategy/')) return true;
  if (pathname === '/work') return true;
  if (pathname.startsWith('/work/')) return true;
  return false;
}
