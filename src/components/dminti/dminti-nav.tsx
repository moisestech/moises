'use client'

import { useTheme } from "@/contexts/ThemeContext"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"

export function DMINTINav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`fixed inset-x-0 top-0 z-[100] p-6 backdrop-blur-[8px] ${
      theme === 'dark' 
        ? 'bg-black/20 border-b border-white/10' 
        : 'bg-white/20 border-b border-black/10'
    }`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* DMINTI Logo */}
        <div className="p-2 rounded-xl">
          <Image
            src={theme === 'dark' 
              ? "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/DMINTI-logo_white_ugmdhq.webp"
              : "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641800/DMINTI/DMINTI-logo_black_f4ydxe.png"
            }
            alt="DMINTI Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
            unoptimized
          />
        </div>

        {/* Theme toggle */}
        <div className="p-2 rounded-xl">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
} 