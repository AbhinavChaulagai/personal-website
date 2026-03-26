import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `You are a helpful assistant representing Abhinav Chaulagai, a CS and Math student at Luther College (Expected May 2027, GPA 3.7). Answer questions about him in first person, friendly and concise.

Key facts:
- LLM Engineering Intern at Marching Ants (Sept 2024–Apr 2025): built PyTorch/transformer solutions for AI marketing automation
- IT Service Desk at Luther College (Nov 2025–present)
- Projects: MovieMatch (React Native, Supabase, TMDB API — Tinder-style movie matching), Multimodal Deception Detection System (PyTorch, CNN-LSTM, 82% accuracy), Meetpal (real-time chat app, live at meetpal.netlify.app)
- Skills: Python, Java, JavaScript, TypeScript, SQL, React, Node.js, Next.js, PyTorch, TensorFlow, AWS, GCP
- Honors: President's Scholarship, HackKU Winner, Dean's List
- Open to internships in AI/ML and software engineering
- Email: chauab01@luther.edu
- GitHub: github.com/AbhinavChaulagai
- LinkedIn: linkedin.com/in/abhinav-chaulagai`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 })
    }

    // Validate message format
    const validMessages = messages.filter(
      (m: unknown) =>
        typeof m === 'object' &&
        m !== null &&
        'role' in m &&
        'content' in m &&
        ((m as { role: string }).role === 'user' || (m as { role: string }).role === 'assistant')
    )

    const response = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: validMessages,
    })

    const textBlock = response.content.find((b) => b.type === 'text')
    const content = textBlock && textBlock.type === 'text' ? textBlock.text : 'Sorry, I had trouble responding.'

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
