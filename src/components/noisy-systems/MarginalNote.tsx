'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface MarginalNoteProps {
  children: React.ReactNode;
}

export function MarginalNote({ children }: MarginalNoteProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <span
      className="relative inline-block align-super"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <span
        className={`ml-0.5 text-[10px] leading-none opacity-60 hover:opacity-100 transition-opacity cursor-default ${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}
        aria-label="Process note"
      >
        •
      </span>
      {isExpanded && (
        <span
          className={`absolute left-0 top-full z-10 mt-1 max-w-xs rounded px-3 py-2 text-xs leading-relaxed shadow-lg ${
            isDark ? 'bg-neutral-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'
          }`}
        >
          {children}
        </span>
      )}
    </span>
  );
}
