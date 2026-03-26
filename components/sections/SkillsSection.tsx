'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, profileConfigs, accentClasses, ProfileType } from '@/lib/profileData'

interface SkillsSectionProps {
  profileType: ProfileType
}

const categoryLabels: Record<string, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  tools: 'Tools & Platforms',
  libraries: 'Libraries & ML',
}

const categoryEmojis: Record<string, string> = {
  languages: '⌨️',
  frameworks: '🧩',
  tools: '🔧',
  libraries: '📦',
}

export default function SkillsSection({ profileType }: SkillsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const config = profileConfigs[profileType]
  const accent = accentClasses[config.accentColor]

  // Order categories by profile preference
  const orderedCategories = config.featuredSkillCategories

  return (
    <section id="skills" className="py-24 px-4 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className={`text-sm uppercase tracking-widest ${accent.text} mb-2`}>Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Skills</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {orderedCategories.map((cat, i) => {
            const categorySkills = skills[cat as keyof typeof skills]
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="bg-[#141414] rounded-xl border border-white/10 p-5 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{categoryEmojis[cat]}</span>
                  <h3 className={`font-semibold text-sm uppercase tracking-wider ${accent.text}`}>
                    {categoryLabels[cat]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.05 + si * 0.03, duration: 0.3 }}
                      className="px-3 py-1.5 rounded-lg text-sm text-gray-300 bg-white/5 border border-white/10 hover:border-white/25 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
