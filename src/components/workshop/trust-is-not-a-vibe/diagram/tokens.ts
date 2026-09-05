/**
 * Shape tones for code-native diagrams.
 *
 * Tone drives the shape only. Label text uses `fill-current` so it inherits the
 * figure's text color, and sub-labels use one muted token. Keeping text out of
 * the tone map means adding a hue can never introduce a contrast regression.
 */
export const TRUST_DIAGRAM_TONE = {
  cyan: 'fill-cyan-100 stroke-cyan-500 dark:fill-cyan-950 dark:stroke-cyan-400',
  violet: 'fill-violet-100 stroke-violet-500 dark:fill-violet-950 dark:stroke-violet-400',
  blue: 'fill-blue-100 stroke-blue-500 dark:fill-blue-950 dark:stroke-blue-400',
  slate: 'fill-slate-100 stroke-slate-500 dark:fill-slate-900 dark:stroke-slate-400',
  amber: 'fill-amber-100 stroke-amber-500 dark:fill-amber-950 dark:stroke-amber-400',
  emerald: 'fill-emerald-100 stroke-emerald-500 dark:fill-emerald-950 dark:stroke-emerald-400',
  rose: 'fill-rose-100 stroke-rose-500 dark:fill-rose-950 dark:stroke-rose-400',
  teal: 'fill-teal-100 stroke-teal-500 dark:fill-teal-950 dark:stroke-teal-400',
  fuchsia: 'fill-fuchsia-100 stroke-fuchsia-500 dark:fill-fuchsia-950 dark:stroke-fuchsia-400',
  stone: 'fill-stone-100 stroke-stone-400 dark:fill-stone-900 dark:stroke-stone-600',
} as const

export type TrustDiagramTone = keyof typeof TRUST_DIAGRAM_TONE

/** Node label. Inherits the figure text color in both themes. */
export const TRUST_DIAGRAM_LABEL = 'fill-current'

/** Secondary line inside a node, and edge labels. */
export const TRUST_DIAGRAM_SUB = 'fill-stone-500 dark:fill-stone-400'

/** Connectors and arrowheads. */
export const TRUST_DIAGRAM_EDGE = 'stroke-stone-400 dark:stroke-stone-500'
export const TRUST_DIAGRAM_ARROW = 'fill-stone-400 dark:fill-stone-500'

/**
 * Halo behind an edge label so it stays readable where it crosses a connector.
 * Applied as a stroke under the glyphs via paint-order.
 */
export const TRUST_DIAGRAM_HALO = 'stroke-white dark:stroke-stone-900'
