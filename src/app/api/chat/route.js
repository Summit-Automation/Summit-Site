import { NextResponse } from 'next/server';
import { rateLimit, getClientIP } from '@/lib/rateLimit';

// HTML escape function to prevent XSS
const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

export async function POST(request) {
  try {
    // Rate limiting - 10 chat messages per 5 minutes per IP
    const clientIP = getClientIP(request);
    const rateLimitResult = rateLimit(`chat_${clientIP}`, 10, 5 * 60 * 1000);

    if (!rateLimitResult.success) {
      return NextResponse.json({
        error: rateLimitResult.message
      }, {
        status: 429,
        headers: { 'Retry-After': rateLimitResult.retryAfter.toString() }
      });
    }

    const { question } = await request.json();

    // Input validation
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    // Message length validation
    if (question.length < 1 || question.length > 1000) {
      return NextResponse.json({
        error: 'Message must be between 1 and 1000 characters'
      }, { status: 400 });
    }

    // Environment variable check
    if (!process.env.FLOWISE_API_URL || !process.env.FLOWISE_CHATBOT_ID) {
      console.error('Missing Flowise configuration');
      return NextResponse.json({ error: 'Chat service unavailable' }, { status: 500 });
    }

    // Sanitize input
    const sanitizedQuestion = escapeHtml(question.trim());

    // Construct Flowise API URL
    const flowiseUrl = `${process.env.FLOWISE_API_URL}/${process.env.FLOWISE_CHATBOT_ID}`;

    // Forward request to Flowise API
    const flowiseResponse = await fetch(flowiseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: sanitizedQuestion,
      }),
    });

    if (!flowiseResponse.ok) {
      console.error('Flowise API error:', flowiseResponse.status, flowiseResponse.statusText);
      return NextResponse.json({
        error: 'Chat service temporarily unavailable'
      }, { status: 503 });
    }

    const flowiseData = await flowiseResponse.json();

    // Validate and sanitize response
    if (!flowiseData.text) {
      return NextResponse.json({
        error: 'Invalid response from chat service'
      }, { status: 502 });
    }

    // Return sanitized response
    return NextResponse.json({
      text: flowiseData.text,
      sessionId: flowiseData.sessionId || null
    }, { status: 200 });

  } catch (error) {
    console.error('Chat API error:', error.message);

    // Return user-friendly error message without exposing server details
    return NextResponse.json({
      error: 'Chat service is currently unavailable. Please try again later.'
    }, { status: 500 });
  }
}