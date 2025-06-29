"use client";
import Image from "next/image";

interface Exhibition {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  location?: string;
  description?: string;
}

export default function ExhibitionGrid({ exhibitions }: { exhibitions: Exhibition[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {exhibitions.map(exh => (
        <div key={exh.id} className="flex flex-col">
          <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            <Image src={exh.imageUrl} alt={exh.title} fill className="object-cover" />
          </div>
          <div className="text-xl font-bold leading-tight mb-1">{exh.title}</div>
          <div className="text-md text-gray-600 dark:text-gray-300 mb-1">{exh.date}</div>
          <div className="text-md text-gray-600 dark:text-gray-300 mb-1">{exh.location}</div>
        </div>
      ))}
    </div>
  );
} 