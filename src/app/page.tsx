import Image from 'next/image';

export default async function Home() {
  const images = [
    {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      header: 'Digital Divinities at Bakehouse Art Complex',
      alt: 'Moises Sanabria & Fabiola Larios - Digitial Divinities at Bakehouse Art Complex, 2024',
    },
    {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
      header: 'Baby AGI at BreadBytes',
      alt: 'Moises Sanabria - Baby AGI at BreadBytes, Bakehouse Art Complex, 2023',
    },
    {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717962487/art/moisestech-website/vr_hug_moisesdsanabria_tomgalle_2017_csfeef.jpg',
      header: 'Meme Art at Data Dating',
      alt: 'Moises Sanabria & Tom Galle - VR Hug, 2017',
    },
  ];

  return (
    <div className="flex flex-col mt-52 w-full">
      {images.map((image, index) => {
        const colors = ['bg-lime-400', 'bg-blue-400', 'bg-red-400'];
        const color = colors[index % colors.length];
        const isEven = index % 2 === 0;
        return (
          <article
            key={index}
            className="flex h-[500px] overflow-y-hidden w-full"
          >
            {isEven && (
              <div className={`${color} w-96`}>
                <h2 className="text-4xl m-20 mr-40 font-bold text-black">
                  {image.header}
                </h2>
              </div>
            )}
            <div className="w-full">
              <Image
                className={'w-full h-auto'}
                width={800}
                height={800}
                src={image.src}
                alt={image.alt}
              />
            </div>
            {!isEven && (
              <div className={`${color} w-96`}>
                <h2 className="text-4xl m-20 mr-40 font-bold text-black">
                  {image.header}
                </h2>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
