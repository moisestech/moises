'use client';

import { DraftAnalysis } from '@/lib/book/analysis-types';
import { DraftReadingView } from './DraftReadingView';

interface DraftReadingViewClientProps {
  analysis: DraftAnalysis;
  filename: string;
}

export function DraftReadingViewClient({ analysis, filename }: DraftReadingViewClientProps) {
  return (
    <DraftReadingView
      draft={analysis}
      filename={filename}
      onProgressUpdate={(progress) => {
        // Could update a global progress state here if needed
        console.log('Progress updated:', progress);
      }}
    />
  );
}
