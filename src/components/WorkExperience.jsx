import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WorkExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const experiences = [
    {
      role: "Business Consultant",
      company: "HighRadius",
      location: "Hyderabad",
      duration: "May 2023 - June 2023 (1 month)",
      type: "Intern",
      description: [
        "Assisted the consulting team in analyzing client requirements and developing solutions",
        "Conducted market research and prepared reports on industry trends and competitors",
        "Completed daily assigned assignments"
      ],
      skills: ["Excel", "PowerPoint", "MySQL"],
      link: "https://www.highradius.com/"
    }
    // Add more experiences here as needed
  ]

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden py-24"
      id="experience"
    >
      {/* Floating background elements */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section title with glitch effect */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
            Work <span className="glitch" data-text="Experience">Experience</span>
          </span>
        </motion.h2>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500/30 to-purple-600/30"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? 100 : -100 
              }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.16, 0.77, 0.47, 0.97] 
                }
              } : {}}
              className={`relative mb-16 w-full ${index % 2 === 0 ? 'md:pr-8 md:pl-0 md:text-right' : 'md:pl-8'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-[-4px] left-6' : 'md:left-[-4px] left-6'} w-4 h-4 rounded-full bg-indigo-500 border-2 border-gray-900 z-10`}></div>
              
              {/* Experience card */}
              <div className={`relative ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                {/* Holographic card effect */}
                <div className={`p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-indigo-400/20 shadow-lg overflow-hidden ${index % 2 === 0 ? 'md:shadow-indigo-500/10' : 'md:shadow-purple-500/10'}`}>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-[1px] border-dashed border-indigo-400/30 pointer-events-none animate-spin-slow"></div>
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { 
                      opacity: 1,
                      transition: { delay: index * 0.2 + 0.4 }
                    } : {}}
                  >
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center mb-4">
                        <span className="text-indigo-400 mr-2">@ {exp.company}</span>
                        <span className="text-gray-400 text-sm">{exp.location}</span>
                        {exp.link && (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 text-indigo-300 hover:text-white transition-colors"
                            aria-label={`${exp.company} website`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300 mb-6">
                        <span className="px-3 py-1 bg-gray-700 rounded-full mr-3">{exp.type}</span>
                        <span>{exp.duration}</span>
                      </div>
                      
                      <ul className={`space-y-3 text-gray-300 mb-6 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            animate={isInView ? { 
                              x: 0, 
                              opacity: 1,
                              transition: { 
                                delay: index * 0.2 + 0.6 + (i * 0.1) 
                              }
                            } : {}}
                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-indigo-400"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { 
                              scale: 1, 
                              opacity: 1,
                              transition: { 
                                delay: index * 0.2 + 0.8 + (i * 0.1) 
                              }
                            } : {}}
                            className="px-3 py-1 text-xs bg-indigo-900/50 text-indigo-100 rounded-full border border-indigo-400/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}