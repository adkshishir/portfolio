'use client';

import { useState, type FormEvent } from 'react';
import { portfolioData } from '@/data/portfolio-data';

type Status = { type: 'idle' } | { type: 'error'; message: string };

export function Contact() {
  const { personal, socialLinks } = portfolioData;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name and a message.',
      });
      return;
    }

    const text = [
      `Hi, I'm ${trimmedName}.`,
      email.trim() ? `Email: ${email.trim()}` : null,
      '',
      trimmedMessage,
    ]
      .filter((line) => line !== null)
      .join('\n');

    const phoneDigits = personal.contact.phone.replace(/\D/g, '');
    const waUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;

    window.location.href = waUrl;
  }

  return (
    <section id='contact' className='section-block' aria-labelledby='contact-heading'>
      <div className='wrap'>
        <div className='reveal relative overflow-hidden rounded-[14px] border border-[var(--line)] bg-[var(--surface)] px-6 py-14 md:px-14'>
          <div
            className='pointer-events-none absolute -bottom-[150px] left-1/2 h-[300px] w-[500px] -translate-x-1/2'
            style={{
              background:
                'radial-gradient(circle, var(--blue-soft), transparent 70%)',
            }}
            aria-hidden='true'
          />

          <div className='relative mx-auto max-w-[560px] text-center'>
            <h2
              id='contact-heading'
              className='mb-3.5 font-serif text-[clamp(28px,3.5vw,38px)] font-semibold'>
              Let&apos;s build something.
            </h2>
            <p className='mx-auto mb-8 max-w-[440px] text-[var(--dim)]'>
              Send a message below — it&apos;ll open WhatsApp with your
              message ready to go.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className='relative mx-auto mb-10 grid max-w-[560px] gap-4 text-left'
            noValidate>
            <div>
              <label
                htmlFor='wa-name'
                className='mb-1.5 block font-mono text-[12px] text-[var(--dim)]'>
                Your name
              </label>
              <input
                id='wa-name'
                name='name'
                type='text'
                autoComplete='name'
                required
                minLength={2}
                maxLength={80}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full rounded-md border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 font-sans text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--dim)] focus:border-[var(--crimson)]'
                placeholder='Jane Doe'
              />
            </div>

            <div>
              <label
                htmlFor='wa-email'
                className='mb-1.5 block font-mono text-[12px] text-[var(--dim)]'>
                Your email (optional)
              </label>
              <input
                id='wa-email'
                name='email'
                type='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full rounded-md border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 font-sans text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--dim)] focus:border-[var(--crimson)]'
                placeholder='jane@example.com'
              />
            </div>

            <div>
              <label
                htmlFor='wa-message'
                className='mb-1.5 block font-mono text-[12px] text-[var(--dim)]'>
                Initial message
              </label>
              <textarea
                id='wa-message'
                name='message'
                required
                minLength={5}
                maxLength={1000}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='w-full resize-y rounded-md border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 font-sans text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--dim)] focus:border-[var(--crimson)]'
                placeholder='Hi Shishir — I have a project idea…'
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary w-full justify-center'>
              Message on WhatsApp →
            </button>

            {status.type === 'error' && (
              <p
                role='alert'
                className='rounded-md border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 font-mono text-[12.5px] text-[#e5555a]'>
                {status.message}
              </p>
            )}
          </form>

          <div className='relative flex flex-wrap justify-center gap-3.5'>
            <a
              href={`mailto:${personal.contact.email}`}
              className='btn btn-ghost'>
              Email Me →
            </a>
            <a
              href={personal.contact.cvPath}
              download='Shishir-Adhikari-CV.pdf'
              className='btn btn-ghost'>
              Download CV
            </a>
          </div>

          <div className='relative mt-9 flex flex-wrap justify-center gap-4'>
            <SocialLink href={socialLinks.github} label='GitHub' />
            <SocialLink href={socialLinks.linkedin} label='LinkedIn' />
            <SocialLink href={socialLinks.facebook} label='Facebook' />
            <SocialLink href={socialLinks.instagram} label='Instagram' />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`${label} profile`}
      className='rounded-md border border-[var(--line)] px-[18px] py-2.5 font-mono text-[13px] text-[var(--dim)] transition-colors hover:border-[var(--dim)] hover:text-[var(--text)]'>
      {label}
    </a>
  );
}
