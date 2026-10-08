'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Calendar,
  Code2,
  FlaskConical,
  GraduationCap,
  LayoutGrid,
  Library,
  MonitorSmartphone,
  Network,
  Presentation,
  type LucideIcon,
} from 'lucide-react';
import {
  INSTITUTIONAL_FAMILY_NAV,
  type InstitutionalAccent,
  type InstitutionalFamilyMatch,
} from '@/content/institutions/shared';
import { cn } from '@/lib/utils';

/** Accent tokens — color-coded without purple-gradient AI look. */
export const INST_ACCENT: Record<
  InstitutionalAccent | 'rose' | 'sky' | 'emerald' | 'violet',
  {
    chip: string;
    chipActive: string;
    chipDark: string;
    chipDarkActive: string;
    bar: string;
    soft: string;
    text: string;
    ring: string;
    iconBg: string;
  }
> = {
  ink: {
    chip: 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500',
    chipActive: 'border-neutral-950 bg-neutral-950 text-white',
    chipDark: 'border-white/20 bg-transparent text-white/80 hover:border-white/50',
    chipDarkActive: 'border-white bg-white text-neutral-950',
    bar: 'bg-neutral-950',
    soft: 'bg-neutral-100',
    text: 'text-neutral-800',
    ring: 'ring-neutral-950/15',
    iconBg: 'bg-neutral-950 text-white',
  },
  teal: {
    chip: 'border-teal-200 bg-teal-50 text-teal-900 hover:border-teal-400',
    chipActive: 'border-teal-800 bg-teal-800 text-white',
    chipDark: 'border-teal-300/30 bg-teal-950/40 text-teal-100 hover:border-teal-300/60',
    chipDarkActive: 'border-teal-300 bg-teal-300 text-teal-950',
    bar: 'bg-teal-700',
    soft: 'bg-teal-50',
    text: 'text-teal-900',
    ring: 'ring-teal-700/20',
    iconBg: 'bg-teal-700 text-white',
  },
  copper: {
    chip: 'border-amber-200 bg-amber-50 text-amber-950 hover:border-amber-400',
    chipActive: 'border-amber-800 bg-amber-800 text-white',
    chipDark: 'border-amber-300/30 bg-amber-950/40 text-amber-100 hover:border-amber-300/60',
    chipDarkActive: 'border-amber-300 bg-amber-300 text-amber-950',
    bar: 'bg-amber-700',
    soft: 'bg-amber-50',
    text: 'text-amber-950',
    ring: 'ring-amber-700/20',
    iconBg: 'bg-amber-700 text-white',
  },
  ocean: {
    chip: 'border-sky-200 bg-sky-50 text-sky-950 hover:border-sky-400',
    chipActive: 'border-sky-800 bg-sky-800 text-white',
    chipDark: 'border-sky-300/30 bg-sky-950/40 text-sky-100 hover:border-sky-300/60',
    chipDarkActive: 'border-sky-300 bg-sky-300 text-sky-950',
    bar: 'bg-sky-700',
    soft: 'bg-sky-50',
    text: 'text-sky-950',
    ring: 'ring-sky-700/20',
    iconBg: 'bg-sky-700 text-white',
  },
  rose: {
    chip: 'border-rose-200 bg-rose-50 text-rose-950 hover:border-rose-400',
    chipActive: 'border-rose-800 bg-rose-800 text-white',
    chipDark: 'border-rose-300/30 bg-rose-950/40 text-rose-100 hover:border-rose-300/60',
    chipDarkActive: 'border-rose-300 bg-rose-300 text-rose-950',
    bar: 'bg-rose-700',
    soft: 'bg-rose-50',
    text: 'text-rose-950',
    ring: 'ring-rose-700/20',
    iconBg: 'bg-rose-700 text-white',
  },
  sky: {
    chip: 'border-cyan-200 bg-cyan-50 text-cyan-950 hover:border-cyan-400',
    chipActive: 'border-cyan-800 bg-cyan-800 text-white',
    chipDark: 'border-cyan-300/30 bg-cyan-950/40 text-cyan-100 hover:border-cyan-300/60',
    chipDarkActive: 'border-cyan-300 bg-cyan-300 text-cyan-950',
    bar: 'bg-cyan-700',
    soft: 'bg-cyan-50',
    text: 'text-cyan-950',
    ring: 'ring-cyan-700/20',
    iconBg: 'bg-cyan-700 text-white',
  },
  emerald: {
    chip: 'border-emerald-200 bg-emerald-50 text-emerald-950 hover:border-emerald-400',
    chipActive: 'border-emerald-800 bg-emerald-800 text-white',
    chipDark: 'border-emerald-300/30 bg-emerald-950/40 text-emerald-100 hover:border-emerald-300/60',
    chipDarkActive: 'border-emerald-300 bg-emerald-300 text-emerald-950',
    bar: 'bg-emerald-700',
    soft: 'bg-emerald-50',
    text: 'text-emerald-950',
    ring: 'ring-emerald-700/20',
    iconBg: 'bg-emerald-700 text-white',
  },
  violet: {
    chip: 'border-violet-200 bg-violet-50 text-violet-950 hover:border-violet-400',
    chipActive: 'border-violet-800 bg-violet-800 text-white',
    chipDark: 'border-violet-300/30 bg-violet-950/40 text-violet-100 hover:border-violet-300/60',
    chipDarkActive: 'border-violet-300 bg-violet-300 text-violet-950',
    bar: 'bg-violet-800',
    soft: 'bg-violet-50',
    text: 'text-violet-950',
    ring: 'ring-violet-700/20',
    iconBg: 'bg-violet-800 text-white',
  },
};

/** Semantic colors for /institutions practice lanes. */
export const LANE_ACCENT = {
  web: 'ocean',
  automation: 'teal',
  live: 'violet',
  lab: 'copper',
} as const satisfies Record<string, keyof typeof INST_ACCENT>;

/** Quiet accent washes for card hover. Not a full-page gradient. */
export const INST_ACCENT_WASH: Record<keyof typeof INST_ACCENT, string> = {
  ink: 'from-neutral-100 via-white to-neutral-50',
  teal: 'from-teal-50 via-white to-emerald-50',
  copper: 'from-amber-50 via-white to-orange-50',
  ocean: 'from-sky-50 via-white to-cyan-50',
  rose: 'from-rose-50 via-white to-orange-50',
  sky: 'from-cyan-50 via-white to-sky-50',
  emerald: 'from-emerald-50 via-white to-teal-50',
  violet: 'from-violet-50 via-white to-fuchsia-50',
};

/**
 * Site header is `fixed` (expanded ≈ 192px / 12rem, collapses to 80px).
 * Family and section strips stick below that live height, with a gap so the
 * header does not cover them. Never `top-0`.
 * InstFamilyNav publishes `--inst-family-nav-height`.
 * A `[data-inst-section-nav]` publishes `--inst-section-nav-height`.
 */
export const INST_PAGE_TOP_CLASS =
  'pt-[calc(var(--site-header-expanded-height,12rem)+var(--inst-header-gap,0.5rem))]';

export const INST_FAMILY_STICKY_CLASS =
  'sticky z-40 top-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem))] transition-[top] duration-300 ease-in-out';

/** Page-section chips sit under the measured family strip. */
export const INST_SECTION_STICKY_CLASS =
  'sticky z-30 top-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem)+var(--inst-family-nav-height,4rem))] transition-[top] duration-300 ease-in-out';

/** Anchor offset: live header + gap + family nav + section nav. */
export const INST_ANCHOR_SCROLL_MT_CLASS =
  'scroll-mt-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem)+var(--inst-family-nav-height,4rem)+var(--inst-section-nav-height,3.25rem)+0.5rem)]';

/** Pages whose only sticky strip is the family nav. */
export const INST_FAMILY_ANCHOR_SCROLL_MT_CLASS =
  'scroll-mt-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem)+var(--inst-family-nav-height,4rem)+0.5rem)]';

const FAMILY_ICONS: Record<InstitutionalFamilyMatch, LucideIcon> = {
  'artist-infrastructure': Network,
  institutions: LayoutGrid,
  'oolite-arts': FlaskConical,
  bakehouse: MonitorSmartphone,
  bookleggers: Library,
  workshops: Presentation,
};

const LANE_ICONS = {
  leadership: Network,
  programs: GraduationCap,
  platforms: MonitorSmartphone,
  prototypes: Code2,
} as const;

/**
 * Shared top strip across institutional outreach pages.
 * Color-coded chips + icons so recipients can scan Hub → Proof → Systems → Pilots.
 */
export function InstFamilyNav({
  active,
  tone = 'dossier',
  className,
}: {
  active?: InstitutionalFamilyMatch;
  tone?: 'dossier' | 'hub';
  className?: string;
}) {
  const pathname = usePathname() ?? '';
  const current =
    active ??
    INSTITUTIONAL_FAMILY_NAV.find((item) => pathname.includes(item.match))?.match;
  const dark = tone === 'hub';
  const reduce = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const family = navRef.current;
    if (!family) return;

    const publish = () => {
      const familyHeight = Math.round(family.getBoundingClientRect().height);
      if (familyHeight > 0) {
        document.documentElement.style.setProperty('--inst-family-nav-height', `${familyHeight}px`);
      }
      const section = document.querySelector('[data-inst-section-nav]');
      if (section) {
        const sectionHeight = Math.round(section.getBoundingClientRect().height);
        if (sectionHeight > 0) {
          document.documentElement.style.setProperty(
            '--inst-section-nav-height',
            `${sectionHeight}px`,
          );
        }
      } else {
        document.documentElement.style.removeProperty('--inst-section-nav-height');
      }
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(family);
    const section = document.querySelector('[data-inst-section-nav]');
    if (section) observer.observe(section);
    window.addEventListener('resize', publish);
    const frame = window.requestAnimationFrame(publish);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', publish);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      data-inst-family-nav
      className={cn(
        'border-b',
        dark
          ? 'border-white/10 bg-black/50 backdrop-blur-md'
          : 'border-neutral-200 bg-[#f7f6f3]/95 backdrop-blur-md',
        className,
      )}
      aria-label="Institutional pages"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center gap-1.5 overflow-x-auto px-4 py-2.5 sm:gap-2 sm:px-6 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mr-1 flex shrink-0 items-center gap-1.5 sm:mr-2">
          <Building2
            className={cn('h-3.5 w-3.5', dark ? 'text-white/45' : 'text-neutral-500')}
            aria-hidden
          />
          <p
            className={cn(
              'hidden font-mono text-[10px] uppercase tracking-[0.16em] sm:block',
              dark ? 'text-white/45' : 'text-neutral-500',
            )}
          >
            Institutions
          </p>
        </div>
        {INSTITUTIONAL_FAMILY_NAV.map((item, index) => {
          const isActive = current === item.match;
          const Icon = FAMILY_ICONS[item.match];
          const accent = INST_ACCENT[item.accent];
          return (
            <motion.div
              key={item.href}
              initial={reduce ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.04 * index, duration: 0.28 }}
            >
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'inline-flex min-h-9 shrink-0 items-center gap-1.5 border px-2.5 py-1.5 text-xs font-medium transition sm:min-h-10 sm:px-3',
                  isActive
                    ? dark
                      ? accent.chipDarkActive
                      : accent.chipActive
                    : dark
                      ? accent.chipDark
                      : accent.chip,
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                <span className="sm:hidden">{item.label}</span>
                <span className="hidden sm:inline">{item.label}</span>
                <span
                  className={cn(
                    'hidden font-mono text-[9px] uppercase tracking-[0.12em] md:inline',
                    isActive ? 'opacity-80' : 'opacity-60',
                  )}
                >
                  {item.short}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}

export function InstSectionLabel({
  children,
  accent = 'ink',
}: {
  children: React.ReactNode;
  accent?: keyof typeof INST_ACCENT;
}) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className={cn('h-3 w-1 shrink-0', INST_ACCENT[accent].bar)} aria-hidden />
      <p
        className={cn(
          'font-mono text-[11px] uppercase tracking-[0.18em] sm:text-xs',
          INST_ACCENT[accent].text,
        )}
      >
        {children}
      </p>
    </div>
  );
}

export function InstLaneIcon({
  name,
  accent = 'ink',
}: {
  name: keyof typeof LANE_ICONS;
  accent?: keyof typeof INST_ACCENT;
}) {
  const Icon = LANE_ICONS[name];
  return (
    <span
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center',
        INST_ACCENT[accent].iconBg,
      )}
      aria-hidden
    >
      <Icon className="h-4 w-4" />
    </span>
  );
}

/** Soft fade/slide-in for sections — respects reduced motion. */
export function InstReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function InstPlaceholder({
  label,
  note,
  src,
  alt,
}: {
  label: string;
  note: string;
  src?: string;
  alt?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const waiting = !src || !loaded;

  return (
    <div
      role="status"
      className="overflow-hidden border border-dashed border-amber-700/45 bg-amber-50 text-left text-amber-950"
    >
      <div
        className={cn(
          'relative aspect-[4/3] bg-stone-200/80',
          waiting && 'animate-pulse motion-reduce:animate-none',
        )}
      >
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4" aria-hidden>
          <span className="h-2 w-1/3 rounded-sm bg-stone-300" />
          <span className="h-2 w-2/3 rounded-sm bg-stone-300/80" />
          <span className="h-2 w-1/2 rounded-sm bg-stone-300/70" />
        </div>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt || label}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none',
              loaded ? 'opacity-100' : 'opacity-0',
            )}
            onLoad={() => setLoaded(true)}
            ref={(node) => {
              if (node?.complete) setLoaded(true);
            }}
          />
        ) : null}
      </div>
      <div className="p-3 sm:p-4">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-800 sm:text-[11px]">
          {src ? 'Photo' : 'Placeholder · photo needed'}
        </p>
        <p className="text-sm font-medium">{label}</p>
        <p className="mt-1 text-xs leading-relaxed text-amber-900/80">{note}</p>
      </div>
    </div>
  );
}

export function InstPrimaryCta({
  href,
  label,
  external,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const className =
    'inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 active:scale-[0.98]';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        <Calendar className="h-4 w-4 shrink-0" aria-hidden />
        {label}
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export function InstSecondaryCta({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    'inline-flex min-h-11 items-center justify-center border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 active:scale-[0.98]';

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a
        href={href}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function InstPageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        'min-h-screen bg-[#f7f6f3] text-neutral-950 antialiased',
        className,
      )}
    >
      {children}
    </main>
  );
}

export function InstContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
