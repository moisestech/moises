# Artist / Educator / Systems Builder — image prompts

Dedicated stills for the **Positioning** triad on `/artist-infrastructure`  
(“One practice, three connected roles”).

These should **not** reuse the Creative AI Three Layers assets  
(`creative-direction-spatial-interface`, `ai-production-systems-human-review-pipeline`, `software-interfaces-creator-tool`).

**Target size:** ~1600×1000 (or 3:2), editorial, museum-legible  
**Feel:** research dossier + working practice — not startup purple, not stock handshake  
**Folder (suggested):** `dccmiami/institutions/artist-infrastructure/positioning/`

Until custom assets land, the page uses documentary interim images (practice / Digilab).

---

## 1. Artist

**Role copy (must match image):**  
*I use technology as material, culture, and subject—examining how interfaces, automation, platforms, and machines shape everyday life.*

**Suggested public_id:** `artist-role-material-culture-interface`

### Prompt v1

```
Editorial museum photograph for an interdisciplinary artist’s positioning card.
Subject: technology as material and culture — a sculptural / installed consumer-tech object in a white-cube or concrete studio, soft daylight.
Show an interface object as sculpture (phone, screen, treadmill-adjacent consumer device, or kiosk fragment) treated as artwork, not as a product demo.
Slightly desaturated, cool gray + warm amber accents. No people faces required; hands optional if quiet.
Feel: Born into the Machine / Miami institutional art — not a startup pitch, not Midjourney collage chaos.
No text overlays, no logos, no purple AI glow, no neon cyberpunk.
Horizontal 3:2, photoreal documentary.
```

### Refine toward

- More clearly *sculpture / installation* than UI mockup  
- Object should feel critiqued (commodity, attention, platform) not celebrated as “innovation”  
- Could reference Smart Shoppers / Doomscrolling energy without copying existing photos 1:1  

---

## 2. Educator

**Role copy (must match image):**  
*I build accessible learning experiences in which artists leave with a working artifact, a repeatable method, and resources they can continue using.*

**Suggested public_id:** `educator-role-workshop-artifact-method`

### Prompt v1

```
Editorial documentary photograph of an arts digital lab workshop in progress.
Horizontal 3:2. Artists at laptops around a table or island; projector glow; one shared screen showing a simple working prototype (website, n8n-like nodes abstractly, or browser UI) — readable but not brand-logo heavy.
Facilitator optional from behind or side; prefer no identifiable faces if privacy-sensitive (hands, shoulders, screens).
Atmosphere: Oolite Digilab / Miami arts education — concrete floors, cyan room light optional, warm practical lamps.
Mood: accessible teaching, working artifact on screen, method over hype.
No purple gradients, no stock “diversity classroom” clichés, no “AI brain” illustrations, no big title text.
Photoreal, slightly desaturated teal + warm amber.
```

### Refine toward

- Emphasize **artifact + method** (something finished-enough on a screen + notes / checklist nearby)  
- Feels like a workshop artists can continue after leaving  
- Quiet institutional, not bootcamp energy  

---

## 3. Systems Builder

**Role copy (must match image):**  
*I design the infrastructure around creative work: documentation, equipment workflows, interfaces, automation, permissions, and tools that institutions can maintain.*

**Suggested public_id:** `systems-builder-role-lab-ops-workflows`

### Prompt v1

```
Editorial institutional photograph of creative-technology infrastructure — the room and systems behind the art, not the artwork itself.
Horizontal 3:2. Digital lab: labeled equipment stations, booking whiteboard or wall schedule, cable management, 3D printer / fabrication desk edge, laptop with a simple ops dashboard or workflow diagram (Notion/Airtable-like tables abstract, no readable private data).
Optional small paper runbook or laminated checklist in foreground.
Feel: maintainable institutional systems — Digilab / museum tech ops, calm and legible.
No hero “AI god mode” UI, no purple glow, no city skyline, no consulting pitch deck.
Photoreal, desaturated teal concrete + amber practical light.
```

### Refine toward

- **Ops and continuity** (labels, docs, equipment pathways) over generative spectacle  
- Should read as something a staff member could hand off  
- Quiet diagram okay if small; room must dominate  

---

## After you generate

1. Upload to Cloudinary under the suggested folder / public_ids  
2. Drop URLs into `src/content/institutions/artistInfrastructureMedia.ts` as:
   - `POSITIONING_ARTIST`
   - `POSITIONING_EDUCATOR`
   - `POSITIONING_SYSTEMS`
3. Point `artistInfrastructure.positioning.cards` at those constants  
4. Keep Creative AI layer stills on `/creative-ai` only  

### Checklist so the triad stays distinct

| Card | Should show | Should avoid |
| --- | --- | --- |
| Artist | Artwork / material culture | Teaching room, dashboard ops |
| Educator | Workshop + learner artifact | Solo sculpture hero, pure infra room |
| Systems Builder | Lab ops / docs / equipment | Prompt-art collage, classroom circle only |
