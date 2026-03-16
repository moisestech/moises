'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface CitationTooltipProps {
  number: number;
  text: string;
}

export function CitationTooltip({ number, text }: CitationTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Wikipedia colors
  const linkColor = isDark ? '#5A9FD4' : '#0645ad';
  const borderColor = isDark ? '#54595d' : '#a2a9b1';
  const bgColor = isDark ? '#202122' : '#ffffff';
  const textColor = isDark ? '#f8f9fa' : '#202122';

  return (
    <span
      className="relative inline-block align-super ml-1"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="hover:underline text-xs font-normal"
        style={{ color: linkColor }}
        aria-label={`Citation ${number}`}
      >
        [{number}]
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 bottom-full mb-2 z-50 w-72"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div
              className="rounded border p-2 text-xs shadow-md"
              style={{
                borderColor: borderColor,
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              {text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
