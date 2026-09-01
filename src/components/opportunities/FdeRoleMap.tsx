'use client';

import { useEffect, useState } from 'react';
import { LIFECYCLE_META, type LifecycleStage } from '@/content/opportunities/lifecycle';
import { selectFdeExplorerStage } from '@/content/opportunities/fdeStageSelect';
import { RECRUITING_FDE_SCROLL_MT } from '@/config/recruiting-layout';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

const PETALS = [
  {
    id: 'discover',
    n: '01',
    label: 'Client + workflow discovery',
    stage: 'Discover' as LifecycleStage,
    insight: 'Watch the stuck point and frame a bounded problem before choosing a tool.',
    place: 'top' as const,
  },
  {
    id: 'design',
    n: '02',
    label: 'Product + experience design',
    stage: 'Prototype' as LifecycleStage,
    insight: 'Shape one reviewable path a mixed audience can follow, with a manual fallback.',
    place: 'right' as const,
  },
  {
    id: 'integrate',
    n: '03',
    label: 'Software + system integration',
    stage: 'Deploy' as LifecycleStage,
    insight: 'Take the concept to a system people can operate — not a demo that dies on the laptop.',
    place: 'bottom' as const,
  },
  {
    id: 'teach',
    n: '04',
    label: 'Teaching + capability transfer',
    stage: 'Teach' as LifecycleStage,
    insight: 'Leave a path and a teaching artifact the team can run without me.',
    place: 'left' as const,
  },
] as const;

const PLACE_CLASS: Record<(typeof PETALS)[number]['place'], string> = {
  top: 'md:col-start-2 md:row-start-1',
  left: 'md:col-start-1 md:row-start-2',
  right: 'md:col-start-3 md:row-start-2',
  bottom: 'md:col-start-2 md:row-start-3',
};

export function FdeRoleMap({ className }: { className?: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [entered, setEntered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const active = PETALS.find((petal) => petal.id === activeId) ?? PETALS[0];

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduceMotion(reduce);
    if (reduce) {
      setEntered(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="role-map" className={cn(RECRUITING_FDE_SCROLL_MT, className)} aria-labelledby="role-map-heading">
      <h2 id="role-map-heading" className={opp.h2}>
        Forward-Deployed Engineering
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>
        Four petals into one practice. A design and teaching background is inside the engineering work — not a
        fifth identity.
      </p>

      <div
        className={cn(
          'mt-6 rounded-xl border border-stone-300 bg-stone-50 dark:border-stone-600 dark:bg-stone-950',
          'bg-[linear-gradient(to_right,rgba(14,116,144,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,116,144,0.07)_1px,transparent_1px)] bg-[size:18px_18px]',
        )}
      >
        <div className="flex items-center justify-between gap-2 border-b border-dashed border-cyan-700/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-800 dark:border-cyan-400/40 dark:text-cyan-300">
          <span>Role map // 4 petals</span>
          <span>Hover · click to inspect</span>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 md:gap-4 md:p-5">
          {PETALS.map((petal, index) => {
            const meta = LIFECYCLE_META[petal.stage];
            const dimmed = activeId != null && activeId !== petal.id;
            const selected = activeId === petal.id;
            return (
              <button
                key={petal.id}
                type="button"
                className={cn(
                  PLACE_CLASS[petal.place],
                  'min-h-11 rounded-lg border px-3 py-3 text-left',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                  !reduceMotion && 'transition-all duration-300',
                  !entered && !reduceMotion && 'translate-y-1 opacity-0',
                  entered && 'translate-y-0 opacity-100',
                  dimmed && 'opacity-40',
                  selected
                    ? cn(meta.selectedBgClass, meta.borderClass, meta.textClass, 'shadow-sm')
                    : cn(meta.bgClass, meta.borderClass, meta.hoverBgClass),
                )}
                style={!reduceMotion && !entered ? { transitionDelay: `${index * 70}ms` } : undefined}
                onMouseEnter={() => setActiveId(petal.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(petal.id)}
                onBlur={() => setActiveId(null)}
                onClick={() => selectFdeExplorerStage(petal.stage)}
              >
                <span className={cn('font-mono text-[10px] tracking-widest', meta.textClass)}>{petal.n}</span>
                <span className={cn('mt-1 block text-sm font-semibold', meta.textClass)}>{petal.label}</span>
                <span className={cn(opp.subtle, 'mt-1 block')}>Inspect {petal.stage} →</span>
              </button>
            );
          })}

          <div className="flex min-h-[7.5rem] flex-col items-center justify-center rounded-lg border-2 border-stone-900 bg-stone-950 px-4 py-5 text-center text-white dark:border-cyan-400 dark:bg-cyan-400 dark:text-stone-950 sm:col-span-2 md:col-start-2 md:row-start-2 md:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">Join</p>
            <p className="mt-1 text-sm font-bold leading-tight">FORWARD-DEPLOYED</p>
            <p className="text-sm font-bold leading-tight">ENGINEERING</p>
          </div>
        </div>

        <p className="border-t border-dashed border-cyan-700/40 px-3 py-3 text-sm text-stone-700 dark:border-cyan-400/40 dark:text-stone-200">
          {active.insight}
        </p>
        <p className={cn(opp.subtle, 'px-3 pb-3')}>
          Not a Platform / SWE / SA Venn. Creative-technologist craft sits inside discovery, design, and
          transfer.
        </p>
      </div>
    </section>
  );
}
