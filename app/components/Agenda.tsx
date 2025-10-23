'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Agenda() {
  const scheduleItems = [
    {
      activity: 'Welcome Address',
      speakers: 'Deepa Nair',
      topic: '6D Technologies | HR Evolve Member',
      type: 'admin'
    },
    {
      activity: 'Inaugural Function',
      speakers: 'Guest 1 (Yet to be decided)\nGuest 2 (Yet to be decided)\nGuest 3 (Yet to be decided)\nGuest 4 (Yet to be decided)',
      topic: '',
      type: 'admin'
    },
    {
      activity: 'Keynote Address',
      speakers: 'Nisha Gopinath\nVice President HR and Head of HR IBM, India and South Asia',
      topic: 'Shaping the Future: Leading through the Human–AI Nexus',
      type: 'keynote'
    },
    {
      activity: 'Session 1',
      speakers: '(Yet to be decided)',
      topic: '(Yet to be decided)',
      type: 'session'
    },
    {
      activity: 'Power Talk 1',
      speakers: 'Sreejith Krishnan (Yet to Confirm)\nDirector – Learning & Development, Sony India',
      topic: 'Learning Rewired: The Skill-Shelf-Life Crisis Management',
      type: 'session'
    },
    {
      activity: 'Power Talk 2',
      speakers: 'SHRM',
      topic: 'Governance Conundrum: AI, Compliance, and the Ethics of Work',
      type: 'session'
    },
    {
      activity: 'Power Talk 3',
      speakers: 'Great Place to Work® Institute, India',
      topic: 'The Talent Reset: Repurposing People for the New Work Order',
      type: 'session'
    },
    {
      activity: 'Power Talk 4',
      speakers: 'Muhammed Rafi\nFounder & Chief Mentor, Magic of Change',
      topic: '',
      type: 'session'
    },
    {
      activity: 'Power Talk 5',
      speakers: 'LinkedIn (Yet to Confirm)',
      topic: '',
      type: 'session'
    },
    {
      activity: 'Panel Discussion',
      speakers: 'Moderator – TBD (Yet to Confirm)\nPanel Members:\n1. IBS\n2. Guest 1\n3. Guest 2\n4. Guest 3',
      topic: 'The Future of Work: Bridging the Human–AI Continuum',
      type: 'panel'
    },
    {
      activity: 'Closing Remarks',
      speakers: 'HR Evolve Member',
      topic: '',
      type: 'admin'
    }
  ];

  return (
    <section className="-mt-15 sm:-mt-5 px-4" data-framer-name="Schedule" id="agenda">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">

        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-white capitalize font-medium text-center"
            style={{
              fontFamily: '"Sora", "Sora Placeholder", sans-serif',
              fontSize: 'clamp(28px, 6vw, 40px)',
              fontWeight: 500,
              letterSpacing: '-0.05em'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Agenda
          </motion.h2>
        </div>

        <div className="mb-12 sm:mb-16">
          <motion.div
            className="border border-white/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h3
              className="text-white font-extraboldbold"
              style={{
                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: '1.4em'
              }}
            >
              20th November 2025
            </h3>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-4 sm:p-6"
                style={{
                  border: `1px solid ${item.type === 'keynote' ? 'rgba(239, 200, 38, 0.3)' :
                    item.type === 'panel' ? 'rgba(34, 197, 94, 0.3)' :
                      item.type === 'session' ? 'rgba(59, 130, 246, 0.3)' :
                        item.type === 'admin' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.2)'
                    }`,
                  backgroundColor: `${item.type === 'keynote' ? 'rgba(239, 200, 38, 0.05)' :
                    item.type === 'panel' ? 'rgba(34, 197, 94, 0.05)' :
                      item.type === 'session' ? 'rgba(59, 130, 246, 0.05)' :
                        item.type === 'admin' ? 'rgba(168, 85, 247, 0.05)' : 'transparent'
                    }`
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + (index * 0.1),
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* Activity Column */}
                  <div className="flex flex-col justify-center">
                    <h3
                      className="font-extrabold"
                      style={{
                        fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                        fontSize: 'clamp(16px, 4vw, 20px)',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        color: 'white',
                        filter: 'brightness(1.1) contrast(1.2)'
                      }}
                    >
                      {item.activity}
                    </h3>
                  </div>

                  {/* Speakers Column */}
                  <div className="md:col-span-1">
                    <div className="mb-2">
                      <h4 className="text-white/80 text-xs uppercase font-semibold">Speakers/ Dignitaries</h4>
                    </div>
                    <div
                      className="text-white font-bold"
                      style={{
                        fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                        fontSize: 'clamp(13px, 3.5vw, 15px)',
                        lineHeight: '1.4em'
                      }}
                    >
                      {item.speakers.split('\n').map((speaker, idx) => (
                        <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{speaker}</p>
                      ))}
                    </div>
                  </div>

                  {/* Topic Column */}
                  <div className="md:col-span-1">
                    {item.topic && (
                      <>
                        <div className="mb-2">
                          <h4 className="text-white/80 text-xs uppercase font-semibold">
                            Topic/ Theme
                          </h4>
                        </div>
                        <p
                          className="text-white font-bold"
                          style={{
                            fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                            fontSize: 'clamp(13px, 3.5vw, 15px)',
                            lineHeight: '1.4em'
                          }}
                        >
                          {item.topic}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p
            className="text-white/70 italic text-sm"
            style={{
              fontFamily: '"Sora", "Sora Placeholder", sans-serif',
              fontSize: 'clamp(12px, 3vw, 14px)',
              lineHeight: '1.4em'
            }}
          >
            *as of 23rd October 2025, and subject to refinement
          </p>
        </motion.div>

        {/* Ticker Section */}
        <div className="mb-16 mt-12" style={{ opacity: 1, transform: 'perspective(1200px)' }}>
          <Link href="https://makemypass.com/event/elevate25-hr-conclave" target="_blank" rel="noopener noreferrer">
            <div style={{ display: 'flex', width: '100%', height: '80px', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0px', padding: '0px', listStyleType: 'none', opacity: 1, overflow: 'hidden' }}>
              <ul
                className="animate-marquee"
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  placeItems: 'center',
                  margin: '0px',
                  padding: '0px',
                  listStyleType: 'none',
                  gap: '40px',
                  position: 'relative',
                  flexDirection: 'row',
                  willChange: 'transform'
                }}
              >
                {[...Array(10)].map((_, index) => (
                  <li key={index} style={{ flexShrink: 0 }}>
                    <div className="flex items-center gap-4" style={{ flexShrink: 0 }}>
                      <div style={{ display: 'contents' }}>
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 204, 0)', width: '24px', height: '24px' }}>
                          <path d="M18.819 13.329l-5.324 5.99a2 2 0 01-2.99 0l-5.324-5.99a2 2 0 010-2.658l5.324-5.99a2 2 0 012.99 0l5.324 5.99a2 2 0 010 2.658z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <p
                        className="text-white uppercase whitespace-nowrap"
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: '20px',
                          fontWeight: 600,
                          textTransform: 'uppercase'
                        }}
                      >
                        Reserve Your Spot
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>

        {/* Partners Section */}
        <motion.div
          className="mb-16 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Partners Title */}
          {/*<div className="text-center mb-8">
            <h2
              className="text-white uppercase font-medium"
              style={{
                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                fontSize: 'clamp(20px, 5vw, 28px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1em'
              }}
            >
              Our Partners
            </h2>
          </div>

<div 
            className="relative overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
            }}
          >
            <div
              className="flex items-center"
              style={{
                display: 'flex',
                width: '100%',
                height: '100px',
                maxWidth: '100%',
                maxHeight: '100%',
                placeItems: 'center',
                margin: '0px',
                padding: '10px',
                listStyleType: 'none',
                opacity: 1,
                overflow: 'hidden'
              }}
            >
              <ul
                className="animate-marquee-partners"
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  placeItems: 'center',
                  margin: '0px',
                  padding: '0px',
                  listStyleType: 'none',
                  gap: '60px',
                  position: 'relative',
                  flexDirection: 'row',
                  willChange: 'transform'
                }}
              >
                {[
                  { name: 'Technopark', bg: 'white' },
                  { name: 'Kerala IT Mission', bg: 'white' },
                  { name: 'MakeMyPass', bg: 'white' },
                  { name: 'UDS', bg: 'white' },
                  { name: 'GTech', bg: 'white' },
                  { name: 'Startup Mission', bg: 'white' },
                  { name: 'Partner 7', bg: 'white' }
                ].map((partner, index) => (
                  <li key={index} style={{ flexShrink: 0 }}>
                    <div
                      className="flex items-center justify-center"
                      style={{
                        backgroundColor: partner.bg,
                        flexShrink: 0,
                        borderRadius: '8px',
                        opacity: 1,
                        width: '120px',
                        height: '60px',
                        padding: '10px'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#333',
                          textAlign: 'center'
                        }}
                      >
                        {partner.name}
                      </span>
                    </div>
                  </li>
                ))}
                
                {[
                  { name: 'Technopark', bg: 'white' },
                  { name: 'Kerala IT Mission', bg: 'white' },
                  { name: 'MakeMyPass', bg: 'white' },
                  { name: 'UDS', bg: 'white' },
                  { name: 'GTech', bg: 'white' },
                  { name: 'Startup Mission', bg: 'white' },
                  { name: 'Partner 7', bg: 'white' }
                ].map((partner, index) => (
                  <li key={`duplicate-${index}`} style={{ flexShrink: 0 }}>
                    <div
                      className="flex items-center justify-center"
                      style={{
                        backgroundColor: partner.bg,
                        flexShrink: 0,
                        borderRadius: '8px',
                        opacity: 1,
                        width: '120px',
                        height: '60px',
                        padding: '10px'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#333',
                          textAlign: 'center'
                        }}
                      >
                        {partner.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          
        </motion.div>

        
      </div>
    </section>
  );
}