import { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Events | Moises Sanabria',
  description: 'Upcoming events, performances, and talks by Moises Sanabria.',
};

const events = [
  {
    title: 'Doom Scrolling Treadmill Performance',
    date: 'April 15, 2024',
    time: '2:00 PM - 8:00 PM',
    location: 'Chroma Film Festival',
    description:
      'A 6-hour durational performance exploring digital distraction and the human need to reconnect with nature. The artist alternates between walking on a treadmill, coding, and watching TikTok, mirroring the repetitive nature of digital engagement in modern life.',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
  },
  {
    title: 'Artist Talk: Neural Capitalism',
    date: 'April 20, 2024',
    time: '7:00 PM - 9:00 PM',
    location: 'Bakehouse Art Complex, Miami',
    description:
      'Join Moises Sanabria for a discussion on the intersection of artificial intelligence, art, and capitalism. The talk will explore themes from his recent works and the future of creative practice in an AI-driven world.',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/neural-wealth_isqxjd.jpg',
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
                <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
                <p className="text-xl mb-1">{event.date}</p>
                <p className="text-xl mb-2">{event.time}</p>
                <p className="text-lg opacity-60 mb-4">{event.location}</p>
                <p className="text-lg">{event.description}</p>
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
