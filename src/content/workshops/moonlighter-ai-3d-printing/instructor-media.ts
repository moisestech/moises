/**
 * Instructor teaching carousel + per-module schedule preview media.
 */

import { digilabAsset } from '@/content/oolite-arts/media'
import type { MeshGlyphId } from './mesh-glyphs'
import { LANDING_MEDIA_CDN } from './landing-media'

export type TeachingSlide = {
  id: string
  src: string
  alt: string
  caption: string
}

/** Documentary stills of Moises teaching in Digilab / workshop contexts */
export const instructorTeachingSlides: TeachingSlide[] = [
  {
    id: 'art-tech-coding',
    src: digilabAsset('workshop.art-tech-coding').src,
    alt: digilabAsset('workshop.art-tech-coding').alt,
    caption: 'Art-tech coding workshop — teaching from a working lab',
  },
  {
    id: 'vibe-35',
    src: digilabAsset('docs.vibe-apr25-35').src,
    alt: digilabAsset('docs.vibe-apr25-35').alt,
    caption: 'Vibe coding session — screens and guided practice',
  },
  {
    id: 'vibe-39',
    src: digilabAsset('docs.vibe-apr25-39').src,
    alt: digilabAsset('docs.vibe-apr25-39').alt,
    caption: 'Digital Lab workstations during a live workshop',
  },
  {
    id: 'vibe-29',
    src: digilabAsset('docs.vibe-apr25-29').src,
    alt: digilabAsset('docs.vibe-apr25-29').alt,
    caption: 'Hands-on documentation from April Digilab teaching',
  },
  {
    id: 'resin-2026',
    src: digilabAsset('workshop.resin-2026').src,
    alt: digilabAsset('workshop.resin-2026').alt,
    caption: 'Fabrication workshop documentation — Digilab 2026',
  },
  {
    id: 'pcs-printer',
    src: digilabAsset('digilab.360-pcs-printer').src,
    alt: digilabAsset('digilab.360-pcs-printer').alt,
    caption: 'Workstations and printer station in the Digital Lab',
  },
  {
    id: 'moonlighter-instructor',
    src: LANDING_MEDIA_CDN.instructor,
    alt: 'Instructor guiding a participant through a 3D model review',
    caption: 'Pipeline coaching — mesh review at the desk',
  },
  {
    id: 'portrait',
    src: digilabAsset('portrait.moises').src,
    alt: digilabAsset('portrait.moises').alt,
    caption: 'Moises Sanabria — Technical Director of Digital, Oolite Arts',
  },
]

export type ScheduleModuleVisual = {
  moduleId: number
  glyph: MeshGlyphId
  previewSrc: string
  previewAlt: string
  hint: string
}

/** Icon + hover still for each run-of-show module */
export const scheduleModuleVisuals: ScheduleModuleVisual[] = [
  {
    moduleId: 0,
    glyph: 'ml-computer',
    previewSrc: LANDING_MEDIA_CDN['access-welcome'],
    previewAlt: 'Welcome table and session setup materials',
    hint: 'Lab access + folder',
  },
  {
    moduleId: 1,
    glyph: 'ml-reference',
    previewSrc: LANDING_MEDIA_CDN['outcome-reference'],
    previewAlt: 'Clear reference object on a neutral background',
    hint: 'Choose the signal',
  },
  {
    moduleId: 2,
    glyph: 'ml-image',
    previewSrc: LANDING_MEDIA_CDN['outcome-image'],
    previewAlt: 'Print-friendly generated concept image',
    hint: 'Direct the image',
  },
  {
    moduleId: 3,
    glyph: 'ml-image-to-3d',
    previewSrc: LANDING_MEDIA_CDN['tools-flexible'],
    previewAlt: 'Laptop orbit and mesh handoff on the maker bench',
    hint: 'First volume',
  },
  {
    moduleId: 4,
    glyph: 'ml-mesh',
    previewSrc: LANDING_MEDIA_CDN['outcome-mesh'],
    previewAlt: 'Untextured gray mesh with visible topology',
    hint: 'Read the mesh',
  },
  {
    moduleId: 5,
    glyph: 'ml-mesh-check',
    previewSrc: LANDING_MEDIA_CDN['outcome-mesh'],
    previewAlt: 'Mesh inspection for repair decisions',
    hint: 'Repair what matters',
  },
  {
    moduleId: 6,
    glyph: 'ml-orient',
    previewSrc: LANDING_MEDIA_CDN['tier-mini'],
    previewAlt: 'Miniature print with scale reference',
    hint: 'Place in gravity',
  },
  {
    moduleId: 7,
    glyph: 'ml-slice-print',
    previewSrc: LANDING_MEDIA_CDN['included-files'],
    previewAlt: 'Project files progressing toward a sliced print',
    hint: 'Slice the decision',
  },
  {
    moduleId: 8,
    glyph: 'ml-printer',
    previewSrc: LANDING_MEDIA_CDN['schedule-printers'],
    previewAlt: 'Supervised four-printer station',
    hint: 'Pass the gate',
  },
  {
    moduleId: 9,
    glyph: 'ml-archive',
    previewSrc: LANDING_MEDIA_CDN['included-kit'],
    previewAlt: 'Kit and archive materials participants leave with',
    hint: 'Archive and continue',
  },
]

export function getScheduleModuleVisual(moduleId: number): ScheduleModuleVisual | undefined {
  return scheduleModuleVisuals.find((v) => v.moduleId === moduleId)
}
