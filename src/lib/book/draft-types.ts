/**
 * Client-safe draft types and pure functions.
 * No fs/path - safe to import in client components.
 */
import { CategorizedMessage } from './chatgpt-importer';

export interface DraftFile {
  filename: string;
  filepath: string;
  content: string;
  parsed?: {
    messages: CategorizedMessage[];
    metadata: {
      title?: string;
      date?: string;
      totalMessages: number;
    };
  };
  stats: {
    questions: number;
    vocabulary: number;
    personalAnswers: number;
    gptAnswers: number;
    other: number;
  };
  lastModified: Date;
}

/**
 * Convert draft messages to chapter markdown format (pure, no fs)
 */
export function convertDraftToChapterMarkdown(
  draft: DraftFile,
  title?: string
): string {
  if (!draft.parsed) {
    return `---
title: "${title || draft.filename.replace('.md', '')}"
slug: "${draft.filename.replace('.md', '').toLowerCase().replace(/\s+/g, '-')}"
status: "draft"
created: "${new Date().toISOString().split('T')[0]}"
lastModified: "${new Date().toISOString().split('T')[0]}"
---

${draft.content}
`;
  }

  const frontmatter = `---
title: "${title || draft.parsed.metadata.title || draft.filename.replace('.md', '')}"
slug: "${draft.filename.replace('.md', '').toLowerCase().replace(/\s+/g, '-')}"
status: "draft"
created: "${draft.parsed.metadata.date || new Date().toISOString().split('T')[0]}"
lastModified: "${new Date().toISOString().split('T')[0]}"
---

`;

  const content = draft.parsed.messages
    .map((msg) => {
      const marker = {
        human: '●',
        hybrid: '◐',
        ai: '○',
      }[msg.authorshipMarker || (msg.role === 'user' ? 'human' : 'ai')];

      return `${marker} ${msg.content}`;
    })
    .join('\n\n');

  return frontmatter + content;
}
