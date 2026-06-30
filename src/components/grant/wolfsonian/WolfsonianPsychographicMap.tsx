'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  wolfsonianObjectTypologies,
  wolfsonianPsychographicDisclaimer,
  wolfsonianPsychographicPressures,
} from '@/content/grants/wolfsonian-fellowship';
import { getWolfsonianAccent } from '@/config/wolfsonian-section-theme';

type PsychographicMapProps = {
  variant: 'typology' | 'pressures';
  onPressureActivate?: (word: string | null) => void;
};

export function WolfsonianPsychographicMap({ variant, onPressureActivate }: PsychographicMapProps) {
  if (variant === 'typology') {
    return <ObjectTypologyMap />;
  }
  return <PressureMap onPressureActivate={onPressureActivate} />;
}

function ObjectTypologyMap() {
  const accent = getWolfsonianAccent('why-wolfsonian');
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const active = wolfsonianObjectTypologies.find((item) => item.label === activeLabel);

  return (
    <div className={cn('border bg-white p-4 dark:bg-neutral-900', accent.mediaBorder)}>
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>Collection typologies</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {wolfsonianObjectTypologies.map((item) => (
          <button
            key={item.label}
            type="button"
            className={cn(
              'border px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
              activeLabel === item.label ? accent.chipActive : cn(accent.chipIdle, 'hover:border-stone-500'),
            )}
            onMouseEnter={() => setActiveLabel(item.label)}
            onFocus={() => setActiveLabel(item.label)}
            onClick={() => setActiveLabel(item.label)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {active ? (
        <p className="mt-4 text-sm text-stone-700 dark:text-stone-300">
          Activates designed pressure:{' '}
          <strong className={cn('font-semibold', accent.keywordActive)}>{active.keyword}</strong>
        </p>
      ) : (
        <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
          Hover an object type to reveal its ideological keyword.
        </p>
      )}
    </div>
  );
}

function PressureMap({ onPressureActivate }: { onPressureActivate?: (word: string | null) => void }) {
  const accent = getWolfsonianAccent('designed-belief');
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const active = wolfsonianPsychographicPressures.find((item) => item.word === activeWord);

  const activate = (word: string | null) => {
    setActiveWord(word);
    onPressureActivate?.(word);
  };

  return (
    <div className={cn('border bg-white p-4 dark:bg-neutral-900', accent.mediaBorder)}>
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>Emotional pressures</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {wolfsonianPsychographicPressures.map((item) => {
          const pressureClass = accent.pressureColorMap?.[item.word];
          return (
            <button
              key={item.word}
              type="button"
              className={cn(
                'border px-3 py-1.5 text-sm capitalize transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                activeWord === item.word
                  ? pressureClass ?? accent.chipActive
                  : cn(accent.chipIdle, 'hover:border-stone-500'),
              )}
              onMouseEnter={() => activate(item.word)}
              onFocus={() => activate(item.word)}
              onClick={() => activate(item.word)}
            >
              {item.word}
            </button>
          );
        })}
      </div>
      {active ? (
        <div className="mt-4 space-y-3">
          <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{active.description}</p>
          <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
            {active.objectCategories.map((category) => (
              <li key={category} className="flex items-start gap-2">
                <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', accent.progressDot)} aria-hidden="true" />
                {category}
              </li>
            ))}
          </ul>
          {active.relatedAgents?.length ? (
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Related agents: {active.relatedAgents.join(', ')}
            </p>
          ) : null}
        </div>
      ) : (
        <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
          Hover a pressure word to see its description and connected object categories.
        </p>
      )}
      <p className={cn('mt-4 border-l-2 pl-3 text-xs italic', accent.paragraphActiveBorder, 'text-stone-600 dark:text-stone-400')}>
        {wolfsonianPsychographicDisclaimer}
      </p>
    </div>
  );
}
