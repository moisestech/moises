'use client';

// REACT & NEXT
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// THIRD PARTY
import { motion } from 'framer-motion';

// CONTEXT
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

// COMPONENTS
import { DarkLightThemeSelector } from '@/components/common/DarkLightThemeSelector';
import { LanguageSelector } from '@/components/common/LanguageSelector';

// ICONS
import { 
  Menu, 
  X, 
  Home, 
  Zap, 
  TrendingUp, 
  Scale, 
  GraduationCap, 
  Heart, 
  Clock, 
  Lightbulb,
  FileText,
  Map,
  Building2,
  BarChart3,
  DollarSign,
  RefreshCw,
  Palette,
  Cpu,
  Camera,
  Monitor,
  Rocket,
  BookOpen,
  Target
} from 'lucide-react';

// Oolite Logo Component
const OoliteLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const logoSrc = isDark 
    ? "https://res.cloudinary.com/dck5rzi4h/image/upload/v1753833092/tech-nonprofit/oolite/logos/oolite-arts-logo-white_sbfeqz.png"
    : "https://res.cloudinary.com/dck5rzi4h/image/upload/v1753833092/tech-nonprofit/oolite/logos/oolite-arts-logo-black_sx0l62.png";

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <Image
        src={logoSrc}
        alt="Oolite Arts"
        width={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
        height={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
        className="object-contain"
      />
    </div>
  );
};

// Navigation (links to pages) with icons
const navigation = [
  { name: 'Overview', href: '/tech-nonprofit/oolite', key: 'overview', icon: Home },
  { name: 'Roadmap', href: '/tech-nonprofit/oolite/roadmap', key: 'roadmap', icon: Map },
  { name: 'Budget', href: '/tech-nonprofit/oolite/budget', key: 'budget', icon: DollarSign },
  { name: 'Workshops', href: '/tech-nonprofit/oolite/workshops', key: 'workshops', icon: BookOpen },
  { name: 'Digital Arts Lab', href: '/tech-nonprofit/oolite/lab', key: 'lab', icon: Building2 },
  // { name: 'AI Tools', href: '/tech-nonprofit/oolite/ai-tools', key: 'aiTools', icon: Cpu }, // Hidden for production
  { name: 'Impact & ROI', href: '/tech-nonprofit/oolite/impact-roi', key: 'impactRoi', icon: Target }
];

// Translations
const translations = {
  en: {
    menu: "Menu",
    overview: "Overview",
    timeline: "Timeline",
    budget: "Budget",
    workshops: "Workshops",
    impact: "Impact",
    roadmap: "Roadmap",
    lab: "Digital Arts Lab",
    aiTools: "AI Tools",
    impactRoi: "Impact & ROI"
  },
  es: {
    menu: "Menú",
    overview: "Resumen",
    timeline: "Cronograma",
    budget: "Presupuesto",
    workshops: "Talleres",
    impact: "Impacto",
    roadmap: "Hoja de Ruta",
    lab: "Laboratorio de Artes Digitales",
    aiTools: "Herramientas de IA",
    impactRoi: "Impacto y ROI"
  },
  fr: {
    menu: "Menu",
    overview: "Aperçu",
    timeline: "Calendrier",
    budget: "Budget",
    workshops: "Ateliers",
    impact: "Impact",
    roadmap: "Feuille de Route",
    lab: "Laboratoire d'Arts Numériques",
    aiTools: "Outils d'IA",
    impactRoi: "Impact et ROI"
  },
  ht: {
    menu: "Meni",
    overview: "Apèsi",
    timeline: "Orè",
    budget: "Bidjè",
    workshops: "Atelye",
    impact: "Enpak",
    roadmap: "Wout",
    lab: "Laboratwa Atizay Dijital",
    aiTools: "Zouti IA",
    impactRoi: "Enpak ak ROI"
  }
};

export function TechNonprofitNavOolite() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isDark = theme === 'dark';

  const t = translations[language as keyof typeof translations] || translations.en;

  const navigateToPage = (href: string) => {
    router.push(href);
    setMobileMenuOpen(false);
  };

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } shadow-xl`}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-3">
            <OoliteLogo size="sm" />
            <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>
              Digital Arts Lab
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2 rounded-lg ${
              isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <li key={item.key}>
                  <button
                    onClick={() => navigateToPage(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? isDark 
                          ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                          : 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30'
                        : isDark 
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                          : 'text-gray-700 hover:text-black hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{t[item.key as keyof typeof t] || item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-[#00FFFF]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className={`p-6 border-t ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <DarkLightThemeSelector />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
        isDark 
          ? 'bg-black/80 border-gray-800/50' 
          : 'bg-white/80 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <OoliteLogo />
              <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-black'}`}>
                Digital Arts Lab
              </span>
            </div>

            {/* Desktop Navigation Links - Icon Grid */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => navigateToPage(item.href)}
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all duration-300 ${
                      isActive
                        ? 'border-[#00FFFF] bg-[#00FFFF]/10 shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                        : isDark 
                          ? 'border-gray-700 bg-black/50 hover:border-[#00FFFF]/60 hover:bg-[#00FFFF]/5'
                          : 'border-gray-200 bg-white/50 hover:border-[#00FFFF]/60 hover:bg-[#00FFFF]/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-5 h-5 transition-colors ${
                      isActive 
                        ? 'text-[#00FFFF]' 
                        : isDark 
                          ? 'text-gray-300 group-hover:text-[#00FFFF]'
                          : 'text-gray-600 group-hover:text-[#00FFFF]'
                    }`} />
                    
                    {/* Tooltip */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      isDark 
                        ? 'bg-[#18181b] text-white border border-[#00FFFF]' 
                        : 'bg-white text-gray-800 border border-[#00FFFF] shadow-lg'
                    }`}>
                      {t[item.key as keyof typeof t] || item.name}
                      {/* Arrow */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45 ${
                        isDark 
                          ? 'bg-[#18181b] border-l border-t border-[#00FFFF]' 
                          : 'bg-white border-l border-t border-[#00FFFF]'
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <DarkLightThemeSelector />
                <LanguageSelector />
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`md:hidden p-2 rounded-lg ${
                  isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <MobileMenu />
        </div>
      )}
    </>
  );
} 