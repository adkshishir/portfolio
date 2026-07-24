import type { ReactNode } from 'react';
import { portfolioData } from '@/data/portfolio-data';

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      className='relative flex min-h-screen items-center overflow-hidden pb-20 pt-[120px]'
      aria-labelledby='hero-heading'>
      <div
        className='pointer-events-none absolute -right-[200px] -top-[200px] h-[600px] w-[600px] rounded-full'
        style={{
          background:
            'radial-gradient(circle, var(--crimson-soft) 0%, transparent 70%)',
        }}
        aria-hidden='true'
      />
      <div className='wrap grid items-center gap-[60px] md:grid-cols-[1.1fr_0.9fr]'>
        <div>
          <div className='mb-[18px] flex items-center gap-2.5 font-mono text-[13px] tracking-[0.03em] text-[var(--crimson)]'>
            <span
              className='inline-block h-2 w-2 rounded-full bg-[var(--crimson)] shadow-[0_0_0_4px_var(--crimson-soft)]'
              aria-hidden='true'
            />
            {personal.eyebrow}
          </div>
          <h1
            id='hero-heading'
            className='mb-5 font-serif text-[clamp(38px,5.5vw,64px)] font-semibold leading-[1.05] tracking-[-0.01em]'>
            {personal.name}
            <br />
            builds <em className='font-medium italic text-[var(--crimson)]'>full‑stack</em>{' '}
            systems that ship.
          </h1>
          <p className='mb-8 max-w-[480px] text-[17px] text-[var(--dim)]'>
            {personal.tagline}
          </p>
          <div className='flex flex-wrap gap-3.5'>
            <a href='#projects' className='btn btn-primary'>
              View Projects →
            </a>
            <a href='#contact' className='btn btn-ghost'>
              Get In Touch
            </a>
            <a
              href={personal.contact.cvPath}
              download='Shishir-Adhikari-CV.pdf'
              className='btn btn-ghost'>
              Download CV
            </a>
          </div>
        </div>

        <div className='code-window reveal' aria-hidden='true'>
          <div className='code-titlebar'>
            <div className='dot dot-r' />
            <div className='dot dot-y' />
            <div className='dot dot-g' />
            <span className='ml-2 font-mono text-xs text-[var(--dim)]'>
              whoami.ts
            </span>
          </div>
          <div className='px-5 py-[22px] font-mono text-[13.5px] leading-[1.85]'>
            <CodeLine n={1}>
              <span className='tok-kw'>const</span> developer = {'{'}
            </CodeLine>
            <CodeLine n={2}>
              &nbsp;&nbsp;name:{' '}
              <span className='tok-str'>&quot;{personal.name}&quot;</span>,
            </CodeLine>
            <CodeLine n={3}>
              &nbsp;&nbsp;role:{' '}
              <span className='tok-str'>&quot;{personal.title}&quot;</span>,
            </CodeLine>
            <CodeLine n={4}>
              &nbsp;&nbsp;based_in:{' '}
              <span className='tok-str'>&quot;{personal.contact.location}&quot;</span>,
            </CodeLine>
            <CodeLine n={5}>
              &nbsp;&nbsp;experience:{' '}
              <span className='tok-str'>&quot;{personal.yearsExperience} years&quot;</span>,
            </CodeLine>
            <CodeLine n={6}>
              &nbsp;&nbsp;stack: [
              <span className='tok-str'>&quot;React&quot;</span>,{' '}
              <span className='tok-str'>&quot;Next.js&quot;</span>,{' '}
              <span className='tok-str'>&quot;NestJS&quot;</span>,
            </CodeLine>
            <CodeLine n={7}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className='tok-str'>&quot;Node.js&quot;</span>,{' '}
              <span className='tok-str'>&quot;PostgreSQL&quot;</span>],
            </CodeLine>
            <CodeLine n={8}>
              &nbsp;&nbsp;currently:{' '}
              <span className='tok-str'>&quot;Infomation Care Pvt. Ltd.&quot;</span>,
            </CodeLine>
            <CodeLine n={9}>
              &nbsp;&nbsp;shipping: <span className='tok-kw'>true</span>
              <span className='cursor-blink' />
            </CodeLine>
            <CodeLine n={10}>{'}'};</CodeLine>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeLine({
  n,
  children,
}: {
  n: number;
  children: ReactNode;
}) {
  return (
    <div>
      <span className='inline-block w-[22px] select-none text-[#4a5160]'>{n}</span>
      {children}
    </div>
  );
}
