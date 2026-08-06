'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AssetPlaceholder } from '@/components/opportunities/creative-agency/AssetPlaceholder';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import type { CampaignSystemBlock } from '@/content/opportunities/creativeAgencyDossier';
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
  const accent = getOpportunityCompactAccent(sectionId);
  const [activeId, setActiveId] = useState(data.formats[0]?.id ?? '');
  const active = data.formats.find((f) => f.id === activeId) ?? data.formats[0];
  const activeIndex = Math.max(
    0,
    data.formats.findIndex((f) => f.id === active?.id),
  );
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const node = active ? tabRefs.current[active.id] : null;
    if (!node) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    node.scrollIntoView({
      behavior: reduceMotion ? 'instant' : 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [active]);

  const selectByOffset = (delta: number) => {
    if (!data.formats.length) return;
    const next = data.formats[(activeIndex + delta + data.formats.length) % data.formats.length];
    setActiveId(next.id);
  };

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        {data.eyebrow}
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <div className={cn(opp.callout, 'mt-6', accent.softBg, 'border-l-[3px]', accent.rail)}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-amber-400/60 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-600/50 dark:bg-amber-950/50 dark:text-amber-100">
            Self-initiated study
          </span>
          <span className={opp.pill}>Not a client project</span>
        </div>
        <h3 className={`mt-3 ${opp.h3MoMA}`}>{data.conceptTitle}</h3>
        <p className={`mt-2 ${opp.body}`}>{data.conceptBody}</p>
        <p className={`mt-3 ${opp.subtle}`}>{data.disclaimer}</p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
          Inspect across formats
        </p>
        <div className="flex items-center gap-1 sm:hidden">
          <button
            type="button"
            className={cn(opp.btnSecondary, 'min-h-10 px-2.5')}
            aria-label="Previous format"
            onClick={() => selectByOffset(-1)}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className={cn(opp.btnSecondary, 'min-h-10 px-2.5')}
            aria-label="Next format"
            onClick={() => selectByOffset(1)}
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div
          role="tablist"
          aria-label="Campaign channel formats"
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {data.formats.map((format) => {
            const selected = format.id === active?.id;
            const pending = !format.imageSrc;
            return (
              <button
                key={format.id}
                ref={(el) => {
                  tabRefs.current[format.id] = el;
                }}
                type="button"
                role="tab"
                id={`${tabId}-tab-${format.id}`}
                aria-selected={selected}
                aria-controls={`${tabId}-panel-${format.id}`}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  'min-h-12 shrink-0 snap-start rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 sm:min-h-11',
                  selected
                    ? cn(accent.navActive, accent.navActiveText)
                    : cn(accent.navIdle, 'bg-white text-stone-700 dark:bg-stone-900 dark:text-stone-300'),
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
                <span className="block text-xs font-semibold leading-snug">{format.label}</span>
                <span
                  className={cn(
                    'mt-0.5 block text-[10px] font-medium uppercase tracking-wide',
                    selected
                      ? 'opacity-90'
                      : pending
                        ? 'text-amber-700 dark:text-amber-300'
                        : 'text-emerald-700 dark:text-emerald-300',
                  )}
                >
                  {pending ? 'Placeholder' : 'Ready'}
                </span>
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
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={opp.matrixPrimary}>{active.label}</h3>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                {activeIndex + 1} / {data.formats.length}
              </span>
              {!active.imageSrc ? (
                <span className="rounded-full border border-amber-400/60 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-600/50 dark:bg-amber-950/50 dark:text-amber-100">
                  Placeholder
                </span>
              ) : (
                <span className="rounded-full border border-emerald-400/60 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-900 dark:border-emerald-600/50 dark:bg-emerald-950/50 dark:text-emerald-100">
                  Specimen ready
                </span>
              )}
            </div>
            <p className={`mt-2 ${opp.body}`}>{active.description}</p>
            <div className="relative mt-4 w-full max-w-2xl overflow-hidden rounded-lg">
              {active.imageSrc ? (
                <div
                  className={cn(
                    'relative w-full overflow-hidden rounded-lg border border-stone-200 dark:border-stone-700',
                    active.aspectClass,
                  )}
                >
                  {active.imageSrc.startsWith('http') ? (
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
                  )}
                </div>
              ) : (
                <AssetPlaceholder
                  badge="Pending specimen"
                  title={active.label}
                  note={active.placeholderNote ?? 'TODO: Add channel specimen.'}
                  aspectClass={active.aspectClass}
                  className="rounded-lg"
                />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
