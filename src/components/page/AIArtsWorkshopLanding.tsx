"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Calendar, BookOpen, DollarSign, Mic, Wifi, Monitor, PlusCircle, Mail, Phone, ArrowRight, Heart, Target, Award, TrendingUp, Check, Sparkles, Code, Video, ShieldCheck, Globe, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect, useState, useRef } from 'react';
import { TextReveal } from "@/components/magicui/text-reveal";
import HeroGradientOverlay from "./HeroGradientOverlay";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import HeroSection from "./HeroSection";
import { HyperText } from "@/components/magicui/hyper-text";
import { useTheme } from "@/contexts/ThemeContext";
import AiArtsNav from "./AiArtsNav";
import MuxPlayer from "@mux/mux-player-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import CourseOverviewSection from "./CourseOverviewSection";
import RoadmapSection from "./RoadmapSection";

// Custom hook to detect if an element is in the viewport, with debug logging
const useOnScreen = (options: IntersectionObserverInit, label?: string) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            if (label) {
              console.log(`[useOnScreen] ${label} isIntersecting:`, entry.isIntersecting, 'scrollY:', window.scrollY);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        const currentRef = ref.current;

        return () => {
            if(currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options, label]);

    return [ref, isIntersecting] as const;
};

const curriculum_data = {
  day1: {
    title: "Day 1: Foundations & Workflow",
    chapters: [
      "Welcome & Course Overview", "The History of AI Art", "Key Concepts: Generative AI", "Types of AI Art Tools", "Setting Up Your Workspace", "Prompt Engineering Basics", "Text-to-Image: How It Works", "Hands-On: Your First AI Image", "Understanding Model Bias", "Copyright & Ethics in AI Art", "Exploring Style Transfer", "Hands-On: Style Transfer Demo", "Color, Composition, and AI", "Working with Datasets", "Hands-On: Curating a Dataset", "Image Enhancement Techniques", "Upscaling & Restoration", "Hands-On: Image Upscaling", "AI Art for Social Media", "Exporting & Sharing Your Work", "Feedback & Critique Session 1", "Building a Personal Workflow", "Troubleshooting Common Issues", "Q&A and Open Discussion", "Day 1 Recap & Badge",
    ],
  },
  day2: {
    title: "Day 2: Advanced Practice & Production",
    chapters: [
      "Welcome Back & Day 2 Goals", "Text-to-Video: The Next Frontier", "Hands-On: Text-to-Video Demo", "Animation with AI", "Hands-On: Simple Animation", "Audio & Music in AI Art", "Hands-On: AI Music Tools", "Integrating AI with Photoshop", "Hands-On: Photoshop Workflow", "AI in Branding & Marketing", "Client-Ready Deliverables", "Hands-On: Packaging Assets", "Compliance: C2PA & IP", "Hands-On: Compliance Checklist", "Building a Portfolio", "Peer Review & Gallery Walk", "Iteration & Feedback", "Final Project Kickoff", "Project Work Time 1", "Project Work Time 2", "Project Work Time 3", "Final Project Submission", "Showcase & Certificates", "Course Feedback & Reflection", "Graduation & Final Badge",
    ],
  }
};

// Translations for Roadmap left-rail and chapters
const roadmapTranslations = {
  heading: {
    en: 'Roadmap',
    es: 'Hoja de ruta',
    fr: 'Feuille de route',
    ht: 'Roadmap',
  },
  sessions: {
    day1_morning: {
      en: 'Day 1: Morning',
      es: 'Día 1: Mañana',
      fr: 'Jour 1 : Matin',
      ht: 'Day 1: Morning',
    },
    day1_afternoon: {
      en: 'Day 1: Afternoon',
      es: 'Día 1: Tarde',
      fr: 'Jour 1 : Après-midi',
      ht: 'Day 1: Afternoon',
    },
    day2_morning: {
      en: 'Day 2: Morning',
      es: 'Día 2: Mañana',
      fr: 'Jour 2 : Matin',
      ht: 'Day 2: Morning',
    },
    day2_afternoon: {
      en: 'Day 2: Afternoon',
      es: 'Día 2: Tarde',
      fr: 'Jour 2 : Après-midi',
      ht: 'Day 2: Afternoon',
    },
  },
};

// Chapter translations for each session
const chapterTranslations = {
  day1_morning: [
    { en: "Welcome & Course Overview", es: "Bienvenida y visión general del curso", fr: "Accueil et aperçu du cours" },
    { en: "The History of AI Art", es: "La historia del arte de IA", fr: "L'histoire de l'art IA" },
    { en: "Key Concepts: Generative AI", es: "Conceptos clave: IA generativa", fr: "Concepts clés : IA générative" },
    { en: "Types of AI Art Tools", es: "Tipos de herramientas de arte IA", fr: "Types d'outils d'art IA" },
    { en: "Setting Up Your Workspace", es: "Configurando tu espacio de trabajo", fr: "Configuration de votre espace de travail" },
    { en: "Prompt Engineering Basics", es: "Fundamentos de la ingeniería de prompts", fr: "Bases de l'ingénierie des prompts" },
    { en: "Text-to-Image: How It Works", es: "Texto a imagen: cómo funciona", fr: "Texte en image : comment ça marche" },
    { en: "Hands-On: Your First AI Image", es: "Práctica: tu primera imagen IA", fr: "Pratique : votre première image IA" },
    { en: "Understanding Model Bias", es: "Entendiendo el sesgo del modelo", fr: "Comprendre le biais du modèle" },
    { en: "Copyright & Ethics in AI Art", es: "Derechos de autor y ética en el arte IA", fr: "Droits d'auteur et éthique dans l'art IA" },
    { en: "Exploring Style Transfer", es: "Explorando la transferencia de estilo", fr: "Explorer le transfert de style" },
    { en: "Hands-On: Style Transfer Demo", es: "Práctica: demostración de transferencia de estilo", fr: "Pratique : démo de transfert de style" },
    { en: "Color, Composition, and AI", es: "Color, composición y IA", fr: "Couleur, composition et IA" },
  ],
  day1_afternoon: [
    { en: "Working with Datasets", es: "Trabajando con conjuntos de datos", fr: "Travailler avec des ensembles de données" },
    { en: "Hands-On: Curating a Dataset", es: "Práctica: curando un conjunto de datos", fr: "Pratique : création d'un ensemble de données" },
    { en: "Image Enhancement Techniques", es: "Técnicas de mejora de imágenes", fr: "Techniques d'amélioration d'image" },
    { en: "Upscaling & Restoration", es: "Aumento de escala y restauración", fr: "Agrandissement et restauration" },
    { en: "Hands-On: Image Upscaling", es: "Práctica: aumento de escala de imagen", fr: "Pratique : agrandissement d'image" },
    { en: "AI Art for Social Media", es: "Arte IA para redes sociales", fr: "Art IA pour les réseaux sociaux" },
    { en: "Exporting & Sharing Your Work", es: "Exportando y compartiendo tu trabajo", fr: "Exporter et partager votre travail" },
    { en: "Feedback & Critique Session 1", es: "Sesión de retroalimentación y crítica 1", fr: "Session de retour et critique 1" },
    { en: "Building a Personal Workflow", es: "Construyendo un flujo de trabajo personal", fr: "Construire un flux de travail personnel" },
    { en: "Troubleshooting Common Issues", es: "Solución de problemas comunes", fr: "Dépannage des problèmes courants" },
    { en: "Q&A and Open Discussion", es: "Preguntas y discusión abierta", fr: "Questions et discussion ouverte" },
    { en: "Day 1 Recap & Badge", es: "Resumen del día 1 y medalla", fr: "Récapitulatif du jour 1 et badge" },
  ],
  day2_morning: [
    { en: "Welcome Back & Day 2 Goals", es: "Bienvenida de nuevo y objetivos del día 2", fr: "Accueil et objectifs du jour 2" },
    { en: "Text-to-Video: The Next Frontier", es: "Texto a video: la próxima frontera", fr: "Texte en vidéo : la prochaine frontière" },
    { en: "Hands-On: Text-to-Video Demo", es: "Práctica: demostración de texto a video", fr: "Pratique : démo texte en vidéo" },
    { en: "Animation with AI", es: "Animación con IA", fr: "Animation avec IA" },
    { en: "Hands-On: Simple Animation", es: "Práctica: animación simple", fr: "Pratique : animation simple" },
    { en: "Audio & Music in AI Art", es: "Audio y música en el arte IA", fr: "Audio et musique dans l'art IA" },
    { en: "Hands-On: AI Music Tools", es: "Práctica: herramientas de música IA", fr: "Pratique : outils de musique IA" },
    { en: "Integrating AI with Photoshop", es: "Integrando IA con Photoshop", fr: "Intégrer l'IA avec Photoshop" },
    { en: "Hands-On: Photoshop Workflow", es: "Práctica: flujo de trabajo en Photoshop", fr: "Pratique : flux de travail Photoshop" },
    { en: "AI in Branding & Marketing", es: "IA en branding y marketing", fr: "IA dans le branding et le marketing" },
    { en: "Client-Ready Deliverables", es: "Entregables listos para el cliente", fr: "Livrables prêts pour le client" },
    { en: "Hands-On: Packaging Assets", es: "Práctica: empaquetado de activos", fr: "Pratique : emballage des ressources" },
  ],
  day2_afternoon: [
    { en: "Compliance: C2PA & IP", es: "Cumplimiento: C2PA e IP", fr: "Conformité : C2PA et PI" },
    { en: "Hands-On: Compliance Checklist", es: "Práctica: lista de verificación de cumplimiento", fr: "Pratique : liste de conformité" },
    { en: "Building a Portfolio", es: "Construyendo un portafolio", fr: "Construire un portfolio" },
    { en: "Peer Review & Gallery Walk", es: "Revisión por pares y recorrido por la galería", fr: "Revue par les pairs et visite de la galerie" },
    { en: "Iteration & Feedback", es: "Iteración y retroalimentación", fr: "Itération et retour" },
    { en: "Final Project Kickoff", es: "Inicio del proyecto final", fr: "Lancement du projet final" },
    { en: "Project Work Time 1", es: "Tiempo de trabajo en el proyecto 1", fr: "Temps de travail sur le projet 1" },
    { en: "Project Work Time 2", es: "Tiempo de trabajo en el proyecto 2", fr: "Temps de travail sur le projet 2" },
    { en: "Project Work Time 3", es: "Tiempo de trabajo en el proyecto 3", fr: "Temps de travail sur le projet 3" },
    { en: "Final Project Submission", es: "Entrega del proyecto final", fr: "Soumission du projet final" },
    { en: "Showcase & Certificates", es: "Exhibición y certificados", fr: "Présentation et certificats" },
    { en: "Course Feedback & Reflection", es: "Retroalimentación y reflexión del curso", fr: "Retour et réflexion sur le cours" },
    { en: "Graduation & Final Badge", es: "Graduación y medalla final", fr: "Remise des diplômes et badge final" },
  ],
};

const curriculum = {
  day1_morning: {
    title: {
      en: "Day 1: Morning Session",
      es: "Día 1: Sesión de la Mañana",
      fr: "Jour 1 : Session du matin",
      ht: "Day 1: Morning Session",
    },
    description: {
      en: "Foundational skills to kickstart your journey.",
      es: "Habilidades fundamentales para iniciar tu camino.",
      fr: "Compétences de base pour démarrer votre parcours.",
      ht: "Foundational skills to kickstart your journey.",
    },
    chapters: chapterTranslations.day1_morning,
  },
  day1_afternoon: {
    title: {
      en: "Day 1: Afternoon Session",
      es: "Día 1: Sesión de la Tarde",
      fr: "Jour 1 : Session de l'après-midi",
      ht: "Day 1: Afternoon Session",
    },
    description: {
      en: "Advanced techniques and creative workflows.",
      es: "Técnicas avanzadas y flujos de trabajo creativos.",
      fr: "Techniques avancées et flux de travail créatifs.",
      ht: "Advanced techniques and creative workflows.",
    },
    chapters: chapterTranslations.day1_afternoon,
  },
  day2_morning: {
    title: {
      en: "Day 2: Morning Session",
      es: "Día 2: Sesión de la Mañana",
      fr: "Jour 2 : Session du matin",
      ht: "Day 2: Morning Session",
    },
    description: {
      en: "Diving into production and professional practice.",
      es: "Profundizando en la producción y la práctica profesional.",
      fr: "Plongée dans la production et la pratique professionnelle.",
      ht: "Diving into production and professional practice.",
    },
    chapters: chapterTranslations.day2_morning,
  },
  day2_afternoon: {
    title: {
      en: "Day 2: Afternoon Session",
      es: "Día 2: Sesión de la Tarde",
      fr: "Jour 2 : Session de l'après-midi",
      ht: "Day 2: Afternoon Session",
    },
    description: {
      en: "Final projects and portfolio preparation.",
      es: "Proyectos finales y preparación de portafolio.",
      fr: "Projets finaux et préparation du portfolio.",
      ht: "Final projects and portfolio preparation.",
    },
    chapters: chapterTranslations.day2_afternoon,
  }
};

const learning_objectives = [
  "Ship a finished 10–15-sec AI-assisted spot in 2 days",
  "Master Gen-AI video workflows for client deliverables",
  "Understand IP, C2PA, and compliance for agencies",
  "Build a portfolio-ready AI art project",
];

const who_is_this_for = [
    "Creative teams and professionals",
    "Agencies and studios",
    "Anyone seeking rapid, hands-on AI art mastery",
];

export default function AIArtsWorkshopLanding() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [d1mRef, d1mVisible] = useOnScreen({ threshold: 0.1 }, 'Day 1 Morning');
  const [d1aRef, d1aVisible] = useOnScreen({ threshold: 0.1 }, 'Day 1 Afternoon');
  const [d2mRef, d2mVisible] = useOnScreen({ threshold: 0.1 }, 'Day 2 Morning');
  const [d2aRef, d2aVisible] = useOnScreen({ threshold: 0.1 }, 'Day 2 Afternoon');

  // Debug: log which nav link is currently active
  useEffect(() => {
    console.log('[Roadmap Nav] d1mVisible:', d1mVisible, 'd1aVisible:', d1aVisible, 'd2mVisible:', d2mVisible, 'd2aVisible:', d2aVisible);
    if (d1mVisible && !d1aVisible && !d2mVisible && !d2aVisible) console.log('Highlight: Day 1 Morning');
    if (d1aVisible && !d2mVisible && !d2aVisible) console.log('Highlight: Day 1 Afternoon');
    if (d2mVisible && !d2aVisible) console.log('Highlight: Day 2 Morning');
    if (d2aVisible) console.log('Highlight: Day 2 Afternoon');
  }, [d1mVisible, d1aVisible, d2mVisible, d2aVisible]);

  // Theme-aware background for Course Overview
  const overviewBg = theme === 'dark'
    ? 'bg-black/80'
    : 'bg-white/90';

  // Theme-aware icon gradient
  const iconGradient = theme === 'dark'
    ? 'from-purple-400 via-cyan-400 to-blue-400'
    : 'from-purple-600 via-cyan-500 to-blue-400';

  // Assign unique icons for each learning objective, with translations
  const learnItems = [
    {
      icon: Sparkles,
      label: {
        en: 'End-to-end Gen-AI art production',
        es: 'Producción de arte Gen-AI de principio a fin',
        fr: 'Production artistique Gen-AI de bout en bout',
      },
    },
    {
      icon: Code,
      label: {
        en: 'Prompt engineering for consistent results',
        es: 'Ingeniería de prompts para resultados consistentes',
        fr: 'Ingénierie de prompts pour des résultats cohérents',
      },
    },
    {
      icon: Video,
      label: {
        en: 'Video, animation, and audio workflows',
        es: 'Flujos de trabajo de video, animación y audio',
        fr: 'Flux de travail vidéo, animation et audio',
      },
    },
    {
      icon: ShieldCheck,
      label: {
        en: 'Compliance, IP, and ethical best practices',
        es: 'Cumplimiento, propiedad intelectual y mejores prácticas éticas',
        fr: 'Conformité, PI et meilleures pratiques éthiques',
      },
    },
    {
      icon: BookOpen,
      label: {
        en: 'Packaging and delivering client-ready assets',
        es: 'Empaquetado y entrega de activos listos para el cliente',
        fr: 'Emballage et livraison d’actifs prêts pour le client',
      },
    },
    {
      icon: Users,
      label: {
        en: 'Peer review, feedback, and portfolio building',
        es: 'Revisión por pares, retroalimentación y construcción de portafolio',
        fr: 'Revue par les pairs, retours et création de portfolio',
      },
    },
  ];

  // Section heading translations
  const whatYoullLearnHeading = {
    en: "What You'll Learn",
    es: "Lo que aprenderás",
    fr: "Ce que vous apprendrez",
    ht: "What You'll Learn",
  };

  // Icons for each session in the roadmap
  const sessionIcons = {
    day1_morning: Calendar, // Foundations
    day1_afternoon: TrendingUp, // Advanced techniques
    day2_morning: Video, // Production
    day2_afternoon: Award, // Final project
  };

  // Highlight the current session in the roadmap left rail
  const getLinkClass = (active: boolean) =>
    `block py-2 pl-4 text-lg font-bold transition relative
    ${active
      ? `${theme === 'dark'
          ? 'text-purple-300 bg-black/30 border-l-4 border-purple-500 shadow-md'
          : 'text-purple-700 bg-white/60 border-l-4 border-purple-500 shadow-md'} `
      : `${theme === 'dark'
          ? 'text-gray-500 hover:text-white border-l-4 border-transparent'
          : 'text-gray-400 hover:text-purple-700 border-l-4 border-transparent'}`}
    rounded-r-lg`;

  // Helper to get translation for a given object and language
  function getTranslation(obj: { en: string; es?: string; fr?: string }, lang: string) {
    if (lang === 'es' && obj.es) return obj.es;
    if (lang === 'fr' && obj.fr) return obj.fr;
    return obj.en;
  }

  // Instructor bios by language
  const moisesBios = {
    en: `Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist, currently an artist-in-residence at Bakehouse Art Complex, exploring the convergence of technology, internet culture, and contemporary art. He works with mediums like live streaming, video, machine learning, and installations to connect cutting-edge technology with creative expression. Sanabria co-founded the AI-focused media channel AI24 Live and was a founding member of the digital art collective ART404. His work has been exhibited internationally, including at Transmediale in Berlin and the Institute of Contemporary Art Miami, and he received a Miami Art Grant in 2024.`,
    es: `Moises Sanabria es un artista interdisciplinario venezolano, radicado en Miami y actualmente artista en residencia en Bakehouse Art Complex, que explora la convergencia entre la tecnología, la cultura de internet y el arte contemporáneo. Trabaja con medios como la transmisión en vivo, el video, el aprendizaje automático y las instalaciones para vincular la tecnología de vanguardia con la expresión creativa. Sanabria cofundó el canal de medios enfocado en inteligencia artificial AI24 Live y fue miembro fundador del colectivo de arte digital ART404. Su trabajo se ha exhibido internacionalmente, incluyendo Transmediale en Berlín y el Institute of Contemporary Art de Miami, y recibió una beca de arte de Miami en 2024.`,
    ht: `Moises Sanabria se yon atis entèdisiplinè venezyelyen ki baze nan Miami, kounye a atis an rezidans nan Bakehouse Art Complex, ki eksplore fizyon ant teknoloji, kilti entènèt ak atizay kontanporen. Li travay ak medya tankou difizyon an dirèk, videyo, aprantisaj otomatik ak enstalasyon pou konekte teknoloji avanse ak ekspresyon kreyatif. Sanabria te ko-fonde chanèl medya AI24 Live ki konsantre sou entèlijans atifisyèl, epi li te yon manm fondatè nan kolektif atizay dijital ART404. Travay li te ekspoze entènasyonalman, enkli Transmediale nan Bèlen ak Institute of Contemporary Art Miami, epi li te resevwa yon sibvansyon atistik Miami an 2024.`,
    fr: `Moises Sanabria est un artiste interdisciplinaire né au Venezuela et basé à Miami, actuellement artiste en résidence au Bakehouse Art Complex, qui explore la convergence de la technologie, de la culture internet et de l'art contemporain. Il utilise des médias tels que le streaming en direct, la vidéo, l'apprentissage automatique et l'installation pour relier les technologies de pointe à la création artistique. Sanabria a cofondé la chaîne médiatique axée sur l'intelligence artificielle AI24 Live et a été cofondateur du collectif d'art numérique ART404. Son travail a été exposé à l'international, notamment à Transmediale (Berlin) et à l'Institute of Contemporary Art de Miami, et il a reçu une bourse artistique de Miami en 2024.`
  };
  const fabiolaBios = {
    en: `Fabiola Larios is a Mexican interdisciplinary artist based in Miami, currently an artist-in-residence at Bakehouse Art Complex, specializing in the aesthetics and politics of surveillance and self-representation in the digital age. She creates immersive installations with a hyper-feminine twist — incorporating e-waste, vintage electronics, glitter, and even bedazzled security cameras — to playfully examine how algorithms shape identity in an age of constant digital surveillance. Her work has been shown internationally — from Pérez Art Museum Miami to the National Museum of Art of Guatemala — and in 2021 she received Mexico’s prestigious Jóvenes Creadores grant in New Technologies.`,
    es: `Fabiola Larios es una artista interdisciplinaria mexicana radicada en Miami, actualmente artista en residencia en Bakehouse Art Complex, especializada en la estética y la política de la vigilancia y la autorrepresentación en la era digital. Crea instalaciones inmersivas con un toque hiperfemenino — incorporando desechos electrónicos, aparatos electrónicos vintage, purpurina e incluso cámaras de seguridad adornadas — para examinar de forma lúdica cómo los algoritmos moldean la identidad en una época de vigilancia digital constante. Su obra se ha presentado internacionalmente — desde el Pérez Art Museum Miami hasta el Museo Nacional de Arte de Guatemala — y en 2021 recibió la prestigiosa beca Jóvenes Creadores en Nuevas Tecnologías otorgada por el Ministerio de Cultura de México.`,
    ht: `Fabiola Larios se yon atis entèdisiplinè Meksiken ki baze nan Miami, kounye a atis an rezidans nan Bakehouse Art Complex, ki espesyalize nan aspè ayestetik ak politik nan siveyans ak reprezantasyon pwòp tèt nou nan epòk dijital la. Li kreye enstalasyon immersive ak yon touche ipè-feminen — li entegre dechè elektwonik, ansyen aparèy elektwonik, payèt epi menm kamera siveyans dekore ak pyè klere — pou egzamine nan yon fason ludik kijan algoritm fòme idantite nan yon epòk kote siveyans dijital la kontinyèl. Travay li te ekspoze entènasyonalman — soti nan Pérez Art Museum Miami rive nan Mize Nasyonal Atizay Gwatemala — epi an 2021 li te resevwa sibvansyon Jóvenes Creadores nan kategori Nouvo Teknoloji nan men Ministè Kilti Meksik la.`,
    fr: `Fabiola Larios est une artiste interdisciplinaire mexicaine basée à Miami, actuellement artiste en résidence au Bakehouse Art Complex, spécialisée dans l'esthétique et la politique de la surveillance et de l'autoreprésentation à l'ère du numérique. Elle crée des installations immersives avec une touche hyper-féminine — en incorporant des déchets électroniques, des appareils électroniques vintage, des paillettes et même des caméras de surveillance ornées — pour examiner de manière ludique comment les algorithmes façonnent l'identité à une époque de surveillance numérique constante. Ses œuvres ont été présentées à l'international — du Pérez Art Museum Miami au Musée National d'Art du Guatemala — et en 2021 elle a reçu la prestigieuse bourse Jóvenes Creadores en Nouvelles Technologies du Ministère de la Culture du Mexique.`
  };

  // Hero section translations
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

  return (
    <>
      <AiArtsNav />
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />

      {/* Course Overview Section */}
      <CourseOverviewSection />

      {/* What you'll learn Section */}
      <section className={`py-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-gray-100'}`}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{getTranslation(whatYoullLearnHeading, language)}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {learnItems.map((item, idx) => {
              const neonPairs = [
                { firstColor: "#00ff00", secondColor: "#00fff0" },
                { firstColor: "#00bfff", secondColor: "#7C5FE4" },
                { firstColor: "#FFC700", secondColor: "#FF69C4" },
                { firstColor: "#FF69C4", secondColor: "#C91884" },
                { firstColor: "#00FFF1", secondColor: "#ff2975" },
                { firstColor: "#7C5FE4", secondColor: "#FFC700" },
              ];
              const neonColors = neonPairs[idx % neonPairs.length];
              return (
                <NeonGradientCard
                  key={item.label.en}
                  className="w-full h-full flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 group"
                  neonColors={neonColors}
                  borderSize={2}
                  borderRadius={20}
                >
                  <div className="flex flex-col items-center justify-center w-full h-full min-h-[160px]">
                    <item.icon
                      className="w-14 h-14 mb-4 text-white transition-all duration-200 group-hover:scale-110"
                      style={{
                        filter: `drop-shadow(0 0 12px ${neonColors.firstColor}) drop-shadow(0 0 24px ${neonColors.secondColor})`,
                      }}
                    />
                    <span className="text-base font-semibold text-center bg-gradient-to-br from-white to-[#00FFF1] bg-clip-text text-transparent dark:from-white dark:to-[#00FFF1]">
                      {getTranslation(item.label, language)}
                    </span>
                  </div>
                </NeonGradientCard>
              );
            })}
          </div>
        </div>
      </section>
      
      <RoadmapSection />

        {/* Who this is for Section */}
        <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            {(() => {
              const headings = {
                en: 'Who This Course Is For',
                es: '¿Para quién es este curso?',
                fr: 'À qui s’adresse ce cours ?',
                ht: 'Pou kiyès kou sa a ye',
              };
              const items = {
                en: [
                  'Creative teams and professionals',
                  'Agencies and studios',
                  'Anyone seeking rapid, hands-on AI art mastery',
                ],
                es: [
                  'Equipos creativos y profesionales',
                  'Agencias y estudios',
                  'Cualquier persona que busque dominar el arte de la IA de forma práctica y rápida',
                ],
                fr: [
                  'Équipes créatives et professionnels',
                  'Agences et studios',
                  'Toute personne souhaitant maîtriser rapidement l’art de l’IA de façon pratique',
                ],
                ht: [
                  'Ekip kreyatif ak pwofesyonèl',
                  'Ajans ak estidyo',
                  'Nenpòt moun ki vle metrize atizay AI rapidman ak pratik',
                ],
              };
              const lang = language in headings ? language : 'en';
              return (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">{headings[lang]}</h2>
                  <div className="flex flex-col space-y-4">
                    {items[lang].map((audience, index) => (
                      <div key={index} className={`${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} rounded-lg p-4 text-xl font-semibold`}>
                        {audience}
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* Instructors Section */}
        <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{language === 'es' ? 'Conoce a tus instructores' : language === 'fr' ? 'Rencontrez vos instructeurs' : 'Meet your instructors'}</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Moises */}
              <div className="flex flex-col items-center">
                <div className="relative w-[220px] h-[320px] rounded-2xl overflow-hidden mb-4 shadow-lg border-2 border-white/10">
                  <Image src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1753132684/ai24/app/instructors/moises-sanabria-portrait-ai-and-the-arts_oeatl8.png" alt="Moises Sanabria" fill className="object-cover" sizes="220px" />
                </div>
                <h3 className="text-2xl font-bold">Moises Sanabria</h3>
                <p className="text-gray-400 mt-2 text-left whitespace-pre-line">{moisesBios[language] || moisesBios.en}</p>
                <div className="flex flex-row gap-3 mt-3 justify-center text-lg">
                  <a href="https://twitter.com/moisesdsanabria" target="_blank" rel="noopener" aria-label="Twitter">
                    <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
                  </a>
                  <a href="https://instagram.com/moisesdsanabria" target="_blank" rel="noopener" aria-label="Instagram">
                    <Instagram className="w-6 h-6 hover:text-pink-400 transition-colors" />
                  </a>
                  <a href="https://linkedin.com/in/moisessanabria" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="https://github.com/moisestech" target="_blank" rel="noopener" aria-label="GitHub">
                    <Github className="w-6 h-6 hover:text-gray-400 transition-colors" />
                  </a>
                  <a href="https://moises.tech" target="_blank" rel="noopener" aria-label="Website">
                    <Globe className="w-6 h-6 hover:text-green-400 transition-colors" />
                  </a>
                  <a href="mailto:m@moises.tech" target="_blank" rel="noopener" aria-label="Email">
                    <Mail className="w-6 h-6 hover:text-purple-400 transition-colors" />
                  </a>
                </div>
              </div>
              {/* Fabiola */}
              <div className="flex flex-col items-center">
                <div className="relative w-[220px] h-[320px] rounded-2xl overflow-hidden mb-4 shadow-lg border-2 border-white/10">
                  <Image src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1753132684/ai24/app/instructors/fabiola-larios-portrait-ai-and-the-arts_x86sax.png" alt="Fabiola Larios" fill className="object-cover" sizes="220px" />
                </div>
                <h3 className="text-2xl font-bold">Fabiola Larios</h3>
                <p className="text-gray-400 mt-2 text-left whitespace-pre-line">{fabiolaBios[language] || fabiolaBios.en}</p>
                <div className="flex flex-row gap-3 mt-3 justify-center text-lg">
                  <a href="https://twitter.com/fabiolalariosm" target="_blank" rel="noopener" aria-label="Twitter">
                    <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
                  </a>
                  <a href="https://instagram.com/fabiolalariosm" target="_blank" rel="noopener" aria-label="Instagram">
                    <Instagram className="w-6 h-6 hover:text-pink-400 transition-colors" />
                  </a>
                  <a href="https://linkedin.com/in/fabiolalarios" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="https://github.com/fabiolaio" target="_blank" rel="noopener" aria-label="GitHub">
                    <Github className="w-6 h-6 hover:text-gray-400 transition-colors" />
                  </a>
                  <a href="https://fabiola.io" target="_blank" rel="noopener" aria-label="Website">
                    <Globe className="w-6 h-6 hover:text-green-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Call to Action */}
        <section id="contact" className="py-16 bg-gradient-to-b from-purple-900/30 to-black">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to bring AI & The Arts to your community?</h2>
            <p className="text-gray-300 mb-6">Contact us to book your workshop or ask any questions. We look forward to making this a standout event for your creative community!</p>
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="font-bold">Moises Sanabria & Fabiola Larios</span>
              <span className="text-gray-400">Co- Founders, AI24</span>
              <span className="text-gray-400"><a href="https://moises.tech" className="underline">moises.tech</a> | <a href="https://fabiola.io" className="underline">fabiola.io</a></span>
            </div>
            <a href="mailto:m@moises.tech" className="inline-block mt-4 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-bold transition-colors">Book this workshop</a>
          </div>
        </section>
      </main>
    </>
  );
}