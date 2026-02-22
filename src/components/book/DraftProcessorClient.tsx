'use client';

import { useState } from 'react';
import { DraftFile, convertDraftToChapterMarkdown } from '@/lib/book/draft-types';
import { DraftProcessor } from './DraftProcessor';
import { CategorizedMessage, MessageCategory } from '@/lib/book/chatgpt-importer';
import { Filter, Edit2, Save, X, Copy, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthorshipBadge } from './AuthorshipBadge';

interface DraftProcessorClientProps {
  draft: DraftFile;
}

export function DraftProcessorClient({ draft: initialDraft }: DraftProcessorClientProps) {
  const [draft, setDraft] = useState(initialDraft);
  const [selectedCategory, setSelectedCategory] = useState<MessageCategory | 'all'>('all');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState<string>('');
  const [editedMessages, setEditedMessages] = useState<CategorizedMessage[]>(
    () => initialDraft.parsed?.messages ?? []
  );

  if (!draft.parsed) {
    // Use new analysis system for non-ChatGPT format files
    return <DraftProcessor draft={draft} />;
  }

  const messages = draft.parsed.messages;

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditedContent(editedMessages[index].content);
  };

  const handleSaveEdit = (index: number) => {
    const updated = [...editedMessages];
    updated[index] = {
      ...updated[index],
      content: editedContent,
      authorshipMarker: updated[index].role === 'user' ? 'human' : 'hybrid',
    };
    setEditedMessages(updated);
    setEditingIndex(null);
    setEditedContent('');
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedContent('');
  };

  const handleCategoryChange = (index: number, category: MessageCategory) => {
    const updated = [...editedMessages];
    updated[index].category = category;
    setEditedMessages(updated);
  };

  const handleAuthorshipChange = (index: number, marker: 'human' | 'hybrid' | 'ai') => {
    const updated = [...editedMessages];
    updated[index].authorshipMarker = marker;
    setEditedMessages(updated);
  };

  const filteredMessages = selectedCategory === 'all'
    ? editedMessages
    : editedMessages.filter(msg => msg.category === selectedCategory);

  const categoryCounts = {
    question: editedMessages.filter(m => m.category === 'question').length,
    vocabulary: editedMessages.filter(m => m.category === 'vocabulary').length,
    'personal-answer': editedMessages.filter(m => m.category === 'personal-answer').length,
    'gpt-answer': editedMessages.filter(m => m.category === 'gpt-answer').length,
    other: editedMessages.filter(m => m.category === 'other').length,
  };

  const handleExportChapter = () => {
    const updatedDraft: DraftFile = {
      ...draft,
      parsed: {
        ...draft.parsed!,
        messages: editedMessages,
      },
    };
    const markdown = convertDraftToChapterMarkdown(updatedDraft);
    navigator.clipboard.writeText(markdown);
    alert('Chapter markdown copied to clipboard! Paste it into a new chapter file.');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{draft.filename}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {editedMessages.length} messages • Last modified: {new Date(draft.lastModified).toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleExportChapter}
            variant="outline"
          >
            <Download className="h-4 w-4 mr-2" />
            Export as Chapter
          </Button>
          <Button
            onClick={() => {
              const markdown = editedMessages
                .map((msg) => {
                  const marker = {
                    human: '●',
                    hybrid: '◐',
                    ai: '○',
                  }[msg.authorshipMarker || (msg.role === 'user' ? 'human' : 'ai')];
                  return `${marker} ${msg.content}`;
                })
                .join('\n\n');
              navigator.clipboard.writeText(markdown);
              alert('Markdown copied to clipboard!');
            }}
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy Markdown
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-4 flex-wrap p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <Filter className="h-5 w-5 text-gray-500" />
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded text-sm ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700'
            }`}
          >
            All ({editedMessages.length})
          </button>
          <button
            onClick={() => setSelectedCategory('question')}
            className={`px-3 py-1.5 rounded text-sm ${
              selectedCategory === 'question'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700'
            }`}
          >
            Questions ({categoryCounts.question})
          </button>
          <button
            onClick={() => setSelectedCategory('vocabulary')}
            className={`px-3 py-1.5 rounded text-sm ${
              selectedCategory === 'vocabulary'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700'
            }`}
          >
            Vocabulary ({categoryCounts.vocabulary})
          </button>
          <button
            onClick={() => setSelectedCategory('personal-answer')}
            className={`px-3 py-1.5 rounded text-sm ${
              selectedCategory === 'personal-answer'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700'
            }`}
          >
            Personal ({categoryCounts['personal-answer']})
          </button>
          <button
            onClick={() => setSelectedCategory('gpt-answer')}
            className={`px-3 py-1.5 rounded text-sm ${
              selectedCategory === 'gpt-answer'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700'
            }`}
          >
            GPT Answers ({categoryCounts['gpt-answer']})
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map((message, index) => {
          const actualIndex = editedMessages.indexOf(message);
          const isEditing = editingIndex === actualIndex;

          return (
            <div
              key={actualIndex}
              className={`p-4 rounded-lg border ${
                message.role === 'user'
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                  : 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-white dark:bg-gray-800">
                    {message.role === 'user' ? 'You' : 'ChatGPT'}
                  </span>
                  <AuthorshipBadge
                    type={message.authorshipMarker || (message.role === 'user' ? 'human' : 'ai')}
                    displayMode="subtle"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={message.category}
                    onChange={(e) => handleCategoryChange(actualIndex, e.target.value as MessageCategory)}
                    className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  >
                    <option value="question">Question</option>
                    <option value="vocabulary">Vocabulary</option>
                    <option value="personal-answer">Personal Answer</option>
                    <option value="gpt-answer">GPT Answer</option>
                    <option value="other">Other</option>
                  </select>
                  {message.role === 'assistant' && (
                    <select
                      value={message.authorshipMarker || 'ai'}
                      onChange={(e) => handleAuthorshipChange(actualIndex, e.target.value as 'human' | 'hybrid' | 'ai')}
                      className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                      <option value="ai">○ AI</option>
                      <option value="hybrid">◐ Hybrid</option>
                      <option value="human">● Human</option>
                    </select>
                  )}
                  {!isEditing && (
                    <button
                      onClick={() => handleEdit(actualIndex)}
                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {isEditing ? (
                <div className="space-y-2">
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full h-32 p-2 border border-gray-300 dark:border-gray-700 rounded text-sm bg-white dark:bg-gray-800"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleSaveEdit(actualIndex)}
                      size="sm"
                    >
                      <Save className="h-3 w-3 mr-1" />
                      Save
                    </Button>
                    <Button
                      onClick={handleCancelEdit}
                      variant="outline"
                      size="sm"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                  {message.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
