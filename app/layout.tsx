import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhinav Chaulagai — Portfolio',
  description: 'CS & Math student at Luther College. AI/ML researcher, full-stack developer. Open to internships.',
  keywords: ['Abhinav Chaulagai', 'portfolio', 'AI', 'ML', 'software engineer', 'Luther College'],
  authors: [{ name: 'Abhinav Chaulagai' }],
  openGraph: {
    title: 'Abhinav Chaulagai — Portfolio',
    description: 'CS & Math student at Luther College. AI/ML researcher, full-stack developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
