const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Recruiter snapshot panel art — `jobs/banners/ai-engineer/` */
export const careerPacketSnapshotArt = {
  roleLane: `${CDN}/v1783080928/jobs/banners/ai-engineer/ai-engineer-fullp-stack-ai-engineer_iygugj.png`,
  workModes: `${CDN}/v1783080928/jobs/banners/ai-engineer/ai-engineer-work-modes_y6og9v.png`,
  soloBuilder: `${CDN}/v1783080926/jobs/banners/ai-engineer/ai-engineer-solo-builder_lctxyr.png`,
  miamiRemote: `${CDN}/v1783080925/jobs/banners/ai-engineer/ai-engineer-miami-remote_tlrztu.png`,
  coreStack: `${CDN}/v1783080924/jobs/banners/ai-engineer/ai-engineer-core-stack_ky2fwf.png`,
  artistEngineer: `${CDN}/v1783080924/jobs/banners/ai-engineer/ai-engineer-artist-engineer_gloe4h.png`,
} as const;

/** Role-fit panel art — `jobs/banners/ai-engineer/` numbered skill banners */
export const careerPacketSkillArt = {
  claudeWorkflows: `${CDN}/v1783081914/jobs/banners/ai-engineer/01-claude-openai-workflow_bv2tiu.png`,
  fullStackProduct: `${CDN}/v1783081914/jobs/banners/ai-engineer/02-nextjs-react-typescript-product-interfaces_s8bpk0.png`,
  supabaseStack: `${CDN}/v1783081913/jobs/banners/ai-engineer/03-supabase-backends-auth-data-layer_mrjnbv.png`,
  airtableLifeOs: `${CDN}/v1783081910/jobs/banners/ai-engineer/04-airtable-life-os-crm-decision-workflows_fhkkbz.png`,
  n8nAutomation: `${CDN}/v1783081909/jobs/banners/ai-engineer/05-n8n-gmail-routing-automation_s0bqnx.png`,
  soloDelivery: `${CDN}/v1783081911/jobs/banners/ai-engineer/06-solo-scoping-poc-in-a-week_vanlpi.png`,
  stakeholderComms: `${CDN}/v1783081914/jobs/banners/ai-engineer/07-stakeholder-communication-workflow-map_vguwhl.png`,
  githubEngineering: `${CDN}/v1783081912/jobs/banners/ai-engineer/08-github-engineering-workflow_baeiab.png`,
} as const;

export function resolveCareerPacketIllustration(src: string, local?: boolean) {
  if (!local) return src;
  return src;
}

export type CareerPacketSkillRow = {
  id: string;
  primary: string;
  secondary: string;
  techLogoIds: string[];
  illustration: {
    src: string;
    alt: string;
    local?: boolean;
  };
};

export type CareerPacketSnapshotRow = {
  id: string;
  label: string;
  value: string;
  techLogoIds?: string[];
  illustration: {
    src: string;
    alt: string;
    local?: boolean;
  };
};

export const careerPacketFitRows: CareerPacketSkillRow[] = [
  {
    id: 'claude-openai',
    primary: 'Claude / OpenAI workflows',
    secondary: 'Production AI prototypes, agentic build sessions, and structured LLM outputs',
    techLogoIds: ['anthropic', 'openai'],
    illustration: {
      src: careerPacketSkillArt.claudeWorkflows,
      alt: 'Claude Code and OpenAI workflow systems — agentic AI engineering',
    },
  },
  {
    id: 'nextjs-stack',
    primary: 'Next.js / React / TypeScript',
    secondary: 'AI24, Infra24, product interfaces, and recruiter-facing site systems',
    techLogoIds: ['nextjs', 'react', 'typescript'],
    illustration: {
      src: careerPacketSkillArt.fullStackProduct,
      alt: 'Next.js product interfaces and full-stack AI delivery',
    },
  },
  {
    id: 'supabase',
    primary: 'Supabase',
    secondary: 'App backends, auth/data layer, and full-stack prototypes',
    techLogoIds: ['supabase', 'postgres'],
    illustration: {
      src: careerPacketSkillArt.supabaseStack,
      alt: 'Supabase-backed data layer and full-stack prototypes',
    },
  },
  {
    id: 'airtable',
    primary: 'Airtable',
    secondary: 'Life OS, recruiter graph, operational CRM, and decision-layer workflows',
    techLogoIds: ['airtable'],
    illustration: {
      src: careerPacketSkillArt.airtableLifeOs,
      alt: 'Airtable Life OS and recruiter graph operating system',
    },
  },
  {
    id: 'n8n',
    primary: 'n8n / automation',
    secondary: 'Gmail routing, labels, workflow automation, and system orchestration',
    techLogoIds: ['n8n'],
    illustration: {
      src: careerPacketSkillArt.n8nAutomation,
      alt: 'n8n automation pipelines and workflow orchestration',
    },
  },
  {
    id: 'solo-poc',
    primary: 'Solo scoping and prototype delivery',
    secondary: 'POC in a week — scope cuts, v1 definition, and shipped prototypes',
    techLogoIds: ['vercel', 'github'],
    illustration: {
      src: careerPacketSkillArt.soloDelivery,
      alt: 'Solo builder scoping and rapid prototype delivery',
    },
  },
  {
    id: 'stakeholders',
    primary: 'Non-technical stakeholder communication',
    secondary: 'Workflow mapping, handoff docs, and clear v1 scoping with operators',
    techLogoIds: ['airtable', 'n8n'],
    illustration: {
      src: careerPacketSkillArt.stakeholderComms,
      alt: 'Stakeholder-facing workflow design and communication',
    },
  },
  {
    id: 'github',
    primary: 'GitHub engineering workflow',
    secondary: 'Versioned code, documentation, and shipped engineering history',
    techLogoIds: ['github'],
    illustration: {
      src: careerPacketSkillArt.githubEngineering,
      alt: 'GitHub engineering workflow and shipped systems',
    },
  },
];

export const careerPacketSnapshotRows: CareerPacketSnapshotRow[] = [
  {
    id: 'role-lane',
    label: 'Role lane',
    value: 'Full-Stack AI Engineer / Agentic Systems Builder',
    techLogoIds: ['anthropic', 'openai', 'langgraph'],
    illustration: {
      src: careerPacketSnapshotArt.roleLane,
      alt: 'Full-stack AI engineer and agentic systems builder',
    },
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Miami / Remote',
    illustration: {
      src: careerPacketSnapshotArt.miamiRemote,
      alt: 'Miami-based, remote-friendly engineering',
    },
  },
  {
    id: 'work-modes',
    label: 'Work modes',
    value: 'Contract, W2, full-time, consulting',
    illustration: {
      src: careerPacketSnapshotArt.workModes,
      alt: 'Flexible contract and full-time engagement modes',
    },
  },
  {
    id: 'core-stack',
    label: 'Core stack',
    value: 'Claude, OpenAI, Next.js, React, TypeScript, Supabase, Airtable, n8n, Vercel',
    techLogoIds: ['anthropic', 'openai', 'nextjs', 'typescript', 'supabase', 'airtable', 'n8n', 'vercel'],
    illustration: {
      src: careerPacketSnapshotArt.coreStack,
      alt: 'Core stack — Claude, Next.js, Supabase, Airtable, n8n, and Vercel',
    },
  },
  {
    id: 'strength',
    label: 'Strength',
    value: 'Solo builder who can scope, prototype, and ship',
    techLogoIds: ['vercel', 'github'],
    illustration: {
      src: careerPacketSnapshotArt.soloBuilder,
      alt: 'Solo builder who scopes and ships quickly',
    },
  },
  {
    id: 'differentiator',
    label: 'Differentiator',
    value: 'Artist-engineer with strong stakeholder communication and product judgment',
    illustration: {
      src: careerPacketSnapshotArt.artistEngineer,
      alt: 'Artist-engineer with product judgment and stakeholder communication',
    },
  },
];
