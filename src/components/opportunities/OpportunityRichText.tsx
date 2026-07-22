import { Fragment, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type OpportunityRichTextProps = {
  text: string;
  className?: string;
};

/**
 * Lightweight `**bold**` / `*italic*` renderer for résumé-style opportunity copy.
 * Does not support nested marks or links — keep source strings simple.
 */
export function OpportunityRichText({ text, className }: OpportunityRichTextProps) {
  return <span className={cn(className)}>{parseRichText(text)}</span>;
}

function parseRichText(input: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Match **bold** or *italic* (non-greedy); process left-to-right.
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(input)) !== null) {
    if (match.index > last) {
      nodes.push(
        <Fragment key={`t-${key++}`}>{input.slice(last, match.index)}</Fragment>,
      );
    }
    if (match[1] != null) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-semibold text-stone-900 dark:text-stone-100">
          {match[1]}
        </strong>,
      );
    } else if (match[2] != null) {
      nodes.push(
        <em key={`i-${key++}`} className="italic text-stone-700 dark:text-stone-300">
          {match[2]}
        </em>,
      );
    }
    last = match.index + match[0].length;
  }

  if (last < input.length) {
    nodes.push(<Fragment key={`t-${key++}`}>{input.slice(last)}</Fragment>);
  }

  return nodes;
}
