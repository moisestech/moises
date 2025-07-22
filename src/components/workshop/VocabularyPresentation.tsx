'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface Term {
  term: string;
  definition: string;
  icon: any;
  platforms: string[];
  sectionTitle?: string;
  sectionColor?: string;
}

interface Section {
  title: string;
  icon: any;
  color: string;
  terms: Term[];
}

interface VocabularyPresentationProps {
  sections: Section[];
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

const overlayVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  show: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

export default function VocabularyPresentation({ sections }: VocabularyPresentationProps) {
  const { theme } = useTheme();
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  // Flatten all terms into a single array
  const allTerms = sections.flatMap(section => 
    section.terms.map(term => ({
      ...term,
      sectionTitle: section.title,
      sectionColor: section.color
    }))
  );

  return (
    <div className="relative">
      {/* Grid of Terms */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {allTerms.map((term, index) => (
          <motion.button
            key={term.term}
            variants={cardVariants}
            onClick={() => setSelectedTerm(term)}
            className={cn(
              "group relative p-6 rounded-xl transition-all cursor-pointer",
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-50',
              "border border-transparent hover:border-indigo-500"
            )}
          >
            {/* Gradient Glow Effect */}
            <div className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity",
              "bg-gradient-to-r",
              term.sectionColor
            )} />

            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className={cn(
                "p-4 rounded-xl transition-transform group-hover:scale-110",
                "bg-gradient-to-r",
                term.sectionColor
              )}>
                <term.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={cn(
                "text-lg font-semibold",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                {term.term}
              </h3>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Definition Overlay */}
      <AnimatePresence>
        {selectedTerm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTerm(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Content */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className={cn(
                "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "w-[90vw] max-w-2xl p-8 rounded-2xl z-50",
                theme === 'dark' ? 'bg-gray-800' : 'bg-white',
                "shadow-2xl"
              )}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTerm(null)}
                className={cn(
                  "absolute top-4 right-4 p-2 rounded-full",
                  theme === 'dark' 
                    ? 'hover:bg-gray-700 text-gray-400' 
                    : 'hover:bg-gray-100 text-gray-500'
                )}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center gap-6">
                <div className={cn(
                  "p-6 rounded-xl",
                  "bg-gradient-to-r",
                  selectedTerm.sectionColor
                )}>
                  <selectedTerm.icon className="w-12 h-12 text-white" />
                </div>

                <div>
                  <h2 className={cn(
                    "text-3xl font-bold mb-2",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    {selectedTerm.term}
                  </h2>
                  <p className={cn(
                    "text-sm font-medium",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  )}>
                    {selectedTerm.sectionTitle}
                  </p>
                </div>

                <p className={cn(
                  "text-lg",
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                )}>
                  {selectedTerm.definition}
                </p>

                <div className="flex gap-2">
                  {selectedTerm.platforms.map(platform => (
                    <span
                      key={platform}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm",
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      )}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 