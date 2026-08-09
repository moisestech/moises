'use client';

import { useId, useMemo, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { ArchitectureFlowData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type Accent = 'violet' | 'cyan';

type SystemArchitectureFlowProps = {
  data: ArchitectureFlowData;
  sectionId?: string;
  className?: string;
  /** Affirm systems pages use violet; data / role-portfolio pages prefer cyan. */
  accent?: Accent;
};

const ACCENT: Record<
  Accent,
  {
    focus: string;
    selected: string;
    idle: string;
    live: string;
    stageOn: string;
    stageOff: string;
    nodeOn: string;
    nodeOff: string;
    badgeOn: string;
    synthetic: string;
  }
> = {
  violet: {
    focus: 'focus-visible:outline-violet-500',
    selected:
      'border-violet-400 bg-violet-50 text-violet-950 dark:border-violet-600 dark:bg-violet-950/50 dark:text-violet-100',
    idle: 'border-stone-300 bg-white text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800',
    live: 'text-stone-900 dark:text-stone-100',
    stageOn:
      'border-violet-400 bg-violet-50/90 ring-1 ring-violet-300/60 dark:border-violet-600 dark:bg-violet-950/40 dark:ring-violet-800/50',
    stageOff: 'border-stone-200 bg-white opacity-70 dark:border-stone-700 dark:bg-stone-900',
    nodeOn:
      'border-violet-400 bg-white font-medium text-violet-950 dark:border-violet-500 dark:bg-stone-950 dark:text-violet-100',
    nodeOff:
      'border-stone-200 bg-stone-50 text-stone-500 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400',
    badgeOn: 'text-violet-700 dark:text-violet-300',
    synthetic: 'text-violet-800 dark:text-violet-300',
  },
  cyan: {
    focus: 'focus-visible:outline-cyan-500',
    selected:
      'border-cyan-400 bg-cyan-50 text-cyan-950 dark:border-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-100',
    idle: 'border-stone-300 bg-white text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800',
    live: 'text-stone-900 dark:text-stone-100',
    stageOn:
      'border-cyan-400 bg-cyan-50/90 ring-1 ring-cyan-300/60 shadow-sm shadow-cyan-500/10 dark:border-cyan-600 dark:bg-cyan-950/40 dark:ring-cyan-800/50',
    stageOff: 'border-stone-200 bg-white opacity-70 dark:border-stone-700 dark:bg-stone-900',
    nodeOn:
      'border-cyan-400 bg-white font-medium text-cyan-950 dark:border-cyan-500 dark:bg-stone-950 dark:text-cyan-100',
    nodeOff:
      'border-stone-200 bg-stone-50 text-stone-500 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400',
    badgeOn: 'text-cyan-700 dark:text-cyan-300',
    synthetic: 'text-cyan-800 dark:text-cyan-300',
  },
};

export function SystemArchitectureFlow({
  data,
  sectionId = 'systems-demo',
  className,
  accent = 'violet',
}: SystemArchitectureFlowProps) {
  const groupId = useId();
  const styles = ACCENT[accent];
  const [scenarioId, setScenarioId] = useState(data.scenarios[0]?.id ?? '');
  const scenario = useMemo(
    () => data.scenarios.find((s) => s.id === scenarioId) ?? data.scenarios[0],
    [data.scenarios, scenarioId],
  );

  const activeStages = new Set(scenario?.stageIds ?? []);
  const activeNodes = new Set(scenario?.nodeIds ?? []);

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p>
      <p className={`mt-3 text-xs ${opp.subtle}`}>{data.disclaimer}</p>
      <p className={cn('mt-1 text-xs font-medium', styles.synthetic)}>{data.syntheticLabel}</p>

      <div className="mt-6" role="group" aria-labelledby={`${groupId}-scenarios`}>
        <p id={`${groupId}-scenarios`} className={opp.label}>
          Example product questions
        </p>
        <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
          {data.scenarios.map((s) => {
            const selected = s.id === scenario?.id;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setScenarioId(s.id)}
                className={cn(
                  'min-w-[min(100%,16rem)] shrink-0 rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none sm:min-w-0 sm:max-w-xs',
                  styles.focus,
                  selected ? styles.selected : styles.idle,
                )}
              >
                {s.question}
              </button>
            );
          })}
        </div>
        {scenario ? (
          <p
            className={cn(
              'mt-3 rounded-lg border border-transparent px-1 py-1 transition motion-reduce:transition-none',
              opp.body,
            )}
            aria-live="polite"
            key={scenario.id}
          >
            <span className={cn('font-semibold', styles.live)}>Path: </span>
            {scenario.summary}
          </p>
        ) : null}
      </div>

      <details className="mt-6 rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
        <summary className="cursor-pointer text-sm font-semibold text-stone-900 dark:text-stone-100">
          Text description of the architecture stages
        </summary>
        <ol className={`mt-3 list-decimal space-y-3 pl-5 ${opp.body}`}>
          {data.stages.map((stage) => (
            <li key={stage.id}>
              <span className="font-semibold">{stage.title}</span>
              <ul className="mt-1 list-disc pl-5">
                {stage.nodes.map((node) => (
                  <li key={node.id}>{node.label}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </details>

      {/* Stacked on mobile; readable rail on tablet+ */}
      <ol className="mt-8 flex flex-col gap-3 lg:gap-0">
        {data.stages.map((stage, index) => {
          const stageActive = activeStages.has(stage.id);
          return (
            <li
              key={stage.id}
              className={cn(
                'flex flex-col transition duration-300 motion-reduce:transition-none lg:block',
                stageActive ? 'translate-x-0 opacity-100' : 'opacity-80',
              )}
            >
              <div
                className={cn(
                  'rounded-xl border p-4 transition duration-300 motion-reduce:transition-none',
                  stageActive ? styles.stageOn : styles.stageOff,
                )}
                aria-current={stageActive ? 'step' : undefined}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className={opp.h3}>
                    <span className="mr-2 text-stone-400 dark:text-stone-500" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {stage.title}
                  </h3>
                  {stageActive ? (
                    <span
                      className={cn(
                        'text-[11px] font-semibold uppercase tracking-wide',
                        styles.badgeOn,
                      )}
                    >
                      On path
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                      Adjacent
                    </span>
                  )}
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {stage.nodes.map((node) => {
                    const nodeActive =
                      activeNodes.size === 0 ? stageActive : activeNodes.has(node.id);
                    return (
                      <li
                        key={node.id}
                        className={cn(
                          'rounded-md border px-2 py-1 text-xs transition duration-200 motion-reduce:transition-none',
                          nodeActive ? styles.nodeOn : styles.nodeOff,
                        )}
                      >
                        {node.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {index < data.stages.length - 1 ? (
                <div
                  className={cn(
                    'flex justify-center py-1 transition duration-300 motion-reduce:transition-none lg:py-1.5',
                    stageActive
                      ? accent === 'violet'
                        ? 'text-violet-500 dark:text-violet-400'
                        : 'text-cyan-500 dark:text-cyan-400'
                      : 'text-stone-400 dark:text-stone-600',
                  )}
                  aria-hidden
                >
                  <ArrowDown className="h-4 w-4" />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
