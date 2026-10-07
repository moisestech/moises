/**
 * Chapter stills: reuse a landing asset, or name the gap.
 * Missing slots stay labeled. They do not render as silent empty frames.
 */

import { getLandingMedia, type LandingMediaItem } from './landing-media'

export type ChapterSlotStatus = 'reused' | 'missing'

export type ChapterMediaSlot = {
  id: string
  role: 'masthead' | 'support'
  status: ChapterSlotStatus
  /** Landing registry id when the still already exists. */
  assetId?: string
  title: string
  caption: string
}

const chapterMedia: ChapterMediaSlot[][] = [
  [
    {
      id: 'm0-pipeline',
      role: 'masthead',
      status: 'reused',
      assetId: 'hero-pipeline',
      title: 'Image to object pipeline',
      caption: 'One figure across photo, concept, mesh, and print. This is the path before any tool opens.',
    },
    {
      id: 'm0-filament',
      role: 'support',
      status: 'reused',
      assetId: 'tools-filament',
      title: 'Three PLA choices',
      caption: 'Black, white, and coral spools. Choose a first and second color from these.',
    },
  ],
  [
    {
      id: 'm1-strong',
      role: 'masthead',
      status: 'reused',
      assetId: 'outcome-reference',
      title: 'Strong reference',
      caption: 'One clear subject, full silhouette, simple background. This still is the strong example only.',
    },
    {
      id: 'ch-01-strong-weak',
      role: 'support',
      status: 'missing',
      title: 'Strong versus weak reference',
      caption: 'The same object photographed cleanly, then cropped, cluttered, and cut by a hard shadow.',
    },
  ],
  [
    {
      id: 'm2-selected',
      role: 'masthead',
      status: 'reused',
      assetId: 'outcome-image',
      title: 'One selected concept',
      caption: 'A print-friendly concept with solid volumes. The two-direction pair is not this still.',
    },
    {
      id: 'ch-02-two-directions',
      role: 'support',
      status: 'missing',
      title: 'One object, two printable directions',
      caption: 'The same reference as a thick miniature and as a broad-based sculpture.',
    },
  ],
  [
    {
      id: 'm3-mesh',
      role: 'masthead',
      status: 'reused',
      assetId: 'outcome-mesh',
      title: 'One gray mesh',
      caption: 'A single orbit still. It is the conversion result, not a Meshy or Tripo screen.',
    },
    {
      id: 'm3-bench',
      role: 'support',
      status: 'reused',
      assetId: 'tools-flexible',
      title: 'Conversion bench',
      caption: 'Laptop, gray orbit, swatches, and a finished print. No vendor interface text.',
    },
    {
      id: 'ch-03-organic-hard',
      role: 'support',
      status: 'missing',
      title: 'Organic mesh versus hard-surface mesh',
      caption: 'A rounded creature beside a planar household object, both untextured.',
    },
    {
      id: 'ch-03-orbit-views',
      role: 'support',
      status: 'missing',
      title: 'Four orbit views',
      caption: 'Front, side, back, and underside. The back and underside show invented or broken geometry.',
    },
  ],
  [
    {
      id: 'm4-single',
      role: 'masthead',
      status: 'reused',
      assetId: 'outcome-mesh',
      title: 'One mesh, not the gate',
      caption: 'A single gray mesh can stand in for “look at the form.” It is not the three-mesh quality gate.',
    },
    {
      id: 'ch-04-quality-gate',
      role: 'support',
      status: 'missing',
      title: 'Three-mesh quality gate',
      caption: 'Closed and watertight; one bounded hole; fragmented rear volume.',
    },
  ],
  [
    {
      id: 'ch-05-repair-split',
      role: 'masthead',
      status: 'missing',
      title: 'Repair before and after',
      caption:
        'One mesh with a hole and loose geometry, then a closed copy of the same design. The single gray mesh is not this comparison.',
    },
  ],
  [
    {
      id: 'm6-mini',
      role: 'masthead',
      status: 'reused',
      assetId: 'tier-mini',
      title: 'Miniature scale',
      caption: 'A small white PLA print with a hand and calipers. This is the in-class size.',
    },
    {
      id: 'm6-sculpture',
      role: 'support',
      status: 'reused',
      assetId: 'tier-sculpture',
      title: 'Sculpture scale',
      caption: 'A larger coral print on a pickup tray. This size usually queues.',
    },
    {
      id: 'ch-06-orientations',
      role: 'support',
      status: 'missing',
      title: 'Three orientations and their supports',
      caption: 'Upright, tilted, and poorly planted, with pale scaffolding on one object.',
    },
    {
      id: 'ch-06-support-levels',
      role: 'support',
      status: 'missing',
      title: 'Low, moderate, and high support',
      caption: 'Three objects that make the support rating visible before slicing.',
    },
  ],
  [
    {
      id: 'm7-files',
      role: 'masthead',
      status: 'reused',
      assetId: 'included-files',
      title: 'Project record',
      caption: 'Folder tabs moving toward a miniature. This is the file set, not a layer preview.',
    },
    {
      id: 'ch-07-layer-peel',
      role: 'support',
      status: 'missing',
      title: 'Layer peel',
      caption: 'Walls, infill, and supports, with no software interface in the image.',
    },
  ],
  [
    {
      id: 'm8-station',
      role: 'masthead',
      status: 'reused',
      assetId: 'schedule-printers',
      title: 'Supervised printer station',
      caption:
        'Four desktop FDM machines in a supervised station. This still is not a confirmed photograph of a P1S or an H2D.',
    },
    {
      id: 'm8-queued',
      role: 'support',
      status: 'reused',
      assetId: 'tier-sculpture',
      title: 'Queued sculpture',
      caption: 'The larger print stands in for a pickup object until a launch-versus-pickup still exists.',
    },
    {
      id: 'ch-08-launch-pickup',
      role: 'support',
      status: 'missing',
      title: 'Launch versus pickup',
      caption:
        'A miniature beginning its first layers, beside a finished sculpture on a pickup shelf. Caption stays provisional until a real P1S photograph exists.',
    },
  ],
  [
    {
      id: 'm9-files',
      role: 'masthead',
      status: 'reused',
      assetId: 'included-files',
      title: 'Archive folders',
      caption: 'Reference, concept, mesh, and slice files beside a finished miniature.',
    },
    {
      id: 'm9-kit',
      role: 'support',
      status: 'reused',
      assetId: 'included-kit',
      title: 'What you leave with',
      caption: 'Computer, spools, miniature, and project folder. Close enough for the archive chapter.',
    },
  ],
]

export type ResolvedChapterSlot = ChapterMediaSlot & {
  media?: LandingMediaItem
}

export function getChapterSlots(moduleId: number): ResolvedChapterSlot[] {
  const slots = chapterMedia[moduleId] ?? []
  return slots.map((slot) => ({
    ...slot,
    media: slot.assetId ? getLandingMedia(slot.assetId) : undefined,
  }))
}

export function getChapterMasthead(moduleId: number): ResolvedChapterSlot | undefined {
  return getChapterSlots(moduleId).find((slot) => slot.role === 'masthead')
}

export function getChapterSupport(moduleId: number): ResolvedChapterSlot[] {
  return getChapterSlots(moduleId).filter((slot) => slot.role !== 'masthead')
}

export function allChapterSlots(): { moduleId: number; slot: ResolvedChapterSlot }[] {
  return chapterMedia.flatMap((slots, moduleId) =>
    getChapterSlots(moduleId).map((slot) => ({ moduleId, slot })),
  )
}
