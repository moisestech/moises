/**
 * Reusable pack for Generative AI SME / curriculum / certificate-program contracts
 * (Hurix-style content refresh, Coursera/edX/corporate learning overlays).
 */

import type { EvidenceProjectId } from '@/content/evidence/projects';
import type {
  ProcessStep,
  RoleMatchRow,
  SkillsMatrixRow,
  TeachingHighlight,
} from '@/content/opportunities/types';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { ART_OF_AI_AGENTS_SCREENSHOTS, N8N_LOGO } from '@/constants/art-of-ai-agents';
import { ARTIST_INFRASTRUCTURE_BANNER_WIDE } from '@/content/institutions/artistInfrastructureMedia';
import { genAiRecruitingLogoBand } from '@/content/evidence/recruitingLogoBand';

const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

const taskAutomationSlide = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'artist-task-automation-1',
)!;
const taskAutomationSlide2 = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'artist-task-automation-2',
)!;
const emailInboxDiagram = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'email-inbox-organizer-diagram',
)!;

/** GenAI curriculum logo band — ensure n8n is first/visible. */
export const genAiCurriculumSmeLogoBand = [
  { src: N8N_LOGO.src, alt: N8N_LOGO.alt, height: 36 },
  ...genAiRecruitingLogoBand.filter((l) => l.alt.toLowerCase() !== 'n8n'),
];

export const genAiCurriculumSmeTeachingHighlights: TeachingHighlight[] = [
  {
    title: 'The Art of AI Agents',
    description:
      'Multi-session artist-facing curriculum on n8n agents, task automation, and human-supervised workflows — with workshop screenshots and chapter materials.',
    href: '/workshop/the-art-of-ai-agents',
    imageSrc: emailInboxDiagram.src,
    imageAlt: emailInboxDiagram.alt,
  },
  {
    title: 'Email Inbox Organizer',
    description: 'n8n Gmail AI Agent handout — diagram, labels, and copy-paste prompts from the Locust workshop.',
    href: '/workshop/the-art-of-ai-agents/share',
    imageSrc: emailInboxDiagram.src,
    imageAlt: emailInboxDiagram.alt,
  },
  {
    title: 'Learn AI Without Losing Yourself',
    description: 'Structured curriculum for critical, sustainable AI practice — labs, framing, and learner pathways.',
    href: '/workshop/learn-ai-without-losing-yourself',
    imageSrc:
      'https://res.cloudinary.com/du1ysiumj/image/upload/v1774826962/learn-ai-without-loosing-yourself-bg-no-text_pz3qno.png',
    imageAlt: 'Learn AI Without Losing Yourself — workshop visual',
  },
  {
    title: 'Own Your Digital Presence',
    description: 'Multi-day website and content intensive including AI-assisted workflows and screencast-ready demos.',
    href: '/workshop/own-your-digital-presence',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743021790/own-your-digital-presence/website-building-workshop-focus_wvkiwk.jpg',
    imageAlt: 'Own Your Digital Presence — website building workshop',
  },
  {
    title: 'Creative infrastructure for artists',
    description: 'Institutional offer packaging workshops, studio automation, and reusable curricula for partners.',
    href: '/artist-infrastructure',
    imageSrc:
      ARTIST_INFRASTRUCTURE_BANNER_WIDE.src,
    imageAlt: ARTIST_INFRASTRUCTURE_BANNER_WIDE.alt,
  },
];

export const genAiCurriculumSmeRoleMatchRows: RoleMatchRow[] = [
  {
    requirement: 'Redevelop Generative AI course content',
    evidence:
      'Public multi-session curricula (Art of AI Agents, Learn AI Without Losing Yourself) with chapter materials, learning outcomes, and workshop slides already in production use.',
    illustration: {
      src: taskAutomationSlide.src,
      alt: taskAutomationSlide.alt,
    },
  },
  {
    requirement: 'Update labs, assessments, and demos with modern AI frameworks',
    evidence:
      'Hands-on agent labs with n8n AI Agent nodes, Airtable routing, OpenAI/Anthropic workflows, and production automation demos learners can operate.',
    illustration: {
      src: emailInboxDiagram.src,
      alt: emailInboxDiagram.alt,
    },
  },
  {
    requirement: 'Technical scripts, walkthroughs, and supporting materials',
    evidence:
      'Workshop monologues, chapter pages, process diagrams, and runbooks written for nontechnical and practitioner audiences.',
    illustration: {
      src: taskAutomationSlide2.src,
      alt: taskAutomationSlide2.alt,
    },
  },
  {
    requirement: 'Collaborate with instructional design / video production',
    evidence:
      'Comfortable recording screencasts and talking-head teaching; public workshop delivery plus institutional Digilab facilitation. Portfolio and LinkedIn linked from this dossier.',
    illustration: {
      src: ai24.imageSrc,
      alt: ai24.imageAlt,
      local: ai24.imageLocal,
    },
  },
  {
    requirement: 'LLM / GenAI production applications',
    evidence:
      'Founding-engineer GenAI product work (Lore Machine) plus production n8n Gmail intelligence. Honest boundary: do not claim production LangChain/LangGraph/RAG depth until verified live.',
    illustration: {
      src: lore.imageSrc,
      alt: lore.imageAlt,
      local: lore.imageLocal,
    },
  },
];

export const genAiCurriculumSmeSkills: SkillsMatrixRow[] = [
  {
    category: 'Curriculum SME',
    skills: 'Course refresh, learning outcomes, labs, assessments, screencast-ready walkthroughs',
    icon: 'presentation',
  },
  {
    category: 'Generative AI',
    skills: 'LLMs, prompt engineering, AI agents, OpenAI / Anthropic / Gemini APIs, Python + TypeScript',
    icon: 'sparkles',
  },
  {
    category: 'Automation teaching',
    skills: 'n8n AI Agent nodes, Make.com, Airtable, human-in-the-loop workflow design',
    icon: 'workflow',
  },
  {
    category: 'Honest boundaries',
    skills: 'No unverified LangChain/LangGraph/RAG production claims — teaching + confirmed automation only',
    icon: 'fileText',
  },
];

export const genAiCurriculumSmeProcessSteps: ProcessStep[] = [
  {
    title: 'Audit existing certificate content',
    description: 'Map outdated modules, broken labs, and gaps against current LLM / agent practice.',
  },
  {
    title: 'Refresh technical accuracy',
    description: 'Update examples to current APIs, prompt patterns, and agent/tooling workflows learners can run.',
  },
  {
    title: 'Rewrite labs and assessments',
    description: 'Ship stepwise exercises with clear success criteria, failure modes, and instructor notes.',
  },
  {
    title: 'Script for video and production',
    description: 'Produce screencast-ready scripts, talking points, and supporting decks for staggered milestones.',
  },
  {
    title: 'Hand off maintainable materials',
    description: 'Leave versioned content, glossary, and update checklist instructional designers can own.',
  },
];

export const genAiCurriculumSmeFeaturedProjectIds = [
  'n8n-gmail-intelligence',
  'lore-machine',
  'ai24',
  'digital-culture-infrastructure',
] as const satisfies readonly EvidenceProjectId[];

export const genAiCurriculumSmeEvidenceLine =
  automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine;

export const genAiCurriculumSmeVerifierNote =
  'Strict verifier: no production RAG, vector DB, or LangChain/LangGraph builder claims until verified live. Confirmed evidence is curriculum delivery, production n8n agents, and GenAI product work (Lore Machine).';
