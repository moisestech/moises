import type { InferenceScore, ApertureState } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';

const STATES: ApertureState[] = ['sealed', 'listening', 'attentive', 'exposed', 'unresolved'];

/** Deterministic 32-bit hash — same sentence always yields same aperture body. */
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

export function pickApertureState(
  h: number,
  scores: Omit<InferenceScore, 'state' | 'mode' | 'model' | 'latencyMs'>,
): ApertureState {
  if (scores.unresolved > 0.72) return 'unresolved';
  if (scores.ambiguity > 0.68 && scores.certainty < 0.4) return 'unresolved';
  if (scores.retention > 0.7 && scores.certainty > 0.6) return 'exposed';
  if (scores.transformation > 0.65) return 'attentive';
  if (scores.certainty > 0.55 && scores.ambiguity < 0.35) return 'listening';
  if (scores.retention < 0.25 && scores.transformation < 0.25) return 'sealed';
  return STATES[h % STATES.length];
}

export function scoreSentenceMock(text: string): InferenceScore {
  const trimmed = text.trim();
  const h = hashSentence(trimmed || 'empty');
  const retention = clamp01(unit(h, 1));
  const transformation = clamp01(unit(h, 2));
  const ambiguity = clamp01(unit(h, 3));
  const certainty = clamp01(unit(h, 4));
  const unresolved = clamp01(unit(h, 5));
  const base = { retention, transformation, ambiguity, certainty, unresolved };
  return {
    ...base,
    state: pickApertureState(h, base),
    mode: 'mock',
    model: 'deterministic-hash-v2',
    latencyMs: 0,
  };
}

export function normalizeInferenceScore(
  raw: Partial<InferenceScore> & { state?: string },
  mode: 'mock' | 'modal',
): InferenceScore {
  const retention = clamp01(Number(raw.retention ?? 0.5));
  const transformation = clamp01(Number(raw.transformation ?? 0.5));
  const ambiguity = clamp01(Number(raw.ambiguity ?? 0.5));
  const certainty = clamp01(Number(raw.certainty ?? 0.5));
  const unresolved = clamp01(Number(raw.unresolved ?? 0.5));
  const base = { retention, transformation, ambiguity, certainty, unresolved };
  const stateCandidate = raw.state as ApertureState | undefined;
  const state =
    stateCandidate && STATES.includes(stateCandidate)
      ? stateCandidate
      : pickApertureState(hashSentence(JSON.stringify(base)), base);

  return {
    ...base,
    state,
    mode,
    model: raw.model,
    latencyMs: raw.latencyMs,
  };
}

/** @deprecated Use normalizeInferenceScore */
export const normalizeBodyScore = normalizeInferenceScore;

export const MAX_SENTENCE_LENGTH = 500;
export const MIN_SENTENCE_LENGTH = 1;
