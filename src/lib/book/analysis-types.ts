export type Speaker = 'human' | 'ai' | 'unknown';
export type ContentType = 'question' | 'answer' | 'concept' | 'example' | 'quote' | 'definition' | 'other';
export type ProcessedStatus = 'unprocessed' | 'read' | 'tagged' | 'processed';

export interface ContentBlock {
  id: string;
  text: string;
  speaker: Speaker;
  type: ContentType;
  lineStart: number;
  lineEnd: number;
  themes: string[];
  processed: ProcessedStatus;
  metadata?: {
    originalFormat?: string; // "Question", "GPT", "Answer from me", etc.
    context?: string;
  };
}

export interface VocabularyItem {
  term: string;
  definition?: string;
  context: string;
  lineNumber: number;
  themes: string[];
  relatedTerms?: string[];
}

export interface WriterReference {
  name: string;
  mentions: {
    context: string;
    lineNumber: number;
    themes: string[];
  }[];
  works?: string[]; // Books/articles mentioned
}

export interface BookReference {
  title: string;
  author?: string;
  context: string;
  lineNumber: number;
  themes: string[];
  mentionedBy?: string; // Writer who mentioned it
}

export interface ArtworkReference {
  title: string;
  type: 'installation' | 'concept' | 'existing' | 'proposed';
  description: string;
  context: string;
  lineNumber: number;
  themes: string[];
  linkToExisting?: string; // Slug of existing artwork
  materials?: string[];
  concepts?: string[];
}

export interface ThemeSection {
  id: string;
  name: string;
  description?: string;
  contentBlocks: string[]; // IDs of content blocks
  keywords: string[];
  potentialChapterTitle?: string;
}

export interface Quote {
  text: string;
  speaker: Speaker;
  context: string;
  lineNumber: number;
  themes: string[];
  quotable: boolean;
}

export interface DraftAnalysis {
  metadata: {
    filename: string;
    totalLines: number;
    totalBlocks: number;
    estimatedProgress: number; // percentage processed
    lastAnalyzed: Date;
  };
  speakers: {
    human: ContentBlock[];
    ai: ContentBlock[];
    unknown: ContentBlock[];
  };
  extracted: {
    vocabulary: VocabularyItem[];
    writers: WriterReference[];
    books: BookReference[];
    artworks: ArtworkReference[];
  };
  themes: ThemeSection[];
  quotes: Quote[];
  contentBlocks: ContentBlock[];
}

export interface ProgressState {
  filename: string;
  processedBlocks: Set<string>; // IDs of processed blocks
  currentPosition: number; // Line number
  lastUpdated: Date;
}
