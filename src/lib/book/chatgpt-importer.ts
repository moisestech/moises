/**
 * Parser for ChatGPT conversation exports
 * Handles various formats that ChatGPT might export
 */

export interface ChatGPTMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

export interface ParsedConversation {
  messages: ChatGPTMessage[];
  metadata: {
    title?: string;
    date?: string;
    totalMessages: number;
  };
}

/**
 * Parse ChatGPT conversation from text (supports multiple formats)
 */
export function parseChatGPTChat(text: string): ParsedConversation {
  const lines = text.split('\n');
  const messages: ChatGPTMessage[] = [];
  let currentRole: 'user' | 'assistant' | null = null;
  let currentContent: string[] = [];
  let title: string | undefined;
  let date: string | undefined;

  // Try to detect format
  // Format 1: "User: ..." / "Assistant: ..." or "You: ..." / "ChatGPT: ..."
  // Format 2: JSON format
  // Format 3: Markdown with headers

  // Check if it's JSON
  try {
    const json = JSON.parse(text);
    if (Array.isArray(json)) {
      return {
        messages: json.map((msg: any) => ({
          role: msg.role || (msg.author?.role === 'user' ? 'user' : 'assistant'),
          content: msg.content || msg.text || '',
          timestamp: msg.timestamp || msg.created,
        })),
        metadata: {
          totalMessages: json.length,
        },
      };
    }
  } catch (e) {
    // Not JSON, continue with text parsing
  }

  // Parse text format
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) {
      if (currentContent.length > 0) {
        currentContent.push('');
      }
      continue;
    }

    // Detect role markers
    if (line.match(/^(You|User|Human):/i)) {
      // Save previous message if exists
      if (currentRole && currentContent.length > 0) {
        messages.push({
          role: currentRole,
          content: currentContent.join('\n').trim(),
        });
      }
      currentRole = 'user';
      currentContent = [line.replace(/^(You|User|Human):\s*/i, '')];
    } else if (line.match(/^(ChatGPT|Assistant|AI|GPT):/i)) {
      // Save previous message if exists
      if (currentRole && currentContent.length > 0) {
        messages.push({
          role: currentRole,
          content: currentContent.join('\n').trim(),
        });
      }
      currentRole = 'assistant';
      currentContent = [line.replace(/^(ChatGPT|Assistant|AI|GPT):\s*/i, '')];
    } else if (line.match(/^#+\s/)) {
      // Markdown header - could be title
      if (!title && line.match(/^#\s/)) {
        title = line.replace(/^#\s+/, '');
      }
    } else if (currentRole) {
      // Continue current message
      currentContent.push(line);
    } else {
      // No role detected yet, might be title or metadata
      if (line.includes('Date:') || line.includes('Created:')) {
        date = line.split(/[:]\s*/)[1]?.trim();
      } else if (!title && line.length < 100) {
        title = line;
      }
    }
  }

  // Save last message
  if (currentRole && currentContent.length > 0) {
    messages.push({
      role: currentRole,
      content: currentContent.join('\n').trim(),
    });
  }

  return {
    messages,
    metadata: {
      title,
      date,
      totalMessages: messages.length,
    },
  };
}

/**
 * Categorize a message into different types
 */
export type MessageCategory = 'question' | 'vocabulary' | 'personal-answer' | 'gpt-answer' | 'other';

export function categorizeMessage(
  message: ChatGPTMessage,
  index: number,
  allMessages: ChatGPTMessage[]
): MessageCategory {
  if (message.role === 'user') {
    // Check if it's a question
    if (message.content.match(/\?/)) {
      return 'question';
    }
    // Check if it contains vocabulary/definitions
    if (message.content.match(/(?:define|meaning|vocabulary|term|word)/i)) {
      return 'vocabulary';
    }
    // Otherwise it's a personal answer/reflection
    return 'personal-answer';
  } else {
    // Assistant messages are GPT answers
    return 'gpt-answer';
  }
}

export interface CategorizedMessage extends ChatGPTMessage {
  category: MessageCategory;
  editable: boolean;
  authorshipMarker?: 'human' | 'hybrid' | 'ai';
}

/**
 * Convert parsed conversation to categorized messages
 */
export function categorizeConversation(
  conversation: ParsedConversation
): CategorizedMessage[] {
  return conversation.messages.map((msg, index) => {
    const category = categorizeMessage(msg, index, conversation.messages);
    
    // Determine authorship marker
    let authorshipMarker: 'human' | 'hybrid' | 'ai' = 'human';
    if (msg.role === 'assistant') {
      authorshipMarker = 'ai';
    } else if (category === 'personal-answer') {
      authorshipMarker = 'human';
    }

    return {
      ...msg,
      category,
      editable: true,
      authorshipMarker,
    };
  });
}
