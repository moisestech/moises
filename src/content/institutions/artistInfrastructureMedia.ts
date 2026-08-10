/**
 * Shared media for `/artist-infrastructure` and Creative AI layer cards.
 * Sourced from Locust / DCC Miami workshop assets (Cloudinary).
 */

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const ARTIST_INFRASTRUCTURE_BANNER_WIDE = {
  src: `${CDN}/v1786387514/dccmiami/workshops/the-art-of-ai-agents/artist-infrastructure-banner-wide_fqgn4y.png`,
  alt: 'Creative Infrastructure for Artists — workshops, tools, and systems that move artists from idea to working prototype',
  width: 2171,
  height: 724,
} as const;

export const CREATIVE_DIRECTION_SPATIAL_INTERFACE = {
  src: `${CDN}/v1786387510/dccmiami/workshops/the-art-of-ai-agents/creative-direction-spatial-interface_etmyvp.png`,
  alt: 'Creative direction — spatial interface and editorial judgment across generative systems',
  caption: 'Creative direction as spatial / editorial interface',
} as const;

export const AI_PRODUCTION_HUMAN_REVIEW_PIPELINE = {
  src: `${CDN}/v1786387512/dccmiami/workshops/the-art-of-ai-agents/ai-production-systems-human-review-pipeline_cvjuvi.png`,
  alt: 'AI production systems — generative pipelines with human review gates',
  caption: 'AI production systems under human review',
} as const;

export const SOFTWARE_INTERFACES_CREATOR_TOOL = {
  src: `${CDN}/v1786387511/dccmiami/workshops/the-art-of-ai-agents/software-interfaces-creator-tool_tg0p4r.png`,
  alt: 'Software interfaces — creator-facing tools that make AI operable for artists and institutions',
  caption: 'Creator-facing software interfaces',
} as const;
