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
import { productionAiAutomationPack } from '@/content/evidence/productionAiAutomationPack';
import { capabilitiesPillarHref } from '@/content/capabilities';
import { sprint2026Ctas, sprint2026Headshot } from './shared-sprint-2026';
import {
  genAiCurriculumSmeCertifications,
  genAiCurriculumSmeTeachingHighlights,
} from './packs/genAiCurriculumSmePack';
import { ART_OF_AI_AGENTS_SCREENSHOTS } from '@/constants/art-of-ai-agents';
import { OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/oolite-arts/media';

const EMPLOYER_URL =
  'https://apply.deloitte.com/en_US/careers/JobDetail/AI-Design-Facilitator-and-Forward-Deployed-Engineer-II/360529';

const TECH_CV_PDF = '/resume/moises-sanabria-technology-cv.pdf';
const EVIDENCE_BRIEF_PDF = '/resume/MoisesSanabria_FDE_Technical_Evidence.pdf';
const FIELD_KIT_REPO = 'https://github.com/moisestech/flora-field-kit';
const FIELD_KIT_DEMO = 'https://flora-field-kit.moises.tech';

const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;
const playwire = evidenceProjects['playwire-alumni'];
const fieldKit = evidenceProjects['flora-field-kit'];
const n8nSpec = automationProjectSpecs['n8n-gmail-intelligence'];
const n8nPack = productionAiAutomationPack.n8nGmailIntelligence;

const taskAutomationSlide = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'artist-task-automation-1',
)!;
const emailInboxDiagram = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'email-inbox-organizer-diagram',
)!;

const honestyOverlay: HonestyOverlay = {
  title: 'Strong design-facilitation match. Consulting cadence is the ramp.',
  intro:
    'This page does not treat workshop teaching as a substitute for Deloitte client tenure. It separates the design, facilitation, and incubation work I can contribute immediately from the consulting-platform context I would still need to learn.',
  provenTitle: 'Proven now',
  proven: [
    'Cooper Union BFA and a design practice applied to actual project work — installations, product interfaces, and workshop curricula.',
    'Eighteen hands-on technical workshops at Oolite Arts, plus public programs that turn generative AI into exercises mixed audiences can follow.',
    'Generative AI tools in software, design, and product work: Cursor, Claude, Airtable, OpenAI / Anthropic APIs, and generative image pipelines.',
    'Product incubation at Lore Machine — from concept to a shipped generative storytelling platform with mixed stakeholders.',
    'Client-facing translation at Playwire and with institutional partners: listen, prototype, explain tradeoffs, leave the team able to operate the work.',
    'Human-centered workshop design: artist intake, critique, user testing of tools, and iterating the brief before scaling the build.',
  ],
  notClaimedTitle: 'Not claimed yet',
  notClaimed: [
    'Deloitte client work or Advertising, Marketing & Commerce platform ownership.',
    'A formal UX-researcher title inside a consultancy.',
    'Ownership of Deloitte’s existing Forward-Deployed Engineer method.',
    'GitHub Copilot or Replit as the primary daily stack — Cursor and Claude are.',
    'Current employment on a 50% travel consulting cadence.',
  ],
  rampStatement:
    'If the seat is a career UX researcher who does not ship, I am not that candidate. If the team needs someone who can teach technical AI through making, run design-forward workshops, prototype with generative tools, and incubate a product with mixed stakeholders, the match is direct.',
};

/**
 * Deloitte AI Design Facilitator FDE II — compact recruiter dossier.
 */
export const deloitteAiDesignFacilitatorFdeOpportunity: Opportunity = {
  slug: 'deloitte-ai-design-facilitator-fde',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'draft',
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
    'Private application-evidence page for Deloitte AI Design Facilitator and Forward-Deployed Engineer II (requisition 360529). Not affiliated with or endorsed by Deloitte.',
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
    { id: 'honesty', label: 'Honesty' },
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
    'Deloitte responsibilities mapped to public, working evidence. Advertising, Marketing & Commerce platform work is not inferred from these rows.',
  roleMatchColumnHeaders: {
    left: 'Deloitte responsibility',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Teach technical AI skills through a design lens',
      evidence:
        'Eighteen Oolite workshops plus public curricula (The Art of AI Agents, Learn AI Without Losing Yourself) that turn Cursor-class tools, Airtable, and LLM workflows into hands-on exercises for designers, engineers, and nontechnical practitioners.',
      status: 'demonstrated',
      illustration: {
        src: taskAutomationSlide.src,
        alt: taskAutomationSlide.alt,
      },
    },
    {
      requirement: 'User research, user testing, and design workshops',
      evidence:
        'Artist intake, critique sessions, and tool testing inside live workshops — participants try the workflow, the brief gets rewritten, then the prototype is rebuilt. Closely related human-centered design on actual project work, not a consultancy UX-research title.',
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
    'Teaching and incubation first. Field Kit is a rapid-prototype console, not a Deloitte delivery. The Gmail agent is production / verified live.',
  caseStudyOverrides: [
    {
      evidenceId: 'ai24',
      title: 'Teaching + facilitation',
      category: 'OOLITE ARTS + PUBLIC WORKSHOPS',
      summary:
        'Eighteen hands-on technical workshops at Oolite Arts, plus public programs that teach generative AI through making. Evidence of mixed-audience facilitation, critique, and leaving teams able to operate the tools.',
      skillTags: ['Workshops', 'Curriculum', 'Critique', 'Enablement', 'Handoff'],
      href: '/oolite-arts',
      linkLabel: 'View Oolite case study',
      secondaryHref: 'https://oolitearts.org/digital-lab/',
      secondaryLinkLabel: 'Oolite Digital Lab',
    },
    {
      evidenceId: 'lore-machine',
      title: 'Product incubation',
      category: 'LORE MACHINE — CONCEPT TO SHIPPED PLATFORM',
      summary:
        'Generative storytelling product: prompt systems, image pipelines, APIs, and creator-facing workflows. Evidence of incubating an AI product with designers, engineers, and nontechnical users in the loop.',
      skillTags: ['Product incubation', 'GenAI', 'Prompt systems', 'APIs', 'Creator UX'],
      href: '/projects/lore-machine',
      linkLabel: 'View Lore Machine',
    },
    {
      evidenceId: 'flora-field-kit',
      title: 'Rapid-prototype FDE console',
      category: 'FIELD KIT — PROTOTYPE',
      summary:
        'Standalone Next.js console for brief intake, technique recommendation, run/review, and shareable case-study export. Models the FDE loop. Independent prototype — not affiliated with Deloitte.',
      skillTags: ['Prototyping', 'Brief intake', 'Review', 'Handoff', 'Next.js'],
      href: FIELD_KIT_DEMO,
      linkLabel: 'Open Field Kit demo',
      secondaryHref: FIELD_KIT_REPO,
      secondaryLinkLabel: 'View repository',
    },
    {
      evidenceId: 'n8n-gmail-intelligence',
      title: n8nSpec.title,
      category: `HANDS-ON GENAI TEACHING ARTIFACT — ${n8nPack.buildState.replace('_', ' ')}`,
      summary:
        'Production n8n + Airtable pattern taught in The Art of AI Agents: classify inbound mail, apply structured labels, pause for human approval. Workshop diagram and copy-paste prompts are public.',
      skillTags: [...n8nSpec.skillTags],
      href: n8nSpec.href ?? '/workshop/the-art-of-ai-agents/share',
      linkLabel: 'View workshop handout',
      secondaryHref: '/workshop/the-art-of-ai-agents',
      secondaryLinkLabel: 'Art of AI Agents',
    },
  ],
  teachingHighlights: [...genAiCurriculumSmeTeachingHighlights],
  certifications: [...genAiCurriculumSmeCertifications],
  skillsMatrixRows: [
    {
      category: 'Facilitation',
      skills: 'Mixed-audience workshops, critique, technical translation, Digilab operations',
      icon: 'presentation',
    },
    {
      category: 'Human-centered design',
      skills: 'Intake, journey framing, tool testing with real users, rewrite the brief before scaling the build',
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
      description: 'Intake with the people who will use the thing. Write the job, the constraint, and what “done” looks like.',
    },
    {
      title: 'Facilitate a working session',
      description: 'Run a design-forward workshop so engineers, designers, and product partners share the same brief.',
    },
    {
      title: 'Prototype with GenAI tools',
      description: 'Ship the smallest reviewable slice in Cursor / Claude / Next.js — fast enough to test this week.',
    },
    {
      title: 'Test with real users',
      description: 'Put the prototype in front of the mixed audience. Capture failures. Rewrite the brief before scaling.',
    },
    {
      title: 'Leave a teaching artifact',
      description: 'Handoff is a runbook plus an exercise the team can repeat — not a one-off demo they cannot operate.',
    },
  ],
  ctas: {
    ...sprint2026Ctas('Deloitte AI Design Facilitator and Forward-Deployed Engineer II'),
    resumePdfPath: TECH_CV_PDF,
    resumePdfLabel: 'Download résumé',
    evidenceBriefPdfPath: EVIDENCE_BRIEF_PDF,
    evidenceBriefLabel: 'Open technical evidence brief',
    github: FIELD_KIT_REPO,
    githubLabel: 'Inspect the prototype console',
    githubProfile: 'https://github.com/moisestech',
    careerPacket: '/forward-deployed',
    caseStudiesAnchor: undefined,
    resumePrintPath: undefined,
  },
  techLogoIds: [],
  resumeSectionTitle: 'The design practice is already public. The consulting cadence is the ramp.',
  resumeSectionNote: `I am most useful where a team needs someone who can teach AI through making, run a design-forward working session, prototype in the same week, and leave a product plus a teaching artifact. Résumé, technical evidence brief, and prototype console below. Listing: ${EMPLOYER_URL}`,
};
