import { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
    title: 'Exhibitions | Moises Sanabria',
    description: 'Current and upcoming exhibitions featuring Moises Sanabria\'s work.',
};

const exhibitions = [
    {
        title: "CONTINUUM",
        location: "MUNAG, Antigua Guatemala",
        date: "Mar 2024 - Present",
        description: "A solo exhibition featuring 'Price of Existence' and 'Smart Shoppers', exploring the intersection of value, technology, and human consciousness in the digital age.",
        image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831888/art/moisestech-website/moises-sanabria-price-of-existence_u899xj.jpg"
    },
    {
        title: "Digital Divinities",
        location: "Bakehouse Art Complex, Miami",
        date: "Feb 2024 - Present",
        description: "An exploration of divinity in the digital age through AI-generated sculptures and installations.",
        image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg"
    }
];

export default function Exhibitions() {
    return (
        <PageLayout>
            <main className="pt-40 px-4 max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-8">Exhibitions</h1>
                <div className="grid grid-cols-1 gap-12">
                    {exhibitions.map((exhibition, index) => (
                        <article key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative aspect-video">
                                <Image
                                    src={exhibition.image}
                                    alt={exhibition.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">{exhibition.title}</h2>
                                <p className="text-xl mb-2">{exhibition.location}</p>
                                <p className="text-lg opacity-60 mb-4">{exhibition.date}</p>
                                <p className="text-lg">{exhibition.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </PageLayout>
    );
} 