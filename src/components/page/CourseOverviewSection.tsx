"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import CourseOverviewBackground from "./HeroGradientOverlay";
import { HyperText } from "@/components/magicui/hyper-text";

// Helper to get translation for a given object and language
function getTranslation(obj: { en: string; es?: string; fr?: string }, lang: string) {
  if (lang === 'es' && obj.es) return obj.es;
  if (lang === 'fr' && obj.fr) return obj.fr;
  return obj.en;
}

const courseOverviewHeading = {
  en: 'Course Overview',
  es: 'Descripción del curso',
  fr: 'Aperçu du cours',
  ht: 'Course Overview',
};
const courseOverviewText = {
  en: `This 2-day intensive lab is designed for creative professionals and teams who want to rapidly master AI-powered art workflows. Through 50 fast-paced, hands-on chapters, you'll learn to generate, refine, and deliver AI art assets for real-world use cases. The course is built on the learn-canvas system, using interactive components for maximum engagement and analytics.`,
  es: `Este laboratorio intensivo de 2 días está diseñado para profesionales creativos y equipos que desean dominar rápidamente los flujos de trabajo artísticos impulsados por IA. A través de 50 capítulos prácticos y acelerados, aprenderás a generar, refinar y entregar activos artísticos de IA para casos de uso reales. El curso se basa en el sistema learn-canvas, utilizando componentes interactivos para máxima participación y análisis.`,
  fr: `Ce laboratoire intensif de 2 jours est conçu pour les professionnels créatifs et les équipes souhaitant maîtriser rapidement les flux de travail artistiques alimentés par l’IA. À travers 50 chapitres pratiques et dynamiques, vous apprendrez à générer, affiner et livrer des ressources artistiques IA pour des cas d’utilisation concrets. Le cours est construit sur le système learn-canvas, utilisant des composants interactifs pour un engagement et une analyse maximum.`,
  ht: `This 2-day intensive lab is designed for creative professionals and teams who want to rapidly master AI-powered art workflows. Through 50 fast-paced, hands-on chapters, you'll learn to generate, refine, and deliver AI art assets for real-world use cases. The course is built on the learn-canvas system, using interactive components for maximum engagement and analytics.`,
};

export default function CourseOverviewSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const overviewBg = theme === 'dark' ? 'bg-black/80' : 'bg-white/90';
  return (
    <section className={`relative py-20 transition-colors duration-300 overflow-hidden ${overviewBg}`}>
      <CourseOverviewBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 grid md:grid-cols-1 gap-12 items-center">
        <div className="prose prose-invert text-lg max-w-none">
          <HyperText className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">{getTranslation(courseOverviewHeading, language)}</HyperText>
          <HyperText className="text-lg md:text-2xl mb-4 text-black dark:text-white">
            {getTranslation(courseOverviewText, language)}
          </HyperText>
        </div>
      </div>
    </section>
  );
} 