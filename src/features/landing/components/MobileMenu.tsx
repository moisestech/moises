'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import ThemeToggle from './ThemeToggle';
import { WORKSHOP_NAV_PROGRAMS, WORKSHOP_NAV_SITE } from '@/config/site-navigation';

interface MenuItem {
  label: string;
  path: string;
  enabled?: boolean;
  external?: boolean;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  workshopMode?: boolean;
  /** When true, the floating menu button is omitted (header provides its own toggle). */
  hidePrimaryMobileToggle?: boolean;
}

export default function MobileMenu({
  menuItems,
  isOpen,
  onToggle,
  workshopMode,
  hidePrimaryMobileToggle,
}: MobileMenuProps) {
  const { theme } = useTheme();
  const { toast } = useToast();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    onToggle();
    toast({
      title: 'Coming Soon',
      description: 'This section is under construction.',
    });
  };

  return (
    <>
      {/* Mobile Menu Toggle Button — hidden when recruiting header supplies its own control */}
      {!hidePrimaryMobileToggle ? (
        <div className="fixed top-6 right-6 z-60 md:hidden">
          <button
            onClick={onToggle}
            className="p-2 z-60 relative"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-8 w-8" color={isDark ? '#fff' : '#000'} />
            ) : (
              <Menu className="h-8 w-8" color={isDark ? '#fff' : '#000'} />
            )}
          </button>
        </div>
      ) : null}

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden font-['MoMA_Sans'] bg-transparent`}>
        {/* Close (X) Button - only visible when menu is open */}
        {isOpen && (
          <div className="fixed top-6 right-6 z-60 md:hidden">
            <button
              onClick={onToggle}
              className="p-2 z-60 relative"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" color={isDark ? '#fff' : '#000'} />
            </button>
          </div>
        )}
        {/* Animated Silver Gradient Background */}
        <div
          className={`absolute inset-0 z-0 pointer-events-none animated-silver-gradient ${isDark ? 'dark-gradient' : 'light-gradient'} ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          aria-hidden="true"
        />
        <div className="h-full flex flex-col pt-32 px-8 relative z-10">
          <nav>
            {workshopMode ? (
              <div className="space-y-10">
                <div>
                  <p
                    className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
                      isDark ? 'text-white/45' : 'text-black/45'
                    }`}
                  >
                    Programs
                  </p>
                  <ul className="space-y-5">
                    {WORKSHOP_NAV_PROGRAMS.map((item) => (
                      <li key={`${item.label}:${item.path}`}>
                        {item.external ? (
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block text-3xl font-bold transition-colors ${
                              isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                            }`}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.path}
                            onClick={() => onToggle()}
                            className={`block text-3xl font-bold transition-colors ${
                              isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
                      isDark ? 'text-white/45' : 'text-black/45'
                    }`}
                  >
                    Site
                  </p>
                  <ul className="space-y-5">
                    {WORKSHOP_NAV_SITE.map((item) => (
                      <li key={`${item.label}:${item.path}`}>
                        <Link
                          href={item.path}
                          onClick={() => onToggle()}
                          className={`block text-3xl font-bold transition-colors ${
                            isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <ul className="space-y-8">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-4xl font-bold transition-colors block ${
                          isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                        }`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={(e) =>
                          item.enabled || item.path === '/bio'
                            ? undefined
                            : handleNavClick(e, item.path)
                        }
                        className={`text-4xl font-bold transition-colors block ${
                          isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <div className={`mt-auto mb-8 flex items-center space-x-4 ${isDark ? 'text-white' : 'text-black'}`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Animated Silver Gradient CSS */}
      <style jsx>{`
        /* Animated gradient always animates on open, then becomes solid after animation end */
        .animated-silver-gradient {
          background: linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(220,220,220,0.85) 30%, rgba(180,180,180,0.7) 60%, rgba(230,230,230,0.6) 100%);
          animation: shimmer 2s linear 1;
          transition: opacity 0.5s;
        }
        .dark-gradient {
          background: linear-gradient(120deg, rgba(0,0,0,1) 0%, rgba(80,80,80,0.85) 30%, rgba(160,160,160,0.7) 60%, rgba(120,120,120,0.6) 100%);
        }
        .light-gradient {
          background: linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(240,240,240,0.85) 30%, rgba(200,200,200,0.7) 60%, rgba(220,220,220,0.6) 100%);
        }
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
}