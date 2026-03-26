'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences, profileConfigs, accentClasses, ProfileType } from '@/lib/profileData'

interface ExperienceSectionProps {
  profileType: ProfileType
}

export default function ExperienceSection({ profileType }: ExperienceSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const config = profileConfigs[profileType]
  const accent = accentClasses[config.accentColor]

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className={`text-sm uppercase tracking-widest ${accent.text} mb-2`}>Career</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Experience</h2>

        {/* Education card */}
        <div className="mb-8">
          <div className="relative bg-[#141414] rounded-xl border border-white/10 p-6 hover:border-white/20 transition-colors">
            {config.showTimeline && (
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${accent.bg}`} />
            )}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-white font-semibold text-lg">B.A. Computer Science & Mathematics</h3>
                <p className={`${accent.text} font-medium`}>Luther College</p>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-sm">Aug 2025 – May 2028 (Expected)</span>
                <p className="text-gray-500 text-sm">Decorah, IA</p>
              </div>
            </div>
            <ul className="space-y-1">
              {[

                "Dean's List — multiple semesters",
                "President's Scholarship recipient",
                'HackKU Hackathon Winner',
                'Relevant coursework: Algorithms & Data Structures, Discrete Mathematics, Statistical Modeling, Machine Learning',
              ].map((item) => (
                <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className={`${accent.text} mt-1 shrink-0`}>▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="relative bg-[#141414] rounded-xl border border-white/10 p-6 hover:border-white/20 transition-colors"
            >
              {config.showTimeline && (
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${accent.bg}`} />
              )}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <p className={`${accent.text} font-medium`}>{exp.company}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className={`${accent.text} mt-1 shrink-0`}>▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
