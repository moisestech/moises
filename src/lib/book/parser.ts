import 'server-only';

import { BookChapter, ContentBlock, AuthorshipType } from './types';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

/**
 * Simple frontmatter parser (fallback if gray-matter is not available)
 */
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    const frontmatterText = match[1];
    const body = match[2];
    const data: Record<string, any> = {};
    
    frontmatterText.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;
      
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex > 0) {
        const key = trimmed.substring(0, colonIndex).trim();
        let value = trimmed.substring(colonIndex + 1).trim();
        // Remove quotes if present
        value = value.replace(/^["']|["']$/g, '');
        data[key] = value;
      }
    });
    
    return { data, content: body };
  }
  
  return { data: {}, content };
}

const AUTHORSHIP_MARKERS = {
  human: '●',
  hybrid: '◐',
  ai: '○',
  notes: '•',
  authors: '@',
  vocabulary: '§',
} as const;

const MARKER_TO_TYPE: Record<string, AuthorshipType> = {
  '●': 'human',
  '◐': 'hybrid',
  '○': 'ai',
  '•': 'notes',
  '@': 'authors',
  '§': 'vocabulary',
};

/**
 * Parse a markdown file with frontmatter and extract authorship markers
 */
export function parseChapterMarkdown(content: string): BookChapter {
  // Use gray-matter if available, otherwise use fallback parser
  let frontmatter: Record<string, any>;
  let markdownContent: string;
  
  try {
    const result = matter(content);
    frontmatter = result.data;
    markdownContent = result.content;
  } catch (e) {
    // Fallback to simple parser
    const result = parseFrontmatter(content);
    frontmatter = result.data;
    markdownContent = result.content;
  }
  
  const blocks = parseContentBlocks(markdownContent);
  
  return {
    title: frontmatter.title || '',
    slug: frontmatter.slug || '',
    status: frontmatter.status || 'draft',
    created: frontmatter.created || new Date().toISOString(),
    lastModified: frontmatter.lastModified || new Date().toISOString(),
    content: blocks,
    frontmatter,
  };
}

/**
 * Parse content blocks from markdown, identifying authorship markers
 */
function parseContentBlocks(content: string): ContentBlock[] {
  const lines = content.split('\n');
  const blocks: ContentBlock[] = [];
  let currentBlock: { type: AuthorshipType; lines: string[] } | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Check if line starts with an authorship marker
    const marker = trimmedLine[0];
    const authorshipType = MARKER_TO_TYPE[marker];
    
    if (authorshipType) {
      // Save previous block if exists
      if (currentBlock) {
        blocks.push({
          type: currentBlock.type,
          text: currentBlock.lines.join('\n').trim(),
        });
      }
      
      // Start new block, removing the marker
      const contentWithoutMarker = trimmedLine.slice(1).trim();
      currentBlock = {
        type: authorshipType,
        lines: contentWithoutMarker ? [contentWithoutMarker] : [],
      };
    } else {
      // Continue current block or start a default human block
      if (currentBlock) {
        currentBlock.lines.push(line);
      } else {
        // If no marker, assume human-written (default)
        currentBlock = {
          type: 'human',
          lines: [line],
        };
      }
    }
  }

  // Save last block
  if (currentBlock && currentBlock.lines.length > 0) {
    blocks.push({
      type: currentBlock.type,
      text: currentBlock.lines.join('\n').trim(),
    });
  }

  // If no blocks were found, treat entire content as human
  if (blocks.length === 0) {
    blocks.push({
      type: 'human',
      text: content.trim(),
    });
  }

  return blocks;
}

/**
 * Read a chapter markdown file from the filesystem
 */
export async function readChapterFile(slug: string): Promise<BookChapter> {
  const chaptersDir = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'chapters'
  );

  // Try exact match first
  let filePath = path.join(chaptersDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    // Try to find a file that ends with the slug (handles numbered prefixes)
    const files = fs.readdirSync(chaptersDir);
    const matchingFile = files.find((file) => 
      file.endsWith(`${slug}.md`) && !file.includes('-preview')
    );
    
    if (matchingFile) {
      filePath = path.join(chaptersDir, matchingFile);
    } else {
      throw new Error(`Failed to read chapter file: ${slug}`);
    }
  }

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return parseChapterMarkdown(fileContent);
  } catch (error) {
    throw new Error(`Failed to read chapter file: ${slug}`);
  }
}

/**
 * Get all chapter slugs from the outline or metadata file
 */
export async function getAllChapterSlugs(): Promise<string[]> {
  // Try chapter-outline.json first
  const outlinePath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'chapter-outline.json'
  );

  // Fallback to metadata.json
  const metadataPath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'metadata.json'
  );

  try {
    if (fs.existsSync(outlinePath)) {
      const outlineContent = fs.readFileSync(outlinePath, 'utf-8');
      const outline = JSON.parse(outlineContent);
      return outline.chapters.map((ch: { slug: string }) => ch.slug);
    }
    
    if (fs.existsSync(metadataPath)) {
      const metadataContent = fs.readFileSync(metadataPath, 'utf-8');
      const metadata = JSON.parse(metadataContent);
      return metadata.chapters.map((ch: { slug: string }) => ch.slug);
    }
  } catch (error) {
    console.error('Error reading chapter slugs:', error);
  }
  
  return [];
}

/**
 * Read book metadata from chapter-outline.json
 */
export async function readBookMetadata() {
  // Try chapter-outline.json first (new format)
  const outlinePath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'chapter-outline.json'
  );

  // Fallback to metadata.json (old format)
  const metadataPath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'metadata.json'
  );

  try {
    // Try new format first
    if (fs.existsSync(outlinePath)) {
      const outlineContent = fs.readFileSync(outlinePath, 'utf-8');
      const outline = JSON.parse(outlineContent);
      
      // Transform to BookMetadata format
      return {
        title: outline.title || 'Born into the Machine',
        description: outline.subtitle || '',
        chapters: outline.chapters.map((ch: any) => ({
          slug: ch.slug,
          title: ch.title,
          status: ch.status || 'draft',
          order: ch.order,
          description: ch.context,
          context: ch.context,
          keywords: ch.keywords || [],
          topics: ch.topics || [],
          keyMoments: ch.keyMoments || [],
          thinkers: ch.thinkers || [],
          artworks: ch.artworks || [],
          hasSlop: ch.hasSlop || false,
          draftSource: ch.draftSource,
          draftWordCount: ch.draftWordCount,
          draftLines: ch.draftLines,
        })),
        created: outline.created || new Date().toISOString(),
        lastModified: outline.lastModified || new Date().toISOString(),
      };
    }
    
    // Fallback to old format
    if (fs.existsSync(metadataPath)) {
      const metadataContent = fs.readFileSync(metadataPath, 'utf-8');
      return JSON.parse(metadataContent);
    }
  } catch (error) {
    console.error('Error reading metadata:', error);
  }

  return {
    title: 'Born into the Machine',
    description: '',
    chapters: [],
    created: new Date().toISOString(),
    lastModified: new Date().toISOString(),
  };
}
