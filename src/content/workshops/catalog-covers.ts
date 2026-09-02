/**
 * Cloudinary cover art for public workshop catalog cards + SEO landings.
 * Filenames from dccmiami/workshops asset batch (v1776525*).
 */

import type { WorkshopCatalogTrack } from './catalog';
import { QUICKBOOKS_AUTOMATION_BANNER } from './quickbooksAutomation';
import { LANDING_MEDIA_CDN } from './moonlighter-ai-3d-printing/landing-media';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

function cover(path: string) {
  return `${CDN}/${path}`;
}

/** Track accent tokens for color-coded catalog UI */
export const WORKSHOP_TRACK_VISUAL: Record<
  WorkshopCatalogTrack,
  { label: string; swatch: string; ring: string; glow: string; chip: string }
> = {
  Presence: {
    label: 'Presence',
    swatch: '#22d3ee',
    ring: 'ring-cyan-400/40',
    glow: 'from-cyan-500/40 via-sky-500/20 to-transparent',
    chip: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30',
  },
  'AI Literacy': {
    label: 'AI Literacy',
    swatch: '#a78bfa',
    ring: 'ring-violet-400/40',
    glow: 'from-violet-500/40 via-fuchsia-500/15 to-transparent',
    chip: 'bg-violet-500/20 text-violet-200 border-violet-400/30',
  },
  'Creative Coding': {
    label: 'Creative Coding',
    swatch: '#fb7185',
    ring: 'ring-rose-400/40',
    glow: 'from-rose-500/40 via-orange-500/15 to-transparent',
    chip: 'bg-rose-500/20 text-rose-200 border-rose-400/30',
  },
  'Systems + Archive': {
    label: 'Systems + Archive',
    swatch: '#34d399',
    ring: 'ring-emerald-400/40',
    glow: 'from-emerald-500/40 via-teal-500/15 to-transparent',
    chip: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
  },
};

/**
 * Primary cover per catalog slug. Prefer exact filename matches; otherwise nearest thematic still.
 */
export const WORKSHOP_CATALOG_COVERS: Record<string, { src: string; alt: string }> = {
  'moonlighter-ai-3d-printing': {
    src: LANDING_MEDIA_CDN['hero-pipeline'],
    alt: 'AI-assisted 3D printing workshop — pipeline from image to print',
  },
  'own-your-digital-presence': {
    src: cover('v1776525115/dccmiami/workshops/portfolio-pages-that-actually-work_hcqul0.png'),
    alt: 'Portfolio pages workshop — artist digital presence structure',
  },
  'seo-for-artists-in-the-age-of-ai-search': {
    src: cover('v1776525117/dccmiami/workshops/social-profiles-links-hubs-public-presence_zevdko.png'),
    alt: 'SEO and public presence for artists',
  },
  'writing-about-your-digital-practice': {
    src: cover('v1776525120/dccmiami/workshops/writing-video-for-artists_pkxgsl.png'),
    alt: 'Writing and video language for artists',
  },
  'documentation-for-artists': {
    src: cover('v1776525110/dccmiami/workshops/documentation-for-artitsts_akddqm.png'),
    alt: 'Documentation for artists workshop cover',
  },
  'ai-for-artists-voice-workflow-and-authorship': {
    src: cover('v1776525106/dccmiami/workshops/ai-for-artists_dnwikc.png'),
    alt: 'AI for artists — voice, workflow, and authorship',
  },
  'vibe-coding-with-net-art': {
    src: cover('v1776525118/dccmiami/workshops/vibe-coding-with-net-art_dtead3.png'),
    alt: 'Vibe coding with net art workshop cover',
  },
  'organizing-your-digital-studio': {
    src: cover('v1776525113/dccmiami/workshops/organizing-your-digital-studio_fverto.png'),
    alt: 'Organizing your digital studio workshop cover',
  },
  'ai-copyright-and-creative-risk': {
    src: cover('v1776525104/dccmiami/workshops/ai-copyright-and-creative-risk_kwjci9.png'),
    alt: 'AI copyright and creative risk workshop cover',
  },
  'portfolio-pages-that-actually-work': {
    src: cover('v1776525115/dccmiami/workshops/portfolio-pages-that-actually-work_hcqul0.png'),
    alt: 'Portfolio pages that actually work workshop cover',
  },
  'social-profiles-link-hubs-and-public-presence': {
    src: cover('v1776525117/dccmiami/workshops/social-profiles-links-hubs-public-presence_zevdko.png'),
    alt: 'Social profiles, link hubs, and public presence workshop cover',
  },
  'prompting-for-artists': {
    src: cover('v1776525115/dccmiami/workshops/prompting-for-artists_barj1n.png'),
    alt: 'Prompting for artists workshop cover',
  },
  'ai-research-for-creative-projects': {
    src: cover('v1776525110/dccmiami/workshops/ai-research-for-creative-projects_gl3bvh.png'),
    alt: 'AI research for creative projects workshop cover',
  },
  'ai-and-the-artist-statement': {
    src: cover('v1776525104/dccmiami/workshops/ai-and-the-artist-statement_u4kmlw.png'),
    alt: 'AI and the artist statement workshop cover',
  },
  'building-a-personal-ai-workflow': {
    src: cover('v1776525107/dccmiami/workshops/building-a-personal-ai-workflow_rlyzpf.png'),
    alt: 'Building a personal AI workflow workshop cover',
  },
  'code-art-into-html': {
    src: cover('v1776525110/dccmiami/workshops/code-art-into-html_q2segh.png'),
    alt: 'Code art into HTML workshop cover',
  },
  'interactive-web-projects-for-artists': {
    src: cover('v1776525113/dccmiami/workshops/interactive-web-projects-for-artist_eut7il.png'),
    alt: 'Interactive web projects for artists workshop cover',
  },
  'creative-coding-without-fear': {
    src: cover('v1776525110/dccmiami/workshops/creative-coding-without-fear_goplct.png'),
    alt: 'Creative coding without fear workshop cover',
  },
  'browser-based-artworks': {
    src: cover('v1776525104/dccmiami/workshops/browser-based-artworks_idpkeo.png'),
    alt: 'Browser-based artworks workshop cover',
  },
  'experimental-digital-forms': {
    src: cover('v1776525112/dccmiami/workshops/experimental-digital-forms_eo6r6m.png'),
    alt: 'Experimental digital forms workshop cover',
  },
  'archiving-digital-work': {
    src: cover('v1776525107/dccmiami/workshops/archiving-and-preserving-digital-artwork_bzdevi.png'),
    alt: 'Archiving and preserving digital artwork workshop cover',
  },
  'publishing-your-practice': {
    src: cover('v1776525116/dccmiami/workshops/publishing-your-digital-practice_qvb17r.png'),
    alt: 'Publishing your digital practice workshop cover',
  },
  'teaching-your-digital-practice': {
    src: cover('v1776525119/dccmiami/workshops/systems-for-documentation_ju68xm.png'),
    alt: 'Systems for documentation — teaching your practice',
  },
  'from-workshop-to-resource-packet': {
    src: cover('v1776525117/dccmiami/workshops/systems-and-archive-for-artists_xzrwin.png'),
    alt: 'Systems and archive for artists — resource packets',
  },
  'trust-is-not-a-vibe': {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/dccmiami/workshops/agentic-engineering-for-beginners/02-Evaluating-AI-Output-Peel-Open-Hero_rawqgs.png',
    alt: 'Teaching illustration — evaluating an AI output by opening the system beneath it. Not a product screenshot.',
  },
  'designing-a-sustainable-digital-practice': {
    src: cover('v1776525104/dccmiami/workshops/ai-and-the-arts-portfolio_r9t3ky.png'),
    alt: 'AI and the arts portfolio — sustainable digital practice',
  },
  'quickbooks-automation-for-artists': {
    src: QUICKBOOKS_AUTOMATION_BANNER.src,
    alt: QUICKBOOKS_AUTOMATION_BANNER.alt,
  },
};

/** Extra stills available for galleries / future cards (not all mapped to a slug). */
export const WORKSHOP_COVER_LIBRARY = {
  'web-based-exhibitions': cover('v1776525119/dccmiami/workshops/web-based-exhibitions_ewkriz.png'),
  'using-ai-to-play-in-the-multiverse': cover(
    'v1776525119/dccmiami/workshops/using-ai-to-play-in-the-multiverse_eqxdli.png'
  ),
  'protect-your-work-online': cover('v1776525114/dccmiami/workshops/protect-your-work-online_bhk6p3.png'),
  'filming-screens-and-digital-art': cover(
    'v1776525113/dccmiami/workshops/filming-screens-and-digital-art_tu6dmy.png'
  ),
  'game-engines-for-artists': cover('v1776525113/dccmiami/workshops/game-engines-for-artists_tuuhne.png'),
  'creative-coding-in-the-browser': cover(
    'v1776525112/dccmiami/workshops/creative-coding-in-the-browser_wxsozr.png'
  ),
  'code-and-creative-projects': cover('v1776525109/dccmiami/workshops/code-and-creative-projects_vfp9cy.png'),
  'creating-for-mixed-reality': cover('v1776525109/dccmiami/workshops/creating-for-mixed-reality_c58qr6.png'),
  'building-3d-spaces-online': cover('v1776525107/dccmiami/workshops/building-3d-spaces-online_rr0fd6.png'),
  'archive-digital-artwork': cover('v1776525107/dccmiami/workshops/archive-digital-artwork_uzufag.png'),
  'ai-for-3d-artists': cover('v1776525106/dccmiami/workshops/ai-for-3d-artists_uryhf0.png'),
  'ai-and-the-gallery-proposal': cover('v1776525104/dccmiami/workshops/ai-and-the-gallery-proposal_bje7tl.png'),
  '3d-printing-workshop': cover('v1776525103/dccmiami/workshops/3d-printing-workshop_zwzabw.png'),
} as const;

export function getWorkshopCover(slug: string): { src: string; alt: string; pending?: boolean } | null {
  return WORKSHOP_CATALOG_COVERS[slug] ?? null;
}
