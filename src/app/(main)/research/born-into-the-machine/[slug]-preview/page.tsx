import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export const dynamic = 'force-dynamic';

interface PreviewPageProps {
  params: {
    slug: string;
  };
}

export default async function ChapterPreviewPage({ params }: PreviewPageProps) {
  // The slug already includes -preview, extract base slug
  const baseSlug = params.slug.replace('-preview', '');
  const previewPath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'chapters',
    `${baseSlug}-preview.md`
  );
  
  try {
    if (!fs.existsSync(previewPath)) {
      notFound();
    }
    
    const content = fs.readFileSync(previewPath, 'utf-8');
    
    // Extract frontmatter if present
    let body = content;
    if (content.startsWith('---')) {
      const endIndex = content.indexOf('---', 3);
      if (endIndex > 0) {
        body = content.substring(endIndex + 3).trim();
      }
    }
    
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 py-12 pt-44">
          <Link
            href={`/research/born-into-the-machine/${baseSlug}`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Chapter
          </Link>
          
          <div className="p-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg mb-6">
            <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 mb-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">AI-Generated "Slop" Content Preview</span>
            </div>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              This is a preview of content extracted from draft files. It contains AI-generated content
              that should be reviewed, refined, and rewritten with your voice.
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
