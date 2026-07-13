'use client';

import { useState } from 'react';
import type { NvHotelStudy } from '@/content/grants/no-vacancy-2026/volver-a-valer';
import { NvPlaceholderFigure } from '@/components/grant/no-vacancy/NoVacancyUi';

export function HotelStudySelector({ studies }: { studies: NvHotelStudy[] }) {
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
              aria-selected={selected}
              onClick={() => setActiveId(study.id)}
              className={`min-h-11 px-4 py-2 text-sm font-medium border transition-colors ${
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

      <div role="tabpanel" className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">{active.strategicRole}</p>
          <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">{active.hotelName}</h3>
          <p className="text-sm text-stone-500 mt-1">{active.locationType}</p>
          <p className="mt-4 text-stone-700 dark:text-stone-300 leading-relaxed">
            {active.whyThisLocation}
          </p>
          <p className="mt-3 text-xs text-stone-500">
            Site-adaptation study based on recurring No Vacancy venues — not a claim that this property is
            confirmed for 2026.
          </p>
        </div>

        <NvPlaceholderFigure media={active.beforeImage} />
        <NvPlaceholderFigure media={active.establishingView} />
        <NvPlaceholderFigure media={active.visitorExperience} />
        <NvPlaceholderFigure media={active.materialDetail} />

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
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100 mb-2">
              Why this location
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
