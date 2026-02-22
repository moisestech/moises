import { NextResponse } from 'next/server';
import { analyzeDraftFile } from '@/lib/book/draft-analyzer';
import { autoExtractDraft } from '@/lib/book/auto-extractor';
import fs from 'fs';
import path from 'path';

const FILES_TO_PROCESS = [
  'open-ended-01a.md',
  'open-ended-01b.md',
  'open-ended-02a.md',
  'open-ended-02b.md',
];

export async function POST() {
  const results = [];
  const errors = [];

  for (const filename of FILES_TO_PROCESS) {
    try {
      // Check if file exists
      const filePath = path.join(
        process.cwd(),
        'content',
        'born-into-the-machine',
        'drafts',
        filename
      );

      if (!fs.existsSync(filePath)) {
        errors.push({ filename, error: 'File not found' });
        continue;
      }

      // Analyze
      const analysis = await analyzeDraftFile(filename);
      
      // Extract entities
      await autoExtractDraft(filename);

      results.push({
        filename,
        success: true,
        stats: {
          blocks: analysis.metadata.totalBlocks,
          lines: analysis.metadata.totalLines,
          speakers: {
            human: analysis.speakers.human.length,
            ai: analysis.speakers.ai.length,
            unknown: analysis.speakers.unknown.length,
          },
          themes: analysis.themes.length,
          vocabulary: analysis.extracted.vocabulary.length,
          writers: analysis.extracted.writers.length,
          books: analysis.extracted.books.length,
          artworks: analysis.extracted.artworks.length,
        },
      });
    } catch (error: any) {
      errors.push({
        filename,
        error: error.message || 'Unknown error',
      });
    }
  }

  return NextResponse.json({
    success: true,
    processed: results.length,
    failed: errors.length,
    results,
    errors,
  });
}
