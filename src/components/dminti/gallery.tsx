'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { GlassmorphicPanel } from '@/components/glassmorphic-panel'

export function Gallery() {
  const { theme } = useTheme()

  const galleryImages = [
    "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639308/DMINTI/Screenshot_20250507_121546_Instagram_tkjqsv.jpg",
    "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639306/DMINTI/Screenshot_20250507_121527_Instagram_fk9o2r.jpg"
  ]

  return (
    <section className={`relative w-full py-20 ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`} id="gallery">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <GlassmorphicPanel className={`p-8 mb-24 border ${theme === 'dark' ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] via-[#E041B5] to-[#41E079]">
              Gallery
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className={`relative aspect-[4/3] overflow-hidden rounded-xl border ${
                  theme === 'dark' ? 'border-white/10' : 'border-black/10'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  unoptimized
                />
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark' ? 'from-black/40 to-transparent' : 'from-white/40 to-transparent'
                  } opacity-0 hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </motion.div>
        </GlassmorphicPanel>
      </div>
    </section>
  )
} 