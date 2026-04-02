const CM_PER_INCH = 2.54;

/** Whole centimeters, typical for artwork captions. */
export function inchesToCmRounded(inches: number): number {
  return Math.round(inches * CM_PER_INCH);
}

/**
 * L × W × H box: imperial as recorded, metric derived (2.54 cm/in).
 * Example: `L: 42" × W: 20" × H: 36" (107 × 51 × 91 cm)`
 */
export function formatBoxDimensionsInchesLwh(lengthIn: number, widthIn: number, heightIn: number): string {
  const l = inchesToCmRounded(lengthIn);
  const w = inchesToCmRounded(widthIn);
  const h = inchesToCmRounded(heightIn);
  return `L: ${lengthIn}" × W: ${widthIn}" × H: ${heightIn}" (${l} × ${w} × ${h} cm)`;
}
