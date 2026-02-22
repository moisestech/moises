'use client';

import { BookChapter, ViewMode, ContentBlock } from '@/lib/book/types';
import ReactMarkdown from 'react-markdown';
import { AuthorshipBadge } from './AuthorshipBadge';
import { useState } from 'react';

interface ChapterRendererProps {
  chapter: BookChapter;
  viewMode?: ViewMode;
  displayMode?: 'subtle' | 'prominent';
}

export function ChapterRenderer({
  chapter,
  viewMode = 'all',
  displayMode = 'subtle',
}: ChapterRendererProps) {
  console.log('[ChapterRenderer] Rendering with viewMode:', viewMode, 'displayMode:', displayMode);
  console.log('[ChapterRenderer] Total blocks:', chapter.content.length);
  console.log('[ChapterRenderer] Block types:', chapter.content.map(b => b.type));
  
  // Filter blocks based on view mode
  const filteredBlocks = chapter.content.filter((block) => {
    switch (viewMode) {
      case 'human-only':
        return block.type === 'human';
      case 'hybrid-only':
        return block.type === 'human' || block.type === 'hybrid';
      case 'ai-only':
        return block.type === 'ai';
      case 'all':
      default:
        return true;
    }
  });
  
  console.log('[ChapterRenderer] Filtered blocks:', filteredBlocks.length, 'for viewMode:', viewMode);
  console.log('[ChapterRenderer] Filtered block types:', filteredBlocks.map(b => b.type));

  return (
    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">{chapter.title || 'Untitled Chapter'}</h1>
      
      <div className="space-y-6">
        {filteredBlocks.map((block, index) => (
          <ContentBlockRenderer
            key={index}
            block={block}
            displayMode={displayMode}
          />
        ))}
      </div>
    </div>
  );
}

function ContentBlockRenderer({
  block,
  displayMode,
}: {
  block: ContentBlock;
  displayMode: 'subtle' | 'prominent';
}) {
  const getBlockStyles = (type: string) => {
    console.log('[ContentBlockRenderer] Rendering block type:', type, 'for block:', block.text.substring(0, 30));
    switch (type) {
      case 'human':
        return 'border-l-4 border-l-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20';
      case 'hybrid':
        return 'border-l-4 border-l-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/20';
      case 'ai':
        // Make orange VERY visible
        return 'border-l-4 border-l-orange-500 pl-4 bg-orange-200 dark:bg-orange-900/50 border-orange-500';
      case 'notes':
        return 'border-l-4 border-l-green-500 pl-4 bg-green-50 dark:bg-green-900/20';
      case 'authors':
        return 'border-l-4 border-l-red-500 pl-4 bg-red-50 dark:bg-red-900/20';
      case 'vocabulary':
        return 'border-l-4 border-l-cyan-500 pl-4 bg-cyan-50 dark:bg-cyan-900/20';
      default:
        return 'pl-4 bg-gray-50 dark:bg-gray-800';
    }
  };

  console.log('[ContentBlockRenderer] Block details:', {
    type: block.type,
    textLength: block.text.length,
    firstChars: block.text.substring(0, 20),
    styles: getBlockStyles(block.type)
  });

  return (
    <div className={`${getBlockStyles(block.type)} py-3 px-3 rounded-r-md my-2`}>
      <div className="mb-2">
        <AuthorshipBadge type={block.type} displayMode={displayMode} />
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
        <ReactMarkdown>{block.text}</ReactMarkdown>
      </div>
    </div>
  );
}
