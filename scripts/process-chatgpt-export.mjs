#!/usr/bin/env node
/**
 * Process a ChatGPT conversation export
 * 
 * Usage: node scripts/process-chatgpt-export.mjs [filename]
 * 
 * This script:
 * 1. Parses the ChatGPT export file
 * 2. Maps content to chapters
 * 3. Extracts entities (vocabulary, authors, artworks)
 * 4. Generates a summary report
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const CHAPTER_OUTLINE = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapter-outline.json');

// Import the mapping function from map-to-chapters.mjs
// For now, we'll use a simplified version inline

function parseChatGPTExport(content) {
  const lines = content.split('\n');
  const blocks = [];
  let currentBlock = null;

  // Authorship markers
  const MARKERS = {
    '●': 'human',
    '○': 'ai',
    '◐': 'hybrid',
    '•': 'notes',
    '@': 'authors',
    '§': 'vocabulary',
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const firstChar = trimmed[0];

    if (MARKERS[firstChar]) {
      // Save previous block
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      // Start new block
      currentBlock = {
        type: MARKERS[firstChar],
        text: trimmed.slice(1).trim(),
        lineNumber: i + 1,
      };
    } else if (currentBlock) {
      // Continue current block
      if (trimmed) {
        currentBlock.text += '\n' + line;
      }
    } else if (trimmed && !trimmed.match(/^#+\s/)) {
      // Start default human block if no marker
      currentBlock = {
        type: 'human',
        text: line,
        lineNumber: i + 1,
      };
    }
  }

  // Save last block
  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return blocks;
}

function scoreBlockForChapter(block, chapter) {
  let score = 0;
  const text = block.text.toLowerCase();

  // Check keywords
  if (chapter.keywords) {
    chapter.keywords.forEach(keyword => {
      if (text.includes(keyword.toLowerCase())) {
        score += 3;
      }
    });
  }

  // Check thinkers
  if (chapter.thinkers) {
    chapter.thinkers.forEach(thinker => {
      if (text.includes(thinker.toLowerCase())) {
        score += 5;
      }
    });
  }

  // Check artworks
  if (chapter.artworks) {
    chapter.artworks.forEach(artwork => {
      if (text.includes(artwork.toLowerCase())) {
        score += 4;
      }
    });
  }

  // Check context words
  if (chapter.context) {
    const contextWords = chapter.context.toLowerCase().split(/\s+/);
    contextWords.forEach(word => {
      if (word.length > 4 && text.includes(word)) {
        score += 1;
      }
    });
  }

  return score;
}

function mapBlocksToChapters(blocks, chapters) {
  const mapping = {};

  blocks.forEach((block, index) => {
    const scores = chapters.map(chapter => ({
      chapter,
      score: scoreBlockForChapter(block, chapter),
    }));

    scores.sort((a, b) => b.score - a.score);
    
    const bestMatch = scores[0];
    const secondBest = scores[1];

    if (bestMatch.score > 0) {
      if (bestMatch.score >= (secondBest?.score || 0) * 1.5) {
        mapping[index] = {
          chapter: bestMatch.chapter,
          confidence: 'high',
          score: bestMatch.score,
        };
      } else if (bestMatch.score > 0) {
        mapping[index] = {
          chapter: bestMatch.chapter,
          confidence: 'medium',
          score: bestMatch.score,
          alternatives: scores.slice(0, 3).filter(s => s.score > 0),
        };
      }
    } else {
      mapping[index] = {
        chapter: null,
        confidence: 'low',
        score: 0,
      };
    }
  });

  return mapping;
}

function extractEntities(blocks) {
  const entities = {
    vocabulary: new Set(),
    authors: new Set(),
    artworks: new Set(),
  };

  blocks.forEach(block => {
    const text = block.text;

    // Extract vocabulary (marked with §)
    if (block.type === 'vocabulary') {
      const match = text.match(/^(.+?)(?:\s*[-–]\s*|$)/);
      if (match) {
        entities.vocabulary.add(match[1].trim());
      }
    }

    // Extract authors (marked with @)
    if (block.type === 'authors') {
      const match = text.match(/^(.+?)(?:\s*[-–]|$)/);
      if (match) {
        entities.authors.add(match[1].trim());
      }
    }

    // Extract potential artworks (look for quoted titles or art references)
    const artworkPatterns = [
      /"([^"]+)"/g,
      /'([^']+)'/g,
      /(?:artwork|piece|installation|work):\s*(.+?)(?:\n|$)/gi,
    ];

    artworkPatterns.forEach(pattern => {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        if (match[1] && match[1].length > 3 && match[1].length < 100) {
          entities.artworks.add(match[1].trim());
        }
      }
    });
  });

  return {
    vocabulary: Array.from(entities.vocabulary),
    authors: Array.from(entities.authors),
    artworks: Array.from(entities.artworks),
  };
}

function generateReport(filename, blocks, mapping, entities, chapters) {
  console.log('\n' + '='.repeat(70));
  console.log(`📚 ChatGPT Export Processing Report: ${filename}`);
  console.log('='.repeat(70));

  // Summary statistics
  console.log('\n📊 Summary Statistics:\n');
  const typeCounts = {};
  blocks.forEach(block => {
    typeCounts[block.type] = (typeCounts[block.type] || 0) + 1;
  });

  console.log(`Total blocks: ${blocks.length}`);
  Object.entries(typeCounts).forEach(([type, count]) => {
    const icon = {
      human: '●',
      ai: '○',
      hybrid: '◐',
      notes: '•',
      authors: '@',
      vocabulary: '§',
    }[type] || '?';
    console.log(`  ${icon} ${type}: ${count}`);
  });

  // Chapter mapping
  console.log('\n📖 Chapter Mapping:\n');
  const byChapter = {};
  chapters.forEach(chapter => {
    byChapter[chapter.slug] = {
      chapter,
      blocks: [],
    };
  });
  byChapter['unmapped'] = {
    chapter: { title: 'Unmapped Content', slug: 'unmapped' },
    blocks: [],
  };

  blocks.forEach((block, index) => {
    const map = mapping[index];
    if (map?.chapter) {
      byChapter[map.chapter.slug].blocks.push({
        block,
        confidence: map.confidence,
        score: map.score,
      });
    } else {
      byChapter['unmapped'].blocks.push({ block, confidence: 'low', score: 0 });
    }
  });

  Object.entries(byChapter).forEach(([slug, data]) => {
    if (data.blocks.length > 0) {
      const highConf = data.blocks.filter(b => b.confidence === 'high').length;
      const medConf = data.blocks.filter(b => b.confidence === 'medium').length;
      const lowConf = data.blocks.filter(b => b.confidence === 'low').length;
      
      console.log(`  ${data.chapter.title}:`);
      console.log(`    ${data.blocks.length} blocks (${highConf} high, ${medConf} med, ${lowConf} low)`);
    }
  });

  // Extracted entities
  console.log('\n🔍 Extracted Entities:\n');
  if (entities.vocabulary.length > 0) {
    console.log(`  Vocabulary (${entities.vocabulary.length}):`);
    entities.vocabulary.slice(0, 10).forEach(term => {
      console.log(`    § ${term}`);
    });
    if (entities.vocabulary.length > 10) {
      console.log(`    ... and ${entities.vocabulary.length - 10} more`);
    }
  }

  if (entities.authors.length > 0) {
    console.log(`\n  Authors (${entities.authors.length}):`);
    entities.authors.slice(0, 10).forEach(author => {
      console.log(`    @ ${author}`);
    });
    if (entities.authors.length > 10) {
      console.log(`    ... and ${entities.authors.length - 10} more`);
    }
  }

  if (entities.artworks.length > 0) {
    console.log(`\n  Artworks (${entities.artworks.length}):`);
    entities.artworks.slice(0, 10).forEach(artwork => {
      console.log(`    • ${artwork}`);
    });
    if (entities.artworks.length > 10) {
      console.log(`    ... and ${entities.artworks.length - 10} more`);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('✨ Processing complete!\n');
}

// Main execution
const filename = process.argv[2];

if (!filename) {
  console.log('Usage: node scripts/process-chatgpt-export.mjs [filename]');
  console.log('\nAvailable files:');
  const files = fs.readdirSync(DRAFTS_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'));
  files.forEach(f => console.log(`  - ${f}`));
  process.exit(1);
}

try {
  const filePath = path.join(DRAFTS_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const blocks = parseChatGPTExport(content);
  
  const outline = JSON.parse(fs.readFileSync(CHAPTER_OUTLINE, 'utf-8'));
  const mapping = mapBlocksToChapters(blocks, outline.chapters);
  const entities = extractEntities(blocks);

  generateReport(filename, blocks, mapping, entities, outline.chapters);

  // Save mapping and entities to JSON file
  const outputPath = path.join(DRAFTS_DIR, `.${filename}.processed.json`);
  fs.writeFileSync(outputPath, JSON.stringify({
    filename,
    processed: new Date().toISOString(),
    blocks: blocks.map((b, i) => ({
      index: i,
      type: b.type,
      textLength: b.text.length,
      preview: b.text.substring(0, 100),
    })),
    mapping: Object.fromEntries(
      Object.entries(mapping).map(([index, map]) => [
        index,
        {
          chapterSlug: map.chapter?.slug || null,
          chapterTitle: map.chapter?.title || null,
          confidence: map.confidence,
          score: map.score,
        },
      ])
    ),
    entities,
  }, null, 2));

  console.log(`💾 Results saved to: ${outputPath}\n`);
  console.log('📝 Next steps:');
  console.log('  1. Review the mapping in the JSON file');
  console.log('  2. Use the web editor to refine authorship markers');
  console.log('  3. Run: node scripts/map-to-chapters.mjs ' + filename);
  console.log('  4. Build chapters: node scripts/chapter-builder.mjs\n');

} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  console.error(error.stack);
  process.exit(1);
}
