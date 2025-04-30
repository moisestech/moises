'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const texts = ['TECH', 'SANABRIA', 'ART', 'DIGITAL', 'AI', 'MEME', 'NEW MEDIA'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    toast({
      title: 'Coming Soon',
      description: 'This section is under construction.',
    });
  };

  const menuItems = [
    { label: 'Visit', path: '/visit' },
    { label: 'Exhibitions', path: '/exhibitions' },
    { label: 'Events', path: '/events' },
    { label: 'Art and Artist', path: '/bio', enabled: true },
    { label: 'CV', path: '/cv', enabled: true },
    { label: 'Store', path: '/store' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors font-['MoMA_Sans'] ${
          theme === 'dark' 
            ? 'bg-black text-white border-black' 
            : 'bg-white text-black border-gray-200'
        } border-b`}
      >
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
          <div className={`transition-transform duration-300 ${
            isScrolled
              ? '-translate-y-full opacity-0 md:h-0 overflow-hidden'
              : 'translate-y-0 opacity-100'
          }`}>
            <div className="max-w-7xl mx-auto px-10 pt-7 flex justify-between items-start">
              <Link href="/" className="flex items-baseline">
                <span className="text-4xl md:text-7xl font-bold tracking-tighter mr-2">
                  Moises
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-4 mr-[120px] pt-1">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-black'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {isDark ? '🌞' : '🌙'}
                </button>
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
          <div className={`transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-black border-black' 
              : 'bg-white border-gray-200'
          } hidden md:block w-full ${
            isScrolled ? 'fixed top-0 left-0 right-0 border-t' : 'relative'
          }`}>
            <div className="max-w-7xl mx-auto px-11 py-6 flex justify-between items-center">
              <nav className="flex items-center">
                <ul className="flex space-x-8 text-xl items-center">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        onClick={(e) =>
                          item.enabled || item.path === '/bio'
                            ? undefined
                            : handleNavClick(e, item.path)
                        }
                        className={`transition-colors rounded-full py-2 font-bold ${
                          theme === 'dark'
                            ? 'hover:text-gray-300'
                            : 'hover:text-gray-600'
                        }`}
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
      <div className={`fixed inset-0 z-40 transition-transform duration-300 transform ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden font-['MoMA_Sans'] ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-white text-black'
      }`}>
        <div className="h-full flex flex-col pt-32 px-8">
          <nav>
            <ul className="space-y-8">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={(e) =>
                      item.enabled || item.path === '/bio'
                        ? undefined
                        : handleNavClick(e, item.path)
                    }
                    className={`text-4xl font-bold transition-colors block ${
                      theme === 'dark'
                        ? 'text-white hover:text-gray-300'
                        : 'text-black hover:text-gray-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto mb-8 flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-black'
                  : 'hover:bg-gray-100'
              }`}
            >
              {isDark ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
