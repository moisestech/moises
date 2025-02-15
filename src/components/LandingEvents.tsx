'use client';

import type { Event, EventCategory } from '@/constants/events2';

// NEXT
import Image from 'next/image';

// CONSTANTS
import { events, eventCategories } from '@/constants/events2';

// COMPONENTS
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function LandingEvents() {
  return (
    <section className="w-full px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 max-w-screen-xl mx-auto">
        {/* Column 1 - 1/3 width */}
        <div className="md:w-1/3">
          <h2 className="font-['MoMA_Sans'] font-bold text-3xl mb-4">
            Events for everyone
          </h2>
          <h3 className="font-['MoMA_Sans'] text-xl mb-6">
            Join us for films, performances, art making, talks, and more.
          </h3>
          <h4 className="font-bold text-lg hover:underline cursor-pointer">
            View the Calendar →
          </h4>
        </div>

        {/* Column 2 - 2/3 width */}
        <div className="md:w-2/3">
          {/* Events Carousel */}
          <div className="mb-12">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
              {events.map((event: Event, index: number) => (
                <div key={index} className="relative">
                  <div className="aspect-video relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="py-4 flex flex-col gap-2 items-start">
                    <h3 className="font-['MoMA_Sans'] font-bold text-3xl mb-2 text-left">
                      {event.title}
                    </h3>
                    <p className="text-left text-lg">{event.description}</p>
                    <span className="inline-block text-lg mb-2">
                      {event.tag}
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventCategories.map((category, index) => (
              <div key={index} className="relative cursor-pointer group">
                <div className="aspect-square relative mb-2">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-bold text-black">
                  {category.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
