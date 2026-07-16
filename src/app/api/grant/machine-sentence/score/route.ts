import { NextResponse } from 'next/server';
import type { InferenceScore } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';
import {
  MAX_SENTENCE_LENGTH,
  MIN_SENTENCE_LENGTH,
  normalizeInferenceScore,
  scoreSentenceMock,
} from '@/lib/grant/machine-sentence-score';

export const runtime = 'nodejs';

/**
 * POST { text: string }
 * Returns BodyScore. Never returns motor commands.
 * Uses Modal when MODAL_INFERENCE_URL (+ optional MODAL_INFERENCE_TOKEN) is set;
 * otherwise deterministic mock.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const text = typeof body === 'object' && body && 'text' in body ? String((body as { text: unknown }).text) : '';
  const trimmed = text.trim();

  if (trimmed.length < MIN_SENTENCE_LENGTH) {
    return NextResponse.json({ error: 'Empty input rejected' }, { status: 400 });
  }
  if (trimmed.length > MAX_SENTENCE_LENGTH) {
    return NextResponse.json({ error: `Input exceeds ${MAX_SENTENCE_LENGTH} characters` }, { status: 400 });
  }

  const modalUrl = process.env.MODAL_INFERENCE_URL;
  const modalToken = process.env.MODAL_INFERENCE_TOKEN;

  if (modalUrl) {
    const started = Date.now();
    try {
      const res = await fetch(modalUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(modalToken ? { Authorization: `Bearer ${modalToken}` } : {}),
        },
        body: JSON.stringify({ text: trimmed }),
      });
      if (!res.ok) {
        const fallback = scoreSentenceMock(trimmed);
        return NextResponse.json({
          ...fallback,
          mode: 'mock',
          model: `modal-fallback-http-${res.status}`,
          latencyMs: Date.now() - started,
        } satisfies InferenceScore);
      }
      const data = (await res.json()) as Partial<InferenceScore>;
      // Strip any illegal fields if present
      const { ...safe } = data as Record<string, unknown>;
      delete safe.motorCommands;
      delete safe.motors;
      delete safe.axes;
      const normalized = normalizeInferenceScore(safe as Partial<InferenceScore>, 'modal');
      return NextResponse.json({
        ...normalized,
        latencyMs: normalized.latencyMs ?? Date.now() - started,
      } satisfies InferenceScore);
    } catch {
      const fallback = scoreSentenceMock(trimmed);
      return NextResponse.json({
        ...fallback,
        mode: 'mock',
        model: 'modal-fallback-network',
        latencyMs: Date.now() - started,
      } satisfies InferenceScore);
    }
  }

  return NextResponse.json(scoreSentenceMock(trimmed) satisfies InferenceScore);
}
