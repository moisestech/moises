/**
 * Lightweight analytics helper.
 * Uses PostHog or gtag if available, otherwise no-op.
 */
export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const w = window as Window & {
      posthog?: { capture: (e: string, p?: Record<string, unknown>) => void };
      gtag?: (...args: unknown[]) => void;
    };
    if (w.posthog?.capture) {
      w.posthog.capture(event, properties);
    } else if (w.gtag) {
      w.gtag("event", event, properties);
    } else {
      console.debug("[track]", event, properties);
    }
  } catch {
    // Never break the app
  }
}
