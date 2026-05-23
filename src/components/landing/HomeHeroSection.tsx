import { HOME_HERO_DEFAULT_SLUG, getHomeHeroSlides } from '@/constants/homeHero';
import { HomeHeroCarousel } from '@/components/landing/HomeHeroCarousel';

export default function HomeHeroSection() {
  const slides = getHomeHeroSlides();
  if (slides.length === 0) return null;

  return (
    <section aria-label="Featured works">
      <HomeHeroCarousel slides={slides} defaultSlug={HOME_HERO_DEFAULT_SLUG} />
    </section>
  );
}
