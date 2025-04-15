'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileBannerProps {
  imageUrl: string;
  alt: string;
}

export function ProfileBanner({ imageUrl, alt }: ProfileBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full h-32 md:h-48 overflow-hidden rounded-t-xl"
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
    </motion.div>
  );
} 