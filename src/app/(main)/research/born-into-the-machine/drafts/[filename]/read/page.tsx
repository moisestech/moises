import { readDraftFile } from '@/lib/book/draft-manager';
import { analyzeDraftFile } from '@/lib/book/draft-analyzer';
import { notFound } from 'next/navigation';
import { DraftReadingViewClient } from '@/components/book/DraftReadingViewClient';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ReadPageProps {
  params: {
    filename: string;
  };
}

export default async function ReadPage({ params }: ReadPageProps) {
  const decodedFilename = decodeURIComponent(params.filename);
  
  try {
    const draft = await readDraftFile(decodedFilename);
    if (!draft) {
      notFound();
    }

    const analysis = await analyzeDraftFile(decodedFilename);

    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3">
          <Link
            href="/research/born-into-the-machine/drafts"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Drafts
          </Link>
        </div>
        <DraftReadingViewClient analysis={analysis} filename={decodedFilename} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
