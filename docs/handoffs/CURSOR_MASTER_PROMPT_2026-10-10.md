# CURSOR MASTER PROMPT — moises.tech · Eyebeam AGENCY · artwork archive (2026-10-10)

Master copy (shared page, same link after every edit): https://claude.ai/code/artifact/d6f46909-338e-4a0f-9b44-282d420368f8 — this repo file is synced from it (last sync 2026-10-11). If they differ, the shared page wins.

In Cursor (Agent mode, repo root) say: "Read and follow docs/handoffs/CURSOR_MASTER_PROMPT_2026-10-10.md."

---

You are working on Moises Sanabria's site (Next.js, `src/constants/artworks.ts` content model, Cloudinary cloud `dck5rzi4h`, Vercel). Act as a careful engineer and archivist: accuracy over speed, smallest correct change, and nothing invented.

## 0. Read first (in this order)
1. `docs/handoffs/2026-10-10-eyebeam-agency-5m1t.md`: task list and priorities
2. `docs/eyebeam-inquiry-page-plan.md`: /eyebeam page intent
3. `docs/cloudinary-mcp-setup.md` and `docs/cloudinary-asset-audit.md`
4. `~/Documents/grants/eyebeam-agency-2026/02_DRAFT_ANSWERS.md` (proposal text) and `03_5M1T_NARRATIVE_AND_QUOTES.md` (sourced facts)
5. `~/Documents/art/artworks/5-million-dollars-1-terabyte/` (INDEX.md, 03_sources/SOURCES.md, 04_website-draft/five_million_dollars.draft.ts)
6. `~/Documents/art/artworks/doomscrolling-treadmill-touch-grass-station/` (INDEX.md, drive-numbering-map.tsv)
7. `~/Documents/art/cv-and-bio/` (Moises_Sanabria_Artist_CV_2026-10.md = verified CV master, README.md, VERSIONS.md)
Then reply with a short plan and the exact files you will touch, and wait for "go".

## 1. Deadline
Eyebeam AGENCY Virtual Residency closes **Sun Oct 11, 2026, 11:59 PM ET**. moises.tech is the portfolio link, so /eyebeam, /cv/artist and the two work pages must be correct **in production** before Moises submits (target: Sun 6 PM ET). Anything not ready by then is cut, not rushed.

## 2. Non-negotiable rules
- **No invented facts.** Every date, credit, dimension, quote or caption must trace to a file in the folders above or a URL in SOURCES.md. If something is unknown, write `[MOISES: question]`. `scripts/check-claim-placeholders.mjs` makes the build fail on it. That's intended; list every marker you add.
- **Credits:**
  - 5 Million Dollars 1 Terabyte (2011) = `ART404 (Manuel Palou and Moises Sanabria)`. Sources: Rhizome interview Apr 9, 2012; Miami Rail.
  - Never present 5M1T as a Moises solo work.
  - Doom Scrolling Treadmill photos: Brooke D'Avanzo.
  - transmediale photo: "© Genz, Lindner / transmediale", CC BY-NC-SA.
- **Doom Scrolling Treadmill (2024, Superblue/Chroma) and Doomscrolling Marathon (CDMX) are different works.** Never mix their media.
- Quotes must be verbatim. Keep "[sic]" where a source has a typo.
- Reuse `ArtworkMediaCarousel` and `ImageWithSkeleton`. Don't fork components for one page.
- Git: work on a new branch off `feat/ica-meeting-pages`. Small commits with plain-English messages. **Don't merge to main, promote to production, or delete Cloudinary assets without Moises's explicit "yes".** Preview deploys are fine.
- Never commit secrets. Use the Cloudinary MCP (OAuth) per `docs/cloudinary-mcp-setup.md`.

## 3. Cloudinary: how to store and organize images
Goal: every artwork image lives in Cloudinary in a predictable place, with metadata, and maps 1:1 to a local master file.

**Folders: don't move or rename existing assets** (that breaks live URLs). New uploads go into the artwork's existing folder:
- 5M1T → `art/moisestech-website/artworks/2011_5_million_1_terabyte/`
- Doom Scrolling Treadmill → `art/moisestech-website/artworks/2024-doomscrolling-treadmill-touch-grass-station/`
- Doomscrolling Marathon → `art/moisestech-website/artworks/2024_doomscrolling_marathon/`
- New artworks (convention going forward): `art/moisestech-website/artworks/<YYYY>_<snake_case_slug>/`

**public_id:** the local filename without its extension, unchanged (e.g. `art404_5-million-dollars-1-terabyte_02_pedestal-angle_4180px`). Set `use_filename: true, unique_filename: false, overwrite: false`. If a public_id already exists, stop and report; don't overwrite.

**Tags:** `artwork:<slug>`, `year:<YYYY>`, `type:install|detail|process|portrait|press`, `site:moisestech`.

**Contextual metadata:** `alt` (literal description of what's visible), `caption` (as on the site), `credit`, `license` (if any), `source_file` (the local relative path).

**Manifest (required):** after uploading, write `<artwork folder>/cloudinary-manifest.json` locally, with an array of `{ local_file, md5 (from _copy-log.tsv), public_id, secure_url, width, height, tags, credit }`. Then use `secure_url` values in `artworks.ts`.

**Delivery:** in code, use the existing pattern (versioned `res.cloudinary.com/dck5rzi4h/image/upload/v…/…`). Let the carousel apply width transforms (`f_auto,q_auto,w_…`).

If the Cloudinary MCP isn't connected, stop and tell Moises. He can upload in the Cloudinary console using the same folders and public_ids, then paste the URLs back. Don't hand-type URLs.

### Upload batches
- **A — 5M1T** (from `~/Documents/art/artworks/5-million-dollars-1-terabyte/01_images/`):
  - `_01_transmediale-2012-vitrine_photo-genz-lindner_4928px.jpg` (type:install; credit Genz, Lindner / transmediale; license CC BY-NC-SA)
  - `_02_pedestal-angle_4180px.jpg` (install)
  - `_03_vertical-front_1901px.jpg` (detail)
  - `_05_side-close_1857px.jpg` (detail)
  - `_06_moises-sanabria-with-the-work_941px.jpg` (type:portrait; alt: "Moises Sanabria standing beside the hard drive on its plinth")
  - `_04_…_current-website-hero` is already on Cloudinary as `five-million-dollars-1-terabyte-2011-art404_daxvlx`. Don't re-upload it.
- **B — Doom Scrolling Treadmill:** Drive photos #1 and #5 aren't on the site. Per `drive-numbering-map.tsv`:
  - #1 = `01_install-photos_caff24-chroma-fest/moises-sanabria_doomscrolling-treadmill-touch-grass-station_social-01.jpg`
  - #5 = `…_chroma-fest-2024_01.jpg`

  Upload them as `moises-sanabria-doom-scrolling-treadmill-1` and `-5` to match the existing series. Ask Moises before adding them to the carousel. Update the TS comment that says the 13th is unidentified.
- **C — Process sketches (after the deadline):** 19 DALL·E renders from 2024-08-05 in `03_concept-renders_dalle-aug2024/` (PNG only; skip the duplicate WEBPs). Folder `…/2024-doomscrolling-treadmill-touch-grass-station/process/`, type:process. Not in the documentary carousel.

## 4. Tasks in priority order
**P0 — before Sun 6 PM ET**
1. Confirm which commit is live on Vercel. Moises's notes say `586e41b`; local has `cda77bf` with the same message. Report the result.
2. `/eyebeam` (`src/constants/eyebeam-inquiry.ts`, `EyebeamInquiryPage.tsx`):
   - Inquiry = **WHO CAN SAY NO? Material Studies of Agency, Refusal, and Distributed Technological Systems**, under the umbrella MATERIALIZING THE INTERNET. Use the core question and the refusal hypothesis, condensed from 02_DRAFT_ANSWERS P1/P2.
   - Selected works: Doom Scrolling Treadmill first, then 5 Million Dollars 1 Terabyte (credit + one line: Moises and Manuel met at New World School of the Arts, formed ART404, the drive was Moises's, and they traveled to transmediale 2012 together).
   - Ask before removing Simulation Faith / Price of Existence.
   - Bio says "Digital Technical Director at Oolite Arts": the contract ended mid-Sept 2026 → `[MOISES: current title]`.
3. Preview deploy. Smoke test logged out, on mobile and desktop: /eyebeam, /cv/artist, /art/doomscrolling_treadmill, /art/five_million_dollars. Videos play; no console errors. Send Moises the preview URL and a short diff summary. **Promote only after he says yes.**


**P0 addition (2026-10-11): sync the online artist CV.** `/cv/artist` (`src/constants/cv.ts`, last changed Jun 17) is public and linked from /eyebeam, and it is out of date. Make it match `~/Documents/art/cv-and-bio/Moises_Sanabria_Artist_CV_2026-10.md` (the verified master; the changes list is in that folder's README.md):
- Charlot: Paris 2018 + Tel Aviv 2018–19 (not London)
- Haus der Kulturen der Welt; Hammer Museum; Geneva, Switzerland; New World School of the Arts; Eryk Salvaggio; Kelani Nichole
- Add: Wolfsonian–FIU Creative Fellowship 2026; AI24 Live (2023–); ART404 co-founder; 2012 Dark Drives / 5M1T (ART404); 2011 Low Budget Gallery; Locust Projects 2026 talk; Rhizome interview dated 2012
- Merge Chroma 2024 + Doom Scrolling Treadmill into one entry
- Remove the duplicate MOMus and Net Gala entries
Don't add anything that isn't in the .md.

**P1 — this week**
4. Upload batch A. Then apply `04_website-draft/five_million_dollars.draft.ts` to `five_million_dollars`:
   - carousel, exhibitionHistory, press links (incl. Rhizome 2012 interview + Miami Rail), photoCredit, corrected credit;
   - fix the hero caption (that shot is not the transmediale photo);
   - keep the existing dimensions/weight until Moises confirms; don't ship markers;
   - the EN description mirrors transmediale's text, so ask Moises to rewrite or credit it.
5. `related` both ways: five_million_dollars ↔ doomscrolling_treadmill (note: "Same method, 2011 → 2024").
6. Upload batch B (after Moises approves).

**P2 — after the deadline**
7. "WHO ACTS?" interactive on the Doomscrolling page:
   - nodes BODY / TREADMILL / WORK / FEED / PLATFORM / GRASS; sparse field;
   - hover / focus / tap reveals relations;
   - keyboard support, reduced-motion support, text fallback;
   - not a startup flowchart.
8. PROCESS / EARLY STUDIES section from batch C.
9. Make the pattern reusable for 5M1T without making the pages identical.

## 5. Definition of done (report back in this format)
- Done / changed (files, commits, preview URL)
- Cloudinary: uploaded public_ids + manifest path
- `[MOISES: …]` markers added (list)
- Risks or anything you couldn't verify
- The single next action that needs Moises
