import { SiteHeader } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { SiteFooter } from '@/components/sections/footer';
import { ScrollReveal } from '@/components/sections/scroll-reveal';

export default function Home() {
  return (
    <>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded focus:bg-[var(--crimson)] focus:px-4 focus:py-2 focus:text-white'>
        Skip to main content
      </a>
      <SiteHeader />
      <main id='main-content'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
      <ScrollReveal />
    </>
  );
}
