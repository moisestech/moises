"use client";
import { useTheme } from "@/contexts/ThemeContext";

export default function HeroGradientOverlay() {
  const { theme } = useTheme();
  return theme === "dark" ? (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d0b4e]/80 via-[#00ffd0]/30 via-40% via-[#00bfff]/20 to-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#00ffd0]/20 to-black/80 opacity-80 mix-blend-lighten pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#7f00ff]/30 to-transparent opacity-70 mix-blend-screen pointer-events-none" />
    </div>
  ) : (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff]/90 via-[#a7f3d0]/50 via-40% via-[#bae6fd]/30 to-white/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#a7f3d0]/30 to-white/90 opacity-90 mix-blend-lighten pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#818cf8]/40 to-transparent opacity-80 mix-blend-screen pointer-events-none" />
    </div>
  );
} 