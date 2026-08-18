'use client';

import { useId, useState } from 'react';
import type { Opportunity, ProcessDiagram } from '@/content/opportunities/types';
import { ApproachDiagramGallery } from '@/components/opportunities/ApproachDiagramGallery';
import { ProcessStepLogos } from '@/components/opportunities/ProcessStepLogos';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';

type InnovationProcessProps = {
  opportunity: Opportunity;
  /** Sticky nav anchor; defaults to `process` */
  sectionId?: string;
  /** Optional architecture diagrams (click to expand full screen). */
  diagrams?: ProcessDiagram[];
  /** `horizontal` = row on lg+, 2-col tablet, snap rail on mobile. Default `stack`. */
  layout?: 'stack' | 'horizontal';
  framed?: boolean;
};

export function InnovationProcess({
  opportunity,
  sectionId = 'process',
  diagrams,
  layout = 'stack',
  framed = false,
}: InnovationProcessProps) {
  const groupId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = opportunity.processSteps;
  const isHorizontal = layout === 'horizontal';
  const accent = getOpportunityCompactAccent(sectionId);

  return (
    <section id={sectionId} className={framed ? 'scroll-mt-32' : opp.section}>
      <h2 className={opp.h2}>{opportunity.processSectionTitle ?? 'Process'}</h2>
      {opportunity.processIntro ? (
        <p className={`mt-3 max-w-3xl ${opp.body}`}>{opportunity.processIntro}</p>
      ) : null}
      {diagrams?.length ? (
        <>
          <p className={`mt-6 ${opp.label}`}>Architecture overview</p>
          <ApproachDiagramGallery diagrams={diagrams} className="mt-3" />
        </>
      ) : null}

      {isHorizontal ? (
        <p className={`mt-6 text-xs ${opp.subtle} sm:hidden`}>Swipe the plan · tap a step to focus</p>
      ) : null}

      <ol
        className={cn(
          diagrams?.length ? 'mt-10' : 'mt-8',
          isHorizontal
            ? 'flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 md:gap-4 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden'
            : 'space-y-4',
        )}
        role={isHorizontal ? 'listbox' : undefined}
        aria-labelledby={isHorizontal ? groupId : undefined}
      >
        {isHorizontal ? (
          <span id={groupId} className="sr-only">
            First ninety days plan steps
          </span>
        ) : null}
        {steps.map((step, i) => {
          const selected = isHorizontal && i === activeIndex;
          return (
            <li
              key={step.title}
              className={cn(
                isHorizontal &&
                  'w-[min(78vw,18rem)] shrink-0 snap-center sm:w-auto sm:shrink',
              )}
            >
              {isHorizontal ? (
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  className={cn(
                    'flex h-full w-full flex-col gap-3 rounded-xl border p-4 text-left transition duration-300 motion-reduce:transition-none',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                    accent.focusRing,
                    selected
                      ? accent.processSelected
                      : cn(
                          'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
                          accent.cardHover,
                        ),
                  )}
                >
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition',
                      selected ? accent.processSelectedBadge : accent.processIdleBadge,
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className={opp.matrixPrimary}>{step.title}</h3>
                    <p
                      className={cn(
                        'mt-1.5 text-sm leading-relaxed transition',
                        selected
                          ? 'text-stone-700 dark:text-stone-200'
                          : 'text-stone-500 line-clamp-3 dark:text-stone-400 sm:line-clamp-4',
                      )}
                    >
                      {step.description}
                    </p>
                    {step.logoIds?.length ? <ProcessStepLogos logoIds={step.logoIds} /> : null}
                  </div>
                </button>
              ) : (
                <div className={cn(`flex gap-4 ${opp.card} p-4 transition duration-300 motion-reduce:transition-none`, accent.cardHover)}>
                  <span className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold', accent.processIdleBadge)}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className={opp.matrixPrimary}>{step.title}</h3>
                    <p className={opp.matrixSecondary}>{step.description}</p>
                    {step.logoIds?.length ? <ProcessStepLogos logoIds={step.logoIds} /> : null}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {isHorizontal && steps[activeIndex] ? (
        <div
          className={cn(
            'mt-4 hidden rounded-xl border p-4 sm:block lg:hidden',
            accent.processSelected,
          )}
          aria-live="polite"
        >
          <p className={cn('text-[11px] font-semibold uppercase tracking-wide', accent.eyebrow)}>
            Focus · Step {String(activeIndex + 1).padStart(2, '0')}
          </p>
          <p className={`mt-1 font-semibold text-stone-900 dark:text-stone-50`}>
            {steps[activeIndex].title}
          </p>
          <p className={`mt-1.5 ${opp.body}`}>{steps[activeIndex].description}</p>
        </div>
      ) : null}

      {opportunity.innovationLabLead || opportunity.innovationLabBody ? (
        <div className={opp.calloutInner}>
          {opportunity.innovationLabSectionTitle ? (
            <h3 className={opp.h3MoMA}>{opportunity.innovationLabSectionTitle}</h3>
          ) : null}
          {opportunity.innovationLabLead ? (
            <p className="mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
              {opportunity.innovationLabLead}
            </p>
          ) : null}
          {opportunity.innovationLabBody ? (
            <p className={`mt-2 ${opp.body}`}>{opportunity.innovationLabBody}</p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
