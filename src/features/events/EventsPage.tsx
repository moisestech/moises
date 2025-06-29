"use client";
import { events, eventCategories } from "@/constants/events";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function EventsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`min-h-screen w-full ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Current and Upcoming Events */}
          <div>
            <Link href="/calendar/exhibitions" className="text-4xl font-bold mb-8 block hover:underline">
              Current and upcoming exhibitions
            </Link>
            <div className="space-y-8">
              {events.map(event => (
                <div key={event.id} className="flex gap-6 items-start group">
                  <div className="relative w-40 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={event.image || event.imageUrl || ''} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                    <div className="text-md mb-1 opacity-80">{event.date} &middot; {event.location}</div>
                    <div className="text-md mb-2 opacity-80 line-clamp-2">{event.description}</div>
                    {event.link && (
                      <Link href={event.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Event Categories */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Event categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {eventCategories.map((cat, i) => (
                <div key={cat.title} className="rounded-lg overflow-hidden shadow group bg-gray-100 dark:bg-gray-800 hover:scale-[1.03] transition-transform">
                  <div className="relative w-full h-32">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold group-hover:underline">{cat.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 