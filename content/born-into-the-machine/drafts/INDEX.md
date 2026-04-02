# Draft Files Index

## Active Files

### open-ended-foundation.md
Consolidated from:
- open-ended-01a.md (initial questions, techno-spirituality, intelligence as commodity)
- open-ended-01b.md (book sentiment, title discussion, reading recommendations)

**Content:** Foundation concepts, speculative questions, book framing

### open-ended-development.md
Consolidated from:
- open-ended-02a.md (practice questions, Hinton discussion, mini-thesis)
- open-ended-02b.md (book architecture, Suno story, essay outlines)

**Content:** Development of practice, book structure, final concepts

## Original Files

- `open-ended.md` - Original full conversation (preserved as backup)
- Files in `archive/` - Intermediate splits and originals

## Processing

Run these commands to work with the files:

```bash
# Analyze relationships
node scripts/analyze-relationships.mjs

# Process a specific file
node scripts/draft-organizer.mjs open-ended-foundation.md

# Process all files
node scripts/process-drafts-standalone.mjs
```

## Next Steps

1. Use `draft-organizer.mjs` to categorize and tag content
2. Export organized content to chapters
3. Review extracted entities in `extracted/` folder
