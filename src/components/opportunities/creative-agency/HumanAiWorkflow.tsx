'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { AssetPlaceholder } from '@/components/opportunities/creative-agency/AssetPlaceholder';
import { opp } from '@/components/opportunities/opportunityTheme';
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
  const [activeStep, setActiveStep] = useState(0);
  const step = data.steps[activeStep];
  const { beforeAfter } = data;

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <p className={`mt-8 ${opp.label}`}>Process steps — select to inspect</p>
      <ol className="mt-3 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                  'flex max-w-[10.5rem] flex-col rounded-lg border px-3 py-2.5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none',
                  selected
                    ? 'border-cyan-500 bg-cyan-50 dark:border-cyan-400 dark:bg-cyan-950/40'
                    : 'border-stone-300 bg-white hover:border-stone-400 dark:border-stone-600 dark:bg-stone-900',
                )}
                onClick={() => setActiveStep(index)}
              >
                <span className={opp.subtle}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 text-xs font-semibold leading-snug text-stone-900 dark:text-stone-100">
                  {s.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {step ? (
        <div
          id={`${baseId}-detail`}
          role="region"
          aria-labelledby={`${baseId}-step-${step.id}`}
          className={cn(opp.card, 'mt-4 p-5')}
        >
          <h3 className={opp.h3MoMA}>{step.title}</h3>
          <p className={`mt-2 ${opp.body}`}>{step.description}</p>
          <p className={`mt-3 ${opp.subtle}`}>
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
