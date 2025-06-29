"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { exhibitions } from "@/constants/exhibitions";
import ExhibitionSearchFilter from "./components/ExhibitionSearchFilter";
import ExhibitionGrid from "./components/ExhibitionGrid";

export default function ExhibitionHistoryPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`min-h-screen w-full ${isDark ? "bg-black text-white" : "bg-white text-black"} pt-32 md:pt-36`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-6xl font-bold mb-4">Exhibition history</h1>
        <div className="text-2xl font-bold mb-8 max-w-2xl">
          Explore exhibitions from Moises Sanabria and collaborators, from early shows to the present. These pages are updated continually.
        </div>
        <ExhibitionSearchFilter />
        <div className="text-lg font-bold mb-6">{exhibitions.length} exhibitions online</div>
        <ExhibitionGrid exhibitions={exhibitions} />
      </div>
    </section>
  );
} 