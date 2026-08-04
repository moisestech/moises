'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AssetPlaceholder } from '@/components/opportunities/creative-agency/AssetPlaceholder';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import type { HumanAiWorkflowBlock } from '@/content/opportunities/creativeAgencyDossier';
import { cn } from '@/lib/utils';

type HumanAiWorkflowProps = {
  data: HumanAiWorkflowBlock;
  sectionId?: string;
  className?: string;
};

export function HumanAiWorkflow({
  data,
  sectionId = 'workflow',
  className,
}: HumanAiWorkflowProps) {
  const baseId = useId();
  const accent = getOpportunityCompactAccent(sectionId);
  const [activeStep, setActiveStep] = useState(0);
  const step = data.steps[activeStep];
  const { beforeAfter } = data;

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        Interactive process
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <div className="mt-8 flex items-center justify-between gap-3">
        <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
          Process steps — select to inspect
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={cn(opp.btnSecondary, 'min-h-10 px-2.5')}
            aria-label="Previous step"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((n) => Math.max(0, n - 1))}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className={cn(opp.btnSecondary, 'min-h-10 px-2.5')}
            aria-label="Next step"
            disabled={activeStep >= data.steps.length - 1}
            onClick={() => setActiveStep((n) => Math.min(data.steps.length - 1, n + 1))}
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile: vertical selectable list */}
      <ol className="mt-3 grid gap-2 md:hidden">
        {data.steps.map((s, index) => {
          const selected = index === activeStep;
          return (
            <li key={s.id}>
              <button
                type="button"
                id={`${baseId}-step-m-${s.id}`}
                aria-current={selected ? 'step' : undefined}
                aria-controls={`${baseId}-detail`}
                className={cn(
                  'flex w-full min-h-12 items-start gap-3 rounded-lg border px-3 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                  selected
                    ? cn(accent.navActive, accent.navActiveText)
                    : cn(accent.navIdle, 'bg-white dark:bg-stone-900'),
                )}
                onClick={() => setActiveStep(index)}
              >
                <span
                  className={cn(
                    'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold',
                    selected ? 'border-white/40' : accent.eyebrow,
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold leading-snug">{s.title}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Tablet/desktop: horizontal snap scroller */}
      <ol className="mt-3 hidden gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:flex [&::-webkit-scrollbar]:hidden">
        {data.steps.map((s, index) => {
          const selected = index === activeStep;
          return (
            <li key={s.id} className="shrink-0">
              <button
                type="button"
                id={`${baseId}-step-${s.id}`}
                aria-current={selected ? 'step' : undefined}
                aria-controls={`${baseId}-detail`}
                className={cn(
                  'flex w-[9.5rem] flex-col rounded-lg border px-3 py-2.5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none lg:w-[10.5rem]',
                  selected
                    ? cn(accent.navActive, accent.navActiveText)
                    : cn(accent.navIdle, 'bg-white dark:bg-stone-900'),
                )}
                onClick={() => setActiveStep(index)}
              >
                <span className={cn('text-[10px] font-semibold uppercase tracking-wide', selected ? 'opacity-80' : opp.subtle)}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 text-xs font-semibold leading-snug">{s.title}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {step ? (
        <div
          id={`${baseId}-detail`}
          role="region"
          aria-label={step.title}
          className={cn(opp.card, 'mt-4 border-l-[3px] p-5', accent.rail, accent.softBg)}
        >
          <h3 className={opp.h3MoMA}>{step.title}</h3>
          <p className={`mt-2 ${opp.body}`}>{step.description}</p>
          <p className={`mt-3 hidden text-xs leading-relaxed text-stone-500 dark:text-stone-400 lg:block`}>
            {data.steps.map((s) => s.title).join(' → ')}
          </p>
        </div>
      ) : null}

      <div className="mt-10" id={`${sectionId}-before-after`}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={opp.h3MoMA}>Raw generation versus art-directed final</h3>
          <span className="rounded-full border border-amber-400/60 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-600/50 dark:bg-amber-950/50 dark:text-amber-100">
            Placeholders
          </span>
        </div>
        <p className={`mt-2 max-w-3xl ${opp.body}`}>{beforeAfter.note}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {(
            [
              {
                label: beforeAfter.beforeLabel,
                src: beforeAfter.beforeSrc,
                alt: beforeAfter.beforeAlt,
              },
              {
                label: beforeAfter.afterLabel,
                src: beforeAfter.afterSrc,
                alt: beforeAfter.afterAlt,
              },
            ] as const
          ).map((panel) => (
            <figure key={panel.label} className={cn(opp.card, 'overflow-hidden')}>
              <div className="relative aspect-[4/3] bg-stone-100 dark:bg-stone-800">
                {panel.src ? (
                  panel.src.startsWith('http') ? (
                    <Image
                      src={panel.src}
                      alt={panel.alt ?? panel.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={panel.src}
                      alt={panel.alt ?? panel.label}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  )
                ) : (
                  <AssetPlaceholder
                    badge="Asset needed"
                    title={panel.label}
                    note="Drop permission-cleared still here."
                    aspectClass="aspect-[4/3] border-0 rounded-none"
                    className="h-full min-h-full"
                  />
                )}
              </div>
              <figcaption className={`border-t border-stone-100 px-4 py-3 dark:border-stone-800 ${opp.label}`}>
                {panel.label}
                {!panel.src ? ' · Placeholder' : ''}
              </figcaption>
            </figure>
          ))}
        </div>
        {beforeAfter.todo ? (
          <p className="mt-4 rounded-lg border border-amber-300/60 bg-amber-50/80 px-4 py-3 text-xs leading-relaxed text-amber-950 dark:border-amber-700/50 dark:bg-amber-950/30 dark:text-amber-100">
            {beforeAfter.todo}
          </p>
        ) : null}
      </div>
    </section>
  );
}
