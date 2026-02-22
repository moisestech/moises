import fs from 'fs';
import path from 'path';
import {
  DraftAnalysis,
  ContentBlock,
  Speaker,
  ContentType,
  VocabularyItem,
  WriterReference,
  BookReference,
  ArtworkReference,
  ThemeSection,
  Quote,
} from './analysis-types';

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
    /^Answer to feedback from GPT/i, // User responses to GPT
  ],
  ai: [
    /^GPT\s*$/i,
    /^ChatGPT/i,
    /^Feedback GPT/i,
    /^GPT (Answers?|Feedback|Question|Summarizing)/i,
    /^GPT (Question|Feedback|Answers?|Summarizing):/i,
  ],
};

const THEME_KEYWORDS: Record<string, string[]> = {
  'intelligence-as-commodity': [
    'intelligence as commodity',
    'prompt economics',
    'cognitive commodities',
    'prompt capital',
    'cognitive underclass',
    'intelligence utility',
  ],
  'dead-internet-live-body': [
    'dead internet',
    'live body',
    'ai k-hole',
    'synthetic flow',
    'doom-creating',
    'bot talking to bot',
  ],
  'duchamp-for-you-page': [
    'duchamp',
    'sol lewitt',
    'readymade',
    'instruction piece',
    'nano banana',
    'sora2',
    'for-you page',
  ],
  'techno-spiritual-churches': [
    'techno-spiritual',
    'ai pastor',
    'algorithmic churches',
    'subscription salvation',
    'liturgical ux',
    'simulation chapel',
  ],
  'kids-as-luxury': [
    'kids as luxury',
    'premium childhood',
    'algorithmic parenting',
    'ubi nursery',
    'reproduction gap',
  ],
  'attention-castes': [
    'attention castes',
    'brainrot',
    'ai-slop',
    'content blur',
    'aesthetic hyper-inflation',
  ],
  'velocity-acceleration': [
    'velocity',
    'acceleration',
    'speed',
    'futurism',
    'technological acceleration',
  ],
  'aesthetics-shield-weapon': [
    'aesthetics as shield',
    'aesthetics as weapon',
    'aesthetics digest',
    'metabolize velocity',
  ],
};

export async function analyzeDraftFile(filename: string): Promise<DraftAnalysis> {
  const filePath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'drafts',
    filename
  );

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const contentBlocks = extractContentBlocks(content, lines);
  const speakers = categorizeBySpeaker(contentBlocks);
  const vocabulary = extractVocabulary(contentBlocks, lines);
  const writers = extractWriters(contentBlocks, lines);
  const books = extractBooks(contentBlocks, lines);
  const artworks = extractArtworks(contentBlocks, lines);
  const themes = extractThemes(contentBlocks);
  const quotes = extractQuotes(contentBlocks, lines);

  const processedCount = contentBlocks.filter(b => b.processed !== 'unprocessed').length;
  const estimatedProgress = contentBlocks.length > 0
    ? (processedCount / contentBlocks.length) * 100
    : 0;

  return {
    metadata: {
      filename,
      totalLines: lines.length,
      totalBlocks: contentBlocks.length,
      estimatedProgress,
      lastAnalyzed: new Date(),
    },
    speakers,
    extracted: {
      vocabulary,
      writers,
      books,
      artworks,
    },
    themes,
    quotes,
    contentBlocks,
  };
}

function extractContentBlocks(content: string, lines: string[]): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let currentBlock: Partial<ContentBlock> | null = null;
  let blockId = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if this line starts a new speaker block
    let speaker: Speaker | null = null;
    let contentType: ContentType = 'other';
    let originalFormat = '';

    for (const [patternSpeaker, patterns] of Object.entries(SPEAKER_PATTERNS)) {
      for (const pattern of patterns) {
        if (pattern.test(trimmed)) {
          speaker = patternSpeaker as Speaker;
          originalFormat = trimmed;
          
          // Determine content type
          if (patternSpeaker === 'human') {
            if (/Question/i.test(trimmed)) {
              contentType = 'question';
            } else if (/Quote/i.test(trimmed)) {
              contentType = 'quote';
            } else {
              contentType = 'answer';
            }
          } else {
            contentType = 'answer';
          }
          break;
        }
      }
      if (speaker) break;
    }

    if (speaker) {
      // Save previous block
      if (currentBlock && currentBlock.text) {
        blocks.push({
          id: `block-${blockId++}`,
          text: currentBlock.text.trim(),
          speaker: currentBlock.speaker || 'unknown',
          type: currentBlock.type || 'other',
          lineStart: currentBlock.lineStart || 0,
          lineEnd: i - 1,
          themes: currentBlock.themes || [],
          processed: 'unprocessed',
          metadata: {
            originalFormat: currentBlock.metadata?.originalFormat,
          },
        });
      }

      // Start new block
      currentBlock = {
        speaker,
        type: contentType,
        lineStart: i,
        text: '',
        themes: [],
        metadata: { originalFormat },
      };
    } else if (currentBlock) {
      // Continue current block
      currentBlock.text += (currentBlock.text ? '\n' : '') + line;
    } else {
      // No current block, might be metadata or empty line
      // For files with few markers, try to infer speaker from context
      // Skip headers and empty lines
      if (trimmed && !trimmed.match(/^#+\s/) && trimmed.length > 0) {
        // Try to infer speaker from content patterns
        let inferredSpeaker: Speaker = 'unknown';
        
        // Patterns that suggest human voice
        if (trimmed.match(/^(I|I'm|I've|I think|I feel|for me|my)/i)) {
          inferredSpeaker = 'human';
        }
        // Patterns that suggest AI voice
        else if (trimmed.match(/^(Let's|Here's|You can|This is|Think of)/i) && 
                 trimmed.length > 50) {
          inferredSpeaker = 'ai';
        }
        
        currentBlock = {
          speaker: inferredSpeaker,
          type: 'other',
          lineStart: i,
          text: line,
          themes: [],
        };
      }
    }
  }

  // Save last block
  if (currentBlock && currentBlock.text) {
    blocks.push({
      id: `block-${blockId++}`,
      text: currentBlock.text.trim(),
      speaker: currentBlock.speaker || 'unknown',
      type: currentBlock.type || 'other',
      lineStart: currentBlock.lineStart || 0,
      lineEnd: lines.length - 1,
      themes: currentBlock.themes || [],
      processed: 'unprocessed',
      metadata: {
        originalFormat: currentBlock.metadata?.originalFormat,
      },
    });
  }

  return blocks;
}

function categorizeBySpeaker(blocks: ContentBlock[]) {
  return {
    human: blocks.filter(b => b.speaker === 'human'),
    ai: blocks.filter(b => b.speaker === 'ai'),
    unknown: blocks.filter(b => b.speaker === 'unknown'),
  };
}

function extractVocabulary(blocks: ContentBlock[], lines: string[]): VocabularyItem[] {
  const vocabulary: VocabularyItem[] = [];
  const seen = new Set<string>();

  for (const block of blocks) {
    const text = block.text.toLowerCase();
    
    // Pattern: "X is Y" or "X means Y" or "X: Y"
    const definitionPatterns = [
      /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+is\s+(.+?)(?:\.|$)/gi,
      /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+means\s+(.+?)(?:\.|$)/gi,
      /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*):\s*(.+?)(?:\.|$)/gi,
    ];

    for (const pattern of definitionPatterns) {
      let match;
      while ((match = pattern.exec(block.text)) !== null) {
        const term = match[1].trim();
        const definition = match[2].trim();
        
        if (!seen.has(term.toLowerCase()) && term.length > 2) {
          seen.add(term.toLowerCase());
          vocabulary.push({
            term,
            definition,
            context: block.text.substring(Math.max(0, match.index - 50), match.index + match[0].length + 50),
            lineNumber: block.lineStart,
            themes: block.themes,
          });
        }
      }
    }

    // Extract capitalized terms (potential concepts)
    const capitalizedTerms = block.text.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b/g);
    if (capitalizedTerms) {
      for (const term of capitalizedTerms) {
        if (!seen.has(term.toLowerCase()) && 
            term.length > 3 && 
            !['The', 'This', 'That', 'When', 'What', 'How', 'Why'].includes(term)) {
          seen.add(term.toLowerCase());
          vocabulary.push({
            term,
            context: block.text,
            lineNumber: block.lineStart,
            themes: block.themes,
          });
        }
      }
    }
  }

  return vocabulary;
}

function extractWriters(blocks: ContentBlock[], lines: string[]): WriterReference[] {
  const writers = new Map<string, WriterReference>();
  
  // Known writers from the draft
  const knownWriters = [
    'Duchamp', 'Sol LeWitt', 'Fisher', 'Mark Fisher', 'Hinton', 'Geoffrey Hinton',
    'Wark', 'McKenzie Wark', 'Citarella', 'Joshua Citarella', 'Lenin', 'Vladimir Lenin',
    'Liu', 'Catherine Liu', 'Steyerl', 'Hito Steyerl', 'Han', 'Byung-Chul Han',
    'Stiegler', 'Bernard Stiegler',
  ];

  for (const block of blocks) {
    for (const writer of knownWriters) {
      const regex = new RegExp(`\\b${writer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      if (regex.test(block.text)) {
        if (!writers.has(writer)) {
          writers.set(writer, {
            name: writer,
            mentions: [],
          });
        }
        
        const writerRef = writers.get(writer)!;
        writerRef.mentions.push({
          context: block.text,
          lineNumber: block.lineStart,
          themes: block.themes,
        });
      }
    }
  }

  return Array.from(writers.values());
}

function extractBooks(blocks: ContentBlock[], lines: string[]): BookReference[] {
  const books: BookReference[] = [];
  const seen = new Set<string>();

  // Pattern: "Title" by Author or "Title – Author"
  const bookPatterns = [
    /"([^"]+)"\s+(?:by|–|-)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/gi,
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+–\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/gi,
  ];

  for (const block of blocks) {
    for (const pattern of bookPatterns) {
      let match;
      while ((match = pattern.exec(block.text)) !== null) {
        const title = match[1].trim();
        const author = match[2]?.trim();
        
        if (!seen.has(title.toLowerCase())) {
          seen.add(title.toLowerCase());
          books.push({
            title,
            author,
            context: block.text,
            lineNumber: block.lineStart,
            themes: block.themes,
          });
        }
      }
    }
  }

  return books;
}

function extractArtworks(blocks: ContentBlock[], lines: string[]): ArtworkReference[] {
  const artworks: ArtworkReference[] = [];
  
  // Patterns for installation ideas
  const installationPatterns = [
    /Installation sketch:?\s*(.+?)(?:\n|$)/gi,
    /Object ideas:?\s*(.+?)(?:\n|$)/gi,
    /"([^"]+)"\s+(?:installation|artwork|piece)/gi,
  ];

  for (const block of blocks) {
    // Check for installation/artwork mentions
    if (block.text.match(/installation|artwork|piece|sculpture|work/i)) {
      const installationMatch = block.text.match(/(?:Installation|Artwork|Piece):\s*(.+?)(?:\.|$)/i);
      if (installationMatch) {
        artworks.push({
          title: installationMatch[1].trim(),
          type: 'concept',
          description: block.text,
          context: block.text,
          lineNumber: block.lineStart,
          themes: block.themes,
        });
      }
    }

    // Extract specific artwork concepts mentioned
    const artworkConcepts = [
      'Simulation Chapel',
      'Prompt Seminary',
      'Brainrot Altar',
      'UBI Nursery',
      'Catalog of Possible Churches',
      'Doomscrolling Treadmill',
      'Smart Shoppers',
    ];

    for (const concept of artworkConcepts) {
      if (block.text.includes(concept)) {
        artworks.push({
          title: concept,
          type: 'concept',
          description: block.text,
          context: block.text,
          lineNumber: block.lineStart,
          themes: block.themes,
        });
      }
    }
  }

  return artworks;
}

function extractThemes(blocks: ContentBlock[]): ThemeSection[] {
  const themeMap = new Map<string, ThemeSection>();

  // Initialize themes
  for (const [themeId, keywords] of Object.entries(THEME_KEYWORDS)) {
    themeMap.set(themeId, {
      id: themeId,
      name: themeId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      contentBlocks: [],
      keywords,
    });
  }

  // Assign blocks to themes based on keyword matching
  for (const block of blocks) {
    const blockText = block.text.toLowerCase();
    
    for (const [themeId, keywords] of Object.entries(THEME_KEYWORDS)) {
      for (const keyword of keywords) {
        if (blockText.includes(keyword.toLowerCase())) {
          const theme = themeMap.get(themeId)!;
          if (!theme.contentBlocks.includes(block.id)) {
            theme.contentBlocks.push(block.id);
            block.themes.push(themeId);
          }
          break;
        }
      }
    }
  }

  return Array.from(themeMap.values()).filter(theme => theme.contentBlocks.length > 0);
}

function extractQuotes(blocks: ContentBlock[], lines: string[]): Quote[] {
  const quotes: Quote[] = [];

  for (const block of blocks) {
    // Look for quoted text
    const quotePattern = /"([^"]{20,})"/g;
    let match;
    
    while ((match = quotePattern.exec(block.text)) !== null) {
      quotes.push({
        text: match[1],
        speaker: block.speaker,
        context: block.text,
        lineNumber: block.lineStart,
        themes: block.themes,
        quotable: match[1].length > 50, // Longer quotes are more quotable
      });
    }

    // Also check for lines that start with quote markers
    if (block.text.match(/^["']/)) {
      quotes.push({
        text: block.text.replace(/^["']|["']$/g, ''),
        speaker: block.speaker,
        context: block.text,
        lineNumber: block.lineStart,
        themes: block.themes,
        quotable: block.text.length > 50,
      });
    }
  }

  return quotes;
}
