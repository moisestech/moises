/**
 * Fixed recruiting header is two rows on md+ (logo + desktop links), one row on mobile.
 * Keep in sync with `RecruitingSiteHeader` vertical rhythm and `OpportunityShell` sticky submenu `top`.
 */
export const RECRUITING_HEADER_OFFSET = '8.4rem';

/** Tailwind padding below fixed recruiting header (matches `RecruitingSiteHeader` height). */
export const RECRUITING_MAIN_PADDING_TOP = 'pt-[8.4rem]';

/** Page canvas behind `/work/*`, `/opportunities/*`, and dossier routes — matches `opp.shell`. */
export const RECRUITING_PAGE_SURFACE =
  "min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 font-['MoMA_Sans']";

