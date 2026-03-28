# Abhinav Chaulagai — Portfolio

A Netflix-style personal portfolio website built with Next.js 14, Tailwind CSS, Framer Motion

## Features

- **Netflix-style profile selector** — 4 visitor profiles (AI/ML, Software Engineer, Recruiter, Researcher)
- **Custom portfolio views** — Each profile shows a tailored layout with relevant highlights
- **AI Chatbot** — Powered by Claude (`claude-opus-4-5`) to answer questions about Abhinav
- **Framer Motion animations** — Smooth scroll reveals, hover effects, page transitions
- **Fully responsive** — Mobile-first design
- **Dark theme** — `#0a0a0a` background with red/coral accents

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI**: Anthropic Claude API (`@anthropic-ai/sdk`)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-...
```

**How to get an Anthropic API key:**
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to **API Keys** → **Create Key**
4. Copy the key and paste it into `.env.local`

> Never commit `.env.local` to git. It's already in `.gitignore`.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Netflix-style profile selector
│   ├── globals.css        # Global styles
│   ├── profile/
│   │   └── [type]/
│   │       └── page.tsx   # Dynamic profile portfolio pages
│   └── api/
│       └── chat/
│           └── route.ts   # Anthropic API chat endpoint
├── components/
│   ├── Navbar.tsx
│   ├── ChatBot.tsx
│   ├── FloatingChat.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       └── ContactSection.tsx
├── lib/
│   └── profileData.ts     # All profile configs, projects, skills
├── .env.local.example
└── README.md
```

## Profile Types

| URL | Audience | Focus |
|-----|----------|-------|
| `/profile/ai-ml` | AI/ML Researchers | LLM internship, PyTorch, deception detection |
| `/profile/software-engineer` | Engineers | Full-stack projects, APIs, TypeScript |
| `/profile/recruiter` | Recruiters | Timeline, GPA, awards, download resume |
| `/profile/researcher` | Academics | CS+Math double major, research methodology |

## Chatbot

The `/api/chat` endpoint uses **Claude (`claude-opus-4-5`)** with a system prompt describing Abhinav's background. The chatbot answers in first person about:
- Projects and technical experience
- Education and academic honors
- Internship availability and contact info

---

## Future: Custom Chatbot Fine-Tuning

Want to replace the generic Claude model with a fine-tuned version trained on your own writing style and voice? Here's how:

### Step 1: Export Personal Data

Collect raw text that captures your voice:
- Emails you've written (export from Gmail as `.mbox`)
- LinkedIn posts, README files, project write-ups
- Chat logs (Slack, Discord exports)
- Personal blog posts, essays, cover letters

### Step 2: Format as JSONL

Convert each sample into a prompt-completion pair:

```jsonl
{"messages": [{"role": "user", "content": "Tell me about your MovieMatch project."}, {"role": "assistant", "content": "MovieMatch is a React Native app I built..."}]}
{"messages": [{"role": "user", "content": "Are you open to internships?"}, {"role": "assistant", "content": "Absolutely! I'm actively looking for..."}]}
```

Aim for 50–200 examples covering a range of question types.

### Step 3: Fine-Tune a Model

**Option A — OpenAI Fine-tuning API:**
```bash
openai api fine_tunes.create -t training_data.jsonl -m gpt-4o-mini
```

**Option B — Hugging Face (open source):**
```bash
pip install transformers datasets trl
python train.py --model mistralai/Mistral-7B-v0.1 --data training_data.jsonl
```

### Step 4: Swap the API Route

In `app/api/chat/route.ts`, replace the Claude call with your fine-tuned endpoint:

```ts
// Before (Claude)
const response = await client.messages.create({ model: 'claude-opus-4-5', ... })

// After (OpenAI fine-tuned)
const response = await openai.chat.completions.create({
  model: 'ft:gpt-4o-mini:your-org:your-model-id',
  messages,
})

// After (Hugging Face endpoint)
const response = await fetch('https://api-inference.huggingface.co/models/your-model', {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` },
  body: JSON.stringify({ inputs: messages }),
})
```

This gives you a chatbot that truly sounds like you — same vocabulary, sentence style, and personality.
