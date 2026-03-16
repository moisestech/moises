'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { wikiGlossary, WikiPreviewItem } from '@/constants/wiki-glossary';

interface WikiLinkProps {
  term: string;
  children: React.ReactNode;
  className?: string;
}

export function WikiLink({ term, children, className = '' }: WikiLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const linkRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const item = wikiGlossary[term];

  useEffect(() => {
    if (isOpen && item && linkRef.current && tooltipRef.current) {
      const linkRect = linkRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if tooltip would overflow bottom of viewport
      if (linkRect.bottom + tooltipRect.height + 8 > viewportHeight) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isOpen, item]);

  // If term not in glossary, render as regular text
  if (!item) {
    return <span className={className}>{children}</span>;
  }

  // Wikipedia link colors
  const linkColor = isDark ? '#5A9FD4' : '#0645ad';
  const visitedColor = isDark ? '#9A9AFF' : '#0b0080';
  const borderColor = isDark ? '#54595d' : '#a2a9b1';
  const bgColor = isDark ? '#202122' : '#ffffff';
  const textColor = isDark ? '#f8f9fa' : '#202122';

  return (
    <span
      ref={linkRef}
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href || '#'}
        className={`${className} hover:underline decoration-[1px]`}
        style={{
          color: linkColor,
        }}
        onMouseDown={(e) => {
          // Prevent tooltip from closing on click
          e.preventDefault();
        }}
      >
        {children}
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: position === 'top' ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === 'top' ? 10 : -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-80"
            style={{
              [position === 'top' ? 'top' : 'bottom']: 'calc(100% + 8px)',
              left: '0',
            }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div
              className="rounded border shadow-lg"
              style={{
                borderColor: borderColor,
                backgroundColor: bgColor,
              }}
            >
              {item.image && (
                <div className="relative w-full h-32 border-b overflow-hidden rounded-t">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              )}
              <div className="p-3 text-sm" style={{ color: textColor }}>
                <div
                  className="font-semibold mb-1"
                  style={{ color: textColor }}
                >
                  {item.title}
                </div>
                <p className="leading-snug" style={{ color: textColor }}>
                  {item.summary}
                </p>
                {item.href && (
                  <div className="mt-2 pt-2 border-t" style={{ borderColor: borderColor }}>
                    <span className="text-xs" style={{ color: linkColor }}>
                      Read more →
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
