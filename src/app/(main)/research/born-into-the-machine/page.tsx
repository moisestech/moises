import { readBookMetadata } from '@/lib/book/parser.server';
import { ChapterList } from '@/components/book/ChapterList';
import { AuthorshipLegend } from '@/components/book/AuthorshipLegend';
import { BornIntoTheMachineHero } from '@/components/book/BornIntoTheMachineHero';

export default async function BornIntoTheMachinePage() {
  const metadata = await readBookMetadata();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11 py-12 pt-24">
        <BornIntoTheMachineHero />
        <AuthorshipLegend collapsible={false} />
        <ChapterList
          chapters={metadata.chapters}
          bookTitle={metadata.title}
          bookDescription={metadata.description}
          showBookHeader={false}
        />
      </div>
    </div>
  );
}
