'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { CampaignSystemBlock } from '@/content/opportunities/wmxCreativeDossier';
import { cn } from '@/lib/utils';

type CampaignChannelSystemProps = {
  data: CampaignSystemBlock;
  sectionId?: string;
  className?: string;
};

export function CampaignChannelSystem({
  data,
  sectionId = 'campaign',
  className,
}: CampaignChannelSystemProps) {
  const tabId = useId();
  const [activeId, setActiveId] = useState(data.formats[0]?.id ?? '');
  const active = data.formats.find((f) => f.id === activeId) ?? data.formats[0];

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={opp.accent}>{data.eyebrow}</p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <div className={cn(opp.callout, 'mt-6')}>
        <h3 className={opp.h3MoMA}>{data.conceptTitle}</h3>
        <p className={`mt-2 ${opp.body}`}>{data.conceptBody}</p>
        <p className={`mt-3 ${opp.subtle}`}>{data.disclaimer}</p>
      </div>

      <div className="mt-8">
        <div
          role="tablist"
          aria-label="Campaign channel formats"
          className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {data.formats.map((format) => {
            const selected = format.id === active?.id;
            return (
              <button
                key={format.id}
                type="button"
                role="tab"
                id={`${tabId}-tab-${format.id}`}
                aria-selected={selected}
                aria-controls={`${tabId}-panel-${format.id}`}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  'shrink-0 rounded-lg border px-3 py-2 text-left text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                  selected
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-900 dark:border-cyan-400 dark:bg-cyan-950/50 dark:text-cyan-100'
                    : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-300',
                )}
                onClick={() => setActiveId(format.id)}
                onKeyDown={(e) => {
                  const idx = data.formats.findIndex((f) => f.id === format.id);
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    const next = data.formats[(idx + 1) % data.formats.length];
                    setActiveId(next.id);
                  } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prev = data.formats[(idx - 1 + data.formats.length) % data.formats.length];
                    setActiveId(prev.id);
                  }
                }}
              >
                {format.label}
              </button>
            );
          })}
        </div>

        {active ? (
          <div
            role="tabpanel"
            id={`${tabId}-panel-${active.id}`}
            aria-labelledby={`${tabId}-tab-${active.id}`}
            className={cn(opp.card, 'mt-4 p-4 sm:p-6')}
          >
            <h3 className={opp.matrixPrimary}>{active.label}</h3>
            <p className={`mt-2 ${opp.body}`}>{active.description}</p>
            <div
              className={cn(
                'relative mt-4 w-full max-w-2xl overflow-hidden rounded-lg border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800',
                active.aspectClass,
              )}
            >
              {active.imageSrc ? (
                active.imageSrc.startsWith('http') ? (
                  <Image
                    src={active.imageSrc}
                    alt={active.imageAlt ?? active.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 640px"
                    loading="lazy"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={active.imageSrc}
                    alt={active.imageAlt ?? active.label}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                )
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                  <span className={opp.label}>Specimen pending</span>
                  <p className={`max-w-sm ${opp.subtle}`}>
                    {active.placeholderNote ?? 'TODO: Add channel specimen.'}
                  </p>
                </div>
              )}
            </div>
            {active.placeholderNote && active.imageSrc ? (
              <p className={`mt-3 ${opp.subtle}`}>{active.placeholderNote}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
