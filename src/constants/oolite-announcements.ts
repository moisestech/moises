export interface OoliteAnnouncement {
  id: string;
  title: string;
  excerpt: string;
  description?: string;
  image: string;
  date: string;
  link?: string;
  linkLabel?: string;
  category: 'exhibition' | 'event' | 'program' | 'update';
}

const OOLITE_BASE_URL = 'https://oolitearts.org';

export const ooliteAnnouncements: OoliteAnnouncement[] = [
  {
    id: 'crossing-the-bridge',
    title: 'Crossing the Bridge Alumni Exhibition',
    excerpt:
      'Curated by Claire Breukel and Lauryn Lawrence, investigates the concept of alumni within an arts institution and the impact of institutional context on an artist\'s career trajectory and legacy.',
    description:
      'Crossing the Bridge, curated by Claire Breukel and Lauryn Lawrence, investigates the concept of alumni within an arts institution and the impact of institutional context on an artist\'s career trajectory and legacy. The exhibition examines how each artist\'s time as an Oolite Arts alumnus shaped future professional and community encounters, while expanding the idea of alumni as a fluid condition rooted in belonging, shared experience, and evolving identity. Featuring artists Edouard Duval-Carrié, Kerry Phillips, Najja Moon, Susan Lee-Chun, and Yanira Collado. Opening reception Wednesday, Feb. 25, 6–9 p.m., on view through May 24.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620756/feb-crossing-the-bridge-oolite-arts-feb5th-to-nay24th_c1xxut.jpg',
    date: 'Feb 25 – May 24, 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'RSVP',
    category: 'exhibition',
  },
  {
    id: 'liene-bosque',
    title: 'Liene Bosquê: Before Miami Design Preservation League III',
    excerpt: 'Windows @ Walgreens exhibition on view Feb. 11–May 3, 2026.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620756/feb-liene-bosque-before-miami-design-preservation-league-iii_sngkrp.webp',
    date: 'Feb 11 – May 3, 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'Learn More',
    category: 'exhibition',
  },
  {
    id: 'amanda-season-keeley',
    title: 'Amanda Season Keeley: Language is liquid',
    excerpt: 'Windows @ Walgreens exhibition on view Feb. 11–May 3, 2026.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620765/feb-amanda-season-keeley-language-is-liquid-on-view-feb-11-may-3-2026-windows-walgreens_vgvi0t.jpg',
    date: 'Feb 11 – May 3, 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'Learn More',
    category: 'exhibition',
  },
  {
    id: 'student-showcase',
    title: 'Oolite Arts Student Showcase',
    excerpt:
      'A vitrine exhibition highlighting exceptional work by Oolite Arts adult students, celebrating artistic growth, experimentation, and creative discovery.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620758/feb-oolite-arts-student-showcase-exhibition-opening-feb-25-2026_xkp5mu.jpg',
    date: 'Feb 25 – March 22, 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'Learn More',
    category: 'exhibition',
  },
  {
    id: 'studio-residents-2026',
    title: 'Welcome to 2026 Studio Residents',
    excerpt:
      'We\'re excited to support this new cohort of artists with time, space, and resources at our Miami Beach studios as they experiment, connect, and develop bold new work within a vibrant creative community.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620756/feb-welcome-2026-resideents-oolite-arts_qixk3b.jpg',
    date: 'January 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'See More',
    category: 'program',
  },
  {
    id: 'ellies-2026',
    title: 'The Ellies—Oolite Arts Awards 2026',
    excerpt:
      'On Wednesday, April 22, 2026, Oolite Arts proudly presents The Ellies—Celebrating the Foundation for What\'s Next. Honoring Mario Cader-Frech and Robert S. Wennett.',
    description:
      'On Wednesday, April 22, 2026, Oolite Arts proudly presents The Ellies—Oolite Arts Awards: Celebrating the Foundation for What\'s Next. This year, we are honored to recognize Mario Cader-Frech and Robert S. Wennett for their visionary leadership and enduring contributions to arts and culture. The 2026 Ellies Awards Artist Host Committee includes Luisa Basnuevo, Ariel Baron Robbins, Leo Castañeda, Jen Clay, Yanira Collado, Mark Fleuridor, Gonzalo Fuenmayor, Pepe Mar, Charo Oquet, Marielle Plaisir, Anastasia Samoylova, and Kristen Thiele. Artist Host Committee members will also be featured in the inaugural Oolite Arts Auction, launching in March 2026.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1768968673/january-ellies-2026_xtllmg.gif',
    date: 'April 22, 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'Get Tickets',
    category: 'event',
  },
  {
    id: 'youth-residency',
    title: 'Inaugural Youth Residency',
    excerpt:
      'We are excited to welcome five emerging young artists to the Oolite Arts community as they begin the inaugural Youth Residency this January.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620757/feb-first-ever-youth-artist-residents-at-oolite-arts_jyydm1.jpg',
    date: 'January 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'See More',
    category: 'program',
  },
  {
    id: 'alumni-raffle',
    title: 'Alumni, Register to Win $1K',
    excerpt:
      'Are you an Oolite Alumni? Fill out the form for a chance to win $1,000 for art supplies. Next drawing February 25, 2026 during the Crossing the Bridge exhibition opening.',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620756/feb-alumni-news_hmvtub.jpg',
    date: 'Ongoing',
    link: OOLITE_BASE_URL,
    linkLabel: 'Register',
    category: 'event',
  },
  {
    id: 'future-campus',
    title: 'Progress Continues on Our Future Campus',
    excerpt:
      'We\'ve reached another key milestone: the third set of revised construction documents is in, and our design team is working closely with consultants to finalize updates for permitting. Groundbreaking planned for 2026.',
    description:
      'We\'ve reached another key milestone: the third set of revised construction documents is in, and our design team is working closely with consultants to finalize updates for permitting. As coordination wraps up, we\'re preparing to resubmit for permits and begin the contractor bidding process. Thank you for helping us bring this vision to life! Each step brings us closer to opening our doors in Little River. We are planning a groundbreaking in 2026!',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620759/feb-a-world-class-campus-1_p28ygx.jpg',
    date: 'February 2026',
    link: OOLITE_BASE_URL,
    linkLabel: 'See More',
    category: 'update',
  },
  {
    id: 'untitled-art-podcast',
    title: 'Untitled Art Podcast: Museums in Transformation',
    excerpt:
      'Discussion exploring how innovation and adaptability are reshaping the institutional landscape. Featuring John Abodeely, Kate Fleming, Amy Galpin, moderated by Lorie Mertes.',
    description:
      'As museums and cultural organizations evolve to meet the demands of a changing world, this discussion explores how innovation and adaptability are reshaping the institutional landscape. Panelists consider how art spaces are engaging new audiences, leveraging technology, and redefining their civic roles to remain relevant and impactful. This conversation features John Abodeely (CEO, Oolite Arts), Kate Fleming (Founder & Executive Director, Bridge Initiative), Amy Galpin (Executive Director & Chief Curator, Museum of Art and Design at Miami Dade College), moderated by Lorie Mertes (Executive Director, Locust Projects).',
    image:
      'https://res.cloudinary.com/dkod1at3i/image/upload/v1771620756/feb-untitled-art-podcast_mqk5h0.jpg',
    date: 'December 31, 2025',
    link: OOLITE_BASE_URL,
    linkLabel: 'Learn More',
    category: 'event',
  },
];
