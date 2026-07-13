import type { OpportunityNavItem, ProcessStep, TeachingHighlight } from './types';
import { genAiRecruitingLogoBand, moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';

/** Shared sections for July 2026 application sprint dossiers */
export const sprint2026Headshot = moisesSanabriaHeadshot;

export const sprint2026NavItems: OpportunityNavItem[] = [
  { id: 'hero', label: 'Overview' },
  { id: 'fit', label: 'Role fit' },
  { id: 'case-studies', label: 'Case studies' },
  { id: 'skills', label: 'Skills' },
  { id: 'process', label: 'How I work' },
  { id: 'resume', label: 'Résumé' },
];

export const sprint2026ProcessSteps: ProcessStep[] = [
  {
    title: 'Verify the workflow and stakeholders',
    description: 'Clarify who uses the system, what “done” means, and what must stay human-approved.',
  },
  {
    title: 'Map integrations and data',
    description: 'Tables, APIs, automations, LLM touchpoints, failure modes, and privacy boundaries.',
  },
  {
    title: 'Ship the smallest useful version',
    description: 'Prototype in Next.js, n8n, Make, or agent tooling — favor learning speed early.',
  },
  {
    title: 'Document for adoption',
    description: 'Runbooks, taxonomy, field maps, and honest limits — especially for nontechnical teams.',
  },
  {
    title: 'Evaluate and hand off',
    description: 'Stress-test edge cases, capture screenshots, and leave a maintainable path.',
  },
];

export const sprint2026TeachingHighlights: TeachingHighlight[] = [
  {
    title: 'The Art of AI Agents',
    description: 'Multi-session workshop on practical agent workflows and tooling.',
    href: '/workshop/the-art-of-ai-agents',
    imageSrc:
      'https://res.cloudinary.com/du1ysiumj/image/upload/v1774829074/the-art-of-ai-agents-locust-projects-the-dill-2026_xjb76m.jpg',
    imageAlt: 'The Art of AI Agents workshop',
  },
  {
    title: 'Learn AI Without Losing Yourself',
    description: 'Structured curriculum for critical, sustainable AI practice.',
    href: '/workshop/learn-ai-without-losing-yourself',
    imageSrc:
      'https://res.cloudinary.com/du1ysiumj/image/upload/v1774826962/learn-ai-without-loosing-yourself-bg-no-text_pz3qno.png',
    imageAlt: 'Learn AI Without Losing Yourself',
  },
];

export function sprint2026Ctas(roleLabel: string) {
  return recruitingCtas({
    emailSubject: `${roleLabel} — Moises Sanabria`,
    caseStudiesAnchor: '#case-studies',
    resumePdfPath: '/resume/moises-sanabria-technology-cv.pdf',
    resumePrintPath: '/cv/tech/print',
  });
}

export const sprint2026LogoBand = genAiRecruitingLogoBand;

export const verifierBoundaryNote =
  'Strict verifier: no production RAG, vector DB, LangChain/LangGraph, or Infra24 demo claims until verified live. Automation evidence (n8n, Make, career orchestration) is confirmed.';
