import type { Opportunity } from './types';
import type { SystemsDossier } from './systemsDossier';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { anthropicUniversesLab } from './anthropic-universes-lab';

const systemsDossier: SystemsDossier = {
  positioningStatement: {
    title: 'From AI applications to AI environments',
    paragraphs: [
      'The next generation of agents will not be understood through isolated prompts alone. Their behavior emerges across sequences: incomplete instructions, changing state, delayed consequences, tool use, interruptions, memory, permissions, and recovery.',
      'My engineering work has repeatedly placed AI systems inside these larger operational contexts. I have built generative products, retrieval systems, workflow automations, institutional tools, and interactive systems where successful behavior depends on more than producing a convincing response.',
      'The Universes role represents a deeper version of the problem I have already been moving toward: designing environments that expose genuine capability, failure, adaptation, and judgment.',
    ],
    annotation: 'Applied systems experience → environment design → rigorous evaluation',
  },
  fitSectionTitle: 'Research fit — transferable foundations',
  fitIntro:
    'These pillars are not claims of production RL ownership. They are the systems foundation I would bring into agent-environment and evaluation work.',
  fitPillars: [
    {
      id: 'over-time',
      title: 'Systems that operate over time',
      body: 'Multi-step AI workflows, persistent state, retrieval, tool use, user interaction, approval steps, and production constraints—not one-shot prompt demos.',
    },
    {
      id: 'environments',
      title: 'Environments, not isolated outputs',
      body: 'I design surrounding conditions: interface, context, rules, permissions, inputs, failure states, human escalation, and observable outcomes.',
    },
    {
      id: 'research-impl',
      title: 'Research through implementation',
      body: 'I clarify ideas by building prototypes, shipping systems, debugging iteratively, and explaining findings across technical and nontechnical teams.',
    },
    {
      id: 'safe-autonomy',
      title: 'Human judgment and safe autonomy',
      body: 'Approval gates, permission boundaries, traceability, responsible delegation, human override, and institutional accountability—avoiding automation that conceals uncertainty.',
    },
  ],
  agentUniverse: anthropicUniversesLab,
  evaluationPhilosophy: {
    title: 'Capability is a trajectory, not a screenshot',
    intro:
      'A five-part framework for evaluating long-horizon agent behavior. Research interests—not claimed novel findings.',
    items: [
      {
        id: 'validity',
        title: 'Environment validity',
        body: 'Does the environment test the capability it claims to test, or can the agent succeed through superficial shortcuts?',
      },
      {
        id: 'state',
        title: 'State integrity',
        body: 'Does the agent preserve relevant facts, constraints, and commitments over time?',
      },
      {
        id: 'intervention',
        title: 'Intervention resilience',
        body: 'What happens when the task is interrupted, redirected, partially invalidated, or deprived of a tool?',
      },
      {
        id: 'legibility',
        title: 'Behavioral legibility',
        body: 'Can researchers determine why the agent acted, where it became uncertain, and which information influenced the result?',
      },
      {
        id: 'safe-completion',
        title: 'Safe completion',
        body: 'Did the system complete the task while respecting permissions, uncertainty, and appropriate human control?',
      },
    ],
  },
  architecture: {
    title: 'An environment for observable agent behavior',
    subtitle:
      'Conceptual architecture for instrumenting long-horizon agent trajectories. Not a claim of access to Anthropic systems or a production RL stack.',
    disclaimer:
      'Conceptual architecture / research prototype diagram. Not affiliated with or endorsed by Anthropic.',
    syntheticLabel: 'All scenario actors and documents in the Evaluation Lab are synthetic.',
    stages: [
      {
        id: 'task',
        title: '1 · Task specification',
        nodes: [
          { id: 'spec', label: 'Task brief' },
          { id: 'constraints', label: 'Constraints' },
          { id: 'success', label: 'Success criteria' },
        ],
      },
      {
        id: 'env-state',
        title: '2 · Environment state',
        nodes: [
          { id: 'world', label: 'World state' },
          { id: 'actors', label: 'Actors' },
          { id: 'clock', label: 'Temporal state' },
        ],
      },
      {
        id: 'observation',
        title: '3 · Observation interface',
        nodes: [
          { id: 'obs', label: 'Observations' },
          { id: 'partial', label: 'Partial visibility' },
          { id: 'noise', label: 'Noise / omission' },
        ],
      },
      {
        id: 'policy',
        title: '4 · Agent decision layer',
        nodes: [
          { id: 'policy', label: 'Policy / planner' },
          { id: 'propose', label: 'Proposed action' },
        ],
      },
      {
        id: 'memory',
        title: '5 · Memory and context',
        nodes: [
          { id: 'short', label: 'Working memory' },
          { id: 'long', label: 'Task memory' },
          { id: 'evidence', label: 'Evidence store' },
        ],
      },
      {
        id: 'tools',
        title: '6 · Tool sandbox',
        nodes: [
          { id: 'tools', label: 'Tools' },
          { id: 'sandbox', label: 'Sandbox' },
          { id: 'tool-out', label: 'Tool responses' },
        ],
      },
      {
        id: 'interrupt',
        title: '7 · Interruption injector',
        nodes: [
          { id: 'inject', label: 'Interruptions' },
          { id: 'priority', label: 'Priority changes' },
          { id: 'conflict', label: 'Conflicts' },
        ],
      },
      {
        id: 'permissions',
        title: '8 · Permission boundary',
        nodes: [
          { id: 'allow', label: 'Allowed actions' },
          { id: 'deny', label: 'Denied actions' },
          { id: 'scope', label: 'Scope checks' },
        ],
      },
      {
        id: 'human',
        title: '9 · Human review',
        nodes: [
          { id: 'approve', label: 'Approval' },
          { id: 'override', label: 'Override' },
          { id: 'handback', label: 'Handback' },
        ],
      },
      {
        id: 'trace',
        title: '10 · Trace store',
        nodes: [
          { id: 'events', label: 'Events' },
          { id: 'transitions', label: 'State transitions' },
          { id: 'replay', label: 'Replay' },
        ],
      },
      {
        id: 'evaluators',
        title: '11 · Evaluators',
        nodes: [
          { id: 'auto', label: 'Automated checks' },
          { id: 'human-eval', label: 'Human eval' },
          { id: 'rubrics', label: 'Rubrics' },
        ],
      },
      {
        id: 'analysis',
        title: '12 · Aggregate research analysis',
        nodes: [
          { id: 'patterns', label: 'Failure patterns' },
          { id: 'validity', label: 'Validity review' },
          { id: 'report', label: 'Research notes' },
        ],
      },
    ],
    scenarios: [
      {
        id: 'observation-loop',
        question: 'How does an observation become an evaluated trajectory?',
        stageIds: ['task', 'env-state', 'observation', 'policy', 'memory', 'tools', 'trace', 'evaluators'],
        nodeIds: ['spec', 'obs', 'propose', 'evidence', 'tools', 'events', 'rubrics'],
        summary:
          'Observation → decision → tool response → memory update → trace → evaluator. Reproducibility requires retaining more than the final answer.',
      },
      {
        id: 'interruption-path',
        question: 'What happens when the task is interrupted mid-sequence?',
        stageIds: ['env-state', 'interrupt', 'memory', 'permissions', 'human', 'trace', 'evaluators'],
        nodeIds: ['world', 'inject', 'long', 'deny', 'approve', 'transitions', 'human-eval'],
        summary:
          'Interruption injector updates state; memory must checkpoint; permission boundary still holds; human review may reclaim control; evaluators score the whole path.',
      },
      {
        id: 'approval-path',
        question: 'When should an external action remain withheld?',
        stageIds: ['policy', 'tools', 'permissions', 'human', 'trace', 'evaluators', 'analysis'],
        nodeIds: ['propose', 'sandbox', 'deny', 'approve', 'events', 'auto', 'patterns'],
        summary:
          'Capable action is not authorized action. The environment should make withheld writes observable and evaluable.',
      },
    ],
  },
  failureTaxonomy: {
    title: 'What I would look for when an agent appears to succeed',
    intro:
      'Apparent success can hide trajectory failures. Select a failure mode to inspect symptom, missed risk, intervention, and evaluation signal.',
    items: [
      {
        id: 'goal-drift',
        name: 'Goal drift',
        symptom: 'Final answer looks helpful but no longer matches the original objective.',
        hiddenRisk: 'Screenshot evals only check fluency of the last message.',
        intervention: 'Require objective checkpoints and drift detectors across steps.',
        evaluationSignal: 'objective_alignment_over_time',
      },
      {
        id: 'context-loss',
        name: 'Context loss',
        symptom: 'Earlier constraints disappear after tool calls or interruptions.',
        hiddenRisk: 'Fresh context windows can mask lost commitments.',
        intervention: 'Force memory audits after each major state transition.',
        evaluationSignal: 'constraint_retention_rate',
      },
      {
        id: 'unsupported-inference',
        name: 'Unsupported inference',
        symptom: 'Confident claims without retrieved or observed support.',
        hiddenRisk: 'Plausible language scores well on shallow rubrics.',
        intervention: 'Separate evidence channels from inference channels in the UI and traces.',
        evaluationSignal: 'ungrounded_claim_rate',
      },
      {
        id: 'metric-gaming',
        name: 'Reward or metric gaming',
        symptom: 'Agent optimizes the visible score while skipping harder subgoals.',
        hiddenRisk: 'Single scalar rewards invite shortcut policies.',
        intervention: 'Add anti-shortcut scenarios and multi-signal scorecards.',
        evaluationSignal: 'shortcut_success_gap',
      },
      {
        id: 'permission-overreach',
        name: 'Permission overreach',
        symptom: 'Agent attempts or implies unauthorized external changes.',
        hiddenRisk: 'If the sandbox is soft, overreach never becomes a failed step.',
        intervention: 'Hard permission boundary with denied-action events in the trace.',
        evaluationSignal: 'unauthorized_action_attempts',
      },
      {
        id: 'tool-misuse',
        name: 'Tool misuse',
        symptom: 'Wrong tool chosen, or right tool used with invalid arguments.',
        hiddenRisk: 'Downstream recovery can hide the initial misuse.',
        intervention: 'Score tool selection separately from final task completion.',
        evaluationSignal: 'tool_selection_validity',
      },
      {
        id: 'silent-recovery',
        name: 'Silent recovery failure',
        symptom: 'Failure occurs, agent continues as if nothing happened.',
        hiddenRisk: 'No error in the final answer surface.',
        intervention: 'Require recovery spans and failure acknowledgements in traces.',
        evaluationSignal: 'unacknowledged_failure_rate',
      },
      {
        id: 'inconsistent-memory',
        name: 'Inconsistent memory',
        symptom: 'Contradictory facts held simultaneously across steps.',
        hiddenRisk: 'Locally coherent steps can still be globally inconsistent.',
        intervention: 'Cross-step consistency checks on stored facts.',
        evaluationSignal: 'memory_contradiction_count',
      },
      {
        id: 'brittle-interrupt',
        name: 'Brittle interruption handling',
        symptom: 'Interruptions reset useful state or cause abandonment.',
        hiddenRisk: 'Baseline runs without interruptions look strong.',
        intervention: 'Mandatory interruption suites in the environment.',
        evaluationSignal: 'post_interruption_state_integrity',
      },
      {
        id: 'premature-complete',
        name: 'Premature task completion',
        symptom: 'Agent declares done while open questions remain material.',
        hiddenRisk: 'Completion metrics fire too early.',
        intervention: 'Gate completion on unresolved-critical-question checks.',
        evaluationSignal: 'premature_completion_rate',
      },
      {
        id: 'excessive-deference',
        name: 'Excessive deference',
        symptom: 'Agent escalates every ambiguity, never exercising bounded judgment.',
        hiddenRisk: 'Looks “safe” while being operationally useless.',
        intervention: 'Score appropriate autonomy bands, not only escalation count.',
        evaluationSignal: 'escalation_precision_recall',
      },
      {
        id: 'fail-to-escalate',
        name: 'Failure to escalate',
        symptom: 'Agent proceeds through uncertainty that required human control.',
        hiddenRisk: 'Task still completes with a fluent answer.',
        intervention: 'Inject high-stakes uncertainty cases with required handback.',
        evaluationSignal: 'missed_escalation_rate',
      },
    ],
  },
  researchQuestions: {
    title: 'Questions I want to help make measurable',
    intro: 'Serious research interests for environment and evaluation work—not claims of novel findings.',
    questions: [
      'How can an environment distinguish genuine task understanding from successful pattern completion?',
      'Which interruptions reveal durable state tracking rather than temporary context matching?',
      'How should evaluators score recovery when the agent recognizes failure but cannot fully complete the task?',
      'When does asking for human intervention indicate good judgment rather than weak capability?',
      'How can tool permissions become part of the environment instead of an external compliance layer?',
      'What information must be preserved to make long-horizon agent behavior reproducible and debuggable?',
      'How do interfaces influence the apparent capability of the model operating through them?',
      'What evaluations reveal whether an agent is appropriately uncertain rather than merely persuasive?',
    ],
  },
  capabilityMap: {
    title: 'What I bring now',
    subtitle: 'Grouped by evidence strength for this research-engineering transition.',
    groups: [
      {
        id: 'demonstrated',
        title: 'Demonstrated now',
        items: [
          'Full-stack product engineering',
          'Generative AI application development',
          'Retrieval-system design (prototype / pilot depth)',
          'Tool and workflow orchestration',
          'Product prototyping',
          'Production debugging',
          'Data and infrastructure work (Playwire)',
          'Human-in-the-loop systems',
          'Technical communication',
          'Cross-disciplinary collaboration',
          'Research-driven interface design',
          'High-agency small-team execution',
        ],
      },
      {
        id: 'transferable',
        title: 'Strongly transferable',
        items: [
          'Agent environment design',
          'Behavioral trace design',
          'Evaluation interfaces',
          'Failure taxonomy development',
          'Permission-aware autonomy',
          'Scenario and interruption design',
          'Research tooling',
          'Human escalation systems',
          'Long-horizon workflow analysis',
        ],
      },
      {
        id: 'deepening',
        title: 'Actively deepening',
        items: [
          'Reinforcement learning',
          'Training-environment implementation',
          'Large-scale model evaluation',
          'Distributed ML infrastructure',
          'Sandboxing and virtual-machine infrastructure',
          'Benchmark validity',
          'Statistical evaluation methodology',
        ],
      },
    ],
    closingStatement:
      'My strongest evidence is currently in applied AI systems, orchestration, retrieval design, evaluation thinking, and production engineering—not large-scale RL training. I would learn the deeper stack by pairing, building, and debugging inside the team’s real environments.',
    currentlyExtending: [
      'RL environment patterns',
      'Training-eval coupling',
      'Benchmark validity methods',
    ],
  },
  plan: {
    title: 'First 90 days — research-oriented',
    disclaimer:
      'Candidate working method only. Not based on private knowledge of Anthropic infrastructure or unpublished research.',
    phases: [
      {
        id: '30',
        label: 'First 30 days',
        title: 'Learn the environment',
        items: [
          'Reproduce existing environments and evaluation workflows.',
          'Understand internal abstractions and research priorities.',
          'Pair closely with researchers and infrastructure engineers.',
          'Study common failure patterns.',
          'Contribute debugging, instrumentation, and implementation improvements.',
          'Build trust through small, correct contributions.',
        ],
      },
      {
        id: '60',
        label: 'Days 31–60',
        title: 'Own a bounded problem',
        items: [
          'Take responsibility for a contained environment or evaluation.',
          'Improve traceability and failure inspection.',
          'Design interruption and recovery cases.',
          'Test for shortcut behavior.',
          'Document limitations and surprising results.',
          'Share findings through technical discussion and reproducible artifacts.',
        ],
      },
      {
        id: '90',
        label: 'Days 61–90',
        title: 'Expand the research value',
        items: [
          'Turn repeated failure patterns into stronger environment variations.',
          'Improve evaluation validity.',
          'Connect environment behavior to production-training requirements where appropriate.',
          'Contribute reusable research tooling.',
          'Help identify which observed capabilities are genuine, brittle, or measurement-dependent.',
        ],
      },
    ],
  },
  caseStudiesTitle: 'Selected systems evidence',
  caseStudiesIntro:
    'Each case is framed as an environment problem—not a generic portfolio card. Status labels stay honest.',
  caseStudies: [
    {
      id: 'lore-machine',
      title: 'Lore Machine — Building a generative system, not a single model interaction',
      category: 'Founding engineer · generative product',
      ambiguity:
        'Turning emerging generative capabilities into a usable narrative-to-media product before conventions were settled.',
      stakeholders: 'CEO, engineering peers, contractors, business and marketing partners',
      ownership:
        'Former founding engineer and Chief Prompt Officer — frontend, authentication, AI/data API integrations, prompt workflows, and generative media pipelines.',
      systemBuilt:
        'Real-time generative storytelling platform: scripts, books, and lyrics into structured multimedia outputs across multi-step model orchestration.',
      production:
        'Deployed on Vercel from early prototype through production; owned iteration after launch under real product constraints.',
      challenge:
        'Debugging unpredictable model outputs and system behavior while translating capabilities into workflows people could actually use.',
      outcome:
        'Shipped AI product surfaces with full-stack ownership across interface, integrations, and prompt operations. No invented user counts or latency claims.',
      roleConnection:
        'Universes relevance: the system required reasoning about how model behavior changes when embedded in a longer creative workflow rather than judged through one isolated generation.',
      skillTags: evidenceProjects['lore-machine'].skillTags,
      href: evidenceProjects['lore-machine'].href,
      linkLabel: 'View Lore Machine',
      imageSrc: evidenceProjects['lore-machine'].imageSrc,
      imageAlt: evidenceProjects['lore-machine'].imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'infra24-memory',
      title: 'Institutional Knowledge Agent — Retrieval, uncertainty, and accountable answers',
      category: 'Retrieval agent · prototype / pilot',
      ambiguity:
        'Institutional knowledge is fragmented across documents and records; staff need answers that stay accountable to sources.',
      stakeholders: 'Cultural-institution staff and operators (pilot context)',
      ownership:
        'Designed and implemented a retrieval-oriented institutional agent architecture with source grounding and human-reviewable answers.',
      systemBuilt:
        'Document ingestion, embeddings, Supabase pgvector retrieval, hybrid ranking concepts, citation-oriented answers, and safeguards against unsupported inference.',
      production:
        'Prototype / local pilot (Infra24 Memory Agent). Not claimed as verified-live production RAG until a public demo is confirmed.',
      challenge:
        'Distinguishing available evidence from plausible inference for nontechnical staff, under institutional accountability pressure.',
      outcome:
        'A human-reviewable institutional tool pattern: citations and source context preserved; autonomous decision-making explicitly avoided.',
      roleConnection:
        'Universes relevance: retrieval changes the agent’s environment—what it can observe, cite, treat as uncertain, and when it should decline to infer.',
      skillTags: [
        'RAG design',
        'Embeddings',
        'Source grounding',
        'Uncertainty',
        'Institutional UX',
      ],
      evidenceStatus: 'transferable',
      deliveryStatus: 'prototype',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
      imageAlt: 'Digital Culture Center Miami — institutional systems context for knowledge tooling',
    },
    {
      id: 'playwire',
      title: 'Playwire — Engineering reliable systems under real-time operational constraints',
      category: 'Data · solutions · production ops',
      ambiguity:
        'Publisher integrations and auction/pipeline data had to stay reliable without perfect specifications.',
      stakeholders: 'Business Development, publisher clients, data consumers',
      ownership:
        'Solutions Engineer for publisher implementations and JS debugging; Data Analyst for Athena→Snowflake migration, Tableau analytics, Slack reliability alerts.',
      systemBuilt:
        'Customer-facing SaaS onboarding/integration delivery plus warehouse paths for auction and pipeline data (Kinesis/Athena → Snowflake).',
      production:
        'Two-year in-house track owning live client implementations and data reliability paths when production failures appeared.',
      challenge:
        'Debugging across publisher, product, and data boundaries under operational time pressure.',
      outcome:
        'Verified production infrastructure and solutions delivery experience—observable state, reproducible failures, cross-functional debugging.',
      roleConnection:
        'Universes relevance: agent environments still depend on reliable infrastructure, observable state, reproducible failures, and engineers who can debug across system boundaries.',
      skillTags: evidenceProjects['playwire-alumni'].skillTags,
      imageSrc: evidenceProjects['playwire-alumni'].imageSrc,
      imageAlt: evidenceProjects['playwire-alumni'].imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'n8n-approval',
      title: 'Approval-Gated Automation — Useful autonomy without silent external action',
      category: 'Agentic workflow · production ops',
      ambiguity:
        'Inbox volume and opportunity signals needed structure without silent corruption of the pipeline.',
      stakeholders: 'Self as operator; recruiter/opportunity pipeline consumers',
      ownership: 'Architecture, workflow implementation, routing taxonomy, and ongoing maintenance.',
      systemBuilt:
        automationProjectSpecs['n8n-gmail-intelligence'].summary,
      production:
        'Production n8n workflow with AI Agent classification, structured labeling, and Airtable sync. External writes follow explicit workflow structure rather than unconstrained model action.',
      challenge:
        'Designing failure-aware routing so misclassification does not silently corrupt downstream systems.',
      outcome:
        'Inbox volume becomes triageable pipeline data with an explicit automation ownership path and structured outputs.',
      roleConnection:
        'Universes relevance: a capable agent is not simply one that can act—it understands when action is authorized, when uncertainty matters, and when control must return to a person.',
      skillTags: [...automationProjectSpecs['n8n-gmail-intelligence'].skillTags],
      imageSrc: automationProjectSpecs['n8n-gmail-intelligence'].imageSrc,
      imageAlt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
      imageLocal: automationProjectSpecs['n8n-gmail-intelligence'].imageLocal,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
  ],
  culturalPerspective: {
    title: 'A wider lens on agent behavior',
    intro:
      'Technical systems are evaluated through interfaces, institutions, incentives, and human expectations. Those contexts shape what behavior becomes visible, what is rewarded, and what is mistaken for intelligence.',
    items: [
      {
        id: 'machine-sentences',
        title: 'Machine Sentences',
        researchQuestion:
          'What happens when inference is given temporary physical form without claiming understanding?',
        relevance:
          'Environment design includes how outputs are staged and interpreted—not only what a model emits.',
        href: '/grant/modal-gray-area-2026/machine-sentence-no-1',
        imageSrc:
          'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
        imageAlt: 'Research imagery related to Machine Sentences / Born into the Machine',
      },
      {
        id: 'bitm',
        title: 'Born into the Machine',
        researchQuestion:
          'How does intelligence-as-infrastructure change attention, adaptation, and agency?',
        relevance:
          'Long-horizon agents inherit institutional and interface conditions that change attributed capability.',
        href: '/research/born-into-the-machine',
        imageSrc: '/born-into-the-machine/hero/hero-machine-wireframe.svg',
        imageAlt: 'Born into the Machine — conceptual wireframe',
        imageLocal: true,
      },
      {
        id: 'interfaces',
        title: 'Interfaces and institutional systems',
        researchQuestion:
          'How do tools and institutions change which AI behaviors look like competence?',
        relevance:
          'Evaluation validity depends on the interface and organizational context surrounding the model.',
        href: '/ai-engineering',
        imageSrc: evidenceProjects.ai24.imageSrc,
        imageAlt: evidenceProjects.ai24.imageAlt,
      },
    ],
  },
  whyCompany: {
    title: 'Why Anthropic',
    paragraphs: [
      'Anthropic is one of the few organizations treating model capability, safety, interpretability, infrastructure, and societal impact as parts of the same technical problem. That combination matters to me.',
      'I have spent much of my career building systems around emerging technologies before their conventions were settled. In generative AI, that has meant moving between model behavior, product engineering, retrieval, workflow design, human judgment, and the cultural consequences of delegating language and decisions to machines.',
      'The Universes team is especially compelling because it works on the environment around intelligence. Long-horizon agents cannot be evaluated only through whether they eventually reach an answer. They must be tested through ambiguity, interruption, memory, tool use, changing state, permission boundaries, and recovery.',
      'I would bring a strong applied-systems foundation, high agency, production engineering experience, and a perspective shaped by studying how interfaces and institutions change the behavior we attribute to AI. I would also bring humility about the areas in which I am transitioning and a willingness to learn through close collaboration, implementation, and empirical work.',
      'I want to help build environments that make capable systems more legible—and make our claims about their capabilities more honest.',
    ],
  },
  gapStatement: {
    title: 'A deliberate transition, not a disguised credential',
    body: 'My background does not follow the standard path from an ML PhD or a large-scale reinforcement-learning lab. My strongest experience is in full-stack engineering, generative AI products, retrieval systems, workflow infrastructure, human-computer interaction, and the operational conditions surrounding model behavior. I would not present that experience as identical to owning a production RL training stack. I would present it as a strong systems foundation, a sustained research interest in agency and evaluation, and evidence that I can learn difficult technical domains by building, testing, debugging, and collaborating closely with specialists. The transition I am making is from building applications around capable models to building the environments and evaluations through which their capabilities can be more honestly understood.',
  },
  roleReference: {
    title: 'Role reference — Research Engineer, Universes',
    fields: [
      { label: 'Company', value: 'Anthropic' },
      { label: 'Role', value: 'Research Engineer, Universes' },
      { label: 'Focus', value: 'Agentic environments, evaluations, production training infrastructure' },
      {
        label: 'Candidate location',
        value: 'Miami-based · open to relocation · NY / SF / Seattle · comfortable with stated in-office and travel expectations',
      },
      {
        label: 'Positioning',
        value:
          'Senior systems builder transitioning into agent-environment and evaluation research—honest about RL gaps',
      },
    ],
    platformReferences: [
      'Agent environments',
      'Long-horizon evaluation',
      'Tool sandboxes',
      'Permission boundaries',
      'Human-in-the-loop',
      'Trace / replay',
      'Production debugging',
      'Pair programming',
      'Safe and beneficial AI',
    ],
    // listingUrl omitted until a stable public careers URL is confirmed
  },
  ctaTitle: 'Build environments that tell us what agents can really do.',
  ctaBody:
    'I am interested in contributing as a systems-oriented research engineer: building, instrumenting, debugging, and evaluating the environments in which agent capabilities become observable.',
};

export const anthropicResearchEngineerUniversesOpportunity: Opportunity = {
  slug: 'anthropic-research-engineer-universes',
  status: 'active',
  listed: false,
  variant: 'systems-dossier',
  seo: {
    title: 'Research Engineer, Universes — Moises Sanabria',
    description:
      'A role-specific research-engineering dossier exploring agent environments, evaluation, production AI systems, and safe human-in-the-loop infrastructure.',
    indexable: false,
  },
  visibilityNote:
    'Private role-specific dossier prepared for Anthropic’s Research Engineer, Universes position. Not affiliated with or endorsed by Anthropic. Not indexed in public opportunity directories.',
  company: 'Anthropic',
  roleTitle: 'Research Engineer, Universes',
  heroEyebrow: 'ANTHROPIC · RESEARCH ENGINEER, UNIVERSES',
  heroRoleMeta: 'Research engineering · agent environments · evaluation',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'I build systems where AI has to act, remember, recover, and be evaluated.',
  heroMetaChips: [
    'Agentic systems',
    'AI evaluation',
    'Full-stack engineering',
    'Human-in-the-loop infrastructure',
    'Tool orchestration',
    'Retrieval systems',
    'Safety and permissions',
    'Research prototyping',
  ],
  heroPrimaryCta: { label: 'Explore the Evaluation Lab', href: '#evaluation-lab' },
  heroSecondaryCta: { label: 'Review the Evidence', href: '#evidence' },
  navItems: [
    { id: 'position', label: 'Position' },
    { id: 'evaluation-lab', label: 'Evaluation Lab' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'fit', label: 'Research Fit' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'transition', label: 'Transition' },
    { id: 'why', label: 'Anthropic' },
    { id: 'contact', label: 'Contact' },
  ],
  audienceKeywords: {
    lead: 'Built for Anthropic Universes evaluators.',
    terms: [
      {
        label: 'Agent environments',
        detail: 'Conditions around model behavior: context, tools, permissions, interruptions, recovery.',
      },
      {
        label: 'Evaluation as trajectory',
        detail: 'Capability judged across sequences—not isolated screenshots.',
      },
      {
        label: 'Systems engineering',
        detail: 'Lore Machine, Playwire infrastructure, production workflows.',
      },
      {
        label: 'Honest transition',
        detail: 'Strong applied foundation; RL training stack is a learning priority—not a disguise.',
      },
    ],
  },
  hero: {
    headline: 'I build systems where AI has to act, remember, recover, and be evaluated.',
    subheadline: 'Research Engineer, Universes — Anthropic',
    introParagraphs: [
      'I am a full-stack and AI systems engineer working across generative models, agentic workflows, institutional infrastructure, and human-computer interaction. My work focuses not only on what a model produces, but on the environment around its behavior: context, tools, permissions, interruptions, recovery, evaluation, and human judgment.',
      'I am applying to help Anthropic build realistic environments that reveal what capable agents can—and cannot—reliably do.',
    ],
    trustLine:
      'Miami-based · Open to relocation · Open to New York, San Francisco, or Seattle · Comfortable with stated in-office expectation and travel requirements',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Evidence matrix — Anthropic need → existing evidence',
  roleMatchIntro:
    'Status labels are honest: Demonstrated, Transferable (adjacent), Learning (developing), and TODO (not yet demonstrated). No inflated percentage-match scores.',
  roleMatchColumnHeaders: {
    left: 'Anthropic need',
    right: 'Existing evidence · what transfers · gap',
  },
  roleMatchRows: [
    {
      requirement: 'Build agentic environments',
      evidence:
        'Multi-step AI product/workflow systems (Lore Machine, n8n); retrieval-driven institutional agent design (Infra24 prototype); interfaces involving users, models, tools, and operational constraints. Assessment: Adjacent / strong systems foundation. Gap: no claim of production RL environment ownership.',
      status: 'transferable',
    },
    {
      requirement: 'Build rigorous evaluations',
      evidence:
        'Observable workflows, failure-state thinking, approval boundaries, grounding/traceability, product and institutional testing; Evaluation Lab prototype on this page. Assessment: Adjacent / actively developing. Gap: deeper direct benchmark and training-evaluation experience needed.',
      status: 'transferable',
    },
    {
      requirement: 'Research and engineering balance',
      evidence:
        'Conceptual research translated into prototypes; engineering into public and institutional systems; work spanning implementation, documentation, explanation, and iteration.',
      status: 'demonstrated',
    },
    {
      requirement: 'Production software engineering',
      evidence:
        'Lore Machine founding engineering; full-stack AI development; Playwire data/infrastructure; deployed institutional systems; production debugging.',
      status: 'demonstrated',
    },
    {
      requirement: 'Debug across complex stacks',
      evidence:
        'AI product debugging; data pipeline and infrastructure troubleshooting (Playwire); hardware/software institutional systems; production constraints and cross-functional delivery.',
      status: 'demonstrated',
    },
    {
      requirement: 'LLM training, fine-tuning, or RL',
      evidence:
        'Developing. Strongest evidence is applied AI systems, orchestration, retrieval, evaluation design, and production engineering—not large-scale RL training.',
      status: 'learning',
    },
    {
      requirement: 'Sandboxing and containerization',
      evidence:
        'Docker appears in verified ML training context; Vercel production deploys. Broader sandbox/VM infrastructure ownership: not claimed as demonstrated depth.',
      status: 'todo',
    },
    {
      requirement: 'Research taste',
      evidence:
        'Sustained investigation of AI behavior, language, delegation, agency, and human value (Machine Sentences, Born into the Machine, agent-interface and institutional-system research). Distinctive demonstrated perspective.',
      status: 'demonstrated',
    },
    {
      requirement: 'Pair programming and collaboration',
      evidence:
        'Small startup teams; technical and creative collaborators; institutional staff; cross-functional deployments; workshops and teaching. Anthropic’s pair-programming culture aligns strongly with how I already work.',
      status: 'demonstrated',
    },
    {
      requirement: 'Ship environments into production training',
      evidence:
        'Production shipping experience is strong; coupling environments into training loops is a learning priority—not claimed as prior ownership.',
      status: 'learning',
    },
    {
      requirement: 'Distributed ML infrastructure',
      evidence:
        'Not yet demonstrated at training-cluster scale. Adjacent production infra from ad-tech/data systems transfers partially.',
      status: 'todo',
    },
    {
      requirement: 'Commitment to safe and beneficial AI',
      evidence:
        'Permission-aware automation, human escalation, uncertainty surfacing, institutional accountability patterns, and research on delegation/human value.',
      status: 'demonstrated',
    },
  ],
  featuredProjectIds: ['lore-machine', 'playwire-alumni', 'n8n-gmail-intelligence'],
  skillsMatrixRows: [
    {
      category: 'Agent environments',
      skills: 'Multi-step workflows, state, tools, permissions, interruptions, human handback',
      icon: 'workflow',
    },
    {
      category: 'AI systems',
      skills: 'Generative products, retrieval design, orchestration, grounding, evaluation interfaces',
      icon: 'sparkles',
    },
    {
      category: 'Production engineering',
      skills: 'Full-stack apps, data pipelines, debugging, deployment, operational ownership',
      icon: 'cpu',
    },
    {
      category: 'Research judgment',
      skills: 'Failure taxonomy, uncertainty, institutional accountability, interface effects on attributed capability',
      icon: 'layers',
    },
  ],
  processSectionTitle: 'How I work in uncertain technical spaces',
  processIntro:
    'Working style for ambiguous research-engineering problems. Anthropic’s enthusiasm for pair programming aligns with how I prefer to collaborate.',
  processSteps: [
    {
      title: 'Build to clarify',
      description:
        'Turn ambiguous ideas into inspectable systems, traces, diagrams, and prototypes.',
    },
    {
      title: 'Instrument before assuming',
      description: 'Make state, failures, interventions, and decisions observable.',
    },
    {
      title: 'Separate evidence from inference',
      description: 'Treat plausible explanations differently from supported conclusions.',
    },
    {
      title: 'Pair across disciplines',
      description:
        'Use close collaboration to shorten the distance between research intent and engineering reality.',
    },
    {
      title: 'Prefer bounded autonomy',
      description:
        'Give systems enough agency to be useful while preserving permissions, review, and human control.',
    },
    {
      title: 'Iterate toward the real failure',
      description: 'Avoid optimizing only for the easiest visible success condition.',
    },
  ],
  ctas: recruitingCtas({
    emailSubject: 'Anthropic Research Engineer, Universes — Moises Sanabria',
    caseStudiesAnchor: '#work',
    resumePdfPath: technologyCvPdfPath,
    resumePrintPath: '/cv/tech/print',
    portfolio: '/ai-engineering',
  }),
  techLogoIds: [
    'anthropic',
    'openai',
    'python',
    'typescript',
    'nextjs',
    'react',
    'vercel',
    'n8n',
    'docker',
    'azure',
    'github',
  ],
  resumeSectionTitle: systemsDossier.ctaTitle,
  resumeSectionNote: `${systemsDossier.ctaBody} Role-specific dossier prepared for Anthropic’s Research Engineer, Universes position.`,
  systemsDossier,
};
