'use client';

import { useState } from 'react';
import type { InferenceScore } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';

const FIELDS: { key: keyof InferenceScore; label: string }[] = [
  { key: 'retention', label: 'Retention' },
  { key: 'transformation', label: 'Transformation' },
  { key: 'ambiguity', label: 'Ambiguity' },
  { key: 'certainty', label: 'Certainty' },
  { key: 'unresolved', label: 'Unresolved' },
];

export function MutationReadout({ score }: { score: InferenceScore }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-700 bg-neutral-950 text-stone-100">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3be8c]"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest text-neutral-400">Inference values</span>
        <span className="text-sm font-medium capitalize text-[#a3be8c]">{score.state}</span>
        <span className="text-neutral-500 text-sm" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <div className="px-4 pb-4 border-t border-neutral-800 pt-3">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
            {score.mode}
            {score.model ? ` · ${score.model}` : ''}
            {typeof score.latencyMs === 'number' ? ` · ${score.latencyMs}ms` : ''}
          </p>
          <ul className="space-y-3">
            {FIELDS.map(({ key, label }) => {
              const value = Number(score[key]);
              if (Number.isNaN(value)) return null;
              return (
                <li key={key}>
                  <div className="flex justify-between text-xs mb-1 text-neutral-300">
                    <span>{label}</span>
                    <span className="tabular-nums font-mono">{value.toFixed(2)}</span>
                  </div>
                  <div className="h-1 bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-[#a3be8c]/80" style={{ width: `${value * 100}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
