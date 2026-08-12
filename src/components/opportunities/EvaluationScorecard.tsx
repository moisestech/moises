'use client';

import { opp } from '@/components/opportunities/opportunityTheme';
import type { AgentEvalSignal } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type EvaluationScorecardProps = {
  title?: string;
  signals: AgentEvalSignal[];
  disclaimer?: string;
  className?: string;
};

function statusTone(status: string): string {
  const s = status.toLowerCase();
  if (s.includes('strong') || s.includes('pass') || s.includes('clear')) {
    return 'border-emerald-300/70 bg-emerald-50/80 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100';
  }
  if (s.includes('partial') || s.includes('watch') || s.includes('mixed')) {
    return 'border-amber-300/70 bg-amber-50/80 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100';
  }
  if (s.includes('risk') || s.includes('fail') || s.includes('weak') || s.includes('miss')) {
    return 'border-rose-300/70 bg-rose-50/80 text-rose-950 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-100';
  }
  return 'border-stone-300 bg-stone-100 text-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200';
}

/**
 * Qualitative evaluation display for research prototypes.
 * Scores are illustrative labels — never present as validated benchmarks.
 */
export function EvaluationScorecard({
  title = 'Evaluation signals',
  signals,
  disclaimer,
  className,
}: EvaluationScorecardProps) {
  return (
    <div className={cn('flex h-full flex-col', className)}>
      <h3 className={opp.h3MoMA}>{title}</h3>
      {disclaimer ? (
        <p className={`mt-1 ${opp.subtle}`} role="note">
          {disclaimer}
        </p>
      ) : null}

      <ul className="mt-3 space-y-2" aria-label={title}>
        {signals.map((signal) => (
          <li
            key={signal.id}
            className="rounded-lg border border-stone-200/90 bg-stone-50/60 p-2.5 dark:border-stone-700 dark:bg-stone-900/60"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                {signal.label}
              </span>
              <span
                className={cn(
                  'inline-flex shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wide',
                  statusTone(signal.status),
                )}
              >
                {signal.status}
              </span>
            </div>
            {signal.explanation ? (
              <p className={`mt-1 text-[11px] leading-relaxed text-stone-600 dark:text-stone-400`}>
                {signal.explanation}
              </p>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Textual equivalent for charts / screen readers */}
      <table className="sr-only">
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Status</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {signals.map((signal) => (
            <tr key={`table-${signal.id}`}>
              <td>{signal.label}</td>
              <td>{signal.status}</td>
              <td>{signal.explanation ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
