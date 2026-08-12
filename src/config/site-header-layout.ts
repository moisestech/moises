/**
 * Runtime header metrics for pages with a sticky sub-navigation (grant dossiers, CV, etc.).
 * `Header` publishes `--site-header-height` (live) and `--site-header-expanded-height` (at scroll 0).
 */

export const SITE_HEADER_HEIGHT_VAR = '--site-header-height';
export const SITE_HEADER_EXPANDED_HEIGHT_VAR = '--site-header-expanded-height';
export const GRANT_DOSSIER_SUBNAV_HEIGHT_VAR = '--grant-dossier-subnav-height';

/** Collapsed fixed header — keep in sync with `Header` `h-[80px]` when scrolled. */
export const SITE_HEADER_COLLAPSED_HEIGHT_PX = 80;

export const SITE_HEADER_SCROLL_THRESHOLD_PX = 50;

export const GRANT_DOSSIER_STICKY_NAV_SELECTOR = '[data-grant-dossier-sticky-nav]';

/** Sticky subnav sits directly below the live site header (shrinks when header collapses). */
export const siteHeaderStickyTopClass =
  'top-[var(--site-header-height,5rem)] transition-[top] duration-300 ease-in-out';

/** Page padding at scroll 0 — uses expanded header height so hero is not clipped. */
export const siteHeaderExpandedPaddingTopClass = 'pt-[var(--site-header-expanded-height,10rem)]';

/**
 * Grant proposal page top padding — clears the expanded header plus a per-breakpoint
 * comfort gap so status/back-nav never sit under the fixed header on mobile/tablet/desktop.
 */
export const grantPageTopPaddingClass =
  'pt-[calc(var(--site-header-expanded-height,10rem)+1.5rem)] md:pt-[calc(var(--site-header-expanded-height,10rem)+2.5rem)] lg:pt-[calc(var(--site-header-expanded-height,10rem)+3.5rem)]';

/** Section anchors on mobile/tablet: header + horizontal subnav. */
export const grantDossierSectionScrollMarginClass =
  'scroll-mt-[calc(var(--site-header-height,5rem)+var(--grant-dossier-subnav-height,3.5rem)+0.5rem)] lg:scroll-mt-[calc(var(--site-header-height,5rem)+1rem)]';

export function readSiteHeaderHeightPx(): number {
  if (typeof window === 'undefined') return SITE_HEADER_COLLAPSED_HEIGHT_PX;
  const raw = getComputedStyle(document.documentElement).getPropertyValue(SITE_HEADER_HEIGHT_VAR);
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : SITE_HEADER_COLLAPSED_HEIGHT_PX;
}

export function readGrantDossierScrollThresholdPx(extraGap = 16): number {
  const header = readSiteHeaderHeightPx();
  const isDesktop = window.innerWidth >= 1024;
  if (isDesktop) return header + extraGap;

  const subnavEl = document.querySelector(GRANT_DOSSIER_STICKY_NAV_SELECTOR);
  const subnav = subnavEl?.getBoundingClientRect().height ?? 56;
  return header + subnav + extraGap;
}
