'use client';

import { useState, useMemo } from 'react';
import { DraftAnalysis, ContentBlock, Speaker, ContentType, ProcessedStatus } from '@/lib/book/analysis-types';
import { AuthorshipBadge } from './AuthorshipBadge';
import { Filter, Grid, List, CheckSquare, Square, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategorizationDashboardProps {
  analysis: DraftAnalysis;
  filename: string;
}

export function CategorizationDashboard({ analysis, filename }: CategorizationDashboardProps) {
  const [blocks, setBlocks] = useState<ContentBlock[]>(analysis.contentBlocks);
  const [selectedBlocks, setSelectedBlocks] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [speakerFilter, setSpeakerFilter] = useState<Speaker | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<ContentType | 'all'>('all');
  const [themeFilter, setThemeFilter] = useState<string>('all');
  const [processedFilter, setProcessedFilter] = useState<ProcessedStatus | 'all'>('all');

  const filteredBlocks = useMemo(() => {
    return blocks.filter(block => {
      if (speakerFilter !== 'all' && block.speaker !== speakerFilter) return false;
      if (typeFilter !== 'all' && block.type !== typeFilter) return false;
      if (themeFilter !== 'all' && !block.themes.includes(themeFilter)) return false;
      if (processedFilter !== 'all' && block.processed !== processedFilter) return false;
      return true;
    });
  }, [blocks, speakerFilter, typeFilter, themeFilter, processedFilter]);

  const handleToggleSelect = (blockId: string) => {
    setSelectedBlocks(prev => {
      const next = new Set(prev);
      if (next.has(blockId)) {
        next.delete(blockId);
      } else {
        next.add(blockId);
      }
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedBlocks.size === filteredBlocks.length) {
      setSelectedBlocks(new Set());
    } else {
      setSelectedBlocks(new Set(filteredBlocks.map(b => b.id)));
    }
  };

  const handleBulkTagTheme = (themeId: string) => {
    setBlocks(prev => prev.map(block => {
      if (selectedBlocks.has(block.id)) {
        const themes = block.themes.includes(themeId)
          ? block.themes.filter(t => t !== themeId)
          : [...block.themes, themeId];
        return { ...block, themes };
      }
      return block;
    }));
    setSelectedBlocks(new Set());
  };

  const handleBulkMarkProcessed = () => {
    setBlocks(prev => prev.map(block => {
      if (selectedBlocks.has(block.id)) {
        return { ...block, processed: 'processed' as ProcessedStatus };
      }
      return block;
    }));
    setSelectedBlocks(new Set());
  };

  const stats = {
    total: blocks.length,
    processed: blocks.filter(b => b.processed === 'processed').length,
    human: blocks.filter(b => b.speaker === 'human').length,
    ai: blocks.filter(b => b.speaker === 'ai').length,
    questions: blocks.filter(b => b.type === 'question').length,
    themes: analysis.themes.length,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Categorization Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Organize and categorize content blocks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Blocks</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold">{stats.processed}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Processed</div>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="text-2xl font-bold">{stats.human}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Human</div>
        </div>
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <div className="text-2xl font-bold">{stats.ai}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">AI</div>
        </div>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="text-2xl font-bold">{stats.questions}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Questions</div>
        </div>
        <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
          <div className="text-2xl font-bold">{stats.themes}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Themes</div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <div className="flex items-center gap-4 flex-wrap">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={speakerFilter}
            onChange={(e) => setSpeakerFilter(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
          >
            <option value="all">All Speakers</option>
            <option value="human">Human</option>
            <option value="ai">AI</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
          >
            <option value="all">All Types</option>
            <option value="question">Question</option>
            <option value="answer">Answer</option>
            <option value="concept">Concept</option>
            <option value="example">Example</option>
            <option value="quote">Quote</option>
          </select>
          <select
            value={themeFilter}
            onChange={(e) => setThemeFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
          >
            <option value="all">All Themes</option>
            {analysis.themes.map(theme => (
              <option key={theme.id} value={theme.id}>{theme.name}</option>
            ))}
          </select>
          <select
            value={processedFilter}
            onChange={(e) => setProcessedFilter(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
          >
            <option value="all">All Status</option>
            <option value="unprocessed">Unprocessed</option>
            <option value="read">Read</option>
            <option value="tagged">Tagged</option>
            <option value="processed">Processed</option>
          </select>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedBlocks.size > 0 && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-between">
          <span className="font-medium">{selectedBlocks.size} blocks selected</span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBulkMarkProcessed}
            >
              Mark as Processed
            </Button>
            <div className="flex gap-1">
              {analysis.themes.map(theme => (
                <Button
                  key={theme.id}
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkTagTheme(theme.id)}
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {theme.name}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedBlocks(new Set())}
            >
              Clear Selection
            </Button>
          </div>
        </div>
      )}

      {/* Content Blocks */}
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
        {filteredBlocks.map(block => {
          const isSelected = selectedBlocks.has(block.id);
          
          return (
            <div
              key={block.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
              onClick={() => handleToggleSelect(block.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {isSelected ? (
                    <CheckSquare className="h-4 w-4 text-blue-600" />
                  ) : (
                    <Square className="h-4 w-4 text-gray-400" />
                  )}
                  <AuthorshipBadge
                    type={block.speaker === 'human' ? 'human' : block.speaker === 'ai' ? 'ai' : 'hybrid'}
                    displayMode="subtle"
                  />
                </div>
                <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                  {block.type}
                </span>
              </div>
              <div className="text-sm line-clamp-3 mb-2">
                {block.text.substring(0, 200)}{block.text.length > 200 ? '...' : ''}
              </div>
              {block.themes.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {block.themes.map(themeId => {
                    const theme = analysis.themes.find(t => t.id === themeId);
                    return theme ? (
                      <span key={themeId} className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded">
                        {theme.name}
                      </span>
                    ) : null;
                  })}
                </div>
              )}
              <div className="text-xs text-gray-500 mt-2">
                Lines {block.lineStart}-{block.lineEnd} • {block.processed}
              </div>
            </div>
          );
        })}
      </div>

      {filteredBlocks.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No blocks match the current filters
        </div>
      )}
    </div>
  );
}
