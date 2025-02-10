import { research } from '@/constants/research';
import Link from 'next/link';
import Image from 'next/image';

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="font-['MoMA_Sans'] text-4xl md:text-5xl font-bold mb-8">Research</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(research).map(([slug, item]) => (
          <Link href={`/research/${slug}`} key={slug} className="group">
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src={item.images[0].url}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:underline">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{item.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
