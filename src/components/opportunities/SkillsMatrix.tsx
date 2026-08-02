import type { Opportunity } from '@/content/opportunities/types';
import { ExperienceMatrixSection } from '@/components/opportunities/ExperienceMatrixSection';

type SkillsMatrixProps = {
  opportunity: Opportunity;
  framed?: boolean;
};

export function SkillsMatrix({ opportunity, framed = false }: SkillsMatrixProps) {
  const rows = opportunity.skillsMatrixRows.map((row) => ({
    primary: row.category,
    secondary: row.skills,
    icon: row.icon,
  }));

  return (
    <ExperienceMatrixSection
      sectionId="skills"
      title={opportunity.skillsSectionTitle ?? 'Skills'}
      headers={{ left: 'Category', right: 'Skills & experience' }}
      rows={rows}
      className={framed ? '!mt-0 !border-0 !pt-0' : undefined}
    />
  );
}
