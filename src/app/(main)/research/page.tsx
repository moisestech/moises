import { research } from '@/constants/research';
import Link from 'next/link';
import Image from 'next/image';

export default function ResearchIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          The Research Lab explores the intersection of technology, spirituality, and environmental impact through artistic experimentation and community engagement. My initiatives focus on transforming e-waste into interactive sculptures, developing new frameworks for digital art, and fostering dialogue about technological acceleration in contemporary culture. Through workshops, exhibitions, and collaborative projects, I aim to build a more robust and critical tech-art community in the South Florida region and beyond.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(research).map(([slug, item]) => (
          <Link
            key={slug}
            href={slug === 'value_of_the_image' ? '/research/the-value-and-future-of-the-image' : `/research/${slug}`}
            className="block group border rounded-xl overflow-hidden shadow-lg bg-white dark:bg-black/40 hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src={item.images && item.images.length > 0 ? item.images[0].url : "/images/placeholder.png"}
                alt={item.images && item.images.length > 0 ? item.images[0].caption || item.title : item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
