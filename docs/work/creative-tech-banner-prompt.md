# Creative-tech application banner — image prompt

Use this for Midjourney, Flux, Ideogram, or ChatGPT image generation. Upload the result to Cloudinary as:

`jobs/banners/creative-tech-image-tools-banner.png`

Then update `creativeTechImageToolsBanner.src` in [`src/content/evidence/applicationBanners.ts`](../../src/content/evidence/applicationBanners.ts).

**Live asset:** `v1780248505/jobs/banners/ChatGPT_Image_May_31_2026_12_19_46_PM_wu8xw1.png`

---

## Primary prompt (wide cinematic banner)

```text
Wide cinematic web banner, 21:9 aspect ratio, ultra-high resolution. A calm, museum-legible creative-technology scene about large-image workflows for cultural institutions — not startup marketing, not cyberpunk.

Composition: shallow depth of field; left third shows a clean Next.js-style review UI on a desktop monitor — grid of generative scene thumbnails, soft loading states, mask overlay toggles, status pills (processing / ready / failed). Center: a floating high-resolution artwork tile with a subtle segmentation mask outline (SAM-style, soft cyan edges, not medical). Right: abstract IIIF / zoom metaphor — a deep-zoom corner loupe on a massive manuscript or mural scan, crisp tile boundaries, no text labels.

Palette: warm stone neutrals (#fafaf9, #e7e5e4), restrained cyan accents (#22d3ee / #0891b2), charcoal UI chrome (#1c1917). Soft natural light, matte surfaces, no neon, no purple gradients, no stock-photo people.

Mood: precise, institutional, engineer-credible — research dossier for a funded creative-tech RFP (image segmentation, PyTorch, Docker, IIIF delivery). Feels like MoMA Sans typography energy: elegant, minimal, confident.

Exclude: logos, watermarks, readable lorem ipsum, faces, hands, clutter, sci-fi HUD, blockchain, generic “AI brain” icons, lens flare, oversaturated colors.
```

---

## Negative prompt

```text
neon, cyberpunk, purple gradient, startup pitch deck, stock photo, smiling team, blockchain, bitcoin, robot face, brain icon, watermark, logo soup, blurry UI, illegible text, cluttered dashboard, medical imaging gore, horror, lens flare, oversaturated, cartoon, 3D render cliché
```

---

## Technical specs (for export)

| Field | Value |
|-------|--------|
| Aspect ratio | **21:9** (matches `OpportunityApplicationBanner` default crop) |
| Safe crop | Keep key UI + artwork in **center 70%** (full-bleed banner uses `object-cover object-top`) |
| Min width | **2400px** wide (scales down cleanly on mobile) |
| Format | PNG or high-quality WebP |
| Alt text (site) | `Creative image tools — segmentation, large assets, IIIF delivery, and review interfaces` |

---

## Variant B (more abstract, if UI mockups look too busy)

```text
21:9 minimalist banner. Layered translucent image planes like a museum IIIF stack — one plane with a soft cyan segmentation mask, one with tile grid lines, one with a small Docker/container motif as subtle line iconography only. Stone and cyan palette, editorial photography lighting, no text, no logos, institutional calm.
```

---

## Lore Machine case study screenshot (separate asset)

Upload as `jobs/lore-machine-ui-screenshot.png` and update `lore-machine.imageSrc` in [`src/content/evidence/projects.ts`](../../src/content/evidence/projects.ts).

```text
Product UI screenshot style (or realistic mock), 16:9. Lore Machine generative storytelling dashboard: left sidebar scenes/chapters, center grid of AI-generated scene images in review state, right panel model settings (Replicate/Azure). Dark-neutral UI, batch selection checkboxes, “generating” spinners on 2 tiles. Clean SaaS layout, not fantasy art. No readable personal data. Stone/cyan accent buttons.
```

---

## After upload (Cloudinary)

1. Copy the delivery URL (with version segment), e.g.  
   `https://res.cloudinary.com/dck5rzi4h/image/upload/vXXXXXXXX/jobs/banners/creative-tech-image-tools-banner.png`
2. Paste into `creativeTechImageToolsBannerDedicated.src` in `applicationBanners.ts`
3. Set `USE_DEDICATED_CREATIVE_TECH_BANNER = true`
4. `pnpm run build` (or deploy)
