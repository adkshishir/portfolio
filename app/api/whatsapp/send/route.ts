import { NextResponse } from 'next/server';
import {
  normalizeWhatsAppNumber,
  sendContactTemplate,
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
            'Enter a valid WhatsApp number including the country code (e.g. 9779748769180).',
        },
        { status: 400 },
      );
    }

    // Business-initiated: must be an approved template, not a free-form
    // text/interactive message. The interactive options menu is sent by the
    // webhook once they reply, which opens the 24h customer service window.
    await sendContactTemplate({ to, name, message });

    return NextResponse.json({
      success: true,
      message:
        'Sent! Check WhatsApp for my reply, then reply there and I\'ll follow up personally.',
    });
  } catch (error) {
    console.error('WhatsApp send error:', error);

    const code = (error as { code?: number })?.code;
    const detail = error instanceof Error ? error.message : 'Failed to send';

    // Template missing / not approved / wrong language / wrong param count.
    if (code === 132000 || code === 132001 || code === 132005 || code === 132007) {
      console.error(
        'WhatsApp template rejected — check WHATSAPP_TEMPLATE_NAME/LANG and that the template is APPROVED with exactly 2 body params.',
      );
      return NextResponse.json(
        {
          success: false,
          error:
            'Message service is misconfigured right now. Please email me instead and I\'ll reply personally.',
          code,
        },
        { status: 502 },
      );
    }

    // Recipient is not on WhatsApp, or the number is not reachable.
    if (code === 131026 || code === 131030 || /not a valid|not exist/i.test(detail)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'That number does not appear to be on WhatsApp. Double-check the country code and try again.',
          code,
        },
        { status: 400 },
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
