'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { portfolioData } from '@/data/portfolio-data';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className='fixed left-0 right-0 top-0 z-[100] border-b border-[var(--line)] bg-[rgba(15,17,21,0.85)] backdrop-blur-[10px]'>
      <nav
        className='mx-auto flex max-w-[1080px] items-center justify-between px-7 py-[18px]'
        aria-label='Primary'>
        <a href='/' className='font-mono text-[15px] font-semibold text-[var(--text)]'>
          shishir<span className='text-[var(--crimson)]'>.</span>dev
        </a>

        <div className='hidden gap-7 font-mono text-[13px] text-[var(--dim)] md:flex'>
          {portfolioData.nav.map((item) => (
            <a
              key={item.href}
              href={navHref(item.href)}
              className='relative transition-colors hover:text-[var(--text)]'>
              <span className='mr-1 text-[var(--crimson)]'>{item.index}</span>
              {item.label}
            </a>
          ))}
        </div>

        <button
          type='button'
          className='flex h-[38px] w-[38px] items-center justify-center rounded-md border border-[var(--line)] font-mono text-[var(--text)] md:hidden'
          aria-expanded={open}
          aria-controls='mobile-nav'
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}>
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div
          id='mobile-nav'
          className='border-t border-[var(--line)] bg-[var(--bg)] px-7 py-4 md:hidden'>
          <div className='flex flex-col gap-4 font-mono text-[13px] text-[var(--dim)]'>
            {portfolioData.nav.map((item) => (
              <a
                key={item.href}
                href={navHref(item.href)}
                className='transition-colors hover:text-[var(--text)]'
                onClick={() => setOpen(false)}>
                <span className='mr-1 text-[var(--crimson)]'>{item.index}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
