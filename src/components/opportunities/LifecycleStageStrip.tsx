'use client';

import { LIFECYCLE_META, LIFECYCLE_STAGES } from '@/content/opportunities/lifecycle';
import { selectFdeExplorerStage } from '@/content/opportunities/fdeStageSelect';
import { RECRUITING_FDE_SCROLL_MT } from '@/config/recruiting-layout';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

export function LifecycleStageStrip({ className }: { className?: string }) {
  return (
    <section id="lifecycle" className={cn(RECRUITING_FDE_SCROLL_MT, className)} aria-labelledby="lifecycle-heading">
      <h2 id="lifecycle-heading" className={opp.h2}>
        Six-stage lifecycle
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>
        One vocabulary on this page. Color and icon mark the stage. Click a stage to inspect the matching
        explorer row.
      </p>

      <div className="mt-5 rounded-xl border border-stone-300 dark:border-stone-600">
        <div className="flex items-center justify-between gap-2 border-b border-dashed border-cyan-700/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-800 dark:border-cyan-400/40 dark:text-cyan-300">
          <span>Lifecycle // 01–06</span>
          <span className="hidden sm:inline">Discover → Handoff</span>
        </div>

        <div className="relative px-3 pb-3 pt-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-[2.85rem] hidden h-px bg-[repeating-linear-gradient(90deg,#0e7490_0,#0e7490_4px,transparent_4px,transparent_10px)] xl:block dark:bg-[repeating-linear-gradient(90deg,#22d3ee_0,#22d3ee_4px,transparent_4px,transparent_10px)]"
          />
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {LIFECYCLE_STAGES.map((stage, i) => {
              const meta = LIFECYCLE_META[stage];
              const Icon = meta.icon;
              return (
                <li key={stage}>
                  <button
                    type="button"
                    className={cn(
                      'relative flex min-h-[7.25rem] w-full flex-col rounded-lg border px-3 py-3 text-left',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                      meta.bgClass,
                      meta.borderClass,
                      meta.hoverBgClass,
                    )}
                    onClick={() => selectFdeExplorerStage(stage)}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className={cn('h-11 w-11 shrink-0 sm:h-12 sm:w-12', meta.textClass)} aria-hidden />
                      <span className={cn('font-mono text-[10px] tracking-widest', meta.textClass)}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </span>
                    <span className={cn('mt-2 text-sm font-semibold', meta.textClass)}>{stage}</span>
                    <span className={cn(opp.subtle, 'mt-1')}>{meta.sub}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
