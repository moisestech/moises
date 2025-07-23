'use client';

// REACT & NEXT
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

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
  Rocket
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

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center rounded-lg ${
      isDark ? 'bg-purple-600' : 'bg-purple-500'
    } text-white font-bold text-xs`}>
      O
    </div>
  );
};

// Landing page navigation (sections) with icons
const landingNavigation = [
  { name: "Overview", href: "#overview", key: "overview", icon: Home },
  { name: "Timeline", href: "#timeline", key: "timeline", icon: Clock },
  { name: "Budget", href: "#budget", key: "budget", icon: DollarSign },
  { name: "Workshops", href: "#workshops", key: "workshops", icon: GraduationCap },
  { name: "Impact", href: "#impact", key: "impact", icon: Heart },
  { name: "Roadmap", href: "#roadmap", key: "roadmap", icon: Map },
  { name: "Take-aways", href: "#takeaways", key: "takeaways", icon: Lightbulb }
];

// Other pages navigation (links to other pages) with icons
const otherPagesNavigation = [
  { name: "Overview", href: "/workshop/tech-nonprofit/oolite", key: "overview", icon: Home },
  { name: "Budget", href: "/workshop/tech-nonprofit/oolite/budget", key: "budget", icon: DollarSign },
  { name: "Roadmap", href: "/workshop/tech-nonprofit/oolite/roadmap", key: "roadmap", icon: Map },
  { name: "Workshops", href: "/workshop/tech-nonprofit/oolite/workshops", key: "workshops", icon: GraduationCap },
  { name: "Digital Arts Lab", href: "/workshop/tech-nonprofit/oolite/lab", key: "lab", icon: Building2 },
  { name: "AI Tools", href: "/workshop/tech-nonprofit/oolite/ai-tools", key: "aiTools", icon: Cpu },
  { name: "Impact & ROI", href: "/workshop/tech-nonprofit/oolite/impact-roi", key: "impactRoi", icon: BarChart3 }
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
    takeaways: "Take-aways",
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
    takeaways: "Conclusiones",
    lab: "Laboratorio de Arte Digital",
    aiTools: "Herramientas IA",
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
    takeaways: "Points Clés",
    lab: "Laboratoire d'Art Numérique",
    aiTools: "Outils IA",
    impactRoi: "Impact et ROI"
  }
};

export function TechNonprofitNavOolite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const t = translations[language];
  const isLandingPage = pathname === '/workshop/tech-nonprofit/oolite';
  const navigation = isLandingPage ? landingNavigation : otherPagesNavigation;
  const isDark = theme === 'dark';

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navigateToPage = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/')) {
      router.push(href);
    } else {
      scrollToSection(href.substring(1));
    }
  };

  useEffect(() => {
    if (isLandingPage) {
      const handleScroll = () => {
        const sections = landingNavigation.map(item => item.href.substring(1));
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isLandingPage]);

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isMenuOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md`}
      style={{ display: isMenuOpen ? 'block' : 'none' }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{t.menu}</h2>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <DarkLightThemeSelector />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className={`${isDark ? 'text-white hover:text-purple-400' : 'text-black hover:text-purple-600'} transition-colors`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <nav className="grid grid-cols-3 gap-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = (isLandingPage && activeSection === item.href.substring(1)) ||
                           (!isLandingPage && pathname === item.href);
            return (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.href)}
                className={`group flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                  isActive
                    ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                    : isDark 
                      ? 'border-gray-700 bg-black/50 hover:border-purple-500/60 hover:bg-purple-500/5'
                      : 'border-gray-200 bg-white/50 hover:border-purple-500/60 hover:bg-purple-500/5'
                }`}
              >
                <Icon className={`w-6 h-6 transition-colors ${
                  isActive 
                    ? 'text-purple-500' 
                    : isDark 
                      ? 'text-gray-300 group-hover:text-purple-500'
                      : 'text-gray-600 group-hover:text-purple-500'
                }`} />
                <span className={`text-xs font-medium text-center ${
                  isActive 
                    ? 'text-purple-500' 
                    : isDark 
                      ? 'text-gray-300 group-hover:text-purple-500'
                      : 'text-gray-600 group-hover:text-purple-500'
                }`}>
                  {t[item.key as keyof typeof t] || item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 ${isDark ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-md border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Left: Logo Group */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/workshop/tech-nonprofit/oolite" className="flex items-center gap-3">
                <OoliteLogo size="md" className={isDark ? 'text-white' : 'text-black'} />
                <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>
                  Digital Arts Lab
                </span>
              </Link>
            </div>
            
            {/* Center: Desktop Navigation - Icon Grid */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = (isLandingPage && activeSection === item.href.substring(1)) ||
                               (!isLandingPage && pathname === item.href);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => navigateToPage(item.href)}
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all duration-300 ${
                      isActive
                        ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                        : isDark 
                          ? 'border-gray-700 bg-black/50 hover:border-purple-500/60 hover:bg-purple-500/5'
                          : 'border-gray-200 bg-white/50 hover:border-purple-500/60 hover:bg-purple-500/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-5 h-5 transition-colors ${
                      isActive 
                        ? 'text-purple-500' 
                        : isDark 
                          ? 'text-gray-300 group-hover:text-purple-500'
                          : 'text-gray-600 group-hover:text-purple-500'
                    }`} />
                    
                    {/* Tooltip */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      isDark 
                        ? 'bg-[#18181b] text-white border border-purple-500' 
                        : 'bg-white text-gray-800 border border-purple-500 shadow-lg'
                    }`}>
                      {t[item.key as keyof typeof t] || item.name}
                      {/* Arrow */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45 ${
                        isDark 
                          ? 'bg-[#18181b] border-l border-t border-purple-500' 
                          : 'bg-white border-l border-t border-purple-500'
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </nav>

            {/* Right: Language Selectors and Mobile Menu */}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <DarkLightThemeSelector />
              
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`md:hidden ${isDark ? 'text-white' : 'text-black'}`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
} 