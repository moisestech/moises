'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { ReliabilityPanelData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type ReliabilityControlPanelProps = {
  data: ReliabilityPanelData;
  sectionId?: string;
};

export function ReliabilityControlPanel({
  data,
  sectionId = 'reliability',
}: ReliabilityControlPanelProps) {
  const [openId, setOpenId] = useState<string | null>(data.controls[0]?.id ?? null);

  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.subtitle ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p> : null}

      <ol
        className="mt-6 flex flex-wrap items-center gap-2"
        aria-label="Deterministic reliability pipeline"
      >
        {data.pipelineSteps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 px-2.5 py-1.5 text-xs font-semibold text-stone-800 dark:text-stone-100">
              {step}
            </span>
            {index < data.pipelineSteps.length - 1 ? (
              <span className="text-stone-400 dark:text-stone-600" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className={`mt-2 ${opp.subtle}`}>
        Deterministic conceptual pipeline — not a live metrics dashboard.
      </p>

      <ul className="mt-8 space-y-2">
        {data.controls.map((control) => {
          const open = openId === control.id;
          return (
            <li key={control.id} className={cn(opp.card, 'overflow-hidden')}>
              <button
                type="button"
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                onClick={() => setOpenId(open ? null : control.id)}
              >
                <span className={opp.matrixPrimary}>{control.title}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-stone-500 transition motion-reduce:transition-none',
                    open && 'rotate-180',
                  )}
                  aria-hidden
                />
              </button>
              {open ? (
                <div className="border-t border-stone-100 dark:border-stone-800 px-4 py-3">
                  <p className={opp.body}>{control.purpose}</p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
