#!/usr/bin/env node
/**
 * Analyze relationships between draft files
 * Run with: node scripts/analyze-relationships.mjs
 * 
 * Shows:
 * - Shared themes across files
 * - Shared entities (writers, books, artworks)
 * - Content overlap
 * - Recommendations for merging/organizing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRAFTS_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'drafts');
const EXTRACTED_DIR = path.join(projectRoot, 'content', 'born-into-the-machine', 'extracted');

function getFiles() {
  return fs.readdirSync(DRAFTS_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.') && f.includes('open-ended'))
    .sort();
}

function loadExtractedEntities(filename) {
  const base = filename.replace('.md', '');
  const entities = {
    vocabulary: [],
    writers: [],
    books: [],
    artworks: [],
  };

  try {
    const vocabPath = path.join(EXTRACTED_DIR, `vocabulary-${base}.md`);
    if (fs.existsSync(vocabPath)) {
      const content = fs.readFileSync(vocabPath, 'utf-8');
      const matches = content.match(/^## (.+)$/gm);
      if (matches) {
        entities.vocabulary = matches.map(m => m.replace(/^## /, ''));
      }
    }
  } catch (e) {}

  try {
    const writersPath = path.join(EXTRACTED_DIR, `writers-${base}.md`);
    if (fs.existsSync(writersPath)) {
      const content = fs.readFileSync(writersPath, 'utf-8');
      const matches = content.match(/^## (.+)$/gm);
      if (matches) {
        entities.writers = matches.map(m => m.replace(/^## /, ''));
      }
    }
  } catch (e) {}

  try {
    const booksPath = path.join(EXTRACTED_DIR, `books-${base}.md`);
    if (fs.existsSync(booksPath)) {
      const content = fs.readFileSync(booksPath, 'utf-8');
      const matches = content.match(/^## (.+)$/gm);
      if (matches) {
        entities.books = matches.map(m => m.replace(/^## /, ''));
      }
    }
  } catch (e) {}

  try {
    const artworksPath = path.join(EXTRACTED_DIR, `artworks-${base}.md`);
    if (fs.existsSync(artworksPath)) {
      const content = fs.readFileSync(artworksPath, 'utf-8');
      const matches = content.match(/^## (.+)$/gm);
      if (matches) {
        entities.artworks = matches.map(m => m.replace(/^## /, ''));
      }
    }
  } catch (e) {}

  return entities;
}

function findOverlaps(items1, items2) {
  const set1 = new Set(items1.map(i => i.toLowerCase()));
  const set2 = new Set(items2.map(i => i.toLowerCase()));
  const overlaps = [];
  
  set1.forEach(item => {
    if (set2.has(item)) {
      overlaps.push(item);
    }
  });
  
  return overlaps;
}

function analyzeRelationships() {
  const files = getFiles();
  
  console.log('🔗 Analyzing Relationships Between Draft Files\n');
  console.log(`Found ${files.length} files:\n`);
  files.forEach((f, i) => console.log(`  ${i + 1}. ${f}`));
  console.log('');

  // Load all entities
  const fileData = files.map(filename => ({
    filename,
    entities: loadExtractedEntities(filename),
    size: fs.statSync(path.join(DRAFTS_DIR, filename)).size,
  }));

  // Find shared entities
  console.log('='.repeat(60));
  console.log('📊 SHARED ENTITIES');
  console.log('='.repeat(60));

  // Shared writers
  console.log('\n👥 Shared Writers:\n');
  const allWriters = {};
  fileData.forEach(file => {
    file.entities.writers.forEach(writer => {
      const key = writer.toLowerCase();
      if (!allWriters[key]) {
        allWriters[key] = { name: writer, files: [] };
      }
      allWriters[key].files.push(file.filename);
    });
  });

  const sharedWriters = Object.values(allWriters).filter(w => w.files.length > 1);
  if (sharedWriters.length > 0) {
    sharedWriters.forEach(writer => {
      console.log(`  • ${writer.name}`);
      console.log(`    Found in: ${writer.files.join(', ')}`);
    });
  } else {
    console.log('  (No shared writers found)');
  }

  // Shared books
  console.log('\n📚 Shared Books:\n');
  const allBooks = {};
  fileData.forEach(file => {
    file.entities.books.forEach(book => {
      const key = book.toLowerCase();
      if (!allBooks[key]) {
        allBooks[key] = { name: book, files: [] };
      }
      allBooks[key].files.push(file.filename);
    });
  });

  const sharedBooks = Object.values(allBooks).filter(b => b.files.length > 1);
  if (sharedBooks.length > 0) {
    sharedBooks.slice(0, 10).forEach(book => {
      console.log(`  • ${book.name}`);
      console.log(`    Found in: ${book.files.join(', ')}`);
    });
    if (sharedBooks.length > 10) {
      console.log(`  ... and ${sharedBooks.length - 10} more`);
    }
  } else {
    console.log('  (No shared books found)');
  }

  // Shared vocabulary
  console.log('\n💬 Shared Vocabulary:\n');
  const allVocab = {};
  fileData.forEach(file => {
    file.entities.vocabulary.forEach(term => {
      const key = term.toLowerCase();
      if (!allVocab[key]) {
        allVocab[key] = { term, files: [] };
      }
      allVocab[key].files.push(file.filename);
    });
  });

  const sharedVocab = Object.values(allVocab).filter(v => v.files.length > 1);
  if (sharedVocab.length > 0) {
    sharedVocab.slice(0, 10).forEach(vocab => {
      console.log(`  • ${vocab.term}`);
      console.log(`    Found in: ${vocab.files.join(', ')}`);
    });
    if (sharedVocab.length > 10) {
      console.log(`  ... and ${sharedVocab.length - 10} more`);
    }
  } else {
    console.log('  (No shared vocabulary found)');
  }

  // File size comparison
  console.log('\n' + '='.repeat(60));
  console.log('📏 FILE SIZES');
  console.log('='.repeat(60));
  fileData.forEach(file => {
    const kb = (file.size / 1024).toFixed(1);
    console.log(`  ${file.filename}: ${kb} KB`);
  });

  // Recommendations
  console.log('\n' + '='.repeat(60));
  console.log('💡 RECOMMENDATIONS');
  console.log('='.repeat(60));

  // Check if files should be merged
  const smallFiles = fileData.filter(f => f.size < 20 * 1024); // Less than 20KB
  if (smallFiles.length > 0) {
    console.log('\n📌 Consider merging small files:');
    smallFiles.forEach(file => {
      console.log(`  • ${file.filename} (${(file.size / 1024).toFixed(1)} KB)`);
    });
    console.log('\n  These files might be better organized as sections within larger files.');
  }

  // Check for related files
  console.log('\n📌 Files with strong relationships:');
  for (let i = 0; i < fileData.length; i++) {
    for (let j = i + 1; j < fileData.length; j++) {
      const file1 = fileData[i];
      const file2 = fileData[j];
      
      const sharedWritersCount = findOverlaps(file1.entities.writers, file2.entities.writers).length;
      const sharedBooksCount = findOverlaps(file1.entities.books, file2.entities.books).length;
      const sharedVocabCount = findOverlaps(file1.entities.vocabulary, file2.entities.vocabulary).length;
      
      const totalShared = sharedWritersCount + sharedBooksCount + sharedVocabCount;
      
      if (totalShared > 5) {
        console.log(`  • ${file1.filename} ↔ ${file2.filename}`);
        console.log(`    ${sharedWritersCount} writers, ${sharedBooksCount} books, ${sharedVocabCount} terms`);
      }
    }
  }

  // Suggest organization
  console.log('\n📌 Suggested organization:');
  console.log('  Group files by shared themes/entities:');
  
  const groups = [];
  const processed = new Set();
  
  fileData.forEach(file => {
    if (processed.has(file.filename)) return;
    
    const group = [file.filename];
    processed.add(file.filename);
    
    fileData.forEach(otherFile => {
      if (processed.has(otherFile.filename)) return;
      
      const shared = findOverlaps(file.entities.writers, otherFile.entities.writers).length +
                    findOverlaps(file.entities.books, otherFile.entities.books).length +
                    findOverlaps(file.entities.vocabulary, otherFile.entities.vocabulary).length;
      
      if (shared > 3) {
        group.push(otherFile.filename);
        processed.add(otherFile.filename);
      }
    });
    
    if (group.length > 1) {
      groups.push(group);
    }
  });
  
  if (groups.length > 0) {
    groups.forEach((group, i) => {
      console.log(`\n  Group ${i + 1}:`);
      group.forEach(file => console.log(`    • ${file}`));
    });
  } else {
    console.log('  Files are relatively independent - current organization is fine.');
  }

  console.log('\n✨ Analysis complete!\n');
}

analyzeRelationships();
