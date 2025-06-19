'use client';

import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Define the keywords that should be highlighted
const highlightedKeywords = [
  'mobile AI laboratory',
  'Smart Signs',
  'bilingual Learning Management System',
  'Bakehouse',
  'Edge Zones',
  'Locust Projects',
  'ethical creative-tech'
];

// Custom TextReveal component that supports keyword highlighting
const CustomTextReveal = ({ text, className }: { text: string; className: string }) => {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const heightReveal = 150;

  // Function to process text and identify highlighted segments
  const processText = (text: string) => {
    const segments: Array<{ text: string; isHighlighted: boolean }> = [];
    
    // Debug: Log the keywords we're looking for
    console.log('Looking for keywords:', highlightedKeywords);
    console.log('Original text:', text);
    console.log('Text length:', text.length);
    
    // Direct search test to verify keywords are present
    console.log('=== DIRECT SEARCH TEST ===');
    highlightedKeywords.forEach(keyword => {
      const lowerText = text.toLowerCase();
      const lowerKeyword = keyword.toLowerCase();
      const index = lowerText.indexOf(lowerKeyword);
      console.log(`Direct search for "${keyword}": ${index !== -1 ? `FOUND at index ${index}` : 'NOT FOUND'}`);
      if (index !== -1) {
        const context = text.substring(Math.max(0, index - 10), index + keyword.length + 10);
        console.log(`  Context: "...${context}..."`);
      }
    });
    console.log('=== END DIRECT SEARCH TEST ===');
    
    // Find all keyword positions and sort by their position in the text
    const keywordPositions: Array<{ keyword: string; index: number; length: number }> = [];
    
    highlightedKeywords.forEach(keyword => {
      const lowerText = text.toLowerCase();
      const lowerKeyword = keyword.toLowerCase();
      const index = lowerText.indexOf(lowerKeyword);
      
      if (index !== -1) {
        // Check if this is a word boundary match
        const beforeChar = index > 0 ? text[index - 1] : ' ';
        const afterChar = index + keyword.length < text.length ? text[index + keyword.length] : ' ';
        const isWordBoundary = (
          /[\s\W]/.test(beforeChar) || index === 0
        ) && (
          /[\s\W]/.test(afterChar) || index + keyword.length === text.length
        );
        
        if (isWordBoundary) {
          keywordPositions.push({
            keyword,
            index,
            length: keyword.length
          });
        }
      }
    });
    
    // Sort by position in text (earliest first)
    keywordPositions.sort((a, b) => a.index - b.index);
    
    console.log('Keyword positions found:', keywordPositions);
    
    // Process text in order of keyword appearance
    let currentIndex = 0;
    
    keywordPositions.forEach(({ keyword, index, length }) => {
      // Add text before the keyword
      if (index > currentIndex) {
        const beforeText = text.substring(currentIndex, index);
        segments.push({ text: beforeText, isHighlighted: false });
      }
      
      // Add the keyword
      const keywordText = text.substring(index, index + length);
      segments.push({ text: keywordText, isHighlighted: true });
      
      // Update current index
      currentIndex = index + length;
    });
    
    // Add remaining text after the last keyword
    if (currentIndex < text.length) {
      const remainingText = text.substring(currentIndex);
      segments.push({ text: remainingText, isHighlighted: false });
    }
    
    console.log('Final processed segments:', segments);
    return segments;
  };

  const textSegments = processText(text);

  return (
    <div ref={targetRef} className={`relative z-0 h-[${heightReveal}vh] ${className}`}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[6rem] md:py-[6rem]">
        <span className="flex flex-wrap p-5 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-black/20 dark:text-white/20 md:p-8 lg:p-10 xl:text-5xl">
          {textSegments.map((segment, segmentIndex) => {
            // Split segment into words for individual animation
            const words = segment.text.split(' ');
            
            return words.map((word, wordIndex) => {
              const globalIndex = textSegments
                .slice(0, segmentIndex)
                .reduce((acc, seg) => acc + seg.text.split(' ').length, 0) + wordIndex;
              
              const start = globalIndex / text.split(' ').length;
              const end = start + 2 / text.split(' ').length;
              
              return (
                <HighlightedWord 
                  key={`${segmentIndex}-${wordIndex}`} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                  isHighlighted={segment.isHighlighted}
                >
                  {word}
                </HighlightedWord>
              );
            });
          })}
        </span>
      </div>
    </div>
  );
};

interface HighlightedWordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlighted: boolean;
}

const HighlightedWord: React.FC<HighlightedWordProps> = ({ 
  children, 
  progress, 
  range, 
  isHighlighted 
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]);
  const y = useTransform(progress, range, [20, 0]);
  
  // Additional animations for highlighted words
  const glowIntensity = useTransform(progress, range, [0, isHighlighted ? 1 : 0]);
  const rotation = useTransform(progress, range, [isHighlighted ? -5 : 0, 0]);

  // Inline styles for highlighted words as backup
  const highlightedStyles = isHighlighted ? {
    background: 'linear-gradient(135deg, #A4FF4E, #00FF88, #3B82F6, #EC4899)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    position: 'relative' as const,
    display: 'inline-block',
    fontWeight: 900,
    textShadow: '0 0 30px rgba(164, 255, 78, 0.8)',
    filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(164, 255, 78, 0.6)) drop-shadow(0 0 40px rgba(164, 255, 78, 0.3))',
    animation: 'gradientShift 3s ease-in-out infinite, pulseGlow 2s ease-in-out infinite'
  } : {};

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ 
          opacity, 
          scale, 
          y, 
          rotate: rotation,
          ...highlightedStyles
        }}
        className={`${
          isHighlighted 
            ? 'highlighted-word' 
            : 'text-black dark:text-white'
        }`}
        whileHover={isHighlighted ? { 
          scale: 1.15, 
          rotate: 3,
          transition: { 
            duration: 0.4,
            type: "spring",
            stiffness: 300
          }
        } : {}}
        whileTap={isHighlighted ? {
          scale: 0.95,
          transition: { duration: 0.1 }
        } : {}}
      >
        {children}
      </motion.span>
    </span>
  );
};

export function ProposalTextReveal() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Proposal text with spaces before and after each emoji for scroll-based animation
  const proposalText = `AI24 will launch a mobile AI laboratory 🧪 that deploys twelve museum-grade Smart Signs 📺 , a suitcase-laser classroom 🎓 , and a bilingual Learning Management System 💻 across Bakehouse, Edge Zones, and Locust Projects — equipping Miami artists 🎨 with open, ethical creative-tech ⚡ and a self-funded skill & communications pipeline that keeps growing long after the grant 🚀 .`;

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="text-center mb-12"
    >
      <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Digital Vision
      </h2>
      
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-max px-4">
          <CustomTextReveal 
            text={proposalText}
            className={`text-3xl md:text-4xl lg:text-6xl leading-[1.2] font-bold tracking-tight ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          />
        </div>
      </div>

      <style jsx global>{`
        .highlighted-word {
          background: ${isDark ? 'linear-gradient(135deg, #A4FF4E, #00FF88, #3B82F6, #EC4899)' : 'linear-gradient(135deg, #2563EB, #4F46E5, #7C3AED, #2563EB)'} !important;
          background-size: 300% 300% !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          color: transparent !important;
          position: relative !important;
          display: inline-block !important;
          animation: ${isDark ? 'gradientShift' : 'gradientShiftLight'} 3s ease-in-out infinite !important;
          font-weight: 900 !important;
          text-shadow: 0 0 30px rgba(164, 255, 78, 0.8) !important;
          filter: brightness(1.2) contrast(1.1) !important;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradientShiftLight {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .highlighted-word::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: ${isDark ? 'linear-gradient(135deg, #A4FF4E, #00FF88, #3B82F6)' : 'linear-gradient(135deg, #2563EB, #4F46E5, #7C3AED)'};
          border-radius: 6px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
          filter: blur(2px);
        }

        .highlighted-word:hover::before {
          opacity: 0.4;
        }

        .highlighted-word::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 4px;
          background: ${isDark ? 'linear-gradient(90deg, #A4FF4E, #00FF88, #3B82F6)' : 'linear-gradient(90deg, #2563EB, #4F46E5, #7C3AED)'};
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 15px ${isDark ? 'rgba(164, 255, 78, 0.8)' : 'rgba(37, 99, 235, 0.8)'};
        }

        .highlighted-word:hover::after {
          transform: scaleX(1);
        }

        /* Custom scrollbar for the overflow container */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: ${isDark ? '#A4FF4E' : '#2563EB'};
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? '#A4FF4E80' : '#2563EB80'};
        }

        /* Enhanced glow effect for highlighted words */
        .highlighted-word {
          filter: drop-shadow(0 0 20px ${isDark ? 'rgba(164, 255, 78, 0.6)' : 'rgba(37, 99, 235, 0.6)'}) 
                  drop-shadow(0 0 40px ${isDark ? 'rgba(164, 255, 78, 0.3)' : 'rgba(37, 99, 235, 0.3)'})
                  brightness(1.2) contrast(1.1) !important;
        }

        /* Add a subtle pulse animation for highlighted words */
        .highlighted-word {
          animation: ${isDark ? 'gradientShift' : 'gradientShiftLight'} 3s ease-in-out infinite,
                     ${isDark ? 'pulseGlow' : 'pulseGlowLight'} 2s ease-in-out infinite !important;
        }

        @keyframes pulseGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(164, 255, 78, 0.6)) 
                    drop-shadow(0 0 40px rgba(164, 255, 78, 0.3))
                    brightness(1.2) contrast(1.1);
          }
          50% { 
            filter: drop-shadow(0 0 30px rgba(164, 255, 78, 0.8)) 
                    drop-shadow(0 0 60px rgba(164, 255, 78, 0.4))
                    brightness(1.4) contrast(1.2);
          }
        }

        @keyframes pulseGlowLight {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.6)) 
                    drop-shadow(0 0 40px rgba(37, 99, 235, 0.3))
                    brightness(1.2) contrast(1.1);
          }
          50% { 
            filter: drop-shadow(0 0 30px rgba(37, 99, 235, 0.8)) 
                    drop-shadow(0 0 60px rgba(37, 99, 235, 0.4))
                    brightness(1.4) contrast(1.2);
          }
        }
      `}</style>
    </motion.div>
  );
} 