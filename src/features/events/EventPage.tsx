"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { events } from "@/constants/events";
import Image from "next/image";

export default function EventPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Filter for exhibition events (customize as needed)
  const exhibitionEvents = events.filter(e =>
    (e.tag && e.tag.toLowerCase().includes("exhibition")) ||
    (e.title && e.title.toLowerCase().includes("exhibition"))
  );

  return (
    <section className={`min-h-screen w-full ${isDark ? "bg-black text-white" : "bg-white text-black"} pt-32 md:pt-36`}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Current and Upcoming Exhibitions</h1>
        {exhibitionEvents.length === 0 ? (
          <div className="text-lg opacity-70">No exhibitions found.</div>
        ) : (
          <div className="space-y-10">
            {exhibitionEvents.map(event => (
              <div key={event.id} className="flex gap-8 items-start">
                <div className="relative w-48 h-36 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={event.image || event.imageUrl || ''} alt={event.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">{event.title}</h2>
                  <div className="text-md mb-1 opacity-80">{event.date} &middot; {event.location}</div>
                  <div className="text-md mb-2 opacity-80 line-clamp-2">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 