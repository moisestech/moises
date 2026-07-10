export type BitmKeyword = {
  term: string;
  definition: string;
  imageUrl?: string;
};

export const bitmKeywordLibrary: Record<string, BitmKeyword> = {
  infrastructure: {
    term: 'infrastructure',
    definition:
      'The hardware, institutions, budgets, and maintenance that sustain public art beyond the image.',
  },
  studio: {
    term: 'studio',
    definition: 'Production environment where probabilistic images become material objects requiring gravity and cleanup.',
  },
  maintenance: {
    term: 'maintenance',
    definition: 'Ongoing care — repairs, updates, power, moderation — that keeps artwork publicly legible.',
  },
  labor: {
    term: 'labor',
    definition: 'Hidden hours of prompting, fabrication, install, teaching, and documentation behind every visible object.',
  },
  public: {
    term: 'public',
    definition: 'Civic audience and institutional context that give generated images political meaning.',
  },
  machine: {
    term: 'machine',
    definition: 'Models, GPUs, and interfaces that propose forms the artist must audit and materialize.',
  },
  governance: {
    term: 'governance',
    definition: 'Shared decisions about consent, access, funding, and who benefits from AI-mediated culture.',
  },
};

export const bitmThesisHighlights = ['machine', 'infrastructure', 'public', 'labor'] as const;

export const bitmConditionTimeline = [
  { id: 'phone', label: 'Phone', iconKey: 'model' as const },
  { id: 'feed', label: 'Social feed', iconKey: 'dataset' as const },
  { id: 'recommendation', label: 'Recommendation system', iconKey: 'latent-space' as const },
  { id: 'camera', label: 'Camera', iconKey: 'human-machine' as const },
  { id: 'speaker', label: 'Smart speaker', iconKey: 'energy' as const },
  { id: 'generative', label: 'Generative model', iconKey: 'model' as const },
  { id: 'agent', label: 'Agent', iconKey: 'iteration' as const },
  { id: 'display', label: 'Public display', iconKey: 'public-space' as const },
  { id: 'robotic', label: 'Robotic system', iconKey: 'maintenance' as const },
] as const;

export const bitmStudioHotspots = [
  {
    id: 'resin-printer',
    x: 72,
    y: 58,
    label: 'RESIN PRINTER',
    body: 'Turns probabilistic images into objects requiring gravity, supports, washing, curing and physical cleanup.',
  },
  {
    id: 'gpu-rack',
    x: 28,
    y: 42,
    label: 'GPU WORKSTATION',
    body: 'Inference engine for diffusion, segmentation, and real-time installation pipelines — measured in kilowatt-hours.',
  },
  {
    id: 'cable-rack',
    x: 55,
    y: 75,
    label: 'CABLE SYSTEM',
    body: 'Adapters, power, HDMI, USB-C — the umbilical infrastructure between screen, sensor, and sculpture.',
  },
  {
    id: 'maquette',
    x: 38,
    y: 68,
    label: 'MAQUETTE',
    body: 'Small-scale proof before institutional budget commits to full fabrication.',
  },
  {
    id: 'diagram',
    x: 82,
    y: 28,
    label: 'STUDIO DIAGRAM',
    body: 'Taped workflow maps translate machine methodology into teachable studio literacy.',
  },
] as const;

export const bitmEthicsChecklist = [
  { id: 'consent', label: 'Participant consent documented for capture and display', iconKey: 'consent' as const },
  { id: 'disclosure', label: 'Synthetic imagery disclosed in public context', iconKey: 'governance' as const },
  { id: 'labor', label: 'Collaborator and fabricator credit visible', iconKey: 'workshop' as const },
  { id: 'energy', label: 'Compute and material cost acknowledged', iconKey: 'energy' as const },
  { id: 'access', label: 'Installation meets accessibility requirements', iconKey: 'access' as const },
  { id: 'maintenance', label: 'Maintenance plan exists beyond opening night', iconKey: 'maintenance' as const },
] as const;
