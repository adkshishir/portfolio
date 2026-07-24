import { NextResponse } from 'next/server';
import {
  normalizeWhatsAppNumber,
  sendWelcomeWithOptions,
} from '@/lib/whatsapp';

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
      phone?: string;
      message?: string;
    };

    const name = (body.name || '').trim();
    const phone = (body.phone || '').trim();
    const message = (body.message || '').trim();

    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name.' },
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

    const to = normalizeWhatsAppNumber(phone);
    if (!to) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Enter a valid WhatsApp number with country code (e.g. 9779748769180).',
        },
        { status: 400 },
      );
    }

    await sendWelcomeWithOptions({ to, name, message });

    return NextResponse.json({
      success: true,
      message:
        'Sent! Check WhatsApp for my automated reply with options — we can continue the conversation there.',
    });
  } catch (error) {
    console.error('WhatsApp send error:', error);

    const code = (error as { code?: number })?.code;
    const detail = error instanceof Error ? error.message : 'Failed to send';

    // Common Meta error when messaging someone who hasn't opted in / 24h window
    if (code === 131047 || /template|24.?hour|not a valid/i.test(detail)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'WhatsApp could not deliver yet. The recipient may need to message your business number first, or you may need an approved message template for business-initiated chats. Check Meta Business WhatsApp settings.',
          code,
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error:
          'Could not send WhatsApp message. Please try again or email me instead.',
      },
      { status: 502 },
    );
  }
}
