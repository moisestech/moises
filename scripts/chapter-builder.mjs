#!/usr/bin/env node
/**
 * Interactive chapter builder - organize content into chapters
 * Run with: node scripts/chapter-builder.mjs
 * 
 * Uses chapter mapping to help organize draft content into the 10 chapters
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const CHAPTERS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapters');
const CHAPTER_OUTLINE = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapter-outline.json');

class ChapterBuilder {
  constructor() {
    this.outline = JSON.parse(fs.readFileSync(CHAPTER_OUTLINE, 'utf-8'));
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.chapterContent = {};
    
    // Initialize chapter content
    this.outline.chapters.forEach(chapter => {
      this.chapterContent[chapter.slug] = [];
    });
  }

  question(query) {
    return new Promise((resolve) => {
      this.rl.question(query, resolve);
    });
  }

  async loadMappings() {
    const files = fs.readdirSync(DRAFTS_DIR)
      .filter(f => f.endsWith('.md') && !f.startsWith('.') && !f.includes('INDEX'));

    console.log('📂 Loading chapter mappings...\n');

    for (const filename of files) {
      const mappingPath = path.join(DRAFTS_DIR, `.${filename}.chapter-mapping.json`);
      if (fs.existsSync(mappingPath)) {
        const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
        console.log(`  ✓ ${filename}`);

        // Load blocks from draft file
        const draftPath = path.join(DRAFTS_DIR, filename);
        const content = fs.readFileSync(draftPath, 'utf-8');
        const lines = content.split('\n');

        // Simple block extraction (matching the mapping IDs)
        const blocks = this.extractBlocks(content, lines);

        // Add blocks to chapters based on mapping
        for (const [blockId, map] of Object.entries(mapping.mapping)) {
          const block = blocks.find(b => b.id === blockId);
          if (block && map.chapter) {
            if (!this.chapterContent[map.chapter.slug]) {
              this.chapterContent[map.chapter.slug] = [];
            }
            this.chapterContent[map.chapter.slug].push({
              ...block,
              source: filename,
              confidence: map.confidence,
            });
          }
        }
      }
    }

    console.log('');
  }

  extractBlocks(content, lines) {
    // Simplified extraction - just split by major markers
    const blocks = [];
    let currentBlock = null;
    let blockNum = 1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Check for speaker markers
      const isMarker = /^(Question|GPT|Answer from|Quote from Me|Me:|You:|Questions and Visions|Ideas for Book)/i.test(trimmed);

      if (isMarker) {
        if (currentBlock) {
          blocks.push(currentBlock);
        }
        currentBlock = {
          id: `block-${blockNum++}`,
          lineStart: i,
          text: line,
          speaker: trimmed.match(/^(Question|Answer from|Me:|You:)/i) ? 'human' : 'ai',
        };
      } else if (currentBlock) {
        currentBlock.text += '\n' + line;
      } else if (trimmed && trimmed.length > 50) {
        currentBlock = {
          id: `block-${blockNum++}`,
          lineStart: i,
          text: line,
          speaker: 'unknown',
        };
      }
    }

    if (currentBlock) {
      blocks.push(currentBlock);
    }

    return blocks;
  }

  async showMenu() {
    console.log('\n' + '='.repeat(70));
    console.log('📚 Chapter Builder');
    console.log('='.repeat(70));
    
    this.outline.chapters.forEach(chapter => {
      const count = this.chapterContent[chapter.slug]?.length || 0;
      console.log(`  ${chapter.order}. ${chapter.title} (${count} blocks)`);
    });

    console.log('\nCommands:');
    console.log('  view [n]      - View chapter #n and its content');
    console.log('  build [n]      - Build chapter #n from mapped content');
    console.log('  build-all     - Build all chapters');
    console.log('  stats         - Show statistics');
    console.log('  quit          - Exit');
    console.log('');
  }

  async viewChapter(order) {
    const chapter = this.outline.chapters.find(c => c.order === parseInt(order));
    if (!chapter) {
      console.log('❌ Chapter not found');
      return;
    }

    const blocks = this.chapterContent[chapter.slug] || [];

    console.log('\n' + '='.repeat(70));
    console.log(`📖 ${chapter.title}`);
    console.log('='.repeat(70));
    console.log(`\nContext: ${chapter.context}\n`);
    console.log(`Keywords: ${chapter.keywords.join(', ')}\n`);
    if (chapter.thinkers.length > 0) {
      console.log(`Thinkers: ${chapter.thinkers.join(', ')}\n`);
    }
    console.log(`\nContent blocks: ${blocks.length}\n`);

    if (blocks.length === 0) {
      console.log('  (No content mapped to this chapter yet)');
      console.log('\n  Run: node scripts/map-to-chapters.mjs [filename]');
      console.log('  to map draft content to chapters\n');
      return;
    }

    blocks.slice(0, 10).forEach((block, i) => {
      const speakerIcon = {
        human: '●',
        ai: '○',
        unknown: '◐',
      }[block.speaker] || '?';

      const confIcon = {
        high: '✓',
        medium: '~',
        low: '?',
      }[block.confidence] || '?';

      const preview = block.text.substring(0, 100).replace(/\n/g, ' ');
      console.log(`  ${i + 1}. ${speakerIcon} ${confIcon} [${block.source}]`);
      console.log(`     ${preview}...`);
    });

    if (blocks.length > 10) {
      console.log(`\n  ... and ${blocks.length - 10} more blocks`);
    }
  }

  async buildChapter(order) {
    const chapter = this.outline.chapters.find(c => c.order === parseInt(order));
    if (!chapter) {
      console.log('❌ Chapter not found');
      return;
    }

    const blocks = this.chapterContent[chapter.slug] || [];

    if (blocks.length === 0) {
      console.log('❌ No content mapped to this chapter');
      console.log('   Run: node scripts/map-to-chapters.mjs [filename]');
      return;
    }

    ensureDir(CHAPTERS_DIR);

    let content = `---\n`;
    content += `title: "${chapter.title}"\n`;
    content += `slug: "${chapter.slug}"\n`;
    content += `order: ${chapter.order}\n`;
    content += `status: "${chapter.status}"\n`;
    content += `created: "${new Date().toISOString().split('T')[0]}"\n`;
    content += `lastModified: "${new Date().toISOString().split('T')[0]}"\n`;
    content += `---\n\n`;
    content += `# ${chapter.title}\n\n`;
    content += `${chapter.context}\n\n`;
    content += `---\n\n`;

    // Group by source file
    const bySource = {};
    blocks.forEach(block => {
      if (!bySource[block.source]) {
        bySource[block.source] = [];
      }
      bySource[block.source].push(block);
    });

    for (const [source, sourceBlocks] of Object.entries(bySource)) {
      content += `## From ${source}\n\n`;
      
      sourceBlocks.forEach(block => {
        const marker = {
          human: '●',
          ai: '○',
          unknown: '◐',
        }[block.speaker] || '◐';

        content += `${marker} ${block.text}\n\n`;
      });
    }

    const chapterPath = path.join(CHAPTERS_DIR, `${String(chapter.order).padStart(2, '0')}-${chapter.slug}.md`);
    fs.writeFileSync(chapterPath, content);

    console.log(`\n✅ Built chapter: ${chapter.title}`);
    console.log(`   ${blocks.length} blocks from ${Object.keys(bySource).length} source files`);
    console.log(`   Saved to: ${chapterPath}\n`);
  }

  async buildAll() {
    console.log('\n🏗️  Building all chapters...\n');

    for (const chapter of this.outline.chapters) {
      await this.buildChapter(chapter.order);
    }

    console.log('✨ All chapters built!\n');
  }

  async showStats() {
    console.log('\n📊 Statistics:\n');

    let totalBlocks = 0;
    let chaptersWithContent = 0;

    this.outline.chapters.forEach(chapter => {
      const blocks = this.chapterContent[chapter.slug] || [];
      totalBlocks += blocks.length;
      if (blocks.length > 0) {
        chaptersWithContent++;
      }
    });

    console.log(`Total blocks mapped: ${totalBlocks}`);
    console.log(`Chapters with content: ${chaptersWithContent}/${this.outline.chapters.length}\n`);

    console.log('Content by chapter:');
    this.outline.chapters.forEach(chapter => {
      const blocks = this.chapterContent[chapter.slug] || [];
      const bar = '█'.repeat(Math.floor((blocks.length / Math.max(totalBlocks, 1)) * 50));
      console.log(`  ${String(chapter.order).padStart(2, ' ')}. ${chapter.title.padEnd(50)} ${blocks.length} blocks ${bar}`);
    });
  }

  async run() {
    await this.loadMappings();

    while (true) {
      await this.showMenu();
      const command = await this.question('> ');

      const parts = command.trim().split(' ');
      const cmd = parts[0].toLowerCase();
      const arg = parts[1];

      try {
        switch (cmd) {
          case 'view':
            if (arg) {
              await this.viewChapter(arg);
            } else {
              console.log('Usage: view [chapter-number]');
            }
            break;
          case 'build':
            if (arg) {
              await this.buildChapter(arg);
            } else {
              console.log('Usage: build [chapter-number]');
            }
            break;
          case 'build-all':
            await this.buildAll();
            break;
          case 'stats':
            await this.showStats();
            break;
          case 'quit':
          case 'exit':
          case 'q':
            console.log('\n👋 Goodbye!');
            this.rl.close();
            return;
          default:
            console.log(`❌ Unknown command: ${cmd}`);
        }
      } catch (error) {
        console.error(`❌ Error: ${error.message}`);
      }
    }
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const builder = new ChapterBuilder();
builder.run().catch(console.error);
