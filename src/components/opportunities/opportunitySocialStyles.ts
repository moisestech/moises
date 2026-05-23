import { cn } from '@/lib/utils';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:focus-visible:outline-cyan-500';

/**
 * Compact icon-only profile control (hero “Profiles” strip).
 */
export function opportunitySocialIconClass(network: 'linkedin' | 'github' | 'instagram') {
  return cn(
    'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 transition-colors duration-200 motion-reduce:transition-none',
    focusRing,
    network === 'linkedin' &&
      'hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus-visible:border-[#0A66C2] focus-visible:bg-[#0A66C2] focus-visible:text-white',
    network === 'github' &&
      'hover:border-[#24292f] hover:bg-[#24292f] hover:text-white focus-visible:border-[#24292f] focus-visible:bg-[#24292f] focus-visible:text-white',
    network === 'instagram' &&
      cn(
        'hover:border-transparent hover:bg-gradient-to-br hover:from-[#f77737] hover:via-[#e4405f] hover:to-[#c13584] hover:text-white',
        'focus-visible:border-transparent focus-visible:bg-gradient-to-br focus-visible:from-[#f77737] focus-visible:via-[#e4405f] focus-visible:to-[#c13584] focus-visible:text-white',
      ),
  );
}

/**
 * Text + icon pill (résumé section, dossier footers).
 */
export function opportunitySocialPillClass(network: 'linkedin' | 'github' | 'instagram') {
  return cn(
    'inline-flex items-center gap-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 px-4 py-2.5 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none',
    focusRing,
    network === 'linkedin' &&
      'text-stone-800 dark:text-stone-100 hover:border-[#0A66C2] hover:bg-[#0A66C2]/[0.08] dark:hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] focus-visible:border-[#0A66C2] focus-visible:bg-[#0A66C2]/[0.08] focus-visible:text-[#0A66C2]',
    network === 'github' &&
      'text-stone-800 dark:text-stone-100 hover:border-[#24292f] hover:bg-neutral-900/[0.06] dark:hover:bg-neutral-100/10 hover:text-[#24292f] dark:hover:text-stone-100 focus-visible:border-[#24292f] focus-visible:bg-neutral-900/[0.06] focus-visible:text-[#24292f]',
    network === 'instagram' &&
      'text-stone-800 dark:text-stone-100 hover:border-[#E4405F] hover:bg-gradient-to-r hover:from-[#fce7f3] hover:to-[#fff7ed] dark:hover:from-[#4a2030] dark:hover:to-[#3d2a1a] hover:text-[#c13584] focus-visible:border-[#E4405F] focus-visible:bg-gradient-to-r focus-visible:from-[#fce7f3] focus-visible:to-[#fff7ed] focus-visible:text-[#c13584]',
  );
}

export function isExternalHttpHref(href: string) {
  return /^https?:\/\//i.test(href);
}
