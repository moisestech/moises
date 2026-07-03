'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';
import { careerPacketFitRows } from '@/content/ai-engineering/career-packet-visuals';
import { CareerPacketIllustrationPanel, CareerPacketTechLogoStrip } from './CareerPacketSkillPanels';

type CareerPacketFitSectionProps = {
  title: string;
  intro: string;
  accent: CareerPacketSectionAccent;
};

export function CareerPacketFitSection({ title, intro, accent }: CareerPacketFitSectionProps) {
  const [activeId, setActiveId] = useState(careerPacketFitRows[0]?.id ?? '');
  const activeRow = careerPacketFitRows.find((row) => row.id === activeId) ?? careerPacketFitRows[0];

  return (
    <>
      <h2 className={opp.h2}>{title}</h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p>
      <p className={`mt-3 ${opp.subtle} lg:hidden`}>Tap a row to preview stack icons and skill art.</p>
      <p className={`mt-3 hidden ${opp.subtle} lg:block`}>Hover a row — icons and the skill preview update to match.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-start">
        <div className={cn(opp.tableWrap, accent.mediaBorder)}>
          <ul className={opp.divide} role="list">
            {careerPacketFitRows.map((row) => {
              const active = row.id === activeId;
              return (
                <li key={row.id}>
                  <button
                    type="button"
                    className={cn(
                      'group w-full border-l-2 border-transparent px-3 py-3 text-left transition duration-300 sm:px-4',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
                      active
                        ? cn(accent.paragraphActiveBg, accent.paragraphActiveBorder)
                        : 'hover:bg-stone-50/90 dark:hover:bg-stone-800/80',
                    )}
                    aria-current={active ? 'true' : undefined}
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
                </li>
              );
            })}
          </ul>
        </div>

        {activeRow ? (
          <CareerPacketIllustrationPanel
            panelKey={activeRow.id}
            title={activeRow.primary}
            caption={activeRow.secondary}
            logoIds={activeRow.techLogoIds}
            illustration={activeRow.illustration}
            accent={accent}
            orientation="portrait"
          />
        ) : null}
      </div>
    </>
  );
}
