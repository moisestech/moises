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

// LOGOS
import Logo from '@/app/(grant)/grant/knight-foundation/Logo';
import LogoIcon from '@/app/(grant)/grant/knight-foundation/LogoIcon';

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
  RefreshCw
} from 'lucide-react';

// TRANSLATIONS
import { proposalTranslations } from '@/translations/proposal';

// Knight Foundation Logo Component
const KnightFoundationLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 495.817 495.817" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        width="495.817" 
        height="495.817" 
        fill={isDark ? '#fff' : '#010101'}
      />
      <path 
        d="M276.241,162.911v56.665h120.413s0,56.665,0,56.665h-120.413v113.33l-91.636-141.663,91.636-141.663h134.58s0,56.664,0,56.664h-134.58ZM120.413,280.155v109.413h70.775l-70.775-109.413ZM191.187,106.246h-70.775v109.413l70.775-109.413Z" 
        fill={isDark ? '#010101' : '#fff'}
      />
    </svg>
  );
};

// Landing page navigation (sections) with icons
const landingNavigation = [
  { name: "Overview", href: "#overview", key: "overview", icon: Home },
  { name: "Digital Capacity", href: "#capacity", key: "digitalCapacity", icon: Zap },
  { name: "ROI", href: "#roi", key: "roi", icon: TrendingUp },
  { name: "Principles", href: "#principles", key: "principles", icon: Scale },
  { name: "Budget", href: "#budget", key: "budget", icon: DollarSign },
  { name: "Workshops", href: "#workshops", key: "workshops", icon: GraduationCap },
  { name: "Impact", href: "#impact", key: "impact", icon: Heart },
  { name: "Timeline", href: "#roadmap", key: "timeline", icon: Clock },
  { name: "Take-aways", href: "#takeaways", key: "takeaways", icon: Lightbulb }
];

// Other pages navigation (links to other pages) with icons
const otherPagesNavigation = [
  { name: "Overview", href: "/grant/knight-foundation", key: "overview", icon: Home },
  { name: "Proposal", href: "/grant/knight-foundation/proposal", key: "proposal", icon: FileText },
  { name: "Roadmap", href: "/grant/knight-foundation/roadmap", key: "roadmap", icon: Map },
  { name: "Workshops", href: "/grant/knight-foundation/workshops", key: "workshops", icon: GraduationCap },
  { name: "Smart Signs", href: "/services/smartsign", key: "smartSigns", icon: Building2 },
  { name: "Sustainability", href: "/grant/knight-foundation/sustainability-cycle", key: "sustainability", icon: RefreshCw },
  { name: "AI Toolkits", href: "/grant/knight-foundation/ai-toolkits", key: "aiToolkits", icon: Zap },
  { name: "Impact & ROI", href: "/grant/knight-foundation/impact-roi", key: "impactRoi", icon: BarChart3 },
  { name: "Budget", href: "/grant/knight-foundation/budget", key: "budget", icon: DollarSign }
];

// Translations
const translations = {
  en: {
    menu: "Menu",
    overview: "Overview",
    digitalCapacity: "Digital Capacity",
    roi: "ROI",
    principles: "Principles",
    budget: "Budget",
    workshops: "Workshops",
    impact: "Impact",
    timeline: "Timeline",
    takeaways: "Take-aways",
    proposal: "Proposal",
    roadmap: "Roadmap",
    smartSigns: "Smart Signs",
    sustainability: "Sustainability",
    aiToolkits: "AI Toolkits",
    impactRoi: "Impact & ROI"
  },
  es: {
    menu: "Menú",
    overview: "Resumen",
    digitalCapacity: "Capacidad Digital",
    roi: "ROI",
    principles: "Principios",
    budget: "Presupuesto",
    workshops: "Talleres",
    impact: "Impacto",
    timeline: "Cronograma",
    takeaways: "Conclusiones",
    proposal: "Propuesta",
    roadmap: "Hoja de Ruta",
    smartSigns: "Señales Inteligentes",
    sustainability: "Sostenibilidad",
    aiToolkits: "Herramientas IA",
    impactRoi: "Impacto y ROI"
  },
  fr: {
    menu: "Menu",
    overview: "Aperçu",
    digitalCapacity: "Capacité Numérique",
    roi: "ROI",
    principles: "Principes",
    budget: "Budget",
    workshops: "Ateliers",
    impact: "Impact",
    timeline: "Calendrier",
    takeaways: "Points Clés",
    proposal: "Proposition",
    roadmap: "Feuille de Route",
    smartSigns: "Panneaux Intelligents",
    sustainability: "Durabilité",
    aiToolkits: "Outils IA",
    impactRoi: "Impact et ROI"
  }
};

export function TechNonprofitNavKF() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const t = translations[language];
  const isLandingPage = pathname === '/grant/knight-foundation';
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
              className={`${isDark ? 'text-white hover:text-[#A4FF4E]' : 'text-black hover:text-[#A4FF4E]'} transition-colors`}
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
                    ? 'border-[#A4FF4E] bg-[#A4FF4E]/10 shadow-[0_0_20px_rgba(164,255,78,0.3)]'
                    : isDark 
                      ? 'border-gray-700 bg-black/50 hover:border-[#A4FF4E]/60 hover:bg-[#A4FF4E]/5'
                      : 'border-gray-200 bg-white/50 hover:border-[#A4FF4E]/60 hover:bg-[#A4FF4E]/5'
                }`}
              >
                <Icon className={`w-6 h-6 transition-colors ${
                  isActive 
                    ? 'text-[#A4FF4E]' 
                    : isDark 
                      ? 'text-gray-300 group-hover:text-[#A4FF4E]'
                      : 'text-gray-600 group-hover:text-[#A4FF4E]'
                }`} />
                <span className={`text-xs font-medium text-center ${
                  isActive 
                    ? 'text-[#A4FF4E]' 
                    : isDark 
                      ? 'text-gray-300 group-hover:text-[#A4FF4E]'
                      : 'text-gray-600 group-hover:text-[#A4FF4E]'
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
              <Link href="/grant/knight-foundation" className="flex items-center gap-3">
                <KnightFoundationLogo size="md" className={isDark ? 'text-white' : 'text-black'} />
                <X className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                <LogoIcon size="md" className={isDark ? 'text-white' : 'text-black'} />
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
                        ? 'border-[#A4FF4E] bg-[#A4FF4E]/10 shadow-[0_0_20px_rgba(164,255,78,0.3)]'
                        : isDark 
                          ? 'border-gray-700 bg-black/50 hover:border-[#A4FF4E]/60 hover:bg-[#A4FF4E]/5'
                          : 'border-gray-200 bg-white/50 hover:border-[#A4FF4E]/60 hover:bg-[#A4FF4E]/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-5 h-5 transition-colors ${
                      isActive 
                        ? 'text-[#A4FF4E]' 
                        : isDark 
                          ? 'text-gray-300 group-hover:text-[#A4FF4E]'
                          : 'text-gray-600 group-hover:text-[#A4FF4E]'
                    }`} />
                    
                    {/* Tooltip */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      isDark 
                        ? 'bg-[#18181b] text-white border border-[#A4FF4E]' 
                        : 'bg-white text-gray-800 border border-[#A4FF4E] shadow-lg'
                    }`}>
                      {t[item.key as keyof typeof t] || item.name}
                      {/* Arrow */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45 ${
                        isDark 
                          ? 'bg-[#18181b] border-l border-t border-[#A4FF4E]' 
                          : 'bg-white border-l border-t border-[#A4FF4E]'
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