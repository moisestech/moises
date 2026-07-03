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
              'hidden border-b border-stone-200 bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 sm:grid sm:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]',
            )}
          >
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
                    <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] sm:items-start sm:gap-4">
                      <div className="flex items-start gap-2">
                        {row.techLogoIds?.length ? (
                          <CareerPacketTechLogoStrip
                            logoIds={row.techLogoIds.slice(0, 3)}
                            accent={accent}
                            active={active}
                            className="sm:flex-col"
                          />
                        ) : null}
                        <p className={opp.matrixPrimary}>{row.label}</p>
                      </div>
                      <p className={cn(opp.matrixSecondary, 'mt-0')}>{row.value}</p>
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
