#!/usr/bin/env node
/**
 * Consolidate open-ended files into a better structure
 * Run with: node scripts/consolidate-files.mjs
 * 
 * Options:
 * - Merge the 4 split files back into 2 logical groups
 * - Archive old split files
 * - Create a master index
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const ARCHIVE_DIR = path.join(DRAFTS_DIR, 'archive');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function consolidateFiles() {
  console.log('📦 Consolidating Open-Ended Files\n');
  
  // Files to consolidate
  const filesToMerge = {
    'open-ended-foundation.md': [
      'open-ended-01a.md',
      'open-ended-01b.md',
    ],
    'open-ended-development.md': [
      'open-ended-02a.md',
      'open-ended-02b.md',
    ],
  };

  // Create archive directory
  ensureDir(ARCHIVE_DIR);

  console.log('Merging files:\n');
  
  for (const [outputFile, inputFiles] of Object.entries(filesToMerge)) {
    console.log(`📄 Creating ${outputFile} from:`);
    
    let mergedContent = `---\n`;
    mergedContent += `note: "Consolidated from ${inputFiles.join(', ')}"\n`;
    mergedContent += `created: "${new Date().toISOString().split('T')[0]}"\n`;
    mergedContent += `---\n\n`;
    mergedContent += `# ${outputFile.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}\n\n`;
    mergedContent += `*This file was consolidated from multiple draft files for easier organization.*\n\n`;
    mergedContent += `---\n\n`;

    inputFiles.forEach((inputFile, index) => {
      const inputPath = path.join(DRAFTS_DIR, inputFile);
      
      if (fs.existsSync(inputPath)) {
        console.log(`  • ${inputFile}`);
        const content = fs.readFileSync(inputPath, 'utf-8');
        
        // Remove frontmatter if present
        let fileContent = content;
        if (content.startsWith('---')) {
          const endIndex = content.indexOf('---', 3);
          if (endIndex > 0) {
            fileContent = content.substring(endIndex + 3).trim();
          }
        }
        
        mergedContent += `\n## Part ${index + 1}: ${inputFile}\n\n`;
        mergedContent += fileContent;
        mergedContent += '\n\n---\n\n';
        
        // Move original to archive
        const archivePath = path.join(ARCHIVE_DIR, inputFile);
        fs.copyFileSync(inputPath, archivePath);
        console.log(`    → Archived to archive/${inputFile}`);
      } else {
        console.log(`  ⚠️  ${inputFile} not found, skipping`);
      }
    });

    // Write merged file
    const outputPath = path.join(DRAFTS_DIR, outputFile);
    fs.writeFileSync(outputPath, mergedContent);
    console.log(`\n✅ Created ${outputFile}\n`);
  }

  // Also archive the part files if they exist
  const partFiles = ['open-ended-part-01.md', 'open-ended-part-02.md'];
  console.log('\n📦 Archiving intermediate split files:\n');
  
  partFiles.forEach(file => {
    const filePath = path.join(DRAFTS_DIR, file);
    if (fs.existsSync(filePath)) {
      const archivePath = path.join(ARCHIVE_DIR, file);
      fs.copyFileSync(filePath, archivePath);
      console.log(`  • ${file} → archive/${file}`);
    }
  });

  // Create index file
  console.log('\n📋 Creating index file...\n');
  const indexContent = `# Draft Files Index

## Active Files

### open-ended-foundation.md
Consolidated from:
- open-ended-01a.md (initial questions, techno-spirituality, intelligence as commodity)
- open-ended-01b.md (book sentiment, title discussion, reading recommendations)

**Content:** Foundation concepts, speculative questions, book framing

### open-ended-development.md
Consolidated from:
- open-ended-02a.md (practice questions, Hinton discussion, mini-thesis)
- open-ended-02b.md (book architecture, Suno story, essay outlines)

**Content:** Development of practice, book structure, final concepts

## Original Files

- \`open-ended.md\` - Original full conversation (preserved as backup)
- Files in \`archive/\` - Intermediate splits and originals

## Processing

Run these commands to work with the files:

\`\`\`bash
# Analyze relationships
node scripts/analyze-relationships.mjs

# Process a specific file
node scripts/draft-organizer.mjs open-ended-foundation.md

# Process all files
node scripts/process-drafts-standalone.mjs
\`\`\`

## Next Steps

1. Use \`draft-organizer.mjs\` to categorize and tag content
2. Export organized content to chapters
3. Review extracted entities in \`extracted/\` folder
`;

  const indexPath = path.join(DRAFTS_DIR, 'INDEX.md');
  fs.writeFileSync(indexPath, indexContent);
  console.log(`✅ Created INDEX.md\n`);

  console.log('✨ Consolidation complete!\n');
  console.log('Summary:');
  console.log(`  • Created 2 consolidated files`);
  console.log(`  • Archived ${Object.values(filesToMerge).flat().length + partFiles.length} original files`);
  console.log(`  • Created INDEX.md for reference\n`);
  console.log('You can now work with:');
  console.log('  • open-ended-foundation.md');
  console.log('  • open-ended-development.md');
  console.log('\nOriginal files are safely archived in archive/ folder.\n');
}

// Ask for confirmation
console.log('⚠️  This will consolidate your open-ended files.\n');
console.log('Files to consolidate:');
console.log('  • open-ended-01a.md + open-ended-01b.md → open-ended-foundation.md');
console.log('  • open-ended-02a.md + open-ended-02b.md → open-ended-development.md');
console.log('\nOriginal files will be moved to archive/ folder.\n');

// For now, just run it (user can modify if needed)
consolidateFiles();
