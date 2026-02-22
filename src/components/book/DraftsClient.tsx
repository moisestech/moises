'use client';

import { useState } from 'react';
import type { DraftFile } from '@/lib/book/draft-types';
import { FileText, Calendar, MessageSquare, BookOpen, Filter, Eye, Download, Copy, LayoutGrid, Tag, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface DraftsClientProps {
  initialDrafts: DraftFile[];
}

export function DraftsClient({ initialDrafts }: DraftsClientProps) {
  const [drafts] = useState<DraftFile[]>(initialDrafts);
  const [selectedDraft, setSelectedDraft] = useState<DraftFile | null>(null);
  const [filter, setFilter] = useState<'all' | 'parseable' | 'plain-text'>('all');

  const filteredDrafts = drafts.filter((draft) => {
    if (filter === 'parseable') return draft.parsed !== undefined;
    if (filter === 'plain-text') return draft.parsed === undefined;
    return true;
  });

  const handleCopyMarkdown = async (draft: DraftFile) => {
    if (!draft.parsed) {
      await navigator.clipboard.writeText(draft.content);
      alert('Draft content copied to clipboard!');
      return;
    }

    const markdown = draft.parsed.messages
      .map((msg) => {
        const marker = {
          human: '●',
          hybrid: '◐',
          ai: '○',
        }[msg.authorshipMarker || (msg.role === 'user' ? 'human' : 'ai')];
        return `${marker} ${msg.content}`;
      })
      .join('\n\n');

    await navigator.clipboard.writeText(markdown);
    alert('Formatted markdown copied to clipboard!');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Draft Files</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Manage your ChatGPT conversation drafts. Create files in{' '}
          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">
            content/born-into-the-machine/drafts/
          </code>{' '}
          and paste your conversations directly into them.
        </p>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">How to Add Drafts</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Create a new <code>.md</code> file in the drafts folder</li>
            <li>Paste your ChatGPT conversation directly into the file</li>
            <li>Save the file - it will appear here automatically</li>
            <li>Click on a draft to view and process it</li>
          </ol>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-4 mb-6">
          <Filter className="h-5 w-5 text-gray-500" />
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded text-sm ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              All ({drafts.length})
            </button>
            <button
              onClick={() => setFilter('parseable')}
              className={`px-3 py-1.5 rounded text-sm ${
                filter === 'parseable'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Parseable ({drafts.filter(d => d.parsed).length})
            </button>
            <button
              onClick={() => setFilter('plain-text')}
              className={`px-3 py-1.5 rounded text-sm ${
                filter === 'plain-text'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Plain Text ({drafts.filter(d => !d.parsed).length})
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Drafts List */}
        <div className="lg:col-span-1 space-y-4">
          {filteredDrafts.length === 0 ? (
            <div className="p-8 text-center border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-2">No draft files found</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Create <code>.md</code> files in the drafts folder to get started
              </p>
            </div>
          ) : (
            filteredDrafts.map((draft) => (
              <div
                key={draft.filename}
                onClick={() => setSelectedDraft(draft)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedDraft?.filename === draft.filename
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sm">{draft.filename}</h3>
                  {draft.parsed && (
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                      Parsed
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(draft.lastModified).toLocaleDateString()}
                  </span>
                  {draft.parsed && (
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {draft.parsed.messages.length} messages
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    {Math.round(draft.content.split('\n').length / 100) * 100}+ lines
                  </span>
                </div>

                {draft.parsed && (
                  <div className="flex gap-2 text-xs mt-2">
                    {draft.stats.questions > 0 && (
                      <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded">
                        {draft.stats.questions} Q
                      </span>
                    )}
                    {draft.stats.vocabulary > 0 && (
                      <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded">
                        {draft.stats.vocabulary} Vocab
                      </span>
                    )}
                    {draft.stats.personalAnswers > 0 && (
                      <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">
                        {draft.stats.personalAnswers} Personal
                      </span>
                    )}
                    {draft.stats.gptAnswers > 0 && (
                      <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded">
                        {draft.stats.gptAnswers} GPT
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Draft Detail View */}
        <div className="lg:col-span-2">
          {selectedDraft ? (
            <DraftDetailView draft={selectedDraft} onCopyMarkdown={handleCopyMarkdown} />
          ) : (
            <div className="p-12 text-center border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900">
              <Eye className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Select a draft file to view its contents
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DraftDetailView({
  draft,
  onCopyMarkdown,
}: {
  draft: DraftFile;
  onCopyMarkdown: (draft: DraftFile) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{draft.filename}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Modified: {new Date(draft.lastModified).toLocaleString()}</span>
            {draft.parsed && (
              <span>{draft.parsed.messages.length} messages</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/research/born-into-the-machine/drafts/process-all">
            <Button variant="default" size="sm" className="mb-2">
              Process All Files
            </Button>
          </Link>
          <Button
            onClick={() => onCopyMarkdown(draft)}
            variant="outline"
            size="sm"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy Markdown
          </Button>
          {draft.parsed && (
            <>
              <Link
                href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/read`}
              >
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Read
                </Button>
              </Link>
              <Link
                href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/categorize`}
              >
                <Button variant="outline" size="sm">
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Categorize
                </Button>
              </Link>
              <Link
                href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/organize`}
              >
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Organize
                </Button>
              </Link>
              <Link
                href={`/research/born-into-the-machine/drafts/${encodeURIComponent(draft.filename)}/entities`}
              >
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Entities
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Stats */}
      {draft.parsed && (
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {draft.stats.questions}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {draft.stats.vocabulary}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Vocabulary</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {draft.stats.personalAnswers}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Personal</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {draft.stats.gptAnswers}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">GPT Answers</div>
          </div>
        </div>
      )}

      {/* Content Preview */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
        <h3 className="font-semibold mb-4">Content Preview</h3>
        {draft.parsed ? (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {draft.parsed.messages.slice(0, 10).map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded ${
                  msg.role === 'user'
                    ? 'bg-blue-50 dark:bg-blue-900/20'
                    : 'bg-orange-50 dark:bg-orange-900/20'
                }`}
              >
                <div className="text-xs font-medium mb-1">
                  {msg.role === 'user' ? 'You' : 'ChatGPT'} • {msg.category}
                </div>
                <div className="text-sm whitespace-pre-wrap line-clamp-3">
                  {msg.content}
                </div>
              </div>
            ))}
            {draft.parsed.messages.length > 10 && (
              <div className="text-sm text-gray-500 text-center">
                ... and {draft.parsed.messages.length - 10} more messages
              </div>
            )}
          </div>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded">
              {draft.content.substring(0, 1000)}
              {draft.content.length > 1000 && '...'}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
