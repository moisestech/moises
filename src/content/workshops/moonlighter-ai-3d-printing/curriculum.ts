export type ExternalRef = {
  title: string
  url: string
  source: string
  lastReviewed: string
  kind: 'docs' | 'video' | 'guide'
}

export type DemoSlot = {
  id: string
  title: string
  durationSec: [number, number]
  status: 'planned' | 'recorded'
  muxPlaybackId?: string
  posterAlt: string
}

export type QualityLevel = 'green' | 'amber' | 'coral'

export type CurriculumModule = {
  id: number
  phase: string
  header: string
  subhead: string
  objective: string
  input: string
  tools: string[]
  timeboxMin: number
  output: string
  passCheck: string
  guidedTasks: string[]
  teach?: string[]
  demos: DemoSlot[]
  externalRefs: ExternalRef[]
  documentation: string[]
  tips: string[]
  troubleshooting: string[]
  qualityLabels?: Partial<Record<QualityLevel, string>>
}

const LAST_REVIEWED = '2026-08-12'

export const promptFormula = `Transform [reference subject] into [new object/character direction]. Preserve [essential identity or shape]. Show one complete object in a centered three-quarter view with a clear silhouette, coherent solid volumes, thick printable details, no floating parts, and a simple neutral background. The object should stand on [integrated base / stable lower mass]. Single-object product study, soft even lighting, no text, no props, no cropped edges.`

export const promptChips = [
  { id: 'identity', label: 'Subject identity', placeholder: 'the essential shape of the reference' },
  { id: 'transform', label: 'Transformation', placeholder: 'a friendly miniature / architectural sculpture' },
  { id: 'material', label: 'Material/shape language', placeholder: 'thick rounded volumes / planar hard surfaces' },
  { id: 'pose', label: 'Pose/view', placeholder: 'centered three-quarter view' },
  { id: 'base', label: 'Base/stability', placeholder: 'an integrated flat base' },
  { id: 'background', label: 'Background', placeholder: 'simple neutral background' },
  { id: 'exclusions', label: 'Exclusions', placeholder: 'no floating parts, no text, no props' },
] as const

export const negativeGuidance = [
  'no multiple views in one image',
  'no scenery',
  'no thin wires',
  'no floating accessories',
  'no transparent body',
  'no cropped form',
  'no typography',
] as const

export const productionTiers = [
  {
    id: 'miniature' as const,
    label: 'MINI / QUICK',
    sizeMm: '35–70 mm',
    typicalEstimate: 'Usually under 90 minutes',
    classOutcome: 'Prioritized for an in-class launch; may finish during class',
  },
  {
    id: 'sculpture' as const,
    label: 'SCULPTURE / QUEUED',
    sizeMm: '80–120 mm',
    typicalEstimate: 'Often 90–240+ minutes',
    classOutcome: 'Instructor approval required; normally queued for collection',
  },
]

export const supportRatings = [
  {
    id: 'low' as const,
    label: 'Low support',
    note: 'Limited contact points; short removal time.',
  },
  {
    id: 'moderate' as const,
    label: 'Moderate support',
    note: 'Meaningful added time/material; some surface marking expected.',
  },
  {
    id: 'high' as const,
    label: 'High support',
    note: 'Complex removal, fragile contact points, or significant print-time increase; instructor review required.',
  },
]

export const timeClasses = [
  { id: 'quick', label: 'Quick Print', range: 'under 60 minutes' },
  { id: 'standard', label: 'Standard Print', range: '60–120 minutes' },
  { id: 'extended', label: 'Extended Print', range: 'over 120 minutes; resize, reorient, or queue' },
]

export const archiveFolderSpec = [
  '00_project_record/ — process_worksheet.pdf, handoff_card.pdf',
  '01_reference/ — original_reference, working_reference.png',
  '02_prompts/ — prompt_log.txt',
  '03_generated_images/ — option_01–n, selected_image.png',
  '04_ai_3d_source/ — original_conversion.glb/.stl',
  '05_repair/ — repaired_v01.blend/.stl (if used)',
  '06_bambu_project/ — project_v01.3mf, slice screenshots',
  '07_final/ — approved_print_v01.3mf, pickup_and_reprint_status.pdf',
] as const

export const moonlighterModules: CurriculumModule[] = [
  {
    id: 0,
    phase: 'Enter the Lab',
    header: 'FROM IMAGE TO OBJECT',
    subhead: 'One reference. One prompt. One printable decision.',
    objective: 'Understand the complete workflow and prepare a project folder before opening any AI tool.',
    input: 'Session code, participant name, reference options',
    tools: ['Workshop site', 'Local file system'],
    timeboxMin: 20,
    output: 'Named project folder and selected PLA preference',
    passCheck: 'Participant can identify the next three stages and has saved to the correct folder',
    guidedTasks: [
      'Join the session.',
      'Choose Follow class or My pace.',
      'Create the required folder structure.',
      'Select first and second PLA choices.',
      'Review Miniature vs Sculpture tier.',
    ],
    demos: [
      {
        id: 'v01',
        title: 'The entire image-to-object pipeline',
        durationSec: [45, 60],
        status: 'planned',
        posterAlt: 'Pipeline from reference image to physical PLA print',
      },
    ],
    externalRefs: [
      {
        title: 'Bambu Studio Quick Start',
        url: 'https://wiki.bambulab.com/en/software/bambu-studio/studio-quick-start',
        source: 'Bambu Lab',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
    ],
    documentation: ['One-page workflow map', 'File checklist'],
    tips: ['Do not open AI tools until the folder and color choice are set.', 'Name folders lastname_firstname_project.'],
    troubleshooting: ['If the session code fails, ask the facilitator — do not create a second account.'],
  },
  {
    id: 1,
    phase: 'Choose the Signal',
    header: 'CHOOSE A REFERENCE THE MODEL CAN READ',
    subhead: 'Clear silhouette first. Style and detail second.',
    objective: 'Select or make a reference with enough visual separation to support image transformation and 3D inference.',
    input: 'Uploaded file, brought file, or new photograph',
    tools: ['Camera', 'File browser'],
    timeboxMin: 30,
    output: '01_reference/original.ext plus a cropped working copy',
    passCheck: 'One main subject, complete silhouette, readable lighting, simple background',
    guidedTasks: [
      'Choose Upload, Bring, or Photograph.',
      'Crop to a working reference.',
      'Run the reference-quality meter.',
      'Confirm rights and privacy before upload.',
    ],
    teach: [
      'One dominant subject.',
      'Three-quarter or near-frontal view when useful.',
      'Full silhouette inside frame.',
      'Avoid occlusion, cropped limbs, heavy shadows, reflective glare, clutter, and transparent objects.',
    ],
    demos: [
      {
        id: 'v02',
        title: 'Photographing an object for AI-to-3D',
        durationSec: [60, 75],
        status: 'planned',
        posterAlt: 'Hands photographing a small object against a simple background',
      },
    ],
    externalRefs: [
      {
        title: 'Meshy generation-method guide',
        url: 'https://docs.meshy.ai/en/webapp/guides/choosing/generation-method',
        source: 'Meshy',
        lastReviewed: LAST_REVIEWED,
        kind: 'guide',
      },
    ],
    documentation: ['Reference-image checklist', 'Consent/privacy note'],
    tips: ['Strong and weak photos of the same object teach more than a perfect stock image.'],
    troubleshooting: ['If glare dominates, move lights or rotate the object before regenerating later stages.'],
    qualityLabels: {
      green: 'Ready — clear subject, separated background, complete silhouette',
      amber: 'Adjust — usable after crop, background cleanup, or angle change',
      coral: 'Replace — multiple subjects, hidden structure, severe glare, incomplete form',
    },
  },
  {
    id: 2,
    phase: 'Direct the Image',
    header: 'DESIGN FOR VOLUME, NOT JUST APPEARANCE',
    subhead: 'The best-looking image is not always the best image to print.',
    objective: 'Combine a reference with a written transformation prompt that produces a clear, object-centered image.',
    input: 'Working reference + prompt',
    tools: ['ChatGPT Images', 'Adobe Firefly'],
    timeboxMin: 45,
    output: '2–4 concepts and one selected final image',
    passCheck: 'Chosen concept has one object, clear silhouette, coherent volume, visible base, and minimal background',
    guidedTasks: [
      'Build the prompt with chips.',
      'Generate 2–4 options in one tool path.',
      'Select the most printable concept, not only the prettiest.',
      'Save options and selected_image.png.',
    ],
    demos: [
      {
        id: 'v03',
        title: 'Reference + prompt in ChatGPT Images',
        durationSec: [60, 90],
        status: 'planned',
        posterAlt: 'Reference and prompt producing printable concept options',
      },
      {
        id: 'v04',
        title: 'The same method in Adobe Firefly',
        durationSec: [60, 90],
        status: 'planned',
        posterAlt: 'Firefly composition reference workflow',
      },
    ],
    externalRefs: [
      {
        title: 'Images in ChatGPT',
        url: 'https://help.openai.com/en/articles/11084440-images-in-chatgpt',
        source: 'OpenAI',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
      {
        title: 'Adobe Firefly: generate images from text',
        url: 'https://helpx.adobe.com/firefly/web/work-with-images/generate-images/generate-images-from-text-descriptions.html',
        source: 'Adobe',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
      {
        title: 'Adobe Firefly: match composition to a reference',
        url: 'https://helpx.adobe.com/firefly/web/work-with-images/generate-images/match-image-composition-to-reference-image.html',
        source: 'Adobe',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
    ],
    documentation: ['Copyable prompt template', 'Prompt/version log', 'Image selection rubric'],
    tips: ['Tool interfaces are replaceable; the reference + prompt method is not.'],
    troubleshooting: ['If free-tier limits hit, pause and ask before spending instructor credits.'],
  },
  {
    id: 3,
    phase: 'Build the First Volume',
    header: 'ASK A FLAT IMAGE TO BECOME A FORM',
    subhead: 'Conversion is a proposal. Orbit before you trust it.',
    objective: 'Convert the selected image to a 3D mesh and evaluate the result from every side.',
    input: 'Selected PNG/JPG',
    tools: ['Meshy', 'Tripo'],
    timeboxMin: 45,
    output: 'Original model export (STL for print; GLB/OBJ as source when available)',
    passCheck: 'Recognizable front, plausible back, connected body, no missing main mass',
    guidedTasks: [
      'Upload and generate with free tier first.',
      'Orbit top, bottom, back, and underside.',
      'Save the unmodified original before any repair.',
      'Use a second generation only if structure fails.',
    ],
    teach: [
      'Separate shape quality from texture quality.',
      'Preserve backup credits.',
    ],
    demos: [
      {
        id: 'v05',
        title: 'Image-to-3D in Meshy',
        durationSec: [60, 90],
        status: 'planned',
        posterAlt: 'Meshy conversion and orbit',
      },
      {
        id: 'v06',
        title: 'The equivalent workflow in Tripo',
        durationSec: [60, 90],
        status: 'planned',
        posterAlt: 'Tripo conversion and orbit',
      },
    ],
    externalRefs: [
      {
        title: 'Meshy export formats',
        url: 'https://docs.meshy.ai/en/webapp/guides/platform/export-formats',
        source: 'Meshy',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
      {
        title: 'Tripo official tutorial center',
        url: 'https://www.tripo3d.ai/tutorials',
        source: 'Tripo',
        lastReviewed: LAST_REVIEWED,
        kind: 'guide',
      },
    ],
    documentation: ['Mesh-generation log: tool, generation ID, settings, credit source, exports'],
    tips: ['A beautiful texture does not fix a broken underside.'],
    troubleshooting: ['If conversion stalls, continue with the facilitator example pack rather than waiting the whole module.'],
  },
  {
    id: 4,
    phase: 'Read the Mesh',
    header: 'INSPECT BEFORE YOU REPAIR',
    subhead: 'A mesh can look complete and still fail as an object.',
    objective: 'Triage the conversion without turning the workshop into a full modeling course.',
    input: 'Original 3D conversion',
    tools: ['Tool viewer', 'Bambu Studio preview', 'Optional Blender inspection'],
    timeboxMin: 25,
    output: 'Green/amber/coral triage decision',
    passCheck: 'Participant can name the failure and choose continue, repair, or regenerate',
    guidedTasks: [
      'Run the five-point inspection.',
      'Assign green / amber / coral.',
      'If amber, open Repair Clinic; if coral, regenerate.',
    ],
    teach: [
      'Silhouette — does the object read from multiple angles?',
      'Continuity — are main masses connected?',
      'Base — can the object contact a plate or supports safely?',
      'Thickness — will narrow details survive at the chosen scale?',
      'Surface — holes, spikes, shells, or internal fragments?',
    ],
    demos: [
      {
        id: 'v07',
        title: 'Five mesh checks in one orbit',
        durationSec: [75, 90],
        status: 'planned',
        posterAlt: 'Front, back, and underside mesh inspection',
      },
    ],
    externalRefs: [
      {
        title: 'Blender 3D Print Toolbox',
        url: 'https://docs.blender.org/manual/en/latest/addons/mesh/3d_print_toolbox.html',
        source: 'Blender',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
    ],
    documentation: ['Printable mesh-inspection card'],
    tips: ['Natural break window sits here while generations finish.'],
    troubleshooting: ['Do not spend the class sculpting missing anatomy — regenerate instead.'],
    qualityLabels: {
      green: 'Slice — structurally coherent; proceed',
      amber: 'Clinic — one or two repairable issues',
      coral: 'Regenerate — missing body, unusable rear, extreme fragmentation',
    },
  },
  {
    id: 5,
    phase: 'Repair Only What Matters',
    header: 'OPTIONAL MESH REPAIR CLINIC',
    subhead: 'Fix the obstacle. Preserve the participant’s concept.',
    objective: 'Repair bounded, production-relevant mesh problems without making Blender a required path.',
    input: 'Amber-triage mesh',
    tools: ['Blender 3D Print Toolbox', 'Basic mesh cleanup'],
    timeboxMin: 40,
    output: 'Versioned repaired STL',
    passCheck: 'Repair is watertight enough to slice, keeps the concept, and does not introduce fragile geometry',
    guidedTasks: [
      'Recalculate normals; delete loose geometry; fill bounded holes.',
      'Make manifold when appropriate; apply scale.',
      'Join a separated main mass only when obvious.',
      'Export repaired_v01.stl — never overwrite the original.',
    ],
    demos: [
      {
        id: 'v08',
        title: 'Minimum viable mesh repair in Blender',
        durationSec: [90, 90],
        status: 'planned',
        posterAlt: 'Before and after bounded mesh repair',
      },
    ],
    externalRefs: [
      {
        title: 'Blender mesh cleanup',
        url: 'https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/cleanup.html',
        source: 'Blender',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
    ],
    documentation: ['Clinic decision tree', 'Repaired-file naming convention'],
    tips: ['Stop rule: if repair becomes redesign, return to image/conversion.'],
    troubleshooting: ['Participants on green path skip this module and continue to gravity.'],
  },
  {
    id: 6,
    phase: 'Place It in Gravity',
    header: 'SIZE, ORIENT, SUPPORT',
    subhead: 'The object meets gravity before it meets the printer.',
    objective: 'Choose production tier, establish real scale, orient the model, and assign a support rating.',
    input: 'Green or repaired mesh',
    tools: ['Bambu Studio'],
    timeboxMin: 50,
    output: 'Positioned model with tier, dimensions, orientation, and support plan',
    passCheck: 'Stable plate relationship, realistic fine-detail thickness, acceptable support removal',
    guidedTasks: [
      'Select printer/plate/nozzle profiles (pending Moonlighter validation).',
      'Confirm unit scale; choose Miniature or Sculpture.',
      'Orient for stability and visible-surface quality.',
      'Add automatic supports; record Low/Moderate/High rating.',
    ],
    demos: [
      {
        id: 'v09',
        title: 'Scale and orient before supports',
        durationSec: [60, 75],
        status: 'planned',
        posterAlt: 'Model scaled beside a ruler on a build plate',
      },
      {
        id: 'v10',
        title: 'Automatic supports and what they cost',
        durationSec: [60, 90],
        status: 'planned',
        posterAlt: 'Support scaffolding comparison',
      },
    ],
    externalRefs: [
      {
        title: 'Bambu Studio Support guide',
        url: 'https://wiki.bambulab.com/en/software/bambu-studio/support',
        source: 'Bambu Lab',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
    ],
    documentation: ['Orientation/support comparison sheet', 'Removal-safety note'],
    tips: ['Orientation can reduce support but damage the visible surface — teach the tradeoff.'],
    troubleshooting: ['High-support sculptures need instructor review before queue.'],
  },
  {
    id: 7,
    phase: 'Slice the Decision',
    header: 'TURN GEOMETRY INTO TIME',
    subhead: 'Slicing reveals what the object actually asks of the machine.',
    objective: 'Generate a printer-ready project, review every layer, and classify its production time.',
    input: 'Positioned and supported model',
    tools: ['Bambu Studio'],
    timeboxMin: 45,
    output: 'Saved project + sliced 3MF + screenshots of estimate and preview',
    passCheck: 'No empty layers, unsupported islands, impossible time, or wrong printer/material profile',
    guidedTasks: [
      'Record printer, nozzle, plate, PLA, layer height, infill, walls, supports.',
      'Classify Quick / Standard / Extended.',
      'Check first layer, islands, thin extremities, seams, final layer.',
      'Screenshot estimate and preview into 06_bambu_project/.',
    ],
    demos: [
      {
        id: 'v11',
        title: 'Read the slicer preview, not just the estimate',
        durationSec: [90, 90],
        status: 'planned',
        posterAlt: 'Sliced layers with walls, infill, and supports',
      },
    ],
    externalRefs: [
      {
        title: 'Bambu Lab PLA Usage Guide',
        url: 'https://wiki.bambulab.com/en/filament/pla',
        source: 'Bambu Lab',
        lastReviewed: LAST_REVIEWED,
        kind: 'docs',
      },
    ],
    documentation: ['Slice-review checklist', 'Screenshot requirements'],
    tips: ['Do not present generic defaults as Moonlighter-approved until the fleet is tested.'],
    troubleshooting: ['Extended prints: resize, reorient, or queue — do not force an in-class launch.'],
  },
  {
    id: 8,
    phase: 'Pass the Gate',
    header: 'READY IS A SHARED DECISION',
    subhead: 'Approval connects authorship to responsible machine use.',
    objective: 'Review the final project with the instructor and assign an in-class printer or post-class queue position.',
    input: 'Sliced project and handoff draft',
    tools: ['Facilitator dashboard', 'Bambu Studio', 'Printer station'],
    timeboxMin: 35,
    output: 'Approval status, printer assignment, and first print attempt record',
    passCheck: 'All production fields complete; participant understands pickup and recovery policy',
    guidedTasks: [
      'Mark ready for review.',
      'Acknowledge Print Attempt & Recovery policy.',
      'Receive approved/in-class or approved/queued status.',
      'Do not operate printers without instructor/Moonlighter control.',
    ],
    demos: [
      {
        id: 'v12',
        title: 'Submit, approve, launch, or queue',
        durationSec: [60, 60],
        status: 'planned',
        posterAlt: 'Approval gate and printer assignment',
      },
    ],
    externalRefs: [],
    documentation: ['Digital production handoff card', 'Printer launch checklist'],
    tips: ['Printer submission, approval, and operation remain instructor/Moonlighter controlled.'],
    troubleshooting: ['Needs work always includes one named next action.'],
  },
  {
    id: 9,
    phase: 'Archive and Continue',
    header: 'KEEP THE METHOD, NOT JUST THE OBJECT',
    subhead: 'Your archive should let you understand or remake the work later.',
    objective: 'Package every source and production file, review the process, and leave with a continuation path.',
    input: 'Complete project folder and queue record',
    tools: ['Workshop site', 'File manager', 'Optional cloud storage'],
    timeboxMin: 25,
    output: 'Downloadable project archive and pickup/reprint record',
    passCheck: 'All required files exist, open, and use consistent names',
    guidedTasks: [
      'Run the archive checklist.',
      'Mark unavailable files as not produced rather than leaving gaps.',
      'Confirm pickup/reprint status.',
      'Review next-steps and optional additional-print booking.',
    ],
    demos: [
      {
        id: 'v13',
        title: 'Package a project another person can reproduce',
        durationSec: [60, 75],
        status: 'planned',
        posterAlt: 'Organized project archive beside finished print',
      },
    ],
    externalRefs: [],
    documentation: ['Archive checklist', 'Next-steps page', 'Optional additional-print booking link'],
    tips: ['Naming rule: lastname_firstname_subject_stage_v01.ext; approved files get _APPROVED.'],
    troubleshooting: ['Filename alone is not authorization to operate a printer.'],
  },
]

export function getModule(id: number): CurriculumModule | undefined {
  return moonlighterModules.find((m) => m.id === id)
}

export function getModuleIds(): number[] {
  return moonlighterModules.map((m) => m.id)
}

export const workshopPromise = {
  title: 'From Image to Object: AI-Assisted 3D Printing',
  short:
    'An advanced follow-on to Moonlighter’s Basic 3D Printing class: reference + prompt → generated image → mesh → validation → optional repair → slice → approved print or queue.',
  outcomes: [
    'A clear concept derived from their own reference and prompt',
    'A selected AI-generated source image',
    'An original exported 3D conversion',
    'A validated or repaired printable mesh',
    'A scaled and sliced Bambu Studio project',
    'A complete set of source and production files',
    'One approved print attempt, launched during class when possible or entered into the post-workshop queue',
  ],
  instructorStatement:
    'Moises Sanabria is a Miami-based interdisciplinary artist whose practice connects artificial intelligence, digital fabrication, participatory systems, and contemporary art. His teaching translates emerging tools into structured, artist-centered workflows that participants can understand, document, and continue using after a workshop. For Moonlighter, he guides participants through the complete path from visual reference and AI-assisted concept development to mesh review, slicing, production approval, and a durable take-home archive.',
  artistInfrastructureHref: '/artist-infrastructure',
  pipeline: ['Reference', 'Image', 'Mesh', 'Print'] as const,
}
