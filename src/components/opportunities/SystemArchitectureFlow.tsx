'use client';

import { useId, useMemo, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { ArchitectureFlowData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type SystemArchitectureFlowProps = {
  data: ArchitectureFlowData;
  sectionId?: string;
};

export function SystemArchitectureFlow({
  data,
  sectionId = 'systems-demo',
}: SystemArchitectureFlowProps) {
  const groupId = useId();
  const [scenarioId, setScenarioId] = useState(data.scenarios[0]?.id ?? '');
  const scenario = useMemo(
    () => data.scenarios.find((s) => s.id === scenarioId) ?? data.scenarios[0],
    [data.scenarios, scenarioId],
  );

  const activeStages = new Set(scenario?.stageIds ?? []);
  const activeNodes = new Set(scenario?.nodeIds ?? []);

  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p>
      <p className={`mt-3 text-xs ${opp.subtle}`}>{data.disclaimer}</p>
      <p className={`mt-1 text-xs font-medium text-violet-800 dark:text-violet-300`}>{data.syntheticLabel}</p>

      <div className="mt-6" role="group" aria-labelledby={`${groupId}-scenarios`}>
        <p id={`${groupId}-scenarios`} className={opp.label}>
          {data.scenariosLabel ?? 'Example questions'}
        </p>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {data.scenarios.map((s) => {
            const selected = s.id === scenario?.id;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setScenarioId(s.id)}
                className={cn(
                  'rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500',
                  selected
                    ? 'border-violet-400 bg-violet-50 text-violet-950 dark:border-violet-600 dark:bg-violet-950/50 dark:text-violet-100'
                    : 'border-stone-300 bg-white text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800',
                )}
              >
                {s.question}
              </button>
            );
          })}
        </div>
        {scenario ? (
          <p className={`mt-3 ${opp.body}`} aria-live="polite">
            <span className="font-semibold text-stone-900 dark:text-stone-100">Path: </span>
            {scenario.summary}
          </p>
        ) : null}
      </div>

      {/* Semantic text fallback */}
      <details className="mt-6 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-4">
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

      {/* Visual flow: stacked on mobile, wrap grid on desktop */}
      <ol className="mt-8 flex flex-col gap-3 lg:gap-0">
        {data.stages.map((stage, index) => {
          const stageActive = activeStages.has(stage.id);
          return (
            <li key={stage.id} className="flex flex-col lg:block">
              <div
                className={cn(
                  'rounded-xl border p-4 transition motion-reduce:transition-none',
                  stageActive
                    ? 'border-violet-400 bg-violet-50/90 ring-1 ring-violet-300/60 dark:border-violet-600 dark:bg-violet-950/40 dark:ring-violet-800/50'
                    : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900 opacity-70',
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
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
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
                    const nodeActive = activeNodes.size === 0 ? stageActive : activeNodes.has(node.id);
                    return (
                      <li
                        key={node.id}
                        className={cn(
                          'rounded-md border px-2 py-1 text-xs',
                          nodeActive
                            ? 'border-violet-400 bg-white font-medium text-violet-950 dark:border-violet-500 dark:bg-stone-950 dark:text-violet-100'
                            : 'border-stone-200 bg-stone-50 text-stone-500 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400',
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
                  className="flex justify-center py-1 text-stone-400 dark:text-stone-600 lg:py-1.5"
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
