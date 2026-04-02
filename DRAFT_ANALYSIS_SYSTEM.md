# Draft Analysis and Organization System

## Overview

A comprehensive system to analyze, categorize, and organize your ChatGPT conversation drafts. Automatically extracts vocabulary, writers, books, and artworks, and provides multiple workflow views for efficient processing.

## Quick Start

1. **Create a draft file** in `content/born-into-the-machine/drafts/`
2. **Paste your ChatGPT conversation** directly into the file
3. **Navigate to** `/research/born-into-the-machine/drafts`
4. **Click on your draft** to see analysis options

## Workflow Views

### 1. Read View (`/drafts/[filename]/read`)

**Purpose**: Read through the draft, tag content, and track progress

**Features**:
- Scrollable view of entire draft
- Clear speaker identification (● Human, ○ AI)
- Inline theme tagging (click a block to tag it)
- Progress tracking (mark blocks as "processed")
- Sidebar with statistics and extracted entities
- Filters: Show only unprocessed, filter by speaker

**How to use**:
- Click on any content block to select it
- Click theme buttons to tag the block
- Click the circle icon to mark as processed
- Progress is automatically saved to localStorage

### 2. Categorization Dashboard (`/drafts/[filename]/categorize`)

**Purpose**: Bulk organize and categorize content blocks

**Features**:
- Grid/list view toggle
- Multiple filters (speaker, type, theme, processed status)
- Bulk selection and actions
- Statistics panel
- Tag multiple blocks with themes at once

**How to use**:
- Use filters to narrow down content
- Select multiple blocks (click to select)
- Use bulk actions to tag themes or mark as processed
- View statistics to track your progress

### 3. Chapter Builder (`/drafts/[filename]/organize`)

**Purpose**: Organize content into thematic chapters

**Features**:
- Visual chapter outline
- Drag-and-drop content blocks into chapters
- Chapter preview
- Export chapters as markdown

**How to use**:
- Chapters are auto-created from detected themes
- Drag blocks from "Available Blocks" into chapters
- Click a chapter to preview its content
- Use "Export Chapter" to copy markdown to clipboard
- Add new chapters with "New Chapter" button

### 4. Entity Manager (`/drafts/[filename]/entities`)

**Purpose**: View and manage extracted vocabulary, writers, books, and artworks

**Features**:
- Tabs for each entity type
- View all extracted items
- Export all entities to markdown files

**How to use**:
- Browse extracted vocabulary, writers, books, artworks
- Click "Export All" to generate markdown files
- Files are saved to `content/born-into-the-machine/extracted/`

## Auto-Extraction

The system automatically extracts:

### Vocabulary
- Terms with definitions ("X is Y", "X means Y")
- Capitalized concepts
- Technical terms

### Writers
- Known authors and thinkers
- Context of mentions
- Related works

### Books
- Book titles and authors
- References and citations
- Context of mentions

### Artworks
- Installation concepts
- Artwork ideas
- Links to existing artworks

## Progress Tracking

- Progress is saved to localStorage automatically
- Resume from where you left off
- Track percentage complete
- Mark sections as read/processed

## Themes

The system auto-detects themes:
- Intelligence as Commodity
- Dead Internet, Live Body
- When Duchamp Met the For-You Page
- Techno-Spiritual Churches
- Kids as Luxury
- Attention Castes / Brainrot
- Velocity and Acceleration
- Aesthetics as Shield/Weapon

You can manually tag content with themes or create new ones.

## Export Options

### Export Chapter
- From Chapter Builder: Click "Export Chapter"
- Copies formatted markdown with authorship markers
- Ready to paste into chapter file

### Export Entities
- From Entity Manager: Click "Export All"
- Generates markdown files:
  - `vocabulary.md`
  - `writers.md`
  - `books.md`
  - `artworks.md`

### Copy Markdown
- From Drafts list: Click "Copy Markdown"
- Copies formatted content with authorship markers

## Tips

1. **Start with Read View**: Get familiar with the content
2. **Use Categorization Dashboard**: Bulk organize similar content
3. **Build Chapters**: Organize thematically in Chapter Builder
4. **Review Entities**: Check extracted vocabulary/writers/books
5. **Export Regularly**: Save your work as you go

## File Structure

```
content/born-into-the-machine/
  ├── drafts/
  │   └── open-ended.md (your conversation)
  ├── extracted/
  │   ├── vocabulary.md (auto-generated)
  │   ├── writers.md (auto-generated)
  │   ├── books.md (auto-generated)
  │   └── artworks.md (auto-generated)
  └── chapters/
      └── [your-chapters].md (exported from Chapter Builder)
```

## Keyboard Shortcuts

- Click to select blocks
- Drag to move blocks in Chapter Builder
- Progress saves automatically

## Troubleshooting

**Draft not parsing?**
- Make sure file has clear speaker markers ("Question", "GPT", etc.)
- Check file is in `.md` format

**Themes not detected?**
- Manually tag content blocks
- Themes are auto-detected based on keywords

**Progress not saving?**
- Check browser localStorage is enabled
- Progress is saved per filename
