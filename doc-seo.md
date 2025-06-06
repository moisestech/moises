# SEO Implementation Plan for Moises Sanabria Website

This document tracks the step-by-step implementation of scalable, modern SEO for the Next.js 13/14 App Router project. It is a living checklist and reference for best practices, progress, and next steps.

---

## 1. Global Keyword Bank
- [ ] Create `/lib/seoKeywords.ts` with a master list of mid-tail keywords (comma-separated or array)
- [ ] Reference this list when tagging new works, essays, and topic pages

---

## 2. Per-Page Metadata with `generateMetadata()`
- [ ] Implement `generateMetadata()` for all dynamic pages (artworks, essays, topics)
  - [ ] Use relevant keywords from tags and the global bank
  - [ ] Always include: `title`, `description`, `keywords`, `alternates.canonical`, `openGraph`, `twitter`
- [ ] Centralize metadata logic in a utility (e.g., `getPageMetadata(work)`) for DRY code
- [ ] Add descriptive alt text to all images (with keywords where natural)

---

## 3. Anchor Pages & Internal Linking
- [ ] Create `/topics/[slug]` pages for each major keyword/cluster
  - [ ] H1 = exact keyword
  - [ ] Short intro paragraph
  - [ ] Grid of relevant works (`<ArtworkCard />`)
  - [ ] List of external press/links for authority
- [ ] Wire tags in artwork pages to topic pages (internal links)
- [ ] Cross-link between related works and topic hubs

---

## 4. Dynamic Sitemap & Robots.txt
- [ ] Add `/app/sitemap.xml/route.ts` to generate a dynamic sitemap from your data
- [ ] Add `/public/robots.txt` with `Sitemap: /sitemap.xml`
- [ ] Submit sitemap to Google Search Console & Bing Webmaster

---

## 5. Content Strategy & Monitoring
- [ ] Write long-form essays targeting 2–4 related keywords each
- [ ] Cross-link essays to relevant works and topic hubs
- [ ] Monitor SEO performance with Google Search Console, Bing Webmaster, and Lighthouse
- [ ] Update keyword bank and topic pages quarterly

---

## 6. Accessibility & OG Images
- [ ] Ensure all images have descriptive alt text
- [ ] Use compelling OG/Twitter images for each page
- [ ] Use semantic HTML and ARIA labels where needed

---

## Progress Log
- [x] (Today) Created this doc and outlined the plan
- [x] Updated tags for first artwork (`privacy_is_a_luxury`) with SEO keywords
- [x] Updated tags for second artwork (`simulation_faith`) with SEO keywords
- [ ] Continue updating tags for all artworks, using the template:
  - 5–10 tags per artwork, prioritizing keywords from seoKeywordsAlpha
  - Tags should be lower-case, descriptive, and match topic/anchor pages

---

**Add notes, todos, and progress here as you go!** 