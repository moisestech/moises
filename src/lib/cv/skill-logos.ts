import type { Skill } from '@/constants/resume';
import { techLogoRegistry } from '@/content/evidence/tech-logos';

/** Map technology label → tech logo registry id (for inline pills). */
const TECH_LOGO_ALIASES: Record<string, string> = {
  NodeJS: 'javascript',
  React: 'react',
  NextJS: 'nextjs',
  Tailwind: 'tailwind',
  Snowflake: 'snowflake',
  SnowFlake: 'snowflake',
  Athena: 'aws',
  Kinesis: 'aws',
  Docker: 'docker',
  GraphQL: 'postgres',
  Supabase: 'supabase',
  Tensorflow: 'pytorch',
  Tableau: 'tableau',
};

export function resolveTechLogoForLabel(label: string) {
  const id = TECH_LOGO_ALIASES[label];
  if (!id) return undefined;
  return techLogoRegistry[id];
}

export function resolveSkillIcon(skill: Skill) {
  if (!skill.iconId) return undefined;
  return techLogoRegistry[skill.iconId];
}
