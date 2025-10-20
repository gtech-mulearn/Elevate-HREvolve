'use client';
import { motion } from 'framer-motion';

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      name: 'Speaker Name',
      title: 'Title',
      company: 'Company',
      image: '/speakers/speaker1.jpg',
    },
    {
      name: 'Speaker Name',
      title: 'Title',
      company: 'Company',
      image: '/speakers/speaker2.jpg',
    },
    {
      name: 'Speaker Name',
      title: 'Title',
      company: 'Company',
      image: '/speakers/speaker3.jpg',
    },
    {
      name: 'Speaker Name',
      title: 'Title',
      company: 'Company',
      image: '/speakers/speaker4.jpg',
    },
  ];

  return (
    <section id="speakers" className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Speakers
        </motion.h2>

        {/* Speakers Grid */}
        <div>
          {/* Mobile: Horizontal scroll container */}
          <div className="flex lg:hidden md:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {speakers.map((speaker, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-purple-600/40 to-pink-600/40 border border-purple-500/30 flex-shrink-0 w-72 snap-center"
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                viewport={{ 
                  once: true,
                  margin: "-100px"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { 
                    duration: 0.4, 
                    delay: index * 0.15 + 0.2,
                    ease: "backOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut" 
                  }
                }}
              >
                {/* Speaker Image Container */}
                <motion.div 
                  className="aspect-[3/4] relative bg-gradient-to-b from-purple-500/20 to-transparent overflow-hidden"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15 + 0.3,
                    ease: "easeOut" 
                  }}
                >
                  {/* Placeholder for speaker image */}
                  <motion.div 
                    className="w-full h-full bg-gradient-to-b from-purple-400/20 via-pink-400/20 to-transparent flex items-center justify-center"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.5 
                    }}
                  >
                    <motion.div 
                      className="w-32 h-32 rounded-full bg-purple-500/30 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15 + 0.7,
                        ease: "backOut" 
                      }}
                    >
                      <span className="text-6xl text-white/50">👤</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Decorative background shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-pink-500/20 pointer-events-none"></div>
                </motion.div>

                {/* Speaker Info */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-center"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.6,
                    ease: "easeOut" 
                  }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-white mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.8 
                    }}
                  >
                    {speaker.name}
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 text-sm font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.9 
                    }}
                  >
                    {speaker.title}, {speaker.company}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop/Tablet: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {speakers.map((speaker, index) => (
              <motion.div
                key={`desktop-${index}`}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-purple-600/40 to-pink-600/40 border border-purple-500/30"
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                viewport={{ 
                  once: true,
                  margin: "-100px"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { 
                    duration: 0.4, 
                    delay: index * 0.15 + 0.2,
                    ease: "backOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut" 
                  }
                }}
              >
                {/* Speaker Image Container */}
                <motion.div 
                  className="aspect-[3/4] relative bg-gradient-to-b from-purple-500/20 to-transparent overflow-hidden"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15 + 0.3,
                    ease: "easeOut" 
                  }}
                >
                  {/* Placeholder for speaker image */}
                  <motion.div 
                    className="w-full h-full bg-gradient-to-b from-purple-400/20 via-pink-400/20 to-transparent flex items-center justify-center"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.5 
                    }}
                  >
                    <motion.div 
                      className="w-32 h-32 rounded-full bg-purple-500/30 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15 + 0.7,
                        ease: "backOut" 
                      }}
                    >
                      <span className="text-6xl text-white/50">👤</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Decorative background shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-pink-500/20 pointer-events-none"></div>
                </motion.div>

                {/* Speaker Info */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-center"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.6,
                    ease: "easeOut" 
                  }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-white mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.8 
                    }}
                  >
                    {speaker.name}
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 text-sm font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.9 
                    }}
                  >
                    {speaker.title}, {speaker.company}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}