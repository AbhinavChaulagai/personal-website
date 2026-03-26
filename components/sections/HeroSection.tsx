'use client'

import { motion } from 'framer-motion'
import { ProfileType, profileConfigs, accentClasses } from '@/lib/profileData'

interface HeroSectionProps {
  profileType: ProfileType
}

const profileEmojis: Record<ProfileType, string> = {
  'ai-ml': '🤖',
  'software-engineer': '💻',
  recruiter: '📋',
  researcher: '🔬',
}

export default function HeroSection({ profileType }: HeroSectionProps) {
  const config = profileConfigs[profileType]
  const accent = accentClasses[config.accentColor]

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${config.accentGlow} 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-4xl w-full mx-auto text-center z-10">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mb-8 inline-block"
        >
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mx-auto text-5xl md:text-6xl"
            style={{ background: `radial-gradient(circle, ${config.accentGlow} 0%, #1f1f1f 100%)`, border: `2px solid ${config.accentGlow}` }}
          >
            {profileEmojis[profileType]}
          </div>
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3"
        >
          Abhinav Chaulagai
        </motion.p>

        {/* Hero title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
        >
          {config.heroTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {config.heroSubtitle}
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {config.heroBadges.map((badge) => (
            <span key={badge} className={`px-3 py-1 rounded-full text-sm font-medium ${accent.badge}`}>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className={`${accent.button} text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg`}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Get in Touch
          </button>
          {config.showDownloadResume && (
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100"
            >
              📄 Download Resume
            </a>
          )}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
