'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface MenuItem {
  label: string;
  path: string;
  enabled?: boolean;
  external?: boolean;
}

interface DesktopNavigationProps {
  menuItems: MenuItem[];
  onDropdownOpen?: (open: boolean) => void;
}

export default function DesktopNavigation({ menuItems, onDropdownOpen }: DesktopNavigationProps) {
  const { theme } = useTheme();
  const { toast } = useToast();
  const pathname = usePathname();
  const isDark = theme === 'dark';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if current path is related to exhibitions/events
  const isExhibitionsActive = pathname?.startsWith('/calendar/exhibitions') || 
                             pathname?.startsWith('/calendar') ||
                             pathname?.startsWith('/events');

  // Lock body scroll when dropdown is open
  useEffect(() => {
    if (dropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [dropdownOpen]);

  // Notify parent when dropdownOpen changes
  useEffect(() => {
    if (onDropdownOpen) onDropdownOpen(dropdownOpen);
  }, [dropdownOpen, onDropdownOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    toast({
      title: 'Coming Soon',
      description: 'This section is under construction.',
    });
  };

  // Dropdown menu items
  const exhibitionsDropdown = [
    {
      section: 'In the galleries',
      items: [
        { label: 'Current and upcoming exhibitions', path: '/calendar/exhibitions' },
        { label: 'Exhibition history', path: '/calendar/exhibitions/history' },
      ],
    },
    {
      section: "What's on",
      items: [
        { label: 'Events calendar', path: '/calendar' },
        { label: 'Film series', path: '/calendar/film-series' },
        { label: 'Performances', path: '/calendar/performances' },
      ],
    },
  ];

  // Close dropdown when clicking overlay
  const handleOverlayClick = () => setDropdownOpen(false);

  return (
    <nav className="flex items-center relative z-50">
      <ul className="flex space-x-8 text-xl items-center">
        {/* Visit */}
        <li>
          <Link
            href="/visit"
            className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
          >
            Visit
          </Link>
        </li>
        {/* Exhibitions and Events Dropdown Trigger */}
        <li>
          <button
            className={`transition-colors py-2 font-bold focus:outline-none ${dropdownOpen || isExhibitionsActive ? (isDark ? 'border-b-4 border-white text-white pb-0' : 'border-b-4 border-black text-black pb-0') : (isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600')}`}
            onClick={() => setDropdownOpen(true)}
          >
            Exhibitions and events
          </button>
        </li>
        {/* Art and Artists */}
        <li>
          <Link
            href="/portfolio"
            className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
          >
            Art and artists
          </Link>
        </li>
        {/* Bio */}
        <li>
          <Link
            href="/bio"
            className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
          >
            Bio
          </Link>
        </li>
        {/* CV */}
        <li>
          <Link
            href="/cv"
            className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
          >
            CV
          </Link>
        </li>
        {/* Store */}
        <li>
          <a
            href="https://www.artsy.net/artist/moises-sanabria"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
          >
            Store
          </a>
        </li>
        {/* Search */}
        <li>
          <Search className="w-5 h-5 cursor-pointer ml-4" />
        </li>
      </ul>

      {/* Overlay and Dropdown */}
      {dropdownOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-white/80 z-40 animate-fade-in"
            onClick={handleOverlayClick}
          />
          {/* Sticky Navbar and Dropdown */}
          <div className="fixed top-0 left-0 w-full z-50">
            <div className={`${isDark ? 'bg-black border-black' : 'bg-white'} border-b shadow-sm transition-all duration-300`}>
              <div className="max-w-7xl mx-auto px-11 py-6 flex items-center">
                <ul className="flex space-x-8 text-xl items-center">
                  <li>
                    <Link
                      href="/visit"
                      className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
                    >
                      Visit
                    </Link>
                  </li>
                  <li>
                    <button
                      className={`transition-colors py-2 font-bold focus:outline-none ${isDark ? 'border-b-4 border-white text-white pb-0' : 'border-b-4 border-black text-black pb-0'}`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      Exhibitions and events
                    </button>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
                    >
                      Art and artists
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bio"
                      className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
                    >
                      Bio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cv"
                      className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
                    >
                      CV
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.artsy.net/artist/moises-sanabria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors py-2 font-bold ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
                    >
                      Store
                    </a>
                  </li>
                  <li>
                    <Search className="w-5 h-5 cursor-pointer ml-4" />
                  </li>
                </ul>
              </div>
            </div>
            {/* Dropdown */}
            <div
              ref={dropdownRef}
              className={`w-full ${isDark ? 'bg-black border-black' : 'bg-white border-none'} shadow-xl border-b animate-slide-down z-50`}
            >
              <div className="max-w-7xl mx-auto p-8 flex gap-16">
                {exhibitionsDropdown.map((section) => (
                  <div key={section.section}>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-400'} font-semibold mb-2 text-base`}>{section.section}</div>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li className="py-2" key={item.path}>
                          <Link
                            href={item.path}
                            className={`text-3xl font-bold transition-colors hover:underline ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
                            onClick={() => setDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

/*
Add these keyframes to your global CSS (e.g. globals.css):

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.2s ease;
}

@keyframes slide-down {
  from { transform: translateY(-32px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-down {
  animation: slide-down 0.25s cubic-bezier(0.4,0,0.2,1);
}
*/ 