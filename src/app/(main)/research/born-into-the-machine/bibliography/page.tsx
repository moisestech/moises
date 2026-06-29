import {
  archivePlaceholderMetadata,
  BornIntoTheMachineArchivePlaceholder,
} from '@/components/book/BornIntoTheMachineArchivePlaceholder';

export const metadata = archivePlaceholderMetadata(
  'Bibliography',
  'Sources, citations, and field context for Born into the Machine — algorithmic justice, AI labor, attention, and public life.',
);

export default function BornIntoTheMachineBibliographyPage() {
  return (
    <BornIntoTheMachineArchivePlaceholder
      title="Bibliography"
      description="Sources, citations, and field context for Born into the Machine — algorithmic justice, AI labor, attention, and public life."
    />
  );
}
