'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';
import { careerPacketSnapshotRows } from '@/content/ai-engineering/career-packet-visuals';
import { CareerPacketInteractiveSection } from './CareerPacketInteractiveSection';
import { CareerPacketIllustrationPanel, CareerPacketTechLogoStrip } from './CareerPacketSkillPanels';

type CareerPacketSnapshotSectionProps = {
  accent: CareerPacketSectionAccent;
  sectionId?: string;
};

export function CareerPacketSnapshotSection({ accent, sectionId = 'snapshot' }: CareerPacketSnapshotSectionProps) {
  const [activeId, setActiveId] = useState(careerPacketSnapshotRows[0]?.id ?? '');
  const activeRow = careerPacketSnapshotRows.find((row) => row.id === activeId) ?? careerPacketSnapshotRows[0];

  const panelProps = activeRow
    ? {
        panelKey: activeRow.id,
        title: activeRow.label,
        caption: activeRow.value,
        logoIds: activeRow.techLogoIds,
        illustration: activeRow.illustration,
        accent,
        orientation: 'portrait' as const,
      }
    : null;

  return (
    <section id={sectionId} className={cn(opp.section, 'scroll-mt-32')}>
      <h2 className={opp.h2}>Recruiter snapshot</h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Quick-scan fields for recruiters — tap or select each line to see stack icons and skill highlights.
      </p>
      <p className={`mt-3 ${opp.subtle} md:hidden`}>Tap a field to preview.</p>
      <p className={`mt-3 hidden ${opp.subtle} md:block lg:hidden`}>
        Tap a field — the preview above updates.
      </p>
      <p className={`mt-3 hidden ${opp.subtle} lg:block`}>Hover a field — the preview panel updates.</p>

      <CareerPacketInteractiveSection
        tabletPanel={
          panelProps ? <CareerPacketIllustrationPanel {...panelProps} density="compact" /> : null
        }
        desktopPanel={panelProps ? <CareerPacketIllustrationPanel {...panelProps} /> : null}
      >
        <div className={cn(opp.tableWrap, accent.mediaBorder)}>
          <div
            className={cn(
              'hidden border-b border-stone-200 bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 lg:grid lg:grid-cols-[7.5rem_minmax(6.5rem,9rem)_minmax(0,1fr)] lg:gap-x-4',
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
                      'group w-full min-h-[44px] px-3 py-3.5 text-left transition duration-300 sm:px-4',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
                      active
                        ? cn('border-l-2', accent.paragraphActiveBg, accent.paragraphActiveBorder)
                        : 'border-l-2 border-transparent hover:bg-stone-50/90 dark:hover:bg-stone-800/80',
                    )}
                    aria-current={active ? 'true' : undefined}
                    aria-expanded={active ? true : undefined}
                    onMouseEnter={() => setActiveId(row.id)}
                    onFocus={() => setActiveId(row.id)}
                    onClick={() => setActiveId(row.id)}
                  >
                    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-x-3 text-left md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-x-4 lg:grid-cols-[7.5rem_minmax(6.5rem,9rem)_minmax(0,1fr)] lg:gap-y-0">
                      <div
                        className={cn(
                          'w-full max-w-[3.5rem] shrink-0 md:max-w-[7.5rem] md:w-[7.5rem]',
                          'row-span-2 md:row-span-2 lg:row-span-1',
                        )}
                      >
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
                      <p className={cn(opp.matrixPrimary, 'text-left lg:col-start-2')}>{row.label}</p>
                      <p
                        className={cn(
                          opp.matrixSecondary,
                          'mt-0 text-left',
                          'col-start-2 md:col-start-2 lg:col-start-3',
                        )}
                      >
                        {row.value}
                      </p>
                    </div>
                  </button>
                  {active ? (
                    <div className="border-t border-stone-100 px-3 py-3 dark:border-stone-800 md:hidden">
                      <CareerPacketIllustrationPanel
                        panelKey={row.id}
                        title={row.label}
                        caption={row.value}
                        logoIds={row.techLogoIds}
                        illustration={row.illustration}
                        accent={accent}
                        orientation="portrait"
                        density="compact"
                      />
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </CareerPacketInteractiveSection>
    </section>
  );
}
