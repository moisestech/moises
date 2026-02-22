'use client';

import { useState, useEffect, useRef } from 'react';
import { DraftAnalysis, ContentBlock, ProcessedStatus } from '@/lib/book/analysis-types';
import { AuthorshipBadge } from './AuthorshipBadge';
import { Tag, CheckCircle, Circle, Filter, BookOpen, Users, Book, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DraftReadingViewProps {
  draft: DraftAnalysis;
  filename: string;
  onProgressUpdate?: (progress: number) => void;
}

export function DraftReadingView({ draft, filename, onProgressUpdate }: DraftReadingViewProps) {
  const [blocks, setBlocks] = useState<ContentBlock[]>(draft.contentBlocks);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [showOnlyUnprocessed, setShowOnlyUnprocessed] = useState(false);
  const [speakerFilter, setSpeakerFilter] = useState<'all' | 'human' | 'ai'>('all');
  const [currentPosition, setCurrentPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`draft-progress-${filename}`);
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        const updatedBlocks = blocks.map(block => {
          if (progress.processedBlocks?.includes(block.id)) {
            return { ...block, processed: 'processed' as ProcessedStatus };
          }
          return block;
        });
        setBlocks(updatedBlocks);
        setCurrentPosition(progress.currentPosition || 0);
      } catch (e) {
        console.error('Failed to load progress', e);
      }
    }
  }, [filename]);

  useEffect(() => {
    // Save progress
    const processedBlocks = blocks.filter(b => b.processed === 'processed').map(b => b.id);
    const progress = {
      processedBlocks,
      currentPosition,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(`draft-progress-${filename}`, JSON.stringify(progress));

    // Calculate and report progress
    const processedCount = blocks.filter(b => b.processed !== 'unprocessed').length;
    const progressPercent = blocks.length > 0 ? (processedCount / blocks.length) * 100 : 0;
    if (onProgressUpdate) {
      onProgressUpdate(progressPercent);
    }
  }, [blocks, currentPosition, filename, onProgressUpdate]);

  const handleMarkProcessed = (blockId: string) => {
    setBlocks(prev => prev.map(block =>
      block.id === blockId
        ? { ...block, processed: 'processed' as ProcessedStatus }
        : block
    ));
  };

  const handleTagTheme = (blockId: string, theme: string) => {
    setBlocks(prev => prev.map(block => {
      if (block.id === blockId) {
        const themes = block.themes.includes(theme)
          ? block.themes.filter(t => t !== theme)
          : [...block.themes, theme];
        return { ...block, themes };
      }
      return block;
    }));
  };

  const filteredBlocks = blocks.filter(block => {
    if (showOnlyUnprocessed && block.processed === 'processed') return false;
    if (speakerFilter !== 'all' && block.speaker !== speakerFilter) return false;
    return true;
  });

  const processedCount = blocks.filter(b => b.processed === 'processed').length;
  const progressPercent = blocks.length > 0 ? (processedCount / blocks.length) * 100 : 0;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Progress</h2>
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Processed</span>
              <span>{processedCount} / {blocks.length}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">{progressPercent.toFixed(1)}% complete</div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Filters</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={showOnlyUnprocessed}
                onChange={(e) => setShowOnlyUnprocessed(e.target.checked)}
                className="rounded"
              />
              Show only unprocessed
            </label>
            <select
              value={speakerFilter}
              onChange={(e) => setSpeakerFilter(e.target.value as any)}
              className="w-full text-sm p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
            >
              <option value="all">All speakers</option>
              <option value="human">Human only</option>
              <option value="ai">AI only</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Extracted</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{draft.extracted.writers.length} Writers</span>
            </div>
            <div className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span>{draft.extracted.books.length} Books</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{draft.extracted.vocabulary.length} Vocabulary</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>{draft.extracted.artworks.length} Artworks</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Themes</h3>
          <div className="space-y-1">
            {draft.themes.map(theme => (
              <div key={theme.id} className="text-xs">
                <span className="font-medium">{theme.name}</span>
                <span className="text-gray-500 ml-1">({theme.contentBlocks.length})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredBlocks.map((block, index) => {
            const isSelected = selectedBlock === block.id;
            const isProcessed = block.processed === 'processed';

            return (
              <div
                key={block.id}
                id={`block-${block.id}`}
                className={`p-6 rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : isProcessed
                    ? 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 opacity-75'
                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
                onClick={() => setSelectedBlock(block.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <AuthorshipBadge
                      type={block.speaker === 'human' ? 'human' : block.speaker === 'ai' ? 'ai' : 'hybrid'}
                      displayMode="prominent"
                    />
                    <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                      {block.type}
                    </span>
                    {block.metadata?.originalFormat && (
                      <span className="text-xs text-gray-500">
                        {block.metadata.originalFormat}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {isProcessed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkProcessed(block.id);
                        }}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                      >
                        <Circle className="h-5 w-5 text-gray-400" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="prose prose-sm dark:prose-invert max-w-none mb-4 whitespace-pre-wrap">
                  {block.text}
                </div>

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="mb-2">
                      <span className="text-xs font-semibold">Tag themes:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {draft.themes.map(theme => (
                          <button
                            key={theme.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTagTheme(block.id, theme.id);
                            }}
                            className={`text-xs px-2 py-1 rounded ${
                              block.themes.includes(theme.id)
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {theme.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    {block.themes.length > 0 && (
                      <div className="text-xs text-gray-500">
                        Themes: {block.themes.join(', ')}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
