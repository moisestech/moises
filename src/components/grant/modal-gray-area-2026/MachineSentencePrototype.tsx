'use client';

import { useEffect, useState, useTransition } from 'react';
import type { InferenceScore } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';
import { incompleteContainmentSuggestedInput } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';
import { scoreSentenceMock } from '@/lib/grant/machine-sentence-score';
import { ListeningStructureFigure } from './ListeningStructureFigure';
import { MutationReadout } from './MutationReadout';

type Phase = 'idle' | 'acknowledgment' | 'interpretation' | 'rest';
type Mode = 'mock' | 'live';

const EXAMPLES = [
  'I want this to be remembered, not explained.',
  'Say it back without pretending you understood.',
  'Some sentences shrink when a machine hears them.',
] as const;

const INITIAL = scoreSentenceMock(incompleteContainmentSuggestedInput);

export function MachineSentencePrototype() {
  const [text, setText] = useState(incompleteContainmentSuggestedInput);
  const [mode, setMode] = useState<Mode>('mock');
  const [score, setScore] = useState<InferenceScore>(INITIAL);
  const [phase, setPhase] = useState<Phase>('idle');
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (phase === 'idle' || phase === 'rest') return;
    const ms = phase === 'acknowledgment' ? 700 : 2200;
    const next: Phase = phase === 'acknowledgment' ? 'interpretation' : 'rest';
    const t = window.setTimeout(() => setPhase(next), ms);
    return () => window.clearTimeout(t);
  }, [phase]);

  function runScore() {
    setError(null);
    startTransition(async () => {
      try {
        let next: InferenceScore;
        if (mode === 'mock') {
          next = scoreSentenceMock(text);
        } else {
          const res = await fetch('/api/grant/machine-sentence/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
          });
          if (!res.ok) {
            const data = (await res.json().catch(() => null)) as { error?: string } | null;
            throw new Error(data?.error ?? `Request failed (${res.status})`);
          }
          next = (await res.json()) as InferenceScore;
        }
        setScore(next);
        setPhase('acknowledgment');
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Scoring failed');
        setScore(scoreSentenceMock(text));
        setPhase('acknowledgment');
      }
    });
  }

  return (
    <div className="border border-neutral-800 bg-neutral-950 text-stone-100 overflow-hidden">
      <div className="px-4 sm:px-5 py-4 border-b border-neutral-800">
        <p className="text-xs uppercase tracking-widest text-neutral-400">Live inference prototype</p>
        <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
          Digital study mapping one sentence into constrained inference values and an authored aperture state. Not
          completed physical hardware.
        </p>
      </div>

      <div className="p-4 sm:p-6 flex flex-col items-center">
        <div className="w-full max-w-lg min-h-[360px] sm:min-h-[420px] flex items-center">
          <ListeningStructureFigure score={score} phase={phase} className="w-full" />
        </div>
        <p className="mt-3 text-[11px] text-neutral-500 text-center max-w-md leading-relaxed">
          Exhibition timing: acknowledgment before inference completes · interpretation maps values · rest holds
          aperture. The model does not diagnose, score, or advise.
        </p>
      </div>

      <div className="px-4 sm:px-5 pb-5 space-y-4 border-t border-neutral-800 pt-5">
        <div className="flex flex-wrap gap-2 text-xs">
          {(['mock', 'live'] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 border uppercase tracking-wide min-h-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3be8c] ${
                mode === m
                  ? 'border-[#a3be8c] text-[#a3be8c]'
                  : 'border-neutral-600 text-neutral-400 hover:border-neutral-400'
              }`}
            >
              {m === 'mock' ? 'Mock' : 'API / Modal'}
            </button>
          ))}
          <span className="text-neutral-500 self-center capitalize ml-auto">Phase: {phase}</span>
        </div>

        <label className="block">
          <span className="text-xs uppercase tracking-widest text-neutral-400">
            Offer one sentence you want heard, not answered.
          </span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={2}
            maxLength={500}
            className="mt-2 w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-[#a3be8c]"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setText(ex)}
              className="text-[11px] text-left text-neutral-400 border border-neutral-700 px-2 py-1.5 hover:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3be8c]"
            >
              {ex}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={runScore}
          disabled={pending || !text.trim()}
          className="w-full min-h-11 bg-[#a3be8c] text-neutral-950 font-semibold text-sm hover:bg-[#b5cda0] disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3be8c]"
        >
          {pending ? 'Interpreting…' : 'Map testimony to aperture'}
        </button>

        {error ? (
          <p className="text-sm text-amber-300" role="status">
            {error} — fell back to mock.
          </p>
        ) : null}

        <MutationReadout score={score} />
      </div>
    </div>
  );
}
