# Knight Foundation — Technology Product Strategist application

This folder supports the **Technology Product Strategist** (Journalism Program) application package implemented on the site.

## Primary URL

- **Strategic dossier (share with recruiter):** [https://moises.tech/technology-product-strategy](https://moises.tech/technology-product-strategy)  
  (Use your production domain if different.)

## Print to PDF (résumé and cover letter)

Knight’s posting asks for **resume and cover letter** as attachments. This repo ships **print-optimized HTML** you convert to PDF locally (no Pandoc dependency):

1. **Résumé:** open `/technology-product-strategy/print/resume` → **Print** → **Save as PDF**  
   - Suggested filename: `Moises-Sanabria-Technology-Product-Strategist.pdf`
2. **Cover letter:** open `/technology-product-strategy/print/cover-letter` → **Print** → **Save as PDF**  
   - Suggested filename: `Moises-Sanabria-Knight-Cover-Letter.pdf`

Source copy for both documents lives in [`src/content/knightApplicationDocuments.ts`](../src/content/knightApplicationDocuments.ts). Résumé **experience** is pulled from [`src/constants/resume.ts`](../src/constants/resume.ts); edit there if dates or titles change.

## Email to recruiter

- **To:** recruiter@kf.org  
- **Subject:** Technology Product Strategist — Moises Sanabria  
- **Attachments:** résumé PDF, cover letter PDF  
- **Body:** Short note + link to `/technology-product-strategy` (do not attach large video files; embeds belong on the page).

## Related site content

- **Knight grant proposal microsite (different purpose):** `/grant/knight-foundation` — do **not** substitute this for the job dossier in the first email; it reads as funding narrative, not hiring narrative.

## Recommender

See [recommender-brief.md](./recommender-brief.md) for what to ask your reference to stress and optional send timing.
