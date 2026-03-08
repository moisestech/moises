import { analyzeDraftFile } from '@/lib/book/draft-analyzer';
import { notFound } from 'next/navigation';
import { CategorizationDashboard } from '@/components/book/CategorizationDashboard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface CategorizePageProps {
  params: {
    filename: string;
  };
}

export default async function CategorizePage({ params }: CategorizePageProps) {
  const decodedFilename = decodeURIComponent(params.filename);
  
  try {
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
        <CategorizationDashboard analysis={analysis} filename={decodedFilename} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
