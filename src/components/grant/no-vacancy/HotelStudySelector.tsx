'use client';

import { useState } from 'react';
import type { NvHotelAdaptation } from '@/content/grants/no-vacancy-2026/volver-a-valer';
import { toGrantMedia } from '@/content/grants/no-vacancy-2026/volver-a-valer-media';
import { NvPlaceholderFigure } from '@/components/grant/no-vacancy/NoVacancyUi';
import { GrantPanoramaViewer } from '@/components/grant/shared/GrantPanoramaViewer';

export function HotelStudySelector({ studies }: { studies: NvHotelAdaptation[] }) {
  const [activeId, setActiveId] = useState(studies[0]?.id ?? '');
  const active = studies.find((s) => s.id === activeId) ?? studies[0];

  if (!active) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Hotel site studies">
        {studies.map((study) => {
          const selected = study.id === active.id;
          return (
            <button
              key={study.id}
              type="button"
              role="tab"
              id={`hotel-tab-${study.id}`}
              aria-selected={selected}
              aria-controls={`hotel-panel-${study.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(study.id)}
              className={`min-h-11 px-4 py-2 text-sm font-medium border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-800 ${
                selected
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                  : 'border-stone-300 text-stone-700 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300'
              }`}
            >
              {study.hotelName}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`hotel-panel-${active.id}`}
        aria-labelledby={`hotel-tab-${active.id}`}
        className="space-y-8"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">{active.strategicRole}</p>
          <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">{active.hotelName}</h3>
          <p className="text-sm text-stone-500 mt-1">{active.locationType}</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-stone-600 dark:text-stone-400">
            Configuration: {active.configuration === 'large' ? 'Large (includes optional Carry-On)' : 'Compact (floor + two cores)'}
          </p>
          <p className="mt-4 text-stone-700 dark:text-stone-300 leading-relaxed">{active.whyThisLocation}</p>
          <p className="mt-3 text-xs text-stone-500">
            Site-adaptation study based on recurring No Vacancy hotel typologies — not a claim that this
            property is confirmed for 2026.
          </p>
        </div>

        <GrantPanoramaViewer
          label={active.panorama.label}
          alt={active.panorama.alt}
          caption={active.panorama.caption}
          posterSrc={active.poster.src}
          panoramaSrc={active.panorama.src}
          placeholder={active.panorama.placeholder || !active.panorama.src}
        />

        <NvPlaceholderFigure media={toGrantMedia(active.proposedRender)} />
        <div className="grid sm:grid-cols-2 gap-8">
          <NvPlaceholderFigure media={toGrantMedia(active.floorDetail)} aspectClass="aspect-[4/3]" />
          <NvPlaceholderFigure media={toGrantMedia(active.sculptureDetail)} aspectClass="aspect-[4/3]" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100 mb-2">
              Installation elements
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400">
              {active.installationElements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-stone-500">{active.dimensionsNote}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100 mb-2">
              Advantages
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 mb-4">
              {active.siteAdvantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100 mb-2">
              Constraints
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400">
              {active.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100 mb-2">
            Adaptation notes
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400">
            {active.adaptationNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
