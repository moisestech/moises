/**
 * Standalone script to process all draft files
 * Run with: node scripts/process-drafts-standalone.mjs
 * 
 * This script directly imports and uses the analysis functions
 */

import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Try to load TypeScript files using ts-node or similar
// If that doesn't work, we'll use a different approach

const projectRoot = path.resolve(__dirname, '..');
process.chdir(projectRoot);

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const EXTRACTED_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'extracted');

const FILES_TO_PROCESS = [
  'open-ended-01a.md',
  'open-ended-01b.md',
  'open-ended-02a.md',
  'open-ended-02b.md',
];

// Simple regex patterns for extraction (simplified version of the full analyzer)
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

    // Check for speaker markers
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
      // Save previous block if exists
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      // Start new block
      currentBlock = {
        speaker,
        type: 'other',
        lineStart: i,
        text: line,
        themes: [],
      };
    } else if (currentBlock) {
      currentBlock.text += '\n' + line;
    } else if (trimmed && !trimmed.match(/^#+\s/) && trimmed.length > 0) {
      // Infer speaker from content
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
      };
    }
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return blocks;
}

function extractVocabulary(blocks, lines) {
  const vocabulary = [];
  const seen = new Set();

  // Look for terms in quotes, bold, or defined explicitly
  const patterns = [
    /["']([^"']+)["']/g,
    /\*\*([^*]+)\*\*/g,
    /(?:term|concept|idea|notion):\s*([^\n]+)/gi,
  ];

  for (const block of blocks) {
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(block.text)) !== null) {
        const term = match[1].trim();
        if (term.length > 3 && term.length < 50 && !seen.has(term.toLowerCase())) {
          seen.add(term.toLowerCase());
          vocabulary.push({
            term,
            definition: null,
            context: block.text.substring(0, 200),
            lineNumber: block.lineStart,
          });
        }
      }
    }
  }

  return vocabulary;
}

function extractWriters(blocks, lines) {
  const writers = [];
  const seen = new Set();

  // Common patterns for writer names
  const patterns = [
    /(?:by|from|author|writer|thinker)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/g,
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+(?:says|writes|argues|notes)/g,
  ];

  for (const block of blocks) {
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(block.text)) !== null) {
        const name = match[1].trim();
        if (name.length > 2 && name.length < 50 && !seen.has(name.toLowerCase())) {
          seen.add(name.toLowerCase());
          writers.push({
            name,
            context: block.text.substring(0, 200),
            lineNumber: block.lineStart,
          });
        }
      }
    }
  }

  return writers;
}

function extractBooks(blocks, lines) {
  const books = [];
  const seen = new Set();

  // Look for book titles (often italicized or in quotes)
  const patterns = [
    /["']([^"']{10,80})["']/g,
    /\*([^*]{10,80})\*/g,
    /(?:book|title):\s*([^\n]+)/gi,
  ];

  for (const block of blocks) {
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(block.text)) !== null) {
        const title = match[1].trim();
        if (title.length > 10 && title.length < 100 && !seen.has(title.toLowerCase())) {
          seen.add(title.toLowerCase());
          books.push({
            title,
            author: null,
            context: block.text.substring(0, 200),
            lineNumber: block.lineStart,
          });
        }
      }
    }
  }

  return books;
}

function extractArtworks(blocks, lines) {
  const artworks = [];
  const seen = new Set();

  // Look for artwork/installation names
  const patterns = [
    /(?:artwork|installation|piece|work):\s*([^\n]+)/gi,
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+(?:installation|piece|work)/g,
  ];

  for (const block of blocks) {
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(block.text)) !== null) {
        const name = match[1].trim();
        if (name.length > 3 && name.length < 100 && !seen.has(name.toLowerCase())) {
          seen.add(name.toLowerCase());
          artworks.push({
            name,
            description: null,
            context: block.text.substring(0, 200),
            lineNumber: block.lineStart,
          });
        }
      }
    }
  }

  return artworks;
}

function categorizeBySpeaker(blocks) {
  return {
    human: blocks.filter(b => b.speaker === 'human'),
    ai: blocks.filter(b => b.speaker === 'ai'),
    unknown: blocks.filter(b => b.speaker === 'unknown'),
  };
}

function extractThemes(blocks) {
  // Simple theme detection based on keywords
  const themeKeywords = {
    'intelligence-as-commodity': ['intelligence as commodity', 'prompt economics', 'cognitive'],
    'dead-internet-live-body': ['dead internet', 'live body', 'ai k-hole', 'synthetic flow'],
    'techno-spiritual': ['techno-spiritual', 'simulation faith', 'ai church', 'belief'],
    'vectoral-miami': ['vectoral', 'miami', 'stack', 'infrastructure'],
    'slop-and-sacrament': ['slop', 'ai slop', 'metabolic', 'synthetic content'],
  };

  const themes = [];
  const themeMap = new Map();

  for (const [themeName, keywords] of Object.entries(themeKeywords)) {
    const matchingBlocks = blocks.filter(block => {
      const text = block.text.toLowerCase();
      return keywords.some(keyword => text.includes(keyword.toLowerCase()));
    });

    if (matchingBlocks.length > 0) {
      themeMap.set(themeName, matchingBlocks);
    }
  }

  let themeId = 1;
  for (const [name, contentBlocks] of themeMap.entries()) {
    themes.push({
      id: `theme-${themeId++}`,
      name: name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      contentBlocks,
      description: null,
    });
  }

  return themes;
}

async function processFile(filename) {
  console.log(`\n📄 Processing ${filename}...`);

  const filePath = path.join(DRAFTS_DIR, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`  ❌ File not found: ${filePath}`);
    return { success: false, error: 'File not found' };
  }

  try {
    // Read file
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    console.log(`  ⏳ Analyzing ${lines.length} lines...`);

    // Extract content blocks
    const contentBlocks = extractContentBlocks(content, lines);
    const speakers = categorizeBySpeaker(contentBlocks);
    const vocabulary = extractVocabulary(contentBlocks, lines);
    const writers = extractWriters(contentBlocks, lines);
    const books = extractBooks(contentBlocks, lines);
    const artworks = extractArtworks(contentBlocks, lines);
    const themes = extractThemes(contentBlocks);

    console.log(`  ✅ Analysis complete:`);
    console.log(`     - ${contentBlocks.length} content blocks`);
    console.log(`     - ${speakers.human.length} human, ${speakers.ai.length} AI, ${speakers.unknown.length} unknown`);
    console.log(`     - ${themes.length} themes detected`);
    console.log(`     - ${vocabulary.length} vocabulary, ${writers.length} writers, ${books.length} books, ${artworks.length} artworks`);

    // Ensure extracted directory exists
    if (!fs.existsSync(EXTRACTED_DIR)) {
      fs.mkdirSync(EXTRACTED_DIR, { recursive: true });
    }

    // Generate extracted files
    console.log(`  ⏳ Generating extracted files...`);

    // Vocabulary file
    let vocabContent = `# Vocabulary\n\n*Auto-extracted from ${filename}*\n\nTotal: ${vocabulary.length}\n\n---\n\n`;
    for (const item of vocabulary.slice(0, 50)) {
      vocabContent += `## ${item.term}\n\n`;
      if (item.context) {
        vocabContent += `*Context:* ${item.context.substring(0, 150)}...\n\n`;
      }
    }
    fs.writeFileSync(path.join(EXTRACTED_DIR, `vocabulary-${filename.replace('.md', '')}.md`), vocabContent);

    // Writers file
    let writersContent = `# Writers\n\n*Auto-extracted from ${filename}*\n\nTotal: ${writers.length}\n\n---\n\n`;
    for (const item of writers.slice(0, 50)) {
      writersContent += `## ${item.name}\n\n`;
      if (item.context) {
        writersContent += `*Context:* ${item.context.substring(0, 150)}...\n\n`;
      }
    }
    fs.writeFileSync(path.join(EXTRACTED_DIR, `writers-${filename.replace('.md', '')}.md`), writersContent);

    // Books file
    let booksContent = `# Books\n\n*Auto-extracted from ${filename}*\n\nTotal: ${books.length}\n\n---\n\n`;
    for (const item of books.slice(0, 50)) {
      booksContent += `## ${item.title}\n\n`;
      if (item.context) {
        booksContent += `*Context:* ${item.context.substring(0, 150)}...\n\n`;
      }
    }
    fs.writeFileSync(path.join(EXTRACTED_DIR, `books-${filename.replace('.md', '')}.md`), booksContent);

    // Artworks file
    let artworksContent = `# Artworks\n\n*Auto-extracted from ${filename}*\n\nTotal: ${artworks.length}\n\n---\n\n`;
    for (const item of artworks.slice(0, 50)) {
      artworksContent += `## ${item.name}\n\n`;
      if (item.context) {
        artworksContent += `*Context:* ${item.context.substring(0, 150)}...\n\n`;
      }
    }
    fs.writeFileSync(path.join(EXTRACTED_DIR, `artworks-${filename.replace('.md', '')}.md`), artworksContent);

    console.log(`  ✅ Extracted files saved to ${EXTRACTED_DIR}`);

    return {
      success: true,
      stats: {
        blocks: contentBlocks.length,
        lines: lines.length,
        speakers: {
          human: speakers.human.length,
          ai: speakers.ai.length,
          unknown: speakers.unknown.length,
        },
        themes: themes.length,
        vocabulary: vocabulary.length,
        writers: writers.length,
        books: books.length,
        artworks: artworks.length,
      },
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
    const result = await processFile(filename);
    results.push({ filename, ...result });
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
        console.log(`    Blocks: ${result.stats.blocks}`);
        console.log(`    Themes: ${result.stats.themes}`);
        console.log(`    Entities: ${result.stats.vocabulary + result.stats.writers + result.stats.books + result.stats.artworks}`);
      } else {
        console.log(`\n  ${result.filename}: ❌ ${result.error}`);
      }
    });
  }

  console.log('\n✨ Processing complete!');
  console.log(`\n📁 Extracted files saved to: ${EXTRACTED_DIR}`);
  console.log('\nNext steps:');
  console.log('1. Review extracted entities in the extracted/ folder');
  console.log('2. Visit /research/born-into-the-machine/drafts/ to view processed files');
  console.log('3. Use the Read/Categorize/Organize/Entities views to continue organizing');
}

main().catch(console.error);
