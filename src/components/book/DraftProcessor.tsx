'use client';

import { useState, useEffect } from 'react';
import type { DraftFile } from '@/lib/book/draft-types';
import type { DraftAnalysis } from '@/lib/book/analysis-types';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface DraftProcessorProps {
  draft: DraftFile;
}

export function DraftProcessor({ draft }: DraftProcessorProps) {
  const [analysis, setAnalysis] = useState<DraftAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnalysis = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/book/analyze-draft?filename=${encodeURIComponent(draft.filename)}`);
        if (!response.ok) {
          throw new Error('Failed to analyze draft');
        }
        const data = await response.json();
        setAnalysis(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load analysis');
      } finally {
        setLoading(false);
      }
    };

    loadAnalysis();
  }, [draft.filename]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-3">Analyzing draft...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
          <AlertCircle className="h-5 w-5" />
          <span>Error: {error}</span>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{draft.filename}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {analysis.metadata.totalBlocks} content blocks • {analysis.metadata.totalLines} lines
          </p>
        </div>
        <div className="flex gap-2">
          <Link href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/read`}>
            <Button>
              <CheckCircle className="h-4 w-4 mr-2" />
              Start Processing
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {analysis.speakers.human.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Human Blocks</div>
        </div>
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {analysis.speakers.ai.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">AI Blocks</div>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {analysis.themes.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Themes</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {analysis.extracted.vocabulary.length + analysis.extracted.writers.length + analysis.extracted.books.length + analysis.extracted.artworks.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Entities</div>
        </div>
      </div>

      {/* Themes Preview */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Detected Themes</h2>
        <div className="flex flex-wrap gap-2">
          {analysis.themes.map(theme => (
            <Link
              key={theme.id}
              href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/organize`}
              className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-sm hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
            >
              {theme.name} ({theme.contentBlocks.length})
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/read`}>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-2">Read & Tag</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Read through content, tag themes, track progress
            </p>
          </div>
        </Link>
        <Link href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/categorize`}>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-2">Categorize</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bulk organize and filter content blocks
            </p>
          </div>
        </Link>
        <Link href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/organize`}>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-2">Organize</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Build chapters from content blocks
            </p>
          </div>
        </Link>
        <Link href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/entities`}>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-2">Entities</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              View extracted vocabulary, writers, books, artworks
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
