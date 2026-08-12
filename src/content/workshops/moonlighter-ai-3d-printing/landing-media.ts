/**
 * Landing section media registry.
 * `src` points at designed placeholder stills in /public until Moonlighter supplies final photography.
 */

export type LandingMediaAspect = '16:9' | '4:3' | '1:1'

export type LandingMediaIcon =
  | 'image'
  | 'sparkles'
  | 'box'
  | 'printer'
  | 'ruler'
  | 'layers'
  | 'users'
  | 'folder'
  | 'shield'
  | 'camera'
  | 'rocket'

export type LandingMediaItem = {
  id: string
  section: string
  title: string
  aspect: LandingMediaAspect
  alt: string
  prompt: string
  icon: LandingMediaIcon
  /** Public path or Cloudinary URL. When empty, SectionMedia shows a designed placeholder. */
  src?: string
  tone?: 'charcoal' | 'coral' | 'paper' | 'digital'
}

const MEDIA_BASE = '/workshops/moonlighter-ai-3d-printing'

export const LANDING_PROMPT_SUFFIX =
  'Moonlighter FabLab maker-lab documentary style, charcoal equipment and surfaces, restrained coral accent #FF6B5A, warm daylight, generous negative space for UI overlays, precise but human, no visible brand logos, no fake interface text, no watermark, no science-fiction holograms'

export const landingMedia: LandingMediaItem[] = [
  {
    id: 'hero-pipeline',
    section: 'Hero',
    title: 'Image to object pipeline',
    aspect: '16:9',
    icon: 'layers',
    tone: 'charcoal',
    src: `${MEDIA_BASE}/hero-pipeline.webp`,
    alt: 'Four stages from reference photo to AI image to gray mesh to coral PLA print',
    prompt: `A single sculptural subject shown across four stages left to right: clean reference photograph, AI-generated object concept on a neutral field, untextured gray 3D mesh, and a small coral PLA print with visible layer lines. Connected as one transformation, wide 16:9, calm negative space. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-reference',
    section: 'Outcome',
    title: 'Reference',
    aspect: '1:1',
    icon: 'camera',
    tone: 'charcoal',
    src: `${MEDIA_BASE}/outcome-reference.webp`,
    alt: 'Clean reference object with clear silhouette on a simple background',
    prompt: `Small everyday object photographed three-quarter view, complete silhouette, simple white/gray background, soft directional light, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-image',
    section: 'Outcome',
    title: 'Image',
    aspect: '1:1',
    icon: 'sparkles',
    tone: 'coral',
    src: `${MEDIA_BASE}/outcome-image.webp`,
    alt: 'Print-friendly AI-generated object concept in three-quarter view',
    prompt: `Friendly printable miniature concept, thick solid volumes, clear silhouette, three-quarter view, neutral background, no thin wires or floating parts, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-mesh',
    section: 'Outcome',
    title: 'Mesh',
    aspect: '1:1',
    icon: 'box',
    tone: 'charcoal',
    src: `${MEDIA_BASE}/outcome-mesh.webp`,
    alt: 'Untextured gray clay 3D mesh ready for inspection',
    prompt: `Untextured gray clay 3D mesh of a compact sculpture on a museum-like neutral field, orbit-ready still, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'outcome-print',
    section: 'Outcome',
    title: 'Print',
    aspect: '1:1',
    icon: 'printer',
    tone: 'charcoal',
    src: `${MEDIA_BASE}/outcome-print.webp`,
    alt: 'Small coral PLA print with visible FDM layer lines',
    prompt: `Small finished FDM sculpture in matte coral PLA with realistic layer lines, soft studio light, square 1:1. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tier-mini',
    section: 'What you will make',
    title: 'Miniature / Quick',
    aspect: '4:3',
    icon: 'ruler',
    tone: 'paper',
    src: `${MEDIA_BASE}/tier-mini.webp`,
    alt: 'About 55 mm miniature PLA print beside a metal ruler and adult hand for scale',
    prompt: `Matte white PLA miniature about 55 mm tall beside a metal ruler and adult hand for scale, realistic layer lines, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tier-sculpture',
    section: 'What you will make',
    title: 'Sculpture / Queued',
    aspect: '4:3',
    icon: 'box',
    tone: 'paper',
    src: `${MEDIA_BASE}/tier-sculpture.webp`,
    alt: 'About 110 mm sculpture PLA print with queued pickup atmosphere',
    prompt: `Matte coral PLA sculpture about 110 mm tall on a labeled pickup tray, proportionally identical geometry to a miniature twin, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tools-flexible',
    section: 'Tools',
    title: 'Tool-flexible bench',
    aspect: '16:9',
    icon: 'sparkles',
    tone: 'digital',
    src: `${MEDIA_BASE}/tools-flexible.webp`,
    alt: 'Laptop showing a neutral 3D orbit view with filament swatches nearby',
    prompt: `Overhead maker bench: laptop with neutral gray 3D orbit (no readable UI), black white and coral PLA swatches, calipers, soft daylight, 16:9. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'tools-filament',
    section: 'Tools',
    title: 'Filament choice',
    aspect: '4:3',
    icon: 'box',
    tone: 'paper',
    src: `${MEDIA_BASE}/tools-filament.webp`,
    alt: 'Black, white, and coral PLA filament spools with calipers on a maker table',
    prompt: `Black white and coral PLA filament spools with calipers on a charcoal maker table, soft daylight, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'included-kit',
    section: 'Included',
    title: 'What is included',
    aspect: '4:3',
    icon: 'folder',
    tone: 'paper',
    src: `${MEDIA_BASE}/included-kit.webp`,
    alt: 'Computer, three PLA colors, finished miniature, and organized project folder tabs',
    prompt: `Editorial still life: provided desktop computer, three PLA spools black white coral, finished miniature, printed folder tabs for reference prompts mesh slice, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'included-files',
    section: 'Included',
    title: 'Files you keep',
    aspect: '4:3',
    icon: 'folder',
    tone: 'paper',
    src: `${MEDIA_BASE}/included-files.webp`,
    alt: 'Project folder with labeled tabs and a finished miniature print',
    prompt: `Tidy project folder with labeled tabs for reference prompts mesh slice beside a finished miniature, soft daylight, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'instructor',
    section: 'Instructor',
    title: 'Teaching atmosphere',
    aspect: '4:3',
    icon: 'users',
    tone: 'charcoal',
    src: `${MEDIA_BASE}/instructor.webp`,
    alt: 'Hands-on fabrication workshop demonstration atmosphere without invented faces',
    prompt: `Documentary workshop atmosphere: instructor hands gesturing toward a projection of a mesh and a small PLA print, participants at computers in soft focus, no identifiable faces required, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'schedule-room',
    section: 'Schedule',
    title: 'Workshop room',
    aspect: '16:9',
    icon: 'rocket',
    tone: 'charcoal',
    src: `${MEDIA_BASE}/schedule-room.webp`,
    alt: 'Wide shot of a fabrication classroom with computers and a four-printer station',
    prompt: `Wide documentary FabLab classroom with eight computer stations, projection screen, supervised four-printer station in background, participants actively making, 16:9. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'schedule-printers',
    section: 'Schedule',
    title: 'Printer station',
    aspect: '16:9',
    icon: 'printer',
    tone: 'charcoal',
    src: `${MEDIA_BASE}/schedule-printers.webp`,
    alt: 'Supervised four-printer station with filament in a FabLab',
    prompt: `Four desktop 3D printers in a supervised FabLab station, black white and coral filament, warm daylight, 16:9. ${LANDING_PROMPT_SUFFIX}`,
  },
  {
    id: 'access-welcome',
    section: 'Access',
    title: 'Welcome table',
    aspect: '4:3',
    icon: 'shield',
    tone: 'paper',
    src: `${MEDIA_BASE}/access-welcome.webp`,
    alt: 'Calm inclusive workshop welcome table with wayfinding materials',
    prompt: `Calm welcome table with name cards, simple wayfinding card, accessibility note, coral accent ribbon, soft daylight, inclusive and uncluttered, 4:3. ${LANDING_PROMPT_SUFFIX}`,
  },
]

export function getLandingMedia(id: string): LandingMediaItem | undefined {
  return landingMedia.find((m) => m.id === id)
}

export function getLandingMediaBySection(section: string): LandingMediaItem[] {
  return landingMedia.filter((m) => m.section === section)
}
