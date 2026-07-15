'use client';

import { useId, useMemo, useState } from 'react';
import { Check, X } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { PermissionScenarioData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type PermissionScenarioProps = {
  data: PermissionScenarioData;
  sectionId?: string;
};

export function PermissionScenario({ data, sectionId = 'permissions' }: PermissionScenarioProps) {
  const groupId = useId();
  const [personaId, setPersonaId] = useState(data.personas[0]?.id ?? '');
  const persona = useMemo(
    () => data.personas.find((p) => p.id === personaId) ?? data.personas[0],
    [data.personas, personaId],
  );

  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.subtitle ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p> : null}
      <p className={`mt-3 text-xs font-medium text-violet-800 dark:text-violet-300`}>{data.syntheticLabel}</p>

      <div className={cn(opp.callout, 'mt-6')}>
        <p className={opp.label}>Question</p>
        <p className={`mt-1 text-base font-medium text-stone-900 dark:text-stone-100`}>{data.question}</p>
      </div>

      <div className="mt-6" role="tablist" aria-labelledby={`${groupId}-personas`}>
        <p id={`${groupId}-personas`} className={opp.label}>
          Synthetic persona
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {data.personas.map((p) => {
            const selected = p.id === persona?.id;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`${groupId}-tab-${p.id}`}
                onClick={() => setPersonaId(p.id)}
                className={cn(
                  'rounded-lg border px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500',
                  selected
                    ? 'border-violet-400 bg-violet-50 text-violet-950 dark:border-violet-600 dark:bg-violet-950/50 dark:text-violet-100'
                    : 'border-stone-300 bg-white text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100',
                )}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {persona ? (
        <div
          role="tabpanel"
          aria-labelledby={`${groupId}-tab-${persona.id}`}
          className="mt-4 grid gap-4 md:grid-cols-2"
        >
          <div className={cn(opp.card, 'p-5')}>
            <h3 className={opp.h3MoMA}>{persona.label} response</h3>
            <p className={`mt-2 ${opp.body}`}>{persona.accessSummary}</p>
            <p className={`mt-4 ${opp.label}`}>Allowed</p>
            <ul className="mt-2 space-y-2">
              {persona.allowed.map((item) => (
                <li key={item} className={`flex gap-2 ${opp.body}`}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={cn(opp.card, 'p-5')}>
            <p className={opp.label}>Denied / filtered before the model</p>
            <ul className="mt-2 space-y-2">
              {persona.denied.map((item) => (
                <li key={item} className={`flex gap-2 ${opp.body}`}>
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <ul className="mt-6 space-y-2 border-t border-stone-200 dark:border-stone-700 pt-6">
        {data.principles.map((principle) => (
          <li key={principle} className={opp.body}>
            <span className="mr-2 text-violet-600 dark:text-violet-400" aria-hidden>
              —
            </span>
            {principle}
          </li>
        ))}
      </ul>
    </section>
  );
}
