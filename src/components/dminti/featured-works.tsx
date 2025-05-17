'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { GlassmorphicPanel } from "@/components/glassmorphic-panel"
import { ArtistCard } from "@/components/artist-card"
import { ExternalLink, Instagram } from 'lucide-react'

interface Artist {
  id: number
  name: string
  handle: string
  title: string
  description: string
  visual: string
  date: string
  color: string
  image?: string
  nftLink?: string
  price?: string
  instagram?: string
}

export function FeaturedWorks() {
  const { theme } = useTheme()
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const artists: Artist[] = [
    {
      id: 1,
      name: "Frank Lepkowski",
      handle: "@frank.gl",
      title: "838",
      description: "Frank Lepkowski examines the physicality of a home, notions of idealised homes, as well as thinking about what it means to create a space to live in with those you love. There are no people in his work, only walls and furniture, and yet the presence of its residents is still felt.",
      visual: "Hover shows walls/furniture fading in.",
      date: "Dec 3, 2024",
      color: "#4D9DE0",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645734/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png",
      nftLink: "https://objkt.com/tokens/KT1FsU7k7cuAPeY8zjQmw7u2kmugS79qdtV8/1",
      instagram: "https://instagram.com/frank.gl"
    },
    {
      id: 2,
      name: "Ana Maria Caballero",
      handle: "@poemequalsart",
      title: "MONUMENT",
      description: "Both Ana María Caballero and SamJ tackle how home and identity are shaped through relationships with others. In her piece MONUMENT, a family is fighting before smiling to take a photograph in front of a monument. The poem is accompanied by images of historical family portraits and images of contemporary family images. Her work is a reminder that sometimes, home can be the people we love (and bicker) with.",
      visual: "Historical family portraits and contemporary family images.",
      date: "Dec 3, 2024",
      color: "#41E079",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645732/DMINTI/dminti-may20-unreality-amber-martinez_y3ttrw.png",
      nftLink: "https://objkt.com/tokens/KT1FsU7k7cuAPeY8zjQmw7u2kmugS79qdtV8/5",
      instagram: "https://instagram.com/poemequalsart"
    },
    {
      id: 3,
      name: "Carla Gannis",
      handle: "@carlagannis",
      title: "Am I the Machine? Am I the Home?",
      description: "Carla Gannis' Am I the Machine? Am I the Home? is a 3D animated video produced with her partner architect Cleveland Adams, exploring the intersection of human consciousness, technology, and domesticity. A transparent female head, blending obsolete tech and organic forms, represents how digital tools increasingly shape our inner worlds and concept of home. The viewer is invited through a USB portal, on a journey that questions where human experience ends and technology begins, blurring the line between digital and physical realities.",
      visual: "Play 5-second loop of the 3D animated USB portal.",
      date: "Dec 3, 2024",
      color: "#E0D241",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645745/DMINTI/dminti-may20-amithemachineamithehome-carla-gannis_n0dyjv.png",
      nftLink: "https://objkt.com/tokens/KT1FsU7k7cuAPeY8zjQmw7u2kmugS79qdtV8/4",
      price: "2,000.00 ꜩ",
      instagram: "https://instagram.com/carlagannis"
    },
    {
      id: 4,
      name: "SamJ",
      handle: "@samjstudios",
      title: "After Ours",
      description: "SamJ's piece represents how our connections with others shape our identity, likening these interactions to flavors we absorb and pass on. It symbolises the tangible imprint we leave on those we encounter, even as relationships evolve or diverge.",
      visual: "Hover shows shifting liquid silhouettes of faces.",
      date: "Dec 3, 2024",
      color: "#E08541",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645737/DMINTI/dminti-may20-afterhours-samj_psml0w.png",
      nftLink: "https://objkt.com/tokens/KT1FsU7k7cuAPeY8zjQmw7u2kmugS79qdtV8/2",
      price: "1,000.00 ꜩ",
      instagram: "https://instagram.com/samjstudios"
    },
    {
      id: 5,
      name: "Fabiola Larios & Moises Sanabria",
      handle: "@fabiolalariosm + @moisesdsanabria",
      title: "Bones and Robots",
      description: "Fabiola Larios and Moises Sanabria depict a post-human landscape, a gilded skeleton and a sleek robot represent humanity's dual legacy: preserving the past and pursuing immortality. The video considers the links between memory and endurance; as the skeleton says in the work, 'Memory is the echo of who we were, whispered into the silence of what we've become'. Home and identity are influenced by the past and molded by the present.",
      visual: "Dual-channel GIF (skeleton and robot facing each other with glitch effect).",
      date: "Dec 3, 2024",
      color: "#E041B5",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645740/DMINTI/dminti-may20-bonesnrobots-moisessanabria-fabiolalarios_dlnugy.png",
      nftLink: "https://objkt.com/tokens/KT1FsU7k7cuAPeY8zjQmw7u2kmugS79qdtV8/3",
      price: "20.00 ꜩ",
      instagram: "https://instagram.com/moisesdsanabria"
    },
    {
      id: 6,
      name: "Sheyenne Peltrau",
      handle: "@sheyennepeltrau",
      title: "Secret Garden",
      description: "A digital exploration of nature's hidden beauty.",
      visual: "Interactive garden visualization with particle effects.",
      date: "May 20",
      color: "#9941E0",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645742/DMINTI/dminti-may20-secretgarden-sheyenne-peltrau_h2ygd5.png"
    },
    {
      id: 7,
      name: "Stigmata Linique Noel",
      handle: "@stigmatanoel",
      title: "Digital Echoes",
      description: "Exploring the intersection of digital and physical spaces.",
      visual: "Dynamic spatial audio-visual experience.",
      date: "May 20",
      color: "#E041B5",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645748/DMINTI/dminti-may20-stigmata-linique-noel_aihbst.png"
    }
  ]

  const scrollToArtist = (artistId: number) => {
    const element = document.getElementById(`artist-${artistId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      element.classList.add('highlight')
      setTimeout(() => element.classList.remove('highlight'), 2000)
    }
  }

  return (
    <section className={`relative w-full py-20 ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`} id="featured-works">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <GlassmorphicPanel className={`p-8 mb-24 border ${theme === 'dark' ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
          <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] via-[#E041B5] to-[#41E079]">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <motion.div
                key={artist.title}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedArtist(artist)}
                transition={{ duration: 0.2 }}
              >
                <div className={`relative aspect-[4/3] rounded-xl overflow-hidden border ${
                  theme === 'dark' ? 'border-white/20' : 'border-black/20'
                } transition-all duration-300 group-hover:border-opacity-50 group-hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'group-hover:shadow-[#4D9DE0]/20' 
                    : 'group-hover:shadow-[#4D9DE0]/30'
                }`}>
                  <Image
                    src={artist.image || ''}
                    alt={artist.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark' 
                      ? 'from-black/80 via-black/50 to-transparent' 
                      : 'from-white/80 via-white/50 to-transparent'
                  } ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`} />
                </div>
                <div className={`absolute inset-0 flex flex-col justify-end p-6 ${
                  isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } transition-opacity duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  <h3 className="text-xl font-bold mb-2">{artist.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{artist.name}</p>
                  <div className="flex gap-2">
                    {artist.nftLink && (
                      <a
                        href={artist.nftLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-1 text-xs ${
                          theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                        }`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        NFT
                      </a>
                    )}
                    {artist.instagram && (
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-1 text-xs ${
                          theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                        }`}
                      >
                        <Instagram className="w-3 h-3" />
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassmorphicPanel>
      </div>

      {/* Artist Detail Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md`}
            onClick={() => setSelectedArtist(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative p-8 backdrop-blur-xl ${theme === 'dark' ? 'bg-black/30 border-white/10' : 'bg-white/30 border-black/10'} border rounded-2xl overflow-hidden`}
                style={{
                  boxShadow: `0 0 40px ${selectedArtist.color}40`,
                  background: `linear-gradient(135deg, ${selectedArtist.color}10, ${theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'})`,
                }}
              >
                <button
                  onClick={() => setSelectedArtist(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white' 
                      : 'bg-black/10 hover:bg-black/20 text-black/70 hover:text-black'
                  } transition-colors duration-300`}
                >
                  ✕
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className={`w-full md:w-1/2 aspect-square bg-gradient-to-br ${
                    theme === 'dark' ? 'from-black/20 to-black/40 border-white/10' : 'from-white/20 to-white/40 border-black/10'
                  } rounded-xl overflow-hidden border relative`}>
                    {selectedArtist.image && (
                      <Image
                        src={selectedArtist.image}
                        alt={selectedArtist.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className={`text-xs font-medium ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mb-2`}>
                      {selectedArtist.date}
                    </div>
                    <h2 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {selectedArtist.title}
                    </h2>
                    <h3 className={`text-lg mb-4 ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                      {selectedArtist.name}
                    </h3>
                    <p className={`mb-6 text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                      {selectedArtist.description}
                    </p>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                      <p>{selectedArtist.visual}</p>
                    </div>
                    <div className="mt-6 flex flex-col gap-2">
                      {selectedArtist.nftLink && (
                        <a 
                          href={selectedArtist.nftLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs ${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} flex items-center gap-2 group`}
                        >
                          <span>View on objkt</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          {selectedArtist.price && (
                            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-[#4D9DE0] to-[#E041B5] text-white">
                              {selectedArtist.price}
                            </span>
                          )}
                        </a>
                      )}
                      {selectedArtist.instagram && (
                        <a 
                          href={selectedArtist.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs ${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} flex items-center gap-2 group`}
                        >
                          <span>Follow on Instagram</span>
                          <Instagram className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      )}
                      <a 
                        href="#" 
                        className={`text-xs ${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
                      >
                        {selectedArtist.handle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 