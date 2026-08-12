/**
 * Landing section media registry.
 * Production stills are served from Cloudinary (`dccmiami/workshops/ai-3d-printing`).
 */

import type { MeshGlyphId } from './mesh-glyphs'

export type LandingMediaAspect = '16:9' | '4:3' | '1:1'

export type LandingMediaItem = {
  id: string
  section: string
  title: string
  aspect: LandingMediaAspect
  alt: string
  prompt: string
  icon: MeshGlyphId
  /** Cloudinary or public path. When empty, SectionMedia shows a designed placeholder. */
  src?: string
  tone?: 'charcoal' | 'coral' | 'paper' | 'digital'
}

const CDN =
  'https://res.cloudinary.com/dck5rzi4h/image/upload'

/** Visual system v1 production set (2026-08-12) */
export const LANDING_MEDIA_CDN: Record<string, string> = {
  'hero-pipeline': `${CDN}/v1786548199/dccmiami/workshops/ai-3d-printing/hero-pipeline_fgk0dq.png`,
  'outcome-reference': `${CDN}/v1786548215/dccmiami/workshops/ai-3d-printing/outcome-reference_wn7t9s.png`,
  'outcome-image': `${CDN}/v1786548200/dccmiami/workshops/ai-3d-printing/outcome-image_e66jlz.png`,
  'outcome-mesh': `${CDN}/v1786548209/dccmiami/workshops/ai-3d-printing/outcome-mesh_o4sl40.png`,
  'outcome-print': `${CDN}/v1786548201/dccmiami/workshops/ai-3d-printing/outcome-print_k1t9wy.png`,
  'tier-mini': `${CDN}/v1786548216/dccmiami/workshops/ai-3d-printing/tier-mini_tmzzyk.png`,
  'tier-sculpture': `${CDN}/v1786548213/dccmiami/workshops/ai-3d-printing/tier-sculpture_mwywcq.png`,
  'tools-flexible': `${CDN}/v1786548221/dccmiami/workshops/ai-3d-printing/tools-flexible_kdptnz.png`,
  'tools-filament': `${CDN}/v1786548219/dccmiami/workshops/ai-3d-printing/tools-filament_uzpyql.png`,
  'included-kit': `${CDN}/v1786548206/dccmiami/workshops/ai-3d-printing/included-kit_y0nusq.png`,
  'included-files': `${CDN}/v1786548205/dccmiami/workshops/ai-3d-printing/included-files_ponbel.png`,
  instructor: `${CDN}/v1786548208/dccmiami/workshops/ai-3d-printing/instructor_dmv1by.png`,
  'schedule-room': `${CDN}/v1786548217/dccmiami/workshops/ai-3d-printing/schedule-room_dq7er0.png`,
  'schedule-printers': `${CDN}/v1786548211/dccmiami/workshops/ai-3d-printing/schedule-printers_wki9ww.png`,
  'access-welcome': `${CDN}/v1786548203/dccmiami/workshops/ai-3d-printing/access-welcome_ialuad.png`,
}

export const LANDING_PROMPT_SUFFIX =
  'Moonlighter FabLab maker-lab documentary style, charcoal equipment and surfaces, restrained coral accent #FF6B5A, warm daylight, generous negative space for UI overlays, precise but human, no visible brand logos, no fake interface text, no watermark, no science-fiction holograms'

export const landingMedia: LandingMediaItem[] = [
  {
    id: 'hero-pipeline',
    section: 'Hero',
    title: 'Image to object pipeline',
    aspect: '16:9',
    icon: 'ml-layers',
    tone: 'charcoal',
    src: LANDING_MEDIA_CDN['hero-pipeline'],
    alt: 'The same compact figure progresses from reference photo to generated image, gray mesh, and coral FDM print.',
    prompt: `A single sculptural subject shown across four stages left to right: clean reference photograph, AI-generated object concept on a neutral field, untextured gray 3D mesh, and a small coral PLA print with visible layer lines. Connected as one transformation, wide 16:9, calm negative space. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-reference',
    section: 'Outcome',
    title: 'Reference',
    aspect: '1:1',
    icon: 'ml-reference',
    tone: 'charcoal',
    src: LANDING_MEDIA_CDN['outcome-reference'],
    alt: 'A clear reference photograph of a compact rounded figure on a neutral background.',
    prompt: `Small everyday object photographed three-quarter view, complete silhouette, simple white/gray background, soft directional light, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-image',
    section: 'Outcome',
    title: 'Image',
    aspect: '1:1',
    icon: 'ml-image',
    tone: 'coral',
    src: LANDING_MEDIA_CDN['outcome-image'],
    alt: 'A print-friendly generated version of the rounded figure with solid volumes and a stable base.',
    prompt: `Friendly printable miniature concept, thick solid volumes, clear silhouette, three-quarter view, neutral background, no thin wires or floating parts, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-mesh',
    section: 'Outcome',
    title: 'Mesh',
    aspect: '1:1',
    icon: 'ml-mesh',
    tone: 'charcoal',
    src: LANDING_MEDIA_CDN['outcome-mesh'],
    alt: 'The figure shown as an untextured gray 3D mesh with visible topology.',
    prompt: `Untextured gray clay 3D mesh of a compact sculpture on a museum-like neutral field, orbit-ready still, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-print',
    section: 'Outcome',
    title: 'Print',
    aspect: '1:1',
    icon: 'ml-print',
    tone: 'charcoal',
    src: LANDING_MEDIA_CDN['outcome-print'],
    alt: 'A finished coral FDM print with visible layer lines.',
    prompt: `Small finished FDM sculpture in matte coral PLA with realistic layer lines, soft studio light, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tier-mini',
    section: 'What you will make',
    title: 'Miniature / Quick',
    aspect: '4:3',
    icon: 'ml-mini',
    tone: 'paper',
    src: LANDING_MEDIA_CDN['tier-mini'],
    alt: 'A hand holds a small white PLA miniature beside calipers for scale.',
    prompt: `Matte white PLA miniature about 55 mm tall beside a metal ruler and adult hand for scale, realistic layer lines, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tier-sculpture',
    section: 'What you will make',
    title: 'Sculpture / Queued',
    aspect: '4:3',
    icon: 'ml-sculpture',
    tone: 'paper',
    src: LANDING_MEDIA_CDN['tier-sculpture'],
    alt: 'A larger coral PLA sculpture and smaller white version wait together on a pickup tray.',
    prompt: `Matte coral PLA sculpture about 110 mm tall on a labeled pickup tray, proportionally identical geometry to a miniature twin, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tools-flexible',
    section: 'Tools',
    title: 'Tool-flexible bench',
    aspect: '16:9',
    icon: 'ml-image-to-3d',
    tone: 'digital',
    src: LANDING_MEDIA_CDN['tools-flexible'],
    alt: 'A laptop, mesh, filament samples, calipers, and finished print illustrate the tool-flexible workflow.',
    prompt: `Overhead maker bench: laptop with neutral gray 3D orbit (no readable UI), black white and coral PLA swatches, calipers, soft daylight, 16:9. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tools-filament',
    section: 'Tools',
    title: 'Filament choice',
    aspect: '4:3',
    icon: 'ml-filament',
    tone: 'paper',
    src: LANDING_MEDIA_CDN['tools-filament'],
    alt: 'Black, white, and coral PLA spools arranged with calipers on a worktable.',
    prompt: `Black white and coral PLA filament spools with calipers on a charcoal maker table, soft daylight, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'included-kit',
    section: 'Included',
    title: 'What is included',
    aspect: '4:3',
    icon: 'ml-computer',
    tone: 'paper',
    src: LANDING_MEDIA_CDN['included-kit'],
    alt: 'A computer, filament samples, miniature, project folder, and workshop policy tokens.',
    prompt: `Editorial still life: provided desktop computer, three PLA spools black white coral, finished miniature, printed folder tabs for reference prompts mesh slice, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'included-files',
    section: 'Included',
    title: 'Files you keep',
    aspect: '4:3',
    icon: 'ml-archive',
    tone: 'paper',
    src: LANDING_MEDIA_CDN['included-files'],
    alt: 'Reference, concept, mesh, and sliced-project files progress toward a physical miniature.',
    prompt: `Tidy project folder with labeled tabs for reference prompts mesh slice beside a finished miniature, soft daylight, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'instructor',
    section: 'Instructor',
    title: 'Teaching atmosphere',
    aspect: '4:3',
    icon: 'ml-shared-handoff',
    tone: 'charcoal',
    src: LANDING_MEDIA_CDN.instructor,
    alt: 'An instructor guides a participant through reviewing a 3D model at a computer.',
    prompt: `Documentary workshop atmosphere: instructor hands gesturing toward a projection of a mesh and a small PLA print, participants at computers in soft focus, no identifiable faces required, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'schedule-room',
    section: 'Schedule',
    title: 'Workshop room',
    aspect: '16:9',
    icon: 'ml-clock',
    tone: 'charcoal',
    src: LANDING_MEDIA_CDN['schedule-room'],
    alt: 'Eight participants work at computers in a community fabrication classroom.',
    prompt: `Wide documentary FabLab classroom with eight computer stations, projection screen, supervised four-printer station in background, participants actively making, 16:9. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'schedule-printers',
    section: 'Schedule',
    title: 'Printer station',
    aspect: '16:9',
    icon: 'ml-printer',
    tone: 'charcoal',
    src: LANDING_MEDIA_CDN['schedule-printers'],
    alt: 'Four supervised FDM printers operate at an organized printer station.',
    prompt: `Four desktop 3D printers in a supervised FabLab station, black white and coral filament, warm daylight, 16:9. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'access-welcome',
    section: 'Access',
    title: 'Welcome table',
    aspect: '4:3',
    icon: 'ml-access',
    tone: 'paper',
    src: LANDING_MEDIA_CDN['access-welcome'],
    alt: 'A calm workshop welcome table with wayfinding, name cards, and access information.',
    prompt: `Calm welcome table with name cards, simple wayfinding card, accessibility note, coral accent ribbon, soft daylight, inclusive and uncluttered, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
]

export function getLandingMedia(id: string): LandingMediaItem | undefined {
  return landingMedia.find((m) => m.id === id)
}

export function getLandingMediaBySection(section: string): LandingMediaItem[] {
  return landingMedia.filter((m) => m.section === section)
}
