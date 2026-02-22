#!/usr/bin/env node
/**
 * Comprehensive audit of drafts, chapters, and extracted content
 * Run with: node scripts/audit-all.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const CHAPTERS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapters');
const EXTRACTED_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'extracted');
const OUTLINE_PATH = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapter-outline.json');

function getFileStats(filePath) {
  const stats = fs.statSync(filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Count authorship markers
  const human = (content.match(/●/g) || []).length;
  const ai = (content.match(/○/g) || []).length;
  const hybrid = (content.match(/◐/g) || []).length;
  
  // Check for frontmatter
  const hasFrontmatter = content.startsWith('---');
  let frontmatter = {};
  if (hasFrontmatter) {
    const endIndex = content.indexOf('---', 3);
    if (endIndex > 0) {
      const fmContent = content.substring(3, endIndex);
      fmContent.split('\n').forEach(line => {
        const match = line.match(/^(\w+):\s*(.+)$/);
        if (match) {
          frontmatter[match[1]] = match[2].replace(/^["']|["']$/g, '');
        }
      });
    }
  }
  
  return {
    size: stats.size,
    lines: lines.length,
    human,
    ai,
    hybrid,
    hasFrontmatter,
    frontmatter,
    wordCount: content.split(/\s+/).length,
  };
}

function analyzeDraftFile(filename) {
  const filePath = path.join(DRAFTS_DIR, filename);
  const stats = getFileStats(filePath);
  
  // Determine type
  let type = 'draft';
  if (filename.includes('chapter-')) {
    type = 'chapter-draft';
  } else if (filename.includes('open-ended')) {
    type = 'conversation';
  } else if (filename.includes('migration')) {
    type = 'migration';
  }
  
  // Check if processed
  const mappingPath = path.join(DRAFTS_DIR, `.${filename}.chapter-mapping.json`);
  const statePath = path.join(DRAFTS_DIR, `.${filename}.state.json`);
  const isMapped = fs.existsSync(mappingPath);
  const hasState = fs.existsSync(statePath);
  
  return {
    filename,
    type,
    ...stats,
    isMapped,
    hasState,
    mappingPath: isMapped ? mappingPath : null,
  };
}

function analyzeChapterFile(filename) {
  const filePath = path.join(CHAPTERS_DIR, filename);
  const stats = getFileStats(filePath);
  
  // Extract chapter number and slug
  const match = filename.match(/^(\d+)-(.+)\.md$/);
  const order = match ? parseInt(match[1]) : null;
  const slug = match ? match[2] : filename.replace('.md', '');
  
  return {
    filename,
    order,
    slug,
    ...stats,
  };
}

function analyzeExtractedFile(filename) {
  const filePath = path.join(EXTRACTED_DIR, filename);
  const stats = getFileStats(filePath);
  
  // Count items (## headings)
  const content = fs.readFileSync(filePath, 'utf-8');
  const items = (content.match(/^## /gm) || []).length;
  
  // Determine type
  let type = 'unknown';
  if (filename.includes('vocabulary')) type = 'vocabulary';
  else if (filename.includes('writers')) type = 'writers';
  else if (filename.includes('books')) type = 'books';
  else if (filename.includes('artworks')) type = 'artworks';
  
  // Extract source file
  const sourceMatch = filename.match(/(.+)-(vocabulary|writers|books|artworks)\.md$/);
  const source = sourceMatch ? sourceMatch[1] : 'unknown';
  
  return {
    filename,
    type,
    source,
    items,
    ...stats,
  };
}

function audit() {
  console.log('\n' + '='.repeat(70));
  console.log('📊 COMPREHENSIVE AUDIT: Born into the Machine');
  console.log('='.repeat(70));
  console.log(`\nGenerated: ${new Date().toISOString()}\n`);

  // 1. DRAFTS AUDIT
  console.log('='.repeat(70));
  console.log('📁 DRAFTS FOLDER');
  console.log('='.repeat(70));
  
  const draftFiles = fs.readdirSync(DRAFTS_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.') && !f.includes('INDEX') && !f.includes('README') && !f.includes('PROCESSING') && !f.includes('SPLIT'))
    .sort();
  
  const drafts = draftFiles.map(analyzeDraftFile);
  
  console.log(`\nTotal draft files: ${drafts.length}\n`);
  
  // Group by type
  const byType = {};
  drafts.forEach(draft => {
    if (!byType[draft.type]) {
      byType[draft.type] = [];
    }
    byType[draft.type].push(draft);
  });
  
  for (const [type, files] of Object.entries(byType)) {
    console.log(`\n${type.toUpperCase().replace(/-/g, ' ')} (${files.length} files):`);
    console.log('─'.repeat(70));
    
    files.forEach(draft => {
      const kb = (draft.size / 1024).toFixed(1);
      const status = [];
      if (draft.isMapped) status.push('📌 mapped');
      if (draft.hasState) status.push('💾 state');
      if (draft.human > 0) status.push(`●${draft.human}`);
      if (draft.ai > 0) status.push(`○${draft.ai}`);
      if (draft.hybrid > 0) status.push(`◐${draft.hybrid}`);
      
      console.log(`  ${draft.filename.padEnd(45)} ${kb.padStart(6)} KB  ${draft.lines.toString().padStart(5)} lines  ${status.join(' ')}`);
    });
  }
  
  // Chapter drafts analysis
  const chapterDrafts = drafts.filter(d => d.type === 'chapter-draft');
  if (chapterDrafts.length > 0) {
    console.log('\n📝 CHAPTER DRAFTS ANALYSIS:');
    console.log('─'.repeat(70));
    chapterDrafts.forEach(draft => {
      const aiRatio = draft.wordCount > 0 ? ((draft.ai / (draft.human + draft.ai + draft.hybrid)) * 100).toFixed(0) : 0;
      console.log(`  ${draft.filename}:`);
      console.log(`    ${draft.wordCount} words, ${draft.lines} lines`);
      console.log(`    Authorship: ●${draft.human} human, ○${draft.ai} AI, ◐${draft.hybrid} hybrid`);
      console.log(`    AI content ratio: ${aiRatio}% (likely "slop" as you mentioned)`);
      console.log(`    Status: ${draft.isMapped ? 'Mapped to chapters' : 'Not yet mapped'}`);
    });
  }

  // 2. CHAPTERS AUDIT
  console.log('\n\n' + '='.repeat(70));
  console.log('📚 CHAPTERS FOLDER');
  console.log('='.repeat(70));
  
  let chapters = [];
  if (fs.existsSync(CHAPTERS_DIR)) {
    const chapterFiles = fs.readdirSync(CHAPTERS_DIR)
      .filter(f => f.endsWith('.md'))
      .sort();
    
    chapters = chapterFiles.map(analyzeChapterFile);
  }
  
  console.log(`\nTotal chapter files: ${chapters.length}\n`);
  
  if (chapters.length > 0) {
    chapters.forEach(chapter => {
      const kb = (chapter.size / 1024).toFixed(1);
      console.log(`  ${String(chapter.order || '?').padStart(2)}. ${chapter.filename.padEnd(50)} ${kb.padStart(6)} KB  ${chapter.lines.toString().padStart(5)} lines`);
      if (chapter.frontmatter.status) {
        console.log(`      Status: ${chapter.frontmatter.status}`);
      }
    });
  } else {
    console.log('  (No chapters built yet)');
  }
  
  // Check against outline
  let outline = null;
  if (fs.existsSync(OUTLINE_PATH)) {
    outline = JSON.parse(fs.readFileSync(OUTLINE_PATH, 'utf-8'));
    console.log(`\n📋 Chapter Outline: ${outline.chapters.length} chapters defined`);
    
    const builtSlugs = new Set(chapters.map(c => c.slug));
    const outlineSlugs = outline.chapters.map(c => c.slug);
    
    console.log('\n  Status by chapter:');
    outline.chapters.forEach(chapter => {
      const isBuilt = builtSlugs.has(chapter.slug);
      const icon = isBuilt ? '✓' : '○';
      console.log(`    ${icon} ${chapter.order}. ${chapter.title}`);
    });
  }

  // 3. EXTRACTED AUDIT
  console.log('\n\n' + '='.repeat(70));
  console.log('📦 EXTRACTED ENTITIES');
  console.log('='.repeat(70));
  
  let extracted = [];
  if (fs.existsSync(EXTRACTED_DIR)) {
    const extractedFiles = fs.readdirSync(EXTRACTED_DIR)
      .filter(f => f.endsWith('.md'))
      .sort();
    
    extracted = extractedFiles.map(analyzeExtractedFile);
  }
  
  console.log(`\nTotal extracted files: ${extracted.length}\n`);
  
  // Group by type
  const extractedByType = {};
  extracted.forEach(ext => {
    if (!extractedByType[ext.type]) {
      extractedByType[ext.type] = [];
    }
    extractedByType[ext.type].push(ext);
  });
  
  for (const [type, files] of Object.entries(extractedByType)) {
    const totalItems = files.reduce((sum, f) => sum + f.items, 0);
    console.log(`\n${type.toUpperCase()} (${files.length} files, ${totalItems} items):`);
    console.log('─'.repeat(70));
    
    files.forEach(ext => {
      console.log(`  ${ext.filename.padEnd(50)} ${ext.items.toString().padStart(4)} items`);
    });
  }
  
  // Summary by source
  const bySource = {};
  extracted.forEach(ext => {
    if (!bySource[ext.source]) {
      bySource[ext.source] = { vocabulary: 0, writers: 0, books: 0, artworks: 0 };
    }
    bySource[ext.source][ext.type] = ext.items;
  });
  
  if (Object.keys(bySource).length > 0) {
    console.log('\n📊 Entities by source file:');
    console.log('─'.repeat(70));
    for (const [source, counts] of Object.entries(bySource)) {
      const total = counts.vocabulary + counts.writers + counts.books + counts.artworks;
      console.log(`  ${source}:`);
      console.log(`    Vocabulary: ${counts.vocabulary}, Writers: ${counts.writers}, Books: ${counts.books}, Artworks: ${counts.artworks}`);
      console.log(`    Total: ${total} entities`);
    }
  }

  // 4. MAPPING STATUS
  console.log('\n\n' + '='.repeat(70));
  console.log('🗺️  CHAPTER MAPPING STATUS');
  console.log('='.repeat(70));
  
  const mappedFiles = drafts.filter(d => d.isMapped);
  const unmappedFiles = drafts.filter(d => !d.isMapped && d.type !== 'chapter-draft');
  
  console.log(`\nMapped to chapters: ${mappedFiles.length} files`);
  mappedFiles.forEach(draft => {
    console.log(`  ✓ ${draft.filename}`);
  });
  
  if (unmappedFiles.length > 0) {
    console.log(`\nNot yet mapped: ${unmappedFiles.length} files`);
    unmappedFiles.forEach(draft => {
      console.log(`  ○ ${draft.filename}`);
    });
  }

  // 5. RECOMMENDATIONS
  console.log('\n\n' + '='.repeat(70));
  console.log('💡 RECOMMENDATIONS');
  console.log('='.repeat(70));
  
  const recommendations = [];
  
  // Chapter drafts
  if (chapterDrafts.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      action: 'Process chapter drafts',
      details: `You have ${chapterDrafts.length} chapter draft files (chapter-1, chapter-2, chapter-3). These are marked as "slop" but can be starting points.`,
      steps: [
        'Review each chapter draft to identify useful content',
        'Extract key ideas, quotes, and structure',
        'Map content to the 10-chapter outline',
        'Use as foundation but rewrite/refine',
      ],
    });
  }
  
  // Unmapped files
  if (unmappedFiles.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      action: 'Map unmapped draft files',
      details: `${unmappedFiles.length} files haven't been mapped to chapters yet.`,
      steps: [
        `Run: node scripts/map-to-chapters.mjs ${unmappedFiles[0].filename}`,
        'Review mappings and refine',
        'Build chapters from mapped content',
      ],
    });
  }
  
  // Missing chapters
  if (outline && chapters.length < outline.chapters.length) {
    const missing = outline.chapters.filter(c => !chapters.some(ch => ch.slug === c.slug));
    recommendations.push({
      priority: 'MEDIUM',
      action: 'Build missing chapters',
      details: `${missing.length} chapters from outline haven't been built yet.`,
      steps: [
        'Map remaining draft files to chapters',
        'Run: node scripts/chapter-builder.mjs',
        'Use "build-all" command to create all chapters',
      ],
    });
  }
  
  // Extracted entities
  const totalEntities = extracted.reduce((sum, ext) => sum + ext.items, 0);
  if (totalEntities > 0) {
    recommendations.push({
      priority: 'LOW',
      action: 'Review and refine extracted entities',
      details: `${totalEntities} entities extracted. Review for accuracy and completeness.`,
      steps: [
        'Check extracted/vocabulary-*.md files',
        'Review writers, books, artworks',
        'Merge duplicates across files',
        'Use in chapter development',
      ],
    });
  }
  
  recommendations.forEach((rec, i) => {
    console.log(`\n${i + 1}. [${rec.priority}] ${rec.action}`);
    console.log(`   ${rec.details}`);
    console.log(`   Steps:`);
    rec.steps.forEach(step => {
      console.log(`     • ${step}`);
    });
  });

  // 6. NEXT STEPS
  console.log('\n\n' + '='.repeat(70));
  console.log('🚀 SUGGESTED NEXT STEPS');
  console.log('='.repeat(70));
  
  console.log('\n1. Process Chapter Drafts (High Priority):');
  console.log('   • Review chapter-1, chapter-2, chapter-3 drafts');
  console.log('   • Extract useful content (ideas, structure, quotes)');
  console.log('   • Map to 10-chapter outline');
  console.log('   • Use as foundation but rewrite with your voice');
  
  console.log('\n2. Map Remaining Drafts:');
  if (unmappedFiles.length > 0) {
    unmappedFiles.slice(0, 3).forEach(file => {
      console.log(`   • node scripts/map-to-chapters.mjs ${file.filename}`);
    });
  } else {
    console.log('   • All main drafts are mapped!');
  }
  
  console.log('\n3. Build Chapters:');
  console.log('   • node scripts/chapter-builder.mjs');
  console.log('   • Review each chapter');
  console.log('   • Refine and develop further');
  
  console.log('\n4. Continue Writing:');
  console.log('   • Use web UI at /research/born-into-the-machine/[slug]/edit');
  console.log('   • Use AI assistant for development');
  console.log('   • Maintain authorship transparency (●/○/◐)');
  
  console.log('\n' + '='.repeat(70));
  console.log('✨ Audit complete!\n');
}

audit();
