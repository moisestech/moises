export type AuthorshipType = 'human' | 'hybrid' | 'ai' | 'notes' | 'authors' | 'vocabulary';

export type ChapterStatus = 'draft' | 'published';

export interface ContentBlock {
  type: AuthorshipType;
  text: string;
  metadata?: {
    timestamp?: string;
    edited?: boolean;
    originalType?: AuthorshipType;
  };
}

export interface BookChapter {
  title: string;
  slug: string;
  status: ChapterStatus;
  created: string;
  lastModified: string;
  content: ContentBlock[];
  frontmatter: Record<string, any>;
  metadata?: ChapterMetadata;
}

export interface ChapterMetadata {
  slug: string;
  title: string;
  status: ChapterStatus;
  order: number;
  description?: string;
  context?: string;
  keywords?: string[];
  topics?: string[];
  keyMoments?: string[];
  thinkers?: string[];
  artworks?: string[];
  hasSlop?: boolean;
  draftSource?: string;
  draftWordCount?: number;
  draftLines?: number;
  /** Public URL or path (e.g. Cloudinary or /images/...) for chapter cover art; portrait ~3:4 recommended */
  coverImage?: string;
  coverImageAlt?: string;
}

export interface BookMetadata {
  title: string;
  description: string;
  chapters: ChapterMetadata[];
  created: string;
  lastModified: string;
}

export type ViewMode = 'all' | 'human-only' | 'hybrid-only' | 'ai-only';

export type AIDisplayMode = 'subtle' | 'prominent';

export type AIMode = 'thinking-partner' | 'structural-editor' | 'line-surgeon';
