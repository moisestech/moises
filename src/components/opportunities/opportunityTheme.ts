/**
 * Shared light/dark surface tokens for `/opportunities/*`, dossier pages, and recruiting index.
 * Import `opp` in section components so new opportunity pages stay theme-consistent.
 */
export const opp = {
  shell: "min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 font-['MoMA_Sans']",
  main: "mx-auto max-w-5xl px-3 pb-20 font-['MoMA_Sans'] sm:px-4 sm:pb-24",
  section: 'scroll-mt-32 mt-16 border-t border-stone-200 dark:border-stone-700 pt-12',
  sectionSm: 'mt-12 border-t border-stone-200 dark:border-stone-700 pt-10',
  h1: "font-['MoMA_Sans'] text-[1.65rem] font-bold leading-tight tracking-tight text-stone-950 dark:text-stone-50 sm:text-3xl md:text-4xl",
  h2: "font-['MoMA_Sans'] text-xl font-semibold text-stone-950 dark:text-stone-50 sm:text-2xl",
  h2Bold: "font-['MoMA_Sans'] text-xl font-bold text-stone-950 dark:text-stone-50",
  /** Row / card titles — matches Core Technical Skills matrix primary line */
  matrixPrimary:
    "font-['MoMA_Sans'] text-sm font-bold leading-snug text-stone-950 dark:text-stone-50 sm:text-base",
  matrixSecondary: 'mt-1.5 text-sm font-normal leading-relaxed text-stone-600 dark:text-stone-400',
  h3: "font-['MoMA_Sans'] text-sm font-bold leading-snug text-stone-950 dark:text-stone-50 sm:text-base",
  h3MoMA: "font-['MoMA_Sans'] text-lg font-semibold text-stone-950 dark:text-stone-50",
  body: 'text-sm leading-relaxed text-stone-700 dark:text-stone-300',
  bodyLg: 'text-lg text-stone-600 dark:text-stone-400',
  muted: 'text-sm text-stone-600 dark:text-stone-400',
  subtle: 'text-xs text-stone-500 dark:text-stone-400',
  label: 'text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400',
  accent: 'text-xs font-semibold uppercase tracking-wide text-cyan-500 dark:text-cyan-400',
  accentCategory: 'text-xs font-medium uppercase tracking-wide text-cyan-500 dark:text-cyan-400',
  audienceLine: 'mb-6 text-center text-xs text-stone-500 dark:text-stone-400 sm:text-sm',
  card: 'overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-sm',
  cardInteractive:
    'block h-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-4 shadow-sm transition hover:border-cyan-400/35 dark:hover:border-cyan-500/40 hover:shadow-md',
  cardPad: 'flex flex-1 flex-col p-4',
  cardMedia:
    'relative aspect-[16/10] border-b border-stone-100 dark:border-stone-800 bg-stone-100 dark:bg-stone-800',
  pill: 'rounded-full border border-stone-200 dark:border-stone-600 bg-stone-50 dark:bg-stone-800 px-2 py-0.5 text-xs text-stone-700 dark:text-stone-300',
  pillTag:
    'rounded-full border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-900 px-3 py-1 text-xs text-stone-700 dark:text-stone-300',
  btnPrimary:
    'inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-stone-800 dark:bg-cyan-500 dark:text-stone-950 dark:hover:bg-cyan-400',
  btnSecondary:
    'inline-flex items-center gap-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 px-4 py-2.5 text-sm font-semibold text-stone-800 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800',
  btnSecondaryMedium:
    'inline-flex items-center gap-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-800 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800',
  linkAccent: 'font-medium text-cyan-500 dark:text-cyan-400 underline-offset-2 hover:underline',
  headshot:
    'relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 sm:max-w-md',
  profilesBorder:
    'mt-5 flex flex-wrap items-center gap-2 border-t border-stone-200/80 dark:border-stone-700/80 pt-5',
  divide: 'divide-stone-100 dark:divide-stone-800',
  tableWrap: 'overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-sm',
  tableHead:
    'bg-stone-100 dark:bg-stone-800 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-400',
  tableCell: 'px-4 py-3 text-stone-700 dark:text-stone-300',
  tableCellStrong: 'px-4 py-3 font-medium text-stone-900 dark:text-stone-100',
  stickyNav:
    'sticky z-30 border-b border-stone-200 dark:border-stone-700 bg-stone-50/95 dark:bg-stone-950/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-stone-50/85 dark:supports-[backdrop-filter]:bg-stone-950/85',
  stickyNavActive:
    'border-cyan-400 dark:border-cyan-500 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 shadow-sm shadow-cyan-500/10',
  stickyNavIdle:
    'border-transparent text-stone-600 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-600 hover:bg-white dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100',
  bannerBorder: 'border-b border-stone-200 dark:border-stone-800 bg-stone-900/5 dark:bg-black/20',
  callout: 'rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-100/80 dark:bg-stone-800/50 p-5',
  calloutInner: 'mt-10 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-100/80 dark:bg-stone-800/50 p-5',
  activeRow: 'bg-cyan-50/80 dark:bg-cyan-950/40 ring-1 ring-inset ring-cyan-200/80 dark:ring-cyan-800/50',
  rowHover: 'hover:bg-stone-50/90 dark:hover:bg-stone-800/80',
  illustrationPanel:
    'relative overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 shadow-sm lg:sticky lg:top-28 lg:self-start',
  illustrationCaption:
    'border-t border-stone-200 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 px-4 py-3 backdrop-blur-sm',
  matrixHeader:
    "font-['MoMA_Sans'] grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-0 border-b border-stone-100 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-400 sm:px-4",
  code: 'rounded bg-stone-200 dark:bg-stone-800 px-1 py-0.5 text-[10px] text-stone-800 dark:text-stone-300',
  indexCard:
    'block overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-sm transition hover:border-stone-300 dark:hover:border-stone-600 hover:shadow',
  indexBanner: 'relative aspect-[21/9] w-full border-b border-stone-200 dark:border-stone-700 bg-stone-200 dark:bg-stone-800',
} as const;
