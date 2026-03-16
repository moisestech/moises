import React from 'react';
import { WikiLink } from './WikiLink';
import { CitationTooltip } from './CitationTooltip';
import { wikiGlossary } from '@/constants/wiki-glossary';

interface ProcessedTextProps {
  text: string;
  citations?: Record<number, string>;
}

/**
 * Processes text to wrap glossary terms in WikiLink components
 * and replace citation markers with CitationTooltip components
 */
export function processWikiText(text: string, citations?: Record<number, string>): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  // Create a regex pattern from all glossary terms, sorted by length (longest first)
  // to match longer terms before shorter ones (e.g., "School for Poetic Computation" before "School")
  const terms = Object.keys(wikiGlossary).sort((a, b) => b.length - a.length);
  const termPattern = terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  
  // Pattern for citations like [1], [2], etc.
  const citationPattern = /\[(\d+)\]/g;
  
  // Combine patterns: match either terms or citations
  const combinedPattern = new RegExp(`(${termPattern})|${citationPattern.source}`, 'gi');
  
  let match;
  let key = 0;
  
  while ((match = combinedPattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Check if it's a citation
    if (match[2]) {
      // It's a citation [1], [2], etc.
      const citationNum = parseInt(match[2], 10);
      if (citations && citations[citationNum]) {
        parts.push(
          <CitationTooltip
            key={`citation-${key++}`}
            number={citationNum}
            text={citations[citationNum]}
          />
        );
      } else {
        // No citation data, just render the text
        parts.push(match[0]);
      }
    } else if (match[1]) {
      // It's a glossary term
      const matchedTerm = match[1];
      // Find the exact term (case-insensitive match)
      const exactTerm = terms.find(
        term => term.toLowerCase() === matchedTerm.toLowerCase()
      );
      
      if (exactTerm) {
        parts.push(
          <WikiLink key={`wiki-${key++}`} term={exactTerm}>
            {matchedTerm}
          </WikiLink>
        );
      } else {
        parts.push(matchedTerm);
      }
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : [text];
}
