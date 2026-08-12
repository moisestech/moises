/**
 * Moonlighter workshop glossary — shared keywords for landing + curriculum surfaces.
 * Keep definitions short enough for hover chips and a scannable landing section.
 */

export type GlossaryTone = 'coral' | 'mesh' | 'charcoal' | 'paper'

export type GlossaryTerm = {
  id: string
  term: string
  short: string
  definition: string
  category: 'pipeline' | 'fabrication' | 'policy' | 'access'
  tone: GlossaryTone
  related?: string[]
}

export const moonlighterGlossary: GlossaryTerm[] = [
  {
    id: 'reference',
    term: 'Reference',
    short: 'Source image or object',
    definition:
      'A clear photo or physical object that anchors the generation step. Strong references have a complete silhouette, simple background, and readable proportions.',
    category: 'pipeline',
    tone: 'charcoal',
    related: ['image', 'mesh'],
  },
  {
    id: 'image',
    term: 'Generated image',
    short: 'Print-friendly concept',
    definition:
      'An AI-assisted still designed for fabrication: thick volumes, stable base, no thin wires or floating parts. It is a concept for mesh conversion, not a finished artwork alone.',
    category: 'pipeline',
    tone: 'coral',
    related: ['reference', 'mesh'],
  },
  {
    id: 'mesh',
    term: 'Mesh',
    short: '3D geometry',
    definition:
      'The untextured digital volume created from an image. Participants inspect topology, overhangs, and thickness before repair or slicing.',
    category: 'pipeline',
    tone: 'mesh',
    related: ['slice', 'support'],
  },
  {
    id: 'slice',
    term: 'Slice',
    short: 'Toolpath for the printer',
    definition:
      'Converting a mesh into layered machine instructions. Orientation, supports, and estimated time are decided here under instructor guidance.',
    category: 'pipeline',
    tone: 'charcoal',
    related: ['mesh', 'print', 'support'],
  },
  {
    id: 'print',
    term: 'Print',
    short: 'Physical FDM object',
    definition:
      'A finished PLA object with visible layer lines. One approved attempt is included; qualifying failures may receive one automatic reprint.',
    category: 'pipeline',
    tone: 'coral',
    related: ['pla', 'reprint'],
  },
  {
    id: 'pla',
    term: 'PLA',
    short: 'Workshop filament',
    definition:
      'The pilot material set: black, white, and provisional coral. Matte polymer with fine horizontal layer lines when printed on FDM machines.',
    category: 'fabrication',
    tone: 'coral',
    related: ['print', 'mini', 'sculpture'],
  },
  {
    id: 'fdm',
    term: 'FDM',
    short: 'Layered extrusion printing',
    definition:
      'Fused deposition modeling — heated filament extruded in layers. This workshop does not use resin printers.',
    category: 'fabrication',
    tone: 'charcoal',
    related: ['pla', 'layer-lines'],
  },
  {
    id: 'layer-lines',
    term: 'Layer lines',
    short: 'Visible FDM texture',
    definition:
      'Fine horizontal ridges left by extrusion. They are expected material evidence, not a defect, unless they indicate a failed attempt.',
    category: 'fabrication',
    tone: 'paper',
    related: ['fdm', 'print'],
  },
  {
    id: 'support',
    term: 'Supports',
    short: 'Temporary scaffolding',
    definition:
      'Extra material that holds overhangs during printing and is removed afterward. Low, moderate, and high support ratings change time, cleanup, and surface marks.',
    category: 'fabrication',
    tone: 'mesh',
    related: ['slice', 'orient'],
  },
  {
    id: 'orient',
    term: 'Orientation',
    short: 'How the mesh sits on the bed',
    definition:
      'Rotating the model on the build plate to balance strength, surface quality, support needs, and print time.',
    category: 'fabrication',
    tone: 'charcoal',
    related: ['support', 'slice'],
  },
  {
    id: 'mini',
    term: 'Miniature / Quick',
    short: 'Smaller in-class tier',
    definition:
      'Provisional size about 35–70 mm. Usually under 90 minutes and prioritized for an in-class launch when approved.',
    category: 'fabrication',
    tone: 'paper',
    related: ['sculpture', 'pla'],
  },
  {
    id: 'sculpture',
    term: 'Sculpture / Queued',
    short: 'Larger pickup tier',
    definition:
      'Provisional size about 80–120 mm. Often 90–240+ minutes; instructor approval required and normally queued for collection.',
    category: 'fabrication',
    tone: 'coral',
    related: ['mini', 'pickup'],
  },
  {
    id: 'reprint',
    term: 'Automatic reprint',
    short: 'Qualifying recovery attempt',
    definition:
      'One extra print attempt included when the first approved attempt fails from a qualifying production or repairable mesh problem. Redesigns and preference changes are not automatic reprints.',
    category: 'policy',
    tone: 'coral',
    related: ['print', 'mesh'],
  },
  {
    id: 'pickup',
    term: 'Pickup',
    short: 'Queued collection',
    definition:
      'Larger or longer prints may finish after class. Collection timing remains pending Moonlighter operational sign-off.',
    category: 'policy',
    tone: 'charcoal',
    related: ['sculpture', 'print'],
  },
  {
    id: 'tool-flexible',
    term: 'Tool-flexible',
    short: 'Method over vendor UI',
    definition:
      'The workshop teaches a transferable pipeline—image, mesh, inspect, slice, print—rather than locking to a single software brand.',
    category: 'access',
    tone: 'mesh',
    related: ['mesh', 'image'],
  },
  {
    id: 'moonlet',
    term: 'Moonlet',
    short: 'Working continuity subject',
    definition:
      'A provisional print-safe figure used only to unify landing visuals until Moonlighter provides official imagery. Not a logo or venue mascot.',
    category: 'access',
    tone: 'coral',
    related: ['reference', 'print'],
  },
]

export function getGlossaryTerm(id: string): GlossaryTerm | undefined {
  return moonlighterGlossary.find((t) => t.id === id)
}

export function getGlossaryByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return moonlighterGlossary.filter((t) => t.category === category)
}
