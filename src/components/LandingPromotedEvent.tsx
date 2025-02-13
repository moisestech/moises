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
              href="/events"
              className="inline-block text-lg font-bold text-black hover:text-black/80 transition-colors"
            >
              Learn More
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
