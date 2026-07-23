'use client';

import { useId, useMemo, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EvaluationScorecard } from '@/components/opportunities/EvaluationScorecard';
import { opp } from '@/components/opportunities/opportunityTheme';
import type {
  AgentEnvironmentState,
  AgentEvalSignal,
  AgentUniverseData,
} from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type AgentUniverseExplorerProps = {
  data: AgentUniverseData;
  sectionId?: string;
  className?: string;
};

function mergeState(
  base: AgentEnvironmentState,
  patch?: Partial<AgentEnvironmentState>,
): AgentEnvironmentState {
  if (!patch) return base;
  return { ...base, ...patch };
}

function resolveStep(
  data: AgentUniverseData,
  stepIndex: number,
  interruptionId: string | null,
): {
  label: string;
  eventType: string;
  narrative: string;
  state: AgentEnvironmentState;
  evaluations: AgentEvalSignal[];
} {
  const step = data.timeline[stepIndex];
  const override =
    interruptionId && step.interruptionOverrides
      ? step.interruptionOverrides[interruptionId]
      : undefined;

  return {
    label: step.label,
    eventType: step.eventType,
    narrative: override?.narrative ?? step.narrative,
    state: mergeState(step.state, override?.state),
    evaluations: override?.evaluations ?? step.evaluations,
  };
}

function StateField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-b border-stone-200/80 py-2 last:border-0 dark:border-stone-700/80">
      <dt className="font-mono text-[10px] uppercase tracking-wide text-stone-500 dark:text-stone-400">
        {label}
      </dt>
      <dd className="mt-1 text-xs leading-relaxed text-stone-800 dark:text-stone-200">{children}</dd>
    </div>
  );
}

function StateList({ items }: { items: string[] }) {
  if (!items.length) return <span className="text-stone-500">—</span>;
  return (
    <ul className="list-inside list-disc space-y-0.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * Deterministic front-end research prototype for agent-environment trajectories.
 * Not an Anthropic system, RL training environment, or validated benchmark.
 */
export function AgentUniverseExplorer({
  data,
  sectionId = 'evaluation-lab',
  className,
}: AgentUniverseExplorerProps) {
  const baseId = useId();
  const [stepIndex, setStepIndex] = useState(0);
  const [interruptionId, setInterruptionId] = useState<string | null>(data.defaultInterruptionId);

  const resolved = useMemo(
    () => resolveStep(data, stepIndex, interruptionId),
    [data, stepIndex, interruptionId],
  );

  const stepCount = data.timeline.length;
  const canPrev = stepIndex > 0;
  const canNext = stepIndex < stepCount - 1;
  const liveRegionId = `${baseId}-live`;

  const go = (next: number) => {
    setStepIndex(Math.max(0, Math.min(stepCount - 1, next)));
  };

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className="inline-flex rounded border border-orange-300/70 bg-orange-50 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-orange-950 dark:border-orange-800 dark:bg-orange-950/50 dark:text-orange-100">
        {data.prototypeLabel}
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-3 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <div className={`mt-6 ${opp.callout}`}>
        <p className={opp.label}>{data.scenarioTitle}</p>
        <p className={`mt-2 ${opp.body}`}>{data.scenarioSummary}</p>
      </div>

      {/* Interruption controls */}
      <fieldset className="mt-8">
        <legend className={opp.label}>Failure injection</legend>
        <p className={`mt-1 ${opp.subtle}`}>
          Select one interruption. The trajectory updates deterministically — no live model.
        </p>
        <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Interruption type">
          <button
            type="button"
            role="radio"
            aria-checked={interruptionId === null}
            onClick={() => setInterruptionId(null)}
            className={cn(
              'rounded-lg border px-3 py-1.5 text-xs font-semibold transition',
              interruptionId === null
                ? 'border-orange-400/80 bg-orange-50 text-orange-950 dark:border-orange-700 dark:bg-orange-950/40 dark:text-orange-100'
                : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300',
            )}
          >
            Baseline (no injection)
          </button>
          {data.interruptions.map((item) => (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={interruptionId === item.id}
              onClick={() => setInterruptionId(item.id)}
              title={item.description}
              className={cn(
                'rounded-lg border px-3 py-1.5 text-xs font-semibold transition',
                interruptionId === item.id
                  ? 'border-orange-400/80 bg-orange-50 text-orange-950 dark:border-orange-700 dark:bg-orange-950/40 dark:text-orange-100'
                  : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        {interruptionId ? (
          <p className={`mt-2 ${opp.subtle}`} role="status">
            {data.interruptions.find((i) => i.id === interruptionId)?.description}
          </p>
        ) : null}
      </fieldset>

      {/* Desktop: 3-column lab / Mobile: stacked */}
      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_minmax(0,16rem)]">
        {/* Timeline */}
        <nav aria-label="Scenario timeline" className={cn(opp.card, 'p-3')}>
          <p className={opp.label}>Timeline</p>
          <ol className="mt-3 max-h-[28rem] space-y-1 overflow-y-auto pr-1">
            {data.timeline.map((step, index) => {
              const selected = index === stepIndex;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() => go(index)}
                    aria-current={selected ? 'step' : undefined}
                    className={cn(
                      'flex w-full items-start gap-2 rounded-md border px-2 py-1.5 text-left transition',
                      selected
                        ? 'border-orange-400/70 bg-orange-50/90 dark:border-orange-700 dark:bg-orange-950/40'
                        : 'border-transparent hover:border-stone-200 hover:bg-stone-50 dark:hover:border-stone-700 dark:hover:bg-stone-800/60',
                    )}
                  >
                    <span className="mt-0.5 font-mono text-[10px] text-stone-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-medium leading-snug text-stone-800 dark:text-stone-200">
                      {step.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Environment state */}
        <div className={cn(opp.card, 'p-4 sm:p-5')}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className={opp.label}>Environment state</p>
              <p className="mt-1 font-mono text-[11px] text-orange-800 dark:text-orange-300">
                {resolved.eventType}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className={opp.btnSecondary}
                disabled={!canPrev}
                onClick={() => go(stepIndex - 1)}
                aria-label="Previous timeline step"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                Prev
              </button>
              <button
                type="button"
                className={opp.btnSecondary}
                disabled={!canNext}
                onClick={() => go(stepIndex + 1)}
                aria-label="Next timeline step"
              >
                Next
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <p
            id={liveRegionId}
            className={`mt-3 ${opp.body}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              Step {stepIndex + 1}/{stepCount}: {resolved.label}.{' '}
            </span>
            {resolved.narrative}
          </p>

          <dl className="mt-4">
            <StateField label="Current objective">{resolved.state.objective}</StateField>
            <StateField label="Known facts">
              <StateList items={resolved.state.knownFacts} />
            </StateField>
            <StateField label="Assumptions">
              <StateList items={resolved.state.assumptions} />
            </StateField>
            <StateField label="Open questions">
              <StateList items={resolved.state.openQuestions} />
            </StateField>
            <StateField label="Available tools">
              <StateList items={resolved.state.availableTools} />
            </StateField>
            <StateField label="Restricted actions">
              <StateList items={resolved.state.restrictedActions} />
            </StateField>
            <StateField label="Memory state">{resolved.state.memoryState}</StateField>
            <StateField label="Last observation">{resolved.state.lastObservation}</StateField>
            <StateField label="Proposed next action">{resolved.state.proposedNextAction}</StateField>
          </dl>
        </div>

        {/* Scorecard */}
        <aside className={cn(opp.card, 'p-4')}>
          <EvaluationScorecard
            signals={resolved.evaluations}
            disclaimer="Illustrative evaluation framework—not a claim of validated benchmark performance."
          />
        </aside>
      </div>

      <p className={`mt-3 text-center ${opp.subtle}`} role="note">
        {data.disclaimer}
      </p>
      <blockquote className={`mt-6 max-w-3xl border-l-2 border-orange-400/60 pl-4 ${opp.body}`}>
        {data.researchNote}
      </blockquote>
    </section>
  );
}
