import { readDraftFile } from '@/lib/book/draft-manager';
import { notFound } from 'next/navigation';
import { DraftProcessorClient } from '@/components/book/DraftProcessorClient';
import { DraftProcessor } from '@/components/book/DraftProcessor';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface DraftProcessorPageProps {
  params: {
    filename: string;
  };
}

export default async function DraftProcessorPage({ params }: DraftProcessorPageProps) {
  const decodedFilename = decodeURIComponent(params.filename);
  const draft = await readDraftFile(decodedFilename);

  if (!draft) {
    notFound();
  }

  // If file is not parseable as ChatGPT format, use new analysis system
  if (!draft.parsed) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12 pt-44">
          <Link
            href="/research/born-into-the-machine/drafts"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Drafts
          </Link>
          <DraftProcessor draft={draft} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 pt-44">
        <Link
          href="/research/born-into-the-machine/drafts"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Drafts
        </Link>
        <DraftProcessorClient draft={draft} />
      </div>
    </div>
  );
}
