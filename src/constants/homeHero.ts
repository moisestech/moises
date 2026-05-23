import { artist, SELECTED_WORK_SLUGS } from '@/constants/artworks';

export type HomeHeroSlide = {
  slug: string;
  title: string;
  year: number;
  imageUrl: string;
  imageAlt: string;
  href: string;
};

/** Curated subset of selected works for the homepage hero carousel. */
export const HOME_HERO_SLUGS = [
  'privacy_is_a_luxury',
  'smart_shoppers',
  'doomscrolling_treadmill',
  'simulation_faith',
] as const;

/** Pinned initial slide — must appear in HOME_HERO_SLUGS. */
export const HOME_HERO_DEFAULT_SLUG = 'privacy_is_a_luxury';

function assertHomeHeroConfig() {
  if (process.env.NODE_ENV === 'production') return;

  for (const slug of HOME_HERO_SLUGS) {
    if (!SELECTED_WORK_SLUGS.includes(slug)) {
      console.warn(`[homeHero] "${slug}" is not in SELECTED_WORK_SLUGS`);
    }
    if (!artist.artworks[slug]) {
      console.warn(`[homeHero] "${slug}" has no artwork record`);
    }
  }

  if (!HOME_HERO_SLUGS.includes(HOME_HERO_DEFAULT_SLUG as (typeof HOME_HERO_SLUGS)[number])) {
    console.warn(`[homeHero] HOME_HERO_DEFAULT_SLUG "${HOME_HERO_DEFAULT_SLUG}" is not in HOME_HERO_SLUGS`);
  }
}

assertHomeHeroConfig();

export function getHomeHeroSlides(): HomeHeroSlide[] {
  return HOME_HERO_SLUGS.flatMap((slug) => {
    const artwork = artist.artworks[slug];
    const image = artwork?.images[0];
    if (!artwork || !image?.url) return [];

    const imageAlt = image.caption ?? `${artwork.title} (${artwork.year})`;

    return [
      {
        slug,
        title: artwork.title,
        year: artwork.year,
        imageUrl: image.url,
        imageAlt,
        href: `/art/${slug}`,
      },
    ];
  });
}

export function getHomeHeroDefaultSlide(): HomeHeroSlide | undefined {
  return getHomeHeroSlides().find((slide) => slide.slug === HOME_HERO_DEFAULT_SLUG);
}
