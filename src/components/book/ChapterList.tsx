'use client';

import Link from 'next/link';
import { ChapterMetadata } from '@/lib/book/types';
import { BookOpen, Edit, Eye, FileText, AlertTriangle, Tag, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIsLocalhost } from '@/hooks/useIsLocalhost';

interface ChapterListProps {
  chapters: ChapterMetadata[];
  bookTitle: string;
  bookDescription: string;
}

export function ChapterList({
  chapters,
  bookTitle,
  bookDescription,
}: ChapterListProps) {
  const isLocalhost = useIsLocalhost();
  const sortedChapters = [...chapters].sort((a, b) => a.order - b.order);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">{bookTitle}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          {bookDescription || 'A living book exploring transparency in co-intelligence and the post-AI writing era'}
        </p>
      </div>

      {/* Chapter Navigation */}
      <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-500" />
            <span className="font-semibold">Quick Navigation:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sortedChapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/research/born-into-the-machine/${chapter.slug}`}
                className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100"
              >
                {chapter.order}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {sortedChapters.map((chapter) => {
          const hasSlop = (chapter as any).hasSlop || false;
          const keywords = (chapter as any).keywords || [];
          const topics = (chapter as any).topics || [];
          const keyMoments = (chapter as any).keyMoments || [];
          
          return (
            <Link
              key={chapter.slug}
              href={`/research/born-into-the-machine/${chapter.slug}`}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-gray-900"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">{String(chapter.order).padStart(2, '0')}</span>
                    <h2 className="text-2xl font-semibold text-black dark:text-white">{chapter.title || `Chapter ${chapter.order}`}</h2>
                  </div>
                  {hasSlop && (
                    <div className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 mb-2">
                      <AlertTriangle className="h-3 w-3" />
                      <span>Contains AI-generated "slop" content</span>
                    </div>
                  )}
                </div>
                <Badge
                  variant={chapter.status === 'published' ? 'default' : 'secondary'}
                >
                  {chapter.status}
                </Badge>
              </div>
              
              {(chapter.description || (chapter as any).context) && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {chapter.description || (chapter as any).context}
                </p>
              )}

              {/* Keywords */}
              {keywords.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center gap-1 mb-2">
                    <Tag className="h-3 w-3 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Keywords:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {keywords.slice(0, 8).map((keyword: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                    {keywords.length > 8 && (
                      <span className="px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400">
                        +{keywords.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Key Topics */}
              {topics.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center gap-1 mb-2">
                    <Sparkles className="h-3 w-3 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Topics:</span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {topics.slice(0, 3).map((topic: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="line-clamp-1">{topic}</span>
                      </li>
                    ))}
                    {topics.length > 3 && (
                      <li className="text-gray-500">+{topics.length - 3} more topics</li>
                    )}
                  </ul>
                </div>
              )}

              {/* Key Moments Preview */}
              {keyMoments.length > 0 && (
                <div className="mb-3 p-2 bg-gray-50 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400">
                  <div className="font-semibold mb-1">Key Moments:</div>
                  <div className="line-clamp-2">{keyMoments[0]}</div>
                </div>
              )}

              <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-800">
                <Link
                  href={`/research/born-into-the-machine/${chapter.slug}`}
                  className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye className="h-4 w-4" />
                  Read
                </Link>
                {isLocalhost && (
                  <Link
                    href={`/research/born-into-the-machine/${chapter.slug}/edit`}
                    className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Link>
                )}
                {hasSlop && (
                  <Link
                    href={`/research/born-into-the-machine/${chapter.slug}-preview`}
                    className="flex items-center gap-1 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AlertTriangle className="h-4 w-4" />
                    View Slop
                  </Link>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 space-y-6">
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-black dark:text-white">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            About This Book
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is a living book being written in public, exploring the transparency
            of co-writing in the post-AI era. Every piece of content is marked to show
            its authorship: human-written (●), co-written with AI (◐), or AI-generated drafts (○).
          </p>
          <Link
            href="/research/born-into-the-machine/ethics-method"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Read more about our ethics and method →
          </Link>
        </div>

        {isLocalhost && (
          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Draft Files</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create <code className="px-1 py-0.5 bg-white dark:bg-gray-800 rounded text-sm">.md</code> files in{' '}
              <code className="px-1 py-0.5 bg-white dark:bg-gray-800 rounded text-sm">content/born-into-the-machine/drafts/</code>{' '}
              and paste your ChatGPT conversations directly into them. The system will automatically detect and parse them.
            </p>
            <Link
              href="/research/born-into-the-machine/drafts"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <FileText className="h-4 w-4" />
              View Drafts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
