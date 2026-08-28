/**
 * Deloitte — AI Design Facilitator and Forward-Deployed Engineer II
 * /opportunities/deloitte-ai-design-facilitator-fde
 * Alias: /applied-ai/deloitte-ai-design-facilitator
 *
 * Compact application-evidence overlay for requisition 360529.
 * Lead with design practice, facilitation, and product incubation; keep
 * consulting-platform cadence as an explicit ramp.
 */

import type { HonestyOverlay, Opportunity } from './types';
import { deloitteAiDesignFacilitatorFdeBanner } from '@/content/evidence/applicationBanners';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { capabilitiesPillarHref } from '@/content/capabilities';
import { sprint2026Ctas, sprint2026Headshot } from './shared-sprint-2026';
import {
  genAiCurriculumSmeCertifications,
} from './packs/genAiCurriculumSmePack';
import {
  designFacilitationTeachingHighlights,
  saturdayLabLive,
} from './packs/designFacilitationEvidencePack';
import { ART_OF_AI_AGENTS_SCREENSHOTS } from '@/constants/art-of-ai-agents';
import { OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/oolite-arts/media';

const EMPLOYER_URL =
  'https://apply.deloitte.com/en_US/careers/JobDetail/AI-Design-Facilitator-and-Forward-Deployed-Engineer-II/360529';

const TECH_CV_PDF = '/resume/moises-sanabria-technology-cv.pdf';
const EVIDENCE_BRIEF_PDF = '/resume/MoisesSanabria_FDE_Technical_Evidence.pdf';
const FIELD_KIT_REPO = 'https://github.com/moisestech/flora-field-kit';
const AEP_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';

const lore = evidenceProjects['lore-machine'];
const playwire = evidenceProjects['playwire-alumni'];
const fieldKit = evidenceProjects['flora-field-kit'];
const n8nSpec = automationProjectSpecs['n8n-gmail-intelligence'];

const taskAutomationSlide = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'artist-task-automation-1',
)!;
const emailInboxDiagram = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'email-inbox-organizer-diagram',
)!;

const honestyOverlay: HonestyOverlay = {
  title: 'What I bring and where I would ramp',
  intro:
    'My evidence spans teaching, creator-facing AI products, and client-facing engineering. Workshop materials, product contributions, and reference implementations are identified separately.',
  provenTitle: 'Proven now',
  proven: [
    'Cooper Union BFA and a design practice applied to actual project work — installations, product interfaces, and workshop curricula.',
    'Eighteen hands-on technical workshops at Oolite Arts, plus public programs that turn generative AI into exercises mixed audiences can follow.',
    'Generative AI tools in software, design, and product work: Cursor, Claude, Airtable, OpenAI / Anthropic APIs, and generative image pipelines.',
    'Product incubation at Lore Machine — from concept to a shipped generative storytelling platform with mixed stakeholders.',
    'Client-facing translation at Playwire and with institutional partners: listen, prototype, explain tradeoffs, leave the team able to operate the work.',
    'Inspectable workshop design: intake questions, differentiated learner paths, practical exercises, and an exit-ticket instrument.',
  ],
  notClaimedTitle: 'Not claimed yet',
  notClaimed: [
    'Deloitte client work or Advertising, Marketing & Commerce platform ownership.',
    'Measured learning gains or a formal usability-study result from the materials linked here.',
    'Ownership of Deloitte’s existing Forward-Deployed Engineer method.',
    'GitHub Copilot or Replit as the primary daily stack — Cursor and Claude are.',
  ],
  rampStatement:
    'I would bring design practice, hands-on teaching, and product engineering while learning the team’s delivery method, client governance, and platform conventions.',
};

/**
 * Deloitte AI Design Facilitator FDE II — compact recruiter dossier.
 */
export const deloitteAiDesignFacilitatorFdeOpportunity: Opportunity = {
  slug: 'deloitte-ai-design-facilitator-fde',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'submitted',
  variant: 'compact',
  capabilitiesHref: capabilitiesPillarHref('design-creative-technology'),
  applicationBanner: deloitteAiDesignFacilitatorFdeBanner,
  seo: {
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
  visibilityNote:
    'Unlisted application-evidence page for Deloitte AI Design Facilitator and Forward-Deployed Engineer II (requisition 360529). Anyone with the URL can view it. Not affiliated with or endorsed by Deloitte.',
  company: 'Deloitte',
  roleTitle: 'AI Design Facilitator and Forward-Deployed Engineer II',
  heroEyebrow: 'APPLICATION EVIDENCE / DELOITTE / REQ. 360529',
  candidateName: 'Moises Sanabria',
  heroMetaChips: [
    'Cooper Union BFA',
    '18 workshops delivered',
    'Product incubation / Lore Machine',
    'Cursor · Claude · Airtable',
    'Miami / U.S. citizen',
  ],
  heroPrimaryCta: { label: 'View the evidence', href: '#case-studies' },
  heroSecondaryCta: { label: 'Teaching', href: '#teaching-cred' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'honesty', label: 'Scope' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Evidence' },
    { id: 'teaching-cred', label: 'Teaching' },
    { id: 'process', label: 'Thin slice' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'AI Design Facilitator',
    subheadline: 'Teach technical AI through a design lens. Prototype. Incubate the right thing.',
    introParagraphs: [
      'I run mixed-audience workshops, translate generative-AI tools into exercises people can actually finish, and take ambiguous product briefs from sketch to working prototype. The through-line is design: frame the user problem, test the prototype, then leave a system and a teaching artifact the team can operate.',
    ],
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  honestyOverlay,
  roleMatchSectionTitle: 'Role-to-evidence map',
  roleMatchIntro:
    'Deloitte responsibilities mapped to inspectable materials and project contributions. A lesson plan demonstrates instructional design; a prototype demonstrates implementation within its stated limits.',
  roleMatchColumnHeaders: {
    left: 'Deloitte responsibility',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Teach technical AI skills through a design lens',
      evidence:
        'Eighteen Oolite workshops plus public curricula (The Art of AI Agents, Learn AI Without Losing Yourself). A recurring Saturday Lab stuck point is deploying from GitHub and using Copilot, Cursor, or Replit to create a repo and connect a purchased domain — the facilitator guide routes that through intake, learner paths, and a help queue. Those pages are designed instruments; attendance and scores are not published.',
      status: 'demonstrated',
      illustration: {
        src: taskAutomationSlide.src,
        alt: taskAutomationSlide.alt,
      },
    },
    {
      requirement: 'User research, user testing, and design workshops',
      evidence:
        'At Lore Machine, face-coherent generation assumed human characters; animal and other nonhuman casts had no usable face path. The pipeline split: people keep face-to-face coherence; animals skip that and use prompt engineering. Creators could then generate nonhuman casts without the face pipeline failing. Saturday Lab materials show the same research-to-adaptation loop in teaching (intake, paths, help queue) as designed instruments, not measured outcomes.',
      status: 'demonstrated',
      illustration: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    },
    {
      requirement: 'Shape where human-centered design fits the FDE method',
      evidence:
        'Workshop framing before build: map the user, define what “done” means, put a human-approval gate on write-paths, then hand off a runbook. Field Kit models the same loop as a rapid-prototype console — prototype, not a Deloitte method claim.',
      status: 'transferable',
      illustration: {
        src: fieldKit.imageSrc,
        alt: fieldKit.imageAlt,
        local: fieldKit.imageLocal,
      },
    },
    {
      requirement: 'Early-stage forward-deployed engineering and rapid prototyping',
      evidence:
        'Lore Machine production GenAI; Field Kit brief-to-handoff console (prototype); Airtable HITL automations. Cursor and Claude are the daily generative-AI development tools.',
      status: 'demonstrated',
      illustration: {
        src: emailInboxDiagram.src,
        alt: emailInboxDiagram.alt,
      },
    },
    {
      requirement: 'Product incubation from concept to code',
      evidence:
        'Founding engineer / Chief Prompt Officer at Lore Machine: prompt systems, generative image pipelines, APIs, and creator-facing workflows that nontechnical users could operate.',
      status: 'demonstrated',
      illustration: {
        src: lore.imageSrc,
        alt: lore.imageAlt,
      },
    },
    {
      requirement: 'Client-facing guidance and internal enablement',
      evidence:
        'Playwire solutions engineering with publishers; Oolite stakeholder operations; workshop handouts and Digilab documentation left behind so teams can run the work without me. Oolite Digital Lab: https://oolitearts.org/digital-lab/',
      status: 'demonstrated',
      illustration: {
        src: playwire.imageSrc,
        alt: playwire.imageAlt,
      },
    },
  ],
  featuredProjectIds: ['ai24', 'lore-machine', 'flora-field-kit', 'n8n-gmail-intelligence'],
  caseStudyColumns: 2,
  caseStudiesSectionTitle: 'Featured evidence',
  caseStudiesIntro:
    'Teaching and incubation first. Field Kit is a fixture-based prototype; the email organizer is linked as an inspectable teaching artifact. Supporting AEP source is available in the technical-evidence links below.',
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
        'Next.js prototype for brief intake, technique recommendation, review, and case-study export. The documented demo uses fixtures; live Techniques require published identifiers and paid API access. Independent work, not a Deloitte delivery.',
      skillTags: ['Prototyping', 'Brief intake', 'Review', 'Handoff', 'Next.js'],
      href: FIELD_KIT_REPO,
      linkLabel: 'Inspect prototype and setup',
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
    },
  ],
  teachingHighlights: designFacilitationTeachingHighlights,
  certifications: [...genAiCurriculumSmeCertifications],
  skillsMatrixRows: [
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
    'A bounded first engagement: frame a real user problem, facilitate a mixed-audience session, prototype with generative tools, test, then leave a runbook and a teaching artifact. This is how I would enter the FDE method; it is not presented as completed Deloitte client work.',
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
    ...sprint2026Ctas('Deloitte AI Design Facilitator and Forward-Deployed Engineer II'),
    resumePdfPath: TECH_CV_PDF,
    resumePdfLabel: 'Download résumé',
    evidenceBriefPdfPath: EVIDENCE_BRIEF_PDF,
    evidenceBriefLabel: 'Open technical evidence brief',
    github: AEP_REPO,
    githubLabel: 'Inspect AEP source and limitations',
    githubProfile: 'https://github.com/moisestech',
    careerPacket: '/forward-deployed',
    caseStudiesAnchor: undefined,
    resumePrintPath: undefined,
  },
  techLogoIds: [],
  resumeSectionTitle: 'Discuss the work, inspect the evidence',
  resumeSectionNote: `I bring teaching, design practice, and AI product engineering. AEP is a supporting TypeScript reference implementation with synthetic evidence and a fake-model evaluation harness; it is not a production deployment or live-model quality claim. Listing: ${EMPLOYER_URL}`,
};
