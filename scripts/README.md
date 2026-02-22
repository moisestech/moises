# Draft Processing Scripts

Terminal-based tools for organizing and analyzing your draft files.

## Available Scripts

### 1. Process All Drafts
**File:** `process-drafts-standalone.mjs`

Automatically processes all draft files, extracts entities, and generates analysis files.

```bash
node scripts/process-drafts-standalone.mjs
```

**What it does:**
- Analyzes content blocks and speakers
- Extracts vocabulary, writers, books, artworks
- Detects themes automatically
- Generates extracted entity files in `content/born-into-the-machine/extracted/`

---

### 2. Interactive Draft Organizer
**File:** `draft-organizer.mjs`

Interactive terminal tool for categorizing and organizing individual draft files.

```bash
node scripts/draft-organizer.mjs [filename]
```

**Example:**
```bash
node scripts/draft-organizer.mjs open-ended-foundation.md
```

**Features:**
- View all content blocks
- Tag blocks with themes
- Mark blocks as processed
- Group blocks by theme
- Export organized content to chapters
- Save progress automatically

**Commands:**
- `list` - List all blocks
- `show [n]` - Show block #n in detail
- `tag [n]` - Tag themes for block #n
- `process [n]` - Mark block #n as processed
- `themes` - List all detected themes
- `by-theme` - Group blocks by theme
- `stats` - Show statistics
- `export` - Export organized content to chapters
- `save` - Save current state
- `quit` - Exit

**State files:**
- Progress is saved to `.filename.state.json` in the drafts folder
- You can resume where you left off

---

### 3. Analyze Relationships
**File:** `analyze-relationships.mjs`

Analyzes relationships between draft files to understand connections and overlaps.

```bash
node scripts/analyze-relationships.mjs
```

**What it shows:**
- Shared writers across files
- Shared books across files
- Shared vocabulary terms
- File size comparison
- Recommendations for merging/organizing
- Suggested file groupings

**Use this to:**
- Understand which files are related
- Decide which files to merge
- Find common themes across files
- Plan your organization strategy

---

### 4. Consolidate Files
**File:** `consolidate-files.mjs`

Consolidates multiple split files into fewer, better-organized files.

```bash
node scripts/consolidate-files.mjs
```

**What it does:**
- Merges `open-ended-01a.md` + `open-ended-01b.md` → `open-ended-foundation.md`
- Merges `open-ended-02a.md` + `open-ended-02b.md` → `open-ended-development.md`
- Archives original files to `archive/` folder
- Creates an `INDEX.md` file for reference

**Before running:**
- Make sure you've processed the files first
- Original files are preserved in `archive/` folder
- You can always restore from archive if needed

---

## Workflow Examples

### Example 1: Process and Organize a New File

```bash
# 1. Process the file
node scripts/process-drafts-standalone.mjs

# 2. Organize it interactively
node scripts/draft-organizer.mjs your-file.md

# 3. Export organized content
# (Use 'export' command in the organizer)
```

### Example 2: Understand File Relationships

```bash
# Analyze relationships
node scripts/analyze-relationships.mjs

# Review the output to see:
# - Which files share themes
# - Which files should be merged
# - How files are connected
```

### Example 3: Consolidate Too Many Files

```bash
# If you have too many split files:
node scripts/consolidate-files.mjs

# This will:
# - Merge related files
# - Archive originals
# - Create an index
```

### Example 4: Full Workflow

```bash
# 1. Process all files
node scripts/process-drafts-standalone.mjs

# 2. Analyze relationships
node scripts/analyze-relationships.mjs

# 3. Consolidate if needed
node scripts/consolidate-files.mjs

# 4. Organize each consolidated file
node scripts/draft-organizer.mjs open-ended-foundation.md
node scripts/draft-organizer.mjs open-ended-development.md

# 5. Export chapters
# (Use 'export' command in organizer)
```

---

## File Structure

```
content/born-into-the-machine/
├── drafts/
│   ├── open-ended-foundation.md      # Consolidated file 1
│   ├── open-ended-development.md     # Consolidated file 2
│   ├── archive/                      # Archived originals
│   ├── INDEX.md                      # File index
│   └── .filename.state.json          # Organizer state files
├── extracted/
│   ├── vocabulary-*.md               # Extracted vocabulary
│   ├── writers-*.md                  # Extracted writers
│   ├── books-*.md                    # Extracted books
│   └── artworks-*.md                 # Extracted artworks
└── chapters/
    └── *.md                          # Exported chapters
```

---

## Tips

1. **Start with processing:** Always run `process-drafts-standalone.mjs` first to extract entities
2. **Use relationships:** Run `analyze-relationships.mjs` to understand your files before organizing
3. **Consolidate early:** If you have many small files, consolidate them first
4. **Save often:** The organizer auto-saves, but you can also use `save` command
5. **Export regularly:** Export chapters as you organize to see progress

---

## Troubleshooting

**Script won't run:**
- Make sure you're in the project root directory
- Check that Node.js is installed: `node --version`
- Make scripts executable: `chmod +x scripts/*.mjs`

**Can't find files:**
- Check that files are in `content/born-into-the-machine/drafts/`
- Use `analyze-relationships.mjs` to see available files

**State lost:**
- State files are in `drafts/.filename.state.json`
- They're automatically created when you use the organizer
- If lost, you can restart - the organizer will detect existing blocks

---

## Next Steps

After organizing:
1. Review exported chapters in `chapters/` folder
2. Use the web UI at `/research/born-into-the-machine/drafts/` for visual organization
3. Continue writing in the chapter editor
4. Use AI assistant for further development
