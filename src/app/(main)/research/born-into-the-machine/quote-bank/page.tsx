import {
  archivePlaceholderMetadata,
  BornIntoTheMachineArchivePlaceholder,
} from '@/components/book/BornIntoTheMachineArchivePlaceholder';

export const metadata = archivePlaceholderMetadata(
  'Quote bank',
  'Verified quotes, paraphrases, and reflections supporting Born into the Machine essays, grant materials, and public programs.',
);

export default function BornIntoTheMachineQuoteBankPage() {
  return (
    <BornIntoTheMachineArchivePlaceholder
      title="Quote bank"
      description="Verified quotes, paraphrases, and reflections supporting Born into the Machine essays, grant materials, and public programs."
    />
  );
}
