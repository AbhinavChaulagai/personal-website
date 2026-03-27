'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatBotProps {
  onClose: () => void
}

export default function ChatBot({ onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Abhinav's AI assistant. Ask me anything about his background, projects, or availability! 👋",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = { role: 'user', content: trimmed }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const apiMessages = [...messages, userMessage]
        .filter((m) => !(m.role === 'assistant' && m === messages[0]))
        .map((m) => ({ role: m.role, content: m.content }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      if (!res.ok) throw new Error('Request failed')

      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I couldn't connect right now. Please try again in a moment.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="bg-[#141414] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-sm">
            🤖
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Ask Abhinav anything</p>
            <p className="text-green-400 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              AI-powered
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white transition-colors text-lg leading-none"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-red-600 text-white rounded-br-sm'
                  : 'bg-[#252525] text-gray-200 rounded-bl-sm'
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-[#252525] px-4 py-3 rounded-xl rounded-bl-sm">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-white/10">
        <div className="flex items-center gap-2 bg-[#1f1f1f] rounded-xl px-3 py-2 border border-white/10 focus-within:border-white/25 transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. What projects have you built?"
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-600"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="text-white bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed px-3 py-1 rounded-lg text-xs font-medium transition-colors shrink-0"
          >
            Send
          </button>
        </div>
        <p className="text-gray-600 text-xs mt-1.5 text-center">
          Powered by Phi-4 · Answers represent Abhinav&apos;s background
        </p>
      </div>
    </div>
  )
}
