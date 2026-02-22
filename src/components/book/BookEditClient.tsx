'use client';

import { useState, useEffect } from 'react';
import { BookChapter } from '@/lib/book/types';
import { BookEditor } from './BookEditor';
import { EditorPreview } from './EditorPreview';
import { AIAssistantPanel } from './AIAssistantPanel';
import { ViewModeToggle } from './ViewModeToggle';
import { ViewMode } from '@/lib/book/types';
import { Save, ArrowLeft, Eye } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
// Note: gray-matter is used via dynamic import in the parser

interface BookEditClientProps {
  chapter: BookChapter;
}

export function BookEditClient({ chapter: initialChapter }: BookEditClientProps) {
  const [markdown, setMarkdown] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [selectedText, setSelectedText] = useState<string>('');
  const { toast } = useToast();

  // Initialize markdown from chapter
  useEffect(() => {
    const frontmatter = `---
title: "${initialChapter.title}"
slug: "${initialChapter.slug}"
status: "${initialChapter.status}"
created: "${initialChapter.created}"
lastModified: "${initialChapter.lastModified}"
---

`;

    // Reconstruct markdown from content blocks
    const content = initialChapter.content
      .map((block) => {
        const marker: Record<string, string> = {
          human: '●',
          hybrid: '◐',
          ai: '○',
          notes: '•',
          authors: '@',
          vocabulary: '§',
        };
        const m = marker[block.type] ?? '○';
        return `${m} ${block.text}`;
      })
      .join('\n\n');

    setMarkdown(frontmatter + content);
  }, [initialChapter]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/book/save-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: initialChapter.slug,
          markdown: markdown,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save');
      }

      setHasChanges(false);
      toast({
        title: 'Chapter saved',
        description: 'Your changes have been saved successfully.',
      });
    } catch (error: any) {
      console.error('Failed to save:', error);
      toast({
        title: 'Save failed',
        description: error.message || 'Failed to save chapter. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleInsertText = (text: string, type: 'ai' | 'hybrid') => {
    const marker = type === 'ai' ? '○' : '◐';
    const newText = `${marker} ${text}\n\n`;
    setMarkdown((prev) => prev + '\n\n' + newText);
    setHasChanges(true);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 pt-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href={`/research/born-into-the-machine/${initialChapter.slug}`}
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Chapter
          </Link>
          <h1 className="text-lg font-semibold text-black dark:text-white">{initialChapter.title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="inline-flex items-center justify-center rounded-md h-9 px-3 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          >
            <Eye className="h-4 w-4 mr-2" />
            {showPreview ? 'Hide' : 'Show'} Preview
          </button>
          <button
            onClick={() => setShowAIPanel(!showAIPanel)}
            className="inline-flex items-center justify-center rounded-md h-9 px-3 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          >
            {showAIPanel ? 'Hide' : 'Show'} AI Assistant
          </button>
          <button
            onClick={handleSave}
            disabled={!hasChanges || saving}
            className="inline-flex items-center justify-center rounded-md h-9 px-3 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor */}
        <div className={`flex-1 flex flex-col ${showPreview ? 'border-r' : ''} border-gray-200 dark:border-gray-800`}>
          <div className="flex-1 relative">
            <BookEditor
              value={markdown}
              onChange={(value) => {
                setMarkdown(value);
                setHasChanges(true);
              }}
              onSave={handleSave}
              onSelectionChange={setSelectedText}
            />
          </div>
        </div>

        {/* Preview */}
        {showPreview && (
          <div className="flex-1 flex flex-col border-r border-gray-200 dark:border-gray-800">
            <div className="border-b border-gray-200 dark:border-gray-800 p-2">
              <ViewModeToggle currentMode={viewMode} onModeChange={setViewMode} />
            </div>
            <div className="flex-1 overflow-hidden">
              <EditorPreview markdown={markdown} viewMode={viewMode} />
            </div>
          </div>
        )}

        {/* AI Assistant Panel */}
        {showAIPanel && (
          <div className="w-96 flex-shrink-0">
            <AIAssistantPanel 
              onInsertText={handleInsertText} 
              selectedText={selectedText}
            />
          </div>
        )}
      </div>
    </div>
  );
}
