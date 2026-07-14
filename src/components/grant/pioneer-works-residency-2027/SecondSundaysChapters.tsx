'use client';

import { useState } from 'react';
import { secondSundaysChapters } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function SecondSundaysChapters() {
  const [activeId, setActiveId] = useState<(typeof secondSundaysChapters)[number]['id']>(
    secondSundaysChapters[0].id,
  );
  const active = secondSundaysChapters.find((c) => c.id === activeId) ?? secondSundaysChapters[0];

  return (
    <div className="space-y-6">
      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
        Each open studio is framed as a monthly chapter. Public feedback changes rules and
        constraints — not simply the appearance of generative output.
      </p>
      <div
        className="flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Second Sundays chapters"
      >
        {secondSundaysChapters.map((chapter) => {
          const selected = chapter.id === activeId;
          return (
            <button
              key={chapter.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(chapter.id)}
              className={`min-h-11 shrink-0 px-3 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
                selected
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900'
                  : 'border-stone-400 text-stone-700 dark:border-stone-600 dark:text-stone-300'
              }`}
            >
              {chapter.number} {chapter.title}
            </button>
          );
        })}
      </div>
      <div className="border-l-2 border-[#8b3a2a] pl-4 sm:pl-6" role="tabpanel">
        <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Chapter {active.number}</p>
        <h3 className="text-xl font-semibold mb-3">{active.title}</h3>
        <p className="text-stone-700 dark:text-stone-300 leading-relaxed">{active.body}</p>
      </div>
    </div>
  );
}
