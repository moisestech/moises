/**
 * Script to automatically process all draft files
 * Run with: node scripts/process-drafts.mjs
 */

import { analyzeDraftFile } from '../src/lib/book/draft-analyzer.js';
import { autoExtractDraft } from '../src/lib/book/auto-extractor.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');

const FILES_TO_PROCESS = [
  'open-ended-01a.md',
  'open-ended-01b.md',
  'open-ended-02a.md',
  'open-ended-02b.md',
];

async function processFile(filename) {
  console.log(`\n📄 Processing ${filename}...`);
  
  try {
    // Step 1: Analyze the file
    console.log(`  ⏳ Analyzing content...`);
    const analysis = await analyzeDraftFile(filename);
    
    console.log(`  ✅ Analysis complete:`);
    console.log(`     - ${analysis.metadata.totalBlocks} content blocks`);
    console.log(`     - ${analysis.speakers.human.length} human, ${analysis.speakers.ai.length} AI, ${analysis.speakers.unknown.length} unknown`);
    console.log(`     - ${analysis.themes.length} themes detected`);
    console.log(`     - ${analysis.extracted.vocabulary.length} vocabulary, ${analysis.extracted.writers.length} writers, ${analysis.extracted.books.length} books, ${analysis.extracted.artworks.length} artworks`);

    // Step 2: Extract entities
    console.log(`  ⏳ Extracting entities...`);
    await autoExtractDraft(filename);
    console.log(`  ✅ Entities extracted`);

    return {
      success: true,
      analysis: {
        blocks: analysis.metadata.totalBlocks,
        themes: analysis.themes.length,
        entities: analysis.extracted.vocabulary.length + analysis.extracted.writers.length + 
                 analysis.extracted.books.length + analysis.extracted.artworks.length,
      }
    };
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🚀 Starting batch processing of draft files...\n');
  console.log(`📁 Drafts directory: ${DRAFTS_DIR}\n`);

  const results = [];

  for (const filename of FILES_TO_PROCESS) {
    const filePath = path.join(DRAFTS_DIR, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filename}, skipping...`);
      results.push({ filename, success: false, error: 'File not found' });
      continue;
    }

    const result = await processFile(filename);
    results.push({ filename, ...result });
    
    // Small delay between files
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
      if (result.success) {
        console.log(`\n  ${result.filename}:`);
        console.log(`    Blocks: ${result.analysis.blocks}`);
        console.log(`    Themes: ${result.analysis.themes}`);
        console.log(`    Entities: ${result.analysis.entities}`);
      } else {
        console.log(`\n  ${result.filename}: ❌ ${result.error}`);
      }
    });
  }

  console.log('\n✨ Processing complete!');
}

main().catch(console.error);
