"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import MuxPlayer from "@mux/mux-player-react";
import HeroGradientOverlay from "./HeroGradientOverlay";

// Helper to get translation for a given object and language
function getTranslation(obj: { en: string; es?: string; fr?: string }, lang: string) {
  if (lang === 'es' && obj.es) return obj.es;
  if (lang === 'fr' && obj.fr) return obj.fr;
  return obj.en;
}

const heroBadges = {
  intensive: {
    en: '2-Day Intensive',
    es: 'Intensivo de 2 días',
    fr: 'Stage intensif de 2 jours',
  },
  chapters: {
    en: '50 Chapters',
    es: '50 capítulos',
    fr: '50 chapitres',
  },
  book: {
    en: 'Book this workshop',
    es: 'Reservar este taller',
    fr: 'Réserver cet atelier',
  },
};

export default function HeroSection() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <section className="relative w-full aspect-[16/9] flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MuxPlayer
          playbackId="CH6vKfURI3mrhIGC3TZ1dCSWNYDxDm7myS84L9F2qRU"
          streamType="on-demand"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
          style={{ pointerEvents: 'none' }}
        />
        <HeroGradientOverlay />
      </div>
      <div className="relative z-20">
        <h1 className="mb-4">
          <SparklesText className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white">AI and The Arts</SparklesText>
        </h1>
        <div className="mb-8">
          <MorphingText
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white"
            texts={[
              "2 days from idea → motion asset",
              "Master Gen-AI video workflows",
              "Build a portfolio-ready AI project",
            ]}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <span className="bg-purple-600/80 px-4 py-2 rounded-full font-semibold text-lg">{getTranslation(heroBadges.intensive, language)}</span>
          <span className="bg-white/10 px-4 py-2 rounded-full text-purple-200 font-medium text-base">{getTranslation(heroBadges.chapters, language)}</span>
        </div>
        <a href="mailto:m@moises.tech" className="inline-block mt-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-bold transition-colors">{getTranslation(heroBadges.book, language)}</a>
      </div>
    </section>
  );
} 