import ArtworkGrid from '@/components/ArtworkGrid';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import SpecialThanks from '@/components/SpecialThanks';
import LandingExhibitions from '@/components/LandingExhibitions';
import LandingPromotedEvent from '@/components/LandingPromotedEvent';
import LandingCollection from '@/components/LandingCollection';
import LandingEvents from '@/components/LandingEvents';

export default function Home() {
  return (
    <PageLayout>
      <main className="flex flex-col mt-40 w-full max-w-screen-xl mx-auto">
        {/* Hero Image */}
        <div className="relative overflow-hidden">
          <div className="w-full md:h-[550px] relative">
            <Image
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="w-full py-6 sm:py-16 md:py-20 lg:py-6 px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="text-center md:text-left">
              <h1 className="font-['MoMA_Sans'] text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 md:mb4">
                Welcome
              </h1>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">
                Explore art and ideas with Moises Sanabria.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-center md:text-right">
                The studio is open 10:30 a.m. - 5:30 p.m. today.
              </p>
              <button className="w-full md:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white font-bold transition-colors text-base sm:text-lg">
                Plan your visit
              </button>
            </div>
          </div>
        </div>

        <div className="w-full px-6 pb-16">
          <div className="h-1 bg-black dark:bg-white w-full max-w-7xl mx-auto"></div>
        </div>

        {/* Landing Exhibitions */}
        <LandingExhibitions />

        {/* Landing Promoted Event */}
        <LandingPromotedEvent />

        {/* Landing Collection */}
        <LandingCollection />

        {/* Landing Events */}
        <LandingEvents />

        {/* Artwork Grid */}
        <div className="w-full px-2 sm:px-4 md:px-8">
          <ArtworkGrid />
        </div>

        {/* Special Thanks */}
        <SpecialThanks />
      </main>
    </PageLayout>
  );
}
