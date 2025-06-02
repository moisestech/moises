import AttendantEngagementsClientPage from './AttendantEngagementsClientPage'

export const metadata = {
  title: 'DMINTI | Attendant Engagements No. 1',
  description: 'A culminating one-night-only digital art exhibition celebrating the creative impact of The Kaleidoscope (...Bigger) House by Laurie Simmons and Peter M. Wheelwright.',
  openGraph: {
    title: 'DMINTI | Attendant Engagements No. 1',
    description: 'A culminating one-night-only digital art exhibition celebrating the creative impact of The Kaleidoscope (...Bigger) House by Laurie Simmons and Peter M. Wheelwright.',
    url: 'https://dminti.art/events/dminti/attendant-engagements',
    siteName: 'DMINTI',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png',
        width: 1200,
        height: 630,
        alt: 'DMINTI Attendant Engagements No. 1',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMINTI | Attendant Engagements No. 1',
    description: 'A culminating one-night-only digital art exhibition celebrating the creative impact of The Kaleidoscope (...Bigger) House by Laurie Simmons and Peter M. Wheelwright.',
    images: ['https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png'],
    creator: '@dminti',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function AttendantEngagementsPage() {
  return <AttendantEngagementsClientPage />;
} 