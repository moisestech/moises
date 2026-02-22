'use client';

import { useState, useEffect } from 'react';
import { AIMode } from '@/lib/book/types';
import { Send, Loader2, Sparkles, FileEdit, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AIAssistantPanelProps {
  onInsertText: (text: string, type: 'ai' | 'hybrid') => void;
  selectedText?: string;
}

const MODE_CONFIG = {
  'thinking-partner': {
    label: 'Thinking Partner',
    icon: Sparkles,
    description: 'Ask hard questions, surface contradictions',
  },
  'structural-editor': {
    label: 'Structural Editor',
    icon: FileEdit,
    description: 'Help outline and organize chapters',
  },
  'line-surgeon': {
    label: 'Line Surgeon',
    icon: Scissors,
    description: 'Tighten and refine specific passages',
  },
};

export function AIAssistantPanel({ onInsertText, selectedText = '' }: AIAssistantPanelProps) {
  const [mode, setMode] = useState<AIMode>('thinking-partner');
  const [prompt, setPrompt] = useState('');
  const [context, setContext] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-populate context when text is selected
  useEffect(() => {
    if (selectedText && selectedText.trim()) {
      setContext(selectedText);
    }
  }, [selectedText]);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const res = await fetch('/api/book/ai-assist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          mode,
          context: context.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to get AI response');
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleInsertAsAI = () => {
    if (response) {
      onInsertText(response, 'ai');
      setResponse('');
    }
  };

  const handleInsertAsHybrid = () => {
    if (response) {
      onInsertText(response, 'hybrid');
      setResponse('');
    }
  };

  const currentModeConfig = MODE_CONFIG[mode];

  return (
    <div className="w-full h-full flex flex-col border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold mb-3">AI Co-Writing Assistant</h3>
        
        <div className="space-y-2 mb-4">
          {Object.entries(MODE_CONFIG).map(([modeKey, config]) => {
            const Icon = config.icon;
            return (
              <button
                key={modeKey}
                onClick={() => setMode(modeKey as AIMode)}
                className={`w-full text-left p-2 rounded text-sm transition-colors ${
                  mode === modeKey
                    ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <div>
                    <div className="font-medium">{config.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {config.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Context {selectedText && selectedText.trim() && '(auto-filled from selection)'}
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Paste relevant context from your chapter..."
            className="w-full h-24 p-2 border border-gray-300 dark:border-gray-700 rounded text-sm bg-white dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask a question, request edits, or share text for feedback..."
            className="w-full h-32 p-2 border border-gray-300 dark:border-gray-700 rounded text-sm bg-white dark:bg-gray-800"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                handleSubmit();
              }
            }}
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading || !prompt.trim()}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Thinking...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send
            </>
          )}
        </Button>

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-sm text-red-700 dark:text-red-400">
            {error}
          </div>
        )}

        {response && (
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                AI Response (○ AI DRAFT)
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                {response}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleInsertAsAI}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Insert as ○ AI
              </Button>
              <Button
                onClick={handleInsertAsHybrid}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Insert as ◐ Hybrid
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
