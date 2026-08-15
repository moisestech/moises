/**
 * Flagship-aware evidence registry (v2).
 * Opportunity dossiers reorder the same proofs via rankEvidenceForRole —
 * do not hardcode competing case-study objects per employer page.
 *
 * Slim card consumers stay on `projects.ts`. This module is the hiring spine.
 */

export type EvidenceStatus = 'live' | 'building' | 'planned';

export type EvidenceStrength = {
  technicalDepth: number;
  productionReality: number;
  clientRelevance: number;
  visualImpact: number;
  aiRelevance: number;
  creativeRelevance: number;
  dataRelevance: number;
};

export type FlagshipEvidenceId =
  | 'agentic-ops'
  | 'forward-deployed'
  | 'creative-ai'
  | 'smart-signs'
  | 'oolite-digilab'
  | 'lore-machine'
  | 'n8n-gmail-intelligence'
  | 'bookleggers-commerce-automation'
  | 'comfyui-provenance'
  | 'ai24'
  | 'multimodal-image-systems'
  | 'artlikes'
  | 'monica-client';

export type RoleFamilyKey =
  | 'ai-engineer'
  | 'forward-deployed-engineer'
  | 'ai-solutions-architect'
  | 'creative'
  | 'creative-technologist'
  | 'solutions-engineer'
  | 'security-adjacent';

export type FlagshipEvidence = {
  id: FlagshipEvidenceId;
  title: string;
  subtitle: string;
  summary: string;
  href: string;
  repoUrl?: string;
  imageSrc: string;
  imageAlt: string;
  categories: string[];
  skills: string[];
  roles: RoleFamilyKey[];
  strength: EvidenceStrength;
  status: EvidenceStatus;
  /** Hub flagships vs nested cases */
  kind: 'flagship' | 'case';
  parentFlagship?: FlagshipEvidenceId;
  /** Planned slots must never appear as shipped proof */
  claimable: boolean;
};

const clampDim = (n: number) => Math.max(1, Math.min(5, Math.round(n)));

const strength = (partial: EvidenceStrength): EvidenceStrength => ({
  technicalDepth: clampDim(partial.technicalDepth),
  productionReality: clampDim(partial.productionReality),
  clientRelevance: clampDim(partial.clientRelevance),
  visualImpact: clampDim(partial.visualImpact),
  aiRelevance: clampDim(partial.aiRelevance),
  creativeRelevance: clampDim(partial.creativeRelevance),
  dataRelevance: clampDim(partial.dataRelevance),
});

export const flagshipEvidence: Record<FlagshipEvidenceId, FlagshipEvidence> = {
  'agentic-ops': {
    id: 'agentic-ops',
    title: 'Agentic Ops',
    subtitle: 'Auditable multi-tool agent runtime for organizational workflows',
    summary:
      'Planner → tools → state → retrieval → synthesis → human approval → execute. MCP, RAG, evals, and HITL in one public engineering flagship (Building until demo + evals are live).',
    href: '/projects/agentic-ops',
    repoUrl: 'https://github.com/moisestech/agentic-ops',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
    imageAlt: 'Agentic Ops — multi-tool agent runtime concept',
    categories: ['ai-engineering', 'agents', 'mcp', 'rag', 'forward-deployed'],
    skills: [
      'python',
      'typescript',
      'fastapi',
      'nextjs',
      'postgres',
      'pgvector',
      'docker',
      'mcp',
      'evals',
    ],
    roles: ['ai-engineer', 'forward-deployed-engineer', 'solutions-engineer', 'security-adjacent'],
    strength: strength({
      technicalDepth: 5,
      productionReality: 2,
      clientRelevance: 4,
      visualImpact: 3,
      aiRelevance: 5,
      creativeRelevance: 2,
      dataRelevance: 4,
    }),
    status: 'building',
    kind: 'flagship',
    claimable: false,
  },
  'forward-deployed': {
    id: 'forward-deployed',
    title: 'Forward-Deployed Systems',
    subtitle: 'From ambiguous organizational problems to deployed technical systems',
    summary:
      'Lifecycle proof: discover → map → prototype → deploy → enable → measure → iterate across Digilab, SmartSigns, and production automations.',
    href: '/forward-deployed',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786744384/jobs/banners/forward-deployed-systems-banner_brf4sa.png',
    imageAlt: 'Forward-Deployed Systems — from organizational problems to deployed technical systems',
    categories: ['forward-deployed', 'deployment', 'stakeholders'],
    skills: ['discovery', 'prototyping', 'deployment', 'enablement', 'hardware'],
    roles: ['forward-deployed-engineer', 'solutions-engineer', 'creative-technologist'],
    strength: strength({
      technicalDepth: 3,
      productionReality: 5,
      clientRelevance: 5,
      visualImpact: 4,
      aiRelevance: 3,
      creativeRelevance: 3,
      dataRelevance: 2,
    }),
    status: 'live',
    kind: 'flagship',
    claimable: true,
  },
  'creative-ai': {
    id: 'creative-ai',
    title: 'Creative AI',
    subtitle: 'AI as production medium, interface system, and creative infrastructure',
    summary:
      'Shipped creative systems across direction, generative production pipelines, and software interfaces — Lore, ComfyUI provenance, Digilab, multimodal workflows, AI24.',
    href: '/creative-ai',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780253940/resume/resume-images/lore-machine-home-page_wra1x2.png',
    imageAlt: 'Creative AI — Lore Machine generative storytelling product',
    categories: ['creative-ai', 'generative-media', 'interfaces'],
    skills: ['comfyui', 'prompt-ops', 'nextjs', 'generative-pipelines', 'creative-direction'],
    roles: ['creative', 'creative-technologist', 'ai-engineer'],
    strength: strength({
      technicalDepth: 4,
      productionReality: 4,
      clientRelevance: 3,
      visualImpact: 5,
      aiRelevance: 5,
      creativeRelevance: 5,
      dataRelevance: 2,
    }),
    status: 'live',
    kind: 'flagship',
    claimable: true,
  },
  'smart-signs': {
    id: 'smart-signs',
    title: 'Bakehouse SmartSigns',
    subtitle: 'Physical display systems for institutional environments',
    summary:
      'Raspberry Pi / Anthias kiosk infrastructure, content workflows, and venue deployment at Bakehouse Art Complex.',
    href: '/services/smartsign',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
    imageAlt: 'SmartSign institutional display systems',
    categories: ['forward-deployed', 'hardware', 'deployment'],
    skills: ['raspberry-pi', 'linux', 'cms', 'networking', 'training'],
    roles: ['forward-deployed-engineer', 'creative-technologist', 'solutions-engineer'],
    strength: strength({
      technicalDepth: 4,
      productionReality: 4,
      clientRelevance: 5,
      visualImpact: 3,
      aiRelevance: 1,
      creativeRelevance: 2,
      dataRelevance: 2,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'forward-deployed',
    claimable: true,
  },
  'oolite-digilab': {
    id: 'oolite-digilab',
    title: 'Oolite Digital Lab',
    subtitle: 'Creative technology program infrastructure',
    summary:
      'Technical direction for a public digital lab: space, tools, curriculum, documentation, and artist enablement.',
    href: '/oolite-arts',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781710428/oolite-arts/oolite-arts-computer-vision-digilab-room-upscale-cyan-1030x579_whqmlg.webp',
    imageAlt: 'Oolite Arts Digital Lab workspace',
    categories: ['forward-deployed', 'creative-tech', 'institutions'],
    skills: ['curriculum', 'fabrication', 'enablement', 'systems'],
    roles: ['creative-technologist', 'forward-deployed-engineer', 'creative'],
    strength: strength({
      technicalDepth: 3,
      productionReality: 5,
      clientRelevance: 5,
      visualImpact: 5,
      aiRelevance: 3,
      creativeRelevance: 4,
      dataRelevance: 1,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'forward-deployed',
    claimable: true,
  },
  'lore-machine': {
    id: 'lore-machine',
    title: 'Lore Machine',
    subtitle: 'AI narrative-to-media product',
    summary:
      'Founding engineer / Chief Prompt Officer on a production creative AI platform — prompts, multimodal pipelines, Next.js delivery.',
    href: '/projects/lore-machine',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780253940/resume/resume-images/lore-machine-home-page_wra1x2.png',
    imageAlt: 'Lore Machine product home page',
    categories: ['creative-ai', 'ai-engineering', 'product'],
    skills: ['typescript', 'nextjs', 'llms', 'stable-diffusion', 'prompt-ops'],
    roles: ['ai-engineer', 'creative-technologist', 'forward-deployed-engineer'],
    strength: strength({
      technicalDepth: 4,
      productionReality: 4,
      clientRelevance: 3,
      visualImpact: 4,
      aiRelevance: 5,
      creativeRelevance: 5,
      dataRelevance: 2,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'creative-ai',
    claimable: true,
  },
  'n8n-gmail-intelligence': {
    id: 'n8n-gmail-intelligence',
    title: 'n8n Gmail Intelligence',
    subtitle: 'Production AI Agent classification + Airtable sync',
    summary:
      'Live organizational automation: Gmail → AI Agent labels → Airtable. Artifact screenshots still deepening.',
    href: '/ai-engineering#proof',
    imageSrc: '/images/tech-logos/n8n-logo.png',
    imageAlt: 'n8n automation',
    categories: ['forward-deployed', 'automation', 'agents'],
    skills: ['n8n', 'airtable', 'gmail', 'agents'],
    roles: ['forward-deployed-engineer', 'ai-engineer', 'solutions-engineer'],
    strength: strength({
      technicalDepth: 3,
      productionReality: 4,
      clientRelevance: 4,
      visualImpact: 2,
      aiRelevance: 4,
      creativeRelevance: 1,
      dataRelevance: 3,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'forward-deployed',
    claimable: true,
  },
  'bookleggers-commerce-automation': {
    id: 'bookleggers-commerce-automation',
    title: 'Bookleggers Commerce Automation',
    subtitle: 'Make + Square + Airtable ops sync',
    summary: 'Client-facing commerce automation for a nonprofit library — live sync workflows.',
    href: '/ai-engineering#proof',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
    imageAlt: 'Bookleggers commerce automation',
    categories: ['forward-deployed', 'automation', 'integrations'],
    skills: ['make', 'square', 'airtable', 'ops'],
    roles: ['forward-deployed-engineer', 'solutions-engineer'],
    strength: strength({
      technicalDepth: 3,
      productionReality: 4,
      clientRelevance: 5,
      visualImpact: 2,
      aiRelevance: 2,
      creativeRelevance: 1,
      dataRelevance: 3,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'forward-deployed',
    claimable: true,
  },
  'comfyui-provenance': {
    id: 'comfyui-provenance',
    title: 'ComfyUI Output Provenance',
    subtitle: 'Verifiable generative media engineering',
    summary:
      'GitHub + live demo + CI/docs — strongest public creative-tech engineering artifact.',
    href: 'https://comfyui-output-provenance.vercel.app',
    repoUrl: 'https://github.com/moisestech/comfyui-output-provenance',
    imageSrc:
      'https://raw.githubusercontent.com/moisestech/comfyui-output-provenance/main/docs/assets/readme-hero.svg',
    imageAlt: 'ComfyUI Output Provenance Explorer',
    categories: ['creative-ai', 'ai-engineering', 'generative-media'],
    skills: ['comfyui', 'typescript', 'ci', 'provenance'],
    roles: ['ai-engineer', 'creative-technologist', 'creative'],
    strength: strength({
      technicalDepth: 5,
      productionReality: 4,
      clientRelevance: 2,
      visualImpact: 4,
      aiRelevance: 5,
      creativeRelevance: 5,
      dataRelevance: 2,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'creative-ai',
    claimable: true,
  },
  ai24: {
    id: 'ai24',
    title: 'AI24',
    subtitle: 'AI education, tools, and cultural R&D',
    summary:
      'Studio infrastructure for AI literacy, workshops, and applied creative-technology programs.',
    href: '/ai24',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
    imageAlt: 'AI24 studio hub',
    categories: ['creative-ai', 'education', 'infrastructure'],
    skills: ['education', 'lms', 'automation', 'genai'],
    roles: ['creative-technologist', 'creative', 'forward-deployed-engineer'],
    strength: strength({
      technicalDepth: 3,
      productionReality: 4,
      clientRelevance: 3,
      visualImpact: 4,
      aiRelevance: 4,
      creativeRelevance: 4,
      dataRelevance: 2,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'creative-ai',
    claimable: true,
  },
  'multimodal-image-systems': {
    id: 'multimodal-image-systems',
    title: 'Multimodal generative image workflows',
    subtitle: 'Pose control, consistency, ComfyUI research',
    summary:
      'Practice-based generative pipelines: ControlNet, character consistency, dataset quality, prompt control.',
    href: '/art/beyond_money',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1752671997/art/moisestech-website/artworks/2021_beyond_money/moises-sanabria-beyond-money-1_2021_deslxp.png',
    imageAlt:
      'Beyond Money — landscape still from GAN banknote model (generative image workflow)',
    categories: ['creative-ai', 'generative-media'],
    skills: ['stable-diffusion', 'comfyui', 'controlnet', 'gans'],
    roles: ['creative-technologist', 'creative', 'ai-engineer'],
    strength: strength({
      technicalDepth: 4,
      productionReality: 3,
      clientRelevance: 2,
      visualImpact: 5,
      aiRelevance: 5,
      creativeRelevance: 5,
      dataRelevance: 2,
    }),
    status: 'live',
    kind: 'case',
    parentFlagship: 'creative-ai',
    claimable: true,
  },
  artlikes: {
    id: 'artlikes',
    title: 'ArtLikes',
    subtitle: 'Reserved — future creative product case',
    summary: 'Planned slot only. Not claimed as shipped proof.',
    href: '/creative-ai#future-cases',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780253940/resume/resume-images/lore-machine-home-page_wra1x2.png',
    imageAlt: 'Reserved future Creative AI case',
    categories: ['creative-ai'],
    skills: [],
    roles: ['creative', 'creative-technologist'],
    strength: strength({
      technicalDepth: 1,
      productionReality: 1,
      clientRelevance: 1,
      visualImpact: 1,
      aiRelevance: 1,
      creativeRelevance: 1,
      dataRelevance: 1,
    }),
    status: 'planned',
    kind: 'case',
    parentFlagship: 'creative-ai',
    claimable: false,
  },
  'monica-client': {
    id: 'monica-client',
    title: 'Client production case',
    subtitle: 'Reserved — future client Creative AI delivery',
    summary: 'Planned slot only. Not claimed as shipped proof.',
    href: '/creative-ai#future-cases',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780253940/resume/resume-images/lore-machine-home-page_wra1x2.png',
    imageAlt: 'Reserved future client Creative AI case',
    categories: ['creative-ai', 'client'],
    skills: [],
    roles: ['creative', 'creative-technologist'],
    strength: strength({
      technicalDepth: 1,
      productionReality: 1,
      clientRelevance: 1,
      visualImpact: 1,
      aiRelevance: 1,
      creativeRelevance: 1,
      dataRelevance: 1,
    }),
    status: 'planned',
    kind: 'case',
    parentFlagship: 'creative-ai',
    claimable: false,
  },
};

/** Default dim weights per role family for automatic ranking. */
export const roleFamilyDimWeights: Record<
  RoleFamilyKey,
  Partial<Record<keyof EvidenceStrength, number>>
> = {
  'ai-engineer': {
    technicalDepth: 1.4,
    aiRelevance: 1.4,
    productionReality: 1.1,
    dataRelevance: 1.0,
  },
  'forward-deployed-engineer': {
    productionReality: 1.4,
    clientRelevance: 1.4,
    technicalDepth: 1.1,
    aiRelevance: 1.0,
  },
  'ai-solutions-architect': {
    technicalDepth: 1.2,
    clientRelevance: 1.3,
    aiRelevance: 1.2,
    productionReality: 1.1,
  },
  creative: {
    creativeRelevance: 1.5,
    visualImpact: 1.4,
    clientRelevance: 1.2,
    aiRelevance: 1.1,
  },
  'creative-technologist': {
    creativeRelevance: 1.3,
    technicalDepth: 1.2,
    visualImpact: 1.2,
    productionReality: 1.1,
    aiRelevance: 1.1,
  },
  'solutions-engineer': {
    clientRelevance: 1.4,
    productionReality: 1.3,
    technicalDepth: 1.1,
  },
  'security-adjacent': {
    technicalDepth: 1.4,
    productionReality: 1.2,
    aiRelevance: 1.1,
    dataRelevance: 1.0,
  },
};

/** Preset opportunity weight recipes from the three-flagship plan. */
export const opportunityEvidenceRecipes: Record<
  string,
  { id: FlagshipEvidenceId; weight: number }[]
> = {
  corestory: [
    { id: 'agentic-ops', weight: 1 },
    { id: 'lore-machine', weight: 0.85 },
    { id: 'forward-deployed', weight: 0.7 },
  ],
  'wpp-hex': [
    { id: 'creative-ai', weight: 1 },
    { id: 'forward-deployed', weight: 0.8 },
    { id: 'agentic-ops', weight: 0.55 },
  ],
  unit8: [
    { id: 'agentic-ops', weight: 1 },
    { id: 'forward-deployed', weight: 0.85 },
    { id: 'smart-signs', weight: 0.7 },
  ],
  okta: [
    { id: 'agentic-ops', weight: 1 },
    { id: 'forward-deployed', weight: 0.75 },
  ],
  'forward-deployed-default': [
    { id: 'forward-deployed', weight: 1 },
    { id: 'smart-signs', weight: 0.9 },
    { id: 'n8n-gmail-intelligence', weight: 0.75 },
    { id: 'agentic-ops', weight: 0.65 },
  ],
};

export type RankedEvidence = FlagshipEvidence & {
  score: number;
  tier: 'primary' | 'secondary' | 'supporting';
};

function scoreEvidence(
  item: FlagshipEvidence,
  dimWeights: Partial<Record<keyof EvidenceStrength, number>>,
  explicitWeight = 1,
): number {
  let sum = 0;
  let weightSum = 0;
  (Object.keys(item.strength) as (keyof EvidenceStrength)[]).forEach((key) => {
    const w = dimWeights[key] ?? 0.6;
    sum += item.strength[key] * w;
    weightSum += w;
  });
  const base = weightSum > 0 ? sum / weightSum : 0;
  return base * explicitWeight;
}

/**
 * Rank claimable evidence for a role family (or custom dim weights).
 * Building/planned items with claimable=false are excluded unless includeBuilding.
 */
export function rankEvidenceForRole(
  roleOrWeights: RoleFamilyKey | Partial<Record<keyof EvidenceStrength, number>>,
  options?: {
    limit?: number;
    includeBuilding?: boolean;
    onlyIds?: FlagshipEvidenceId[];
    explicitWeights?: { id: FlagshipEvidenceId; weight: number }[];
  },
): RankedEvidence[] {
  const dimWeights =
    typeof roleOrWeights === 'string' ? roleFamilyDimWeights[roleOrWeights] : roleOrWeights;
  const weightById = new Map(
    (options?.explicitWeights ?? []).map((w) => [w.id, w.weight] as const),
  );
  const only = options?.onlyIds ? new Set(options.onlyIds) : null;

  const ranked = Object.values(flagshipEvidence)
    .filter((e) => {
      if (only && !only.has(e.id)) return false;
      if (e.status === 'planned') return false;
      if (!e.claimable && !options?.includeBuilding) return false;
      if (e.status === 'building' && !options?.includeBuilding && !e.claimable) return false;
      return true;
    })
    .map((e) => ({
      ...e,
      score: scoreEvidence(e, dimWeights, weightById.get(e.id) ?? 1),
      tier: 'supporting' as const,
    }))
    .sort((a, b) => b.score - a.score);

  const limit = options?.limit ?? ranked.length;
  return ranked.slice(0, limit).map((e, i) => ({
    ...e,
    tier: i === 0 ? 'primary' : i === 1 ? 'secondary' : 'supporting',
  }));
}

/** Resolve a named opportunity recipe into ranked tiers. */
export function rankEvidenceForOpportunity(
  recipeKey: keyof typeof opportunityEvidenceRecipes,
  options?: { includeBuilding?: boolean },
): RankedEvidence[] {
  const recipe = opportunityEvidenceRecipes[recipeKey];
  if (!recipe) return [];
  const dimWeights: Partial<Record<keyof EvidenceStrength, number>> = {
    technicalDepth: 1,
    productionReality: 1,
    clientRelevance: 1,
    visualImpact: 1,
    aiRelevance: 1,
    creativeRelevance: 1,
    dataRelevance: 1,
  };
  return rankEvidenceForRole(dimWeights, {
    explicitWeights: recipe,
    onlyIds: recipe.map((r) => r.id),
    includeBuilding: options?.includeBuilding ?? true,
    limit: recipe.length,
  });
}

export function getFlagshipEvidence(id: FlagshipEvidenceId): FlagshipEvidence {
  return flagshipEvidence[id];
}

export function listFlagships(status?: EvidenceStatus): FlagshipEvidence[] {
  return Object.values(flagshipEvidence).filter(
    (e) => e.kind === 'flagship' && (status ? e.status === status : true),
  );
}

export function listClaimableCases(parent?: FlagshipEvidenceId): FlagshipEvidence[] {
  return Object.values(flagshipEvidence).filter(
    (e) =>
      e.kind === 'case' &&
      e.claimable &&
      e.status !== 'planned' &&
      (parent ? e.parentFlagship === parent : true),
  );
}

export const THREE_FLAGSHIP_IDS: FlagshipEvidenceId[] = [
  'agentic-ops',
  'forward-deployed',
  'creative-ai',
];
