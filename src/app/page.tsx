import ArtworkGrid from '@/components/ArtworkGrid';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

export default function Home() {
    return (
        <PageLayout>
            <main className="flex min-h-screen flex-col items-center">
                {/* Hero Image */}
                <div className="w-full h-[70vh] relative">
                    <Image
                        src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg"
                        alt="Hero Image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Welcome Text */}
                <div className="w-full py-32 px-8">
                    <div className="max-w-7xl mx-auto flex justify-between items-start">
                        <div>
                            <h1 className="text-7xl font-bold mb-6">
                                Welcome
                            </h1>
                            <p className="text-2xl">
                                Explore art and ideas with Moises Sanabria.
                            </p>
                        </div>
                        <div className="flex flex-col items-end space-y-4">
                            <p className="text-xl">
                                Open 10:30 a.m. - 5:30 p.m. today
                            </p>
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors">
                                Plan your visit
                            </button>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <div className="w-full h-0.5 bg-current opacity-20 mt-12"></div>
                    </div>
                </div>

                {/* Artwork Grid */}
                <ArtworkGrid />
            </main>
        </PageLayout>
    );
}
