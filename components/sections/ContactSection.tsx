'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profileConfigs, accentClasses, ProfileType } from '@/lib/profileData'

interface ContactSectionProps {
  profileType: ProfileType
}

const contactLinks = [
  {
    label: 'Email',
    value: 'chauab01@luther.edu',
    href: 'mailto:chauab01@luther.edu',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    value: 'github.com/AbhinavChaulagai',
    href: 'https://github.com/AbhinavChaulagai',
    icon: '🐙',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhinav-chaulagai',
    href: 'https://linkedin.com/in/abhinav-chaulagai',
    icon: '💼',
  },
]

export default function ContactSection({ profileType }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const config = profileConfigs[profileType]
  const accent = accentClasses[config.accentColor]

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className={`text-sm uppercase tracking-widest ${accent.text} mb-2`}>Say Hello</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg">
          Open to internships in AI/ML and software engineering. Let&apos;s build something together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="flex items-center gap-3 bg-[#141414] border border-white/10 hover:border-white/30 rounded-xl px-5 py-4 text-left transition-all duration-200 group"
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{link.label}</p>
                <p className="text-gray-200 text-sm group-hover:text-white transition-colors">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-gray-600 text-sm">
            Built with Next.js, Tailwind CSS & Framer Motion · &copy; {new Date().getFullYear()} Abhinav Chaulagai
          </p>
        </div>
      </motion.div>
    </section>
  )
}
