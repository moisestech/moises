'use client';

import { useId, useState } from 'react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { FailureTaxonomyData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type FailureTaxonomyProps = {
  data: FailureTaxonomyData;
  sectionId?: string;
  className?: string;
};

/**
 * Selectable failure-mode list for agent-environment research dossiers.
 * Avoids identical card grids; one detail pane + keyboardable list.
 */
export function FailureTaxonomy({
  data,
  sectionId = 'failures',
  className,
}: FailureTaxonomyProps) {
  const listId = useId();
  const [activeId, setActiveId] = useState(data.items[0]?.id ?? '');
  const active = data.items.find((item) => item.id === activeId) ?? data.items[0];

  if (!active) return null;

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p> : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
        <ul
          id={listId}
          role="listbox"
          aria-label="Failure modes"
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
        >
          {data.items.map((item) => {
            const selected = item.id === active.id;
            return (
              <li key={item.id} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    'w-full whitespace-nowrap rounded-lg border px-3 py-2 text-left text-xs font-semibold transition lg:whitespace-normal',
                    selected
                      ? 'border-orange-400/70 bg-orange-50 text-orange-950 dark:border-orange-700 dark:bg-orange-950/40 dark:text-orange-100'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-600',
                  )}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>

        <article
          className={cn(opp.card, 'p-5 sm:p-6')}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className={opp.label}>Failure mode</p>
          <h3 className={`mt-1 ${opp.h3MoMA}`}>{active.name}</h3>

          <dl className="mt-5 space-y-4">
            <div>
              <dt className={opp.label}>Observable symptom</dt>
              <dd className={`mt-1 ${opp.body}`}>{active.symptom}</dd>
            </div>
            <div>
              <dt className={opp.label}>Why a superficial evaluation might miss it</dt>
              <dd className={`mt-1 ${opp.body}`}>{active.hiddenRisk}</dd>
            </div>
            <div>
              <dt className={opp.label}>Possible environment intervention</dt>
              <dd className={`mt-1 ${opp.body}`}>{active.intervention}</dd>
            </div>
            <div>
              <dt className={opp.label}>Possible evaluation signal</dt>
              <dd className={`mt-1 font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300`}>
                {active.evaluationSignal}
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}
