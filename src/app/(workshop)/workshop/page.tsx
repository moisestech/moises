import dynamic from "next/dynamic";
import { Metadata } from "next";

const WorkshopClient = dynamic(() => import("@/components/page/WorkshopClient"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Workshops | Moises Sanabria & Fabiola Larios",
  description: "Explore our workshops on digital presence, AI art, tech for non-profits, and more. Join us to learn and grow in the digital age.",
  openGraph: {
    title: "Workshops | Moises Sanabria & Fabiola Larios",
    description: "Explore our workshops on digital presence, AI art, tech for non-profits, and more. Join us to learn and grow in the digital age.",
    url: "https://moises.tech/workshop",
    siteName: "Moises Sanabria & Fabiola Larios",
    images: [
      {
        url: "/images/website-building-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Moises Sanabria & Fabiola Larios Workshops",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshops | Moises Sanabria & Fabiola Larios",
    description: "Explore our workshops on digital presence, AI art, tech for non-profits, and more. Join us to learn and grow in the digital age.",
    images: ["/images/website-building-hero-image.png"],
    creator: "@moisessanabria",
  },
};

export default function WorkshopPage() {
  return <WorkshopClient />;
}
