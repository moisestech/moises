import Image from 'next/image';

type OpportunityCardImageProps = {
  src: string;
  alt: string;
  local?: boolean;
};

export function OpportunityCardImage({ src, alt, local }: OpportunityCardImageProps) {
  if (local) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top transition duration-500 motion-safe:group-hover/card:scale-[1.03] motion-reduce:group-hover/card:scale-100"
        loading="lazy"
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top transition duration-500 motion-safe:group-hover/card:scale-[1.03] motion-reduce:group-hover/card:scale-100"
      sizes="(max-width: 640px) 100vw, 50vw"
    />
  );
}
