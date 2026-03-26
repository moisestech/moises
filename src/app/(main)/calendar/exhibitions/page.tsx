import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { exhibitions } from '@/constants/exhibitions';
import { artist } from '@/constants/artworks';
import dynamic from 'next/dynamic';

const CollectionRow = dynamic(() => import('@/components/shared/CollectionRow'), { ssr: false });

export const metadata: Metadata = {
  title: 'Exhibitions | Moises Sanabria',
  description:
    'Current and upcoming exhibitions featuring Moises Sanabria\'s work.',
};

export default function Exhibitions() {
  // Filter current exhibitions (on view in 2026)
  const currentExhibitions = exhibitions.filter(exh =>
    exh.title === 'F*ck Art: Nature & Artifice'
  );

  // Past exhibitions to exclude from upcoming (ended in 2025)
  const pastExhibitionTitles = ['Technofetishism: Whip it into Shape', 'Algoritmica Intima: Runtime'];

  // Filter upcoming exhibitions (exclude current and past)
  const upcomingExhibitions = exhibitions.filter(exh => {
    const isCurrent = currentExhibitions.some(current => current.id === exh.id);
    const isPast = pastExhibitionTitles.includes(exh.title);
    return !isCurrent && !isPast && exh.date.includes('2026') &&
           !exh.date.includes('Jan') && !exh.date.includes('Feb');
  }).slice(0, 3);

  // Filter installations and projects from artworks
  const installationsAndProjects = Object.entries(artist.artworks)
    .filter(([, artwork]) => {
      return artwork.tags.some(tag => 
        tag.toLowerCase().includes('installation') || 
        tag.toLowerCase().includes('project')
      ) || artwork.medium?.toLowerCase().includes('installation');
    })
    .slice(0, 6);

  return (
    <main className="pt-52 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-24 px-11">
        <h1 className="text-6xl font-extrabold mb-4">In the galleries</h1>
      </div>

      {/* Collection Rows */}
      <section className="mb-20">
        <CollectionRow 
          title="Early Works"
          yearRange="2010–2014"
          slug="early-works"
          minYear={2010}
          maxYear={2014}
          reverse={true}
          color="bg-yellow-100 dark:bg-yellow-900/20"
        />
        
        <CollectionRow 
          title="Collection"
          yearRange="2015–2019"
          slug="2015-2019"
          minYear={2015}
          maxYear={2019}
          reverse={false}
          color="bg-blue-50 dark:bg-blue-900/20"
        />
        
        <CollectionRow 
          title="Recent Works"
          yearRange="2020–2025"
          slug="recent-works"
          minYear={2020}
          maxYear={2025}
          reverse={true}
          color="bg-green-50 dark:bg-green-900/20"
        />
      </section>

      {/* Current Exhibitions */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 ml-11">Current exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentExhibitions.map((exhibition) => (
            <a
              key={exhibition.id}
              href={exhibition.link || '#'}
              target={exhibition.link?.startsWith('http') ? '_blank' : undefined}
              rel={exhibition.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                <Image
                  src={exhibition.imageUrl}
                  alt={exhibition.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col ml-11">
                <h3 className="text-xl font-bold group-hover:underline">
                  {exhibition.title}
                </h3>
                <p className="text-xl text-black dark:text-black font-bold mb-4">
                  {exhibition.shortName || exhibition.location}
                </p>
                <p className="text-black dark:text-black mb-1 font-bold">{exhibition.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 ml-11">Upcoming exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {upcomingExhibitions.length > 0 ? (
            upcomingExhibitions.map((exhibition) => (
              <div key={exhibition.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                  <Image
                    src={exhibition.imageUrl}
                    alt={exhibition.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col ml-11">
                  <h3 className="text-xl font-bold group-hover:underline">
                    {exhibition.title}
                  </h3>
                  <p className="text-xl text-black dark:text-black font-bold mb-4">
                    {exhibition.shortName || exhibition.location}
                  </p>
                  <p className="text-black dark:text-black mb-1 font-bold">{exhibition.date}</p>
                </div>
              </div>
            ))
          ) : (
            // Fallback placeholder when no upcoming exhibitions
            <Link href="http://calendly.com/moisestech" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <div className="text-lg font-bold text-gray-600 dark:text-gray-400">No upcoming exhibitions</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-11">
                <h3 className="text-xl font-bold group-hover:underline">
                  Curate me in your show
                </h3>
                <p className="text-xl text-black dark:text-black font-bold mb-4">Open for collaborations</p>
                <p className="text-black dark:text-black mb-1 font-bold">Contact for opportunities</p>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Installations and Projects */}
      <section className="mb-20 pb-11">
        <h2 className="text-4xl font-bold mb-8 ml-11">Installations and projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {installationsAndProjects.map(([slug, artwork]) => (
            <Link key={slug} href={`/art/${slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                <Image
                  src={artwork.images[0]?.url || '/placeholder.jpg'}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col ml-11">
                <h3 className="text-xl font-bold group-hover:underline">
                  {artwork.title}
                </h3>
                <p className="text-xl text-black dark:text-black font-bold mb-4">{artwork.year}</p>
                <p className="text-black dark:text-black mb-1 font-bold">{artwork.medium}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
