'use client';

import { useState } from 'react';
import { ArrowRight, Workflow } from 'lucide-react';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesRitualStepMeta } from '@/config/post-ai-readymades-theme';
import { ReadymadesSectionHeader } from '@/components/post-ai-readymades/ReadymadesSectionHeader';
import { cn } from '@/lib/utils';

export function RitualDiagram() {
  const { ritualSteps, ritualLine } = postAiReadymadesPage;
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const renderStep = (step: string, index: number, vertical: boolean) => {
    const meta = readymadesRitualStepMeta[step];
    const Icon = meta?.icon;
    const isActive = activeStep === step;

    return (
      <div key={step} className={cn('flex items-center gap-3', vertical && 'w-full flex-col')}>
        <button
          type="button"
          onMouseEnter={() => setActiveStep(step)}
          onMouseLeave={() => setActiveStep(null)}
          onFocus={() => setActiveStep(step)}
          onBlur={() => setActiveStep(null)}
          className={cn(
            'flex items-center gap-3 rounded-sm border px-4 py-3 text-left transition duration-300',
            meta?.border,
            meta?.hover,
            isActive ? meta?.tint : 'bg-white/90 dark:bg-neutral-950/90',
            vertical && 'w-full justify-center',
          )}
        >
          {Icon ? (
            <span className={cn('inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm', meta?.tint)}>
              <Icon className="h-4 w-4" aria-hidden />
            </span>
          ) : null}
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111111] dark:text-neutral-100">
            {step}
          </p>
        </button>
        {index < ritualSteps.length - 1 ? (
          <span
            className={cn(
              'font-mono text-sm text-[#777777] dark:text-neutral-500',
              vertical ? 'my-1' : '',
            )}
            aria-hidden
          >
            {vertical ? '↓' : <ArrowRight className="h-4 w-4" />}
          </span>
        ) : null}
      </div>
    );
  };

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <div className="rounded-sm border border-[#dedede]/80 bg-gradient-to-br from-white/90 via-[#faf8f4] to-emerald-50/30 p-6 dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-950 dark:to-emerald-950/20 sm:p-8">
        <ReadymadesSectionHeader
          eyebrow="Daily ritual"
          title="One selection becomes an archive entry"
          icon={Workflow}
        />

        <div className="hidden md:block overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-2">
            {ritualSteps.map((step, index) => renderStep(step, index, false))}
          </div>
        </div>

        <ol className="md:hidden space-y-0">
          {ritualSteps.map((step, index) => (
            <li key={step}>{renderStep(step, index, true)}</li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl border-l-2 border-emerald-700/70 bg-gradient-to-r from-emerald-50/50 to-transparent py-2 pl-4 text-base leading-relaxed text-[#111111] dark:border-emerald-400/70 dark:from-emerald-950/20 dark:text-neutral-200 sm:text-lg">
          {ritualLine}
        </p>
      </div>
    </section>
  );
}
