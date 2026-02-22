'use client';

import { parseChapterMarkdown } from '@/lib/book/parser-core';
import { ChapterRenderer } from './ChapterRenderer';
import { ViewMode } from '@/lib/book/types';
import { useState } from 'react';

interface EditorPreviewProps {
  markdown: string;
  viewMode?: ViewMode;
}

export function EditorPreview({ markdown, viewMode = 'all' }: EditorPreviewProps) {
  const [error, setError] = useState<string | null>(null);
  let chapter;

  try {
    chapter = parseChapterMarkdown(markdown);
    console.log('[EditorPreview] Parsed chapter:', {
      title: chapter.title,
      contentBlocks: chapter.content.length,
      blockTypes: chapter.content.map((b, i) => ({ 
        index: i,
        type: b.type, 
        textLength: b.text.length,
        textPreview: b.text.substring(0, 80),
        firstChars: b.text.substring(0, 10)
      }))
    });
    
    // Count blocks by type
    const typeCounts = chapter.content.reduce((acc, b) => {
      acc[b.type] = (acc[b.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    console.log('[EditorPreview] Block type counts:', typeCounts);
    
    if (error) setError(null);
  } catch (err: any) {
    console.error('[EditorPreview] Parse error:', err);
    if (!error) {
      setError(err.message);
    }
    return (
      <div className="h-full flex items-center justify-center p-8">
        <div className="text-red-600 dark:text-red-400 text-sm">
          Error parsing markdown: {err.message}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-8 bg-white dark:bg-gray-900">
      <ChapterRenderer chapter={chapter} viewMode={viewMode} displayMode="subtle" />
    </div>
  );
}
