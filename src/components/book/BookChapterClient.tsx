'use client';

import { BookChapter, ViewMode } from '@/lib/book/types';
import { ChapterRenderer } from './ChapterRenderer';
import { AuthorshipLegend } from './AuthorshipLegend';
import { ViewModeToggle } from './ViewModeToggle';
import { useState } from 'react';
import Link from 'next/link';
import { Edit, ArrowLeft } from 'lucide-react';
import { useIsLocalhost } from '@/hooks/useIsLocalhost';

interface BookChapterClientProps {
  chapter: BookChapter;
}

export function BookChapterClient({ chapter }: BookChapterClientProps) {
  const isLocalhost = useIsLocalhost();
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [displayMode, setDisplayMode] = useState<'subtle' | 'prominent'>('subtle');
  
  const metadata = (chapter as any).metadata || {};
  const keywords = metadata.keywords || [];
  const topics = metadata.topics || [];
  const keyMoments = metadata.keyMoments || [];
  const hasSlop = metadata.hasSlop || false;
  const thinkers = metadata.thinkers || [];
  const artworks = metadata.artworks || [];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12 pt-44">
        <div className="mb-8">
          <Link
            href="/research/born-into-the-machine"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Book
          </Link>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">{chapter.title || 'Untitled Chapter'}</h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Status: {chapter.status}
              </span>
              {hasSlop && (
                <Link
                  href={`/research/born-into-the-machine/${chapter.slug}-preview`}
                  className="ml-4 inline-flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 hover:underline"
                >
                  <span>⚠️ View "Slop" Preview</span>
                </Link>
              )}
            </div>
            {isLocalhost && (
              <Link
                href={`/research/born-into-the-machine/${chapter.slug}/edit`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Edit className="h-4 w-4" />
                Edit Chapter
              </Link>
            )}
          </div>
        </div>

        {/* Chapter Metadata */}
        {(keywords.length > 0 || topics.length > 0 || thinkers.length > 0 || artworks.length > 0) && (
          <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Chapter Overview</h2>
            
            {metadata.context && (
              <p className="text-gray-700 dark:text-gray-300 mb-4">{metadata.context}</p>
            )}
            
            {thinkers.length > 0 && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Thinkers: </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{thinkers.join(', ')}</span>
              </div>
            )}
            
            {artworks.length > 0 && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Artworks: </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{artworks.join(', ')}</span>
              </div>
            )}
            
            {keywords.length > 0 && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 block">Keywords:</span>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((kw: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {topics.length > 0 && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 block">Key Topics:</span>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {topics.slice(0, 5).map((topic: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                  {topics.length > 5 && (
                    <li className="text-gray-500 dark:text-gray-400">+{topics.length - 5} more topics</li>
                  )}
                </ul>
              </div>
            )}
            
            {keyMoments.length > 0 && (
              <div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 block">Key Moments:</span>
                <div className="space-y-2">
                  {keyMoments.slice(0, 3).map((moment: string, i: number) => (
                    <div key={i} className="text-sm text-gray-700 dark:text-gray-300 p-2 bg-white dark:bg-gray-800 rounded">
                      {moment}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <AuthorshipLegend collapsible={true} displayMode={displayMode} />
        
        <div className="flex items-center justify-between mb-6">
          <ViewModeToggle currentMode={viewMode} onModeChange={setViewMode} />
          <button
            onClick={() =>
              setDisplayMode(displayMode === 'subtle' ? 'prominent' : 'subtle')
            }
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            {displayMode === 'subtle' ? 'Show badges' : 'Hide badges'}
          </button>
        </div>

        <ChapterRenderer
          chapter={chapter}
          viewMode={viewMode}
          displayMode={displayMode}
        />
      </div>
    </div>
  );
}
