'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';
import { careerPacketSnapshotRows } from '@/content/ai-engineering/career-packet-visuals';
import { CareerPacketIllustrationPanel, CareerPacketTechLogoStrip } from './CareerPacketSkillPanels';

type CareerPacketSnapshotSectionProps = {
  accent: CareerPacketSectionAccent;
  sectionId?: string;
};

export function CareerPacketSnapshotSection({ accent, sectionId = 'snapshot' }: CareerPacketSnapshotSectionProps) {
  const [activeId, setActiveId] = useState(careerPacketSnapshotRows[0]?.id ?? '');
  const activeRow = careerPacketSnapshotRows.find((row) => row.id === activeId) ?? careerPacketSnapshotRows[0];

  return (
    <section id={sectionId} className={cn(opp.section, 'scroll-mt-32')}>
      <h2 className={opp.h2}>Recruiter snapshot</h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Quick-scan fields for recruiters — hover each line to see stack icons and skill highlights.
      </p>
      <p className={`mt-3 ${opp.subtle} lg:hidden`}>Tap a field to preview.</p>
      <p className={`mt-3 hidden ${opp.subtle} lg:block`}>Hover a field — the preview panel updates.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-start">
        <div className={cn(opp.tableWrap, accent.mediaBorder)}>
          <div
            className={cn(
              'hidden border-b border-stone-200 bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 sm:grid sm:grid-cols-[7.5rem_minmax(6.5rem,9rem)_minmax(0,1fr)] sm:gap-x-4',
            )}
          >
            <div className="px-4 py-3" aria-hidden />
            <div className="px-4 py-3">Field</div>
            <div className="px-4 py-3">Details</div>
          </div>
          <ul className={opp.divide} role="list">
            {careerPacketSnapshotRows.map((row) => {
              const active = row.id === activeId;
              return (
                <li key={row.id}>
                  <button
                    type="button"
                    className={cn(
                      'group w-full px-3 py-3 text-left transition duration-300 sm:px-4',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
                      active
                        ? cn('border-l-2', accent.paragraphActiveBg, accent.paragraphActiveBorder)
                        : 'border-l-2 border-transparent hover:bg-stone-50/90 dark:hover:bg-stone-800/80',
                    )}
                    aria-current={active ? 'true' : undefined}
                    onMouseEnter={() => setActiveId(row.id)}
                    onFocus={() => setActiveId(row.id)}
                    onClick={() => setActiveId(row.id)}
                  >
                    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-x-3 text-left sm:grid-cols-[7.5rem_minmax(6.5rem,9rem)_minmax(0,1fr)] sm:gap-x-4 sm:gap-y-0">
                      <div className="row-span-2 w-full max-w-[3.5rem] shrink-0 sm:row-span-1 sm:max-w-[7.5rem] sm:w-[7.5rem]">
                        {row.techLogoIds?.length ? (
                          <CareerPacketTechLogoStrip
                            logoIds={row.techLogoIds.slice(0, 3)}
                            accent={accent}
                            active={active}
                          />
                        ) : (
                          <span className="block h-8" aria-hidden />
                        )}
                      </div>
                      <p className={cn(opp.matrixPrimary, 'text-left')}>{row.label}</p>
                      <p className={cn(opp.matrixSecondary, 'mt-0 text-left')}>{row.value}</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {activeRow ? (
          <CareerPacketIllustrationPanel
            panelKey={activeRow.id}
            title={activeRow.label}
            caption={activeRow.value}
            logoIds={activeRow.techLogoIds}
            illustration={activeRow.illustration}
            accent={accent}
            orientation="portrait"
          />
        ) : null}
      </div>
    </section>
  );
}
