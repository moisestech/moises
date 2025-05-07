'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { Marquee } from '@/components/ui/marquee'

interface Partner {
  name: string
  logo: string
  instagram: string
  color: string
}

const partners: Partner[] = [
  {
    name: 'Miami Design District',
    logo: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641800/DMINTI/mdd-logo_black_f4ydxe.png',
    instagram: 'https://instagram.com/miamidesigndistrict',
    color: '#4D9DE0'
  },
  {
    name: 'Florida International University',
    logo: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641800/DMINTI/fiu-logo_black_f4ydxe.png',
    instagram: 'https://instagram.com/fiuart',
    color: '#41E079'
  },
  {
    name: 'MUD Foundation',
    logo: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641800/DMINTI/mud-logo_black_f4ydxe.png',
    instagram: 'https://instagram.com/mudfoundation',
    color: '#E041B5'
  },
  {
    name: 'DMINTI',
    logo: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/DMINTI-logo_white_ugmdhq.webp',
    instagram: 'https://instagram.com/dminti',
    color: '#E0D241'
  }
]

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Handle logo switching based on theme
  const logoUrl = isDark 
    ? partner.logo.replace('_black', '_white')
    : partner.logo

  return (
    <motion.a
      href={partner.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group mx-8"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-48 h-48 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
          style={{
            background: isDark 
              ? `linear-gradient(135deg, ${partner.color}20, ${partner.color}10)`
              : `linear-gradient(135deg, ${partner.color}30, ${partner.color}20)`
          }}
        />
        <motion.img
          src={logoUrl}
          alt={partner.name}
          className="w-full h-full object-contain p-6 transition-all duration-300 group-hover:brightness-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: partner.color }}
      >
        @{partner.instagram.split('/').pop()}
      </motion.div>
    </motion.a>
  )
}

export function PartnerMarquee() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Create multiple rows with different speeds and directions
  const rows = [
    { speed: 50, reverse: false, pauseOnHover: true },
    { speed: 75, reverse: true, pauseOnHover: true },
    { speed: 100, reverse: false, pauseOnHover: true },
    { speed: 125, reverse: true, pauseOnHover: true }
  ]

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      {rows.map((row, index) => (
        <motion.div
          key={index}
          className="relative"
          style={{
            transform: `perspective(1000px) rotateX(${index * 5}deg)`,
            transformOrigin: 'center center',
            marginTop: index === 0 ? 0 : '-2rem'
          }}
        >
          <Marquee
            baseVelocity={row.speed}
            reverse={row.reverse}
            pauseOnHover={row.pauseOnHover}
          >
            {partners.map((partner, i) => (
              <PartnerCard key={i} partner={partner} />
            ))}
          </Marquee>
        </motion.div>
      ))}
    </div>
  )
} 