import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { exhibitions, getExhibitionBySlug } from '@/constants/exhibitions';

const SITE = 'https://www.moises.tech';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return exhibitions
    .filter((exhibition) => exhibition.slug)
    .map((exhibition) => ({ slug: exhibition.slug as string }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const exhibition = getExhibitionBySlug(params.slug);
  if (!exhibition) return {};

  const title = `${exhibition.title} | Moises Sanabria`;
  const description = exhibition.description || '';
  const url = `${SITE}/calendar/exhibitions/${exhibition.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'Moises Sanabria',
      images: exhibition.imageUrl
        ? [{ url: exhibition.imageUrl, alt: exhibition.imageAlt || exhibition.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: exhibition.imageUrl ? [exhibition.imageUrl] : undefined,
    },
  };
}

export default function ExhibitionContextPage({ params }: PageProps) {
  const exhibition = getExhibitionBySlug(params.slug);
  if (!exhibition) notFound();

  return (
    <main className="min-h-screen px-4 pb-24 pt-36 md:px-8 md:pt-44">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-300">
          {exhibition.activityType || 'Exhibition'}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">{exhibition.title}</h1>
        <p className="mt-4 text-xl font-semibold">{exhibition.date}</p>
        {exhibition.location ? <p className="mt-1 text-lg">{exhibition.location}</p> : null}
        {exhibition.curator ? <p className="mt-2 text-base">Curator: {exhibition.curator}</p> : null}
        {exhibition.featured_work ? (
          <p className="mt-2 text-base">Contribution: {exhibition.featured_work}</p>
        ) : null}

        {exhibition.imageUrl ? (
          <figure className="mt-8">
            <Image
              src={exhibition.imageUrl}
              alt={exhibition.imageAlt || exhibition.title}
              width={1200}
              height={800}
              className="h-auto w-full"
              priority
            />
            {exhibition.imageAlt ? (
              <figcaption className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {exhibition.imageAlt}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        {exhibition.description ? (
          <p className="mt-8 text-lg leading-relaxed">{exhibition.description}</p>
        ) : null}

        <div className="mt-8 flex flex-col gap-3">
          {exhibition.related?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-blue-700 underline-offset-2 hover:underline dark:text-blue-400"
              {...(item.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {item.label}
            </Link>
          ))}
          {exhibition.link ? (
            <a
              href={exhibition.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 underline-offset-2 hover:underline dark:text-blue-400"
            >
              {exhibition.externalLinkLabel || 'Official exhibition page'}
            </a>
          ) : null}
          <Link
            href="/grant/mia-2024-2025"
            className="font-medium text-blue-700 underline-offset-2 hover:underline dark:text-blue-400"
          >
            Miami Individual Artists Grant FY2024–2025 activity
          </Link>
        </div>
      </article>
    </main>
  );
}
