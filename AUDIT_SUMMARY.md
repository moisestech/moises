# Audit Summary: Born into the Machine

**Generated:** December 29, 2025

## Current State Overview

### 📁 Drafts Folder (12 files)

#### Chapter Drafts (3 files) - **HIGH PRIORITY**
These are the "slop" files you mentioned - AI-generated drafts that can be starting points:

1. **chapter-1-draft-dec28-migration.md** (755 lines, 51.4 KB)
   - No authorship markers detected
   - Contains recap and chapter outline
   - **Action:** Extract useful structure, ideas, quotes

2. **chapter-2-draft-dec28.md** (695 lines, 40.4 KB)
   - "Dead Internet, Live Body" draft
   - Contains Doomscrolling Treadmill content
   - **Action:** Extract key scenes, concepts, structure

3. **chapter-3-draft-dec28.md** (838 lines, 40.7 KB)
   - "Slop and Sacrament" draft
   - Contains Miami/metabolic content
   - **Action:** Extract useful metaphors, scenes, structure

**Status:** Not yet mapped to chapters

#### Conversation Files (9 files)

**Mapped (2 files):**
- ✅ `open-ended-foundation.md` (1,441 lines) - Mapped to chapters
- ✅ `open-ended-development.md` (1,333 lines) - Mapped to chapters

**Not Mapped (7 files):**
- `open-ended-01a.md` (1,010 lines)
- `open-ended-01b.md` (418 lines)
- `open-ended-02a.md` (647 lines)
- `open-ended-02b.md` (671 lines)
- `open-ended-part-01.md` (1,424 lines)
- `open-ended-part-02.md` (1,302 lines)
- `open-ended.md` (2,717 lines) - Original full conversation

### 📚 Chapters Folder (8 files built)

**Built Chapters:**
1. ✅ `01-introduction-embracing-ai-k-hole.md` (661 lines) - Has content
2. ✅ `02-specter-capitalist-realism.md` (58 lines) - Minimal
3. ✅ `03-burnout-velocity-change.md` (228 lines) - Has content
4. ✅ `04-intelligence-infrastructure.md` (304 lines) - Has content
5. ✅ `05-art-language-beyond-words.md` (119 lines) - Has content
6. ❌ **MISSING:** Chapter 6 - The Vector of Identity in an Automated World
7. ❌ **MISSING:** Chapter 7 - A Toolkit for Autonomy
8. ❌ **MISSING:** Chapter 8 - AI and the Public Sphere
9. ✅ `09-essays-visual-essays.md` (210 lines) - Has content
10. ✅ `10-conclusion-empowerment-chaos.md` (21 lines) - Minimal

**Status:** 7/10 chapters built, 3 missing

### 📦 Extracted Entities (16 files, 113 items)

**Breakdown:**
- **Vocabulary:** 38 terms (mostly from open-ended-01a)
- **Writers:** 12 writers mentioned
- **Books:** 57 books referenced
- **Artworks:** 6 artworks/installations

**Source Distribution:**
- `open-ended-01a.md`: 90 entities (vocabulary, writers, books, artworks)
- `open-ended-02a.md`: 14 entities
- `open-ended-02b.md`: 6 entities
- `open-ended-01b.md`: 3 entities

## Key Findings

### ✅ What's Working
1. **Foundation files mapped** - `open-ended-foundation.md` and `open-ended-development.md` are mapped
2. **7 chapters built** - Good progress on chapter structure
3. **Entities extracted** - 113 entities identified and catalogued
4. **Chapter drafts exist** - Starting material available (even if "slop")

### ⚠️ What Needs Attention

1. **Chapter Drafts Not Processed** (HIGH PRIORITY)
   - 3 chapter drafts exist but haven't been mapped
   - These contain useful content that needs extraction
   - They're "slop" but can be starting points

2. **Many Files Unmapped** (MEDIUM PRIORITY)
   - 7 conversation files not yet mapped to chapters
   - Content may be duplicated or missing from chapters

3. **Missing Chapters** (MEDIUM PRIORITY)
   - Chapters 6, 7, 8 not built yet
   - Need to identify content for these or write new

4. **Authorship Markers Missing**
   - Chapter drafts have no ●/○/◐ markers
   - Need to add authorship transparency

## Recommended Workflow

### Phase 1: Process Chapter Drafts (Start Here)

```bash
# 1. Review each chapter draft
#    - Identify useful content (scenes, concepts, structure)
#    - Extract key quotes and ideas
#    - Note what can be reused vs. what needs rewriting

# 2. Map chapter drafts to outline
node scripts/map-to-chapters.mjs chapter-1-draft-dec28-migration.md
node scripts/map-to-chapters.mjs chapter-2-draft-dec28.md
node scripts/map-to-chapters.mjs chapter-3-draft-dec28.md

# 3. Extract useful content manually
#    - Copy good scenes/concepts to appropriate chapters
#    - Rewrite with your voice
#    - Add authorship markers (● for your writing, ○ for AI slop)
```

### Phase 2: Map Remaining Drafts

```bash
# Map the split files
node scripts/map-to-chapters.mjs open-ended-01a.md
node scripts/map-to-chapters.mjs open-ended-01b.md
node scripts/map-to-chapters.mjs open-ended-02a.md
node scripts/map-to-chapters.mjs open-ended-02b.md

# Review mappings and refine
```

### Phase 3: Build Missing Chapters

```bash
# Build all chapters from mapped content
node scripts/chapter-builder.mjs
> build-all
> quit

# This will create chapters 6, 7, 8 if content exists
# If not, you'll need to write new content for these
```

### Phase 4: Refine and Develop

1. **Review each chapter**
   - Check content flow
   - Remove duplicates
   - Fill gaps
   - Add transitions

2. **Add authorship markers**
   - Mark your writing with ●
   - Mark AI-generated content with ○
   - Mark co-written content with ◐

3. **Continue writing**
   - Use web UI: `/research/born-into-the-machine/[slug]/edit`
   - Use AI assistant for development
   - Maintain transparency

## Content Analysis

### Chapter Drafts Content

**Chapter 1 Draft:**
- Contains recap of conversation
- Has the 10-chapter outline
- Includes questions about interconnecting thinkers
- **Useful:** Structure, questions, outline

**Chapter 2 Draft:**
- "Dead Internet, Live Body" content
- Doomscrolling Treadmill scenes
- Body/gesture descriptions
- **Useful:** Scenes, metaphors, structure

**Chapter 3 Draft:**
- "Slop and Sacrament" content
- Miami/metabolic metaphors
- Feed analysis
- **Useful:** Concepts, metaphors, structure

### Mapping Status

**Well Mapped:**
- Introduction (Chapter 1) - 661 lines
- Intelligence as Infrastructure (Chapter 4) - 304 lines
- Burnout and Velocity (Chapter 3) - 228 lines

**Needs Content:**
- Specter of Capitalist Realism (Chapter 2) - Only 58 lines
- Conclusion (Chapter 10) - Only 21 lines
- Missing chapters 6, 7, 8

## Next Steps Summary

1. **Immediate:** Process chapter-1, chapter-2, chapter-3 drafts
   - Extract useful content
   - Map to chapters
   - Rewrite with your voice

2. **Short-term:** Map remaining draft files
   - Map open-ended-01a, 01b, 02a, 02b
   - Review and refine mappings

3. **Medium-term:** Build missing chapters
   - Identify content for chapters 6, 7, 8
   - Build or write new content

4. **Ongoing:** Refine and develop
   - Review each chapter
   - Add authorship markers
   - Continue writing

## Tools Available

- `scripts/audit-all.mjs` - Run this audit anytime
- `scripts/map-to-chapters.mjs` - Map drafts to chapters
- `scripts/chapter-builder.mjs` - Build chapter files
- `scripts/draft-organizer.mjs` - Organize individual drafts
- `scripts/process-drafts-standalone.mjs` - Process and extract entities

## Questions to Consider

1. **Chapter Drafts:** What percentage of each draft is useful vs. slop?
2. **Missing Chapters:** Do you have content for chapters 6, 7, 8, or need to write new?
3. **Duplication:** Are there duplicate concepts across chapter drafts and mapped files?
4. **Voice:** How much of the chapter drafts can you reuse vs. need to rewrite?

---

**Run audit anytime:** `node scripts/audit-all.mjs`
