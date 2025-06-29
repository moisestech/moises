'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import ThemeToggle from './ThemeToggle';
import VisitButton from './VisitButton';

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
}

export default function MobileMenu({ menuItems, isOpen, onToggle }: MobileMenuProps) {
  const { theme } = useTheme();
  const { toast } = useToast();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
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
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={onToggle}
        className="p-2"
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <Menu className="h-8 w-8" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden font-['MoMA_Sans'] ${
        isDark 
          ? 'bg-black text-white' 
          : 'bg-white text-black'
      }`}>
        <div className="h-full flex flex-col pt-32 px-8">
          <nav>
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
          </nav>
          <div className="mt-auto mb-8 flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
} 