#!/usr/bin/env node
/**
 * Interactive terminal tool for categorizing and organizing draft files
 * Run with: node scripts/draft-organizer.mjs [filename]
 * 
 * Features:
 * - View and categorize content blocks
 * - Tag themes
 * - Organize into chapters
 * - See relationships between files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const EXTRACTED_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'extracted');
const CHAPTERS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapters');

// Same extraction functions from the standalone script
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
        processed: false,
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
        processed: false,
        id: `block-${blocks.length + 1}`,
      };
    }
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return blocks;
}

function extractThemes(blocks) {
  const themeKeywords = {
    'intelligence-as-commodity': ['intelligence as commodity', 'prompt economics', 'cognitive', 'utility'],
    'dead-internet-live-body': ['dead internet', 'live body', 'ai k-hole', 'synthetic flow', 'doomscroll'],
    'techno-spiritual': ['techno-spiritual', 'simulation faith', 'ai church', 'belief', 'sacrament'],
    'vectoral-miami': ['vectoral', 'miami', 'stack', 'infrastructure', 'wynwood'],
    'slop-and-sacrament': ['slop', 'ai slop', 'metabolic', 'synthetic content'],
    'velocity-acceleration': ['velocity', 'acceleration', 'speed', 'hinton'],
    'childhood-care': ['childhood', 'kids', 'care', 'ubi', 'nursery'],
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
    });
  }

  return themes;
}

class DraftOrganizer {
  constructor(filename) {
    this.filename = filename;
    this.filePath = path.join(DRAFTS_DIR, filename);
    this.blocks = [];
    this.themes = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async load() {
    if (!fs.existsSync(this.filePath)) {
      throw new Error(`File not found: ${this.filePath}`);
    }

    const content = fs.readFileSync(this.filePath, 'utf-8');
    const lines = content.split('\n');
    this.blocks = extractContentBlocks(content, lines);
    this.themes = extractThemes(this.blocks);
    
    // Load saved state if exists
    const statePath = path.join(DRAFTS_DIR, `.${this.filename}.state.json`);
    if (fs.existsSync(statePath)) {
      const saved = JSON.parse(fs.readFileSync(statePath, 'utf-8'));
      // Merge saved state
      for (const savedBlock of saved.blocks || []) {
        const block = this.blocks.find(b => b.id === savedBlock.id);
        if (block) {
          block.themes = savedBlock.themes || [];
          block.processed = savedBlock.processed || false;
          block.type = savedBlock.type || 'other';
        }
      }
    }
  }

  save() {
    const statePath = path.join(DRAFTS_DIR, `.${this.filename}.state.json`);
    fs.writeFileSync(statePath, JSON.stringify({
      blocks: this.blocks.map(b => ({
        id: b.id,
        themes: b.themes,
        processed: b.processed,
        type: b.type,
      })),
    }, null, 2));
  }

  question(query) {
    return new Promise((resolve) => {
      this.rl.question(query, resolve);
    });
  }

  displayBlock(block, index) {
    const speakerIcon = {
      human: '●',
      ai: '○',
      unknown: '◐',
    }[block.speaker] || '?';

    const processedIcon = block.processed ? '✓' : '○';
    const themesStr = block.themes.length > 0 ? ` [${block.themes.join(', ')}]` : '';

    console.log(`\n${index + 1}. ${speakerIcon} ${processedIcon} Block ${block.id}${themesStr}`);
    console.log('─'.repeat(60));
    const preview = block.text.substring(0, 200).replace(/\n/g, ' ');
    console.log(preview + (block.text.length > 200 ? '...' : ''));
  }

  async showMenu() {
    const processed = this.blocks.filter(b => b.processed).length;
    const total = this.blocks.length;
    const progress = total > 0 ? Math.round((processed / total) * 100) : 0;

    console.log('\n' + '='.repeat(60));
    console.log(`📄 ${this.filename}`);
    console.log(`Progress: ${processed}/${total} (${progress}%)`);
    console.log(`Themes: ${this.themes.length}`);
    console.log('='.repeat(60));
    console.log('\nCommands:');
    console.log('  list          - List all blocks');
    console.log('  show [n]      - Show block #n in detail');
    console.log('  tag [n]       - Tag themes for block #n');
    console.log('  process [n]   - Mark block #n as processed');
    console.log('  themes        - List all themes');
    console.log('  by-theme      - Group blocks by theme');
    console.log('  stats         - Show statistics');
    console.log('  export        - Export organized content');
    console.log('  save          - Save current state');
    console.log('  quit          - Exit');
    console.log('');
  }

  async listBlocks(filter = null) {
    console.log('\n📋 Content Blocks:\n');
    this.blocks.forEach((block, i) => {
      if (!filter || filter(block)) {
        this.displayBlock(block, i);
      }
    });
  }

  async showBlock(index) {
    const block = this.blocks[index];
    if (!block) {
      console.log('❌ Block not found');
      return;
    }

    console.log('\n' + '='.repeat(60));
    console.log(`Block ${block.id} (Line ${block.lineStart + 1})`);
    console.log(`Speaker: ${block.speaker}`);
    console.log(`Themes: ${block.themes.join(', ') || 'None'}`);
    console.log(`Processed: ${block.processed ? 'Yes' : 'No'}`);
    console.log('='.repeat(60));
    console.log('\n' + block.text);
    console.log('\n' + '='.repeat(60));
  }

  async tagBlock(index) {
    const block = this.blocks[index];
    if (!block) {
      console.log('❌ Block not found');
      return;
    }

    console.log('\nAvailable themes:');
    this.themes.forEach((theme, i) => {
      const hasTheme = block.themes.includes(theme.name);
      console.log(`  ${hasTheme ? '✓' : ' '} ${i + 1}. ${theme.name}`);
    });
    console.log('  c. Custom theme');

    const input = await this.question('\nEnter theme numbers (comma-separated) or "c" for custom: ');
    
    if (input.trim() === 'c') {
      const customTheme = await this.question('Enter custom theme name: ');
      if (customTheme.trim()) {
        block.themes.push(customTheme.trim());
      }
    } else {
      const numbers = input.split(',').map(n => parseInt(n.trim()) - 1);
      block.themes = [];
      numbers.forEach(num => {
        if (num >= 0 && num < this.themes.length) {
          const theme = this.themes[num];
          if (!block.themes.includes(theme.name)) {
            block.themes.push(theme.name);
          }
        }
      });
    }

    console.log(`✅ Block tagged with: ${block.themes.join(', ')}`);
    this.save();
  }

  async groupByTheme() {
    const grouped = {};
    
    this.blocks.forEach(block => {
      if (block.themes.length === 0) {
        if (!grouped['Untagged']) {
          grouped['Untagged'] = [];
        }
        grouped['Untagged'].push(block);
      } else {
        block.themes.forEach(theme => {
          if (!grouped[theme]) {
            grouped[theme] = [];
          }
          grouped[theme].push(block);
        });
      }
    });

    console.log('\n📊 Blocks by Theme:\n');
    for (const [theme, blocks] of Object.entries(grouped)) {
      console.log(`${theme}: ${blocks.length} blocks`);
      blocks.slice(0, 3).forEach(block => {
        const preview = block.text.substring(0, 80).replace(/\n/g, ' ');
        console.log(`  • ${preview}...`);
      });
      if (blocks.length > 3) {
        console.log(`  ... and ${blocks.length - 3} more`);
      }
      console.log('');
    }
  }

  async showStats() {
    const stats = {
      total: this.blocks.length,
      processed: this.blocks.filter(b => b.processed).length,
      bySpeaker: {
        human: this.blocks.filter(b => b.speaker === 'human').length,
        ai: this.blocks.filter(b => b.speaker === 'ai').length,
        unknown: this.blocks.filter(b => b.speaker === 'unknown').length,
      },
      byTheme: {},
    };

    this.blocks.forEach(block => {
      if (block.themes.length === 0) {
        stats.byTheme['Untagged'] = (stats.byTheme['Untagged'] || 0) + 1;
      } else {
        block.themes.forEach(theme => {
          stats.byTheme[theme] = (stats.byTheme[theme] || 0) + 1;
        });
      }
    });

    console.log('\n📊 Statistics:\n');
    console.log(`Total blocks: ${stats.total}`);
    console.log(`Processed: ${stats.processed} (${Math.round((stats.processed / stats.total) * 100)}%)`);
    console.log(`\nBy Speaker:`);
    console.log(`  Human: ${stats.bySpeaker.human}`);
    console.log(`  AI: ${stats.bySpeaker.ai}`);
    console.log(`  Unknown: ${stats.bySpeaker.unknown}`);
    console.log(`\nBy Theme:`);
    for (const [theme, count] of Object.entries(stats.byTheme)) {
      console.log(`  ${theme}: ${count}`);
    }
  }

  async exportChapters() {
    const grouped = {};
    
    this.blocks.forEach(block => {
      if (block.themes.length === 0) {
        if (!grouped['Untagged']) {
          grouped['Untagged'] = [];
        }
        grouped['Untagged'].push(block);
      } else {
        // Use first theme as primary
        const primaryTheme = block.themes[0];
        if (!grouped[primaryTheme]) {
          grouped[primaryTheme] = [];
        }
        grouped[primaryTheme].push(block);
      }
    });

    if (!fs.existsSync(CHAPTERS_DIR)) {
      fs.mkdirSync(CHAPTERS_DIR, { recursive: true });
    }

    console.log('\n📝 Exporting chapters...\n');
    
    for (const [theme, blocks] of Object.entries(grouped)) {
      const slug = theme.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const chapterPath = path.join(CHAPTERS_DIR, `${slug}.md`);
      
      let content = `---\n`;
      content += `title: "${theme}"\n`;
      content += `slug: "${slug}"\n`;
      content += `status: "draft"\n`;
      content += `source: "${this.filename}"\n`;
      content += `created: "${new Date().toISOString().split('T')[0]}"\n`;
      content += `---\n\n`;
      content += `# ${theme}\n\n`;
      content += `*Generated from ${this.filename}*\n\n`;

      blocks.forEach(block => {
        const marker = {
          human: '●',
          ai: '○',
          unknown: '◐',
        }[block.speaker] || '◐';

        content += `${marker} ${block.text}\n\n`;
      });

      fs.writeFileSync(chapterPath, content);
      console.log(`  ✓ ${theme}: ${blocks.length} blocks → ${chapterPath}`);
    }

    console.log(`\n✅ Exported ${Object.keys(grouped).length} chapters`);
  }

  async run() {
    await this.load();

    console.log(`\n✨ Draft Organizer`);
    console.log(`📄 File: ${this.filename}`);
    console.log(`📊 Loaded ${this.blocks.length} blocks, ${this.themes.length} themes\n`);

    while (true) {
      await this.showMenu();
      const command = await this.question('> ');

      const parts = command.trim().split(' ');
      const cmd = parts[0].toLowerCase();
      const arg = parts[1];

      try {
        switch (cmd) {
          case 'list':
            await this.listBlocks();
            break;
          case 'show':
            if (arg) {
              await this.showBlock(parseInt(arg) - 1);
            } else {
              console.log('Usage: show [block-number]');
            }
            break;
          case 'tag':
            if (arg) {
              await this.tagBlock(parseInt(arg) - 1);
            } else {
              console.log('Usage: tag [block-number]');
            }
            break;
          case 'process':
            if (arg) {
              const block = this.blocks[parseInt(arg) - 1];
              if (block) {
                block.processed = true;
                console.log(`✅ Block ${block.id} marked as processed`);
                this.save();
              }
            } else {
              console.log('Usage: process [block-number]');
            }
            break;
          case 'themes':
            console.log('\n📋 Themes:');
            this.themes.forEach((theme, i) => {
              console.log(`  ${i + 1}. ${theme.name} (${theme.contentBlocks.length} blocks)`);
            });
            break;
          case 'by-theme':
            await this.groupByTheme();
            break;
          case 'stats':
            await this.showStats();
            break;
          case 'export':
            await this.exportChapters();
            break;
          case 'save':
            this.save();
            console.log('✅ State saved');
            break;
          case 'quit':
          case 'exit':
          case 'q':
            this.save();
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

// Main
const filename = process.argv[2];

if (!filename) {
  console.log('Usage: node scripts/draft-organizer.mjs [filename]');
  console.log('\nAvailable files:');
  const files = fs.readdirSync(DRAFTS_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'));
  files.forEach(f => console.log(`  - ${f}`));
  process.exit(1);
}

const organizer = new DraftOrganizer(filename);
organizer.run().catch(console.error);
