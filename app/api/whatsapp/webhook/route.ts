import { NextResponse } from 'next/server';
import {
  extractIncomingMessages,
  getSelectedOptionId,
  getWhatsAppConfig,
  replyForOption,
  sendTextMessage,
  sendWelcomeWithOptions,
} from '@/lib/whatsapp';

export const runtime = 'nodejs';

/** Meta webhook verification */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  let verifyToken: string | undefined;
  try {
    verifyToken = getWhatsAppConfig().verifyToken;
  } catch {
    return new NextResponse('WhatsApp not configured', { status: 500 });
  }

  if (mode === 'subscribe' && token && challenge && token === verifyToken) {
    return new NextResponse(challenge, { status: 200 });
  }

  return new NextResponse('Forbidden', { status: 403 });
}

/** Incoming messages — auto-reply with options / option responses */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = extractIncomingMessages(body);

    for (const msg of messages) {
      const from = msg.from;
      if (!from) continue;

      const optionId = getSelectedOptionId(msg);
      if (optionId) {
        await sendTextMessage(from, replyForOption(optionId));
        continue;
      }

      const text = msg.text?.body?.trim() || '';
      // First free-text message (or any text): send menu again so they get options
      await sendWelcomeWithOptions({
        to: from,
        name: 'there',
        message: text || 'Hi',
      });
    }

    // Always 200 so Meta does not retry endlessly
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    return NextResponse.json({ success: true });
  }
}
