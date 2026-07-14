import type { BodyScore, MachineSentenceState } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

const STATES: MachineSentenceState[] = [
  'column',
  'sentence',
  'aperture',
  'witness',
  'refusal',
  'compression',
  'chorus',
  'fault_line',
];

/** Deterministic 32-bit hash — same sentence always yields same body. */
export function hashSentence(text: string): number {
  const normalized = text.trim().toLowerCase().replace(/\s+/g, ' ');
  let h = 2166136261;
  for (let i = 0; i < normalized.length; i++) {
    h ^= normalized.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function unit(n: number, salt: number): number {
  const x = ((n ^ salt) * 2654435761) >>> 0;
  return (x % 1000) / 1000;
}

export function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

export function pickState(h: number, scores: Omit<BodyScore, 'state' | 'mode' | 'model' | 'latencyMs'>): MachineSentenceState {
  if (scores.contradiction > 0.72) return 'chorus';
  if (scores.attention > 0.7 && scores.openness > 0.55) return 'witness';
  if (scores.openness > 0.68) return 'aperture';
  if (scores.compression > 0.65) return 'compression';
  if (scores.coherence < 0.35) return 'fault_line';
  if (scores.attention < 0.3) return 'refusal';
  if (scores.coherence > 0.7 && scores.openness < 0.4) return 'column';
  if (scores.openness > 0.45) return 'sentence';
  return STATES[h % STATES.length];
}

export function scoreSentenceMock(text: string): BodyScore {
  const trimmed = text.trim();
  const h = hashSentence(trimmed || 'empty');
  const openness = clamp01(unit(h, 1));
  const coherence = clamp01(unit(h, 2));
  const attention = clamp01(unit(h, 3));
  const contradiction = clamp01(unit(h, 4));
  const compression = clamp01(unit(h, 5));
  const organicMachine = clamp01(unit(h, 6));
  const base = { openness, coherence, attention, contradiction, compression, organicMachine };
  return {
    ...base,
    state: pickState(h, base),
    mode: 'mock',
    model: 'deterministic-hash-v1',
    latencyMs: 0,
  };
}

export function normalizeBodyScore(raw: Partial<BodyScore> & { state?: string }, mode: 'mock' | 'modal'): BodyScore {
  const openness = clamp01(Number(raw.openness ?? 0.5));
  const coherence = clamp01(Number(raw.coherence ?? 0.5));
  const attention = clamp01(Number(raw.attention ?? 0.5));
  const contradiction = clamp01(Number(raw.contradiction ?? 0.5));
  const compression = clamp01(Number(raw.compression ?? 0.5));
  const organicMachine = clamp01(Number(raw.organicMachine ?? 0.5));
  const base = { openness, coherence, attention, contradiction, compression, organicMachine };
  const stateCandidate = raw.state as MachineSentenceState | undefined;
  const state =
    stateCandidate && STATES.includes(stateCandidate)
      ? stateCandidate
      : pickState(hashSentence(JSON.stringify(base)), base);

  return {
    ...base,
    state,
    mode,
    model: raw.model,
    latencyMs: raw.latencyMs,
  };
}

export const MAX_SENTENCE_LENGTH = 500;
export const MIN_SENTENCE_LENGTH = 1;
