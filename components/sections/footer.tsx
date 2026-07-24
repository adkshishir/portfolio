import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className='border-t border-[var(--line)] py-8 text-center font-mono text-xs text-[var(--dim)]'>
      <div className='wrap flex flex-col items-center gap-3 sm:flex-row sm:justify-between'>
        <p>
          © {new Date().getFullYear()} Shishir Adhikari — Built with care in
          Pokhara, Nepal.
        </p>
        <Link
          href='/privacy'
          className='text-[var(--dim)] transition-colors hover:text-[var(--text)]'>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
