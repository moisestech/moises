'use client'

import { Button } from "@/components/ui/button"
import { GlassmorphicPanel } from "@/components/glassmorphic-panel"
import { CountdownTimer } from "@/components/countdown-timer"
import { ExternalLink, Sparkles, MapPin, Calendar } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { motion } from "framer-motion"

export function EventDetails() {
  const { theme } = useTheme()

  return (
    <section className={`relative w-full py-20 ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`} id="event-details">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <GlassmorphicPanel className={`p-8 mb-24 border ${theme === 'dark' ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative inline-block mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-xl rounded-lg" />
              <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] via-[#E041B5] to-[#41E079]">
                ATTENDANT ENGAGEMENTS No. 1
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={`text-lg md:text-xl mb-8 ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}
            >
              Join us for a special one-night-only screening of{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] to-[#E041B5]">
                "Notions of Home"
              </span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8"
            >
              <a 
                href="https://www.google.com/maps/search/?api=1&query=3930%20NE%202nd%20Ave&query_place_id=ChIJ_SgZPFex2YgRqVukxaSUz3w"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm px-6 py-3 rounded-full border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} group hover:scale-105 transition-transform duration-300`}
              >
                <MapPin className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-[#E041B5]' : 'text-[#4D9DE0]'} group-hover:rotate-12 transition-transform duration-300`} />
                <span className={`text-sm md:text-base ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                  Laurie Simmons' Kaleidoscope (...Bigger) House installation
                </span>
              </a>
              <div className={`flex items-center ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm px-6 py-3 rounded-full border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} group hover:scale-105 transition-transform duration-300`}>
                <Calendar className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-[#E041B5]' : 'text-[#4D9DE0]'} group-hover:rotate-12 transition-transform duration-300`} />
                <span className={`text-sm md:text-base ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                  May 20, 2025
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className={`mb-8 ${theme === 'dark' ? 'text-white/90' : 'text-black/90'} text-base md:text-lg max-w-2xl mx-auto`}
            >
              <p className="mb-2">
                Each artist's piece will be displayed on individual screens surrounding the work.
              </p>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className={`w-5 h-5 ${theme === 'dark' ? 'text-[#E041B5]' : 'text-[#4D9DE0]'} animate-pulse`} />
                <span>Stay for conversation, light, and reflection.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <CountdownTimer targetDate="May 20, 2025" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Button 
                className="relative group bg-gradient-to-r from-[#4D9DE0] to-[#E041B5] hover:from-[#4D9DE0]/90 hover:to-[#E041B5]/90 border-none text-white px-8 py-6 text-lg font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E041B5]/20"
                onClick={() => window.open('https://lu.ma/j8mnlcjb', '_blank')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  RSVP Now
                  <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/0 via-white/20 to-[#E041B5]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </motion.div>
          </motion.div>
        </GlassmorphicPanel>
      </div>
    </section>
  )
} 