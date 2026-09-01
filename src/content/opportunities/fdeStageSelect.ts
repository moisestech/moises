import type { LifecycleStage } from './lifecycle';

export const FDE_SELECT_STAGE_EVENT = 'fde:select-stage';

export function selectFdeExplorerStage(stage: LifecycleStage) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(FDE_SELECT_STAGE_EVENT, { detail: stage }));
  const el = document.getElementById('fit');
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', '#fit');
}
