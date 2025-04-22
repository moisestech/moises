'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from '@/components/common/LanguageSelector';
import { DarkLightThemeSelector } from '@/components/common/DarkLightThemeSelector';
import { Button } from '@/components/ui/button';

// Navigation items
const navigation = [
  { name: "Overview", href: "#overview" },
  { name: "Services", href: "#services" },
  { name: "Workshops", href: "#workshops" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
];

export function TechNonprofitNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close mobile menu after clicking
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Mobile menu component
  const MobileMenu = () => (
    <div className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <DarkLightThemeSelector />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-blue-400 transition-colors"
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
              className="text-left text-xl text-white hover:text-blue-400 transition-colors py-2"
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
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Artist Tech Initiative
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
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
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu />
    </>
  );
} 