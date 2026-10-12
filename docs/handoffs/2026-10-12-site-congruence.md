# Pass 2 — site congruence (2026-10-12, after the Eyebeam submission)
Master (shared): https://claude.ai/code/artifact/d6f46909-338e-4a0f-9b44-282d420368f8 — section "Pass 2". All rules in CURSOR_MASTER_PROMPT_2026-10-10.md still apply.
In Cursor: "Check out main, pull, then do docs/handoffs/2026-10-12-site-congruence.md tasks 1, 2, 5, 6 on a new branch. Preview, then wait for my yes."

Verified on origin/main 76ad524: /eyebeam = Who Can Say No?; 5M1T credit ART404 (Manuel Palou and Moises Sanabria); 5M1T batch A on Cloudinary + manifest.

1. [Cursor] Sync src/constants/cv.ts → ~/Documents/art/cv-and-bio/Moises_Sanabria_Artist_CV_2026-10.md (change list: that folder's README.md). Still wrong on main: Galerie Charlot London (→ Paris 2018 + Tel Aviv 2018–19), "Hause Der Kulturen", "Hammerman Museum", "Geneva, Italy". Missing: Wolfsonian 2026, AI24 Live (2023–), ART404, Dark Drives/5M1T, 2011 Low Budget Gallery, Locust 2026.
2. [Cursor] public/grant/wolfsonian-fellowship/moises-sanabria-cv.pdf is a "Dummy PDF file" → replace it with ~/Documents/art/cv-and-bio/Moises_Sanabria_Artist_CV_2026-10.pdf, or remove it.
3. [Moises → Cursor] 5M1T description / description_es mirror transmediale's archive text → Moises's own text, or credit transmediale.
4. [Moises → Cursor] 5M1T dimensions, "Custom plinth", curator "Jacob Lillemose" are unverified → confirm or remove.
5. [Cursor] Treadmill batch B (Drive #1, #5; see drive-numbering-map.tsv). Ask before adding them to the carousel; fix the "thirteenth … not identified" comment (line ~820).
6. [Cursor/Moises] Commit docs/handoffs/; local checkout → main; `git worktree prune`; delete .git/stale-maintenance-lock-from-claude-2026-10-12 (a lock file Claude's fetch left behind; safe to delete).
7. [Moises → Cursor] public/downloads/Moises_Sanabria_AI_Engineer_Resume.pdf is the May version → swap in the Oct 6 export once Moises picks the version.
