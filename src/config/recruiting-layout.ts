/**
 * Fixed recruiting header is two rows on md+ (logo + desktop links), one row on mobile.
 * Page padding must clear the measured ~151px header. FDE submenu pins at
 * `RECRUITING_FDE_SUBNAV_TOP` in that same band.
 */
export const RECRUITING_HEADER_OFFSET = '152px';

/** FDE sticky submenu — just under the measured ~151px recruiting header. */
export const RECRUITING_FDE_SUBNAV_TOP = 'top-[152px]';

/** Scroll-margin so in-page jumps clear header (~152px) + FDE submenu (~55px). */
export const RECRUITING_FDE_SCROLL_MT = 'scroll-mt-[13.75rem]';

/** Tailwind padding below fixed recruiting header (matches `RecruitingSiteHeader` height). */
export const RECRUITING_MAIN_PADDING_TOP = 'pt-[152px]';

/** Page canvas behind `/work/*`, `/opportunities/*`, and dossier routes — matches `opp.shell`. */
export const RECRUITING_PAGE_SURFACE =
  "min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 font-['MoMA_Sans']";

