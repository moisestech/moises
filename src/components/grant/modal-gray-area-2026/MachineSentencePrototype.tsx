'use client';

import { useEffect, useState, useTransition } from 'react';
import type { BodyScore } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';
import { machineSentenceSuggestedInput } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';
import { scoreSentenceMock } from '@/lib/grant/machine-sentence-score';
import { LatentMonumentFigure } from './LatentMonumentFigure';
import { MutationReadout } from './MutationReadout';

type Phase = 'idle' | 'reflex' | 'metabolization' | 'rest';
type Mode = 'mock' | 'live';

const INITIAL = scoreSentenceMock(machineSentenceSuggestedInput);

export function MachineSentencePrototype() {
  const [text, setText] = useState(machineSentenceSuggestedInput);
  const [mode, setMode] = useState<Mode>('mock');
  const [score, setScore] = useState<BodyScore>(INITIAL);
  const [phase, setPhase] = useState<Phase>('idle');
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (phase === 'idle' || phase === 'rest') return;
    const ms = phase === 'reflex' ? 900 : 2800;
    const next: Phase = phase === 'reflex' ? 'metabolization' : 'rest';
    const t = window.setTimeout(() => setPhase(next), ms);
    return () => window.clearTimeout(t);
  }, [phase]);

  function runScore() {
    setError(null);
    startTransition(async () => {
      try {
        let next: BodyScore;
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
          next = (await res.json()) as BodyScore;
        }
        setScore(next);
        setPhase('reflex');
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Scoring failed');
        setScore(scoreSentenceMock(text));
        setPhase('reflex');
      }
    });
  }

  return (
    <div className="border border-neutral-800 bg-neutral-950 text-stone-100 overflow-hidden">
      <div className="px-4 sm:px-5 py-4 border-b border-neutral-800 flex flex-wrap gap-3 items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400">Interactive prototype</p>
          <p className="text-sm text-neutral-300 mt-1">Digital movement study. Physical sculpture proposed.</p>
        </div>
        <div className="flex gap-2 text-xs">
          {(['mock', 'live'] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 border uppercase tracking-wide ${
                mode === m
                  ? 'border-[#a3be8c] text-[#a3be8c]'
                  : 'border-neutral-600 text-neutral-400 hover:border-neutral-400'
              }`}
            >
              {m === 'mock' ? 'Mock' : 'API / Modal'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-neutral-800">
          <LatentMonumentFigure score={score} phase={phase} />
          <p className="mt-3 text-[11px] text-neutral-500 leading-relaxed">
            Web timings are accelerated. Exhibition intent: Reflex 1–3s · Metabolization 20–45s · Rest 30–90s.
            The model does not understand emotion, consciousness, or true intent.
          </p>
        </div>
        <div className="p-4 sm:p-5 space-y-4">
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-neutral-400">Offer the sculpture a sentence.</span>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              maxLength={500}
              className="mt-2 w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-[#a3be8c]"
            />
          </label>
          <button
            type="button"
            onClick={runScore}
            disabled={pending || !text.trim()}
            className="w-full min-h-11 bg-[#a3be8c] text-neutral-950 font-semibold text-sm hover:bg-[#b5cda0] disabled:opacity-50"
          >
            {pending ? 'Interpreting…' : phase === 'idle' ? 'Submit sentence' : 'Offer another sentence'}
          </button>
          {error ? <p className="text-sm text-amber-300">{error} — fell back to mock.</p> : null}
          <p className="text-xs text-neutral-500 capitalize">
            Phase: {phase}
            {phase === 'rest' ? ' — examine the resulting body' : ''}
          </p>
          <MutationReadout score={score} />
        </div>
      </div>
    </div>
  );
}
