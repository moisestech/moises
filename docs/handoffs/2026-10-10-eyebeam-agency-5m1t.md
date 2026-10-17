# Cursor handoff — Eyebeam AGENCY application + artwork archive (2026-10-10)

## Objective
Get moises.tech ready to be the portfolio link for Eyebeam's AGENCY Virtual Residency. **Submission deadline: Sun Oct 11, 2026, 11:59 PM ET.** The application can't be edited after it's submitted, so the linked pages must be correct in production before Moises submits.

## Context (verified by Claude, 2026-10-10)
- Branch: `feat/ica-meeting-pages`, HEAD `2abc77a`, clean tree. Previous commit `cda77bf` ("Present Doom Scrolling Treadmill as the Chroma documentation…").
- Moises's notes say production = `586e41b…` with the same message as `cda77bf`. **The hashes don't match: confirm on Vercel which commit is live** before assuming anything.
- Application workspace (answers, checklist, narrative): `~/Documents/grants/eyebeam-agency-2026/`
  - `02_DRAFT_ANSWERS.md`: proposal text to reuse on /eyebeam
  - `03_5M1T_NARRATIVE_AND_QUOTES.md`: sourced facts + quotes for 5M1T
- Artwork folders: `~/Documents/art/artworks/5-million-dollars-1-terabyte/` (01_images, 03_sources/SOURCES.md, 04_website-draft/five_million_dollars.draft.ts) and `~/Documents/art/artworks/doomscrolling-treadmill-touch-grass-station/` (incl. 03_concept-renders_dalle-aug2024 = original process images).
- Proposal: **WHO CAN SAY NO? Material Studies of Agency, Refusal, and Distributed Technological Systems.** Umbrella: MATERIALIZING THE INTERNET. Work samples: Doom Scrolling Treadmill + 5 Million Dollars 1 Terabyte.

## Hard rules
- Never invent facts, dates, credits, dimensions or quotes. Unconfirmed → `[MOISES: …]` (the build fails on it, by design) or leave out.
- **5M1T credit:** `ART404 (Manuel Palou and Moises Sanabria)`, 2011. Sources: Rhizome interview Apr 9, 2012 and Miami Rail. Never present it as Moises's solo work (Eyebeam is individual-only). Photo `06_moises-sanabria-with-the-work` shows Moises; the drive was his.
- Doom Scrolling Treadmill ≠ Doomscrolling Marathon (CDMX). Don't mix their media.
- Reuse `ArtworkMediaCarousel` / `ImageWithSkeleton`; extend only for real reusable need.
- Don't merge to main or promote to production without Moises's explicit OK. Preview deploys are fine.

## Tasks (in priority order)
### P0 — before submission (Sun Oct 11)
1. **/eyebeam for AGENCY** (`src/constants/eyebeam-inquiry.ts`, `EyebeamInquiryPage.tsx`)
   - Make the current inquiry WHO CAN SAY NO? (core question + refusal hypothesis; text from `02_DRAFT_ANSWERS.md` P1/P2, shortened).
   - `selectedWorks`: Doom Scrolling Treadmill (first) + 5 Million Dollars 1 Terabyte (credit ART404 (Manuel Palou and Moises Sanabria) + one line: met at NWSA, his hard drive, transmediale 2012 together). Decide with Moises whether Simulation Faith / Price of Existence stay. The plan doc says max 3.
   - The bio says "Digital Technical Director at Oolite Arts": the Oolite contract ended mid-Sept 2026. `[MOISES: current title]`.
   - Check metadata/OG image; the page must make sense in 2–4 minutes.
2. **Production parity:** confirm `/art/doomscrolling_treadmill` and `/eyebeam` in production show the intended version. If the preview (`2abc77a`) should be live, prepare the promotion and ask Moises.
3. Smoke test in a logged-out browser: /eyebeam, /art/doomscrolling_treadmill, /art/five_million_dollars (mobile + desktop), and confirm the Vimeo 1009954393 and Cloudinary MP4 play.


**P0 addition (2026-10-11): sync the online artist CV.** `/cv/artist` (`src/constants/cv.ts`, last changed Jun 17) is public and linked from /eyebeam, and it is out of date. Make it match `~/Documents/art/cv-and-bio/Moises_Sanabria_Artist_CV_2026-10.md` (the verified master; the changes list is in that folder's README.md):
- Charlot: Paris 2018 + Tel Aviv 2018–19 (not London)
- Haus der Kulturen der Welt; Hammer Museum; Geneva, Switzerland; New World School of the Arts; Eryk Salvaggio; Kelani Nichole
- Add: Wolfsonian–FIU Creative Fellowship 2026; AI24 Live (2023–); ART404 co-founder; 2012 Dark Drives / 5M1T (ART404); 2011 Low Budget Gallery; Locust Projects 2026 talk; Rhizome interview dated 2012
- Merge Chroma 2024 + Doom Scrolling Treadmill into one entry
- Remove the duplicate MOMus and Net Gala entries
Don't add anything that isn't in the .md.

### P1 — this week
4. **5M1T entry** (`five_million_dollars` in `src/constants/artworks.ts`): apply `04_website-draft/five_million_dollars.draft.ts`.
   - Upload `01_images/*_02,_03,_05,_06,_01` to Cloudinary under `art/moisestech-website/artworks/2011_5_million_1_terabyte/`, then replace the URL markers.
   - Fix the existing hero caption: it says transmediale install view, but that shot isn't the transmediale photo.
   - Add `mediaLayout: 'carousel'`, `exhibitionHistory`, press links, `photoCredit` (transmediale photo is CC BY-NC-SA; credit "Genz, Lindner / transmediale").
   - Dimensions / weight / "Custom plinth" / curator / transmediale dates stay unconfirmed until Moises confirms. Don't ship markers; leave existing values as they are until then.
   - The EN description closely follows transmediale's archive text: credit it or have Moises rewrite.
   - Add `related` both ways between `five_million_dollars` ↔ `doomscrolling_treadmill` (note: same method, 2011 → 2024).

### P2 — after the deadline
5. **"WHO ACTS?"** interactive section on the Doomscrolling page (spec in Moises's kernel §6): sparse node field (BODY, TREADMILL, WORK, FEED, PLATFORM, GRASS); hover/focus/tap reveals relations; keyboard and reduced-motion support; text fallback.
6. **PROCESS / EARLY STUDIES** section on Doomscrolling, kept separate from the documentary carousel. Source: the 19 DALL·E renders from 2024-08-05 in the artwork folder (Moises confirmed these are original process sketches).
7. Make the pattern reusable for 5M1T without making the pages identical.

## Open loops / approvals needed from Moises
- Which commit is live; approval to promote.
- Current title (Oolite).
- Whether Simulation Faith / Price of Existence stay on /eyebeam.
- Cloudinary upload (Moises's account).

## Next action
Task 1: update /eyebeam to WHO CAN SAY NO? with Treadmill + 5M1T, deploy a preview, and send Moises the preview URL.


## Update 2026-10-10 (later)
- Treadmill: Drive photos #1 and #5 aren't on the site yet; mapping in `~/Documents/art/artworks/doomscrolling-treadmill-touch-grass-station/drive-numbering-map.tsv`. Update the TS comment that says a 13th is unidentified.
- Master prompt: `docs/handoffs/CURSOR_MASTER_PROMPT_2026-10-10.md`.
