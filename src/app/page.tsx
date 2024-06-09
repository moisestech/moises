import Image from 'next/image';

export default async function Home() {
  const images = [
    {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      alt: 'Moises Sanabria & Fabiola Larios - Digitial Divinities at Bakehouse Art Complex, 2024',
    },
    {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
      alt: 'Moises Sanabria - Baby AGI at BreadBytes, Bakehouse Art Complex, 2023',
    },
    {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717962487/art/moisestech-website/vr_hug_moisesdsanabria_tomgalle_2017_csfeef.jpg',
      alt: 'Moises Sanabria & Tom Galle - VR Hug, 2017',
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl">Moises Sanabria</h1>
      <p className="w-1/2">
        is an interdisciplinary artist exploring machine philosophy, memetics,
        and branding in social media life.
      </p>
      {images.map((image, index) => (
        <Image
          key={index}
          className={'w-full'}
          width={800}
          height={800}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
