'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { wolfsonianCitationIntro, wolfsonianCitationSteps } from '@/content/grants/wolfsonian-fellowship';
import { getWolfsonianAccent } from '@/config/wolfsonian-section-theme';

type WolfsonianCitationChainProps = {
  onStepChange?: (stepId: string | null) => void;
};

export function WolfsonianCitationChain({ onStepChange }: WolfsonianCitationChainProps) {
  const accent = getWolfsonianAccent('citation-layer');
  const [activeId, setActiveId] = useState(wolfsonianCitationSteps[0]?.id ?? 'source');

  const setStep = (id: string) => {
    setActiveId(id);
    onStepChange?.(id);
  };

  return (
    <div className={cn('mt-6 border bg-white p-4 dark:bg-neutral-900', accent.mediaBorder)}>
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>Citation chain</p>
      <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{wolfsonianCitationIntro}</p>

      <div
        className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium"
        role="tablist"
        aria-label="Citation chain: Source to Interpretation to Uncertainty"
      >
        {wolfsonianCitationSteps.map((step, index) => {
          const active = step.id === activeId;
          return (
            <span key={step.id} className="flex items-center gap-2">
              <button
                type="button"
                role="tab"
                aria-selected={active}
                className={cn(
                  'border px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  active ? accent.chipActive : cn(accent.chipIdle, 'hover:border-stone-500'),
                )}
                onMouseEnter={() => setStep(step.id)}
                onFocus={() => setStep(step.id)}
                onClick={() => setStep(step.id)}
              >
                {step.label}
              </button>
              {index < wolfsonianCitationSteps.length - 1 ? (
                <span className="text-stone-400 dark:text-stone-500" aria-hidden="true">
                  →
                </span>
              ) : null}
            </span>
          );
        })}
      </div>

      {wolfsonianCitationSteps.map((step) =>
        step.id === activeId ? (
          <p key={step.id} role="tabpanel" className="mt-4 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
            {step.detail}
          </p>
        ) : null,
      )}
    </div>
  );
}
