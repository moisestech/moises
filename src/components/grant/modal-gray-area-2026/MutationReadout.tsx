'use client';

import type { BodyScore } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

const FIELDS: { key: keyof BodyScore; label: string }[] = [
  { key: 'openness', label: 'Openness' },
  { key: 'coherence', label: 'Coherence' },
  { key: 'attention', label: 'Attention' },
  { key: 'contradiction', label: 'Contradiction' },
  { key: 'compression', label: 'Compression' },
  { key: 'organicMachine', label: 'Organic / machine' },
];

export function MutationReadout({ score }: { score: BodyScore }) {
  return (
    <div className="border border-neutral-700 bg-neutral-950 text-stone-100 p-4 sm:p-5">
      <div className="flex flex-wrap justify-between gap-2 mb-4 text-xs uppercase tracking-widest text-neutral-400">
        <span>Body score</span>
        <span>
          {score.mode}
          {score.model ? ` · ${score.model}` : ''}
          {typeof score.latencyMs === 'number' ? ` · ${score.latencyMs}ms` : ''}
        </span>
      </div>
      <p className="text-lg font-semibold mb-4 capitalize text-[#a3be8c]">{score.state.replace('_', ' ')}</p>
      <ul className="space-y-3">
        {FIELDS.map(({ key, label }) => {
          const value = Number(score[key]);
          return (
            <li key={key}>
              <div className="flex justify-between text-xs mb-1 text-neutral-300">
                <span>{label}</span>
                <span className="tabular-nums">{value.toFixed(2)}</span>
              </div>
              <div className="h-1.5 bg-neutral-800 overflow-hidden">
                <div className="h-full bg-[#a3be8c]/80" style={{ width: `${value * 100}%` }} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
