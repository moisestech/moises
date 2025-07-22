"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, BookOpen, Users, Sparkles, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSelector } from "@/components/common/LanguageSelector";

const navLinks = [
  { name: "Learn", href: "#overview", icon: Sparkles },
  { name: "Lessons", href: "#curriculum", icon: BookOpen },
  { name: "Meet", href: "#instructors", icon: Users },
  { name: "Book", href: "#contact", icon: Calendar },
];

export default function AiArtsNav() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log('window.scrollY:', window.scrollY);
      setScrolled(window.scrollY > 8);
      console.log('scrolled set to:', window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log('AIArtsNav render, scrolled:', scrolled);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center items-center gap-4 py-4 px-2 transition-all duration-300
      ${scrolled
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm'
        : 'bg-gradient-to-b from-black/80 to-transparent border-none shadow-none'}
    `}
    >
      <div className="flex gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-base transition-colors hover:bg-purple-100/40 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300"
          >
            <link.icon className="w-5 h-5" />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className="ml-4">
        <LanguageSelector />
      </div>
      <button
        onClick={() => {
          try {
            console.log('Theme toggle button clicked. Current theme:', theme);
            toggleTheme();
            setTimeout(() => {
              console.log('Theme after toggle:', theme);
            }, 100);
          } catch (e) {
            console.error('Error toggling theme:', e);
          }
        }}
        className="ml-4 flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-purple-100/40 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"} Mode</span>
      </button>
    </nav>
  );
} 