import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/search?q=', '/admin/', '/workshop/learn-ai-without-losing-yourself/rehearse'],
    },
    sitemap: ['https://mosies.tech/sitemap.xml'],
  };
}
