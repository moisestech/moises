# Terminal Tools Guide

Quick reference for using terminal-based draft organization tools.

## Quick Start

```bash
# 1. Process all files (extract entities)
node scripts/process-drafts-standalone.mjs

# 2. Analyze relationships between files
node scripts/analyze-relationships.mjs

# 3. Consolidate too many files (optional)
node scripts/consolidate-files.mjs

# 4. Organize a specific file interactively
node scripts/draft-organizer.mjs open-ended-foundation.md
```

## The Problem: Too Many Open-Ended Files

You currently have:
- `open-ended.md` (original, 136 KB)
- `open-ended-part-01.md` (74 KB)
- `open-ended-part-02.md` (63 KB)
- `open-ended-01a.md` (55 KB)
- `open-ended-01b.md` (19 KB)
- `open-ended-02a.md` (37 KB)
- `open-ended-02b.md` (26 KB)

**That's 7 files!** Too many to manage easily.

## Solution: Consolidate

Run the consolidation script to merge them into 2 logical files:

```bash
node scripts/consolidate-files.mjs
```

This creates:
- `open-ended-foundation.md` (from 01a + 01b)
- `open-ended-development.md` (from 02a + 02b)

And archives the originals safely.

## Using the Interactive Organizer

The `draft-organizer.mjs` tool gives you terminal-based categorization:

```bash
node scripts/draft-organizer.mjs open-ended-foundation.md
```

**Key features:**
- View blocks with speaker indicators (● human, ○ AI, ◐ unknown)
- Tag blocks with themes
- Mark blocks as processed
- See statistics and progress
- Export organized content to chapters

**Example session:**
```
> list                    # See all blocks
> show 1                  # View block #1 in detail
> tag 1                   # Tag block #1 with themes
> process 1               # Mark block #1 as processed
> by-theme                # Group blocks by theme
> stats                   # See statistics
> export                  # Export to chapters
> quit                    # Exit and save
```

## Understanding Relationships

Before organizing, understand how files connect:

```bash
node scripts/analyze-relationships.mjs
```

This shows:
- Shared writers (e.g., "Jesus" appears in multiple files)
- Shared books and vocabulary
- File size comparison
- Recommendations for merging
- Suggested groupings

## Recommended Workflow

1. **Consolidate first** (if you have too many files)
   ```bash
   node scripts/consolidate-files.mjs
   ```

2. **Process all files**
   ```bash
   node scripts/process-drafts-standalone.mjs
   ```

3. **Analyze relationships**
   ```bash
   node scripts/analyze-relationships.mjs
   ```

4. **Organize each consolidated file**
   ```bash
   node scripts/draft-organizer.mjs open-ended-foundation.md
   node scripts/draft-organizer.mjs open-ended-development.md
   ```

5. **Export chapters** (use `export` command in organizer)

6. **Continue in web UI** at `/research/born-into-the-machine/drafts/`

## File Organization After Consolidation

```
drafts/
├── open-ended-foundation.md      # Work with this
├── open-ended-development.md     # Work with this
├── open-ended.md                 # Original backup
├── archive/                      # All split files archived here
└── INDEX.md                      # Reference guide
```

Much cleaner! Just 2 main files to work with instead of 7.

## Tips

- **Start small:** Organize one file at a time
- **Save often:** State is auto-saved, but use `save` command to be sure
- **Use themes:** Tag blocks consistently to find them later
- **Export regularly:** See your progress by exporting chapters
- **Check relationships:** Use `analyze-relationships.mjs` to understand connections

## Need Help?

- Check `scripts/README.md` for detailed documentation
- State files are saved as `.filename.state.json` in drafts folder
- You can always restore from `archive/` if needed
