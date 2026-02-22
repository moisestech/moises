#!/usr/bin/env node
/**
 * Map draft content to chapter outline
 * Run with: node scripts/map-to-chapters.mjs [filename]
 * 
 * Analyzes draft content and suggests which chapter each block belongs to
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const CHAPTER_OUTLINE = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapter-outline.json');

// Same extraction functions
const SPEAKER_PATTERNS = {
  human: [
    /^Question\s*$/i,
    /^Answer from (a )?me/i,
    /^Quote from Me/i,
    /^Me:/i,
    /^You:/i,
    /^Questions and Visions:/i,
    /^Ideas for Book/i,
    /^Thought for/i,
    /^Answer to feedback from GPT/i,
  ],
  ai: [
    /^GPT\s*$/i,
    /^ChatGPT/i,
    /^Feedback GPT/i,
    /^GPT (Answers?|Feedback|Question|Summarizing)/i,
  ],
};

function extractContentBlocks(content, lines) {
  const blocks = [];
  let currentBlock = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    let speaker = 'unknown';
    let foundMarker = false;

    for (const pattern of SPEAKER_PATTERNS.human) {
      if (pattern.test(trimmed)) {
        speaker = 'human';
        foundMarker = true;
        break;
      }
    }

    if (!foundMarker) {
      for (const pattern of SPEAKER_PATTERNS.ai) {
        if (pattern.test(trimmed)) {
          speaker = 'ai';
          foundMarker = true;
          break;
        }
      }
    }

    if (foundMarker) {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      currentBlock = {
        speaker,
        type: 'other',
        lineStart: i,
        text: line,
        themes: [],
        id: `block-${blocks.length + 1}`,
      };
    } else if (currentBlock) {
      currentBlock.text += '\n' + line;
    } else if (trimmed && !trimmed.match(/^#+\s/) && trimmed.length > 0) {
      if (trimmed.match(/^(I|I'm|I've|I think|I feel|for me|my)/i)) {
        speaker = 'human';
      } else if (trimmed.match(/^(Let's|Here's|You can|This is|Think of)/i) && trimmed.length > 50) {
        speaker = 'ai';
      }
      currentBlock = {
        speaker,
        type: 'other',
        lineStart: i,
        text: line,
        themes: [],
        id: `block-${blocks.length + 1}`,
      };
    }
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return blocks;
}

function scoreBlockForChapter(block, chapter) {
  let score = 0;
  const text = block.text.toLowerCase();

  // Check keywords
  chapter.keywords.forEach(keyword => {
    if (text.includes(keyword.toLowerCase())) {
      score += 3;
    }
  });

  // Check thinkers
  chapter.thinkers.forEach(thinker => {
    if (text.includes(thinker.toLowerCase())) {
      score += 5;
    }
  });

  // Check artworks
  chapter.artworks.forEach(artwork => {
    if (text.includes(artwork.toLowerCase())) {
      score += 4;
    }
  });

  // Check context words
  const contextWords = chapter.context.toLowerCase().split(/\s+/);
  contextWords.forEach(word => {
    if (word.length > 4 && text.includes(word)) {
      score += 1;
    }
  });

  return score;
}

function mapBlocksToChapters(blocks, chapters) {
  const mapping = {};

  blocks.forEach(block => {
    const scores = chapters.map(chapter => ({
      chapter,
      score: scoreBlockForChapter(block, chapter),
    }));

    scores.sort((a, b) => b.score - a.score);
    
    const bestMatch = scores[0];
    const secondBest = scores[1];

    // If best match has significant score advantage, use it
    // Otherwise mark as "uncertain" or "multiple"
    if (bestMatch.score > 0) {
      if (bestMatch.score >= secondBest.score * 1.5) {
        mapping[block.id] = {
          chapter: bestMatch.chapter,
          confidence: 'high',
          score: bestMatch.score,
        };
      } else if (bestMatch.score > 0) {
        mapping[block.id] = {
          chapter: bestMatch.chapter,
          confidence: 'medium',
          score: bestMatch.score,
          alternatives: scores.slice(0, 3).filter(s => s.score > 0),
        };
      } else {
        mapping[block.id] = {
          chapter: null,
          confidence: 'low',
          score: 0,
        };
      }
    } else {
      mapping[block.id] = {
        chapter: null,
        confidence: 'low',
        score: 0,
      };
    }
  });

  return mapping;
}

function analyzeFile(filename) {
  const filePath = path.join(DRAFTS_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const blocks = extractContentBlocks(content, lines);

  const outline = JSON.parse(fs.readFileSync(CHAPTER_OUTLINE, 'utf-8'));
  const mapping = mapBlocksToChapters(blocks, outline.chapters);

  // Group by chapter
  const byChapter = {};
  outline.chapters.forEach(chapter => {
    byChapter[chapter.slug] = {
      chapter,
      blocks: [],
    };
  });
  byChapter['unmapped'] = {
    chapter: { title: 'Unmapped Content', slug: 'unmapped' },
    blocks: [],
  };

  blocks.forEach(block => {
    const map = mapping[block.id];
    if (map.chapter) {
      byChapter[map.chapter.slug].blocks.push({
        block,
        confidence: map.confidence,
        score: map.score,
        alternatives: map.alternatives || [],
      });
    } else {
      byChapter['unmapped'].blocks.push({
        block,
        confidence: 'low',
        score: 0,
      });
    }
  });

  return {
    filename,
    totalBlocks: blocks.length,
    byChapter,
    mapping,
  };
}

function displayResults(results) {
  console.log('\n' + '='.repeat(70));
  console.log(`📚 Chapter Mapping: ${results.filename}`);
  console.log('='.repeat(70));
  console.log(`\nTotal blocks: ${results.totalBlocks}\n`);

  // Summary by chapter
  console.log('📊 Content Distribution:\n');
  for (const [slug, data] of Object.entries(results.byChapter)) {
    if (data.blocks.length > 0) {
      const highConf = data.blocks.filter(b => b.confidence === 'high').length;
      const medConf = data.blocks.filter(b => b.confidence === 'medium').length;
      const lowConf = data.blocks.filter(b => b.confidence === 'low').length;
      
      console.log(`  ${data.chapter.title}:`);
      console.log(`    ${data.blocks.length} blocks (${highConf} high, ${medConf} med, ${lowConf} low confidence)`);
    }
  }

  // Detailed view
  console.log('\n' + '='.repeat(70));
  console.log('📋 Detailed Mapping:\n');

  for (const [slug, data] of Object.entries(results.byChapter)) {
    if (data.blocks.length > 0) {
      console.log(`\n${data.chapter.title} (${data.blocks.length} blocks):`);
      console.log('─'.repeat(70));
      
      data.blocks.slice(0, 5).forEach(({ block, confidence, score, alternatives }) => {
        const icon = {
          high: '✓',
          medium: '~',
          low: '?',
        }[confidence] || '?';

        const speakerIcon = {
          human: '●',
          ai: '○',
          unknown: '◐',
        }[block.speaker] || '?';

        const preview = block.text.substring(0, 80).replace(/\n/g, ' ');
        console.log(`  ${icon} ${speakerIcon} Block ${block.id} (score: ${score}, ${confidence})`);
        console.log(`    ${preview}...`);
        
        if (alternatives && alternatives.length > 0) {
          console.log(`    Also matches: ${alternatives.map(a => a.chapter.title).join(', ')}`);
        }
      });

      if (data.blocks.length > 5) {
        console.log(`  ... and ${data.blocks.length - 5} more blocks`);
      }
    }
  }

  // Recommendations
  console.log('\n' + '='.repeat(70));
  console.log('💡 Recommendations:\n');

  const unmapped = results.byChapter['unmapped'].blocks.length;
  if (unmapped > 0) {
    console.log(`  ⚠️  ${unmapped} blocks couldn't be mapped to any chapter`);
    console.log(`     Review these manually or add more keywords to chapters\n`);
  }

  const lowConfidence = Object.values(results.byChapter)
    .flatMap(d => d.blocks)
    .filter(b => b.confidence === 'low' && b.score > 0).length;
  
  if (lowConfidence > 0) {
    console.log(`  ⚠️  ${lowConfidence} blocks have low confidence mappings`);
    console.log(`     Review these and assign manually if needed\n`);
  }

  // Chapters with most content
  const sortedChapters = Object.entries(results.byChapter)
    .filter(([slug]) => slug !== 'unmapped')
    .map(([slug, data]) => ({ slug, ...data }))
    .sort((a, b) => b.blocks.length - a.blocks.length);

  console.log('  📈 Chapters with most content:');
  sortedChapters.slice(0, 3).forEach(({ chapter, blocks }) => {
    if (blocks.length > 0) {
      console.log(`     • ${chapter.title}: ${blocks.length} blocks`);
    }
  });

  console.log('\n✨ Analysis complete!\n');
}

// Main
const filename = process.argv[2];

if (!filename) {
  console.log('Usage: node scripts/map-to-chapters.mjs [filename]');
  console.log('\nAvailable files:');
  const files = fs.readdirSync(DRAFTS_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'));
  files.forEach(f => console.log(`  - ${f}`));
  process.exit(1);
}

try {
  const results = analyzeFile(filename);
  displayResults(results);

  // Save mapping to file
  const mappingPath = path.join(DRAFTS_DIR, `.${filename}.chapter-mapping.json`);
  fs.writeFileSync(mappingPath, JSON.stringify({
    filename,
    analyzed: new Date().toISOString(),
    mapping: results.mapping,
    byChapter: Object.fromEntries(
      Object.entries(results.byChapter).map(([slug, data]) => [
        slug,
        {
          blocks: data.blocks.map(({ block, confidence, score }) => ({
            blockId: block.id,
            confidence,
            score,
          })),
        },
      ])
    ),
  }, null, 2));
  
  console.log(`💾 Mapping saved to: ${mappingPath}\n`);
} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
}
