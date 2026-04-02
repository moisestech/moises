# Cloudinary Asset Audit — Manual Scan

**Date:** March 2026  
**Cloud:** `dck5rzi4h`  
**Base path:** `art/moisestech-website/`

This audit was performed by scanning the codebase for Cloudinary URLs. **Cloudinary MCP is not yet configured** — once added, run the "Scan my Cloudinary assets" prompt from [cursor-prompts.md](cursor-prompts.md) for a live comparison.

---

## 1. Cloudinary URLs Referenced in Code

### By Source File

| File | Count | Paths |
|------|-------|-------|
| `src/constants/artworks.ts` | 36 | artworks/, root, exhibitions/ |
| `src/constants/exhibitions.ts` | 12 | exhibitions/, events/, root |
| `src/constants/eyebeam-inquiry.ts` | 6 | touchgrass, artworks/ |
| `src/constants/noisy-systems.ts` | 1 | artworks/2024_doomscrolling_marathon |
| `src/constants/artist.ts` | 1 | bio/ |
| `src/components/page/OoliteDigitalOverviewPage.tsx` | 7 | own-your-digital-presence/ |
| `src/components/workshop/TechNonprofitNavOolite.tsx` | 2 | tech-nonprofit/oolite/logos/ |
| `src/app/(main)/page.tsx` | 3 | digitaldivinities (hero) |
| `src/app/(main)/art/smart-shoppers/page.tsx` | 1 | smart_shoppers |
| `src/app/(main)/art/price-of-existence/page.tsx` | 1 | video (SmartShoppers) |

### Unique Asset Paths (extracted from URLs)

**Artworks:**
- `artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg`
- `artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`
- `artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg`
- `artworks/2024_doomscrolling_marathon/moises-sanabria-doomscrolling-marathon-proyecto-aparadores-cdmx-2024_jilui4.png`
- `artworks/2021_beyond_money/moises-sanabria-beyond-money-1_2021_deslxp.png` (+ 2 more)
- `artworks/2011_5_million_1_terabyte/five-million-dollars-1-terabyte-2011-art404_daxvlx.jpg`
- `artworks/2020_groceries_in_the_times_of_quarantine/moises-sanabria-groceries-in-the-times-of-quarantine-2020_bhiwwg.png`
- `artworks/2016_netflix_and_chill_airbnb/` (7 images)

**Root-level (legacy):**
- `price_of_existence_wideshot.png`, `price_of_existence_detail_uuw5yf.jpg`
- `smart_shoppers__bsw9ko.jpg`
- `touchgrass-doomscrolling-treadmill-stations-*.jpg` (5 images)
- `vr_hug_moisesdsanabria_tomgalle_2017_csfeef.jpg`
- `moises-sanabria-vr-headset-bathtub_minlbi.jpg`
- `eye_Moises_Sanabria_x_John_Yuyi_qiezip.jpg`
- `moisesdsanabria-babyagi_ewquhe.webp`
- `moises-sanabria-laptop-face_k9jzqg.jpg`
- `digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`
- `corporate-weapons-1-facebook_rtb6f5.jpg`, `corporate-weapons-2-mcdonalds_cfg8ha.jpg`
- `ai-everydays_2023_tw5k7j.jpg`
- `tumblr_npjwy8Sdzx1r1ubs7o1_1280_fuyjfc.jpg` (+ 2 more)
- `neural-wealth_xiuodf.jpg`, `meditation-battlestation_b7ne15.jpg`, `pc-liquid-cool-nike-shoe_isqxjd.jpg`
- `5-million-dollars-1-terabyte_art404.jpg`

**Exhibitions:**
- `exhibitions/oct_2024_post_masters_low_resolution/`
- `exhibitions/may_2025_netartgala_ny/`, `exhibitions/apr_2025_technofetishism_momus/`
- `exhibitions/dec_2024_dminti_notions_of_home/`, `exhibitions/dec_2024_satellite-art-show_mia/`
- `exhibitions/dec_2023_bakehouse_breadbytes/`
- `exhibitions/2023_dec_future-muses_mia/`
- `exhibitions/june_2025_algoritmica_intima_cdmx/`

**Other:**
- `events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg`
- `own-your-digital-presence/` (workshop images)
- `tech-nonprofit/oolite/logos/`
- `bio/moises-pfp-test-user-face-3_exmerc.jpg`

---

## 2. Recommendations (Once Cloudinary MCP Is Available)

1. **Run full scan** — List all assets in `art/moisestech-website/` and compare to this list.
2. **Find orphaned assets** — Uploaded but not referenced in code.
3. **Find missing assets** — URLs in code that return 404.
4. **Organize root-level assets** — Move legacy root images into `artworks/{year}_{slug}/` folders.
5. **Tag by artwork** — Add tags like `privacy_is_a_luxury`, `doomscrolling_treadmill` for search.
6. **Optimize URLs** — Consider `w_1200,q_auto,f_auto` for delivery.

---

## 3. Note on price-of-existence Page

`src/app/(main)/art/price-of-existence/page.tsx` references a **video** URL:
`SmartShoppers2024-MoisesSanabria_cb0po9.mp4` — this appears to be mislabeled (Smart Shoppers, not Price of Existence). Verify and fix if needed.
