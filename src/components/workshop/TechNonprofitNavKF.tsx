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
import { Menu, X } from 'lucide-react';

// TRANSLATIONS
import { proposalTranslations } from '@/translations/proposal';

// Landing page navigation (sections)
const landingNavigation = [
  { name: "Overview", href: "#overview", key: "overview" },
  { name: "Digital Capacity", href: "#capacity", key: "digitalCapacity" },
  { name: "ROI", href: "#roi", key: "roi" },
  { name: "Principles", href: "#principles", key: "principles" },
  { name: "Budget", href: "#budget", key: "budget" },
  { name: "Workshops", href: "#workshops", key: "workshops" },
  { name: "Impact", href: "#impact", key: "impact" },
  { name: "Timeline", href: "#roadmap", key: "timeline" },
  { name: "Take-aways", href: "#takeaways", key: "takeaways" }
];

// Other pages navigation (links to other pages)
const otherPagesNavigation = [
  { name: "Overview", href: "/grant/knight-foundation", key: "overview" },
  { name: "Proposal", href: "/grant/knight-foundation/proposal", key: "proposal" },
  { name: "Roadmap", href: "/grant/knight-foundation/roadmap", key: "roadmap" },
  { name: "Workshops", href: "/grant/knight-foundation/workshops", key: "workshops" },
  { name: "Smart Signs", href: "/services/smartsign", key: "smartSigns" },
  { name: "Sustainability", href: "/grant/knight-foundation/sustainability-cycle", key: "sustainability" },
  { name: "AI Toolkits", href: "/grant/knight-foundation/ai-toolkits", key: "aiToolkits" },
  { name: "Impact & ROI", href: "/grant/knight-foundation/impact-roi", key: "impactRoi" },
  { name: "Budget", href: "/grant/knight-foundation/budget", key: "budget" }
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
        <nav className="flex flex-col space-y-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => navigateToPage(item.href)}
              className={`text-left text-xl ${isDark ? 'text-white hover:text-[#A4FF4E]' : 'text-black hover:text-[#A4FF4E]'} transition-colors py-2`}
            >
              {t[item.key as keyof typeof t] || item.name}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 ${isDark ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-md border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/grant/knight-foundation" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-[#A4FF4E] to-[#00FF88] bg-clip-text text-transparent">
                Knight Foundation Proposal
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigateToPage(item.href)}
                    className={`text-sm font-medium transition-colors ${
                      (isLandingPage && activeSection === item.href.substring(1)) ||
                      (!isLandingPage && pathname === item.href)
                        ? 'text-[#A4FF4E]'
                        : isDark 
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {t[item.key as keyof typeof t] || item.name}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <LanguageSelector />
                <DarkLightThemeSelector />
              </div>
              
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