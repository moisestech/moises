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
