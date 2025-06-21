import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart, Users, Sparkles } from 'lucide-react';

const team = [
  {
    name: "Moises Sanabria",
    role: "Lead Developer",
    image: "/team/moises.jpg",
    motif: Heart,
    social: {
      github: "https://github.com/moises",
      twitter: "https://twitter.com/moises",
      linkedin: "https://linkedin.com/in/moises"
    }
  },
  {
    name: "Fabiola Larios",
    role: "Community & Growth",
    image: "/team/fabiola.jpg",
    motif: Users,
    social: {
      github: "https://github.com/fabiola",
      twitter: "https://twitter.com/fabiolalarios",
      linkedin: "https://linkedin.com/in/fabiolalarios"
    }
  },
  // {
  //   name: "Sam Lopez de Victoria",
  //   role: "Community Lead",
  //   image: "/team/chu.jpg",
  //   motif: Sparkles,
  //   social: {
  //     github: "https://github.com/alex",
  //     twitter: "https://twitter.com/alex",
  //     linkedin: "https://linkedin.com/in/alex"
  //   }
  // }
];

export function TeamGrid() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.07, boxShadow: '0 0 48px #A4FF4E', borderColor: '#A4FF4E' }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border-2 border-transparent transition-colors cursor-pointer"
              style={{ borderImage: 'linear-gradient(120deg, #A4FF4E 0%, #3B82F6 100%) 1' }}
            >
              {/* Animated background pulse */}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 60% 40%, #A4FF4E33 0%, transparent 80%)',
                  filter: 'blur(24px)',
                  opacity: 0.5,
                }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              />
              {/* Micro-motif/icon */}
              <motion.div
                className="absolute top-4 right-4 text-[#A4FF4E]/40 text-3xl select-none pointer-events-none z-10"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                {React.createElement(member.motif, { className: 'w-8 h-8' })}
              </motion.div>
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#A4FF4E] transition-colors text-center">
                  {member.name}
                </h3>
                <p className="text-[#A4FF4E] mb-4 text-center">{member.role}</p>
                {/* Social Links */}
                <div className="flex gap-4 justify-center">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#A4FF4E] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#A4FF4E] transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#A4FF4E] transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 