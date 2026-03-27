'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ChatBot from '@/components/ChatBot'

const profiles = [
  {
    id: 'ai-ml',
    label: 'AI / ML Researcher',
    emoji: '🤖',
    color: 'from-purple-600 to-purple-900',
    glow: 'rgba(147,51,234,0.5)',
    border: 'border-purple-500',
    description: 'LLM Engineering, PyTorch, Research',
  },
  {
    id: 'software-engineer',
    label: 'Software Engineer',
    emoji: '💻',
    color: 'from-blue-600 to-blue-900',
    glow: 'rgba(59,130,246,0.5)',
    border: 'border-blue-500',
    description: 'Full-Stack, React Native, APIs',
  },
  {
    id: 'recruiter',
    label: 'Recruiter',
    emoji: '📋',
    color: 'from-red-600 to-red-900',
    glow: 'rgba(229,9,20,0.5)',
    border: 'border-red-500',
    description: 'Resume, Timeline',
  },
  {
    id: 'researcher',
    label: 'Researcher',
    emoji: '🔬',
    color: 'from-emerald-600 to-emerald-900',
    glow: 'rgba(16,185,129,0.5)',
    border: 'border-emerald-500',
    description: 'CS + Math, Algorithms, Publications',
  },
  {
    id: 'general',
    label: 'Just Browsing',
    emoji: '👋',
    color: 'from-orange-600 to-orange-900',
    glow: 'rgba(249,115,22,0.5)',
    border: 'border-orange-500',
    description: 'General overview, all projects',
  },
]

export default function Home() {
  const router = useRouter()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [showChat, setShowChat] = useState(false)

  const handleSelect = (id: string) => {
    router.push(`/profile/${id}`)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 z-10"
      >
        <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3">Abhinav Chaulagai</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Who&apos;s visiting?
        </h1>
        <p className="text-gray-500 text-lg">Select your profile for a personalized experience</p>
      </motion.div>

      {/* Profile Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-6 z-10 max-w-4xl"
      >
        {profiles.map((profile, index) => (
          <motion.button
            key={profile.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setHoveredId(profile.id)}
            onHoverEnd={() => setHoveredId(null)}
            onClick={() => handleSelect(profile.id)}
            className={`
              relative w-44 md:w-48 group cursor-pointer
              bg-[#141414] rounded-xl overflow-hidden
              border-2 transition-all duration-300
              ${hoveredId === profile.id ? profile.border : 'border-gray-800'}
            `}
            style={{
              boxShadow: hoveredId === profile.id
                ? `0 0 30px ${profile.glow}, 0 20px 60px rgba(0,0,0,0.5)`
                : '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            {/* Card gradient top */}
            <div className={`h-32 bg-gradient-to-br ${profile.color} flex items-center justify-center relative`}>
              <span className="text-6xl drop-shadow-lg">{profile.emoji}</span>
              {/* Shimmer on hover */}
              <AnimatePresence>
                {hoveredId === profile.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/5"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Card content */}
            <div className="p-4 text-left">
              <p className="text-white font-semibold text-sm leading-tight mb-1">{profile.label}</p>
              <p className="text-gray-500 text-xs">{profile.description}</p>
            </div>

            {/* Hover label */}
            <AnimatePresence>
              {hoveredId === profile.id && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-2 text-center"
                >
                  <span className="text-white text-xs font-medium">View Portfolio →</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </motion.div>

      {/* Chat Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 z-10"
      >
        <button
          onClick={() => setShowChat(!showChat)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-full"
        >
          <span>💬</span>
          <span>Ask Abhinav anything</span>
        </button>
      </motion.div>

      {/* ChatBot */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
          >
            <ChatBot onClose={() => setShowChat(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
