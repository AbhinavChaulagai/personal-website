import { NextRequest, NextResponse } from 'next/server'

const CHATBOT_API_URL = process.env.CHATBOT_API_URL // e.g. https://xxxx.ngrok-free.app

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 })
    }

    const validMessages = messages.filter(
      (m: unknown) =>
        typeof m === 'object' &&
        m !== null &&
        'role' in m &&
        'content' in m &&
        ((m as { role: string }).role === 'user' || (m as { role: string }).role === 'assistant')
    )

    if (!CHATBOT_API_URL) {
      return NextResponse.json({ error: 'Chatbot API URL not configured' }, { status: 503 })
    }

    const response = await fetch(`${CHATBOT_API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify({ messages: validMessages }),
    })

    if (!response.ok) {
      throw new Error(`Chatbot API returned ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json({ content: data.content })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
