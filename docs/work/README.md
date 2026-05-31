# Work microsites (`/work/[slug]`)

Tailored application pages for contractor outreach. **Reuse the recruiting stack** — do not fork UI.

## Architecture (scaled)

```text
src/content/work/<slug>.ts          ← role copy only
src/content/work/registry.ts
src/content/work/toOpportunity.ts   ← maps WorkSite → Opportunity

Shared (opportunities + work):
  OpportunityShell, OpportunityHero, OpportunityApplicationBanner
  SkillLogoTierGrid (work-only section)
  CaseStudyGrid + evidence/projects.ts + caseStudyCards.ts
  InnovationProcess, ResumeCTA, OpportunitySiteLinks
  opportunityTheme.ts, recruitingDefaults.ts, applicationBanners.ts
```

| Concern | Single source |
|---------|----------------|
| Banners | `src/content/evidence/applicationBanners.ts` |
| Email, LinkedIn, IG, CV, portfolio, Oolite | `recruitingDefaults.ts` → `recruitingCtas({ … })` |
| Case study images + links | `evidence/projects.ts` + per-role `caseStudyOverrides` |
| Headshot | `recruitingLogoBand.ts` → `moisesSanabriaHeadshot` |

## Add a new work page

1. Config in `src/content/work/<slug>.ts` — hero, `skillTiers`, `caseStudies` (overrides), `approachSteps`, `ctas: recruitingCtas({ emailSubject, … })`, `applicationBanner` from `applicationBanners.ts`.
2. Register in `registry.ts`.
3. Add banner to `applicationBanners.ts` when you have a Cloudinary URL.

## URLs

| Slug | Path |
|------|------|
| `creative-tech-image-tools` | `/work/creative-tech-image-tools` |

Alias: `/opportunities/creative-tech-image-tools` → `/work/creative-tech-image-tools`.

## Skill logos (`creative-tech-image-tools`)

All **16 logos on the page resolve** today:

| logoId | Source | Notes |
|--------|--------|--------|
| nextjs, react, python, docker, pytorch | Simple Icons CDN | Production-ready |
| sam | Simple Icons (`meta`) | SAM = Meta Segment Anything; label stays honest |
| iiif | Cloudinary `jobs/iiif-logo` | OK |
| openseadragon | `/public/images/tech-logos/openseadragon.svg` | Custom loupe icon |
| cloudinary, aws, supabase, vercel, replicate, azure, github, tailwind | Simple Icons CDN | OK |

**Not needed for this page** (used on CVS / other roles): openai, langchain, langgraph, crewai, huggingface, n8n, postgres, comfyui, stable-diffusion, typescript.

**Optional upgrades** (not blocking):

| logoId | Current | Better asset |
|--------|---------|----------------|
| sam | Meta logo proxy | Upload `jobs/logos/sam-segment-anything.svg` to Cloudinary if you want non-Meta mark |
| openseadragon | Local SVG | Official mark if you obtain one |
| comfyui | Text SVG in `/public` | Only if you add ComfyUI to a role grid |

## Banners

| Role | Cloudinary |
|------|------------|
| Creative-tech | `v1780248505/.../ChatGPT_Image_May_31_2026_12_19_46_PM_wu8xw1.png` |
| CVS GenAI | `senior-genai-engineer-banner_iljp58.png` |
| Knight TPS | `tech-strategy-knight-foundation-banner_lctdt0.png` |

Banner generation prompt: [`creative-tech-banner-prompt.md`](./creative-tech-banner-prompt.md).

Lore screenshot lives in `evidence/projects.ts` — shared by work, CVS GenAI, and Knight startup sections.
