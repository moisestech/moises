'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { DarkLightThemeSelector } from '@/components/common/DarkLightThemeSelector';

const navigation = [
  { name: "Overview", href: "#overview" },
  { name: "Digital Capacity", href: "#capacity" },
  { name: "ROI", href: "#roi" },
  { name: "Principles", href: "#principles" },
  { name: "Budget", href: "#budget" },
  { name: "Workshops", href: "#workshops" },
  { name: "Impact", href: "#impact" },
  { name: "Timeline", href: "#roadmap" },
  { name: "Take-aways", href: "#takeaways" }
];

export function TechNonprofitNavKF() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("budget");
  const { theme } = useTheme();

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.substring(1));
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

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isMenuOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 ${
        theme === 'dark' ? 'bg-black/80' : 'bg-white/80'
      } backdrop-blur-md ${isMenuOpen ? 'block' : 'hidden'}`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Menu</h2>
          <div className="flex items-center gap-4">
            <DarkLightThemeSelector />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className={`${
                theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
              } transition-colors`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <nav className="flex flex-col space-y-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.substring(1))}
              className={`text-left text-xl ${
                theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
              } transition-colors py-2`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
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
            <Link href="/grant/knight-foundation" className="text-xl font-bold">
              <span className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'
              } bg-clip-text text-transparent`}>
                Knight Foundation Proposal
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        : theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <DarkLightThemeSelector />
              
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
        </div>
      </header>

      <MobileMenu />
    </>
  );
} 