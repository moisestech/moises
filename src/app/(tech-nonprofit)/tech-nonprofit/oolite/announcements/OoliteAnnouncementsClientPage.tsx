"use client";

import { TechNonprofitNavOolite } from "@/components/workshop/TechNonprofitNavOolite";
import { useTheme } from "@/contexts/ThemeContext";
import { OoliteAnnouncementsSection } from "@/components/page/OoliteAnnouncementsSection";

export default function OoliteAnnouncementsClientPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <TechNonprofitNavOolite />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <OoliteAnnouncementsSection showViewAll={false} compact={false} />
        </div>
      </main>
    </div>
  );
}
