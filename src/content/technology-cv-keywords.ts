import { resumeData } from '@/constants/resume';
import type { CareerPacketKeyword } from '@/content/ai-engineering/career-packet-keywords';
import { careerPacketKeywordLibrary } from '@/content/ai-engineering/career-packet-keywords';

const EXTRA_TECH_TERMS = [
  'AI',
  'Agent orchestration',
  'Applied GenAI',
  'AWS',
  'Athena',
  'Chrome DevTools',
  'Claude',
  'Claude Code',
  'Cursor',
  'Docker',
  'ETL',
  'GraphQL',
  'JavaScript',
  'Kinesis',
  'LLM',
  'Make.com',
  'Make',
  'Next.js',
  'NextJS',
  'OpenAI',
  'Playwire',
  'PyTorch',
  'React',
  'ReactJS',
  'Replicate',
  'Snowflake',
  'Tableau',
  'TypeScript',
  'Vercel',
  'WordPress',
  'agentic',
  'real-time',
  'realtime',
] as const;

function collectTerms(): string[] {
  const terms = new Set<string>(EXTRA_TECH_TERMS);

  for (const skill of resumeData.skills) {
    terms.add(skill.name);
    skill.technologies?.forEach((t) => terms.add(t));
  }

  for (const job of resumeData.experience) {
    job.technologies?.forEach((t) => terms.add(t));
  }

  for (const project of resumeData.projects) {
    project.technologies.forEach((t) => terms.add(t));
  }

  resumeData.interests.forEach((t) => terms.add(t));

  return [...terms].sort((a, b) => b.length - a.length);
}

export const technologyCvHighlights: CareerPacketKeyword[] = collectTerms().map((term) => {
  const libraryKey = Object.keys(careerPacketKeywordLibrary).find(
    (k) => k.toLowerCase() === term.toLowerCase(),
  );
  if (libraryKey) return careerPacketKeywordLibrary[libraryKey];
  return { term };
});

export function experienceJobId(company: string, period: string): string {
  const companySlug = company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const yearMatch = period.match(/\d{4}/);
  const year = yearMatch?.[0] ?? 'role';
  return `exp-${companySlug}-${year}`;
}

export function experienceJobLabel(period: string, company: string): string {
  const yearMatch = period.match(/\d{4}/);
  return yearMatch?.[0] ?? company.split(' ')[0];
}
