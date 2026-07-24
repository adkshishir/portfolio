import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';

export function About() {
  const { personal } = portfolioData;

  return (
    <section id='about' className='section-block' aria-labelledby='about-heading'>
      <div className='wrap'>
        <div className='section-head'>
          <span className='section-num'>01</span>
          <h2 id='about-heading' className='font-serif text-[clamp(28px,3.5vw,38px)] font-semibold'>
            About
          </h2>
          <div className='section-line' />
        </div>
        <div className='grid gap-14 md:grid-cols-[0.8fr_1.2fr]'>
          <div className='reveal relative'>
            <Image
              src='/images/shishir.jpeg'
              alt='Shishir Adhikari, Senior Full Stack Developer'
              width={480}
              height={600}
              className='aspect-[4/5] w-full rounded-[10px] border border-[var(--line)] object-cover'
              priority
            />
          </div>
          <div className='reveal'>
            <p className='mb-[18px] text-base text-[var(--dim)]'>
              I&apos;m a{' '}
              <strong className='font-semibold text-[var(--text)]'>
                Senior Full Stack Developer
              </strong>{' '}
              with around{' '}
              <strong className='font-semibold text-[var(--text)]'>
                4 years of professional experience
              </strong>{' '}
              designing, building and deploying modern web applications — from
              public government data portals to healthcare systems and e‑commerce
              platforms.
            </p>
            <p className='mb-[18px] text-base text-[var(--dim)]'>
              I work primarily across the{' '}
              <strong className='font-semibold text-[var(--text)]'>
                MERN/PERN stack
              </strong>
              , building scalable backend systems with{' '}
              <strong className='font-semibold text-[var(--text)]'>
                NestJS, Node.js and Express
              </strong>
              , and responsive, accessible frontends with{' '}
              <strong className='font-semibold text-[var(--text)]'>
                React, Next.js, Tailwind CSS and Shadcn/ui
              </strong>
              . I care about clean architecture, performance, and code that&apos;s
              easy for the next developer to pick up.
            </p>
            <p className='mb-[18px] text-base text-[var(--dim)]'>
              Currently a Senior Full Stack Developer at{' '}
              <strong className='font-semibold text-[var(--text)]'>
                Infomation Care Pvt. Ltd.
              </strong>
              , previously shipping production work at Aarambha IT and Skybase
              Innovations.
            </p>
            <div className='mt-8 grid grid-cols-3 gap-4'>
              <Stat value={`${personal.yearsExperience}`} label='years experience' />
              <Stat value={`${personal.projectsShipped}`} label='projects shipped' />
              <Stat value={personal.companiesCount} label='companies' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className='rounded-lg border border-[var(--line)] bg-[var(--surface)] p-[18px]'>
      <b className='block font-serif text-[28px] text-[var(--crimson)]'>{value}</b>
      <span className='font-mono text-xs text-[var(--dim)]'>{label}</span>
    </div>
  );
}
