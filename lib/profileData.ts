export type ProfileType = 'ai-ml' | 'software-engineer' | 'recruiter' | 'researcher'

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
    name: 'MovieMatch',
    emoji: '🎬',
    github: 'https://github.com/AbhinavChaulagai/MovieMatch',
    description: 'Tinder-style movie matching app — swipe to find films you and your friends both love.',
    tech: ['React Native', 'Node.js', 'TypeScript', 'Supabase', 'TMDB API'],
    highlights: [
      'JWT authentication with secure session management',
      'Genre-based recommendation engine',
      'Compatibility scoring algorithm for group preferences',
      '14+ REST API endpoints with full test coverage',
      'Real-time match notifications via Supabase subscriptions',
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
    name: 'AI Research Paper Assistant',
    emoji: '📄',
    github: 'https://github.com/AbhinavChaulagai/AI-Research-Paper-Assistant',
    description: 'AI-powered tool that helps researchers read, summarize, and query academic papers using LLMs.',
    tech: ['Python', 'LLM', 'NLP', 'Claude API'],
    highlights: [
      'Summarizes and extracts key findings from research papers',
      'Conversational Q&A over paper content using LLMs',
      'Designed for researchers and students to accelerate literature review',
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
    role: 'IT Service Desk Technician',
    company: 'Luther College',
    period: 'Nov 2025 – Present',
    location: 'Decorah, IA',
    bullets: [
      'Provide tier-1 and tier-2 technical support for faculty, staff, and students',
      'Diagnose and resolve hardware, software, and network issues',
      'Document solutions in the knowledge base to reduce repeat tickets',
    ],
  },
  {
    role: 'LLM Engineering Intern',
    company: 'Marching Ants',
    period: 'Sept 2024 – Apr 2025',
    location: 'Kathmandu, Nepal (Remote)',
    bullets: [
      'Built PyTorch/transformer pipeline for AI-driven marketing automation workflows',
      'Fine-tuned LLMs for domain-specific copywriting and campaign personalization',
      'Reduced inference latency by 30% through model quantization and batching',
      'Collaborated with product team to ship 3 production AI features',
    ],
  },
]

export const skills = {
  languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  frameworks: ['Next.js', 'React', 'React Native', 'Node.js', 'Django', 'TensorFlow'],
  tools: ['PyTorch', 'Git', 'AWS', 'GCP', 'GitHub Actions', 'Claude Code', 'Docker'],
  libraries: ['Keras', 'pandas', 'NumPy', 'Matplotlib', 'OpenCV', 'torchaudio', 'Transformers'],
}

export const profileConfigs: Record<ProfileType, ProfileData> = {
  'ai-ml': {
    heroTitle: 'LLM Engineering Intern @ Marching Ants',
    heroSubtitle: 'Building intelligent systems at the intersection of language models, multimodal learning, and production ML.',
    heroBadges: ['PyTorch', 'Transformers', 'LLM Fine-tuning', '82% Accuracy'],
    accentColor: 'purple',
    accentGlow: 'rgba(147,51,234,0.4)',
    featuredProjects: ['Multimodal Deception Detection', 'AI Research Paper Assistant', 'MovieMatch'],
    featuredSkillCategories: ['libraries', 'frameworks', 'languages', 'tools'],
    showTimeline: false,
    showDownloadResume: false,
    highlightResearch: true,
  },
  'software-engineer': {
    heroTitle: 'Full-Stack Developer',
    heroSubtitle: 'Building fast, scalable applications from mobile to cloud — React Native, Node.js, TypeScript, and modern APIs.',
    heroBadges: ['React Native', 'Node.js', 'TypeScript', 'Supabase', 'REST APIs'],
    accentColor: 'blue',
    accentGlow: 'rgba(59,130,246,0.4)',
    featuredProjects: ['MovieMatch', 'Meetpal', 'Multimodal Deception Detection'],
    featuredSkillCategories: ['frameworks', 'languages', 'tools', 'libraries'],
    showTimeline: false,
    showDownloadResume: false,
    highlightResearch: false,
  },
  recruiter: {
    heroTitle: 'CS & Math Student — Luther College',
    heroSubtitle: 'Dean\'s List · President\'s Scholarship · HackKU Winner · Open to internships in AI/ML and Software Engineering.',
    heroBadges: ['Dean\'s List', 'HackKU Winner', 'President\'s Scholar'],
    accentColor: 'red',
    accentGlow: 'rgba(229,9,20,0.4)',
    featuredProjects: ['MovieMatch', 'Multimodal Deception Detection', 'Meetpal'],
    featuredSkillCategories: ['languages', 'frameworks', 'tools', 'libraries'],
    showTimeline: true,
    showDownloadResume: true,
    highlightResearch: false,
  },
  researcher: {
    heroTitle: 'CS & Mathematics Double Major',
    heroSubtitle: 'Exploring algorithmic thinking, mathematical modeling, and applied ML research. Focused on deception detection and NLP.',
    heroBadges: ['CS + Math', 'Algorithms', 'Deep Learning', 'Statistical Modeling'],
    accentColor: 'emerald',
    accentGlow: 'rgba(16,185,129,0.4)',
    featuredProjects: ['Multimodal Deception Detection', 'MovieMatch', 'Meetpal'],
    featuredSkillCategories: ['libraries', 'languages', 'frameworks', 'tools'],
    showTimeline: false,
    showDownloadResume: false,
    highlightResearch: true,
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
}
