/** Canonical MeshGlyph IDs for Moonlighter landing + curriculum chrome. */

export const MESH_GLYPH_IDS = [
  'ml-reference',
  'ml-image',
  'ml-mesh',
  'ml-print',
  'ml-image-generate',
  'ml-image-to-3d',
  'ml-mesh-check',
  'ml-slice-print',
  'ml-computer',
  'ml-filament',
  'ml-archive',
  'ml-reprint',
  'ml-pickup',
  'ml-shared-handoff',
  'ml-mini',
  'ml-sculpture',
  'ml-clock',
  'ml-orient',
  'ml-printer',
  'ml-age-16',
  'ml-prerequisite',
  'ml-access',
  'ml-account',
  'ml-layers',
  'ml-glossary',
] as const

export type MeshGlyphId = (typeof MESH_GLYPH_IDS)[number]
