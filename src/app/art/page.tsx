import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Art and Artist | Moises Sanabria',
  description:
    'Explore the work and biography of Moises Sanabria, an interdisciplinary artist working at the intersection of technology and contemporary society.',
};

const socialLinks = [
  {
    icon: FaTwitter,
    url: 'https://twitter.com/moisesdsanabria',
    label: '@moisesdsanabria',
  },
  {
    icon: FaInstagram,
    url: 'https://instagram.com/moisesdsanabria',
    label: '@moisesdsanabria',
  },
  {
    icon: MdEmail,
    url: 'mailto:m@moises.tech',
    label: 'm@moises.tech',
  },
];

export default function ArtAndArtist() {
  return (
    <PageLayout>
      <main className="pt-40 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-8">Moises Sanabria</h1>
            <div className="flex flex-col gap-4 mb-8">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-6 h-6" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-4">Biography</h2>
              <p className="mb-4">
                {`Venezuelan-born, Miami-based Moises Sanabria is an interdisciplinary artist whose work extends dialectics of machine philosophy alongside trends in memetics and branding through the context of networked social-media life. Moises' work is philosophical and political, joining academic aesthetics with internet meme cultures. His practice is deeply entangled with digital newness, using live-streaming, video, new media, machine learning, and installation to further connect science advancement with art.`}
              </p>
              <p className="mb-4">
                {`Moises co-founded the new artificial intelligence media channel AI24 Live. Previously, he was an active member and co-founder of the digital art collective ART404 (Artnotfound) from 2011. Moises attended the School of Poetic Computation and the Cooper Union in New York. He has exhibited at Transmediale 2k+12, Hause Der Kulturen Der Welt (Berlin), Institute of Contemporary Art Miami, Bikini Wax Gallery (Mexico City), Bakehouse Art Complex, Oolite Arts (Miami), and has participated in international group exhibitions.`}
              </p>
            </div>
          </div>
          <div>
            <div className="relative aspect-[3/4] mb-8">
              <Image
                src="/portrait.jpg"
                alt="Portrait of Moises Sanabria"
                fill
                className="object-cover"
              />
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-4">Artist Statement</h2>
              <p className="mb-4">
                {`Moises Sanabria's work delves into the intersection of technology and contemporary society, reflecting a path toward the fourth industrial revolution. With influences from Sol Lewitt, Nam June Paik, Barbara Kruger, and Maurizio Cattelan, Sanabria explores the network effects of automation and artificial intelligence on visual culture through poetic computation. His work encompasses manual techniques, conceptual art, and programming infrastructure, utilizing code and artistic gestures to create a unique aesthetic experience.`}
              </p>
              <p>
                {`At the human and emotional level, Sanabria's work emphasizes the creative kernel that is uniquely human, creating artworks that speculate on the value of data and the future of law amid technological change. In contrast, he employs innovative acceleration at a macro level, using the newest technologies to scaffold new forms of aesthetic governance over AI tools and social networks. Sanabria's pursuit of a visual language and aesthetic experience enabled by technology and imagination speaks to the critical importance of steering society's thinking amid incoming changes in techno-capitalism and social tendencies.`}
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
