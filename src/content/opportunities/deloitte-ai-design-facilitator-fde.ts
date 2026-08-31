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
} from './types';
import { deloitteAiDesignFacilitatorFdeBanner } from '@/content/evidence/applicationBanners';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { evidenceProjects } from '@/content/evidence/projects';
import { capabilitiesPillarHref } from '@/content/capabilities';
import { sprint2026Ctas, sprint2026Headshot } from './shared-sprint-2026';
import {
  designFacilitationTeachingHighlights,
  saturdayLabLive,
} from './packs/designFacilitationEvidencePack';
import { designFacilitationClaimedStackBand } from '@/content/evidence/recruitingLogoBand';
import { digilabMedia } from '@/content/oolite-arts/media';
import {
  AEP_BLOB,
  AEP_REPO,
  FIELD_KIT_DEMO,
  FIELD_KIT_DEMO_CASE,
  FIELD_KIT_REPO,
  FDE_EXPLORER_IDS,
  FDE_FEATURED_PROJECT_IDS,
  FDE_PROOF_IDS,
  FDE_SUPPORTING_IDS,
  fdeItem,
  toExplorerRow,
  toProofCard,
  toSupportingItem,
} from './fdeEvidenceRegistry';

const EMPLOYER_URL =
  'https://apply.deloitte.com/en_US/careers/JobDetail/AI-Design-Facilitator-and-Forward-Deployed-Engineer-II/360529';

const TECH_CV_PDF = '/resume/moises-sanabria-technology-cv.pdf';
const EVIDENCE_BRIEF_PDF = '/resume/MoisesSanabria_FDE_Technical_Evidence.pdf';

const OOLITE_LOGO_BLACK =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753833092/tech-nonprofit/oolite/logos/oolite-arts-logo-black_sx0l62.png';
const OOLITE_LOGO_WHITE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753833092/tech-nonprofit/oolite/logos/oolite-arts-logo-white_sbfeqz.png';

const teachingWorkshop = digilabMedia['workshop.art-tech-coding'];
const n8nSpec = automationProjectSpecs['n8n-gmail-intelligence'];
const bookleggersSpec = automationProjectSpecs['bookleggers-commerce-automation'];
const playwireProject = evidenceProjects['playwire-alumni'];
const aepProject = evidenceProjects['agentic-evidence-pipeline'];
const oolite = fdeItem('oolite-workshops');
const lore = fdeItem('lore-machine');
const bookleggers = fdeItem('bookleggers');
const aep = fdeItem('aep');

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

const codeInspect: CodeInspectBlock = {
  title: 'Code to inspect',
  intro:
    'Evidence in. Reviewable decisions out. Strongest public files from the Agentic Evidence Pipeline — a TypeScript reference implementation with synthetic fixtures and a fake-model evaluation harness. Not a hosted customer product, not a live-model quality claim, and not client platform work. Demo rasters from the AEP repo are not copied here.',
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
    heroActionLayout: 'primary-then-rest',
    showFdeRoleMap: true,
    showAepHarness: true,
    seo: isFlagship
      ? {
          title: 'Forward-Deployed AI Systems | Moises Sanabria',
          description:
            'I turn ambiguous needs into usable AI workflows, teach people to work with them, and make their limitations explicit.',
          indexable: true,
          keywords: [
            'Forward-Deployed AI Systems',
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
        {
          label: 'Discover',
          detail: 'Observe the real workflow and frame a bounded problem, an owner, and an acceptance test before choosing tools.',
        },
        { label: 'Prototype', detail: 'Build one reviewable workflow with generative tools and a manual fallback.' },
        { label: 'Govern', detail: 'Put a human gate on write-paths and make limitations explicit.' },
        { label: 'Deploy', detail: 'Take a concept to a system people can operate.' },
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
      headline: isFlagship ? 'Forward-Deployed AI Systems' : 'AI Design Facilitator and Forward-Deployed Engineer II',
      subheadline: isFlagship
        ? 'AI Design Facilitator — I watch real workflows, turn ambiguity into usable AI systems, build human review into them, and leave teams able to operate the work.'
        : 'I watch real workflows, turn ambiguity into usable AI systems, build human review into them, and leave teams able to operate the work.',
      introParagraphs: [
        'The work is both client-facing and internal enablement: mixed-audience workshops, user research that changes the build, and a system plus a teaching artifact the team can operate without me.',
      ],
      headshotSrc: sprint2026Headshot,
      headshotAlt: 'Moises Sanabria',
    },
    honestyOverlay: isFlagship ? undefined : overlayHonesty,
    proofSnapshot: isFlagship
      ? {
          title: 'Proof snapshot',
          intro:
            'Each card is an evidence type, not a claim of completeness. Tools sit on the card they actually support. Stage color and maturity treatment are separate encodings.',
          cards: FDE_PROOF_IDS.map((id) => toProofCard(fdeItem(id))),
        }
      : undefined,
    codeInspect,
    roleMatchSectionTitle: 'FDE evidence explorer',
    roleMatchIntro:
      'Interview Kickstart coverage — Discover, Prototype, Govern, Deploy, Teach, Handoff — not a mastered-stack list. Each stage maps to one inspectable artifact.',
    roleMatchColumnHeaders: {
      left: 'Stage',
      right: 'Claim',
    },
    roleMatchRows: FDE_EXPLORER_IDS.map((id) => toExplorerRow(fdeItem(id), surface)),
    featuredProjectIds: [...FDE_FEATURED_PROJECT_IDS],
    caseStudyColumns: 2,
    caseStudiesSectionTitle: 'Featured evidence',
    caseStudiesIntro:
      'Four primary cases. Field Kit, the February n8n workshop, and Playwire sit under See all — supporting, not competing with these.',
    caseStudyOverrides: [
      {
        evidenceId: 'ai24',
        title: oolite.title,
        category: 'OOLITE ARTS + PUBLIC WORKSHOPS',
        summary: `${oolite.whatChanged} ${oolite.limitation}`,
        skillTags: ['Workshops', 'Curriculum', 'Critique', 'Enablement', 'Handoff'],
        href: oolite.inspectHref,
        linkLabel: oolite.inspectLabel,
        secondaryHref: saturdayLabLive.facilitator,
        secondaryLinkLabel: 'Saturday Lab facilitator',
        imageSrc: teachingWorkshop.src,
        imageAlt: teachingWorkshop.alt,
        evidenceType: oolite.evidenceType,
      },
      {
        evidenceId: 'lore-machine',
        title: lore.title,
        category: 'LORE MACHINE — CONCEPT TO SHIPPED PLATFORM',
        summary: `${lore.whatChanged} ${lore.limitation}`,
        skillTags: ['Product incubation', 'GenAI', 'Prompt systems', 'APIs', 'Creator UX'],
        href: lore.inspectHref,
        linkLabel: lore.inspectLabel,
        evidenceType: lore.evidenceType,
      },
      {
        evidenceId: 'bookleggers-commerce-automation',
        title: bookleggers.title,
        category: 'CLIENT OPS — BOOKLEGGERS LIBRARY',
        summary: `${bookleggers.whatChanged} ${bookleggers.limitation}`,
        skillTags: [...bookleggersSpec.skillTags],
        href: bookleggers.inspectHref,
        linkLabel: bookleggers.inspectLabel,
        imageSrc: bookleggersSpec.imageSrc,
        imageAlt: bookleggersSpec.imageAlt,
        evidenceType: bookleggers.evidenceType,
      },
      {
        evidenceId: 'agentic-evidence-pipeline',
        title: aep.title,
        category: 'AEP — EVIDENCE IN, REVIEWABLE DECISIONS OUT',
        summary: `${aep.whatThisProves} ${aep.limitation}`,
        skillTags: aep.tools ?? ['TypeScript', 'Postgres', 'human review'],
        href: '#code-inspect',
        linkLabel: 'Inspect code on this page',
        secondaryHref: AEP_REPO,
        secondaryLinkLabel: 'AEP on GitHub',
        imageSrc: aepProject.imageSrc,
        imageSrcDark: aepProject.imageSrcDark,
        imageAlt: aepProject.imageAlt,
        evidenceType: aep.evidenceType,
      },
    ],
    supportingEvidenceTitle: 'See all — supporting evidence',
    supportingEvidenceIntro:
      'Field Kit is last on purpose. The n8n card is the February teaching workshop. Playwire is a one-line supporting tile — not a featured case.',
    supportingEvidence: FDE_SUPPORTING_IDS.map((id) => {
      const item = toSupportingItem(fdeItem(id));
      if (id === 'field-kit') {
        return {
          ...item,
          body: `${item.body} Demo case: ${FIELD_KIT_DEMO_CASE.replace('https://', '')}.`,
          href: FIELD_KIT_DEMO,
          secondaryHref: FIELD_KIT_REPO,
        };
      }
      if (id === 'n8n-workshop') {
        return {
          ...item,
          title: n8nSpec.teachingTitle ?? item.title,
          body: n8nSpec.teachingEvidenceLine ?? item.body,
        };
      }
      if (id === 'playwire') {
        return {
          ...item,
          imageSrc: playwireProject.imageSrc,
          imageSrcDark: playwireProject.imageSrcDark,
          imageAlt: playwireProject.imageAlt,
        };
      }
      return item;
    }),
    sectionQuotes: [
      {
        after: 'hero',
        quote: 'Watch the stuck point. Leave a path the team can run.',
      },
      {
        after: 'cases',
        quote: 'Four cases you can inspect. Supporting work is labeled as supporting.',
      },
      {
        after: 'teaching',
        quote: 'The model interprets ambiguity. The harness owns context, tools, permissions, and review.',
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
      'A bounded first engagement in the same six words as the rest of this page. Facilitate and test are verbs inside Teach and Prototype — not extra stages. This is how I would enter an FDE method; it is not presented as completed client work.',
    processVisual: 'design-fde-loop',
    processSteps: [
      {
        title: 'Discover',
        description:
          'Observe the current workflow with a user, then frame the decision owner, baseline, data constraints, and a measurable acceptance criterion before choosing tools.',
      },
      {
        title: 'Prototype',
        description:
          'Build one reviewable workflow. Keep deterministic rules outside the model, limit tool permissions, and define a manual fallback. Test expected, ambiguous, and adversarial inputs against the baseline.',
      },
      {
        title: 'Govern',
        description:
          'Put a human gate on write-paths. Unsupported citations fail closed; uncertain results pause for a person. Make limitations explicit.',
      },
      {
        title: 'Deploy',
        description:
          'Take the slice to a system people can operate. Record what changed and what remains uncertain.',
      },
      {
        title: 'Teach',
        description:
          'Facilitate a mixed-audience session so designers, engineers, and product partners can operate the work. Capture assumptions and decide what is outside the first slice.',
      },
      {
        title: 'Handoff',
        description:
          'Leave an owner, setup guide, failure procedure, and repeatable exercise. Ask a teammate to operate and explain the workflow without assistance before calling handover complete.',
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
