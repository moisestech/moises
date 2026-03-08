import { readChapterFile, getAllChapterSlugs } from '@/lib/book/parser.server';
import { BookEditClient } from '@/components/book/BookEditClient';
import { notFound } from 'next/navigation';

interface EditPageProps {
  params: {
    slug: string;
  };
}

export default async function EditPage({ params }: EditPageProps) {
  try {
    const chapter = await readChapterFile(params.slug);
    return <BookEditClient chapter={chapter} />;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const slugs = await getAllChapterSlugs();
  return slugs.map((slug) => ({ slug }));
}
