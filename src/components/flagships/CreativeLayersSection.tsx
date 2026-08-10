'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MatrixRowIcon } from '@/components/opportunities/ExperienceMatrixSection';
import { opp } from '@/components/opportunities/opportunityTheme';
import { flagshipEvidence } from '@/content/evidence/flagships';
import type { SkillsMatrixIconKey } from '@/content/opportunities/types';
import { cn } from '@/lib/utils';

export type CreativeLayerCard = {
  id: string;
  title: string;
  body: string;
  caseIds: string[];
  icon?: SkillsMatrixIconKey;
  imageSrc?: string;
  imageAlt?: string;
  outcome?: string;
};

type CreativeLayersSectionProps = {
  layers: CreativeLayerCard[];
  sectionId?: string;
  className?: string;
};

const LAYER_THEMES = [
  {
    rail: 'border-l-violet-600 dark:border-l-violet-400',
    wash: 'from-violet-500/20 via-fuchsia-500/5 to-transparent',
    glow: 'group-hover:shadow-violet-500/20',
    chip: 'border-violet-300/70 bg-violet-50 text-violet-900 dark:border-violet-700/60 dark:bg-violet-950/50 dark:text-violet-200',
    iconBg: 'bg-violet-600 text-white dark:bg-violet-400 dark:text-violet-950',
    number: 'text-violet-700/80 dark:text-violet-300/90',
  },
  {
    rail: 'border-l-cyan-600 dark:border-l-cyan-400',
    wash: 'from-cyan-500/20 via-sky-500/5 to-transparent',
    glow: 'group-hover:shadow-cyan-500/20',
    chip: 'border-cyan-300/70 bg-cyan-50 text-cyan-900 dark:border-cyan-700/60 dark:bg-cyan-950/50 dark:text-cyan-200',
    iconBg: 'bg-cyan-600 text-white dark:bg-cyan-400 dark:text-cyan-950',
    number: 'text-cyan-700/80 dark:text-cyan-300/90',
  },
  {
    rail: 'border-l-amber-600 dark:border-l-amber-400',
    wash: 'from-amber-500/20 via-orange-500/5 to-transparent',
    glow: 'group-hover:shadow-amber-500/20',
    chip: 'border-amber-300/70 bg-amber-50 text-amber-950 dark:border-amber-700/60 dark:bg-amber-950/50 dark:text-amber-100',
    iconBg: 'bg-amber-600 text-white dark:bg-amber-400 dark:text-amber-950',
    number: 'text-amber-800/80 dark:text-amber-300/90',
  },
] as const;

const FALLBACK_ICONS: SkillsMatrixIconKey[] = ['sparkles', 'workflow', 'code2'];

/**
 * Interactive three-layer ownership map for creative flagships.
 */
export function CreativeLayersSection({
  layers,
  sectionId = 'layers',
  className,
}: CreativeLayersSectionProps) {
  return (
    <section id={sectionId} className={cn(opp.section, className)} aria-labelledby={`${sectionId}-heading`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-violet-800 dark:text-violet-300">
        Ownership map
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        Three layers
      </h2>
      <p className={cn(opp.muted, 'mt-2 max-w-3xl')}>
        Direction, production systems, and interfaces — one practice, three ownership surfaces. Hover a
        layer to see what it owns and which claimable cases sit under it.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {layers.map((layer, index) => {
          const theme = LAYER_THEMES[index % LAYER_THEMES.length]!;
          const icon = layer.icon ?? FALLBACK_ICONS[index % FALLBACK_ICONS.length];
          const cases = layer.caseIds
            .map((id) => flagshipEvidence[id as keyof typeof flagshipEvidence])
            .filter((ev): ev is (typeof flagshipEvidence)[keyof typeof flagshipEvidence] =>
              Boolean(ev?.claimable),
            );

          return (
            <article
              key={layer.id}
              className={cn(
                'group relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white',
                'border-l-[3px] shadow-sm transition duration-300 ease-out',
                'hover:-translate-y-1.5 hover:shadow-xl',
                'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                'dark:border-stone-700 dark:bg-stone-950',
                theme.rail,
                theme.glow,
              )}
            >
              <div
                className={cn(
                  'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 transition duration-500 group-hover:opacity-100',
                  theme.wash,
                )}
                aria-hidden
              />
              <span
                className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100 motion-reduce:hidden dark:via-white/10"
                aria-hidden
              />

              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-900">
                {layer.imageSrc ? (
                  <Image
                    src={layer.imageSrc}
                    alt={layer.imageAlt ?? ''}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-400 dark:from-stone-800 dark:to-stone-950" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                <span
                  className={cn(
                    'absolute left-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition duration-300 group-hover:scale-110',
                    theme.iconBg,
                  )}
                >
                  <MatrixRowIcon icon={icon} className="h-5 w-5" />
                </span>
                <span
                  className={cn(
                    'absolute bottom-3 right-3 z-10 font-mono text-3xl font-bold tabular-nums tracking-tight text-white/90',
                    theme.number,
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
                <h3 className={opp.h3MoMA}>{layer.title}</h3>
                <p className={cn(opp.body, 'mt-2')}>{layer.body}</p>
                {layer.outcome ? (
                  <p className={cn(opp.subtle, 'mt-3 border-l-2 border-current/20 pl-3')}>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">You get: </span>
                    {layer.outcome}
                  </p>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-2" role="list">
                  {cases.map((ev) => {
                    const external = ev.href.startsWith('http');
                    const Chip = (
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition',
                          'hover:brightness-95 dark:hover:brightness-110',
                          theme.chip,
                        )}
                      >
                        {ev.title}
                        <ArrowUpRight className="h-3 w-3 opacity-70" aria-hidden />
                      </span>
                    );
                    return (
                      <li key={ev.id}>
                        {external ? (
                          <a href={ev.href} target="_blank" rel="noopener noreferrer">
                            {Chip}
                          </a>
                        ) : (
                          <Link href={ev.href}>{Chip}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
