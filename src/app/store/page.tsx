import { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
    title: 'Store | Moises Sanabria',
    description: 'Shop limited edition prints, merchandise, and digital artworks by Moises Sanabria.',
};

const products = [
    {
        title: "VR Hug - Limited Edition Print",
        price: "$500",
        description: "Archival pigment print on museum-quality paper. Edition of 25, signed and numbered.",
        dimensions: "80 x 120 cm",
        image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1717962487/art/moisestech-website/vr_hug_moisesdsanabria_tomgalle_2017_csfeef.jpg"
    },
    {
        title: "Digital Divinities - NFT Collection",
        price: "2.5 ETH",
        description: "A collection of unique AI-generated digital sculptures exploring divinity in the digital age.",
        image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg"
    }
];

export default function Store() {
    return (
        <PageLayout>
            <main className="pt-40 px-4 max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-8">Store</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {products.map((product, index) => (
                        <article key={index} className="flex flex-col">
                            <div className="relative aspect-square mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                            <p className="text-xl mb-2">{product.price}</p>
                            <p className="text-lg mb-4">{product.description}</p>
                            {product.dimensions && (
                                <p className="text-lg mb-4">Dimensions: {product.dimensions}</p>
                            )}
                            <button className="mt-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                Add to Cart
                            </button>
                        </article>
                    ))}
                </div>
            </main>
        </PageLayout>
    );
} 