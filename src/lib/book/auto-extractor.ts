import fs from 'fs';
import path from 'path';
import { DraftAnalysis, VocabularyItem, WriterReference, BookReference, ArtworkReference } from './analysis-types';
import { analyzeDraftFile } from './draft-analyzer';

const EXTRACTED_DIR = path.join(
  process.cwd(),
  'content',
  'born-into-the-machine',
  'extracted'
);

/**
 * Ensure extracted directory exists
 */
function ensureExtractedDir() {
  if (!fs.existsSync(EXTRACTED_DIR)) {
    fs.mkdirSync(EXTRACTED_DIR, { recursive: true });
  }
}

/**
 * Generate vocabulary markdown file
 */
export function generateVocabularyFile(vocabulary: VocabularyItem[]): string {
  ensureExtractedDir();
  
  let content = `# Vocabulary\n\n`;
  content += `*Auto-extracted from draft conversations*\n\n`;
  content += `Total terms: ${vocabulary.length}\n\n---\n\n`;

  // Group by first letter
  const grouped = vocabulary.reduce((acc, item) => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {} as Record<string, VocabularyItem[]>);

  for (const [letter, items] of Object.entries(grouped).sort()) {
    content += `## ${letter}\n\n`;
    for (const item of items.sort((a, b) => a.term.localeCompare(b.term))) {
      content += `### ${item.term}\n\n`;
      if (item.definition) {
        content += `**Definition:** ${item.definition}\n\n`;
      }
      if (item.context) {
        content += `**Context:** ${item.context.substring(0, 200)}${item.context.length > 200 ? '...' : ''}\n\n`;
      }
      if (item.themes.length > 0) {
        content += `**Themes:** ${item.themes.join(', ')}\n\n`;
      }
      content += `---\n\n`;
    }
  }

  return content;
}

/**
 * Generate writers markdown file
 */
export function generateWritersFile(writers: WriterReference[]): string {
  ensureExtractedDir();
  
  let content = `# Writers & Thinkers\n\n`;
  content += `*Auto-extracted from draft conversations*\n\n`;
  content += `Total writers: ${writers.length}\n\n---\n\n`;

  for (const writer of writers.sort((a, b) => a.name.localeCompare(b.name))) {
    content += `## ${writer.name}\n\n`;
    content += `**Mentions:** ${writer.mentions.length}\n\n`;
    
    if (writer.works && writer.works.length > 0) {
      content += `**Works mentioned:**\n`;
      for (const work of writer.works) {
        content += `- ${work}\n`;
      }
      content += `\n`;
    }

    content += `### Mentions\n\n`;
    for (const mention of writer.mentions.slice(0, 5)) { // Limit to first 5
      content += `> ${mention.context.substring(0, 300)}${mention.context.length > 300 ? '...' : ''}\n\n`;
      if (mention.themes.length > 0) {
        content += `*Themes: ${mention.themes.join(', ')}*\n\n`;
      }
      content += `---\n\n`;
    }
    
    if (writer.mentions.length > 5) {
      content += `*... and ${writer.mentions.length - 5} more mentions*\n\n`;
    }
  }

  return content;
}

/**
 * Generate books markdown file
 */
export function generateBooksFile(books: BookReference[]): string {
  ensureExtractedDir();
  
  let content = `# Books & References\n\n`;
  content += `*Auto-extracted from draft conversations*\n\n`;
  content += `Total books: ${books.length}\n\n---\n\n`;

  for (const book of books.sort((a, b) => a.title.localeCompare(b.title))) {
    content += `## ${book.title}\n\n`;
    if (book.author) {
      content += `**Author:** ${book.author}\n\n`;
    }
    content += `**Context:** ${book.context.substring(0, 300)}${book.context.length > 300 ? '...' : ''}\n\n`;
    if (book.themes.length > 0) {
      content += `**Themes:** ${book.themes.join(', ')}\n\n`;
    }
    if (book.mentionedBy) {
      content += `**Mentioned by:** ${book.mentionedBy}\n\n`;
    }
    content += `---\n\n`;
  }

  return content;
}

/**
 * Generate artworks markdown file
 */
export function generateArtworksFile(artworks: ArtworkReference[]): string {
  ensureExtractedDir();
  
  let content = `# Artworks & Installation Concepts\n\n`;
  content += `*Auto-extracted from draft conversations*\n\n`;
  content += `Total artworks/concepts: ${artworks.length}\n\n---\n\n`;

  // Group by type
  const byType = artworks.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, ArtworkReference[]>);

  for (const [type, items] of Object.entries(byType)) {
    content += `## ${type.charAt(0).toUpperCase() + type.slice(1)}\n\n`;
    
    for (const artwork of items) {
      content += `### ${artwork.title}\n\n`;
      content += `${artwork.description}\n\n`;
      if (artwork.materials && artwork.materials.length > 0) {
        content += `**Materials:** ${artwork.materials.join(', ')}\n\n`;
      }
      if (artwork.concepts && artwork.concepts.length > 0) {
        content += `**Concepts:** ${artwork.concepts.join(', ')}\n\n`;
      }
      if (artwork.linkToExisting) {
        content += `**Link to existing artwork:** ${artwork.linkToExisting}\n\n`;
      }
      if (artwork.themes.length > 0) {
        content += `**Themes:** ${artwork.themes.join(', ')}\n\n`;
      }
      content += `---\n\n`;
    }
  }

  return content;
}

/**
 * Auto-extract all entities from a draft file and save to markdown files
 */
export async function autoExtractDraft(filename: string): Promise<void> {
  ensureExtractedDir();

  const analysis = await analyzeDraftFile(filename);

  // Generate and save files
  const vocabularyContent = generateVocabularyFile(analysis.extracted.vocabulary);
  fs.writeFileSync(
    path.join(EXTRACTED_DIR, 'vocabulary.md'),
    vocabularyContent,
    'utf-8'
  );

  const writersContent = generateWritersFile(analysis.extracted.writers);
  fs.writeFileSync(
    path.join(EXTRACTED_DIR, 'writers.md'),
    writersContent,
    'utf-8'
  );

  const booksContent = generateBooksFile(analysis.extracted.books);
  fs.writeFileSync(
    path.join(EXTRACTED_DIR, 'books.md'),
    booksContent,
    'utf-8'
  );

  const artworksContent = generateArtworksFile(analysis.extracted.artworks);
  fs.writeFileSync(
    path.join(EXTRACTED_DIR, 'artworks.md'),
    artworksContent,
    'utf-8'
  );
}
