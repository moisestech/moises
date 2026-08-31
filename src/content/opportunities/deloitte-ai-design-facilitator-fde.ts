/**
 * Deloitte — AI Design Facilitator and Forward-Deployed Engineer II
 * Public send: /forward-deployed
 * Private overlay: /opportunities/deloitte-ai-design-facilitator-fde
 * Alias: /applied-ai/deloitte-ai-design-facilitator
 *
 * One factory, two surfaces. Public flagship is evergreen (no listing URL,
 * deadline, or employer overlay). Private overlay keeps requisition 360529.
 */

import type {
  CodeInspectBlock,
  HonestyOverlay,
  Opportunity,
  ProofSnapshot,
  RoleMatchRow,
} from './types';
import { deloitteAiDesignFacilitatorFdeBanner, deloitteFacilitatorWorkshopStill } from '@/content/evidence/applicationBanners';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { capabilitiesPillarHref } from '@/content/capabilities';
import { sprint2026Ctas, sprint2026Headshot } from './shared-sprint-2026';
import {
  designFacilitationTeachingHighlights,
  saturdayLabLive,
} from './packs/designFacilitationEvidencePack';
import { designFacilitationClaimedStackBand } from '@/content/evidence/recruitingLogoBand';
import { ART_OF_AI_AGENTS_SCREENSHOTS } from '@/constants/art-of-ai-agents';
import { digilabMedia } from '@/content/oolite-arts/media';

const EMPLOYER_URL =
  'https://apply.deloitte.com/en_US/careers/JobDetail/AI-Design-Facilitator-and-Forward-Deployed-Engineer-II/360529';

const TECH_CV_PDF = '/resume/moises-sanabria-technology-cv.pdf';
const EVIDENCE_BRIEF_PDF = '/resume/MoisesSanabria_FDE_Technical_Evidence.pdf';
const FIELD_KIT_REPO = 'https://github.com/moisestech/flora-field-kit';
const AEP_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';
const AEP_BLOB = `${AEP_REPO}/blob/main`;

const OOLITE_LOGO_BLACK =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753833092/tech-nonprofit/oolite/logos/oolite-arts-logo-black_sx0l62.png';
const OOLITE_LOGO_WHITE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753833092/tech-nonprofit/oolite/logos/oolite-arts-logo-white_sbfeqz.png';

const teachingWorkshop = digilabMedia['workshop.art-tech-coding'];
const lore = evidenceProjects['lore-machine'];
const playwire = evidenceProjects['playwire-alumni'];
const n8nSpec = automationProjectSpecs['n8n-gmail-intelligence'];
const bookleggersSpec = automationProjectSpecs['bookleggers-commerce-automation'];

const taskAutomationSlide = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'artist-task-automation-1',
)!;

const overlayHonesty: HonestyOverlay = {
  title: 'What I bring',
  intro:
    'This page maps the posted work — teaching through a design lens, early-stage prototyping, and incubation from concept to code — to inspectable materials. Client-facing delivery and internal enablement are both in scope.',
  provenTitle: 'Proven now',
  proven: [
    'Cooper Union BFA and a design practice applied to actual project work — installations, product interfaces, and workshop curricula.',
    'Eighteen hands-on technical workshops at Oolite Arts, plus public programs that turn generative AI into exercises mixed audiences of designers, engineers, and product partners can follow.',
    'Generative AI tools in software, design, and product work: Cursor, Claude, Airtable, Figma, Adobe Creative Cloud, OpenAI / Anthropic APIs, and generative image pipelines. Gemini is a platform I can teach to; it is not my daily stack.',
    'Product incubation at Lore Machine — from concept to a shipped generative storytelling platform with mixed stakeholders.',
    'Client-facing translation at Playwire and with institutional partners: listen, prototype, explain tradeoffs, leave the team able to operate the work.',
    'Inspectable workshop design: intake questions, differentiated learner paths, practical exercises, and an exit-ticket instrument.',
  ],
  rampStatement:
    'I would bring design practice, hands-on teaching, and product engineering while learning the team’s delivery method, client governance, and platform conventions.',
};

const proofSnapshot: ProofSnapshot = {
  title: 'Proof snapshot',
  intro:
    'Each card is an evidence type, not a claim of completeness. Tools sit on the card they actually support.',
  cards: [
    {
      title: 'Oolite + Playwire delivery',
      body: 'Eighteen workshops and publisher-facing solutions work. I observe the stuck point, then leave a path the team can run.',
      evidenceType: 'production-experience',
    },
    {
      title: 'Lore Machine',
      body: 'Founding engineer / Chief Prompt Officer: prompt systems, image pipelines, and creator workflows that shipped.',
      evidenceType: 'shipped-product',
    },
    {
      title: 'Agentic Evidence Pipeline',
      body: 'TypeScript reference with synthetic evidence and a fake-model harness — not a hosted product.',
      evidenceType: 'reference-implementation',
    },
    {
      title: 'Field Kit',
      body: 'Brief → technique → human review → handoff. Fixture demo; live FLORA is optional and paid.',
      evidenceType: 'fixture-prototype',
      tools: ['Cursor', 'Claude', 'Next.js'],
    },
    {
      title: 'Saturday Lab pack',
      body: 'Intake, learner paths, help queue, and an exit-ticket instrument. Designed pages — not attendance or scores.',
      evidenceType: 'teaching-instrument',
      tools: ['Figma', 'Airtable'],
    },
    {
      title: 'Design-forward thin slice',
      body: 'How I would enter an FDE method: frame, facilitate, prototype, test, leave a teaching artifact. Not completed client work.',
      evidenceType: 'proposed-approach',
    },
  ],
};

const codeInspect: CodeInspectBlock = {
  title: 'Code to inspect',
  intro:
    'Strongest public files from the Agentic Evidence Pipeline. This is a TypeScript reference implementation with synthetic evidence and a fake-model evaluation harness — not a hosted product, not a customer production deployment, and not client platform work. Demo rasters from the AEP repo are not copied here.',
  items: [
    {
      id: 'run',
      title: 'run.ts — stateful run + human review',
      href: `${AEP_BLOB}/packages/agent/src/run.ts`,
      icon: 'git-branch',
      body: 'Idempotent run creation, explicit state transitions, persisted assessment state, review pause/resume, and audit events.',
    },
    {
      id: 'policy',
      title: 'policy.ts — citation fail-closed',
      href: `${AEP_BLOB}/packages/agent/src/policy.ts`,
      icon: 'shield',
      body: 'Unsupported evidence IDs lower confidence, change status to insufficient evidence, and force human review.',
    },
    {
      id: 'search',
      title: 'search.ts — hybrid retrieval',
      href: `${AEP_BLOB}/packages/retrieval/src/search.ts`,
      icon: 'search',
      body: 'Tenant- and visibility-scoped lexical and vector search combined through reciprocal rank fusion.',
    },
    {
      id: 'runner',
      title: 'runner.ts — durable jobs',
      href: `${AEP_BLOB}/packages/jobs/src/runner.ts`,
      icon: 'repeat',
      body: 'Duplicate protection, classified failures, retry backoff, dead-letter handling, and replay semantics.',
    },
  ],
  footnotes: [
    {
      label: 'Evidence ledger',
      href: `${AEP_BLOB}/docs/EVIDENCE_LEDGER.md`,
    },
    {
      label: 'Offline fake-provider report',
      href: `${AEP_BLOB}/reports/offline/2026-08-12-fake-provider.json`,
      note: 'offline harness evidence only',
    },
  ],
};

const explorerRows: RoleMatchRow[] = [
  {
    requirement: 'Observe real workflows',
    stage: 'Discover',
    claim: 'I watch the stuck point before choosing a tool.',
    evidence:
      'At Lore Machine, face-coherent generation assumed human characters; animal casts had no usable face path. Saturday Lab intake asks what is stuck before routing a path.',
    evidenceType: 'production-experience',
    whatChanged:
      'The Lore pipeline split: people keep face-to-face coherence; animals skip it and use prompt engineering so nonhuman casts could ship.',
    whatThisProves:
      'Observation changed the build. This is not a formal usability-study result.',
    inspectHref: '/projects/lore-machine',
    inspectLabel: 'Inspect Lore Machine',
    status: 'demonstrated',
    illustration: {
      src: deloitteFacilitatorWorkshopStill.src,
      alt: deloitteFacilitatorWorkshopStill.alt,
      local: true,
    },
  },
  {
    requirement: 'Early-stage prototyping',
    stage: 'Prototype',
    claim: 'I turn a brief into one reviewable workflow.',
    evidence:
      'Field Kit models brief intake, technique recommendation, review, and case-study export as a Next.js fixture demo.',
    evidenceType: 'fixture-prototype',
    whatChanged: 'A client-shaped loop exists as a console: brief → recommend → review → handoff.',
    whatThisProves:
      'Rapid prototyping habit. Live FLORA Techniques need published IDs and paid API access. Not a delivery method claim.',
    inspectHref: FIELD_KIT_REPO,
    inspectLabel: 'Inspect Field Kit repo',
    status: 'demonstrated',
    illustration: { visual: 'field-kit-loop' },
  },
  {
    requirement: 'Human review in the loop',
    stage: 'Govern',
    claim: 'Write-paths pause for a person; unsupported citations fail closed.',
    evidence:
      'AEP policy.ts lowers confidence and forces review when evidence IDs are missing. Field Kit keeps a human gate before handoff.',
    evidenceType: 'reference-implementation',
    whatChanged: 'Assessment state persists across a review pause; invalid citations cannot silently pass.',
    whatThisProves:
      'Governance as code in a TypeScript reference — not a hosted production system.',
    inspectHref: `${AEP_BLOB}/packages/agent/src/policy.ts`,
    inspectLabel: 'Inspect policy.ts',
    status: 'demonstrated',
    illustration: {
      src: taskAutomationSlide.src,
      alt: taskAutomationSlide.alt,
    },
  },
  {
    requirement: 'Product incubation',
    stage: 'Deploy',
    claim: 'I take a concept to a system people can operate.',
    evidence:
      'Lore Machine: prompt systems, generative image pipelines, APIs, and creator-facing workflows.',
    evidenceType: 'shipped-product',
    whatChanged: 'Creators could generate nonhuman casts without the face pipeline failing.',
    whatThisProves: 'Shipped product incubation with mixed stakeholders. CoreStory is a separate dossier.',
    inspectHref: '/projects/lore-machine',
    inspectLabel: 'Inspect Lore Machine',
    status: 'demonstrated',
    illustration: {
      src: lore.imageSrc,
      alt: lore.imageAlt,
    },
  },
  {
    requirement: 'Teach technical AI through a design lens',
    stage: 'Teach',
    claim: 'Mixed audiences leave with a path, not a lecture.',
    evidence:
      'Eighteen Oolite workshops plus Saturday Lab materials: intake, learner paths, help queue. Designed instruments; attendance and scores are not published.',
    evidenceType: 'teaching-instrument',
    whatChanged:
      'A recurring stuck point — GitHub deploy, editor choice, connecting a purchased domain — is routed through intake and a help queue.',
    whatThisProves: 'Instructional design you can inspect. Not measured learning gains.',
    inspectHref: saturdayLabLive.facilitator,
    inspectLabel: 'Inspect Saturday Lab facilitator',
    status: 'demonstrated',
    illustration: {
      src: teachingWorkshop.src,
      alt: teachingWorkshop.alt,
    },
  },
  {
    requirement: 'Leave the team able to operate the work',
    stage: 'Handoff',
    claim: 'The artifact is a runbook and a teaching page, not a dependency on me.',
    evidence:
      'Playwire solutions engineering; Oolite Digilab documentation; workshop handouts left behind.',
    evidenceType: 'production-experience',
    whatChanged: 'Partners keep a setup guide, failure procedure, and a repeatable exercise.',
    whatThisProves: 'Enablement as a delivery habit. Not a claim that I own a firm method.',
    inspectHref: '/oolite-arts',
    inspectLabel: 'Inspect Oolite case study',
    status: 'demonstrated',
    illustration: {
      src: playwire.imageSrc,
      alt: playwire.imageAlt,
    },
  },
];

const facilitatorCertifications: Opportunity['certifications'] = [
  {
    name: 'Cooper Union — Bachelor of Fine Arts (BFA)',
    detail: 'Studio practice + systems thinking foundation for teaching technical content to creative practitioners. No official mark is in this repo — wordmark plus book icon.',
    href: 'https://cooper.edu',
    icon: 'book',
  },
  {
    name: 'Public GenAI / agent curricula',
    detail:
      'The Art of AI Agents, Learn AI Without Losing Yourself, Own Your Digital Presence — multi-session programs with labs and handouts.',
    href: '/workshop/the-art-of-ai-agents',
    icon: 'graduation',
  },
  {
    name: 'Institutional Digilab teaching',
    detail: 'Oolite Arts Digital Lab facilitation — artist-facing AI and creative-tech workshops.',
    href: '/oolite-arts',
    logoSrc: OOLITE_LOGO_BLACK,
    logoSrcDark: OOLITE_LOGO_WHITE,
    logoAlt: 'Oolite Arts',
  },
];

const overlayNav: Opportunity['navItems'] = [
  { id: 'hero', label: 'Overview' },
  { id: 'honesty', label: 'Honesty' },
  { id: 'fit', label: 'Explorer' },
  { id: 'case-studies', label: 'Evidence' },
  { id: 'teaching-cred', label: 'Teaching' },
  { id: 'code-inspect', label: 'Code' },
  { id: 'process', label: 'Thin slice' },
  { id: 'resume', label: 'Contact' },
];

const flagshipNav: Opportunity['navItems'] = [
  { id: 'hero', label: 'Overview' },
  { id: 'honesty', label: 'Proof' },
  { id: 'fit', label: 'Explorer' },
  { id: 'case-studies', label: 'Evidence' },
  { id: 'teaching-cred', label: 'Teaching' },
  { id: 'code-inspect', label: 'Code' },
  { id: 'process', label: 'Thin slice' },
  { id: 'resume', label: 'Contact' },
];

type FacilitatorSurface = 'overlay' | 'flagship';

function createDesignFacilitatorFdeOpportunity(surface: FacilitatorSurface): Opportunity {
  const isFlagship = surface === 'flagship';
  return {
    slug: isFlagship ? 'forward-deployed' : 'deloitte-ai-design-facilitator-fde',
    status: 'active',
    listed: false,
    family: 'compact',
    applicationStatus: 'submitted',
    variant: 'compact',
    capabilitiesHref: capabilitiesPillarHref('design-creative-technology'),
    applicationBanner: deloitteAiDesignFacilitatorFdeBanner,
    bannerPlacement: 'after-hero',
    seo: isFlagship
      ? {
          title: 'Forward-Deployed Systems — AI Design Facilitator | Moises Sanabria',
          description:
            'I turn ambiguous needs into usable AI workflows, teach people to work with them, and make their limitations explicit.',
          indexable: true,
          keywords: [
            'AI Design Facilitator',
            'Forward Deployed Engineer',
            'human-centered design',
            'generative AI workshops',
            'product incubation',
            'rapid prototyping',
          ],
        }
      : {
          title: 'Moises Sanabria — Deloitte AI Design Facilitator Evidence',
          description:
            'Design facilitation, generative-AI teaching, rapid prototyping, and product incubation evidence for Deloitte AI Design Facilitator and Forward-Deployed Engineer II, requisition 360529.',
          indexable: false,
          keywords: [
            'AI Design Facilitator',
            'Forward Deployed Engineer',
            'Deloitte',
            'human-centered design',
            'generative AI workshops',
            'product incubation',
            'application evidence',
          ],
        },
    visibilityNote: isFlagship
      ? undefined
      : 'Unlisted application-evidence page for Deloitte AI Design Facilitator and Forward-Deployed Engineer II (requisition 360529). Recruiting for this listing ends October 1, 2026. Anyone with the URL can view it. Not affiliated with or endorsed by Deloitte.',
    company: isFlagship ? undefined : 'Deloitte',
    roleTitle: isFlagship
      ? 'AI Design Facilitator'
      : 'AI Design Facilitator and Forward-Deployed Engineer II',
    heroEyebrow: isFlagship
      ? 'FORWARD-DEPLOYED AI · DESIGN · ENABLEMENT'
      : 'APPLICATION EVIDENCE / DELOITTE / REQ. 360529 / THROUGH 1 OCT 2026',
    candidateName: 'Moises Sanabria',
    candidatePositioning:
      'I turn ambiguous needs into usable AI workflows, teach people to work with them, and make their limitations explicit.',
    audienceKeywords: {
      lead: 'How the work moves',
      terms: [
        { label: 'Observe', detail: 'Watch the real workflow and name the stuck point before choosing tools.' },
        { label: 'Frame', detail: 'Turn ambiguity into a bounded problem, an owner, and an acceptance test.' },
        { label: 'Prototype', detail: 'Build one reviewable workflow with generative tools and a manual fallback.' },
        { label: 'Govern', detail: 'Put a human gate on write-paths and make limitations explicit.' },
        { label: 'Teach', detail: 'Run a mixed-audience session so people can operate the work.' },
        { label: 'Handoff', detail: 'Leave a runbook and a teaching artifact the team can run without me.' },
      ],
    },
    heroMetaChips: [
      'Cooper Union BFA',
      '18 workshops delivered',
      'Product incubation / Lore Machine',
      'Cursor · Claude · Airtable · Figma',
      'Miami / U.S. citizen',
    ],
    heroPrimaryCta: { label: 'See the proof', href: '#honesty' },
    heroSecondaryCta: { label: 'Inspect evidence', href: '#fit' },
    navItems: isFlagship ? flagshipNav : overlayNav,
    hero: {
      headline: 'AI Design Facilitator',
      subheadline: 'I observe real workflows, turn ambiguity into usable AI systems, build human review into them, and leave teams able to operate the work.',
      introParagraphs: [
        'The work is both client-facing and internal enablement: mixed-audience workshops, user research that changes the build, and a system plus a teaching artifact the team can operate without me.',
      ],
      headshotSrc: sprint2026Headshot,
      headshotAlt: 'Moises Sanabria',
    },
    honestyOverlay: isFlagship ? undefined : overlayHonesty,
    proofSnapshot: isFlagship ? proofSnapshot : undefined,
    codeInspect,
    roleMatchSectionTitle: 'FDE evidence explorer',
    roleMatchIntro:
      'Interview Kickstart coverage — Discover, Prototype, Govern, Deploy, Teach, Handoff — not a mastered-stack list. Each stage maps to one inspectable artifact.',
    roleMatchColumnHeaders: {
      left: 'Stage',
      right: 'Claim',
    },
    roleMatchRows: explorerRows,
    featuredProjectIds: [
      'ai24',
      'lore-machine',
      'flora-field-kit',
      'n8n-gmail-intelligence',
      'bookleggers-commerce-automation',
    ],
    caseStudyColumns: 2,
    caseStudiesSectionTitle: 'Featured evidence',
    caseStudiesIntro:
      'Teaching and incubation first. Field Kit is a fixture-based prototype; the email organizer is a teaching artifact. Bookleggers is live client ops. Supporting AEP source is in Code.',
    caseStudyOverrides: [
      {
        evidenceId: 'ai24',
        title: 'Teaching + facilitation',
        category: 'OOLITE ARTS + PUBLIC WORKSHOPS',
        summary:
          'Eighteen hands-on technical workshops at Oolite Arts, plus public programs that teach generative AI through making. A designed Saturday Lab beat is getting people unstuck on GitHub deploy, Copilot / Cursor / Replit, and connecting a purchased domain — not a published attendance or score claim.',
        skillTags: ['Workshops', 'Curriculum', 'Critique', 'Enablement', 'Handoff'],
        href: '/oolite-arts',
        linkLabel: 'View Oolite case study',
        secondaryHref: saturdayLabLive.facilitator,
        secondaryLinkLabel: 'Saturday Lab facilitator',
        imageSrc: teachingWorkshop.src,
        imageAlt: teachingWorkshop.alt,
      },
      {
        evidenceId: 'lore-machine',
        title: 'Product incubation',
        category: 'LORE MACHINE — CONCEPT TO SHIPPED PLATFORM',
        summary:
          'Generative storytelling product: prompt systems, image pipelines, APIs, and creator-facing workflows. Face-coherent generation assumed human characters; animal and other nonhuman casts needed a different path. People still use face coherence; animals skip it and use prompt engineering so those stories could ship without the face pipeline failing. CoreStory is a separate dossier — not inferred here.',
        skillTags: ['Product incubation', 'GenAI', 'Prompt systems', 'APIs', 'Creator UX'],
        href: '/projects/lore-machine',
        linkLabel: 'View Lore Machine',
      },
      {
        evidenceId: 'flora-field-kit',
        title: 'Rapid-prototype FDE console',
        category: 'FIELD KIT — PROTOTYPE',
        summary:
          'Next.js prototype for brief intake, technique recommendation, review, and case-study export. The documented demo uses fixtures; live Techniques require published identifiers and paid API access. Independent work, not a client delivery. No hosted demo URL is published here — inspect the repo.',
        skillTags: ['Prototyping', 'Brief intake', 'Review', 'Handoff', 'Next.js'],
        href: FIELD_KIT_REPO,
        linkLabel: 'Inspect prototype and setup',
        visual: 'field-kit-loop',
      },
      {
        evidenceId: 'n8n-gmail-intelligence',
        title: n8nSpec.title,
        category: 'HANDS-ON GENAI TEACHING ARTIFACT',
        summary:
          'Email classification exercise from The Art of AI Agents: workflow diagram, label definitions, and a structured-output prompt that learners can inspect and adapt. This handout is teaching evidence, not a production reliability report.',
        skillTags: [...n8nSpec.skillTags],
        href: '/workshop/the-art-of-ai-agents/share',
        linkLabel: 'View workshop handout',
        secondaryHref: '/workshop/the-art-of-ai-agents',
        secondaryLinkLabel: 'Art of AI Agents',
        imageSrc: n8nSpec.imageSrc,
        imageAlt: n8nSpec.imageAlt,
      },
      {
        evidenceId: 'bookleggers-commerce-automation',
        title: bookleggersSpec.title,
        category: 'CLIENT OPS — BOOKLEGGERS LIBRARY',
        summary:
          'Make.com scenario connecting Square transactions to Airtable so library staff can see sales and inventory without a spreadsheet handoff. Independent client ops — not a Deloitte or AMC delivery.',
        skillTags: [...bookleggersSpec.skillTags],
        href: '/ai-engineering#proof',
        linkLabel: 'View in AI Engineering',
        imageSrc: bookleggersSpec.imageSrc,
        imageAlt: bookleggersSpec.imageAlt,
      },
    ],
    teachingHighlights: designFacilitationTeachingHighlights,
    certifications: facilitatorCertifications,
    skillsMatrixRows: isFlagship
      ? []
      : [
          {
            category: 'Facilitation',
            skills: 'Mixed-audience workshops, critique, technical translation, Digilab operations',
            icon: 'presentation',
          },
          {
            category: 'Human-centered design',
            skills: 'Intake, learner pathways, creator review interfaces, assessment design',
            icon: 'users',
          },
          {
            category: 'GenAI making',
            skills: 'Cursor, Claude, Airtable HITL, generative pipelines, rapid prototypes in Next.js / TypeScript',
            icon: 'sparkles',
          },
        ],
    processSectionTitle: 'Proposed design-forward FDE thin slice',
    processIntro:
      'A bounded first engagement: frame a real user problem, facilitate a mixed-audience session, prototype with generative tools, test, then leave a runbook and a teaching artifact. This is how I would enter an FDE method; it is not presented as completed client work.',
    processVisual: 'design-fde-loop',
    processSteps: [
      {
        title: 'Frame the user problem',
        description: 'Observe the current workflow with a user. Name the decision owner, baseline, data constraints, and a measurable acceptance criterion before choosing tools.',
      },
      {
        title: 'Facilitate a working session',
        description: 'Give designers, engineers, and product partners a shared task with paths for different skill levels. Capture assumptions and decide what is outside the first prototype.',
      },
      {
        title: 'Prototype with GenAI tools',
        description: 'Build one reviewable workflow. Keep deterministic rules outside the model, limit tool permissions, and define a manual fallback. Add an agent only if the task needs one.',
      },
      {
        title: 'Test with real users',
        description: 'Observe task completion and errors, then test expected, ambiguous, and adversarial inputs. Compare against the baseline; record what changed and what remains uncertain.',
      },
      {
        title: 'Leave a teaching artifact',
        description: 'Leave an owner, setup guide, failure procedure, and repeatable exercise. Ask a teammate to operate and explain the workflow without assistance before calling handover complete.',
      },
    ],
    ctas: {
      ...sprint2026Ctas(
        isFlagship
          ? 'AI Design Facilitator'
          : 'Deloitte AI Design Facilitator and Forward-Deployed Engineer II',
      ),
      resumePdfPath: TECH_CV_PDF,
      resumePdfLabel: 'Download résumé',
      evidenceBriefPdfPath: EVIDENCE_BRIEF_PDF,
      evidenceBriefLabel: 'Open technical evidence brief',
      github: AEP_REPO,
      githubLabel: 'Inspect AEP source and limitations',
      githubProfile: 'https://github.com/moisestech',
      careerPacket: isFlagship ? undefined : '/forward-deployed',
      caseStudiesAnchor: undefined,
      resumePrintPath: undefined,
    },
    techLogoIds: [],
    animatedLogoBand: isFlagship ? undefined : designFacilitationClaimedStackBand,
    resumeSectionTitle: 'Discuss the work, inspect the evidence',
    resumeSectionNote: isFlagship
      ? 'I bring teaching, design practice, and AI product engineering. AEP is a supporting TypeScript reference implementation with synthetic evidence and a fake-model evaluation harness; it is not a production deployment or live-model quality claim.'
      : `I bring teaching, design practice, and AI product engineering. AEP is a supporting TypeScript reference implementation with synthetic evidence and a fake-model evaluation harness; it is not a production deployment or live-model quality claim. Listing: ${EMPLOYER_URL}`,
  };
}

/** Private noindex overlay — /opportunities/deloitte-ai-design-facilitator-fde */
export const deloitteAiDesignFacilitatorFdeOpportunity =
  createDesignFacilitatorFdeOpportunity('overlay');

/** Public interview send — /forward-deployed */
export const forwardDeployedInterviewOpportunity =
  createDesignFacilitatorFdeOpportunity('flagship');
