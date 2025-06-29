"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { exhibitions } from "@/constants/exhibitions";
import Image from "next/image";

export default function ExhibitionHistoryPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`min-h-screen w-full ${isDark ? "bg-black text-white" : "bg-white text-black"} pt-64 md:pt-44`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-6xl font-extrabold mb-4">Exhibition history</h1>
        <div className="text-2xl font-bold mt-12 mb-8 max-w-2xl">
          Explore exhibitions from Moises Sanabria and collaborators, from early shows to the present. These pages are updated continually.
        </div>
        {/* Search and Filters */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label className="font-bold text-xl mr-4" htmlFor="search">Search exhibitions</label>
            <input id="search" type="text" placeholder="Search..." className="flex-1 border-b-2 border-black bg-transparent px-2 py-1 text-lg outline-none" />
            <button className="ml-2 text-2xl">🔍</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
              <option>All types</option>
            </select>
            <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
              <option>All Years</option>
            </select>
            <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
              <option>All locations</option>
            </select>
            <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
              <option>Relevance</option>
            </select>
          </div>
        </div>
        <div className="text-lg font-bold mb-6">{exhibitions.length} exhibitions online</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {exhibitions.map(exh => (
            <div key={exh.id} className="flex flex-col">
              <div className="relative w-full h-48 mb-3 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <Image src={exh.imageUrl} alt={exh.title} fill className="object-cover" />
              </div>
              <div className="text-xl font-bold leading-tight mb-1">{exh.title}</div>
              <div className="text-md text-gray-600 dark:text-gray-300 mb-1">{exh.date}</div>
              <div className="text-md text-gray-600 dark:text-gray-300 mb-1">{exh.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 