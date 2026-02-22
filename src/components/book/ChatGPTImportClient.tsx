'use client';

import { useState } from 'react';
import { parseChatGPTChat, categorizeConversation, CategorizedMessage, MessageCategory } from '@/lib/book/chatgpt-importer';
import { Upload, FileText, Edit2, Save, X, Check, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthorshipBadge } from './AuthorshipBadge';

export function ChatGPTImportClient() {
  const [rawText, setRawText] = useState('');
  const [categorizedMessages, setCategorizedMessages] = useState<CategorizedMessage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<MessageCategory | 'all'>('all');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState<string>('');

  const handleImport = () => {
    if (!rawText.trim()) return;

    try {
      const parsed = parseChatGPTChat(rawText);
      const categorized = categorizeConversation(parsed);
      setCategorizedMessages(categorized);
    } catch (error: any) {
      alert(`Failed to parse conversation: ${error.message}`);
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditedContent(categorizedMessages[index].content);
  };

  const handleSaveEdit = (index: number) => {
    const updated = [...categorizedMessages];
    updated[index] = {
      ...updated[index],
      content: editedContent,
      authorshipMarker: updated[index].role === 'user' ? 'human' : 'hybrid', // Mark edited as hybrid
    };
    setCategorizedMessages(updated);
    setEditingIndex(null);
    setEditedContent('');
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedContent('');
  };

  const handleCategoryChange = (index: number, category: MessageCategory) => {
    const updated = [...categorizedMessages];
    updated[index].category = category;
    setCategorizedMessages(updated);
  };

  const handleAuthorshipChange = (index: number, marker: 'human' | 'hybrid' | 'ai') => {
    const updated = [...categorizedMessages];
    updated[index].authorshipMarker = marker;
    setCategorizedMessages(updated);
  };

  const filteredMessages = selectedCategory === 'all'
    ? categorizedMessages
    : categorizedMessages.filter(msg => msg.category === selectedCategory);

  const categoryCounts = {
    question: categorizedMessages.filter(m => m.category === 'question').length,
    vocabulary: categorizedMessages.filter(m => m.category === 'vocabulary').length,
    'personal-answer': categorizedMessages.filter(m => m.category === 'personal-answer').length,
    'gpt-answer': categorizedMessages.filter(m => m.category === 'gpt-answer').length,
    other: categorizedMessages.filter(m => m.category === 'other').length,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-44">
      <h1 className="text-4xl font-bold mb-6">Import ChatGPT Conversation</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Paste your ChatGPT conversation below. The system will automatically categorize messages
        into questions, vocabulary, personal answers, and GPT answers. You can edit, re-categorize,
        and tag with authorship markers before importing into your book.
      </p>

      {/* Import Section */}
      <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <label className="block text-sm font-medium mb-2">
          Paste ChatGPT Conversation
        </label>
        <textarea
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder="Paste your ChatGPT conversation here. Supports various formats:
- User: ... / ChatGPT: ...
- You: ... / Assistant: ...
- JSON format
- Markdown format"
          className="w-full h-48 p-4 border border-gray-300 dark:border-gray-700 rounded text-sm font-mono bg-white dark:bg-gray-800"
        />
        <Button
          onClick={handleImport}
          disabled={!rawText.trim()}
          className="mt-4"
        >
          <Upload className="h-4 w-4 mr-2" />
          Parse Conversation
        </Button>
      </div>

      {/* Results Section */}
      {categorizedMessages.length > 0 && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="h-5 w-5 text-gray-500" />
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded text-sm ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                All ({categorizedMessages.length})
              </button>
              <button
                onClick={() => setSelectedCategory('question')}
                className={`px-3 py-1.5 rounded text-sm ${
                  selectedCategory === 'question'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                Questions ({categoryCounts.question})
              </button>
              <button
                onClick={() => setSelectedCategory('vocabulary')}
                className={`px-3 py-1.5 rounded text-sm ${
                  selectedCategory === 'vocabulary'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                Vocabulary ({categoryCounts.vocabulary})
              </button>
              <button
                onClick={() => setSelectedCategory('personal-answer')}
                className={`px-3 py-1.5 rounded text-sm ${
                  selectedCategory === 'personal-answer'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                Personal ({categoryCounts['personal-answer']})
              </button>
              <button
                onClick={() => setSelectedCategory('gpt-answer')}
                className={`px-3 py-1.5 rounded text-sm ${
                  selectedCategory === 'gpt-answer'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                GPT Answers ({categoryCounts['gpt-answer']})
              </button>
            </div>
          </div>

          {/* Messages List */}
          <div className="space-y-4">
            {filteredMessages.map((message, index) => {
              const actualIndex = categorizedMessages.indexOf(message);
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

          {/* Export Actions */}
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Export to Chapter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Once you've reviewed and edited the conversation, you can export it as a chapter
              or add it to an existing chapter.
            </p>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  // TODO: Implement export to chapter
                  alert('Export functionality coming soon!');
                }}
              >
                <FileText className="h-4 w-4 mr-2" />
                Export as New Chapter
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  // Copy formatted markdown to clipboard
                  const markdown = categorizedMessages
                    .map(msg => {
                      const marker = {
                        human: '●',
                        hybrid: '◐',
                        ai: '○',
                      }[msg.authorshipMarker || (msg.role === 'user' ? 'human' : 'ai')];
                      return `${marker} ${msg.content}\n\n`;
                    })
                    .join('');
                  navigator.clipboard.writeText(markdown);
                  alert('Markdown copied to clipboard!');
                }}
              >
                Copy as Markdown
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
