'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LexiconTermProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export function LexiconTerm({ term, definition, children }: LexiconTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <span ref={containerRef} className="relative inline">
      <span
        role="button"
        tabIndex={0}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen((v) => !v);
          }
        }}
        className={`cursor-help border-b border-dotted ${
          isDark ? 'border-gray-500 hover:border-gray-400' : 'border-gray-400 hover:border-gray-600'
        }`}
      >
        {children}
      </span>
      {isOpen && (
        <span
          className={`absolute left-0 top-full z-10 mt-1 max-w-xs rounded px-3 py-2 text-sm shadow-lg ${
            isDark ? 'bg-neutral-800 text-gray-200' : 'bg-white text-gray-800 border border-gray-200'
          }`}
        >
          {definition}
        </span>
      )}
    </span>
  );
}
