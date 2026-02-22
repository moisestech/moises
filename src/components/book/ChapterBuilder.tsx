'use client';

import { useState } from 'react';
import { DraftAnalysis, ContentBlock } from '@/lib/book/analysis-types';
import { BookOpen, Plus, Trash2, Eye, Download, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChapterBuilderProps {
  analysis: DraftAnalysis;
  filename: string;
}

interface Chapter {
  id: string;
  title: string;
  description?: string;
  blockIds: string[];
}

export function ChapterBuilder({ analysis, filename }: ChapterBuilderProps) {
  const [chapters, setChapters] = useState<Chapter[]>(
    analysis.themes.map(theme => ({
      id: theme.id,
      title: theme.potentialChapterTitle || theme.name,
      description: theme.description,
      blockIds: theme.contentBlocks,
    }))
  );
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [draggedBlock, setDraggedBlock] = useState<string | null>(null);

  const availableBlocks = analysis.contentBlocks.filter(
    block => !chapters.some(ch => ch.blockIds.includes(block.id))
  );

  const handleAddChapter = () => {
    const newChapter: Chapter = {
      id: `chapter-${Date.now()}`,
      title: 'New Chapter',
      blockIds: [],
    };
    setChapters([...chapters, newChapter]);
    setSelectedChapter(newChapter.id);
  };

  const handleDeleteChapter = (chapterId: string) => {
    setChapters(chapters.filter(ch => ch.id !== chapterId));
    if (selectedChapter === chapterId) {
      setSelectedChapter(null);
    }
  };

  const handleDragStart = (blockId: string) => {
    setDraggedBlock(blockId);
  };

  const handleDrop = (chapterId: string) => {
    if (draggedBlock) {
      setChapters(chapters.map(ch => {
        if (ch.id === chapterId && !ch.blockIds.includes(draggedBlock)) {
          return { ...ch, blockIds: [...ch.blockIds, draggedBlock] };
        }
        return ch;
      }));
      setDraggedBlock(null);
    }
  };

  const handleRemoveFromChapter = (chapterId: string, blockId: string) => {
    setChapters(chapters.map(ch => {
      if (ch.id === chapterId) {
        return { ...ch, blockIds: ch.blockIds.filter(id => id !== blockId) };
      }
      return ch;
    }));
  };

  const handleExportChapter = (chapter: Chapter) => {
    const blocks = chapter.blockIds
      .map(id => analysis.contentBlocks.find(b => b.id === id))
      .filter(Boolean) as ContentBlock[];

    const frontmatter = `---
title: "${chapter.title}"
slug: "${chapter.id}"
status: "draft"
created: "${new Date().toISOString().split('T')[0]}"
lastModified: "${new Date().toISOString().split('T')[0]}"
---

`;

    const content = blocks
      .map(block => {
        const marker = {
          human: '●',
          hybrid: '◐',
          ai: '○',
        }[block.speaker === 'human' ? 'human' : block.speaker === 'ai' ? 'ai' : 'hybrid'];
        return `${marker} ${block.text}`;
      })
      .join('\n\n');

    const markdown = frontmatter + content;
    navigator.clipboard.writeText(markdown);
    alert(`Chapter "${chapter.title}" copied to clipboard!`);
  };

  const selectedChapterData = chapters.find(ch => ch.id === selectedChapter);

  return (
    <div className="flex h-screen">
      {/* Left: Chapters & Available Blocks */}
      <div className="w-1/2 border-r border-gray-200 dark:border-gray-800 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Chapter Builder</h1>
          <Button onClick={handleAddChapter} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Chapter
          </Button>
        </div>

        {/* Chapters */}
        <div className="space-y-4 mb-8">
          <h2 className="font-semibold">Chapters ({chapters.length})</h2>
          {chapters.map(chapter => (
            <div
              key={chapter.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedChapter === chapter.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-800 hover:border-gray-300'
              }`}
              onClick={() => setSelectedChapter(chapter.id)}
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                handleDrop(chapter.id);
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold">{chapter.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {chapter.blockIds.length} blocks
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExportChapter(chapter);
                    }}
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteChapter(chapter.id);
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              {chapter.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {chapter.description}
                </p>
              )}
              <div className="text-xs text-gray-500">
                Drop blocks here to add to chapter
              </div>
            </div>
          ))}
        </div>

        {/* Available Blocks */}
        <div>
          <h2 className="font-semibold mb-4">Available Blocks ({availableBlocks.length})</h2>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {availableBlocks.map(block => (
              <div
                key={block.id}
                draggable
                onDragStart={() => handleDragStart(block.id)}
                className="p-3 border border-gray-200 dark:border-gray-800 rounded cursor-move hover:bg-gray-50 dark:hover:bg-gray-900 flex items-start gap-2"
              >
                <GripVertical className="h-4 w-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">
                    {block.speaker} • {block.type}
                  </div>
                  <div className="text-sm line-clamp-2">
                    {block.text.substring(0, 150)}...
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Chapter Preview */}
      <div className="w-1/2 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {selectedChapterData ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{selectedChapterData.title}</h2>
              <Button
                onClick={() => handleExportChapter(selectedChapterData)}
                variant="outline"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Chapter
              </Button>
            </div>

            <div className="space-y-4">
              {selectedChapterData.blockIds.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No blocks in this chapter. Drag blocks from the left to add them.
                </div>
              ) : (
                selectedChapterData.blockIds
                  .map(id => analysis.contentBlocks.find(b => b.id === id))
                  .filter(Boolean)
                  .map((block, index) => {
                    const b = block as ContentBlock;
                    return (
                      <div
                        key={b.id}
                        className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs text-gray-500">
                            Block {index + 1} • {b.speaker} • {b.type}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveFromChapter(selectedChapterData.id, b.id)}
                          >
                            Remove
                          </Button>
                        </div>
                        <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                          {b.text}
                        </div>
                      </div>
                    );
                  })
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            Select a chapter to preview its content
          </div>
        )}
      </div>
    </div>
  );
}
