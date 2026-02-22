import { BookChapter, ContentBlock, AuthorshipType } from './types';

/**
 * Simple frontmatter parser.
 *
 * Intentionally browser-safe: no Node built-ins and no optional deps.
 */
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (match) {
    const frontmatterText = match[1];
    const body = match[2];
    const data: Record<string, any> = {};

    frontmatterText.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const colonIndex = trimmed.indexOf(':');
      if (colonIndex > 0) {
        const key = trimmed.substring(0, colonIndex).trim();
        let value = trimmed.substring(colonIndex + 1).trim();
        // Remove quotes if present
        value = value.replace(/^["']|["']$/g, '');
        data[key] = value;
      }
    });

    return { data, content: body };
  }

  return { data: {}, content };
}

const MARKER_TO_TYPE: Record<string, AuthorshipType> = {
  '●': 'human',      // U+25CF BLACK CIRCLE
  '◐': 'hybrid',     // U+25D0 CIRCLE WITH LEFT HALF BLACK
  '○': 'ai',         // U+25CB WHITE CIRCLE
  '•': 'notes',      // U+2022 BULLET
  '@': 'authors',    // U+0040 COMMERCIAL AT
  '§': 'vocabulary', // U+00A7 SECTION SIGN
};

console.log('[parser-core] Marker mappings:', {
  '●': MARKER_TO_TYPE['●'],
  '◐': MARKER_TO_TYPE['◐'],
  '○': MARKER_TO_TYPE['○'],
  '•': MARKER_TO_TYPE['•'],
  '@': MARKER_TO_TYPE['@'],
  '§': MARKER_TO_TYPE['§'],
  'charCodes': {
    '●': '●'.charCodeAt(0),
    '◐': '◐'.charCodeAt(0),
    '○': '○'.charCodeAt(0),
    '•': '•'.charCodeAt(0),
    '@': '@'.charCodeAt(0),
    '§': '§'.charCodeAt(0),
  }
});

/**
 * Parse a markdown string with frontmatter and extract authorship markers.
 */
export function parseChapterMarkdown(content: string): BookChapter {
  const result = parseFrontmatter(content);
  const frontmatter = result.data;
  const markdownContent = result.content;

  const blocks = parseContentBlocks(markdownContent);

  return {
    title: frontmatter.title || '',
    slug: frontmatter.slug || '',
    status: frontmatter.status || 'draft',
    created: frontmatter.created || new Date().toISOString(),
    lastModified: frontmatter.lastModified || new Date().toISOString(),
    content: blocks,
    frontmatter,
  };
}

/**
 * Parse content blocks from markdown, identifying authorship markers.
 */
function parseContentBlocks(content: string): ContentBlock[] {
  console.log('[parser-core] Parsing content blocks, content length:', content.length);
  const lines = content.split('\n');
  console.log('[parser-core] Total lines:', lines.length);
  const blocks: ContentBlock[] = [];
  let currentBlock: { type: AuthorshipType; lines: string[] } | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check if line starts with an authorship marker
    const marker = trimmedLine[0];
    const authorshipType = MARKER_TO_TYPE[marker];

    if (authorshipType) {
      console.log(`[parser-core] Line ${i + 1}: Found marker "${marker}" -> type: ${authorshipType}`);
      // Save previous block if exists
      if (currentBlock) {
        blocks.push({
          type: currentBlock.type,
          text: currentBlock.lines.join('\n').trim(),
        });
      }

      // Start new block, removing the marker
      const contentWithoutMarker = trimmedLine.slice(1).trim();
      currentBlock = {
        type: authorshipType,
        lines: contentWithoutMarker ? [contentWithoutMarker] : [],
      };
      console.log(`[parser-core] Started new ${authorshipType} block with content:`, contentWithoutMarker.substring(0, 50));
    } else {
      // Continue current block or start a default human block
      if (currentBlock) {
        currentBlock.lines.push(line);
      } else {
        // If no marker, assume human-written (default)
        currentBlock = {
          type: 'human',
          lines: [line],
        };
      }
    }
  }

  // Save last block
  if (currentBlock && currentBlock.lines.length > 0) {
    blocks.push({
      type: currentBlock.type,
      text: currentBlock.lines.join('\n').trim(),
    });
  }

  // If no blocks were found, treat entire content as human
  if (blocks.length === 0) {
    blocks.push({
      type: 'human',
      text: content.trim(),
    });
  }

  console.log('[parser-core] Parsed blocks:', blocks.map(b => ({ type: b.type, textLength: b.text.length, preview: b.text.substring(0, 30) })));
  return blocks;
}
