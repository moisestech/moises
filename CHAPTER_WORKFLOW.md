# Chapter Organization Workflow

Complete guide to organizing your draft content into the 10 chapters.

## The 10 Chapters

1. **Introduction: Embracing the AI K-Hole** - Suno moment, synthetic flow
2. **The Specter of Capitalist Realism** - Mark Fisher, imagining futures
3. **Burnout and the Velocity of Change** - Byung-Chul Han, Hinton, velocity
4. **Intelligence as Infrastructure** - AI as utility, prompt economics
5. **Art as a Language Beyond Words** - Visual/experiential art, Duchamp/LeWitt
6. **The Vector of Identity in an Automated World** - Identity, automation, Miami
7. **A Toolkit for Autonomy** - Practical exercises, practices
8. **AI and the Public Sphere** - Public art, community projects
9. **From Essays to Visual Essays** - Translation to video/podcast
10. **Conclusion: Empowerment Through the Chaos** - Summary, forward movement

## Step-by-Step Workflow

### Step 1: Map Draft Content to Chapters

For each draft file, analyze which content belongs to which chapter:

```bash
# Map a single file
node scripts/map-to-chapters.mjs open-ended-foundation.md

# Map all your main files
node scripts/map-to-chapters.mjs open-ended-foundation.md
node scripts/map-to-chapters.mjs open-ended-development.md
node scripts/map-to-chapters.mjs draft-2-dec28-migration.md
```

**What it does:**
- Analyzes content blocks
- Scores each block against chapter keywords, thinkers, artworks
- Suggests which chapter each block belongs to
- Saves mapping to `.filename.chapter-mapping.json`

**Output shows:**
- Content distribution across chapters
- Confidence levels (high/medium/low)
- Alternative chapter suggestions for uncertain blocks
- Recommendations for review

### Step 2: Review and Refine Mappings

The mapping is automatic but may need refinement:

1. **High confidence blocks** - Usually correct, can use as-is
2. **Medium confidence blocks** - Review alternatives, may need manual assignment
3. **Low confidence blocks** - Review manually, may belong to multiple chapters or need new keywords

**To refine:**
- Review the mapping output
- Check `.filename.chapter-mapping.json` files
- Manually adjust if needed (edit the JSON files)

### Step 3: Build Chapters

Once mappings are ready, build the actual chapter files:

```bash
# Interactive chapter builder
node scripts/chapter-builder.mjs
```

**Commands:**
- `view [n]` - View chapter #n and its mapped content
- `build [n]` - Build chapter #n from mapped content
- `build-all` - Build all chapters at once
- `stats` - Show content distribution statistics
- `quit` - Exit

**What it does:**
- Loads all chapter mappings
- Groups content by chapter
- Creates chapter markdown files in `content/born-into-the-machine/chapters/`
- Preserves authorship markers (● human, ○ AI, ◐ unknown)
- Groups content by source file

### Step 4: Review and Edit Chapters

After building, review each chapter:

1. **Check content flow** - Does it make sense?
2. **Remove duplicates** - Same content in multiple places?
3. **Fill gaps** - Missing content for a chapter?
4. **Refine organization** - Reorder blocks within chapters
5. **Add transitions** - Connect blocks with your own writing

**Files created:**
- `01-introduction-embracing-ai-k-hole.md`
- `02-specter-capitalist-realism.md`
- `03-burnout-velocity-change.md`
- ... etc

Each file includes:
- Frontmatter with metadata
- Chapter context
- Content blocks from drafts (with authorship markers)
- Grouped by source file

### Step 5: Continue Writing

Use the chapter files as starting points:

1. **Edit in web UI** - `/research/born-into-the-machine/[slug]/edit`
2. **Use AI assistant** - Get help developing each chapter
3. **Add new content** - Write directly in chapter files
4. **Refine structure** - Reorganize as needed

## Quick Start

```bash
# 1. Map your main draft files
node scripts/map-to-chapters.mjs open-ended-foundation.md
node scripts/map-to-chapters.mjs open-ended-development.md

# 2. Review the mappings (check output and .chapter-mapping.json files)

# 3. Build all chapters
node scripts/chapter-builder.mjs
# Then type: build-all

# 4. Review chapters in content/born-into-the-machine/chapters/
```

## Understanding the Mapping

The mapping uses:

1. **Keywords** - Matches content containing chapter-specific terms
2. **Thinkers** - Matches mentions of specific authors/theorists
3. **Artworks** - Matches mentions of your specific works
4. **Context words** - Matches words from chapter descriptions

**Scoring:**
- Thinker mention: +5 points
- Artwork mention: +4 points
- Keyword match: +3 points
- Context word: +1 point

**Confidence levels:**
- **High** - Best match has 1.5x score of next best
- **Medium** - Multiple good matches, needs review
- **Low** - No clear match, needs manual assignment

## Tips

1. **Start with foundation files** - Map `open-ended-foundation.md` and `open-ended-development.md` first
2. **Review medium/low confidence** - These may need manual assignment
3. **Check unmapped content** - May need new keywords or belong to multiple chapters
4. **Build incrementally** - Build one chapter at a time, review, then continue
5. **Preserve authorship** - The system keeps your ●/○/◐ markers

## Troubleshooting

**No content mapped to a chapter:**
- Add more keywords to `chapter-outline.json`
- Check if content exists in drafts
- May need to write new content for that chapter

**Too much content in one chapter:**
- Review if some blocks belong elsewhere
- Split chapter into subsections
- Create sub-chapters if needed

**Content in wrong chapter:**
- Manually edit `.chapter-mapping.json` files
- Adjust keywords in `chapter-outline.json`
- Re-run mapping

## File Structure

```
content/born-into-the-machine/
├── chapter-outline.json          # Chapter definitions
├── drafts/
│   ├── open-ended-foundation.md
│   ├── open-ended-development.md
│   ├── .filename.chapter-mapping.json  # Auto-generated mappings
│   └── ...
└── chapters/
    ├── 01-introduction-embracing-ai-k-hole.md
    ├── 02-specter-capitalist-realism.md
    └── ...
```

## Next Steps

After organizing into chapters:

1. **Review each chapter** - Read through, check flow
2. **Fill gaps** - Write missing content
3. **Refine structure** - Reorganize as needed
4. **Use AI assistant** - Develop each chapter further
5. **Export/Share** - Use for book, video essays, podcast

## Example Session

```bash
# Map foundation file
$ node scripts/map-to-chapters.mjs open-ended-foundation.md
# Review output - see which chapters have content

# Build chapters interactively
$ node scripts/chapter-builder.mjs
> view 1          # See Introduction chapter content
> view 3          # See Burnout chapter content
> build 1         # Build Introduction chapter
> stats           # See distribution
> build-all        # Build all chapters
> quit

# Review built chapters
$ ls content/born-into-the-machine/chapters/
```

Now you have organized chapters ready for further development!
