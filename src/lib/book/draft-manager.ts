import fs from 'fs';
import path from 'path';
import { parseChatGPTChat, categorizeConversation } from './chatgpt-importer';
import type { DraftFile } from './draft-types';

export type { DraftFile } from './draft-types';

/**
 * Get all draft files from the drafts folder
 */
export async function getAllDraftFiles(): Promise<DraftFile[]> {
  const draftsPath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'drafts'
  );

  try {
    const files = fs.readdirSync(draftsPath);
    const draftFiles: DraftFile[] = [];

    for (const filename of files) {
      // Skip hidden files and README
      if (filename.startsWith('.') || filename === 'README.md') {
        continue;
      }

      const filepath = path.join(draftsPath, filename);
      const stats = fs.statSync(filepath);

      // Only process markdown files
      if (!filename.endsWith('.md')) {
        continue;
      }

      const content = fs.readFileSync(filepath, 'utf-8');
      
      // Try to parse as ChatGPT conversation
      let parsed;
      let draftStats = {
        questions: 0,
        vocabulary: 0,
        personalAnswers: 0,
        gptAnswers: 0,
        other: 0,
      };

      try {
        const conversation = parseChatGPTChat(content);
        const categorized = categorizeConversation(conversation);
        parsed = {
          messages: categorized,
          metadata: conversation.metadata,
        };

        // Calculate stats
        categorized.forEach((msg) => {
          switch (msg.category) {
            case 'question':
              draftStats.questions++;
              break;
            case 'vocabulary':
              draftStats.vocabulary++;
              break;
            case 'personal-answer':
              draftStats.personalAnswers++;
              break;
            case 'gpt-answer':
              draftStats.gptAnswers++;
              break;
            default:
              draftStats.other++;
          }
        });
      } catch (e) {
        // Not a parseable conversation, treat as plain text draft
        parsed = undefined;
      }

      draftFiles.push({
        filename,
        filepath,
        content,
        parsed,
        stats: draftStats,
        lastModified: stats.mtime,
      });
    }

    // Sort by last modified (newest first)
    return draftFiles.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
  } catch (error) {
    return [];
  }
}

/**
 * Read a specific draft file
 */
export async function readDraftFile(filename: string): Promise<DraftFile | null> {
  const filepath = path.join(
    process.cwd(),
    'content',
    'born-into-the-machine',
    'drafts',
    filename
  );

  try {
    const stats = fs.statSync(filepath);
    const content = fs.readFileSync(filepath, 'utf-8');

    let parsed;
    let draftStats = {
      questions: 0,
      vocabulary: 0,
      personalAnswers: 0,
      gptAnswers: 0,
      other: 0,
    };

    try {
      const conversation = parseChatGPTChat(content);
      const categorized = categorizeConversation(conversation);
      parsed = {
        messages: categorized,
        metadata: conversation.metadata,
      };

      categorized.forEach((msg) => {
        switch (msg.category) {
          case 'question':
            draftStats.questions++;
            break;
          case 'vocabulary':
            draftStats.vocabulary++;
            break;
          case 'personal-answer':
            draftStats.personalAnswers++;
            break;
          case 'gpt-answer':
            draftStats.gptAnswers++;
            break;
          default:
            draftStats.other++;
        }
      });
    } catch (e) {
      // Not parseable
    }

    return {
      filename,
      filepath,
      content,
      parsed,
      stats: draftStats,
      lastModified: stats.mtime,
    };
  } catch (error) {
    return null;
  }
}

export { convertDraftToChapterMarkdown } from './draft-types';

/**
 * Get draft files grouped by category
 */
export async function getDraftsByCategory() {
  const drafts = await getAllDraftFiles();
  
  return {
    all: drafts,
    withQuestions: drafts.filter(d => d.stats.questions > 0),
    withVocabulary: drafts.filter(d => d.stats.vocabulary > 0),
    withPersonalAnswers: drafts.filter(d => d.stats.personalAnswers > 0),
    withGPTAnswers: drafts.filter(d => d.stats.gptAnswers > 0),
    parseable: drafts.filter(d => d.parsed !== undefined),
    plainText: drafts.filter(d => d.parsed === undefined),
  };
}
