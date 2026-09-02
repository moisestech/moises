/**
 * Deloitte — AI Design Facilitator and Forward-Deployed Engineer II
 * Public send: /forward-deployed
 * Private overlay: /opportunities/deloitte-ai-design-facilitator-fde
 * Alias: /applied-ai/deloitte-ai-design-facilitator
 *
 * One factory, two surfaces. Public flagship is evergreen (no listing URL,
 * deadline, or employer overlay). Private overlay keeps requisition 360529.
 */

import type { HonestyOverlay, Opportunity } from './types';
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
import { FDE_PARTNER_LOGOS } from './fdePartnerLogos';
import { digilabMedia } from '@/content/oolite-arts/media';
import {
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

const teachingWorkshop = digilabMedia['workshop.art-tech-coding'];
const n8nSpec = automationProjectSpecs['n8n-gmail-intelligence'];
const bookleggersSpec = automationProjectSpecs['bookleggers-commerce-automation'];
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

const facilitatorCertifications: Opportunity['certifications'] = [
  {
    name: 'Cooper Union — Bachelor of Fine Arts (BFA)',
    detail: 'Studio practice + systems thinking foundation for teaching technical content to creative practitioners.',
    href: 'https://cooper.edu',
    logoSrc: FDE_PARTNER_LOGOS.cooperUnion.src,
    logoAlt: FDE_PARTNER_LOGOS.cooperUnion.alt,
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
    logoSrc: FDE_PARTNER_LOGOS.oolite.src,
    logoAlt: FDE_PARTNER_LOGOS.oolite.alt,
  },
];

const overlayNav: Opportunity['navItems'] = [
  { id: 'hero', label: 'Overview' },
  { id: 'honesty', label: 'Honesty' },
  { id: 'fit', label: 'Explorer' },
  { id: 'case-studies', label: 'Evidence' },
  { id: 'teaching-cred', label: 'Teaching' },
  { id: 'code-inspect', label: 'Code', href: '/workshop/agentic-evidence-pipeline#harness' },
  { id: 'process', label: 'Thin slice', href: '/workshop/agentic-evidence-pipeline#process' },
  { id: 'resume', label: 'Contact' },
];

const flagshipNav: Opportunity['navItems'] = [
  { id: 'hero', label: 'Overview' },
  { id: 'honesty', label: 'Proof' },
  { id: 'fit', label: 'Explorer' },
  { id: 'case-studies', label: 'Evidence' },
  { id: 'teaching-cred', label: 'Teaching' },
  { id: 'code-inspect', label: 'Code', href: '/workshop/agentic-evidence-pipeline#harness' },
  { id: 'process', label: 'Thin slice', href: '/workshop/agentic-evidence-pipeline#process' },
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
    showAepHarness: false,
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
      {
        label: 'Cooper Union BFA',
        href: 'https://cooper.edu',
        logoSrc: FDE_PARTNER_LOGOS.cooperUnion.src,
        logoAlt: FDE_PARTNER_LOGOS.cooperUnion.alt,
      },
      { label: '18 workshops delivered', href: '/workshops', icon: 'graduation' },
      'Product incubation / Lore Machine',
      'Miami / U.S. citizen',
    ],
    heroToolMarks: designFacilitationClaimedStackBand.slice(0, 4),
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
    roleMatchSectionTitle: 'FDE evidence explorer',
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
        logoSrc: oolite.logoSrc,
        logoAlt: oolite.logoAlt,
        media: oolite.media,
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
        logoSrc: lore.logoSrc,
        logoAlt: lore.logoAlt,
        media: lore.media,
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
        logoSrc: bookleggers.logoSrc,
        logoAlt: bookleggers.logoAlt,
        media: bookleggers.media,
      },
      {
        evidenceId: 'agentic-evidence-pipeline',
        title: aep.title,
        category: 'AEP — EVIDENCE IN, REVIEWABLE DECISIONS OUT',
        summary: `${aep.whatThisProves} ${aep.limitation}`,
        skillTags: aep.tools ?? ['TypeScript', 'Postgres', 'human review'],
        href: aep.inspectHref,
        linkLabel: aep.inspectLabel,
        secondaryHref: AEP_REPO,
        secondaryLinkLabel: 'AEP on GitHub',
        imageSrc: aepProject.imageSrc,
        imageSrcDark: aepProject.imageSrcDark,
        imageAlt: aepProject.imageAlt,
        evidenceType: aep.evidenceType,
        media: aep.media,
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
      return item;
    }),
    sectionQuotes: [
      {
        after: 'hero',
        quote: 'Watch the stuck point. Leave a path the team can run.',
        variant: 'terminal',
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
    processSteps: [],
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
