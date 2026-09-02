import type { MetadataRoute } from 'next';

const ORIGIN = 'https://moises.tech';

/** Public hire + institutional + art entry URLs. Private opportunity overlays stay out. */
const ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']; priority: number }[] =
  [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/capabilities', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/ai-engineering', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/forward-deployed', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/creative-ai', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/creative-strategist', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/research', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/research/the-algorithm-is-outside', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/research/born-into-the-machine', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/projects/agentic-ops', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/career-packet', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/cv/tech', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/opportunities', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/opportunities/forward-deployed-ai-engineer', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/opportunities/ai-solutions-architect', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/artist-infrastructure', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/oolite-arts', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/institutions', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ica-miami', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/bakehouse', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/services/smartsign', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/ai24', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/projects/lore-machine', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/projects/infra24', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/projects/oolite-digital-lab', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/workshops', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/workshop/moonlighter-ai-3d-printing', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/workshop/moonlighter-ai-3d-printing/resources', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/workshop/trust-is-not-a-vibe', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/workshop/trust-is-not-a-vibe/learn/looks-right', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/workshop/trust-is-not-a-vibe/learn/four-lenses', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/workshop/trust-is-not-a-vibe/learn/seeded-failures', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/workshop/trust-is-not-a-vibe/learn/the-loop', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/workshop/trust-is-not-a-vibe/learn/the-harness', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/workshop/trust-is-not-a-vibe/learn/transfer', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/bio', changeFrequency: 'monthly', priority: 0.6 },
  ];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${ORIGIN}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
