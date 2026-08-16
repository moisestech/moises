'use client';

import { useRef } from 'react';
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

const FAMILY_ICONS: Record<InstitutionalFamilyMatch, LucideIcon> = {
  'artist-infrastructure': Network,
  institutions: LayoutGrid,
  'oolite-arts': FlaskConical,
  bakehouse: MonitorSmartphone,
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

  return (
    <nav
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
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
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
}: {
  label: string;
  note: string;
}) {
  return (
    <div
      role="status"
      className="border border-dashed border-amber-700/45 bg-amber-50 p-3 text-left text-amber-950 sm:p-4"
    >
      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-800 sm:text-[11px]">
        Placeholder · photo needed
      </p>
      <p className="text-sm font-medium">{label}</p>
      <p className="mt-1 text-xs leading-relaxed text-amber-900/80">{note}</p>
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
