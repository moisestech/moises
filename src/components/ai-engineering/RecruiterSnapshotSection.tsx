import { ExperienceMatrixSection } from '@/components/opportunities/ExperienceMatrixSection';

type RecruiterSnapshotSectionProps = {
  rows: { label: string; value: string }[];
  sectionId?: string;
};

export function RecruiterSnapshotSection({
  rows,
  sectionId = 'snapshot',
}: RecruiterSnapshotSectionProps) {
  return (
    <ExperienceMatrixSection
      sectionId={sectionId}
      title="Recruiter snapshot"
      headers={{ left: 'Field', right: 'Details' }}
      rows={rows.map((row) => ({
        primary: row.label,
        secondary: row.value,
        icon: 'target' as const,
      }))}
    />
  );
}
