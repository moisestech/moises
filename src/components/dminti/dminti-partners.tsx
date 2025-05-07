'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { GlassmorphicPanel } from '@/components/glassmorphic-panel'
import { useState } from 'react'

export function DMINTIPartners() {
  const { theme } = useTheme()
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})

  const partners = [
    {
      name: "ICA Miami",
      logo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647551/DMINTI/ica-miami-logo-black_wttraz.png",
      darkLogo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647551/DMINTI/ica-miami-logo-white_wttraz.png",
      link: "https://www.icamiami.org"
    },
    {
      name: "Florida International University",
      logo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647553/DMINTI/fiu-logo-black_zv9eq2.jpg",
      darkLogo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647553/DMINTI/fiu-logo-white_zv9eq2.jpg",
      link: "https://www.fiu.edu"
    },
    {
      name: "MUD Foundation",
      logo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647556/DMINTI/mud-fondation-logo-black_bzl7tv.png",
      darkLogo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647556/DMINTI/mud-fondation-logo-white_bzl7tv.png",
      link: "https://www.mudfoundation.org"
    },
    {
      name: "Self Portrait Project",
      logo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647796/DMINTI/self-portrait-project-logo-black_yrmhni.webp",
      darkLogo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647796/DMINTI/self-portrait-project-logo-white_yrmhni.webp",
      link: "https://selfportraitproject.com/"
    },
    {
      name: "Miami Design District",
      logo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647806/DMINTI/miami-design-district-logo-black_gvv3wu.svg",
      darkLogo: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746647806/DMINTI/miami-design-district-logo-white_gvv3wu.svg",
      link: "https://www.miamidesigndistrict.net"
    }
  ]

  const handleImageError = (partnerName: string) => {
    console.error(`Failed to load image for ${partnerName}`)
    setImageErrors(prev => ({ ...prev, [partnerName]: true }))
  }

  return (
    <section className={`relative w-full py-20 ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`} id="partners">
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
              Our Partners
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Collaborating to bring digital art to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="relative group w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative w-full h-[160px] rounded-xl overflow-hidden border ${
                  theme === 'dark' ? 'border-white/20' : 'border-black/20'
                } transition-all duration-300 group-hover:border-opacity-50 group-hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'group-hover:shadow-[#4D9DE0]/20' 
                    : 'group-hover:shadow-[#4D9DE0]/30'
                }`}>
                  {!imageErrors[partner.name] ? (
                    <Image
                      src={theme === 'dark' ? partner.darkLogo : partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-4 transition-all duration-300 group-hover:scale-110"
                      onError={() => handleImageError(partner.name)}
                      priority={index < 3}
                      unoptimized
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>
                      {partner.name}
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark' 
                      ? 'from-black/40 via-black/20 to-transparent opacity-50' 
                      : 'from-white/40 via-white/20 to-transparent opacity-50'
                  } transition-opacity duration-300`} />
                </div>
                <div className={`mt-4 text-center ${
                  theme === 'dark' ? 'text-white/90' : 'text-black/90'
                }`}>
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassmorphicPanel>
      </div>
    </section>
  )
} 