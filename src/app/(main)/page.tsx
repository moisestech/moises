import Image from 'next/image';
import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import SpecialThanks from '@/components/SpecialThanks';
import LandingExhibitions from '@/components/LandingExhibitions';
import { LandingPromotedEvent, Footer } from '@/features/landing';
import LandingCollection from '@/components/LandingCollection';
import LandingEvents from '@/components/LandingEvents';
import { Visit360Dialog } from '@/components/ui/Visit360Dialog';

export const metadata: Metadata = {
  title: 'Moises Sanabria — New Media Sculpture',
  description: 'Moises Sanabria is a Miami Venezuelan interdisciplinary artist at Bakehouse Art Complex materializing the internet.',
  // description: 'Moises Sanabria is a Miami Venezuelan interdisciplinary artist at Bakehouse Art Complex exploring speculative futures, brainrot theory, and materializing the internet.',
  // Full description: Moises Sanabria is a Venezuelan, Miami interdisciplinary artist at Bakehouse Art Complex creating new media sculptures reflecting on machine philosophy, memetic culture, doomscrolling and brainrot theory, materializing the internet, and networked social-media life.
  keywords: [
    'ai art',
    'generative ai art', 
    'new media art',
    'virtual reality art',
    'algorithmic art',
    'interactive installation art',
    'machine learning art',
    'nft conceptual art',
    'post‑internet sculpture',
    'privacy art',
    'accelerationism art',
    'consumerism art',
    'cybernetic aesthetics',
    'technofetishism',
    'attention economy art',
    'digital capitalism',
    'data capitalism',
    'capitalism critique art',
    'doom scrolling'
  ].join(', '),
  openGraph: {
    title: 'Moises Sanabria — New Media Sculpture',
    description: 'Miami Venezuelan interdisciplinary artist at Bakehouse Art Complex exploring speculative futures, brainrot theory, and materializing the internet.',
    type: 'website',
    url: 'https://moises.tech',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
        width: 1200,
        height: 630,
        alt: 'Moises Sanabria - Digital Divinities installation at Bakehouse Art Complex Open Studios Spring 2024'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moises Sanabria — New Media Sculpture',
    description: 'Moises Sanabria is a Venezuelan, Miami interdisciplinary artist at Bakehouse Art Complex creating new media sculptures reflecting on machine philosophy, memetic culture, doomscrolling and brainrot theory, materializing the internet, and networked social-media life.',
    images: ['https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Home() {
  return (
    <PageLayout>
      <main className="flex flex-col mt-40 w-full max-w-screen-xl mx-auto">
        {/* Hero Image */}
        <div className="relative overflow-hidden">
          <div className="w-full md:h-[550px] relative">
            <Image
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg"
              alt="Moises Sanabria - Digital Divinities installation at Bakehouse Art Complex Open Studios Spring 2024"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="display-none sr-only">Moises Sanabria</h1>

        {/* Welcome Text */}
        <div className="w-full py-6 sm:py-16 md:py-20 lg:py-6 px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="text-center md:text-left">
              <p className="font-['MoMA_Sans'] text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 md:mb4">
                Welcome
              </p>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">
                Explore art and ideas with Moises Sanabria.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-center md:text-right">
                The studio is open 10:30 a.m. - 5:30 p.m. today.
              </p>
              <Visit360Dialog
                trigger={
                  <button className="w-full md:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white font-bold transition-colors text-base sm:text-lg">
                    Virtual Studio Tour
                  </button>
                }
              />
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

        {/* Press Coverage */}
        <section className="w-full px-6 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Recent Press</h2>
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2">CONTINUUM Exhibition Coverage</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Featured in eP Investiga's coverage of the CONTINUUM exhibition at MUNAG, Antigua Guatemala
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Featured Works:</strong> "The Price of Existence" & "Smart Shoppers"
                </div>
                <a 
                  href="https://epinvestiga.com/dominical/continuum-una-mirada-a-los-avances-en-la-expresion-artistica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  Read Article →
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
                Organized by Fundación Paiz para la Educación y la Cultura
              </div>
            </div>
          </div>
        </section>

        {/* Landing Events */}
        <LandingEvents />

        {/* Artwork Grid */}
        {/* <div className="w-full px-2 sm:px-4 md:px-8">
          <ArtworkGrid />
        </div> */}

        {/* Special Thanks */}
        <SpecialThanks />
      </main>
    </PageLayout>
  );
}
