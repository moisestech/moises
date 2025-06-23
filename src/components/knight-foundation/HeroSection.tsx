'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { MicroMotif } from '../shared/MicroMotif';
import { ControlledFlipText } from '../ui/controlled-flip-text';
import AboveTheFoldAIWords3D from './AboveTheFoldAIWords3D';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Hero words with translations
const heroWords = {
  en: [
    'MAKE AI FOR ALL',
    'ETHICS BEFORE ALGORITHMS',
    'AI FOR COMMUNITY',
    'OPEN SOURCE FUTURE',
    'BILINGUAL OR BUST',
  ],
  es: [
    'IA PARA TODOS',
    'ÉTICA ANTES QUE ALGORITMOS',
    'IA PARA LA COMUNIDAD',
    'FUTURO DE CÓDIGO ABIERTO',
    'BILINGÜE O NADA',
  ],
  fr: [
    'IA POUR TOUS',
    'ÉTHIQUE AVANT LES ALGORITHMES',
    'IA POUR LA COMMUNAUTÉ',
    'AVENIR OPEN SOURCE',
    'BILINGUE OU RIEN',
  ]
};

// Subtitle translations
const subtitles = {
  en: "Knight-seeded pilot building sustainable technology infrastructure and educational live event culture hubs.",
  es: "Piloto financiado por Knight construyendo infraestructura tecnológica sostenible y centros culturales de eventos educativos en vivo.",
  fr: "Pilote financé par Knight construisant une infrastructure technologique durable et des centres culturels d'événements éducatifs en direct."
};

// Button text translations
const buttonTexts = {
  en: {
    seePilot: "See the 1 Year Pilot",
    viewProposal: "View Full Proposal"
  },
  es: {
    seePilot: "Ver el Piloto de 1 Año",
    viewProposal: "Ver Propuesta Completa"
  },
  fr: {
    seePilot: "Voir le Pilote d'1 An",
    viewProposal: "Voir la Proposition Complète"
  }
};

export function HeroSection() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';
  
  const [mainWordIndex, setMainWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const currentHeroWords = heroWords[language];
  const currentSubtitle = subtitles[language];
  const currentButtons = buttonTexts[language];

  // Theme-aware colors
  const themeColors = {
    primary: isDark ? '#A4FF4E' : '#2563EB',
    secondary: isDark ? '#3B82F6' : '#4F46E5',
    accent: isDark ? '#EC4899' : '#7C3AED',
    background: isDark ? 'from-black via-black to-[#1a1a1a]' : 'from-white via-gray-50 to-gray-100',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    buttonBg: isDark ? 'bg-[#A4FF4E]' : 'bg-[#2563EB]',
    buttonText: isDark ? 'text-black' : 'text-white',
    buttonBorder: isDark ? 'border-[#A4FF4E]' : 'border-[#2563EB]',
    buttonHover: isDark ? 'hover:bg-[#A4FF4E]/90' : 'hover:bg-[#2563EB]/90',
    buttonHoverBorder: isDark ? 'hover:bg-[#A4FF4E]/10' : 'hover:bg-[#2563EB]/10'
  };

  return (
    <section id="overview" className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <AboveTheFoldAIWords3D className="absolute inset-0 z-0" />
      <div className={`absolute inset-0 bg-gradient-to-br ${themeColors.background} z-0`} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <div
            className="mb-8 cursor-pointer select-none"
            onMouseEnter={() => setIsGlitching(true)}
            onMouseLeave={() => setIsGlitching(false)}
            onClick={() => setMainWordIndex((mainWordIndex + 1) % currentHeroWords.length)}
          >
            <ControlledFlipText
              className={`text-[80px] md:text-[120px] font-bold leading-[1] tracking-tight ${themeColors.text} drop-shadow-lg ${isGlitching ? 'glitch-rgb' : ''}`}
              duration={0.5}
              delayMultiple={0.06}
              animationKey={mainWordIndex + (isGlitching ? '-glitch' : '')}
            >
              {currentHeroWords[mainWordIndex]}
            </ControlledFlipText>
            <style jsx>{`
              .glitch-rgb {
                text-shadow:
                  2px 0 8px ${themeColors.primary},
                  -2px 0 8px ${themeColors.secondary},
                  0 2px 8px ${themeColors.accent};
                animation: glitch 0.4s infinite alternate;
              }
              @keyframes glitch {
                0% { transform: translateX(0); }
                20% { transform: translateX(-2px); }
                40% { transform: translateX(2px); }
                60% { transform: translateX(-1px); }
                80% { transform: translateX(1px); }
                100% { transform: translateX(0); }
              }
            `}</style>
          </div>
          <p className={`text-2xl ${themeColors.textSecondary} mb-12 max-w-3xl mx-auto`}>
            {currentSubtitle}
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/grant/knight-foundation/roadmap"
              className={`px-8 py-4 rounded-lg font-medium ${themeColors.buttonBg} ${themeColors.buttonText} ${themeColors.buttonHover} transition-colors`}
            >
              {currentButtons.seePilot}
            </Link>
            <Link
              href="/grant/knight-foundation/proposal"
              className={`px-8 py-4 rounded-lg font-medium border ${themeColors.buttonBorder} ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} ${themeColors.buttonHoverBorder} transition-colors`}
            >
              {currentButtons.viewProposal}
            </Link>
          </div>
        </motion.div>
      </div>
      <MicroMotif type="wiggle" className={`absolute bottom-10 left-10 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} z-10`} />
      <MicroMotif type="binary" className={`absolute top-10 right-10 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} z-10`} />
    </section>
  );
} 