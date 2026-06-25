export type ProfileType = 'ai-ml' | 'software-engineer' | 'recruiter' | 'researcher' | 'general'

export interface Project {
  name: string
  description: string
  tech: string[]
  highlights: string[]
  link?: string
  github?: string
  emoji: string
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export interface ProfileData {
  heroTitle: string
  heroSubtitle: string
  heroBadges: string[]
  accentColor: string
  accentGlow: string
  featuredProjects: string[]
  featuredSkillCategories: string[]
  showTimeline: boolean
  showDownloadResume: boolean
  highlightResearch: boolean
}

export const projects: Project[] = [
  {
    name: 'SafeStep',
    emoji: '🛡️',
    github: 'https://github.com/AbhinavChaulagai/SafeStep',
    description: 'Neighborhood safety platform analyzing 1.3M+ crime records across NYC and Chicago for real-time risk assessments.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Gemini API', 'MapLibre'],
    highlights: [
      'Analyzed 1.3M+ crime records across New York City and Chicago to generate real-time risk assessments',
      'Developed geospatial APIs with FastAPI, PostgreSQL, and PostGIS for interactive maps, neighborhood comparisons, and risk scoring',
      'Integrated Gemini 1.5 Flash to generate personalized safety briefings and safer-neighborhood recommendations',
    ],
  },
  {
    name: 'GameLens',
    emoji: '⚽',
    github: 'https://github.com/AbhinavChaulagai/GameLens',
    description: 'AI-powered football analytics platform tracking players, teams, and ball movement from match footage using YOLO11x and ByteTrack.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'YOLO11x', 'ByteTrack', 'Modal'],
    highlights: [
      'Tracked players, teams, and ball movement from match footage using YOLO11x and ByteTrack',
      'Implemented pitch mapping, team classification, heatmaps, and ball trajectory visualization for tactical insights',
      'Deployed GPU-accelerated inference on Modal with NVIDIA T4 instances for scalable video processing',
    ],
  },
  {
    name: 'MovieMatch',
    emoji: '🎬',
    github: 'https://github.com/AbhinavChaulagai/MovieMatch',
    description: 'Tinder-style mobile app where users swipe on movies and match with others who share their taste.',
    tech: ['React Native', 'Node.js', 'Express', 'TypeScript', 'Supabase', 'TMDB API'],
    highlights: [
      'Implemented JWT authentication and real-time match detection across 14+ REST API endpoints',
      'Engineered a genre-based recommendation engine using TMDB Discover API and collaborative filtering',
      'Designed a PostgreSQL schema on Supabase handling users, swipes, matches, and watchlists',
      'Compatibility scoring system that ranks matches by percentage of shared favorite films',
    ],
  },
  {
    name: 'Multimodal Deception Detection',
    emoji: '🧠',
    github: 'https://github.com/AbhinavChaulagai/Multimodal-Deception-Detection-System',
    description: 'AI system that detects deception in video testimony using multimodal deep learning (82% accuracy).',
    tech: ['PyTorch', 'Transformers', 'torchaudio', 'CNN-LSTM', 'OpenCV'],
    highlights: [
      '82% classification accuracy on held-out test sets',
      'CNN-LSTM architecture fusing audio, visual, and linguistic signals',
      'Trained on CASE II, Real-Life Trial, and LIAR datasets',
      'Custom attention mechanism for temporal modality alignment',
      'Benchmarked against BERT-only and CNN-only baselines',
    ],
  },
  {
    name: 'Meetpal',
    emoji: '💬',
    github: 'https://github.com/AbhinavChaulagai/meetpal',
    link: 'https://meetpal.netlify.app',
    description: 'Real-time chat application with rooms, live presence indicators, and persistent message history.',
    tech: ['Node.js', 'WebSockets', 'Netlify', 'Render'],
    highlights: [
      'Sub-100ms message delivery via WebSocket protocol',
      'Room-based chat with live presence indicators',
      'Persistent message history with scroll-back',
      'Deployed live at meetpal.netlify.app',
    ],
  },
]

export const experiences: Experience[] = [
  {
    role: 'LLM Engineering Intern',
    company: 'Bountisphere',
    period: 'June 2026 – Present',
    location: 'San Francisco, CA (Remote)',
    bullets: [
      'Built and fine-tuned LLM-based solutions using PyTorch and transformer architectures for AI-driven marketing automation, evaluating model outputs for accuracy, safety, and alignment with ethical content guidelines',
      'Designed and optimized prompts while integrating LLM APIs to improve output accuracy and brand consistency',
      'Evaluated and refined model performance through testing and error analysis to enhance reliability',
    ],
  },
  {
    role: 'Information Technology Service Desk',
    company: 'Luther College',
    period: 'Nov 2025 – Present',
    location: 'Decorah, IA',
    bullets: [
      'Provided technical support to students, faculty, and staff by troubleshooting hardware, software, and network connectivity issues to minimize disruption to daily operations',
      'Maintained and updated computer lab systems to ensure all devices and software remained current, functional, and ready for academic use across campus facilities',
      'Documented common technical issues and resolutions to build an internal knowledge base, improving team efficiency and reducing repeat troubleshooting time for recurring problems',
    ],
  },
]

export const skills = {
  languages: ['Java', 'Python', 'SQL (Postgres)', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  frameworks: ['TensorFlow', 'Next.js', 'Node.js', 'React', 'Django'],
  tools: ['PyTorch', 'Claude Code', 'Git', 'Google Cloud', 'GitHub Actions', 'AWS'],
  libraries: ['Keras', 'pandas', 'NumPy', 'Matplotlib', 'OpenCV'],
}

export const profileConfigs: Record<ProfileType, ProfileData> = {
  'ai-ml': {
    heroTitle: 'LLM Engineering Intern @ Bountisphere',
    heroSubtitle: 'Building intelligent systems at the intersection of language models, multimodal learning, and production ML.',
    heroBadges: ['PyTorch', 'Transformers', 'LLM Fine-tuning', 'YOLO11x'],
    accentColor: 'purple',
    accentGlow: 'rgba(147,51,234,0.4)',
    featuredProjects: ['GameLens', 'SafeStep', 'Multimodal Deception Detection'],
    featuredSkillCategories: ['libraries', 'frameworks', 'languages', 'tools'],
    showTimeline: false,
    showDownloadResume: false,
    highlightResearch: true,
  },
  'software-engineer': {
    heroTitle: 'Full-Stack Developer',
    heroSubtitle: 'Building fast, scalable applications from mobile to cloud — React, TypeScript, FastAPI, and modern APIs.',
    heroBadges: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'REST APIs'],
    accentColor: 'blue',
    accentGlow: 'rgba(59,130,246,0.4)',
    featuredProjects: ['SafeStep', 'MovieMatch', 'GameLens'],
    featuredSkillCategories: ['frameworks', 'languages', 'tools', 'libraries'],
    showTimeline: false,
    showDownloadResume: false,
    highlightResearch: false,
  },
  recruiter: {
    heroTitle: 'CS & Math Student — Luther College',
    heroSubtitle: 'Dean\'s List · President\'s Scholarship · HackKU Winner · LLM Engineering Intern @ Bountisphere.',
    heroBadges: ['Dean\'s List', 'HackKU Winner', 'President\'s Scholar'],
    accentColor: 'red',
    accentGlow: 'rgba(229,9,20,0.4)',
    featuredProjects: ['SafeStep', 'GameLens', 'MovieMatch'],
    featuredSkillCategories: ['languages', 'frameworks', 'tools', 'libraries'],
    showTimeline: true,
    showDownloadResume: true,
    highlightResearch: false,
  },
  researcher: {
    heroTitle: 'CS & Mathematics Double Major',
    heroSubtitle: 'Exploring algorithmic thinking, mathematical modeling, and applied ML research. Focused on computer vision and NLP.',
    heroBadges: ['CS + Math', 'Algorithms', 'Deep Learning', 'Computer Vision'],
    accentColor: 'emerald',
    accentGlow: 'rgba(16,185,129,0.4)',
    featuredProjects: ['GameLens', 'Multimodal Deception Detection', 'SafeStep'],
    featuredSkillCategories: ['libraries', 'languages', 'frameworks', 'tools'],
    showTimeline: false,
    showDownloadResume: false,
    highlightResearch: true,
  },
  general: {
    heroTitle: 'CS & Math Student · Developer · Builder',
    heroSubtitle: 'Hey! I\'m Abhinav — I build things with code. From full-stack apps to AI models, here\'s a look at what I\'ve been working on.',
    heroBadges: ['Full-Stack', 'AI / ML', 'Open Source', 'Student'],
    accentColor: 'orange',
    accentGlow: 'rgba(249,115,22,0.4)',
    featuredProjects: ['SafeStep', 'GameLens', 'MovieMatch', 'Multimodal Deception Detection'],
    featuredSkillCategories: ['languages', 'frameworks', 'tools', 'libraries'],
    showTimeline: true,
    showDownloadResume: false,
    highlightResearch: false,
  },
}

export const accentClasses: Record<string, {
  text: string
  bg: string
  border: string
  badge: string
  button: string
}> = {
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-600',
    border: 'border-purple-500',
    badge: 'bg-purple-900/40 text-purple-300 border border-purple-700',
    button: 'bg-purple-600 hover:bg-purple-700',
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-600',
    border: 'border-blue-500',
    badge: 'bg-blue-900/40 text-blue-300 border border-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  red: {
    text: 'text-red-400',
    bg: 'bg-red-600',
    border: 'border-red-500',
    badge: 'bg-red-900/40 text-red-300 border border-red-700',
    button: 'bg-red-600 hover:bg-red-700',
  },
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-600',
    border: 'border-emerald-500',
    badge: 'bg-emerald-900/40 text-emerald-300 border border-emerald-700',
    button: 'bg-emerald-600 hover:bg-emerald-700',
  },
  orange: {
    text: 'text-orange-400',
    bg: 'bg-orange-600',
    border: 'border-orange-500',
    badge: 'bg-orange-900/40 text-orange-300 border border-orange-700',
    button: 'bg-orange-600 hover:bg-orange-700',
  },
}
