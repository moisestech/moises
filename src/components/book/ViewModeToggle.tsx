'use client';

import { ViewMode } from '@/lib/book/types';
import { Filter } from 'lucide-react';

interface ViewModeToggleProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

const VIEW_MODES: { value: ViewMode; label: string; description: string }[] = [
  {
    value: 'all',
    label: 'All',
    description: 'Show all content',
  },
  {
    value: 'human-only',
    label: 'Human Only',
    description: 'Hide AI drafts',
  },
  {
    value: 'hybrid-only',
    label: 'Hybrid + Human',
    description: 'Show hybrid and human content',
  },
  {
    value: 'ai-only',
    label: 'AI Only',
    description: 'Show AI drafts for critique',
  },
];

export function ViewModeToggle({
  currentMode,
  onModeChange,
}: ViewModeToggleProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {VIEW_MODES.map((mode) => (
          <button
            key={mode.value}
            onClick={() => onModeChange(mode.value)}
            className={`px-3 py-1.5 text-sm rounded transition-colors ${
              currentMode === mode.value
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
            title={mode.description}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
}
