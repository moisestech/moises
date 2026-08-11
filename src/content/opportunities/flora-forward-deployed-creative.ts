/**
 * FLORA — Forward Deployed Creative
 * /opportunities/flora-forward-deployed-creative
 *
 * https://jobs.ashbyhq.com/FLORA/6d6a620e-22b8-4f1d-8a5d-26faa91b5bfa
 *
 * Private role-portfolio for FLORA’s hiring team. Application proof splits across:
 * - This dossier (narrative + links)
 * - flora-field-kit.moises.tech (standalone console)
 * - github.com/moisestech/flora-field-kit
 * - Three FLORA Technique View Links (placeholders until published)
 *
 * Do not embed Field Kit app code in the moises repo.
 */

import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import type { ArchitectureFlowData } from './systemsDossier';
import { floraForwardDeployedCreativeBanner } from '@/content/evidence/applicationBanners';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import {
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { capabilitiesPillarHref } from '@/content/capabilities';

const COMPANY = 'FLORA';
const ROLE_TITLE = 'Forward Deployed Creative';
const ASHBY_URL = 'https://jobs.ashbyhq.com/FLORA/6d6a620e-22b8-4f1d-8a5d-26faa91b5bfa';

const FIELD_KIT_DEMO = 'https://flora-field-kit.moises.tech';
const FIELD_KIT_REPO = 'https://github.com/moisestech/flora-field-kit';
const FIELD_KIT_CASE = `${FIELD_KIT_DEMO}/case/demo-miami-exhibition-teaser`;
const FIELD_KIT_DOCS = `${FIELD_KIT_DEMO}/docs`;

const ASSET = '/images/opportunities/flora-forward-deployed-creative';
const IMG = {
  fieldKit: `${ASSET}/flora-field-kit-overview-concept-study.png`,
  narrative: `${ASSET}/flora-technique-narrative-world-builder-concept-study.png`,
  campaign: `${ASSET}/flora-technique-campaign-variation-system-concept-study.png`,
  physical: `${ASSET}/flora-technique-physical-experience-previsualizer-concept-study.png`,
} as const;

const lore = evidenceProjects['lore-machine'];

const fieldKitArchitecture: ArchitectureFlowData = {
  title: 'FLORA Field Kit — brief → reusable system',
  subtitle:
    'How the standalone console mirrors Forward Deployed Creative work: intake a customer brief, recommend Techniques, run them programmatically, review outputs, chain the next step, and leave a shareable case study.',
  disclaimer:
    'Independent work sample architecture. Not affiliated with or endorsed by FLORA. Demo mode uses fixtures until Technique slugs and View Links are published.',
  syntheticLabel: 'Technique names and costs below are application placeholders until live FLORA publish.',
  stages: [
    {
      id: 'brief',
      title: 'Brief intake',
      nodes: [
        { id: 'objective', label: 'Objective' },
        { id: 'audience', label: 'Audience' },
        { id: 'direction', label: 'Visual direction' },
        { id: 'assets', label: 'References / assets' },
        { id: 'constraints', label: 'Constraints' },
      ],
    },
    {
      id: 'select',
      title: 'Technique select',
      nodes: [
        { id: 'recommend', label: 'Recommend Techniques' },
        { id: 'adapt', label: 'Adapt I/O schemas' },
        { id: 'cost', label: 'Cost / run estimate' },
        { id: 'view-link', label: 'View Link handoff' },
      ],
    },
    {
      id: 'run',
      title: 'API run',
      nodes: [
        { id: 'schema-form', label: 'Schema-driven form' },
        { id: 'async-run', label: 'Async Technique run' },
        { id: 'poll', label: 'Status poll' },
        { id: 'outputs', label: 'Structured outputs' },
      ],
    },
    {
      id: 'review',
      title: 'Creative review',
      nodes: [
        { id: 'compare', label: 'Compare directions' },
        { id: 'favorite', label: 'Favorite / notes' },
        { id: 'select-out', label: 'Select for chain' },
        { id: 'feedback', label: 'Field feedback' },
      ],
    },
    {
      id: 'handoff',
      title: 'Team handoff',
      nodes: [
        { id: 'case-study', label: 'Case-study URL' },
        { id: 'chain', label: 'Next Technique' },
        { id: 'reuse', label: 'Reusable system' },
        { id: 'docs', label: 'Onboarding docs' },
      ],
    },
  ],
  scenarios: [
    {
      id: 'exhibition-teaser',
      question: 'Miami exhibition teaser — museum-legible, not product pitch?',
      stageIds: ['brief', 'select', 'run', 'review', 'handoff'],
      nodeIds: [
        'objective',
        'audience',
        'direction',
        'recommend',
        'async-run',
        'compare',
        'select-out',
        'case-study',
        'reuse',
      ],
      summary:
        'Intake curator-facing brief → Narrative World Builder → Campaign Variation System → Physical Experience Previsualizer → export a shareable workflow report the customer team can reuse.',
    },
    {
      id: 'agency-onboarding',
      question: 'How do you leave a system the agency can run without you?',
      stageIds: ['select', 'run', 'handoff'],
      nodeIds: ['adapt', 'view-link', 'schema-form', 'case-study', 'reuse', 'docs'],
      summary:
        'Publish clear Technique View Links, wire schema forms, and hand off a case-study URL plus docs — not a one-off generation dump.',
    },
  ],
};

const rolePortfolio: RolePortfolioDossier = {
  fitSectionTitle: 'Experience pillars',
  fitIntro:
    'Three practices that transfer into Forward Deployed Creative work: multimodal product workflows, institutional enablement, and rapid creative-technology prototyping.',
  fitPillars: [
    {
      id: 'lore-machine',
      title: 'Lore Machine — multimodal workflow / product',
      body: 'Founding engineer / Chief Prompt Officer on a narrative-to-media product: prompt systems, generative image pipelines, API integrations, and creator-facing workflows that nontechnical users could operate.',
      icon: 'workflow',
      imageSrc: IMG.narrative,
      imageAlt: 'Narrative World Builder — Concept Study',
    },
    {
      id: 'oolite',
      title: 'Oolite Digital Lab — workshops & enablement',
      body: 'Technical Director of Digital: turned space, tools, curriculum, and documentation into an artist-facing creative-technology program — onboarding, workshops, and stakeholder translation under institutional constraints.',
      icon: 'presentation',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      id: 'creative-tech',
      title: 'Creative technology practice — rapid prototypes',
      body: 'Physical/digital production across installations, campaign systems, and generative pipelines — from ambiguous briefs to working proofs, review interfaces, and production handoffs.',
      icon: 'sparkles',
      imageSrc: IMG.physical,
      imageAlt: 'Physical Experience Previsualizer — Concept Study',
    },
  ],
  architecture: fieldKitArchitecture,
  architectureSectionId: 'field-kit',
  architecturePlacement: 'after-selected-project',
  selectedProjectPlacement: 'after-evidence',
  evidenceRoadmap: {
    title: 'Three FLORA Techniques',
    intro:
      'Hero Techniques to customize from the clone library. Images below are generated concept studies — not screenshots of completed FLORA workflows. View Links fill in after Technique Builder publish.',
    items: [
      {
        id: 'narrative-world-builder',
        title: 'Technique 01 — Narrative World Builder',
        status: 'in-progress',
        body: '**Clone base:** dreamscape, character-lock, video-scene-builder. **Inputs:** creative brief, optional reference. **Outputs:** visual language board, story breakdown. **Creative reasoning:** Lore Machine-style narrative → controllable multimedia steps. **Modifications:** character/environment branches, museum-legible tone locks, cost-aware frame counts.',
        href: 'https://app.flora.ai/techniques/dreamscape',
        linkLabel: 'Study clone: dreamscape',
        imageSrc: IMG.narrative,
        imageAlt: 'Narrative World Builder — Concept Study',
        imageLocal: true,
      },
      {
        id: 'campaign-variation-system',
        title: 'Technique 02 — Campaign Variation System',
        status: 'in-progress',
        body: '**Clone base:** illustration-branding-design, material-3d-logo-render-engine. **Inputs:** approved direction, formats & audiences. **Outputs:** controlled variation set. **Creative reasoning:** campaign systems customers can reuse, not moodboards. **Modifications:** brand-safe constraints, channel presets, human review gates.',
        href: 'https://app.flora.ai/techniques/illustration-branding-design',
        linkLabel: 'Study clone: illustration-branding-design',
        imageSrc: IMG.campaign,
        imageAlt: 'Campaign Variation System — Concept Study',
        imageLocal: true,
      },
      {
        id: 'physical-experience-previsualizer',
        title: 'Technique 03 — Physical Experience Previsualizer',
        status: 'in-progress',
        body: '**Clone base:** wireframe, material-3d-logo-render-engine. **Inputs:** artwork/object reference, venue & materials. **Outputs:** spatial view, production board. **Creative reasoning:** Digilab / Bakehouse installation previz before fabrication spend. **Modifications:** venue checklist, production annotations, lobby-screen export.',
        href: 'https://app.flora.ai/techniques/wireframe',
        linkLabel: 'Study clone: wireframe',
        imageSrc: IMG.physical,
        imageAlt: 'Physical Experience Previsualizer — Concept Study',
        imageLocal: true,
      },
    ],
  },
  comingSoon: {
    title: 'Technique publish checklist',
    intro:
      'Clone intake is filled. Remaining gates before View Links read as application-complete.',
    items: [
      {
        id: 'customize-three',
        kind: 'demo',
        title: 'Customize the three hero Techniques',
        body: 'Materially edit prompts, branches, models, I/O naming, and docs from the ranked clones — then publish via Technique Builder.',
        badge: 'In FLORA',
      },
      {
        id: 'publish-view-links',
        kind: 'demo',
        title: 'Publish three View Links + slugs',
        body: 'Wire slug + viewLink in flora-field-kit lib/techniques.ts; flip Technique cards to Ready.',
        href: `${FIELD_KIT_REPO}/blob/main/docs/techniques.md`,
        linkLabel: 'Field Kit techniques checklist',
        badge: 'Pending',
      },
      {
        id: 'replace-concept-studies',
        kind: 'skill',
        title: 'Replace concept studies with real outputs',
        body: 'Swap Concept Study stills for verified FLORA Technique / Field Kit screenshots once runs exist.',
        badge: 'After outputs',
      },
    ],
  },
  selectedProjectSectionTitle: 'FLORA Field Kit case study',
  selectedProject: {
    title: 'FLORA Field Kit',
    subtitle: 'Concept Study — client-workflow console from brief to reusable production system',
    deliveryStatus: 'prototype',
    bullets: [
      'Standalone Next.js console (separate repo) for brief intake, Technique recommendation, API/demo runs, creative review, and shareable case-study export.',
      'Architecture: schema-ready Technique registry, server-only `@flora-ai/flora` routes, demo fixtures so recruiters can run the loop without an API key.',
      'Workflow chaining: Narrative World Builder → Campaign Variation System → Physical Experience Previsualizer, with favorites/notes at review.',
      `Live demo: ${FIELD_KIT_DEMO} · Demo case: ${FIELD_KIT_CASE} · Source: ${FIELD_KIT_REPO} · Architecture notes: ${FIELD_KIT_DOCS}`,
    ],
    href: FIELD_KIT_DEMO,
    linkLabel: 'Launch Field Kit',
    imageSrc: IMG.fieldKit,
    imageAlt: 'FLORA Field Kit — Concept Study',
    imageLocal: true,
  },
  caseStudiesTitle: 'Experience pillars in depth',
  caseStudiesIntro:
    'Three linked practices that transfer directly into Forward Deployed Creative work with FLORA customers.',
  caseStudies: [
    {
      id: 'lore-machine',
      title: 'Lore Machine',
      category: 'Multimodal product',
      ambiguity: 'Turn scripts and books into structured multimedia without drowning creators in model ops.',
      stakeholders: 'Writers, media teams, product, engineering',
      ownership: 'Founding engineer / Chief Prompt Officer — interfaces, prompt systems, APIs, generative pipelines',
      systemBuilt: 'Narrative-to-media platform with prompt workflows, image systems, and production-facing delivery',
      production: 'Real product used by writers and media teams at loremachine.world',
      outcome: 'Experimental generative capability translated into operable product features',
      roleConnection: 'Same muscle as building customer Techniques and packaging them for reuse',
      skillTags: ['Prompt systems', 'Multimodal AI', 'TypeScript', 'APIs', 'Creator UX'],
      href: lore.href ?? '/projects/lore-machine',
      linkLabel: 'Lore Machine',
      imageSrc: IMG.narrative,
      imageAlt: 'Narrative World Builder — Concept Study (supports Lore Machine pillar)',
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'oolite-digital-lab',
      title: 'Oolite Digital Lab',
      category: 'Customer enablement',
      ambiguity: 'Equipment alone does not make a lab — artists need confidence, curriculum, and support',
      stakeholders: 'Artists, lab director, institutional partners, public programs',
      ownership: 'Technical Director of Digital alongside Director of Digital Lab',
      systemBuilt: 'Artist-facing technology program: workshops, documentation, open hours, production support',
      production: 'Knight-supported Digilab operations at Oolite Arts',
      outcome: 'Space + tools + sustained enablement as a coherent program',
      roleConnection: 'Workshops, onboarding, documentation, and stakeholder translation for FLORA adoption',
      skillTags: ['Workshops', 'Documentation', 'Onboarding', 'Institutional ops'],
      href: '/oolite-arts',
      linkLabel: 'Oolite Digilab case study',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'creative-tech-practice',
      title: 'Creative technology practice',
      category: 'Rapid prototyping',
      ambiguity: 'Ambiguous creative briefs that need working proofs under production constraints',
      stakeholders: 'Cultural institutions, media clients, artists, technical partners',
      ownership: 'Hands-on creative technologist across software, fabrication, and generative media',
      systemBuilt: 'Installations, campaign variation systems, generative pipelines, review interfaces',
      production: 'Museum, residency, and client delivery contexts',
      outcome: 'From brief to prototype to production handoff without startup-pitch framing',
      roleConnection: 'Physical Experience Previsualizer and Field Kit review loop',
      skillTags: ['Prototyping', 'Installations', 'Campaign systems', 'Review UX'],
      href: '/creative-ai',
      linkLabel: 'Creative AI flagship',
      imageSrc: IMG.physical,
      imageAlt: 'Physical Experience Previsualizer — Concept Study',
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
  ],
  capabilityMap: {
    title: 'Capabilities for this seat',
    subtitle: 'Creative workflow design, customer enablement, education, rapid prototyping, and product feedback.',
    groups: [
      {
        id: 'workflows',
        title: 'Creative workflow design',
        items: [
          '**Brief intake, Technique adaptation, multimodal pipelines, campaign variation systems, installation previz**',
        ],
      },
      {
        id: 'enablement',
        title: 'Customer enablement & education',
        items: [
          '**Workshops, onboarding, documentation, Digilab-style artist support, stakeholder translation**',
        ],
      },
      {
        id: 'software',
        title: 'Customer-facing software',
        items: [
          '**Next.js, TypeScript, schema-driven forms, async run consoles, shareable case-study routes**',
        ],
      },
      {
        id: 'feedback',
        title: 'Field feedback → product',
        items: [
          '**Capture workflow bottlenecks, invent workarounds, package insights for engineering/design**',
        ],
      },
    ],
    currentlyExtending: [
      'Live FLORA Technique authorship depth — View Links pending publish; demo Field Kit loop is ready today.',
    ],
    closingStatement:
      'Hands-on stack spans **creative production, FLORA-shaped Technique workflows, Next.js customer software, workshops, and institutional enablement**.',
  },
  clientFacing: {
    title: 'Customer-facing experience',
    intro:
      'Forward Deployed Creative work is mostly translation and enablement — sitting with creative teams, teaching adoption, and leaving systems they can operate.',
    points: [
      '**Workshops & labs** — Digilab curriculum, public AI programs, and hands-on production support for nontechnical creators.',
      '**Onboarding & documentation** — field maps, runbooks, and clear Technique I/O so teams are not stuck after the kickoff.',
      '**Stakeholder translation** — speak peer-to-peer with creative directors while keeping engineering and product in the loop.',
      '**Field feedback** — every bottleneck in a customer brief becomes a candidate Technique improvement or product note.',
    ],
  },
  principlesTitle: 'Why FLORA — and New York on-site',
  principles: [
    {
      id: 'creative-os',
      text: 'FLORA’s creative operating system matches how I already work: infinite-canvas craft loops, reusable Techniques, and human review — not disposable generation dumps.',
    },
    {
      id: 'fdc-loop',
      text: 'The Field Kit is a miniature FDC loop: brief → Technique → run → review → handoff. I want that to be the daily job with world-class creative teams.',
    },
    {
      id: 'relocate',
      text: 'I am willing to relocate to New York and work onsite for this Forward Deployed Creative seat. Start window and logistics are open for interview discussion.',
    },
  ],
  availabilityNote:
    'Willing to relocate to New York City and work onsite for FLORA Forward Deployed Creative. Technique View Links pending publish — Field Kit demo and repo are live. Not affiliated with or endorsed by FLORA.',
};

export const floraForwardDeployedCreativeOpportunity: Opportunity = {
  slug: 'flora-forward-deployed-creative',
  status: 'active',
  listed: false,
  family: 'role-portfolio',
  applicationStatus: 'draft',
  variant: 'role-portfolio',
  capabilitiesHref: capabilitiesPillarHref('design-creative-technology'),
  applicationBanner: floraForwardDeployedCreativeBanner,
  seo: {
    title: 'Moises Sanabria — FLORA · Forward Deployed Creative',
    description:
      'Private application dossier for FLORA Forward Deployed Creative — Field Kit console, three Technique workflows, workshops/enablement proof, and NYC onsite relocation.',
    indexable: false,
  },
  visibilityNote: `Private application dossier · ${COMPANY} · ${ROLE_TITLE} · not affiliated with or endorsed by FLORA`,
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  heroEyebrow: 'APPLICATION DOSSIER · FLORA',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Creative workflow design · customer enablement · education · rapid prototyping · product feedback',
  heroMetaChips: [
    'NYC on-site · relocate',
    'Three FLORA Techniques',
    'Field Kit console',
    'Workshops / Digilab',
    'View Links pending',
  ],
  heroPrimaryCta: { label: 'Launch Field Kit', href: FIELD_KIT_DEMO },
  heroSecondaryCta: { label: 'View Techniques', href: '#evidence' },
  audienceKeywords: {
    lead: 'Prepared for FLORA hiring team —',
    terms: [
      {
        label: 'Forward Deployed Creative',
        detail: 'Customer success + workshops + custom Techniques + product feedback.',
      },
      {
        label: 'Field Kit',
        detail: 'Coded brief → Technique → run → review → case-study console.',
      },
      {
        label: 'NYC onsite',
        detail: 'Willing to relocate and work onsite.',
      },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Pillars', shortLabel: 'Fit' },
    { id: 'evidence', label: 'Techniques', shortLabel: 'Tech' },
    { id: 'selected-project', label: 'Field Kit', shortLabel: 'Kit' },
    { id: 'field-kit', label: 'Architecture', shortLabel: 'Arch' },
    { id: 'work', label: 'Depth' },
    { id: 'client', label: 'Customers', shortLabel: 'Cust' },
    { id: 'principles', label: 'Why FLORA', shortLabel: 'Why' },
    { id: 'contact', label: 'Apply' },
  ],
  hero: {
    headline: 'Forward Deployed Creative who turns customer briefs into reusable FLORA systems',
    subheadline:
      'Creative workflow design, customer enablement, education, rapid prototyping, and product feedback — with a coded Field Kit to prove the loop.',
    introParagraphs: [
      'FLORA’s Forward Deployed Creative seat needs someone who can sit with creative teams, build Techniques against real briefs, teach adoption, and bring field friction back into the product. That matches how I already work across Lore Machine multimodal product development, Oolite Digital Lab workshops and enablement, and a creative technology practice of rapid prototypes and physical/digital production.',
      `Application package: three customized FLORA Techniques (View Links pending publish), plus FLORA Field Kit at ${FIELD_KIT_DEMO} — a separate public console for brief intake, Technique recommendation, programmatic runs, creative review, and case-study export. Source: ${FIELD_KIT_REPO}.`,
      'I am willing to relocate to New York and work onsite for this role.',
    ],
    trustLine: 'Not affiliated with or endorsed by FLORA · NYC onsite relocation · Techniques pending View Links',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  rolePortfolio,
  roleMatchSectionTitle: 'Role fit matrix',
  roleMatchIntro:
    'FDC hiring signals mapped to demonstrated creative production, Field Kit, and honest Technique publish gates.',
  roleMatchColumnHeaders: { left: 'FLORA FDC priority', right: 'Evidence' },
  roleMatchRows: [
    {
      requirement: 'Build custom FLORA workflows for customer briefs',
      evidence:
        'Three hero Techniques in progress (Narrative World Builder, Campaign Variation System, Physical Experience Previsualizer) with I/O, reasoning, and modifications documented — View Links pending publish.',
      status: 'learning',
    },
    {
      requirement: 'Turn workflows into customer-facing software / apps',
      evidence: `FLORA Field Kit console: ${FIELD_KIT_DEMO} · repo ${FIELD_KIT_REPO} · demo case ${FIELD_KIT_CASE}`,
      status: 'demonstrated',
    },
    {
      requirement: 'Creative domain credibility (peer to CDs / studios)',
      evidence:
        'Lore Machine founding engineer / CPO; Oolite Digilab enablement; installation and campaign production practice.',
      status: 'demonstrated',
    },
    {
      requirement: 'Workshops, demos, and field feedback into product',
      evidence:
        'Digilab workshops/onboarding plus Field Kit case-study export for customer handoff. Livestream/community assets labeled as ramp.',
      status: 'transferable',
    },
    {
      requirement: 'NYC on-site Forward Deployed Creative seat',
      evidence:
        'Willing to relocate to New York and work onsite. Start window discussed in interview.',
      status: 'demonstrated',
    },
  ],
  processSectionTitle: 'How I land with a FLORA customer',
  processSteps: [
    {
      title: 'Brief intake',
      description: 'Objective, audience, direction, constraints, assets — same fields as Field Kit.',
    },
    {
      title: 'Technique selection',
      description: 'Adapt or author Techniques; expose clear inputs, costs, and expected outputs.',
    },
    {
      title: 'Run + review',
      description: 'Programmatic runs, compare directions, select what chains forward.',
    },
    {
      title: 'Hand off a system',
      description: 'Shareable case study + reusable Technique — workshops and docs so the team can continue.',
    },
  ],
  skillsMatrixRows: [
    {
      category: 'Creative production',
      skills: 'Briefs, visual systems, campaign variations, installation previz',
      icon: 'image',
    },
    {
      category: 'FLORA / workflows',
      skills: 'Technique Builder, canvas workflows, View Links, API runs (Field Kit)',
      icon: 'workflow',
    },
    {
      category: 'Enablement',
      skills: 'Workshops, onboarding, documentation, Digilab-style artist support',
      icon: 'presentation',
    },
    {
      category: 'Customer software',
      skills: 'Next.js, TypeScript, schema-driven forms, async run consoles',
      icon: 'code2',
    },
  ],
  featuredProjectIds: ['lore-machine', 'ai24', 'multimodal-image-systems'],
  techLogoIds: [],
  resumeSectionTitle: 'Application links',
  resumeSectionNote:
    'Launch Field Kit · three Technique workflows (View Links pending) · GitHub · résumé · contact. Not affiliated with or endorsed by FLORA.',
  ctas: recruitingCtas({
    resumePdfPath: resumePdfDriveViewUrl,
    emailSubject: 'FLORA — Forward Deployed Creative — Moises Sanabria',
    github: FIELD_KIT_REPO,
    portfolio: FIELD_KIT_DEMO,
    scheduleUrl: ASHBY_URL,
    scheduleLabel: 'Apply on Ashby',
    caseStudiesAnchor: '#evidence',
  }),
};
