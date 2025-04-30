'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Tv } from 'lucide-react';
import { LanguageSelector } from '@/components/common/LanguageSelector';
import { DarkLightThemeSelector } from '@/components/common/DarkLightThemeSelector';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

// Navigation items with translations
const navigation = {
  en: [
    { name: "Overview", href: "#overview" },
    { name: "Features", href: "#features" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  fr: [
    { name: "Aperçu", href: "#overview" },
    { name: "Fonctionnalités", href: "#features" },
    { name: "Cas d'Utilisation", href: "#use-cases" },
    { name: "Tarification", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]
};

export function SmartSignNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { theme } = useTheme();
  const { language } = useLanguage();

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'features', 'use-cases', 'pricing', 'contact'];
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
  }, []);

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

  const MobileMenu = () => (
    <div className={`fixed inset-0 z-50 ${
      theme === 'dark' ? 'bg-black/80' : 'bg-white/80'
    } backdrop-blur-md ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{language === 'fr' ? 'Menu' : 'Menu'}</h2>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <DarkLightThemeSelector />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className={`${
                theme === 'dark' ? 'text-white hover:text-yellow-400' : 'text-gray-900 hover:text-yellow-600'
              } transition-colors`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <nav className="flex flex-col space-y-4">
          {navigation[language as keyof typeof navigation].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.substring(1))}
              className={`text-left text-xl ${
                theme === 'dark' ? 'text-white hover:text-yellow-400' : 'text-gray-900 hover:text-yellow-600'
              } transition-colors py-2`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 ${
        theme === 'dark' 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-yellow-400 via-lime-300 to-yellow-400' 
                  : 'from-yellow-600 via-lime-500 to-yellow-600'
              }`}>
                SmartSign
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navigation[language as keyof typeof navigation].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? theme === 'dark' 
                        ? 'text-yellow-400' 
                        : 'text-yellow-600'
                      : theme === 'dark' 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex items-center space-x-4 ml-4">
                <LanguageSelector />
                <DarkLightThemeSelector />
              </div>
            </nav>
            
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`md:hidden ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
} 