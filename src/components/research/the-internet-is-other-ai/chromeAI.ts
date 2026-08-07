import type { BrowserAiCapability } from '@/content/research/the-internet-is-other-ai/types';

type PromptApiLike = {
  languageModel?: {
    availability?: () => Promise<string>;
  };
};

function getPromptApi(): PromptApiLike['languageModel'] | null {
  if (typeof window === 'undefined') return null;
  const ai = (window as Window & { ai?: PromptApiLike }).ai;
  return ai?.languageModel ?? null;
}

/**
 * Feature detection only. Never silently falls back to a cloud model.
 * Browser-resident inference activates only after deliberate user action.
 */
export async function detectBrowserAi(): Promise<BrowserAiCapability> {
  try {
    const languageModel = getPromptApi();
    if (!languageModel?.availability) {
      return {
        promptApi: false,
        webMcp: false,
        label: 'DETERMINISTIC SIMULATION',
      };
    }

    const availability = await languageModel.availability();
    const promptApi =
      availability === 'available' || availability === 'readily';

    // WebMCP detection remains soft until the API stabilizes.
    const chromeApi = (window as Window & { chrome?: Record<string, unknown> })
      .chrome;
    const webMcp = Boolean(
      chromeApi &&
        typeof chromeApi === 'object' &&
        'modelContext' in chromeApi,
    );

    return {
      promptApi,
      webMcp,
      label: promptApi ? 'LOCAL AI AVAILABLE' : 'DETERMINISTIC SIMULATION',
    };
  } catch {
    return {
      promptApi: false,
      webMcp: false,
      label: 'DETERMINISTIC SIMULATION',
    };
  }
}

export type BrowserAiSessionResult = {
  ok: boolean;
  text?: string;
  error?: string;
};

/**
 * Optional enhancement stub. Validates structured-ish output before use.
 * Callers must keep deterministic dialogue as the baseline.
 */
export async function optionalLocalPrompt(
  prompt: string,
): Promise<BrowserAiSessionResult> {
  try {
    const languageModel = getPromptApi();
    if (!languageModel) {
      return { ok: false, error: 'Prompt API unavailable' };
    }

    // Soft optional path: if create/prompt exist, use them; otherwise bail.
    const maybeCreate = (
      languageModel as {
        create?: () => Promise<{ prompt: (input: string) => Promise<string> }>;
      }
    ).create;

    if (!maybeCreate) {
      return { ok: false, error: 'Prompt API create() unavailable' };
    }

    const session = await maybeCreate();
    const raw = await session.prompt(prompt);
    const text = typeof raw === 'string' ? raw.trim() : '';

    if (!text || text.length > 600) {
      return { ok: false, error: 'Invalid structured output' };
    }

    return { ok: true, text };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Local inference failed',
    };
  }
}
