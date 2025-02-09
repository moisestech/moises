'use client';

import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/appContext';
import { Search } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { MorphingText } from "@/components/ui/morphing-text";
import { Menu, X } from 'lucide-react';

const texts = [
  "TECH",
  "SANABRIA",
  "ART",
  "DIGITAL",
  "AI",
  "MEME",
  "NEW MEDIA"
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useAppContext();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  console.log('Current theme:', theme); // Debug log

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    toast({
      title: "Coming Soon",
      description: "This section is under construction.",
    });
  };

  const menuItems = [
    { label: 'Visit', path: '/visit' },
    { label: 'Exhibitions', path: '/exhibitions' },
    { label: 'Events', path: '/events' },
    { label: 'Art and Artist', path: '/moikipedia' },
    { label: 'Store', path: '/store' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors font-['MoMA_Sans'] ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Fixed Visit Button */}
        <div className="hidden md:block absolute right-0 top-[30px] px-10 z-10">
          <Link
            href="/visit"
            onClick={(e) => handleNavClick(e, '/visit')}
            className="bg-cyan-400 text-black px-6 py-2 font-['MoMA_Sans'] font-bold"
          >
            Visit
          </Link>
        </div>

        <div className={`transition-all duration-300 ${isScrolled ? 'h-[80px]' : 'h-auto'}`}>
          {/* First row */}
          <div 
            className={`transition-transform duration-300 ${
              isScrolled ? '-translate-y-full opacity-0 md:h-0 overflow-hidden' : 'translate-y-0 opacity-100'
            }`}
          >
            <div className="max-w-7xl mx-auto px-10 pt-7 flex justify-between items-start">
              <Link href="/" className="flex items-baseline">
                <span className="text-4xl md:text-7xl font-bold tracking-tighter mr-2">Moises</span>
              </Link>
              <div className="hidden md:flex items-center space-x-4 mr-[120px] pt-1">
                <button
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
                >
                  {isDark ? '🌞' : '🌙'}
                </button>
                <button className="px-4 py-2 text-sm font-light hover:bg-opacity-20 hover:bg-gray-500 transition-colors">EN</button>
                <button className="px-4 py-2 text-sm font-light hover:bg-opacity-20 hover:bg-gray-500 transition-colors">ES</button>
              </div>
              <div className="md:hidden flex items-center gap-3">
                <Link
                  href="/visit"
                  onClick={(e) => handleNavClick(e, '/visit')}
                  className="bg-cyan-400 text-black px-6 py-2 font-['MoMA_Sans'] font-bold"
                >
                  Visit
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2"
                >
                  {mobileMenuOpen ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <Menu className="h-8 w-8" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Second row - desktop only */}
          <div 
            className={`transition-all duration-300 ${isDark ? 'bg-black' : 'bg-white'} backdrop-blur-sm hidden md:block w-full ${
              isScrolled ? 'fixed top-0 left-0 right-0 border-t' : 'relative'
            } ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
          >
            <div className="max-w-7xl mx-auto px-11 py-6 flex justify-between items-center">
              <nav className="flex items-center">
                <ul className="flex space-x-8 text-xl items-center">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link 
                        href={item.path} 
                        onClick={(e) => item.path === '/moikipedia' ? undefined : handleNavClick(e, item.path)} 
                        className="hover:text-gray-600 transition-colors rounded-full py-2 font-bold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Search className="w-5 h-5 cursor-pointer ml-4" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden font-['MoMA_Sans']`}
      >
        <div className="h-full flex flex-col pt-32 px-8">
          <nav>
            <ul className="space-y-8">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    onClick={(e) => item.path === '/moikipedia' ? undefined : handleNavClick(e, item.path)}
                    className="text-4xl font-bold text-black hover:text-gray-600 transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto mb-8 flex items-center space-x-4">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
            <button className="px-4 py-2 text-xl font-light">EN</button>
            <button className="px-4 py-2 text-xl font-light">ES</button>
          </div>
        </div>
      </div>
    </>
  );
}
