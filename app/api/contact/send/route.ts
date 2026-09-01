import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/mail';

export const runtime = 'nodejs';

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count += 1;
  return true;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 },
      );
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name.' },
        { status: 400 },
      );
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    if (!message || message.length < 5 || message.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please enter a message between 5 and 1000 characters.',
        },
        { status: 400 },
      );
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({
      success: true,
      message: "Sent! I'll reply to your email soon.",
    });
  } catch (error) {
    console.error('Contact email send error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Could not send your message. Please try again or email me directly.',
      },
      { status: 502 },
    );
  }
}
