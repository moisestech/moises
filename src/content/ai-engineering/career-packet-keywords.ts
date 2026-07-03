export type CareerPacketKeyword = {
  term: string;
  label?: string;
  description?: string;
};

export const careerPacketKeywordLibrary: Record<string, CareerPacketKeyword> = {
  'Claude Code': {
    term: 'Claude Code',
    label: 'Agentic coding',
    description: 'Agentic development environment for rapid prototyping, workflow automation, and production AI builds.',
  },
  'full-stack AI systems': {
    term: 'full-stack AI systems',
    label: 'Stack',
    description: 'End-to-end systems spanning LLM workflows, APIs, databases, automations, and deployable product interfaces.',
  },
  'agentic workflows': {
    term: 'agentic workflows',
    label: 'Workflows',
    description: 'Multi-step AI systems with tooling, routing logic, and human-in-the-loop decision points.',
  },
  'solo builder': {
    term: 'solo builder',
    label: 'Delivery mode',
    description: 'Scopes ambiguous work, cuts v1 scope, and ships prototypes without a large engineering team.',
  },
  Airtable: {
    term: 'Airtable',
    label: 'Operations layer',
    description: 'CRM-style operating systems, recruiter graphs, and decision workflows built on structured tables.',
  },
  n8n: {
    term: 'n8n',
    label: 'Automation',
    description: 'Orchestration for Gmail routing, webhooks, labels, and cross-system workflow automation.',
  },
  Supabase: {
    term: 'Supabase',
    label: 'Data layer',
    description: 'Auth, Postgres-backed app data, and full-stack prototypes deployed alongside Next.js front ends.',
  },
  'Next.js': {
    term: 'Next.js',
    label: 'Product UI',
    description: 'Production web interfaces for AI products, recruiter hubs, and institution-facing tools.',
  },
  TypeScript: {
    term: 'TypeScript',
    label: 'Engineering',
    description: 'Typed application code across product surfaces, APIs, and integration layers.',
  },
  GitHub: {
    term: 'GitHub',
    label: 'Engineering history',
    description: 'Versioned code, documentation, and shipped project history at github.com/moisestech.',
  },
  'production-ready prototypes': {
    term: 'production-ready prototypes',
    label: 'Delivery',
    description: 'Working v1 systems stakeholders can test — not slide decks or disconnected demos.',
  },
  'non-technical stakeholders': {
    term: 'non-technical stakeholders',
    label: 'Communication',
    description: 'Clear scoping, workflow mapping, and handoff with program leads, recruiters, and operators.',
  },
  'LLM workflows': {
    term: 'LLM workflows',
    label: 'AI systems',
    description: 'Structured prompts, tool use, routing, and production-facing model integrations.',
  },
  'automation systems': {
    term: 'automation systems',
    label: 'Ops',
    description: 'n8n, webhooks, Gmail routing, and cross-app orchestration for real organizations.',
  },
  'stakeholder-facing technical infrastructure': {
    term: 'stakeholder-facing technical infrastructure',
    label: 'Delivery',
    description: 'Systems non-technical partners can operate — not engineering-only backends.',
  },
  Claude: {
    term: 'Claude',
    label: 'Anthropic',
    description: 'Claude Code, Claude Desktop, and agentic build workflows for rapid prototyping.',
  },
  OpenAI: {
    term: 'OpenAI',
    label: 'LLM',
    description: 'Production AI prototypes, structured outputs, and automation integrations.',
  },
  'agentic tools': {
    term: 'agentic tools',
    label: 'Tooling',
    description: 'Multi-step AI systems with memory, routing, and human-in-the-loop checkpoints.',
  },
  'Claude/OpenAI workflows': {
    term: 'Claude/OpenAI workflows',
    label: 'Stack',
    description: 'Dual-vendor LLM workflows across prototyping, automation, and product surfaces.',
  },
};

export const careerPacketSectionHighlights: Record<string, (string | CareerPacketKeyword)[]> = {
  hero: [
    'full-stack AI systems',
    'LLM workflows',
    'automation systems',
    'stakeholder-facing technical infrastructure',
  ],
  links: ['Claude Code', 'Next.js', 'TypeScript', 'Supabase', 'Airtable', 'n8n', 'agentic workflows', 'solo builder'],
  fit: ['Claude', 'OpenAI', 'Next.js', 'Supabase', 'Airtable', 'n8n', 'GitHub'],
  materials: [
    'Claude/OpenAI workflows',
    'Next.js',
    'TypeScript',
    'Supabase',
    'Airtable',
    'n8n',
    'agentic tools',
    'solo builder',
  ],
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function normalizeCareerPacketHighlights(highlights: (string | CareerPacketKeyword)[]): CareerPacketKeyword[] {
  return highlights.map((item) => {
    if (typeof item === 'string') {
      const key = Object.keys(careerPacketKeywordLibrary).find((k) => k.toLowerCase() === item.toLowerCase());
      return key
        ? careerPacketKeywordLibrary[key]
        : { term: item, description: undefined };
    }
    return item.description
      ? item
      : (careerPacketKeywordLibrary[item.term.toLowerCase()] ??
          careerPacketKeywordLibrary[
            Object.keys(careerPacketKeywordLibrary).find((k) => k.toLowerCase() === item.term.toLowerCase()) ?? ''
          ] ??
          item);
  });
}

export function resolveCareerPacketKeyword(term: string): CareerPacketKeyword {
  const key = Object.keys(careerPacketKeywordLibrary).find((k) => k.toLowerCase() === term.toLowerCase());
  return key ? careerPacketKeywordLibrary[key] : { term };
}

/** Bold the leading stack phrase in role-fit bullets. */
export function fitItemHighlights(item: string): CareerPacketKeyword[] {
  const [lead] = item.split('—');
  if (!lead?.trim()) return [];
  const term = lead.trim();
  return [{ term, description: item }];
}

export function splitTextByHighlights(text: string, highlights: CareerPacketKeyword[]) {
  if (!highlights.length) return [{ text, keyword: null as CareerPacketKeyword | null }];

  const sorted = [...highlights].sort((a, b) => b.term.length - a.term.length);
  const pattern = new RegExp(`(${sorted.map((k) => escapeRegExp(k.term)).join('|')})`, 'gi');
  const segments = text.split(pattern).filter(Boolean);

  return segments.map((segment) => {
    const match = sorted.find((k) => segment.toLowerCase() === k.term.toLowerCase());
    return { text: segment, keyword: match ?? null };
  });
}
