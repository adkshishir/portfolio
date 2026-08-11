const GRAPH_API_VERSION = 'v21.0';

export function getWhatsAppConfig() {
  const phoneNumberId = process.env.PHONE_NUMBER_ID;
  const accessToken = process.env.ACCESS_TOKEN;
  const verifyToken = process.env.WHATSAPP_TOKEN;
  const businessNumber = process.env.WHATSAPP_NUMBER;
  const businessName = process.env.WHATSAPP_NAME || 'Shishir Adhikari';
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME;
  const templateLang = process.env.WHATSAPP_TEMPLATE_LANG || 'en';
  const defaultCountryCode = process.env.WHATSAPP_DEFAULT_COUNTRY_CODE;

  if (!phoneNumberId || !accessToken) {
    throw new Error('WhatsApp is not configured (missing PHONE_NUMBER_ID or ACCESS_TOKEN)');
  }

  return {
    phoneNumberId,
    accessToken,
    verifyToken,
    businessNumber,
    businessName,
    templateName,
    templateLang,
    defaultCountryCode,
  };
}

/**
 * Normalize to digits only with country code (no +).
 *
 * A bare national number (e.g. "9748769180") is not routable — Meta may accept
 * the send and then fail delivery asynchronously, which looks like "no reply".
 * If the input is not already in international form we prepend
 * WHATSAPP_DEFAULT_COUNTRY_CODE when configured, otherwise we reject it so the
 * form can tell the user what is wrong.
 */
export function normalizeWhatsAppNumber(input: string): string | null {
  const trimmed = input.trim();
  const isInternational = trimmed.startsWith('+') || trimmed.startsWith('00');

  let digits = trimmed.replace(/\D/g, '');
  if (trimmed.startsWith('00')) digits = digits.slice(2);

  if (!isInternational) {
    const cc = (process.env.WHATSAPP_DEFAULT_COUNTRY_CODE || '').replace(/\D/g, '');

    // Local formats commonly start with a trunk "0" that must be dropped.
    const national = digits.replace(/^0+/, '');

    if (cc && !digits.startsWith(cc)) {
      digits = cc + national;
    } else if (!cc && national.length <= 10) {
      // Looks like a national number with no country code and no default set.
      return null;
    } else {
      digits = national;
    }
  }

  if (digits.length < 11 || digits.length > 15) return null;
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

/**
 * Business-initiated sends (the website contact form) MUST use an approved
 * template. Text and interactive messages are free-form and are only delivered
 * inside the 24-hour customer service window, which opens only when the
 * customer messages us first — that is why the webhook path works and the
 * website path does not.
 *
 * Expected template (create + get approved in Meta Business Manager):
 *   name:     WHATSAPP_TEMPLATE_NAME  e.g. portfolio_contact
 *   language: WHATSAPP_TEMPLATE_LANG  e.g. en
 *   body:     Hi {{1}}, thanks for reaching out from my portfolio.
 *             I received your message: "{{2}}". Reply here and I'll get back
 *             to you personally.
 */
export async function sendContactTemplate(params: {
  to: string;
  name: string;
  message: string;
}) {
  const { templateName, templateLang } = getWhatsAppConfig();

  if (!templateName) {
    const err = new Error(
      'No WhatsApp template configured (WHATSAPP_TEMPLATE_NAME). Business-initiated messages require an approved template.',
    ) as Error & { code?: number };
    err.code = 132001;
    throw err;
  }

  // Template params cannot contain newlines or tabs, and must be non-empty.
  const clean = (v: string, max: number) =>
    v.replace(/\s+/g, ' ').trim().slice(0, max) || '-';

  return sendWhatsAppMessage({
    to: params.to,
    type: 'template',
    template: {
      name: templateName,
      language: { code: templateLang },
      components: [
        {
          type: 'body',
          parameters: [
            { type: 'text', text: clean(params.name, 60) },
            { type: 'text', text: clean(params.message, 600) },
          ],
        },
      ],
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

export type WhatsAppStatus = {
  id?: string;
  status?: string;
  recipient_id?: string;
  errors?: Array<{ code?: number; title?: string; message?: string }>;
};

/**
 * Meta reports undelivered sends asynchronously as `statuses` (not `messages`).
 * Without this, a send that Meta accepts but never delivers is silent.
 */
export function extractStatuses(body: unknown): WhatsAppStatus[] {
  const statuses: WhatsAppStatus[] = [];
  const root = body as {
    entry?: Array<{
      changes?: Array<{ value?: { statuses?: WhatsAppStatus[] } }>;
    }>;
  };

  for (const entry of root.entry ?? []) {
    for (const change of entry.changes ?? []) {
      for (const status of change.value?.statuses ?? []) {
        statuses.push(status);
      }
    }
  }

  return statuses;
}

export function getSelectedOptionId(msg: IncomingWhatsAppMessage): string | null {
  return (
    msg.interactive?.button_reply?.id ||
    msg.interactive?.list_reply?.id ||
    msg.button?.payload ||
    null
  );
}
