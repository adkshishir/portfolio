import { portfolioData } from '@/data/portfolio-data';

export function Experience() {
  return (
    <section
      id='experience'
      className='section-block'
      aria-labelledby='experience-heading'>
      <div className='wrap'>
        <div className='section-head'>
          <span className='section-num'>03</span>
          <h2
            id='experience-heading'
            className='font-serif text-[clamp(28px,3.5vw,38px)] font-semibold'>
            Experience
          </h2>
          <div className='section-line' />
        </div>

        {portfolioData.experience.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className='reveal grid gap-2 border-b border-[var(--line)] py-7 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-8'>
            <div className='font-mono text-[12.5px] text-[var(--dim)]'>
              <span className='mb-1.5 block text-[var(--crimson)]'>{job.period}</span>
              {job.location}
            </div>
            <div>
              <div className='mb-1 text-[17px] font-semibold text-[var(--text)]'>
                {job.position}
                {job.current && (
                  <span className='ml-2 inline-block align-middle rounded-[10px] bg-[var(--crimson-soft)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--crimson)]'>
                    current
                  </span>
                )}
              </div>
              <div className='mb-3.5 text-sm text-[var(--dim)]'>{job.company}</div>
              <ul className='list-none'>
                {job.responsibilities.map((item) => (
                  <li
                    key={item.title}
                    className='relative mb-2.5 pl-5 text-[14.5px] text-[var(--dim)] before:absolute before:left-0 before:top-0.5 before:text-xs before:text-[var(--crimson)] before:content-["▸"]'>
                    <b className='font-medium text-[var(--text)]'>{item.title}</b>
                    {' — '}
                    {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
