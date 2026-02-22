#!/usr/bin/env node
/**
 * Consolidate chapter-1, chapter-2, chapter-3 drafts into the chapter structure
 * Extracts key topics, keywords, and content from "slop" drafts
 * Run with: node scripts/consolidate-chapter-drafts.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const CHAPTERS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapters');
const OUTLINE_PATH = path.join(projectRoot, 'content', 'born-into-the-machine', 'chapter-outline.json');

function extractKeyTopics(content) {
  const topics = [];
  
  // Extract headings
  const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];
  headings.forEach(heading => {
    const text = heading.replace(/^#+\s+/, '').trim();
    if (text.length > 0 && text.length < 100) {
      topics.push(text);
    }
  });
  
  // Extract key phrases (quoted, bold, or emphasized)
  const phrases = [
    ...(content.match(/\*\*([^*]+)\*\*/g) || []).map(m => m.replace(/\*\*/g, '')),
    ...(content.match(/"([^"]{20,80})"/g) || []).map(m => m.replace(/"/g, '')),
    ...(content.match(/^[-*]\s+(.+)$/gm) || []).map(m => m.replace(/^[-*]\s+/, '')),
  ];
  
  phrases.forEach(phrase => {
    if (phrase.length > 15 && phrase.length < 100 && !topics.includes(phrase)) {
      topics.push(phrase);
    }
  });
  
  return topics.slice(0, 20); // Top 20 topics
}

function extractKeywords(content) {
  const keywords = new Set();
  
  // Common important terms
  const importantTerms = [
    'doomscroll', 'treadmill', 'burnout', 'velocity', 'acceleration',
    'slop', 'dead internet', 'live body', 'ai k-hole', 'synthetic',
    'infrastructure', 'commodity', 'intelligence', 'vectoral', 'miami',
    'capitalist realism', 'fisher', 'han', 'hinton', 'groys',
    'duchamp', 'lewitt', 'nano banana', 'sora', 'suno',
    'autonomy', 'toolkit', 'public sphere', 'visual essay', 'podcast',
  ];
  
  const lowerContent = content.toLowerCase();
  importantTerms.forEach(term => {
    if (lowerContent.includes(term.toLowerCase())) {
      keywords.add(term);
    }
  });
  
  // Extract capitalized phrases (likely concepts)
  const capitalized = content.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b/g) || [];
  capitalized.forEach(phrase => {
    if (phrase.length > 5 && phrase.length < 40) {
      keywords.add(phrase);
    }
  });
  
  return Array.from(keywords).slice(0, 30);
}

function analyzeChapterDraft(filename) {
  const filePath = path.join(DRAFTS_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const topics = extractKeyTopics(content);
  const keywords = extractKeywords(content);
  
  // Count content types
  const hasSlop = content.toLowerCase().includes('slop') || 
                  content.toLowerCase().includes('ai-generated') ||
                  content.match(/○/g)?.length > 0;
  
  const wordCount = content.split(/\s+/).length;
  const lines = content.split('\n').length;
  
  // Extract key scenes/moments (paragraphs with strong imagery)
  const paragraphs = content.split(/\n\n+/).filter(p => p.trim().length > 100);
  const keyMoments = paragraphs
    .filter(p => {
      const lower = p.toLowerCase();
      return lower.includes('remember') || 
             lower.includes('first time') ||
             lower.includes('when i') ||
             lower.includes('i felt') ||
             lower.includes('i realized') ||
             p.match(/[.!?]$/);
    })
    .slice(0, 10)
    .map(p => p.substring(0, 200).replace(/\n/g, ' ') + '...');
  
  return {
    filename,
    topics,
    keywords,
    keyMoments,
    wordCount,
    lines,
    hasSlop,
    content,
  };
}

function consolidate() {
  console.log('📚 Consolidating Chapter Drafts\n');
  
  const chapterDrafts = [
    'chapter-1-draft-dec28-migration.md',
    'chapter-2-draft-dec28.md',
    'chapter-3-draft-dec28.md',
  ];
  
  const analyses = {};
  
  // Analyze each draft
  chapterDrafts.forEach(filename => {
    if (fs.existsSync(path.join(DRAFTS_DIR, filename))) {
      console.log(`Analyzing ${filename}...`);
      analyses[filename] = analyzeChapterDraft(filename);
    }
  });
  
  // Load outline
  const outline = JSON.parse(fs.readFileSync(OUTLINE_PATH, 'utf-8'));
  
  // Map drafts to chapters (rough mapping)
  const draftToChapter = {
    'chapter-1-draft-dec28-migration.md': 1, // Introduction
    'chapter-2-draft-dec28.md': 2, // Dead Internet, Live Body -> Burnout/Velocity or Specter
    'chapter-3-draft-dec28.md': 3, // Slop and Sacrament -> Burnout/Velocity or Intelligence
  };
  
  // Update outline with extracted keywords and topics
  console.log('\n📝 Updating chapter outline with extracted content...\n');
  
  for (const [draftFile, chapterNum] of Object.entries(draftToChapter)) {
    if (analyses[draftFile]) {
      const analysis = analyses[draftFile];
      const chapter = outline.chapters.find(c => c.order === chapterNum);
      
      if (chapter) {
        // Merge keywords
        const existingKeywords = new Set(chapter.keywords || []);
        analysis.keywords.forEach(kw => existingKeywords.add(kw));
        chapter.keywords = Array.from(existingKeywords);
        
        // Add topics
        if (!chapter.topics) {
          chapter.topics = [];
        }
        chapter.topics = [...new Set([...chapter.topics, ...analysis.topics])];
        
        // Add key moments
        if (!chapter.keyMoments) {
          chapter.keyMoments = [];
        }
        chapter.keyMoments = analysis.keyMoments;
        
        // Add metadata
        chapter.draftSource = draftFile;
        chapter.draftWordCount = analysis.wordCount;
        chapter.draftLines = analysis.lines;
        chapter.hasSlop = analysis.hasSlop;
        
        console.log(`  ✓ Chapter ${chapterNum}: ${chapter.title}`);
        console.log(`    Keywords: ${chapter.keywords.length}, Topics: ${chapter.topics.length}, Moments: ${chapter.keyMoments.length}`);
      }
    }
  }
  
  // Save updated outline
  outline.lastModified = new Date().toISOString().split('T')[0];
  fs.writeFileSync(OUTLINE_PATH, JSON.stringify(outline, null, 2));
  console.log(`\n✅ Updated ${OUTLINE_PATH}\n`);
  
  // Create summary file
  const summaryPath = path.join(DRAFTS_DIR, 'chapter-drafts-analysis.json');
  fs.writeFileSync(summaryPath, JSON.stringify({
    analyzed: new Date().toISOString(),
    analyses: Object.fromEntries(
      Object.entries(analyses).map(([file, analysis]) => [
        file,
        {
          topics: analysis.topics,
          keywords: analysis.keywords,
          keyMoments: analysis.keyMoments,
          wordCount: analysis.wordCount,
          lines: analysis.lines,
          hasSlop: analysis.hasSlop,
        },
      ])
    ),
  }, null, 2));
  
  console.log(`✅ Created analysis summary: ${summaryPath}\n`);
  
  // Generate consolidated content previews
  console.log('📋 Generating content previews...\n');
  
  for (const [draftFile, chapterNum] of Object.entries(draftToChapter)) {
    if (analyses[draftFile]) {
      const analysis = analyses[draftFile];
      const chapter = outline.chapters.find(c => c.order === chapterNum);
      
      if (chapter) {
        const previewPath = path.join(CHAPTERS_DIR, `${String(chapterNum).padStart(2, '0')}-${chapter.slug}-preview.md`);
        
        let preview = `---\n`;
        preview += `title: "${chapter.title} - Preview"\n`;
        preview += `slug: "${chapter.slug}-preview"\n`;
        preview += `order: ${chapterNum}\n`;
        preview += `status: "preview"\n`;
        preview += `source: "${draftFile}"\n`;
        preview += `hasSlop: ${analysis.hasSlop}\n`;
        preview += `---\n\n`;
        preview += `# ${chapter.title} - Content Preview\n\n`;
        preview += `*This is a preview of content from ${draftFile}*\n\n`;
        preview += `**Status:** Contains ${analysis.hasSlop ? 'AI-generated "slop" content' : 'mixed content'}\n\n`;
        preview += `**Word Count:** ${analysis.wordCount} words\n`;
        preview += `**Lines:** ${analysis.lines} lines\n\n`;
        
        preview += `## Key Topics\n\n`;
        analysis.topics.slice(0, 10).forEach(topic => {
          preview += `- ${topic}\n`;
        });
        
        preview += `\n## Keywords\n\n`;
        analysis.keywords.slice(0, 15).forEach(kw => {
          preview += `\`${kw}\` `;
        });
        
        preview += `\n\n## Key Moments\n\n`;
        analysis.keyMoments.forEach((moment, i) => {
          preview += `${i + 1}. ${moment}\n\n`;
        });
        
        preview += `\n## Full Content\n\n`;
        preview += `<details>\n<summary>View full draft content</summary>\n\n`;
        preview += `\`\`\`\n${analysis.content}\n\`\`\`\n\n`;
        preview += `</details>\n`;
        
        fs.writeFileSync(previewPath, preview);
        console.log(`  ✓ Created preview: ${previewPath}`);
      }
    }
  }
  
  console.log('\n✨ Consolidation complete!\n');
  console.log('Next steps:');
  console.log('1. Review updated chapter-outline.json');
  console.log('2. Check chapter preview files');
  console.log('3. Use extracted keywords/topics to refine chapters');
}

consolidate();
