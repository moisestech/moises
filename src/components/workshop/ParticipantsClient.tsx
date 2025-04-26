'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Code, Stars, User, ChevronRight, ChevronDown, ArrowRight, Filter, X, Users, FileText, Layout } from 'lucide-react';
import Link from 'next/link';
import { PlatformIcon } from '@/components/workshop/PlatformIcons';
import { useState, useEffect, Suspense } from 'react';
import { ProfileCard } from './ProfileCard';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

console.log('ParticipantsClient component initializing');

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const filterAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.3 }
};

const participants: Array<{
  name: string;
  website: string;
  platforms: string[];
  webDesignLevel: number;
  aiLevel: number;
  goals: string | string[];
  overview: string;
  architecture: {
    home: {
      title: string;
      children?: {
        [key: string]: {
          title: string;
          description?: string;
          children?: {
            [key: string]: {
              title: string;
            };
          };
        };
      };
    };
  };
}> = [
  {
    name: "Gabriela Garcia",
    website: "gabrielagcarciadalta.com",
    platforms: ["squarespace", "wix", "github", "coding"],
    webDesignLevel: 3,
    aiLevel: 3,
    goals: "Find better ways to digitally showcase my work and focus on learning how to develop my online presence",
    overview: "Gabriela Garcia is a visual artist interested in expanding her digital presence and finding innovative ways to showcase her work online.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { 
            title: "About",
            description: "Artist biography and statement"
          },
          work: { 
            title: "Work",
            description: "Portfolio showcase"
          },
          exhibitions: { title: "Exhibitions" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Augusto Esquivel",
    website: "augustoesquivel.com",
    platforms: ["squarespace", "coding"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Better understand how to drive traffic to website and social media",
    overview: "Augusto Esquivel is a self-taught artist from Buenos Aires, Argentina, known for creating sculptural art forms using thousands of buttons. His work explores themes of immigrant identity and the influence of capitalism.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: {
            title: "About",
            description: "Artist biography and statement"
          },
          allAccess: {
            title: "All Access",
            description: "Newsletter sign-up"
          }
        }
      }
    }
  },
  {
    name: "Shawna Moulton",
    website: "shawnamoulton.com",
    platforms: ["wix"],
    webDesignLevel: 2,
    aiLevel: 1,
    goals: "Update site and open a shop, more engagement with work",
    overview: "Shawna Moulton is a multidisciplinary artist and art educator based in South Florida. Her work includes sculpture, paintings, drawings, and printmaking, often reflecting her journey into motherhood and themes of identity.",
    architecture: {
      home: {
        title: "Home",
        children: {
          portfolio: {
            title: "Portfolio",
            children: {
              sculpture: { title: "Sculpture" },
              paintings: { title: "Paintings" },
              drawings: { title: "Drawings" },
              printmaking: { title: "Printmaking" },
              smartProjects: { title: "SMART Projects" }
            }
          },
          about: { title: "About" },
          more: { title: "More" }
        }
      }
    }
  },
  {
    name: "Morel Doucet",
    website: "moreldoucet.com",
    platforms: ["squarespace", "coding"],
    webDesignLevel: 3,
    aiLevel: 3,
    goals: "Refine Squarespace website and improve online presence",
    overview: "Morel Doucet is a Haitian-American artist whose work explores themes of environmental racism, climate gentrification, and the intersection of race and class in contemporary society.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          press: { title: "Press" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  // {
  //   name: "Monique Lazard",
  //   website: "moniquelazard.com",
  //   platforms: ["squarespace"],
  //   webDesignLevel: 3,
  //   aiLevel: 1,
  //   goals: "Learn how to edit website and make changes",
  //   overview: "Monique Lazard is a visual artist working in painting, drawing, and mixed media. Her work explores themes of memory, identity, and the natural world.",
  //   architecture: {
  //     home: {
  //       title: "Home",
  //       children: {
  //         about: { title: "About" },
  //         work: { title: "Work" },
  //         contact: { title: "Contact" }
  //       }
  //     }
  //   }
  // },
  {
    name: "Monica Lopez De Victoria",
    website: "monicalopezdevictoria.com",
    platforms: ["squarespace", "coding", "other"],
    webDesignLevel: 3,
    aiLevel: 2,
    goals: "Level up website to showcase decades of work",
    overview: "Monica Lopez De Victoria is a Cuban-American artist whose work spans painting, sculpture, and installation. Her practice explores themes of cultural identity and personal history.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          exhibitions: { title: "Exhibitions" },
          press: { title: "Press" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Christine Cortes",
    website: "christine-cortes.com",
    platforms: ["coding", "other"],
    webDesignLevel: 3,
    aiLevel: 1,
    goals: "Improve website layout and accessibility",
    overview: "Christine Cortes is a photographer whose work focuses on portraiture and documentary photography, capturing intimate moments and personal narratives.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          portfolio: { title: "Portfolio" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  // {
  //   name: "Mateo SeZa",
  //   website: "mateoseza.art",
  //   platforms: ["squarespace", "wix"],
  //   webDesignLevel: 3,
  //   aiLevel: 3,
  //   goals: "Present artwork professionally and enhance digital presence",
  //   overview: "Mateo SeZa is a multidisciplinary artist working across painting, sculpture, and digital media. His work explores themes of technology, identity, and human connection.",
  //   architecture: {
  //     home: {
  //       title: "Home",
  //       children: {
  //         about: { title: "About" },
  //         work: { title: "Work" },
  //         exhibitions: { title: "Exhibitions" },
  //         contact: { title: "Contact" }
  //       }
  //     }
  //   }
  // },
  {
    name: "Wooster Delisfort",
    website: "wooslerdelisfort.com",
    platforms: ["squarespace", "wix"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Build and highlight portfolio on website",
    overview: "Wooster Delisfort is a visual artist and filmmaker whose work explores themes of identity, community, and social justice through various media.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Pedro Wazzan",
    website: "pedrowazzan.com",
    platforms: ["squarespace"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Improve website tools for client access",
    overview: "Pedro Wazzan is an artist and designer whose work spans graphic design, illustration, and interactive media.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Diana Espin",
    website: "dianaespin.com",
    platforms: ["squarespace"],
    webDesignLevel: 3,
    aiLevel: 2,
    goals: "Improve online presence and spread work",
    overview: "Diana Espin is a visual artist working in painting and mixed media. Her work explores themes of memory, identity, and the natural world.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          exhibitions: { title: "Exhibitions" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Mariale Icaza",
    website: "maipdesigns.com",
    platforms: ["wix"],
    webDesignLevel: 3,
    aiLevel: 3,
    goals: "Take website to next level for engagement",
    overview: "Mariale Icaza is a designer and artist whose work spans graphic design, illustration, and interactive media.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Christina Pettersson",
    website: "christinapettersson.com",
    platforms: ["other"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Design own website with creative control",
    overview: "Christina Pettersson is a visual artist working in drawing, installation, and mixed media. Her work explores themes of mythology, history, and personal narrative.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          exhibitions: { title: "Exhibitions" },
          contact: { title: "Contact" }
        }
      }
    }
  }
];

const LevelIndicator = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < level ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
      />
    ))}
  </div>
);

const TreeNode = ({ node, level = 0 }: { node: any; level?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && Object.keys(node.children).length > 0;

  return (
    <div className="pl-4">
      <div 
        className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <ChevronRight 
            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          />
        )}
        <span className="text-sm font-medium text-gray-700">{node.title}</span>
        {node.description && (
          <span className="text-xs text-gray-500">- {node.description}</span>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="border-l-2 border-gray-200 ml-2">
          {Object.entries(node.children).map(([key, child]: [string, any]) => (
            <TreeNode key={key} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const WebsiteArchitecture = ({ architecture }: { architecture: any }) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Website Architecture</h3>
      <TreeNode node={architecture.home} />
    </div>
  );
};

export default function ParticipantsClient() {
  const { theme } = useTheme();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'goals' | 'overview' | 'architecture'>('goals');
  const [filters, setFilters] = useState({
    platforms: [] as string[],
    aiLevel: [] as number[],
    webDesignLevel: [] as number[]
  });

  // Get unique platforms, AI levels, and web design levels
  const uniquePlatforms = Array.from(new Set(participants.flatMap(p => p.platforms)));
  const uniqueAiLevels = Array.from(new Set(participants.map(p => p.aiLevel)));
  const uniqueWebDesignLevels = Array.from(new Set(participants.map(p => p.webDesignLevel)));

  // Filter participants based on selected filters
  const filteredParticipants = participants.filter(participant => {
    const platformMatch = filters.platforms.length === 0 || 
      participant.platforms.some(platform => filters.platforms.includes(platform));
    const aiLevelMatch = filters.aiLevel.length === 0 || 
      filters.aiLevel.includes(participant.aiLevel);
    const webDesignLevelMatch = filters.webDesignLevel.length === 0 || 
      filters.webDesignLevel.includes(participant.webDesignLevel);
    
    return platformMatch && aiLevelMatch && webDesignLevelMatch;
  });

  const toggleFilter = (type: 'platforms' | 'aiLevel' | 'webDesignLevel', value: string | number) => {
    setFilters(prev => {
      const currentValues = prev[type] as (string | number)[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return { ...prev, [type]: newValues };
    });
  };

  const clearFilters = () => {
    setFilters({
      platforms: [],
      aiLevel: [],
      webDesignLevel: []
    });
  };

  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Enhanced Header */}
          <motion.section 
            variants={fadeIn} 
            className={cn(
              "rounded-2xl p-8 shadow-lg relative overflow-hidden",
              theme === 'dark' 
                ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50' 
                : 'bg-gradient-to-r from-indigo-50 to-purple-50'
            )}
          >
            <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-10" />
            <div className="relative">
              <motion.div
                className="flex justify-center mb-8"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Users className={cn(
                  "w-16 h-16",
                  theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                )} />
              </motion.div>
              <h1 className={cn(
                "text-3xl sm:text-4xl font-bold mb-4 text-center",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                Workshop Participants
              </h1>
              <p className={cn(
                "text-lg sm:text-xl mb-6 text-center",
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                Meet your fellow artists and explore their digital presence
              </p>
              <div className={cn(
                "max-w-3xl mx-auto text-base",
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              )}>
                <p className="mb-4">
                  This workshop brings together a diverse group of artists, each with unique backgrounds and goals for their digital presence. 
                  From established professionals to emerging talents, our participants represent a wide range of artistic practices and technical expertise.
                </p>
                <p>
                  Explore their profiles to understand different approaches to building an online presence, 
                  and discover how they plan to enhance their digital platforms through this workshop.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Enhanced Filter Section */}
          <motion.div variants={fadeIn} className="space-y-4">
            {/* Active Filters Display */}
            {(filters.platforms.length > 0 || filters.aiLevel.length > 0 || filters.webDesignLevel.length > 0) && (
              <div className={cn(
                "p-4 rounded-lg",
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              )}>
                <div className="flex flex-wrap gap-2">
                  {filters.platforms.map(platform => (
                    <button
                      key={platform}
                      onClick={() => toggleFilter('platforms', platform)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors",
                        theme === 'dark'
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      )}
                    >
                      {platform}
                      <X className="w-3 h-3" />
                    </button>
                  ))}
                  {filters.aiLevel.map(level => (
                    <button
                      key={level}
                      onClick={() => toggleFilter('aiLevel', level)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors",
                        theme === 'dark'
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      )}
                    >
                      AI Level {level}
                      <X className="w-3 h-3" />
                    </button>
                  ))}
                  {filters.webDesignLevel.map(level => (
                    <button
                      key={level}
                      onClick={() => toggleFilter('webDesignLevel', level)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors",
                        theme === 'dark'
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      )}
                    >
                      Web Design Level {level}
                      <X className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Filter Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                {(filters.platforms.length > 0 || filters.aiLevel.length > 0 || filters.webDesignLevel.length > 0) && (
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-indigo-600 text-white">
                    {filters.platforms.length + filters.aiLevel.length + filters.webDesignLevel.length}
                  </span>
                )}
              </button>
              {(filters.platforms.length > 0 || filters.aiLevel.length > 0 || filters.webDesignLevel.length > 0) && (
                <button
                  onClick={clearFilters}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-gray-300'
                      : 'text-gray-600 hover:text-gray-700'
                  )}
                >
                  <X className="w-5 h-5" />
                  Clear All
                </button>
              )}
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  {...filterAnimation}
                  className={cn(
                    "p-4 rounded-lg shadow-lg",
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  )}
                >
                  <div className="space-y-6">
                    {/* Platforms Filter */}
                    <div>
                      <h4 className={cn(
                        "text-sm font-medium mb-2",
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        Platforms
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {uniquePlatforms.map(platform => (
                          <button
                            key={platform}
                            onClick={() => toggleFilter('platforms', platform)}
                            className={cn(
                              "px-3 py-1 rounded-full text-sm transition-colors",
                              filters.platforms.includes(platform)
                                ? 'bg-indigo-600 text-white'
                                : theme === 'dark'
                                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            )}
                          >
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* AI Level Filter */}
                    <div>
                      <h4 className={cn(
                        "text-sm font-medium mb-2",
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        AI Experience Level
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {uniqueAiLevels.map(level => (
                          <button
                            key={level}
                            onClick={() => toggleFilter('aiLevel', level)}
                            className={cn(
                              "px-3 py-1 rounded-full text-sm transition-colors",
                              filters.aiLevel.includes(level)
                                ? 'bg-indigo-600 text-white'
                                : theme === 'dark'
                                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            )}
                          >
                            Level {level}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Web Design Level Filter */}
                    <div>
                      <h4 className={cn(
                        "text-sm font-medium mb-2",
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        Web Design Experience Level
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {uniqueWebDesignLevels.map(level => (
                          <button
                            key={level}
                            onClick={() => toggleFilter('webDesignLevel', level)}
                            className={cn(
                              "px-3 py-1 rounded-full text-sm transition-colors",
                              filters.webDesignLevel.includes(level)
                                ? 'bg-indigo-600 text-white'
                                : theme === 'dark'
                                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            )}
                          >
                            Level {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Section Navigation */}
          <motion.div variants={fadeIn} className="space-y-4">
            <div className={cn(
              "flex flex-col gap-2 p-4 rounded-lg",
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            )}>
              <button
                onClick={() => setActiveSection('goals')}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  activeSection === 'goals'
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-600 text-white'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <Stars className="w-5 h-5" />
                <div>
                  <div className="font-medium">Goals</div>
                  <div className="text-sm opacity-80">View participant goals and objectives</div>
                </div>
              </button>
              <button
                onClick={() => setActiveSection('overview')}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  activeSection === 'overview'
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-600 text-white'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <FileText className="w-5 h-5" />
                <div>
                  <div className="font-medium">Overview</div>
                  <div className="text-sm opacity-80">View participant background and practice</div>
                </div>
              </button>
              <button
                onClick={() => setActiveSection('architecture')}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  activeSection === 'architecture'
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-600 text-white'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <Layout className="w-5 h-5" />
                <div>
                  <div className="font-medium">Website Architecture</div>
                  <div className="text-sm opacity-80">View website structure and organization</div>
                </div>
              </button>
            </div>

            {/* Participants Grid */}
            <Suspense fallback={
              <div className="grid grid-cols-1 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1200px)]:grid-cols-3 gap-4 sm:gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={cn(
                    "rounded-xl p-4 sm:p-6 animate-pulse",
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  )}>
                    <div className={cn(
                      "h-24 sm:h-32 w-full rounded-lg mb-4",
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                    )} />
                    <div className="space-y-3">
                      <div className={cn(
                        "h-4 rounded w-3/4",
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      )} />
                      <div className={cn(
                        "h-4 rounded w-1/2",
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      )} />
                      <div className={cn(
                        "h-4 rounded w-2/3",
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      )} />
                    </div>
                  </div>
                ))}
              </div>
            }>
              <AnimatePresence mode="wait">
                <motion.div
                  key={JSON.stringify(filters) + activeSection}
                  className="grid grid-cols-1 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1200px)]:grid-cols-3 gap-4 sm:gap-6"
                >
                  {filteredParticipants.map((participant) => (
                    <motion.div
                      key={participant.website}
                      {...cardAnimation}
                    >
                      <ProfileCard 
                        participant={participant} 
                        activeSection={activeSection}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </motion.div>

          {/* Next Section Preview */}
          <motion.section
            variants={fadeIn}
            className={cn(
              "rounded-2xl p-8 shadow-lg",
              theme === 'dark' 
                ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50' 
                : 'bg-gradient-to-r from-indigo-50 to-purple-50'
            )}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                Next: Building Your Digital Presence
              </h2>
              <p className={cn(
                "mb-6",
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                Now that we've met our participants, let's explore how to create a strong digital presence that effectively showcases your work and connects with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className={cn(
                  "flex items-center gap-2",
                  theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                )}>
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">Digital Presence</span>
                </div>
                <Link
                  href="/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors",
                    theme === 'dark'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  )}
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 