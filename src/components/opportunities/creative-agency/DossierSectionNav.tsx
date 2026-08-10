'use client';

import { ChevronRight } from 'lucide-react';
import type { OpportunityNavItem, SkillsMatrixIconKey } from '@/content/opportunities/types';
import { MatrixRowIcon } from '@/components/opportunities/ExperienceMatrixSection';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { scrollToDossierSection } from '@/components/opportunities/creative-agency/scrollToDossierSection';
import { cn } from '@/lib/utils';

type DossierSectionNavProps = {
  items: OpportunityNavItem[];
  title?: string;
  intro?: string;
  className?: string;
};

/** Fallback icons when a nav item omits `icon` — keeps the dossier map consistent. */
const DOSSIER_ICON_BY_ID: Record<string, SkillsMatrixIconKey> = {
  hero: 'fileText',
  overview: 'fileText',
  capabilities: 'sparkles',
  skills: 'cpu',
  'case-studies': 'image',
  campaign: 'presentation',
  workflow: 'workflow',
  motion: 'tv',
  process: 'workflow',
  leadership: 'users',
  pov: 'target',
  fit: 'scale',
  'role-fit': 'scale',
  stack: 'layers',
  contact: 'rocket',
  resume: 'fileText',
  layers: 'boxes',
  related: 'target',
  evidence: 'boxes',
  experience: 'users',
  technologies: 'layers',
  'teaching-cred': 'users',
  'coming-soon': 'rocket',
  'data-model': 'workflow',
  'selected-project': 'image',
  education: 'fileText',
  credibility: 'shield',
  'comfyui-experience': 'cpu',
  'work-sample': 'image',
  engineering: 'code2',
  ramp: 'workflow',
  'provenance-explorer': 'sparkles',
  'selected-work': 'image',
  work: 'image',
};

/**
 * In-page jump list so every dossier section is labeled, color-coded, and reachable
 * without relying only on the sticky mini-nav.
 */
export function DossierSectionNav({
  items,
  title = 'Dossier map',
  intro = 'Jump to any section. Pending specimens are labeled in place—nothing unfinished is presented as shipped client work.',
  className,
}: DossierSectionNavProps) {
  if (!items.length) return null;

  return (
    <nav
      id="dossier-map"
      className={cn(opp.callout, 'scroll-mt-32', className)}
      aria-labelledby="dossier-map-heading"
    >
      <h2 id="dossier-map-heading" className={opp.h3MoMA}>
        {title}
      </h2>
      <p className={`mt-1.5 max-w-2xl ${opp.subtle}`}>{intro}</p>
      <ol className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const accent = getOpportunityCompactAccent(item.id);
          const icon = item.icon ?? DOSSIER_ICON_BY_ID[item.id] ?? 'layers';
          const delayMs = Math.min(index * 45, 360);

          return (
            <li
              key={item.id}
              className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both"
              style={{ animationDelay: `${delayMs}ms`, animationDuration: '420ms' }}
            >
              <a
                href={`#${item.id}`}
                className={cn(
                  'group relative flex min-h-[3.25rem] items-center gap-3 overflow-hidden rounded-xl border border-l-[3px] bg-white px-3 py-2.5 text-sm font-medium text-stone-800 shadow-sm',
                  'transition duration-300 ease-out',
                  'hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                  'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                  'dark:bg-stone-900 dark:text-stone-100 dark:hover:shadow-black/40',
                  accent.rail,
                  'border-stone-200 hover:border-stone-300 dark:border-stone-700 dark:hover:border-stone-600',
                  accent.softBg,
                  '[transform-style:preserve-3d]',
                  'hover:[transform:perspective(800px)_translateY(-4px)_rotateX(2deg)_rotateY(-1.5deg)]',
                  'motion-reduce:hover:[transform:none]',
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDossierSection(item.id);
                }}
              >
                {/* Hover sheen */}
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100 motion-reduce:hidden dark:via-white/10"
                  aria-hidden
                />

                <span
                  className={cn(
                    'relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border shadow-sm',
                    'bg-white/95 transition duration-300 dark:bg-stone-950/90',
                    'group-hover:scale-110 group-hover:shadow-md',
                    'motion-reduce:group-hover:scale-100',
                    accent.navIdle,
                    accent.eyebrow,
                  )}
                >
                  <MatrixRowIcon
                    icon={icon}
                    className="h-4 w-4 transition duration-300 group-hover:rotate-6 motion-reduce:group-hover:rotate-0"
                  />
                </span>

                <span className="relative min-w-0 flex-1 leading-snug">
                  <span className="block">{item.label}</span>
                  <span
                    className={cn(
                      'mt-0.5 block font-mono text-[10px] font-normal uppercase tracking-[0.14em] opacity-0 transition duration-300 group-hover:opacity-70',
                      accent.eyebrow,
                    )}
                  >
                    Jump · {String(index + 1).padStart(2, '0')}
                  </span>
                </span>

                <ChevronRight
                  className="relative h-4 w-4 shrink-0 text-stone-400 transition duration-300 group-hover:translate-x-1 group-hover:text-stone-700 motion-reduce:transition-none dark:text-stone-500 dark:group-hover:text-stone-200"
                  aria-hidden
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
