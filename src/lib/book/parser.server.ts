import 'server-only';

import path from 'path';
import { promises as fs } from 'fs';

import { parseChapterMarkdown } from './parser-core';
import type { BookChapter } from './types';

/**
 * Read a chapter markdown file from the filesystem.
 */
export async function readChapterFile(slug: string): Promise<BookChapter> {
  const chaptersDir = path.join(process.cwd(), 'content', 'born-into-the-machine', 'chapters');

  // Try exact match first
  let filePath = path.join(chaptersDir, `${slug}.md`);

  const exists = await fileExists(filePath);
  if (!exists) {
    // Try to find a file that ends with the slug (handles numbered prefixes)
    const files = await fs.readdir(chaptersDir);
    const matchingFile = files.find((file) => file.endsWith(`${slug}.md`) && !file.includes('-preview'));

    if (matchingFile) {
      filePath = path.join(chaptersDir, matchingFile);
    } else {
      throw new Error(`Failed to read chapter file: ${slug}`);
    }
  }

  const fileContent = await fs.readFile(filePath, 'utf-8');
  return parseChapterMarkdown(fileContent);
}

/**
 * Get all chapter slugs from the outline or metadata file.
 */
export async function getAllChapterSlugs(): Promise<string[]> {
  // Try chapter-outline.json first
  const outlinePath = path.join(process.cwd(), 'content', 'born-into-the-machine', 'chapter-outline.json');
  // Fallback to metadata.json
  const metadataPath = path.join(process.cwd(), 'content', 'born-into-the-machine', 'metadata.json');

  try {
    if (await fileExists(outlinePath)) {
      const outlineContent = await fs.readFile(outlinePath, 'utf-8');
      const outline = JSON.parse(outlineContent);
      return (outline.chapters ?? []).map((ch: { slug: string }) => ch.slug);
    }

    if (await fileExists(metadataPath)) {
      const metadataContent = await fs.readFile(metadataPath, 'utf-8');
      const metadata = JSON.parse(metadataContent);
      return (metadata.chapters ?? []).map((ch: { slug: string }) => ch.slug);
    }
  } catch {
    // Swallow and fall back to empty
  }

  return [];
}

/**
 * Read book metadata from chapter-outline.json or metadata.json.
 */
export async function readBookMetadata() {
  const outlinePath = path.join(process.cwd(), 'content', 'born-into-the-machine', 'chapter-outline.json');
  const metadataPath = path.join(process.cwd(), 'content', 'born-into-the-machine', 'metadata.json');

  try {
    if (await fileExists(outlinePath)) {
      const outlineContent = await fs.readFile(outlinePath, 'utf-8');
      const outline = JSON.parse(outlineContent);

      return {
        title: outline.title || 'Born into the Machine',
        description: outline.subtitle || '',
        chapters: (outline.chapters ?? []).map((ch: any) => ({
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

    if (await fileExists(metadataPath)) {
      const metadataContent = await fs.readFile(metadataPath, 'utf-8');
      return JSON.parse(metadataContent);
    }
  } catch {
    // Swallow and fall back to defaults
  }

  return {
    title: 'Born into the Machine',
    description: '',
    chapters: [],
    created: new Date().toISOString(),
    lastModified: new Date().toISOString(),
  };
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}
