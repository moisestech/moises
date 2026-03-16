'use client';

import { LexiconTerm } from './LexiconTerm';

type LexiconEntry = { term: string; definition: string };

interface TextWithLexiconProps {
  text: string;
  lexicon: Record<string, string>;
  className?: string;
}

// Match terms in order of length (longest first) to avoid partial matches
function getSortedTerms(lexicon: Record<string, string>): LexiconEntry[] {
  return Object.entries(lexicon)
    .map(([term, definition]) => ({ term, definition }))
    .sort((a, b) => b.term.length - a.term.length);
}

export function TextWithLexicon({ text, lexicon, className = '' }: TextWithLexiconProps) {
  const sortedTerms = getSortedTerms(lexicon);

  if (sortedTerms.length === 0) {
    return <span className={className}>{text}</span>;
  }

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliestMatch: { term: string; definition: string; index: number } | null = null;

    for (const { term, definition } of sortedTerms) {
      const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
      const match = remaining.match(regex);
      if (match) {
        const index = remaining.toLowerCase().indexOf(match[0].toLowerCase());
        if (earliestMatch === null || index < earliestMatch.index) {
          earliestMatch = { term: match[0], definition, index };
        }
      }
    }

    if (earliestMatch === null) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    const before = remaining.slice(0, earliestMatch.index);
    const matched = remaining.slice(earliestMatch.index, earliestMatch.index + earliestMatch.term.length);
    const after = remaining.slice(earliestMatch.index + earliestMatch.term.length);

    if (before) parts.push(<span key={key++}>{before}</span>);
    parts.push(
      <LexiconTerm key={key++} term={earliestMatch.term} definition={earliestMatch.definition}>
        {matched}
      </LexiconTerm>
    );
    remaining = after;
  }

  return <span className={className}>{parts}</span>;
}
