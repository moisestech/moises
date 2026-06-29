import {
  archivePlaceholderMetadata,
  BornIntoTheMachineArchivePlaceholder,
} from '@/components/book/BornIntoTheMachineArchivePlaceholder';

export const metadata = archivePlaceholderMetadata(
  'Sculptural engines',
  'Five research chapters — intelligence as commodity, adaptation tax, attention, agency gap, and the human right to refusal.',
);

export default function BornIntoTheMachineSculpturalEnginesPage() {
  return (
    <BornIntoTheMachineArchivePlaceholder
      title="Sculptural engines"
      description="Five research chapters — intelligence as commodity, adaptation tax, attention, agency gap, and the human right to refusal."
    />
  );
}
