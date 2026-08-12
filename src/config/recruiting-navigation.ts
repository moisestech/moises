import type { SiteNavItem } from '@/config/site-navigation';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';

/** Desktop + mobile menu for recruiting / professional dossier pages (not the main exhibition nav). */
export const RECRUITING_SITE_NAV_ITEMS: SiteNavItem[] = [
  { label: 'Capabilities', path: '/capabilities', enabled: true },
  { label: 'AI Engineering', path: '/ai-engineering', enabled: true },
  { label: 'Forward-Deployed', path: '/forward-deployed', enabled: true },
  { label: 'Creative AI', path: '/creative-ai', enabled: true },
  { label: 'Career Packet', path: '/career-packet', enabled: true },
  { label: 'CV', path: '/cv/tech', enabled: true },
  { label: 'GitHub', path: 'https://github.com/moisestech', external: true, enabled: true },
  { label: 'Bio', path: '/bio', enabled: true },
  { label: 'Email', path: 'mailto:m@moises.tech', external: true, enabled: true },
];

/** Minimal nav for tech-recruiter CV pages — no art-site sections. */
export const TECH_CV_SITE_NAV_ITEMS: SiteNavItem[] = [
  { label: 'Résumé', path: technologyCvPdfPath, external: true, enabled: true },
  { label: 'Projects', path: '/work', enabled: true },
  { label: 'Contact', path: 'mailto:m@moises.tech', external: true, enabled: true },
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/moisesdsanabria',
    external: true,
    enabled: true,
  },
  { label: 'GitHub', path: 'https://github.com/moisestech', external: true, enabled: true },
];

export function isTechCvSitePath(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === '/cv/tech') return true;
  if (pathname.startsWith('/cv/tech/')) return true;
  return false;
}

export function isRecruitingSitePath(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === '/opportunities') return true;
  if (pathname.startsWith('/opportunities/')) return true;
  if (pathname === '/technology-product-strategy') return true;
  if (pathname.startsWith('/technology-product-strategy/')) return true;
  if (pathname === '/work') return true;
  if (pathname.startsWith('/work/')) return true;
  if (pathname === '/ai-engineering') return true;
  if (pathname === '/capabilities') return true;
  if (pathname === '/career-packet') return true;
  if (pathname === '/forward-deployed') return true;
  if (pathname === '/creative-ai') return true;
  if (pathname.startsWith('/projects/')) return true;
  return false;
}

export function usesRecruitingHeader(pathname: string | null): boolean {
  return isRecruitingSitePath(pathname) || isTechCvSitePath(pathname);
}

export function recruitingNavItemsForPath(pathname: string | null): SiteNavItem[] {
  if (isTechCvSitePath(pathname)) return TECH_CV_SITE_NAV_ITEMS;
  return RECRUITING_SITE_NAV_ITEMS;
}
