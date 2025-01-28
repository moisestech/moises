'use client';

import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/appContext';
import { Search } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { MorphingText } from "@/components/ui/morphing-text";

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

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  console.log('Current theme:', theme); // Debug log

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: "This section is under construction.",
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`transition-all duration-300 ${isScrolled ? 'h-[64px]' : 'h-auto'}`}>
        {/* First row - animates up/down */}
        <div 
          className={`transition-transform duration-300 ${
            isScrolled ? '-translate-y-full h-0 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-baseline">
              <span className="text-6xl font-extrabold tracking-tighter mr-2">MoISES</span>
              {/* <MorphingText texts={texts} className="text-sm font-extrabold tracking-tighter"/> */}
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  console.log('Switching theme from:', theme); // Debug log
                  setTheme(isDark ? 'light' : 'dark');
                }}
                className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
              >
                {isDark ? '🌞' : '🌙'}
              </button>
              <button className="px-4 py-2 text-sm rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors">EN</button>
              <button className="px-4 py-2 text-sm rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors">ES</button>
            </div>
          </div>
        </div>

        {/* Second row - moves up when first row animates out */}
        <div 
          className={`transition-all duration-300 ${isScrolled ? '-translate-y-full absolute top-full left-0 right-0' : 'translate-y-0'} ${isDark ? 'bg-black' : 'bg-white'} backdrop-blur-sm`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <nav>
              <ul className="flex space-x-8 text-xl font-bold">
                <li>
                  <Link href="/visit" onClick={(e) => handleNavClick(e, '/visit')} className="hover:text-gray-600 transition-colors rounded-full py-2">
                    Visit
                  </Link>
                </li>
                <li>
                  <Link href="/exhibitions" onClick={(e) => handleNavClick(e, '/exhibitions')} className="hover:text-gray-600 transition-colors rounded-full py-2">
                    Exhibitions
                  </Link>
                </li>
                <li>
                  <Link href="/events" onClick={(e) => handleNavClick(e, '/events')} className="hover:text-gray-600 transition-colors rounded-full py-2">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/moikipedia" className="hover:text-gray-600 transition-colors rounded-full py-2">
                    Art and Artist
                  </Link>
                </li>
                <li>
                  <Link href="/store" onClick={(e) => handleNavClick(e, '/store')} className="hover:text-gray-600 transition-colors rounded-full py-2">
                    Store
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
