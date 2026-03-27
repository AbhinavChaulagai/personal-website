import { notFound } from 'next/navigation'
import type { ProfileType } from '@/lib/profileData'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactSection from '@/components/sections/ContactSection'
import { profileConfigs } from '@/lib/profileData'
import FloatingChat from '@/components/FloatingChat'

const validTypes: ProfileType[] = ['ai-ml', 'software-engineer', 'recruiter', 'researcher', 'general']

interface PageProps {
  params: { type: string }
}

export async function generateStaticParams() {
  return validTypes.map((type) => ({ type }))
}

export default function ProfilePage({ params }: PageProps) {
  if (!validTypes.includes(params.type as ProfileType)) {
    notFound()
  }

  const profileType = params.type as ProfileType
  const config = profileConfigs[profileType]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar accentColor={config.accentColor} />
      <HeroSection profileType={profileType} />
      <ExperienceSection profileType={profileType} />
      <ProjectsSection profileType={profileType} />
      <SkillsSection profileType={profileType} />
      <ContactSection profileType={profileType} />
      <FloatingChat />
    </div>
  )
}
