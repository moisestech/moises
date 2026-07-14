'use client';

import { useState } from 'react';
import type { ContextStudy } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';
import { GrantPlaceholderFigure } from '@/components/grant/shared/GrantProposalUi';

export function ContextStudySelector({ studies }: { studies: ContextStudy[] }) {
  const [activeId, setActiveId] = useState(studies[0]?.id ?? '');
  const active = studies.find((s) => s.id === activeId) ?? studies[0];
  if (!active) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Context studies">
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
              {study.title}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">{active.strategicRole}</p>
          <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">{active.title}</h3>
          <p className="mt-3 text-stone-700 dark:text-stone-300 leading-relaxed">{active.description}</p>
          <p className="mt-3 text-xs text-stone-500">
            Conceptual context study — labeled placeholders, not installation documentation.
          </p>
        </div>
        <GrantPlaceholderFigure media={active.establishing} />
        <GrantPlaceholderFigure media={active.visitorOrSecondary} />
        <GrantPlaceholderFigure media={active.detail} />
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400">
          {active.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
