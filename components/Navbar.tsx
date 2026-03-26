'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { accentClasses } from '@/lib/profileData'

interface NavbarProps {
  accentColor: string
}

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ accentColor }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const accent = accentClasses[accentColor]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => router.push('/')}
            className="text-white font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <span className={accent.text}>AC</span>
            <span className="text-gray-400 text-sm ml-2 font-normal hidden sm:inline">Portfolio</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-gray-400 hover:text-white px-3 py-2 text-sm rounded-md transition-colors hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back link */}
          <button
            onClick={() => router.push('/')}
            className="hidden md:flex items-center gap-1 text-gray-500 hover:text-white text-sm transition-colors"
          >
            ← Back to profiles
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-transform ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-transform ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#141414] border-b border-white/5 px-4 py-3 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-gray-300 hover:text-white px-3 py-2 text-sm text-left rounded-md hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-white px-3 py-2 text-sm text-left"
          >
            ← Back to profiles
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
