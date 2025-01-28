import Image from 'next/image';
import Link from 'next/link';
import { artist } from '@/constants/artworks';

export default function ArtworkGrid() {
    // Get artwork entries with their slugs
    const artworkEntries = Object.entries(artist.artworks).sort(([, a], [, b]) => {
        if (a.on_view && !b.on_view) return -1;
        if (!a.on_view && b.on_view) return 1;
        return 0;
    });

    const colors = ['bg-lime-400', 'bg-blue-400', 'bg-red-400', 'bg-purple-400', 'bg-orange-400', 'bg-green-400'];

    return (
        <div className="flex flex-col w-full">
            {artworkEntries.map(([slug, artwork], index) => {
                const color = colors[index % colors.length];
                const isEven = index % 2 === 0;

                return (
                    <Link
                        href={`/art/${slug}`}
                        key={slug}
                        className="group cursor-pointer"
                    >
                        <article className="flex h-[500px] overflow-hidden w-full">
                            {isEven && (
                                <div className={`${color} w-1/3 pl-16 pr-8`}>
                                    <h2 className="text-5xl mt-20 font-bold text-black dark:text-white">
                                        {artwork.title}
                                    </h2>
                                    {artwork.location && (
                                        <p className="text-2xl mt-4 text-black/80 dark:text-white/80">
                                            {artwork.location}
                                        </p>
                                    )}
                                    <p className="text-xl mt-2 text-black/60 dark:text-white/60">
                                        {artwork.year}
                                    </p>
                                </div>
                            )}
                            <div className="w-full">
                                <Image
                                    className="w-full h-full object-cover"
                                    width={1920}
                                    height={1080}
                                    src={artwork.images[0].url}
                                    alt={artwork.images[0].caption || artwork.title}
                                    priority={index === 0}
                                />
                            </div>
                            {!isEven && (
                                <div className={`${color} w-1/3 pr-16 pl-8`}>
                                    <h2 className="text-5xl mt-20 font-bold text-black dark:text-white">
                                        {artwork.title}
                                    </h2>
                                    {artwork.location && (
                                        <p className="text-2xl mt-4 text-black/80 dark:text-white/80">
                                            {artwork.location}
                                        </p>
                                    )}
                                    <p className="text-xl mt-2 text-black/60 dark:text-white/60">
                                        {artwork.year}
                                    </p>
                                </div>
                            )}
                        </article>
                    </Link>
                );
            })}
        </div>
    );
} 