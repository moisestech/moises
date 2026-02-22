'use client';

import { AuthorshipBadge } from './AuthorshipBadge';
import { Info } from 'lucide-react';
import { useState } from 'react';

interface AuthorshipLegendProps {
  displayMode?: 'subtle' | 'prominent';
  collapsible?: boolean;
}

export function AuthorshipLegend({
  displayMode = 'subtle',
  collapsible = true,
}: AuthorshipLegendProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsible);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-6">
      {collapsible && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <Info className="h-4 w-4" />
          <span>Authorship Legend</span>
          <span className="ml-auto">{isCollapsed ? '▼' : '▲'}</span>
        </button>
      )}
      
      {(!collapsible || !isCollapsed) && (
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-3">
            This book uses transparent authorship markers to distinguish between human-written,
            AI-assisted, and AI-generated content.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <AuthorshipBadge type="human" displayMode={displayMode} showTooltip={false} />
            <span className="text-xs text-gray-700 dark:text-gray-300">Human-written, untouched by AI</span>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <AuthorshipBadge type="hybrid" displayMode={displayMode} showTooltip={false} />
            <span className="text-xs text-gray-700 dark:text-gray-300">Co-written with AI assistance</span>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <AuthorshipBadge type="ai" displayMode={displayMode} showTooltip={false} />
            <span className="text-xs text-gray-700 dark:text-gray-300">AI-generated draft, marked for critique</span>
          </div>
        </div>
      )}
    </div>
  );
}
