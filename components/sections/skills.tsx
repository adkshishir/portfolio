import { portfolioData } from '@/data/portfolio-data';

export function Skills() {
  return (
    <section id='skills' className='section-block' aria-labelledby='skills-heading'>
      <div className='wrap'>
        <div className='section-head'>
          <span className='section-num'>02</span>
          <h2 id='skills-heading' className='font-serif text-[clamp(28px,3.5vw,38px)] font-semibold'>
            Skills
          </h2>
          <div className='section-line' />
        </div>
        <div className='grid gap-10 md:grid-cols-2'>
          <div>
            {portfolioData.skillBars.map((skill) => (
              <div key={skill.label} className='mb-4'>
                <div className='mb-2 flex justify-between font-mono text-[13px]'>
                  <b className='font-medium text-[var(--text)]'>{skill.label}</b>
                  <span className='text-[var(--crimson)]'>{skill.percent}%</span>
                </div>
                <div className='skill-bar'>
                  <i style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className='mb-4 font-mono text-[12.5px] text-[var(--dim)]'>
              $ cat tools_and_platforms.txt
            </p>
            <div className='flex flex-wrap content-start gap-2.5'>
              {portfolioData.skillChips.map((chip) => (
                <span
                  key={chip}
                  className='rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 font-mono text-[12.5px] text-[var(--dim)] transition-colors hover:border-[var(--crimson)] hover:text-[var(--text)]'>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
