'use client';

import { useState } from 'react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { resolveTechLogos } from '@/content/evidence/tech-logos';
import type { CapabilityMapData } from '@/content/opportunities/systemsDossier';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { cn } from '@/lib/utils';

type CapabilityMapProps = {
  data: CapabilityMapData;
  sectionId?: string;
  className?: string;
};

export function CapabilityMap({ data, sectionId = 'capabilities', className }: CapabilityMapProps) {
  const accent = getOpportunityCompactAccent(sectionId);
  const [activeId, setActiveId] = useState(data.groups[0]?.id ?? '');
  const activeGroup = data.groups.find((g) => g.id === activeId) ?? data.groups[0];
  const activeLogos = resolveTechLogos(activeGroup?.logoIds ?? []);

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        Production tools
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      {data.subtitle ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p> : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-8">
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1">
          {data.groups.map((group, index) => {
            const active = group.id === activeGroup?.id;
            return (
              <li key={group.id}>
                <button
                  type="button"
                  className={cn(
                    'w-full rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 sm:p-5',
                    active
                      ? cn(
                          'border-stone-300 bg-white shadow-sm ring-1 ring-stone-200/80 dark:border-stone-600 dark:bg-stone-900 dark:ring-stone-700/80',
                          accent.softBg,
                        )
                      : 'border-stone-200/80 bg-white/70 hover:border-stone-300 hover:bg-white dark:border-stone-700/80 dark:bg-stone-950/40 dark:hover:border-stone-600 dark:hover:bg-stone-900',
                  )}
                  onClick={() => setActiveId(group.id)}
                  onMouseEnter={() => setActiveId(group.id)}
                  aria-pressed={active}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums',
                        accent.navIdle,
                        accent.eyebrow,
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className={opp.h3MoMA}>{group.title}</h3>
                      <p className={cn(opp.subtle, 'mt-1 line-clamp-2')}>
                        {group.items[0]?.replace(/\*\*/g, '') ?? ''}
                      </p>
                      {group.logoIds?.length ? (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {resolveTechLogos(group.logoIds.slice(0, 4)).map((logo) => (
                            <span
                              key={logo.id}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-stone-200 bg-white p-1 dark:border-stone-700 dark:bg-stone-800"
                              title={logo.label}
                            >
                              {logo.imageSrc ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={logo.imageSrc}
                                  alt=""
                                  className={cn('h-full w-full object-contain', logo.imageClassName)}
                                />
                              ) : (
                                <span className="text-[8px] font-bold uppercase text-stone-500">
                                  {logo.label.slice(0, 3)}
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div
          className={cn(
            'rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-700 dark:bg-stone-900 sm:p-6 lg:sticky lg:top-28',
            accent.softBg,
          )}
        >
          {activeGroup ? (
            <>
              <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
                Selected stack
              </p>
              <h3 className={`mt-2 ${opp.h3MoMA}`}>{activeGroup.title}</h3>
              {activeLogos.length ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {activeLogos.map((logo) => (
                    <li
                      key={logo.id}
                      className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-950 dark:text-stone-200"
                    >
                      {logo.imageSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={logo.imageSrc}
                          alt=""
                          className={cn('h-4 w-4 object-contain', logo.imageClassName)}
                        />
                      ) : null}
                      {logo.label}
                    </li>
                  ))}
                </ul>
              ) : null}
              {activeGroup.items.length === 1 ? (
                <p className={`mt-5 ${opp.body}`}>
                  <OpportunityRichText text={activeGroup.items[0]} />
                </p>
              ) : (
                <ul className="mt-5 space-y-2">
                  {activeGroup.items.map((item) => (
                    <li key={item.slice(0, 48)} className={opp.body}>
                      <span className="mr-2 text-stone-400" aria-hidden>
                        ·
                      </span>
                      <OpportunityRichText text={item} />
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : null}
        </div>
      </div>

      {data.currentlyExtending?.length ? (
        <p className={`mt-8 max-w-3xl ${opp.subtle}`}>
          <span className="font-semibold text-stone-500 dark:text-stone-400">Currently extending: </span>
          {data.currentlyExtending.join(' · ')}
        </p>
      ) : null}

      {data.closingStatement ? (
        <p className={cn(opp.callout, 'mt-8', opp.body)}>
          <OpportunityRichText text={data.closingStatement} />
        </p>
      ) : null}
    </section>
  );
}
