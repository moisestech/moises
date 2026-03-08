import { ChatGPTImportClient } from '@/components/book/ChatGPTImportClient';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ImportPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 pt-44">
        <Link
          href="/research/born-into-the-machine"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Book
        </Link>
        <ChatGPTImportClient />
      </div>
    </div>
  );
}
