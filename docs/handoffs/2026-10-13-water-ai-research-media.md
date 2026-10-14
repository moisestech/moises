# The Cloud Is Thirsty — Water / AI media ledger (draft)

**Website route:** `/research/the-cloud-is-thirsty`  
**Working branch:** `research/water-ai-material-internet-2026-10`  
**Cloudinary destination:** `art/moisestech-website/research/ai-water-material-internet/`  
**Status:** Not ready for publication until the selected original generated images are sourced and approved.

## Original studies awaiting media

| Study | Working date | Approved source image | Cloudinary target public ID |
|---|---|---|---|
| Human Coolant | Sep 2026 | **Not located** — ask for user's selected original chat/download | `art/moisestech-website/research/ai-water-material-internet/human-coolant-01` |
| Still Processing | Aug–Sep 2026 | **Not located** — ask for user's selected original chat/download | `art/moisestech-website/research/ai-water-material-internet/still-processing-01` |
| Paper Waterfall | 2026 | **Not located** — optional companion image | `art/moisestech-website/research/ai-water-material-internet/paper-waterfall-01` |

**Creative accuracy:** Human Coolant = two unopened generic 24-packs of drinking water, GPU directly on them, minimal clear cooling tubing; no plinth or straps. Still Processing = salvaged beige PC, water at the monitor and CD-ROM tray, vines, cables, shallow reflective engineered reservoir. These are AI-assisted sculpture *studies*, not installed/fabricated works. Paper Waterfall uses *paper*, not water.

## Existing verified Cloudinary media reused without duplicate upload

1. **PC Liquid Cooled Nike Air Max Deluxe** (2018), original image:  
   https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/pc-liquid-cool-nike-shoe_isqxjd.jpg  
   Existing artwork: `/art/pc_liquid_cooled_nike`.
2. **The Weight of the Cloud** (2026, Moises Sanabria + Fabiola Larios), material-density rendering:  
   https://res.cloudinary.com/dck5rzi4h/image/upload/v1785768536/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-03-material-density_bsjcxa.png  
   Existing dossier: `/research/weight-of-the-cloud`.

Both assets were verified in Cloudinary on 2026-10-13. They remain in their original folders; do not reupload merely for the new research page. The Weight of the Cloud is adjacent *material cloud* research, not itself a water sculpture.

## Image ingestion checklist

- [ ] Get user-selected originals (do not fetch stock images, regenerate, or represent unrelated images as artworks).
- [ ] Confirm image-to-study attribution, year, and title; avoid claiming fabrication.
- [ ] Upload approved files to Cloudinary with stable human-readable public IDs.
- [ ] Capture actual returned `secure_url`, dimensions, format, version, alt and caption.
- [ ] Replace `image: null` in `src/content/research/water-and-ai.ts` with the returned URLs.
- [ ] Inspect responsive images, mobile hierarchy, alt text, OG image, and image loading.
- [ ] Review the text with the artist; then link the dossier from the research index.
- [ ] Create a short linked PDF *after* final image approval.
- [ ] Merge and deploy only after the finished visuals and factual labels are verified.

This file is an editorial+asset handoff rather than a media archive: binary images stay on Cloudinary, not in Git.

## Implementation update — 14 Oct 2026

- Working PR: https://github.com/moisestech/moises/pull/60 (draft, not merged).
- New route: `/research/the-cloud-is-thirsty` — React/Next.js page with text, section navigation, accurate status labels, and linked work lineage.
- Research index now has a typographic card for the dossier (no borrowed or substituted art images).
- Editable source of truth: `src/content/research/water-and-ai.ts`.
- Upload-receipt source of truth: `src/content/research/water-and-ai-media.json`.
- Cloudinary destination folder exists and currently contains **zero** image files.
- Validation: `npm run check:water-media` allows pending images; `node scripts/validate-water-ai-assets.mjs --require-ready` blocks until all three approved originals are present. The normal `npm run build` now runs the manifest validator.

### Exact Cloudinary ingestion procedure

1. Pick the **original final exported images**, rather than the illustrative images shown in ChatGPT responses. For each candidate, confirm which object study it documents. Ideally select a portrait 9:16 study and one gallery/context or detail view when available.
2. Before uploading, preserve the original file locally and note its name/source. Do not put large binary artworks in Git.
3. Upload selected image files using Cloudinary, to `art/moisestech-website/research/ai-water-material-internet/`, with these initial public IDs:
   - `human-coolant-01`
   - `still-processing-01`
   - `paper-waterfall-01`
4. Use **overwrite: false** and meaningful `display_name` / `tags` (e.g. `moises-sanabria,post-ai-readymades,water,study`) to avoid accidentally replacing previously approved work.
5. Record the returned *actual* `public_id`, `secure_url`, `version`, `format`, `width`, and `height` in `water-and-ai-media.json`. Set `status: "ready"`, `sourceFile` and `verifiedAt` only after comparing the uploaded image with the selected original. Preserve descriptive alt/caption.
6. Run `npm run check:water-media` and check the rendered page at desktop and mobile widths. Run `node scripts/validate-water-ai-assets.mjs --require-ready` to confirm media completeness. Run the repository's normal build.
7. After images and artwork titles/captions are approved, review the Open Graph preview, check all original links, review the HTML rendering, and save/generate a PDF. Only then mark the draft PR ready and merge/publish.

### Constraints and curatorial accuracy

- Never describe an AI-generated white-cube mockup as an exhibition photograph.
- `The Weight of the Cloud` is adjacent **collaborative** work by Moises Sanabria + Fabiola Larios. It is not itself a water sculpture.
- `Paper Waterfall` is metaphorical water, not a literal water-based piece. If the study is not selected for the final dossier, remove it from the media manifest and page before publication.
- No precise factual water-use statistic appears without a sourced reference; the current page is an artist's speculative material inquiry, not an environmental lifecycle assessment.
- Cristina is an initial conversation context, but the public page is intended to remain useful for broader curatorial, educational, and institutional readers.
- No social message is sent from this repository change.

### Image handoff to resume

Send or upload the preferred originals for **Human Coolant** and **Still Processing**, then optionally **Paper Waterfall**. The new images can be ingested one at a time without reworking the layout or the artist text.
