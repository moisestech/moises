'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';
import { careerPacketFitRows } from '@/content/ai-engineering/career-packet-visuals';
import { CareerPacketInteractiveSection } from './CareerPacketInteractiveSection';
import { CareerPacketIllustrationPanel, CareerPacketTechLogoStrip } from './CareerPacketSkillPanels';

type CareerPacketFitSectionProps = {
  title: string;
  intro: string;
  accent: CareerPacketSectionAccent;
};

export function CareerPacketFitSection({ title, intro, accent }: CareerPacketFitSectionProps) {
  const [activeId, setActiveId] = useState(careerPacketFitRows[0]?.id ?? '');
  const activeRow = careerPacketFitRows.find((row) => row.id === activeId) ?? careerPacketFitRows[0];

  const panelProps = activeRow
    ? {
        panelKey: activeRow.id,
        title: activeRow.primary,
        caption: activeRow.secondary,
        logoIds: activeRow.techLogoIds,
        illustration: activeRow.illustration,
        accent,
        orientation: 'portrait' as const,
      }
    : null;

  return (
    <>
      <h2 className={opp.h2}>{title}</h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p>
      <p className={`mt-3 ${opp.subtle} md:hidden`}>Tap a row to preview stack icons and skill art.</p>
      <p className={`mt-3 hidden ${opp.subtle} md:block lg:hidden`}>
        Tap a row — the preview above updates to match.
      </p>
      <p className={`mt-3 hidden ${opp.subtle} lg:block`}>Hover a row — icons and the skill preview update to match.</p>

      <CareerPacketInteractiveSection
        tabletPanel={
          panelProps ? <CareerPacketIllustrationPanel {...panelProps} density="compact" /> : null
        }
        desktopPanel={panelProps ? <CareerPacketIllustrationPanel {...panelProps} /> : null}
      >
        <div className={cn(opp.tableWrap, accent.mediaBorder)}>
          <ul className={opp.divide} role="list">
            {careerPacketFitRows.map((row) => {
              const active = row.id === activeId;
              return (
                <li key={row.id}>
                  <button
                    type="button"
                    className={cn(
                      'group w-full min-h-[44px] border-l-2 border-transparent px-3 py-3.5 text-left transition duration-300 sm:px-4',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
                      active
                        ? cn(accent.paragraphActiveBg, accent.paragraphActiveBorder)
                        : 'hover:bg-stone-50/90 dark:hover:bg-stone-800/80',
                    )}
                    aria-current={active ? 'true' : undefined}
                    aria-expanded={active ? true : undefined}
                    onMouseEnter={() => setActiveId(row.id)}
                    onFocus={() => setActiveId(row.id)}
                    onClick={() => setActiveId(row.id)}
                  >
                    <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-start sm:gap-4">
                      <div className="w-full max-w-[7.5rem] shrink-0 sm:w-[7.5rem]">
                        <CareerPacketTechLogoStrip logoIds={row.techLogoIds} accent={accent} active={active} />
                      </div>
                      <div className="min-w-0">
                        <p className={opp.matrixPrimary}>{row.primary}</p>
                        <p className={cn(opp.matrixSecondary, 'mt-1')}>{row.secondary}</p>
                      </div>
                    </div>
                  </button>
                  {active ? (
                    <div className="border-t border-stone-100 px-3 py-3 dark:border-stone-800 md:hidden">
                      <CareerPacketIllustrationPanel
                        panelKey={row.id}
                        title={row.primary}
                        caption={row.secondary}
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
    </>
  );
}
