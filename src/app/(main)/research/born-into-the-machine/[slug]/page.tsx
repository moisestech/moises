import { readChapterFile, getAllChapterSlugs, readBookMetadata } from '@/lib/book/parser.server';
import { notFound } from 'next/navigation';
import { BookChapterClient } from '@/components/book/BookChapterClient';

interface ChapterPageProps {
  params: {
    slug: string;
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  try {
    const chapter = await readChapterFile(params.slug);
    const metadata = await readBookMetadata();
    const chapterMetadata = metadata.chapters.find((ch: any) => ch.slug === params.slug);
    
    // Merge metadata into chapter
    if (chapterMetadata) {
      chapter.metadata = chapterMetadata;
    }
    
    return <BookChapterClient chapter={chapter} />;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const slugs = await getAllChapterSlugs();
  return slugs.map((slug) => ({ slug }));
}
