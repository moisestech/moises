import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: "Moises Sanabria",
    role: "Lead Developer",
    image: "/team/moises.jpg",
    social: {
      github: "https://github.com/moises",
      twitter: "https://twitter.com/moises",
      linkedin: "https://linkedin.com/in/moises"
    }
  },
  {
    name: "Sarah Chen",
    role: "UX Designer",
    image: "/team/sarah.jpg",
    social: {
      github: "https://github.com/sarah",
      twitter: "https://twitter.com/sarah",
      linkedin: "https://linkedin.com/in/sarah"
    }
  },
  {
    name: "Alex Rodriguez",
    role: "Community Lead",
    image: "/team/alex.jpg",
    social: {
      github: "https://github.com/alex",
      twitter: "https://twitter.com/alex",
      linkedin: "https://linkedin.com/in/alex"
    }
  }
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
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#A4FF4E] transition-colors"
            >
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#A4FF4E] mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex gap-4">
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