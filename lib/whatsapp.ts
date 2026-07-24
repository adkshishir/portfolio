const GRAPH_API_VERSION = 'v21.0';

export function getWhatsAppConfig() {
  const phoneNumberId = process.env.PHONE_NUMBER_ID;
  const accessToken = process.env.ACCESS_TOKEN;
  const verifyToken = process.env.WHATSAPP_TOKEN;
  const businessNumber = process.env.WHATSAPP_NUMBER;
  const businessName = process.env.WHATSAPP_NAME || 'Shishir Adhikari';

  if (!phoneNumberId || !accessToken) {
    throw new Error('WhatsApp is not configured (missing PHONE_NUMBER_ID or ACCESS_TOKEN)');
  }

  return {
    phoneNumberId,
    accessToken,
    verifyToken,
    businessNumber,
    businessName,
  };
}

/** Normalize to digits only with country code (no +). */
export function normalizeWhatsAppNumber(input: string): string | null {
  const digits = input.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return null;
  return digits;
}

type WhatsAppPayload = Record<string, unknown>;

export async function sendWhatsAppMessage(payload: WhatsAppPayload) {
  const { phoneNumberId, accessToken } = getWhatsAppConfig();

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        ...payload,
      }),
    },
  );

  const data = (await res.json()) as {
    error?: { message?: string; code?: number; error_data?: { details?: string } };
    messages?: Array<{ id: string }>;
  };

  if (!res.ok) {
    const detail =
      data.error?.error_data?.details ||
      data.error?.message ||
      'WhatsApp API request failed';
    const err = new Error(detail) as Error & { code?: number };
    err.code = data.error?.code;
    throw err;
  }

  return data;
}

export async function sendWelcomeWithOptions(params: {
  to: string;
  name: string;
  message: string;
}) {
  const { businessName } = getWhatsAppConfig();
  const intro = params.message.trim()
    ? `Thanks for reaching out from my portfolio, ${params.name}!\n\nI received your message:\n"${params.message.trim()}"\n\nHow can I help you?`
    : `Hi ${params.name}! Thanks for contacting ${businessName} from the portfolio.\n\nHow can I help you?`;

  return sendWhatsAppMessage({
    to: params.to,
    type: 'interactive',
    interactive: {
      type: 'button',
      body: { text: intro.slice(0, 1024) },
      action: {
        buttons: [
          {
            type: 'reply',
            reply: { id: 'opt_hire', title: 'Hire / Freelance' },
          },
          {
            type: 'reply',
            reply: { id: 'opt_job', title: 'Full-time role' },
          },
          {
            type: 'reply',
            reply: { id: 'opt_chat', title: 'Just say hi' },
          },
        ],
      },
    },
  });
}

export async function sendTextMessage(to: string, body: string) {
  return sendWhatsAppMessage({
    to,
    type: 'text',
    text: { preview_url: false, body: body.slice(0, 4096) },
  });
}

export function replyForOption(optionId: string): string {
  const { businessName, businessNumber } = getWhatsAppConfig();
  const email = 'adhikarishishir50@gmail.com';

  switch (optionId) {
    case 'opt_hire':
      return `Great — I'm open to freelance and contract work.\n\nShare a short brief (timeline, budget range, and stack if you have one) here on WhatsApp and I'll reply personally.\n\nYou can also email ${email}.\n— ${businessName}`;
    case 'opt_job':
      return `Thanks for considering me for a full-time role.\n\nSend the role title, company, and JD (or a link) here and I'll get back to you soon.\n\nCV / portfolio: https://adhikarishishir.com.np\nEmail: ${email}\n— ${businessName}`;
    case 'opt_chat':
      return `Hey! Happy to chat.\n\nAsk me anything about projects, stack, or availability — I'll reply here on WhatsApp.\n— ${businessName}`;
    default:
      return `Thanks for your message. I'll reply here shortly.\n\nMeanwhile you can reach ${businessName}${businessNumber ? ` at ${businessNumber}` : ''} or ${email}.`;
  }
}

export type IncomingWhatsAppMessage = {
  from: string;
  type?: string;
  text?: { body?: string };
  interactive?: {
    type?: string;
    button_reply?: { id?: string; title?: string };
    list_reply?: { id?: string; title?: string };
  };
  button?: { payload?: string; text?: string };
};

export function extractIncomingMessages(body: unknown): IncomingWhatsAppMessage[] {
  const messages: IncomingWhatsAppMessage[] = [];
  const root = body as {
    entry?: Array<{
      changes?: Array<{
        value?: { messages?: IncomingWhatsAppMessage[] };
      }>;
    }>;
  };

  for (const entry of root.entry ?? []) {
    for (const change of entry.changes ?? []) {
      for (const msg of change.value?.messages ?? []) {
        messages.push(msg);
      }
    }
  }

  return messages;
}

export function getSelectedOptionId(msg: IncomingWhatsAppMessage): string | null {
  return (
    msg.interactive?.button_reply?.id ||
    msg.interactive?.list_reply?.id ||
    msg.button?.payload ||
    null
  );
}
