import nodemailer from 'nodemailer';

export function getMailConfig() {
  const host = process.env.MAIL_HOST;
  const port = Number.parseInt(process.env.MAIL_PORT || '587', 10);
  const user = process.env.MAIL_USER;
  const password = process.env.MAIL_PASSWORD;
  const from = process.env.MAIL_FROM || user;

  if (!host || !user || !password) {
    throw new Error('Mail is not configured (missing MAIL_HOST, MAIL_USER or MAIL_PASSWORD)');
  }

  return { host, port, user, password, from };
}

export async function sendContactEmail(params: {
  name: string;
  email: string;
  message: string;
}) {
  const { host, port, user, password, from } = getMailConfig();

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });

  await transporter.sendMail({
    from,
    to: user,
    replyTo: params.email,
    subject: `Portfolio contact from ${params.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="margin: 20px 0;">
          <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
          <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">
            <strong>${params.name}</strong><br>
            <a href="mailto:${params.email}" style="color: #ef4444;">${params.email}</a>
          </p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
          <div style="margin: 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px; white-space: pre-wrap;">
            ${params.message}
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This email was sent from the portfolio contact form.</p>
        </div>
      </div>
    `,
    text: `New Contact Form Submission\n\nFrom: ${params.name} (${params.email})\n\nMessage:\n${params.message}`,
  });
}
