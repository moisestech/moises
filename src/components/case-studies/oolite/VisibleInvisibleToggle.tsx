'use client';

import { useState } from 'react';
import { AssetNeeded } from './AssetNeeded';
import { OOLITE_ARTS_CASE_STUDY } from '@/content/oolite-arts/case-study';

const data = OOLITE_ARTS_CASE_STUDY.visibleInvisible;

export function VisibleInvisibleToggle({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const [mode, setMode] = useState<'visible' | 'invisible'>('visible');
  const items = mode === 'visible' ? data.visible : data.invisible;
  const isDark = tone === 'dark';

  return (
    <div>
      <div
        className={`inline-flex border p-1 mb-8 ${isDark ? 'border-white/30' : 'border-black/20'}`}
        role="group"
        aria-label="Visible or invisible infrastructure"
      >
        {(
          [
            ['visible', 'What visitors saw'],
            ['invisible', 'What made it possible'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={mode === key}
            onClick={() => setMode(key)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isDark
                ? 'focus-visible:outline-white'
                : 'focus-visible:outline-black'
            } ${
              mode === key
                ? key === 'invisible'
                  ? 'bg-[#E10600] text-white'
                  : isDark
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                : isDark
                  ? 'bg-transparent text-white/80 hover:bg-white/10'
                  : 'bg-transparent text-neutral-700 hover:bg-black/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {items.map((item) => (
          <li
            key={item}
            className={`border px-4 py-5 min-h-[5.5rem] flex items-end ${
              mode === 'invisible'
                ? isDark
                  ? 'border-[#E10600]/50 bg-[#E10600]/15'
                  : 'border-[#E10600]/40 bg-[#E10600]/5'
                : isDark
                  ? 'border-white/20 bg-white/5'
                  : 'border-black/15 bg-white'
            }`}
          >
            <span className="font-['MoMA_Sans'] text-lg sm:text-xl font-bold leading-tight">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <AssetNeeded asset={data.neededDocs} tone={tone} />
    </div>
  );
}

