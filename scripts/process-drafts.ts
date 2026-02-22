/**
 * Script to automatically process all draft files
 * Run with: npx tsx scripts/process-drafts.ts
 */

import { analyzeDraftFile } from '../src/lib/book/draft-analyzer';
import { autoExtractDraft } from '../src/lib/book/auto-extractor';
import fs from 'fs';
import path from 'path';

const DRAFTS_DIR = path.join(process.cwd(), 'content', 'born-into-the-machine', 'drafts');

const FILES_TO_PROCESS = [
  'open-ended-01a.md',
  'open-ended-01b.md',
  'open-ended-02a.md',
  'open-ended-02b.md',
];

interface ProcessingResult {
  filename: string;
  success: boolean;
  analysis?: any;
  extraction?: any;
  error?: string;
}

async function processFile(filename: string): Promise<ProcessingResult> {
  console.log(`\n📄 Processing ${filename}...`);
  
  const result: ProcessingResult = {
    filename,
    success: false,
  };

  try {
    // Step 1: Analyze the file
    console.log(`  ⏳ Analyzing content...`);
    const analysis = await analyzeDraftFile(filename);
    result.analysis = {
      totalBlocks: analysis.metadata.totalBlocks,
      totalLines: analysis.metadata.totalLines,
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
    };
    console.log(`  ✅ Analysis complete:`);
    console.log(`     - ${result.analysis.totalBlocks} content blocks`);
    console.log(`     - ${result.analysis.speakers.human} human, ${result.analysis.speakers.ai} AI, ${result.analysis.speakers.unknown} unknown`);
    console.log(`     - ${result.analysis.themes} themes detected`);
    console.log(`     - ${result.analysis.vocabulary} vocabulary items, ${result.analysis.writers} writers, ${result.analysis.books} books, ${result.analysis.artworks} artworks`);

    // Step 2: Extract entities
    console.log(`  ⏳ Extracting entities...`);
    await autoExtractDraft(filename);
    result.extraction = { success: true };
    console.log(`  ✅ Entities extracted to content/born-into-the-machine/extracted/`);

    result.success = true;
  } catch (error: any) {
    console.error(`  ❌ Error processing ${filename}:`, error.message);
    result.error = error.message;
  }

  return result;
}

async function main() {
  console.log('🚀 Starting batch processing of draft files...\n');
  console.log(`📁 Drafts directory: ${DRAFTS_DIR}\n`);

  const results: ProcessingResult[] = [];

  for (const filename of FILES_TO_PROCESS) {
    const filePath = path.join(DRAFTS_DIR, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filename}, skipping...`);
      results.push({
        filename,
        success: false,
        error: 'File not found',
      });
      continue;
    }

    const result = await processFile(filename);
    results.push(result);
    
    // Small delay between files to avoid overwhelming the system
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 PROCESSING SUMMARY');
  console.log('='.repeat(60));

  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`\n✅ Successfully processed: ${successful}/${results.length} files`);
  console.log(`❌ Failed: ${failed}/${results.length} files\n`);

  if (successful > 0) {
    console.log('📈 Statistics:');
    results.forEach(result => {
      if (result.success && result.analysis) {
        console.log(`\n  ${result.filename}:`);
        console.log(`    Blocks: ${result.analysis.totalBlocks}`);
        console.log(`    Themes: ${result.analysis.themes}`);
        console.log(`    Entities: ${result.analysis.vocabulary + result.analysis.writers + result.analysis.books + result.analysis.artworks}`);
      } else if (!result.success) {
        console.log(`\n  ${result.filename}: ❌ ${result.error}`);
      }
    });
  }

  if (failed > 0) {
    console.log('\n⚠️  Failed files:');
    results.forEach(result => {
      if (!result.success) {
        console.log(`  - ${result.filename}: ${result.error}`);
      }
    });
  }

  console.log('\n✨ Processing complete!');
  console.log('\nNext steps:');
  console.log('1. Review extracted entities in content/born-into-the-machine/extracted/');
  console.log('2. Visit /research/born-into-the-machine/drafts/ to view processed files');
  console.log('3. Use the Read/Categorize/Organize/Entities views to continue organizing');
}

main().catch(console.error);
