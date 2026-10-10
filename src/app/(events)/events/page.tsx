import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Events | Moises Sanabria',
  description: 'Upcoming events, performances, and talks by Moises Sanabria.',
};

const events = [
  {
    title: 'Doom Scrolling Treadmill',
    date: 'August 17–18, 2024',
    time: '24-hour durational performance',
    location: 'Chroma Art Film Festival, Superblue, Miami',
    description:
      'Presented with Touch Grass Station. Sanabria walks, codes, and watches TikTok on a treadmill, and steps onto the grass station. Photographs by Brooke D’Avanzo.',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/f_auto,q_auto,w_1600/v1791558664/art/moisestech-website/artworks/2024-doomscrolling-treadmill-touch-grass-station/moises-sanabria-doom-scrolling-treadmill-11_v04wjo.jpg',
    href: '/art/doomscrolling_treadmill',
  },
];

export default function Events() {
  return (
    <PageLayout>
      <main className="pt-40 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Events</h1>
        <div className="grid grid-cols-1 gap-12">
          {events.map((event, index) => (
            <article
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="relative aspect-video">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  <Link href={event.href} className="underline underline-offset-4">
                    {event.title}
                  </Link>
                </h2>
                <p className="text-xl mb-1">{event.date}</p>
                <p className="text-xl mb-2">{event.time}</p>
                <p className="text-lg opacity-60 mb-4">{event.location}</p>
                <p className="text-lg">{event.description}</p>
                <Link
                  href={event.href}
                  className="mt-6 inline-flex px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  View the work
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
