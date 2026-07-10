export type BitmDiagramNode = {
  id: string;
  label: string;
  what: string;
  tools: string;
  failures: string;
  participants: string;
  ethics: string;
};

export const bitmPipelineNodes: BitmDiagramNode[] = [
  {
    id: 'cultural-condition',
    label: 'CULTURAL CONDITION',
    what: 'Observe how platforms, feeds, and interfaces reshape attention and belief.',
    tools: 'Field notes, screenshots, social listening, studio journals.',
    failures: 'Mistaking trend for thesis; over-indexing on novelty.',
    participants: 'Artist, community, online publics.',
    ethics: 'Consent when documenting others; credit sources.',
  },
  {
    id: 'prompt-observation',
    label: 'PROMPT / OBSERVATION',
    what: 'Translate condition into generative proposition or symbolic image.',
    tools: 'Diffusion models, prompt libraries, sketch tools.',
    failures: 'Generic outputs; prompt drift without conceptual anchor.',
    participants: 'Artist as editor of machine hallucination.',
    ethics: 'Training data opacity; stereotype amplification.',
  },
  {
    id: 'generated-proposition',
    label: 'GENERATED PROPOSITION',
    what: 'Machine proposes forms that do not yet exist as objects.',
    tools: 'Image models, 3D previews, compositing.',
    failures: 'Treating image as finished artwork.',
    participants: 'Model, artist, potential fabricators.',
    ethics: 'Disclosure of synthetic origin.',
  },
  {
    id: 'plausibility-audit',
    label: 'PLAUSIBILITY AUDIT',
    what: 'Ask whether the proposition can survive gravity, budget, and institution.',
    tools: 'Spreadsheets, material specs, venue constraints.',
    failures: 'Impossible assemblies; ignored safety codes.',
    participants: 'Artist, fabricators, curators, funders.',
    ethics: 'Public safety; accessibility requirements.',
  },
  {
    id: 'material-test',
    label: 'MATERIAL TEST',
    what: 'Prototype at small scale — resin, print, cable, screen.',
    tools: 'Resin printer, laser cutter, shop tools.',
    failures: 'Warping, failed prints, underestimated cure time.',
    participants: 'Artist hands, workshop assistants.',
    ethics: 'Ventilation, chemical disposal, studio safety.',
  },
  {
    id: 'fabrication',
    label: 'FABRICATION',
    what: 'Build the object with supports, washing, curing, assembly labor.',
    tools: 'Fabrication shop, electronics bench, crating.',
    failures: 'Timeline slip; component obsolescence.',
    participants: 'Fabricators, technicians, artist oversight.',
    ethics: 'Fair compensation for skilled labor.',
  },
  {
    id: 'public-installation',
    label: 'PUBLIC INSTALLATION',
    what: 'Object enters civic or institutional space with permissions and context.',
    tools: 'Install crew, rigging, signage, insurance.',
    failures: 'Venue rejection; weather; theft or vandalism.',
    participants: 'Institution, public, maintenance staff.',
    ethics: 'Audience consent for interactive capture.',
  },
  {
    id: 'documentation',
    label: 'DOCUMENTATION',
    what: 'Archive how the work lived — photos, video, press, teaching.',
    tools: 'Cameras, Cloudinary, grant reports, essays.',
    failures: 'Documentation replaces lived encounter.',
    participants: 'Artist, press, educators.',
    ethics: 'Accurate representation of labor and collaborators.',
  },
  {
    id: 'feedback',
    label: 'MODEL / AUDIENCE FEEDBACK',
    what: 'Audience response feeds next iteration — loop closes.',
    tools: 'Workshops, surveys, social response, maintenance logs.',
    failures: 'Ignoring maintenance signals; metric chasing.',
    participants: 'Public, institution, artist.',
    ethics: 'Who benefits from iteration; data retention.',
  },
];

export type BitmInfrastructureNode = {
  id: string;
  label: string;
  role: string;
};

export const bitmStudioInfrastructureNodes: BitmInfrastructureNode[] = [
  { id: 'artist', label: 'Artist', role: 'Concept, direction, taste, ethical framing.' },
  { id: 'community', label: 'Community', role: 'Workshop participants, local context, feedback.' },
  { id: 'models', label: 'Models', role: 'Generative systems, datasets, inference pipelines.' },
  { id: 'data', label: 'Data', role: 'Training material, archives, documentation.' },
  { id: 'fabrication', label: 'Fabrication', role: 'Print, resin, metal, electronics assembly.' },
  { id: 'institution', label: 'Institution', role: 'Venue, permissions, insurance, public trust.' },
  { id: 'funding', label: 'Funding', role: 'Grants, commissions, residencies, budgets.' },
  { id: 'education', label: 'Education', role: 'Workshops, talks, shared technical literacy.' },
  { id: 'documentation', label: 'Documentation', role: 'Preservation, press, research publication.' },
  { id: 'maintenance', label: 'Maintenance', role: 'Repairs, updates, power, physical care.' },
  { id: 'energy', label: 'Energy', role: 'Electricity, GPU hours, material shipping.' },
  { id: 'distribution', label: 'Distribution', role: 'How work travels — crating, touring, digital reach.' },
];

export const bitmLifecycleSteps = [
  'RESEARCH',
  'PROTOTYPE',
  'PERMISSION',
  'FUNDING',
  'FABRICATION',
  'INSTALLATION',
  'INTERACTION',
  'MAINTENANCE',
  'ARCHIVE',
] as const;

export const bitmVisibleLabor = [
  'Image',
  'Screen',
  'Sculpture',
  'Interactive result',
] as const;

export const bitmInvisibleLabor = [
  'Dataset decisions',
  'Prompting',
  'Code',
  'Electricity',
  'Hardware',
  'Moderation',
  'Repairs',
  'Contracts',
  'Teaching',
  'Documentation',
  'Disposal',
] as const;
