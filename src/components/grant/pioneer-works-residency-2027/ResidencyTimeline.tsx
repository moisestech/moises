'use client';

import { useState } from 'react';
import { residencyTimelineMonths } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function ResidencyTimeline() {
  const [activeId, setActiveId] = useState<(typeof residencyTimelineMonths)[number]['id']>(
    residencyTimelineMonths[0].id,
  );
  const active = residencyTimelineMonths.find((m) => m.id === activeId) ?? residencyTimelineMonths[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {residencyTimelineMonths.map((month) => {
          const selected = month.id === activeId;
          return (
            <button
              key={month.id}
              type="button"
              onClick={() => setActiveId(month.id)}
              className={`min-h-11 px-3 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 ${
                selected
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900'
                  : 'border-stone-400 text-stone-700 dark:border-stone-600 dark:text-stone-300 hover:border-stone-800'
              }`}
            >
              {month.month}
            </button>
          );
        })}
      </div>
      <div className="border border-[#c4beb4] dark:border-stone-700 p-5 sm:p-6 bg-white/50 dark:bg-black/20">
        <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">{active.month}</p>
        <h3 className="text-2xl font-semibold tracking-tight mb-4">{active.title}</h3>
        <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
          {active.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="overflow-x-auto">
        <div className="flex min-w-[36rem] gap-0 border border-stone-300 dark:border-stone-700">
          {residencyTimelineMonths.map((month, i) => (
            <div
              key={month.id}
              className={`flex-1 px-2 py-3 text-center border-r border-stone-300 dark:border-stone-700 last:border-r-0 ${
                month.id === activeId ? 'bg-[#a3be8c]/25' : 'bg-transparent'
              }`}
            >
              <p className="text-[10px] uppercase tracking-wide text-stone-500">{i + 1}</p>
              <p className="text-xs font-semibold mt-1">{month.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-stone-500">
          Five-month evolution strip — studio as evolving installation, not a hidden production room.
        </p>
      </div>
    </div>
  );
}
