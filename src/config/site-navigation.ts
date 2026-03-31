/**
 * Main site header + mobile menu items.
 * Workshop context uses a shorter list so /workshops and /workshop/* (main layout) aren’t buried in exhibition nav.
 */
export type SiteNavItem = {
  label: string
  path: string
  enabled?: boolean
  external?: boolean
}

export const MAIN_SITE_NAV_ITEMS: SiteNavItem[] = [
  { label: 'Visit', path: '/visit' },
  { label: 'Exhibitions', path: '/exhibitions' },
  { label: 'Events', path: '/events' },
  { label: 'Selected Works', path: '/selected-works', enabled: true },
  { label: 'Born in the Machine', path: '/research/born-into-the-machine', enabled: true },
  { label: 'Art and Artist', path: '/portfolio', enabled: true },
  { label: 'Bio', path: '/bio', enabled: true },
  { label: 'Store', path: 'https://www.artsy.net/artist/moises-sanabria', external: true },
]

/** Slightly shorter labels for the mobile overlay (legacy parity). */
export const MAIN_SITE_NAV_ITEMS_MOBILE: SiteNavItem[] = [
  { label: 'Visit', path: '/visit' },
  { label: 'Exhibitions', path: '/exhibitions' },
  { label: 'Events', path: '/events' },
  { label: 'Born in the Machine', path: '/research/born-into-the-machine', enabled: true },
  { label: 'Art and Artist', path: '/portfolio', enabled: true },
  { label: 'Bio', path: '/bio', enabled: true },
  { label: 'Store', path: 'https://www.artsy.net/artist/moises-sanabria', external: true },
]

/** Program routes — short labels for header + workshop strip */
export const WORKSHOP_NAV_PROGRAMS: SiteNavItem[] = [
  { label: 'Hub', path: '/workshops', enabled: true },
  { label: 'Websites', path: '/workshop/own-your-digital-presence', enabled: true },
  { label: 'AI agents', path: '/workshop/the-art-of-ai-agents', enabled: true },
  {
    label: 'Learn AI',
    path: '/workshop/the-art-of-ai-agents',
    enabled: true,
  },
]

/** Exit ramp back to the main site */
export const WORKSHOP_NAV_SITE: SiteNavItem[] = [
  { label: 'Contact', path: '/contact', enabled: true },
  { label: 'Portfolio', path: '/portfolio', enabled: true },
]

export const WORKSHOP_SITE_NAV_ITEMS: SiteNavItem[] = [...WORKSHOP_NAV_PROGRAMS, ...WORKSHOP_NAV_SITE]

export function isWorkshopNavContext(pathname: string | null): boolean {
  if (!pathname) return false
  if (pathname === '/workshops') return true
  if (pathname.startsWith('/workshop/')) return true
  return false
}

export function navigationItemsForPath(pathname: string | null, variant: 'desktop' | 'mobile'): SiteNavItem[] {
  if (isWorkshopNavContext(pathname)) return WORKSHOP_SITE_NAV_ITEMS
  return variant === 'desktop' ? MAIN_SITE_NAV_ITEMS : MAIN_SITE_NAV_ITEMS_MOBILE
}
