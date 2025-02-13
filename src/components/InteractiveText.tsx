'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipContent {
  text?: string;
  image?: {
    src: string;
    alt: string;
  };
  link?: {
    url: string;
    label: string;
  };
}

interface InteractiveTextProps {
  children: string;
  type: 'italic' | 'highlight' | 'link';
  content: TooltipContent;
}

export default function InteractiveText({
  children,
  type,
  content,
}: InteractiveTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block group">
      <span
        className={`
          ${type === 'italic' ? 'italic text-blue-600 dark:text-blue-400' : ''}
          ${type === 'highlight' ? 'text-blue-600 dark:text-blue-400' : ''}
          ${type === 'link' ? 'text-blue-600 dark:text-blue-400' : ''}
          cursor-help border-b border-dotted border-blue-300 dark:border-blue-600
          hover:text-blue-800 dark:hover:text-blue-300 transition-colors
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            {content.text && (
              <div className="p-4 text-sm leading-relaxed">
                {content.text.split(' ').map((word, i) => {
                  const isKeyword =
                    /^[A-Z]/.test(word) ||
                    word.includes('privacy') ||
                    word.includes('data') ||
                    word.includes('digital') ||
                    word.includes('surveillance');
                  return (
                    <span key={i}>
                      {isKeyword ? (
                        <span className="font-semibold">{word}</span>
                      ) : (
                        word
                      )}{' '}
                    </span>
                  );
                })}
              </div>
            )}

            {content.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative w-full aspect-square"
              >
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            )}

            {content.link && (
              <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href={content.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
                >
                  {content.link.label}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
