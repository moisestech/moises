'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPromotedEvent() {
  return (
    <section className="w-full bg-cyan-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center h-auto md:h-[315px]">
          {/* Text Content */}
          <div className="space-y-6 py-16 md:py-0">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['MoMA_Sans'] font-bold text-black">
                Bakehouse:
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-['MoMA_Sans'] font-bold text-black">
                Open Studios
              </h3>
            </div>
            <p className="text-md md:text-lg text-black/80 max-w-lg">
              Join us for a 1 day of engaging activities that explore creativity
              and technology in the world.
            </p>
            <Link
              href="https://www.bacfl.org/events/open-studios-march-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg font-bold text-black hover:text-black/80 transition-colors"
            >
              Learn More
              <svg
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-[250px] md:h-[315px] w-full">
            <Image
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126831/art/moisestech-website/events/event-bakehouse-open-studio-drawing_x4hlcl.png"
              alt="Bakehouse Open Studios Event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
