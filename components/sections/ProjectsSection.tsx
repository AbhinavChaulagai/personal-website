'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects, profileConfigs, accentClasses, ProfileType } from '@/lib/profileData'

interface ProjectsSectionProps {
  profileType: ProfileType
}

export default function ProjectsSection({ profileType }: ProjectsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const config = profileConfigs[profileType]
  const accent = accentClasses[config.accentColor]

  // Sort projects based on profile preference
  const sortedProjects = [...projects].sort((a, b) => {
    const aIdx = config.featuredProjects.indexOf(a.name)
    const bIdx = config.featuredProjects.indexOf(b.name)
    if (aIdx === -1 && bIdx === -1) return 0
    if (aIdx === -1) return 1
    if (bIdx === -1) return -1
    return aIdx - bIdx
  })

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className={`text-sm uppercase tracking-widest ${accent.text} mb-2`}>Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              className="group relative bg-[#141414] rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden flex flex-col"
              style={{
                boxShadow: 'none',
              }}
              whileHover={{
                boxShadow: `0 0 30px ${config.accentGlow}`,
                y: -4,
              }}
            >
              {/* Card header */}
              <div className="p-5 pb-3 flex items-center gap-3">
                <span className="text-3xl">{project.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-base leading-tight">{project.name}</h3>
                  <div className="flex items-center gap-3 mt-0.5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs ${accent.text} hover:underline`}
                      >
                        Live →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span>🐙</span> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="px-5 pb-4">
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech stack */}
              <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights (research mode shows more detail) */}
              {config.highlightResearch && (
                <div className="px-5 pb-5 mt-auto border-t border-white/5 pt-4">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${accent.text} mb-2`}>Highlights</p>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="text-gray-500 text-xs flex items-start gap-1.5">
                        <span className={accent.text}>·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}

          {/* View All Projects on GitHub */}
          <motion.a
            href="https://github.com/AbhinavChaulagai"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + sortedProjects.length * 0.12, duration: 0.5 }}
            className="group relative bg-[#141414] rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center min-h-[180px] cursor-pointer"
            whileHover={{
              boxShadow: `0 0 30px ${config.accentGlow}`,
              y: -4,
            }}
          >
            <span className="text-4xl mb-3">🐙</span>
            <p className="text-white font-semibold text-sm mb-1">View All Projects</p>
            <p className="text-gray-500 text-xs mb-4">github.com/AbhinavChaulagai</p>
            <span className={`text-xs px-4 py-1.5 rounded-full border ${accent.border} ${accent.text} transition-colors`}>
              See on GitHub →
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
