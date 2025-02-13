import Image from 'next/image';
import { events, eventCategories } from '@/constants/events2';
import type { Event, EventCategory } from '@/constants/events2';
// Import your carousel library of choice, for example:
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function LandingEvents() {
  return (
    <section className="w-full px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 max-w-screen-xl mx-auto">
        {/* Column 1 - 1/3 width */}
        <div className="md:w-1/3">
          <h2 className="font-bold text-3xl mb-4">Events for everyone</h2>
          <h3 className="text-xl mb-6">
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
                  <div className="p-4">
                    <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm mb-2">
                      {event.tag}
                    </span>
                    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventCategories.map((category: EventCategory, index: number) => (
              <div key={index} className="relative cursor-pointer group">
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all">
                    <div className="absolute bottom-4 left-4 text-white font-bold">
                      {category.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
