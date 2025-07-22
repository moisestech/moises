'use client'

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Tv, Users, BarChart, Calendar, Image as ImageIcon, Lock, Zap, Building, Palette, Coffee, Check, Tag, Clock, Shield } from "lucide-react";
import DecorativeDivider from '@/components/common/DecorativeDivider'
import LargeIconCarousel from '@/components/common/LargeIconCarousel'
import { SmartSignNav } from '@/components/common/SmartSignNav'
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

// Add new animation variants
const iconCarousel = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5 }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

// Add new animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};

const pulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// Add SmartSign specific icons with translations
const smartSignIcons = {
  en: [
    { icon: Tv, label: "Digital Displays" },
    { icon: Calendar, label: "Event Scheduling" },
    { icon: Users, label: "Community Engagement" },
    { icon: ImageIcon, label: "Multimedia Content" },
    { icon: Zap, label: "Smart Automation" },
    { icon: Shield, label: "Secure Access" }
  ],
  fr: [
    { icon: Tv, label: "Affichages Numériques" },
    { icon: Calendar, label: "Planification d'Événements" },
    { icon: Users, label: "Engagement Communautaire" },
    { icon: ImageIcon, label: "Contenu Multimédia" },
    { icon: Zap, label: "Automatisation Intelligente" },
    { icon: Shield, label: "Accès Sécurisé" }
  ]
};

const tips = {
  en: [
    "Transform any screen into a dynamic digital sign",
    "Automatically update content based on your schedule",
    "Engage your audience with interactive displays",
    "Simplify your digital signage management",
    "Showcase events and announcements in real-time",
    "Support multiple display configurations",
    "Access your content from anywhere",
    "Built with accessibility in mind"
  ],
  fr: [
    "Transformez n'importe quel écran en affichage numérique dynamique",
    "Mettez à jour automatiquement le contenu selon votre calendrier",
    "Engagez votre public avec des affichages interactifs",
    "Simplifiez la gestion de votre signalétique numérique",
    "Présentez les événements et annonces en temps réel",
    "Prenez en charge plusieurs configurations d'affichage",
    "Accédez à votre contenu depuis n'importe où",
    "Conçu avec l'accessibilité en tête"
  ]
};

const features = {
  en: [
    { icon: Tv, title: "Dynamic Displays", description: "Transform any screen into a smart digital sign" },
    { icon: Calendar, title: "Smart Scheduling", description: "Automatically update content based on your schedule" },
    { icon: Users, title: "Community Focus", description: "Engage your audience with interactive displays" },
    { icon: ImageIcon, title: "Rich Media", description: "Showcase videos, images, and interactive content" },
    { icon: Zap, title: "Smart Automation", description: "Automate content updates and scheduling" },
    { icon: Shield, title: "Secure Access", description: "Control who can update your displays" }
  ],
  fr: [
    { icon: Tv, title: "Affichages Dynamiques", description: "Transformez n'importe quel écran en affichage numérique intelligent" },
    { icon: Calendar, title: "Planification Intelligente", description: "Mettez à jour automatiquement le contenu selon votre calendrier" },
    { icon: Users, title: "Focus Communautaire", description: "Engagez votre public avec des affichages interactifs" },
    { icon: ImageIcon, title: "Médias Riches", description: "Présentez des vidéos, images et contenus interactifs" },
    { icon: Zap, title: "Automatisation Intelligente", description: "Automatisez les mises à jour de contenu et la planification" },
    { icon: Shield, title: "Accès Sécurisé", description: "Contrôlez qui peut mettre à jour vos affichages" }
  ]
};

export default function SmartSignClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    useCase: "gallery"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Add new animation states
  const [hoverIndex, setHoverIndex] = useState(-1);

  // Add new state for icon carousel
  const [activeIconIndex, setActiveIconIndex] = useState(0);

  // Add useEffect for icon carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % smartSignIcons[language as keyof typeof smartSignIcons].length);
    }, 3000);
    return () => clearInterval(interval);
  }, [language]);

  // Add useEffect for tips rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips[language as keyof typeof tips].length);
    }, 3000);
    return () => clearInterval(interval);
  }, [language]);

  // Add useEffect for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'
    } overflow-hidden`} ref={containerRef}>
      <SmartSignNav />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)]' 
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]'
        }`} />
        <div className="absolute inset-0">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30833_1px,transparent_1px),linear-gradient(to_bottom,#eab30833_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className={`absolute inset-0 blur-3xl ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-yellow-500/20 via-lime-500/20 to-yellow-500/20'
                : 'bg-gradient-to-r from-yellow-500/10 via-lime-500/10 to-yellow-500/10'
            } rounded-full`} />
            <h1 className={`relative text-5xl md:text-7xl font-bold mb-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-yellow-400 via-lime-300 to-yellow-400'
                : 'bg-gradient-to-r from-yellow-600 via-lime-500 to-yellow-600'
            } bg-clip-text text-transparent animate-text-shine`}>
              SmartSign
            </h1>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${
            theme === 'dark' ? 'text-yellow-200' : 'text-yellow-600'
          }`}>
            {language === 'fr' 
              ? "Signalétique Numérique Dynamique pour Galeries & Espaces Événementiels" 
              : "Dynamic Digital Signage for Galleries & Nonprofit Event Spaces"}
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } mb-8 leading-relaxed`}>
            {language === 'fr' ? "Engageant. Polyvalent. Axé sur la Communauté." : "Engaging. Versatile. Community-Driven."}
          </p>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } mb-8 max-w-3xl mx-auto`}>
            {language === 'fr'
              ? "SmartSign transforme n'importe quel écran—qu'il s'agisse d'une Smart TV ou d'un écran connecté à un Raspberry Pi—en un affichage numérique puissant et polyvalent optimisé pour les galeries, les organisations à but non lucratif et les espaces événementiels. Communiquez instantanément les événements, partagez du contenu multimédia et favorisez un engagement communautaire plus profond."
              : "SmartSign transforms any screen—whether it's a Smart TV or Raspberry Pi-connected display—into a powerful, versatile digital sign optimized for galleries, nonprofits, and event spaces. Instantly communicate events, share multimedia content, and foster deeper community engagement."}
          </p>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } mb-8 max-w-3xl mx-auto`}>
            {language === 'fr'
              ? "Conçu avec les artistes, pour les artistes. Accessibilité et inclusion intégrées (ADA, police dyslexie, multilingue)."
              : "Co-designed with artists, for artists. Accessibility and inclusivity baked in (ADA, dyslexia font, multi-language)."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#demo" 
                  className={`${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-yellow-500 to-lime-500 hover:from-yellow-600 hover:to-lime-600 text-black'
                      : 'bg-gradient-to-r from-yellow-400 to-lime-400 hover:from-yellow-500 hover:to-lime-500 text-black'
                  } font-medium px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]`}>
              <Play className="w-5 h-5" />
              {language === 'fr' ? "Planifier une Démo Gratuite" : "Schedule Your Free Demo"}
            </Link>
            <Link href="#features"
                  className={`border ${
                    theme === 'dark'
                      ? 'border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10'
                      : 'border-yellow-400/50 text-yellow-600 hover:bg-yellow-400/10'
                  } px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2`}>
              <ArrowRight className="w-5 h-5" />
              {language === 'fr' ? "Commencer l'Essai Gratuit" : "Start 30-Day Pilot"}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Icon Carousel Section */}
      <section className="py-20 relative overflow-hidden">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-yellow-500/5 via-lime-500/5 to-transparent'
            : 'bg-gradient-to-b from-yellow-400/5 via-lime-400/5 to-transparent'
        }`} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <motion.div variants={fadeIn} className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
                    theme === 'dark'
                      ? 'bg-yellow-500/10 border border-yellow-500/20'
                      : 'bg-yellow-400/10 border border-yellow-400/20'
                  }`}>
                    <Tv className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                    }`} />
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-yellow-200' : 'text-yellow-600'
                    }`}>
                      {language === 'fr' ? "Signalétique Numérique Intelligente" : "Smart Digital Signage"}
                    </span>
                  </motion.div>
                </div>
                
                <motion.h1 
                  variants={fadeIn}
                  className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-yellow-400 via-lime-300 to-yellow-400'
                      : 'bg-gradient-to-r from-yellow-600 via-lime-500 to-yellow-600'
                  }`}
                >
                  {language === 'fr' ? "Transformez Votre Espace" : "Transform Your Space"}
                  <br />
                  {language === 'fr' ? "Avec SmartSign" : "With SmartSign"}
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className={`text-xl ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  } max-w-2xl mb-8`}
                >
                  {language === 'fr'
                    ? "Signalétique numérique dynamique qui s'adapte à vos besoins, engage votre public et simplifie votre flux de travail"
                    : "Dynamic digital signage that adapts to your needs, engages your audience, and simplifies your workflow"}
                </motion.p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTip}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-lg ${
                      theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                    } font-medium mb-12`}
                  >
                    {tips[language as keyof typeof tips][currentTip]}
                  </motion.div>
                </AnimatePresence>

                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <motion.button
                    whileHover={reducedMotion ? {} : hoverScale}
                    className={`px-8 py-4 rounded-lg font-medium ${
                      theme === 'dark'
                        ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                        : 'bg-yellow-400 text-black hover:bg-yellow-500'
                    } transition-colors`}
                  >
                    {language === 'fr' ? "Planifier une Démo" : "Schedule Demo"}
                  </motion.button>
                  <motion.button
                    whileHover={reducedMotion ? {} : hoverScale}
                    className={`px-8 py-4 rounded-lg font-medium border ${
                      theme === 'dark'
                        ? 'border-yellow-500/20 hover:border-yellow-500/40 text-yellow-200'
                        : 'border-yellow-400/20 hover:border-yellow-400/40 text-yellow-600'
                    } transition-colors`}
                  >
                    {language === 'fr' ? "Commencer l'Essai Gratuit" : "Start Free Trial"}
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            <div className="h-[400px] md:h-[500px] flex items-center justify-center">
              <LargeIconCarousel 
                reducedMotion={reducedMotion}
                icons={smartSignIcons[language as keyof typeof smartSignIcons]}
              />
            </div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features[language as keyof typeof features].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`${
                  theme === 'dark'
                    ? 'bg-zinc-800/80 backdrop-blur-xl rounded-xl border border-yellow-500/20'
                    : 'bg-white/80 backdrop-blur-xl rounded-xl border border-yellow-400/20'
                } p-6`}
                whileHover={reducedMotion ? {} : hoverScale}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={reducedMotion ? {} : pulse}
                    className={`w-12 h-12 rounded-full ${
                      theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-400/20'
                    } flex items-center justify-center`}
                  >
                    {React.createElement(feature.icon, {
                      className: `w-6 h-6 ${
                        theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                      }`
                    })}
                  </motion.div>
                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Tv}
        gradientColors={{
          from: 'rgba(234, 179, 8, 0.1)',
          via: 'rgba(132, 204, 22, 0.1)',
          to: 'rgba(234, 179, 8, 0.1)'
        }}
        iconColor="text-yellow-400/50"
        className="my-16"
      />

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-yellow-500/5 via-lime-500/5 to-transparent'
            : 'bg-gradient-to-b from-yellow-400/5 via-lime-400/5 to-transparent'
        }`} />
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Key Features</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {language === 'fr' ? "Outils puissants pour la gestion dynamique du contenu" : "Powerful tools for dynamic content management"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: language === 'fr' ? "Affichage Dynamique d'Événements" : "Dynamic Event Display",
                description: [
                  language === 'fr' 
                    ? "Affichez automatiquement les événements selon les horaires en temps réel."
                    : "Automatically display events based on real-time schedules.",
                  language === 'fr'
                    ? "Filtrez et catégorisez les événements facilement avec des étiquettes et tags personnalisés."
                    : "Filter and categorize events effortlessly with custom labels and tags.",
                  language === 'fr'
                    ? "Adaptez la visibilité des événements selon des périodes et segments d'audience spécifiques."
                    : "Tailor event visibility by specific timeframes and audience segments."
                ],
                icon: Calendar,
              },
              {
                title: language === 'fr' ? "Intégration Multimédia" : "Multimedia Integration",
                description: [
                  language === 'fr'
                    ? "Présentez des vidéos, images et contenus interactifs de manière fluide."
                    : "Showcase videos, images, and interactive content seamlessly.",
                  language === 'fr'
                    ? "Impliquez votre communauté en permettant aux membres de partager leur contenu approuvé."
                    : "Empower your community by allowing members to feature their own approved content on the sign."
                ],
                icon: ImageIcon,
              },
              {
                title: language === 'fr' ? "Permissions Flexibles" : "Flexible User Permissions",
                description: [
                  language === 'fr'
                    ? "Niveaux d'autorisation multiples pour une publication d'événements sécurisée et contrôlée."
                    : "Multiple authorization levels for secure, controlled event posting.",
                  language === 'fr'
                    ? "Interface de gestion simple et intuitive pour les administrateurs."
                    : "Simple and intuitive management interface for administrators."
                ],
                icon: Lock,
              },
              {
                title: language === 'fr' ? "Automatisation Intelligente" : "Intelligent Automation",
                description: [
                  language === 'fr'
                    ? "Planification intelligente : les événements apparaissent et disparaissent automatiquement."
                    : "Smart scheduling: events appear and disappear automatically.",
                  language === 'fr'
                    ? "Réduisez les efforts de mise à jour manuelle, permettant à votre équipe de se concentrer sur l'essentiel."
                    : "Reduce manual updating efforts, freeing your team to focus on what matters most."
                ],
                icon: Zap,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${
                  theme === 'dark'
                    ? 'bg-zinc-800/80 backdrop-blur-xl border border-yellow-500/10 hover:border-yellow-500/30'
                    : 'bg-white/80 backdrop-blur-xl border border-yellow-400/10 hover:border-yellow-400/30'
                } rounded-xl p-6 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0'
                    : 'bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0'
                } group-hover:translate-x-full duration-1000 transition-transform`} />
                <feature.icon className={`w-8 h-8 ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                } mb-4`} />
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.description.map((item, i) => (
                    <li key={i} className={`flex items-start gap-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <motion.div
                        animate={{
                          x: hoverIndex === index ? [0, 2, 0] : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className={`w-4 h-4 ${
                          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                        } mt-1 shrink-0`} />
                      </motion.div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Calendar}
        gradientColors={{
          from: 'rgba(234, 179, 8, 0.1)',
          via: 'rgba(132, 204, 22, 0.1)',
          to: 'rgba(234, 179, 8, 0.1)'
        }}
        iconColor="text-yellow-400/50"
        className="my-16"
      />

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 relative overflow-hidden">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-yellow-500/10 to-lime-500/10'
            : 'bg-gradient-to-b from-yellow-400/10 to-lime-400/10'
        }`} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'fr' ? "Cas d'Utilisation" : "Use Cases"}
            </h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {language === 'fr' 
                ? "Découvrez comment SmartSign transforme les espaces dans différents secteurs" 
                : "See how SmartSign transforms spaces across different sectors"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: language === 'fr' ? "Galeries d'Art" : "Art Galleries",
                description: language === 'fr'
                  ? "Promouvez les expositions, conférences d'artistes, ateliers et installations multimédias."
                  : "Promote exhibitions, artist talks, workshops, and multimedia installations.",
                icon: Palette,
                color: theme === 'dark' 
                  ? "from-pink-500/20 to-purple-500/20" 
                  : "from-pink-400/20 to-purple-400/20"
              },
              {
                title: language === 'fr' ? "Organisations à but non lucratif" : "Nonprofits",
                description: language === 'fr'
                  ? "Mettez en avant les événements de collecte de fonds, les opportunités de bénévolat et les messages communautaires."
                  : "Highlight fundraising events, volunteer opportunities, and community messages.",
                icon: Building,
                color: theme === 'dark'
                  ? "from-blue-500/20 to-cyan-500/20"
                  : "from-blue-400/20 to-cyan-400/20"
              },
              {
                title: language === 'fr' ? "Espaces Événementiels" : "Event Spaces",
                description: language === 'fr'
                  ? "Gérez dynamiquement les horaires d'événements, l'allocation des salles et les communications avec les invités."
                  : "Dynamically manage event schedules, room allocations, and guest communications.",
                icon: Coffee,
                color: theme === 'dark'
                  ? "from-purple-500/20 to-blue-500/20"
                  : "from-purple-400/20 to-blue-400/20"
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl p-6 bg-gradient-to-br ${useCase.color} ${
                  theme === 'dark' ? 'border border-white/10 hover:border-white/20' : 'border border-gray-200/10 hover:border-gray-200/20'
                } transition-all duration-300`}
              >
                <useCase.icon className={`w-8 h-8 ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                } mb-4`} />
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{useCase.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Calendar}
        gradientColors={{
          from: 'rgba(234, 179, 8, 0.1)',
          via: 'rgba(132, 204, 22, 0.1)',
          to: 'rgba(234, 179, 8, 0.1)'
        }}
        iconColor="text-yellow-400/50"
        className="my-16"
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-yellow-500/5 via-lime-500/5 to-transparent'
            : 'bg-gradient-to-b from-yellow-400/5 via-lime-400/5 to-transparent'
        }`} />
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'fr' ? "Tarification & Services" : "Pricing & Services"}
            </h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {language === 'fr' ? "Tarification transparente sans coûts cachés" : "Transparent pricing with no hidden costs"}
            </p>
            <div className={`mt-6 inline-block ${
              theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
            } rounded-lg px-4 py-2 border ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'fr'
                  ? "Frais d'installation variables selon le plan (Solo 750 $ | Communauté 1 200 $ | Pro sur mesure)."
                  : "Setup fee varies by plan (Solo $750 | Community $1 200 | Pro custom)."}
              </p>
            </div>
            <p className={`mt-3 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {language === 'fr'
                ? "Économisez 15 % avec le paiement annuel (populaire pour les budgets de subventions)."
                : "Save 15% with annual payment (popular for grant budgets)."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solo",
                setupIncludes: language === 'fr' ? [
                  "Développement d'application personnalisé (750 $)",
                  "Intégration de base de la marque",
                  "Support d'installation",
                  "1–2 configurations d'affichage"
                ] : [
                  "Custom app development ($750)",
                  "Basic branding integration",
                  "Installation support",
                  "1–2 display configurations"
                ],
                monthlyPrice: language === 'fr' ? "119 $" : "$119",
                monthlyFeatures: language === 'fr' ? [
                  "Planification et automatisation d'événements",
                  "Gestion de base des utilisateurs",
                  "Support des images et vidéos",
                  "Support par email"
                ] : [
                  "Event Scheduling & Automation",
                  "Basic User Management",
                  "Image & Video Support",
                  "Email Support"
                ]
              },
              {
                title: language === 'fr' ? "Communauté" : "Community",
                setupIncludes: language === 'fr' ? [
                  "Développement d'application personnalisé (1 200 $)",
                  "Intégration avancée de la marque",
                  "Installation et formation",
                  "Jusqu'à 3 configurations d'affichage"
                ] : [
                  "Custom app development ($1 200)",
                  "Advanced branding integration",
                  "Installation & training",
                  "Up to 3 display configurations"
                ],
                monthlyPrice: language === 'fr' ? "199 $" : "$199",
                monthlyFeatures: language === 'fr' ? [
                  "Toutes les fonctionnalités Solo",
                  "Soumissions de contenu communautaire",
                  "Filtrage et étiquetage avancés",
                  "Support prioritaire par email et chat",
                  "Appel de suivi mensuel"
                ] : [
                  "All Solo features",
                  "Community content submissions",
                  "Advanced filtering & tagging",
                  "Priority Email and Chat Support",
                  "Monthly check-in call"
                ],
                highlighted: true
              },
              {
                title: "Pro",
                setupIncludes: language === 'fr' ? [
                  "Frais d'installation à partir de 1 200 $",
                  "Intégration premium de la marque",
                  "Formation complète de l'équipe",
                  "Configurations d'affichage illimitées",
                  "Développement de fonctionnalités personnalisées"
                ] : [
                  "Setup fee starts at $1 200",
                  "Premium branding integration",
                  "Full team training",
                  "Unlimited display configurations",
                  "Custom feature development"
                ],
                monthlyPrice: language === 'fr' ? "299 $–499 $" : "$299–$499",
                monthlyFeatures: language === 'fr' ? [
                  "Toutes les fonctionnalités Communauté",
                  "Modèles personnalisés",
                  "Analyses et rapports avancés",
                  "Support prioritaire 24/7",
                  "Gestionnaire de succès dédié",
                  "Sessions stratégiques trimestrielles"
                ] : [
                  "All Community features",
                  "Customized Templates",
                  "Advanced Analytics & Reporting",
                  "24/7 Priority Support",
                  "Dedicated Success Manager",
                  "Quarterly strategy sessions"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-6 transition-all duration-300 border ${
                  plan.highlighted 
                    ? theme === 'dark'
                      ? 'bg-gradient-to-br from-yellow-500/20 to-lime-500/20 border-yellow-500/50 transform hover:scale-105'
                      : 'bg-gradient-to-br from-yellow-400/20 to-lime-400/20 border-yellow-400/50 transform hover:scale-105'
                    : theme === 'dark'
                      ? 'bg-white/5 border-yellow-500/10 hover:bg-yellow-500/5'
                      : 'bg-white border-yellow-400/10 hover:bg-yellow-400/5'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{plan.title}</h3>
                
                {/* One-time setup section */}
                <div className="mb-8">
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } mb-2`}>
                    {language === 'fr' ? "Installation unique inclut :" : "One-time setup includes:"}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {plan.setupIncludes.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                        } shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Monthly section */}
                <div className="pt-6 border-t border-white/10">
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } mb-2`}>
                    {language === 'fr' ? "Support et fonctionnalités mensuels :" : "Monthly support & features:"}
                  </p>
                  <p className={`text-3xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    {plan.monthlyPrice}
                    <span className={`text-sm font-normal ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {language === 'fr' ? "/mois" : "/month"}{plan.title === "Pro" ? "*" : ""}
                    </span>
                  </p>
                  <ul className="space-y-2 mb-8">
                    {plan.monthlyFeatures.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <ArrowRight className={`w-4 h-4 ${
                          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                        } shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#demo"
                      className={`inline-flex items-center justify-center w-full py-3 rounded-full transition-all duration-300 ${
                        plan.highlighted
                          ? theme === 'dark'
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                            : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                          : theme === 'dark'
                            ? 'border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10'
                            : 'border border-yellow-400 text-yellow-600 hover:bg-yellow-400/10'
                      }`}>
                  {language === 'fr' ? "Commencer" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className={`mt-6 text-xs ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          } italic text-center`}>
            {language === 'fr'
              ? "* Le prix exact du plan Pro dépend des intégrations personnalisées et du SLA."
              : "* Exact Pro pricing depends on custom integrations and SLA."}
          </p>
        </div>
      </section>

      <DecorativeDivider 
        icon={Users}
        gradientColors={{
          from: 'rgba(234, 179, 8, 0.1)',
          via: 'rgba(132, 204, 22, 0.1)',
          to: 'rgba(234, 179, 8, 0.1)'
        }}
        iconColor="text-yellow-400/50"
        className="my-16"
      />

      {/* Testimonials Section */}
      <motion.footer 
        className="py-12 relative overflow-hidden"
        style={{
          backgroundColor: useTransform(
            scrollYProgress,
            [0, 1],
            theme === 'dark'
              ? ["rgba(0,0,0,0)", "rgba(29,78,216,0.1)"]
              : ["rgba(0,0,0,0)", "rgba(234,179,8,0.05)"]
          )
        }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <blockquote className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            } text-sm`}>
              {language === 'fr'
                ? "\"SmartSign a transformé la présence numérique de notre galerie du jour au lendemain. L'engagement communautaire a été incroyable.\" — Maria, Espace d'Art Contemporain"
                : "\"SmartSign transformed our gallery's digital presence overnight. The community engagement has been incredible.\" — Maria, Contemporary Art Space"}
            </blockquote>
            <blockquote className={`mt-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            } text-sm`}>
              {language === 'fr'
                ? "\"L'essai de 30 jours a permis à notre conseil d'administration de voir SmartSign en action—l'approbation a été unanime.\" — Carla, Centre d'Arts Communautaire"
                : "\"The 30-day pilot let our board see SmartSign in action—approval was unanimous.\" — Carla, Community Arts Center"}
            </blockquote>
            <motion.p 
              className={`mt-8 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
              style={{
                opacity: useTransform(scrollYProgress, [0, 1], [0.5, 1])
              }}
            >
              {language === 'fr'
                ? "Bakehouse Artist Tech Initiative — "
                : "Bakehouse Artist Tech Initiative — "}
              <Link 
                href="https://moises.tech" 
                target="_blank" 
                className={`underline ${
                  theme === 'dark' 
                    ? 'hover:text-white' 
                    : 'hover:text-gray-900'
                } transition-colors`}
              >
                {language === 'fr'
                  ? "Moises Sanabria & Fabiola Larios"
                  : "Moises Sanabria & Fabiola Larios"}
              </Link>
            </motion.p>
          </div>
        </div>
      </motion.footer>

      {/* Add new styles */}
      <style jsx global>{`
        @keyframes text-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(234, 179, 8, 0.2);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-icon-float {
          animation: icon-float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 