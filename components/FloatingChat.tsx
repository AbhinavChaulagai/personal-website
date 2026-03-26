'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatBot from './ChatBot'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-6 z-50 w-80 sm:w-96"
          >
            <ChatBot onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg flex items-center justify-center text-xl transition-colors"
        aria-label="Open chat"
        style={{ boxShadow: open ? '0 0 20px rgba(229,9,20,0.5)' : undefined }}
      >
        {open ? '✕' : '💬'}
      </motion.button>
    </>
  )
}
