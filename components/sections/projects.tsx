'use client';

import { useMemo, useState } from 'react';
import { portfolioData } from '@/data/portfolio-data';

type TabId = (typeof portfolioData.projectTabs)[number]['id'];

export function Projects() {
  const [activeTab, setActiveTab] = useState<TabId>('all');

  const filtered = useMemo(() => {
    if (activeTab === 'all') return portfolioData.projects;
    return portfolioData.projects.filter(
      (project) => project.category === activeTab,
    );
  }, [activeTab]);

  return (
    <section
      id='projects'
      className='section-block'
      aria-labelledby='projects-heading'>
      <div className='wrap'>
        <div className='section-head'>
          <span className='section-num'>04</span>
          <h2
            id='projects-heading'
            className='font-serif text-[clamp(28px,3.5vw,38px)] font-semibold'>
            Projects
          </h2>
          <div className='section-line' />
        </div>

        <div
          role='tablist'
          aria-label='Project categories'
          className='mb-8 flex flex-wrap gap-2'>
          {portfolioData.projectTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type='button'
                role='tab'
                aria-selected={isActive}
                id={`project-tab-${tab.id}`}
                aria-controls='project-tab-panel'
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md border px-4 py-2 font-mono text-[13px] transition-colors ${
                  isActive
                    ? 'border-[var(--crimson)] bg-[var(--crimson-soft)] text-[var(--crimson)]'
                    : 'border-[var(--line)] bg-[var(--surface)] text-[var(--dim)] hover:border-[var(--dim)] hover:text-[var(--text)]'
                }`}>
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          role='tabpanel'
          id='project-tab-panel'
          aria-labelledby={`project-tab-${activeTab}`}
          className='grid gap-5 md:grid-cols-2'>
          {filtered.map((project) => (
            <article
              key={project.title}
              className='card flex flex-col rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-[26px] transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-[var(--crimson)]'>
              <div className='mb-3.5 flex items-start justify-between gap-3'>
                <h3 className='font-serif text-xl font-semibold'>
                  {project.title}
                </h3>
                <span className='whitespace-nowrap rounded-[5px] border border-[var(--blue-soft)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--blue)]'>
                  {project.tag}
                </span>
              </div>
              <p className='mb-4 flex-1 text-sm text-[var(--dim)]'>
                {project.description}
              </p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 font-mono text-[12.5px] text-[var(--crimson)] transition-[gap] hover:gap-2.5'>
                View Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
