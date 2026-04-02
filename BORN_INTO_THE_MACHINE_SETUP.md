# Born into the Machine - Setup Guide

## Overview

The "Born into the Machine" book platform has been implemented at `/research/born-into-the-machine`. This is a living book that enables transparent co-writing between human and AI, with clear visual distinctions between authorship types.

## Installation

### Dependencies

Install the required dependencies:

```bash
pnpm add monaco-editor @monaco-editor/react gray-matter remark remark-parse remark-rehype rehype-react react-markdown openai
```

### Environment Variables

Add to your `.env.local`:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

## File Structure

```
content/born-into-the-machine/
  ├── chapters/
  │   └── 01-introduction.md
  ├── notes/
  ├── conversations/
  ├── metadata.json
  └── README.md

src/
  ├── app/(main)/research/born-into-the-machine/
  │   ├── page.tsx (landing page)
  │   ├── ethics-method/page.tsx
  │   └── [slug]/
  │       ├── page.tsx (chapter view)
  │       └── edit/page.tsx (editor)
  ├── components/book/
  │   ├── AuthorshipBadge.tsx
  │   ├── AuthorshipLegend.tsx
  │   ├── BookChapterClient.tsx
  │   ├── BookEditClient.tsx
  │   ├── BookEditor.tsx
  │   ├── ChapterList.tsx
  │   ├── ChapterRenderer.tsx
  │   ├── EditorPreview.tsx
  │   ├── AIAssistantPanel.tsx
  │   └── ViewModeToggle.tsx
  ├── lib/book/
  │   ├── types.ts
  │   ├── parser.ts
  │   └── ai-assistant.ts
  └── app/api/book/
      └── ai-assist/route.ts
```

## Features

### 1. Authorship Transparency
- **●** Human-written content (untouched by AI)
- **◐** Hybrid content (co-written with AI)
- **○** AI-generated drafts (marked for critique)

### 2. View Modes
- **All** - Show all content
- **Human Only** - Hide AI drafts
- **Hybrid + Human** - Show hybrid and human content
- **AI Only** - Show AI drafts for critique

### 3. Code Editor Interface
- Monaco Editor (VS Code editor)
- Split view: editor + live preview
- Keyboard shortcuts:
  - `Cmd+Shift+H` - Insert ● (Human marker)
  - `Cmd+Shift+Y` - Insert ◐ (Hybrid marker)
  - `Cmd+Shift+A` - Insert ○ (AI marker)
  - `Cmd+S` - Save

### 4. AI Co-Writing Assistant
Three working modes:
- **Thinking Partner** - Ask hard questions, surface contradictions
- **Structural Editor** - Help outline and organize chapters
- **Line Surgeon** - Tighten and refine specific passages

## Usage

### Viewing Chapters

Navigate to `/research/born-into-the-machine` to see all chapters, or `/research/born-into-the-machine/[slug]` to view a specific chapter.

### Editing Chapters

1. Navigate to `/research/born-into-the-machine/[slug]/edit`
2. Use the Monaco editor on the left to edit markdown
3. Preview updates in real-time on the right
4. Toggle AI Assistant panel for co-writing help
5. Save changes (currently requires manual git commit)

### Adding New Chapters

1. Create a new markdown file in `content/born-into-the-machine/chapters/[slug].md`
2. Add frontmatter:
   ```markdown
   ---
   title: "Chapter Title"
   slug: "chapter-slug"
   status: "draft"
   created: "2025-01-15"
   lastModified: "2025-01-15"
   ---
   ```
3. Add the chapter to `metadata.json`:
   ```json
   {
     "chapters": [
       {
         "slug": "chapter-slug",
         "title": "Chapter Title",
         "status": "draft",
         "order": 2
       }
     ]
   }
   ```

## API Endpoints

### POST `/api/book/ai-assist`

Request body:
```json
{
  "prompt": "Your question or request",
  "mode": "thinking-partner" | "structural-editor" | "line-surgeon",
  "context": "Optional context from your chapter"
}
```

Response:
```json
{
  "response": "AI-generated response with authorship markers",
  "usage": { "prompt_tokens": 100, "completion_tokens": 200 }
}
```

## Notes

- File saving in the editor currently requires manual git commits (as per the static markdown approach)
- The parser includes a fallback if `gray-matter` is not installed
- All content is version-controlled through git
- The system prompt for the AI assistant is defined in `src/lib/book/ai-assistant.ts`

## Future Enhancements

- File saving API route
- Export to PDF/EPUB
- Version history visualization
- Search across chapters
- Conversation history tracking
