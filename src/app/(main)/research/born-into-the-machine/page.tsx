import { readBookMetadata } from '@/lib/book/parser.server';
import { ChapterList } from '@/components/book/ChapterList';
import { AuthorshipLegend } from '@/components/book/AuthorshipLegend';

export default async function BornIntoTheMachinePage() {
  const metadata = await readBookMetadata();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12 pt-44">
        <AuthorshipLegend collapsible={false} />
        <ChapterList
          chapters={metadata.chapters}
          bookTitle={metadata.title}
          bookDescription={metadata.description}
        />
      </div>
    </div>
  );
}
