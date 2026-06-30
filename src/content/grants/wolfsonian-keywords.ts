import type { WolfsonianKeyword } from '@/content/grants/wolfsonian-fellowship';

export const wolfsonianKeywordLibrary: Record<string, WolfsonianKeyword> = {
  interpret: {
    term: 'interpret',
    description: 'The archive shifts from passive storage to active meaning-making — reading, disputing, and re-reading itself.',
    relatedAgents: ['archivist', 'futurist'],
  },
  'institutional memory': {
    term: 'institutional memory',
    description: 'The accumulated record of what an institution chose to preserve, omit, and reinterpret over time.',
    relatedAgents: ['archivist', 'worker', 'mourner'],
  },
  living: {
    term: 'living',
    description: 'Memory as an ongoing social process rather than a fixed database.',
    relatedAgents: ['worker', 'futurist'],
  },
  progress: {
    term: 'progress',
    description: 'The promise that industrial modernity would deliver a better future through technology and design.',
    relatedPressures: ['aspiration', 'optimism'],
    relatedObjectTypes: ["World's Fair ephemera", 'Trade catalog'],
  },
  productivity: {
    term: 'productivity',
    description: 'Labor and efficiency framed as moral virtues in industrial-era visual culture.',
    relatedPressures: ['discipline'],
    relatedObjectTypes: ['Labor poster', 'Trade catalog'],
  },
  comfort: {
    term: 'comfort',
    description: 'The promise that modern systems can make domestic life easier, cleaner, and safer.',
    relatedPressures: ['comfort', 'aspiration'],
    relatedObjectTypes: ['Domestic appliance'],
  },
  'collective identity': {
    term: 'collective identity',
    description: 'Visual systems that bind individuals to nation, class, or shared future.',
    relatedPressures: ['belonging', 'patriotism', 'obedience'],
  },
  'technological optimism': {
    term: 'technological optimism',
    description: 'The belief that design, technology, and industry can resolve social contradictions.',
    relatedPressures: ['optimism', 'aspiration'],
  },
  aspiration: {
    term: 'aspiration',
    description: 'The promise of upward mobility, modern comfort, and technological progress.',
    relatedPressures: ['aspiration'],
    relatedAgents: ['futurist', 'propagandist'],
  },
  fear: {
    term: 'fear',
    description: 'An appeal to threat, scarcity, discipline, or social instability.',
    relatedPressures: ['fear', 'scarcity'],
  },
  discipline: {
    term: 'discipline',
    description: 'Order, routine, and obedience presented as pathways to modern life.',
    relatedPressures: ['discipline', 'obedience'],
  },
  obedience: {
    term: 'obedience',
    description: 'Designed alignment with authority, order, nation, or institutional power.',
    relatedPressures: ['obedience', 'patriotism'],
  },
  belonging: {
    term: 'belonging',
    description: 'The emotional pull of collective identity, community, and shared future.',
    relatedPressures: ['belonging'],
  },
  desire: {
    term: 'desire',
    description: 'The transformation of objects into symbols of status, pleasure, or self-improvement.',
    relatedPressures: ['desire'],
    relatedObjectTypes: ['Advertisement'],
  },
  preserve: {
    term: 'preserve',
    description: 'Protecting provenance and context so interpretation remains accountable.',
    relatedAgents: ['archivist'],
  },
  misremember: {
    term: 'misremember',
    description: 'When institutional narrative drifts from what the record can support.',
    relatedAgents: ['counterfeit', 'propagandist'],
  },
  optimize: {
    term: 'optimize',
    description: 'Compressing complexity into efficient flows — sometimes at the cost of nuance.',
    relatedAgents: ['optimizer'],
  },
  fabricate: {
    term: 'fabricate',
    description: 'Generating plausible interpretations without preserving source accountability.',
    relatedAgents: ['counterfeit', 'propagandist'],
  },
  mourn: {
    term: 'mourn',
    description: 'Naming what the catalog cannot preserve — loss as a critical record.',
    relatedAgents: ['mourner', 'orphan-record'],
  },
  citation: {
    term: 'citation',
    description: 'The traceable link between interpretation and archival evidence.',
    relatedAgents: ['archivist'],
  },
  source: {
    term: 'source',
    description: 'The primary record — object, metadata, custody history — that anchors a claim.',
    relatedAgents: ['archivist', 'worker'],
  },
  uncertainty: {
    term: 'uncertainty',
    description: 'The visible boundary where evidence ends and inference begins.',
    relatedAgents: ['mourner', 'orphan-record'],
  },
  inference: {
    term: 'inference',
    description: 'Reasoned extension beyond what the record explicitly states.',
    relatedAgents: ['futurist'],
  },
  hallucination: {
    term: 'hallucination',
    description: 'Generated content that mimics archival authority without source grounding.',
    relatedAgents: ['counterfeit'],
  },
  'synthetic saturation': {
    term: 'synthetic saturation',
    description: 'When repeated machine interpretation overwhelms historical context.',
    relatedAgents: ['counterfeit', 'optimizer'],
  },
  excess: {
    term: 'excess',
    description: 'Abundance of reproduction without proportional meaning.',
    relatedAgents: ['counterfeit'],
  },
  collapse: {
    term: 'collapse',
    description: 'When memory loses specificity and becomes undifferentiated content.',
    relatedAgents: ['orphan-record'],
  },
  reproduction: {
    term: 'reproduction',
    description: 'The archive copying itself — derivatives mistaken for primary sources.',
    relatedAgents: ['counterfeit'],
  },
  context: {
    term: 'context',
    description: 'The provenance, labor, and care that give an object its meaning.',
    relatedAgents: ['archivist', 'worker'],
  },
  attention: {
    term: 'attention',
    description: 'A scarce resource shaped by platform logic and durational encounter.',
    relatedAgents: ['optimizer', 'propagandist'],
  },
  belief: {
    term: 'belief',
    description: 'Conviction staged through design, ritual, and technological mediation.',
    relatedPressures: ['optimism', 'desire'],
  },
  labor: {
    term: 'labor',
    description: 'The invisible work that sustains catalogs, collections, and public memory.',
    relatedAgents: ['worker'],
  },
  cognition: {
    term: 'cognition',
    description: 'Thought and attention treated as commodities under networked systems.',
    relatedAgents: ['optimizer'],
  },
  ritual: {
    term: 'ritual',
    description: 'Repeated behaviors that convert technology into systems of faith and belonging.',
    relatedPressures: ['belonging'],
  },
  systems: {
    term: 'systems',
    description: 'The infrastructures — archival, algorithmic, institutional — that shape interpretation.',
    relatedAgents: ['optimizer', 'archivist'],
  },
  research: {
    term: 'research',
    description: 'Focused study of corpus, taxonomy, and conceptual rules — not finished production.',
  },
  corpus: {
    term: 'corpus',
    description: 'A focused subset of the collection selected for deep interpretive study.',
    relatedAgents: ['archivist'],
  },
  taxonomy: {
    term: 'taxonomy',
    description: 'A classification of roles, pressures, contradictions, and absences across objects.',
    relatedAgents: ['archivist', 'optimizer'],
  },
  'conceptual development': {
    term: 'conceptual development',
    description: 'Building the intellectual framework for a future artwork during the fellowship period.',
    relatedAgents: ['futurist'],
  },
  'future digital work': {
    term: 'future digital work',
    description: 'Possible evolution into installation, online experience, or Knight Labs-responsive artwork.',
    relatedAgents: ['futurist'],
  },
};

export function resolveKeyword(term: string): WolfsonianKeyword {
  const key = term.toLowerCase();
  const found = Object.values(wolfsonianKeywordLibrary).find(
    (kw) => kw.term.toLowerCase() === key,
  );
  return found ?? { term, description: undefined };
}

export function normalizeHighlights(
  highlights?: (string | WolfsonianKeyword)[],
): WolfsonianKeyword[] {
  if (!highlights?.length) return [];
  return highlights.map((item) =>
    typeof item === 'string' ? resolveKeyword(item) : item,
  );
}
