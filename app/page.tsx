'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import NetworkAnimation from '@/components/network-animation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio-data';
import ContactForm from '@/components/contact-form';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sections = [
    'home',
    'about',
    'skills',
    'experience',
    'projects',
    'contact',
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop - 100 &&
          scrollPosition < offsetTop + offsetHeight - 100
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadCV = () => {
    fetch('/cv-shishir.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Shishir-Adhikari-CV.pdf';
        alink.click();
      });
    });
  };

  return (
    <div className='relative min-h-screen bg-transparent text-white overflow-hidden'>
      {/* Network Animation Background */}
      <div className='fixed inset-0 -z-10 bg-black' aria-hidden='true'>
        <NetworkAnimation />
      </div>

      {/* Skip to main content for accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-red-500 focus:text-white focus:px-4 focus:py-2 focus:rounded'>
        Skip to main content
      </a>

      {/* Social Media Sidebar */}
      <aside
        className='fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6'
        aria-label='Social media links'>
        <Link
          href={portfolioData.socialLinks.instagram}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Follow Shishir Adhikari on Instagram'
          title='Instagram Profile'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Instagram size={20} />
        </Link>
        <Link
          href={portfolioData.socialLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Connect with Shishir Adhikari on Facebook'
          title='Facebook Profile'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Facebook size={20} />
        </Link>
        <Link
          href={portfolioData.socialLinks.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Connect with Shishir Adhikari on LinkedIn'
          title='LinkedIn Profile'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Linkedin size={20} />
        </Link>
        <Link
          href={portfolioData.socialLinks.github}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='View Shishir Adhikari GitHub projects'
          title='GitHub Profile'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Github size={20} />
        </Link>
        <div
          className='h-20 w-[1px] bg-gray-700 mx-auto'
          aria-hidden='true'></div>
      </aside>

      {/* Header with Logo */}
      <header className='fixed top-0 left-0 right-0 z-50'>
        <div className='flex justify-between items-center p-6'>
          <Link href='/' className='' title='Shishir Adhikari - Home'>
            <span className='sr-only'>Shishir Adhikari Portfolio Home</span>
            <Image
              src='/images/logo.png'
              alt='Shishir Adhikari Logo'
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <button
        className='fixed top-6 right-6 z-50 text-white'
        onClick={toggleMenu}
        aria-label={
          isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
        }
        aria-expanded={isMenuOpen}
        aria-controls='mobile-navigation'>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav
        id='mobile-navigation'
        role='navigation'
        aria-label='Main navigation'
        className={cn(
          'fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-500',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}>
        <ul className='flex flex-col items-center gap-8 text-xl'>
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={cn(
                  'capitalize hover:text-red-500 transition-colors',
                  activeSection === section ? 'text-red-500' : 'text-white',
                )}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === section ? 'page' : undefined}>
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main id='main-content'>
        {/* Hero Section */}
        <section
          id='home'
          className='relative min-h-screen flex items-center'
          aria-labelledby='hero-heading'>
          <div className='container mx-auto grid md:grid-cols-2 gap-8 px-6'>
            <div className='flex flex-col justify-center z-10'>
              <motion.h1
                id='hero-heading'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-5xl md:text-7xl font-bold mb-4'>
                <span className='text-red-500'>
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
                <span className='text-white'>
                  {' ' + portfolioData.personal.name.split(' ')[1]}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-xl md:text-2xl mb-8'>
                I&apos;m a{' '}
                <span className='text-red-500' itemProp='jobTitle'>
                  {portfolioData.personal.title}
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex gap-4'>
                <Button
                  className='bg-red-500 hover:bg-red-600 text-white border-none'
                  asChild>
                  <Link
                    href='#contact'
                    title='Contact Shishir Adhikari for web development projects'>
                    Contact Me
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  className='border-red-500 text-red-500 '
                  asChild>
                  <Link
                    href='#projects'
                    title='View Shishir Adhikari web development projects'>
                    View Projects
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='relative hidden md:block'>
              <figure className='relative w-full h-[500px]'>
                <Image
                  src='/images/hero-image.jpeg'
                  alt='Shishir Adhikari - Full Stack Developer from Nepal working on web applications'
                  fill
                  className='object-cover rounded-md'
                  priority
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
                <div
                  className='absolute inset-0 bg-black/40 z-10'
                  aria-hidden='true'></div>
              </figure>
            </motion.div>
          </div>

          <div
            className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center'
            aria-hidden='true'>
            <span className='text-sm text-gray-400 mb-2'>Scroll Down</span>
            <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className='w-1 h-1 bg-red-500 rounded-full mt-2'
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id='about'
          className='min-h-screen flex items-center py-20'
          aria-labelledby='about-heading'
          itemScope
          itemType='https://schema.org/Person'>
          <div className='container mx-auto px-6'>
            <header className='mb-16 text-center'>
              <h2
                id='about-heading'
                className='text-3xl md:text-5xl font-bold mb-4'>
                About <span className='text-red-500'>Me</span>
              </h2>
              <div
                className='w-20 h-1 bg-red-500 mx-auto'
                aria-hidden='true'></div>
            </header>

            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <figure className='relative'>
                <div className='relative w-full h-[400px]'>
                  <Image
                    src='/images/shishir.jpeg'
                    alt='Shishir Adhikari - Full Stack Web Developer based in Pokhara, Nepal'
                    fill
                    className='object-cover rounded-md'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    itemProp='image'
                  />
                  <div
                    className='absolute inset-0 border-2 border-red-500 rounded-md -translate-x-4 -translate-y-4 z-[-1]'
                    aria-hidden='true'></div>
                </div>
              </figure>

              <article>
                <h3 className='text-2xl font-bold mb-4' itemProp='jobTitle'>
                  {portfolioData.personal.title}
                </h3>
                <p className='text-gray-300 mb-6' itemProp='description'>
                  {portfolioData.personal.profileSummary}
                </p>

                <address className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 not-italic'>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500' aria-hidden='true'>
                      <Mail size={16} />
                    </span>
                    <a
                      href={`mailto:${portfolioData.personal.contact.email}`}
                      itemProp='email'
                      className='hover:text-red-500 transition-colors'>
                      {portfolioData.personal.contact.email}
                    </a>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500' aria-hidden='true'>
                      <Phone size={16} />
                    </span>
                    <a
                      href={`tel:${portfolioData.personal.contact.phone}`}
                      itemProp='telephone'
                      className='hover:text-red-500 transition-colors'>
                      {portfolioData.personal.contact.phone}
                    </a>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500' aria-hidden='true'>
                      <MapPin size={16} />
                    </span>
                    <span
                      itemProp='address'
                      itemScope
                      itemType='https://schema.org/PostalAddress'>
                      <span itemProp='addressLocality'>
                        {portfolioData.personal.contact.location}
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500' aria-hidden='true'>
                      <Globe size={16} />
                    </span>
                    <a
                      href={`https://${portfolioData.personal.contact.website}`}
                      itemProp='url'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-red-500 transition-colors'>
                      {portfolioData.personal.contact.website}
                    </a>
                  </div>
                </address>

                <Button
                  onClick={() => downloadCV()}
                  className='bg-red-500 z-50 hover:bg-red-600 text-white border-none'
                  aria-label='Download Shishir Adhikari CV Resume PDF'>
                  Download CV
                </Button>
              </article>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id='skills'
          className='min-h-screen flex items-center py-20'
          aria-labelledby='skills-heading'>
          <div className='container mx-auto px-6'>
            <header className='mb-16 text-center'>
              <h2
                id='skills-heading'
                className='text-3xl md:text-5xl font-bold mb-4'>
                My <span className='text-red-500'>Skills</span>
              </h2>
              <div
                className='w-20 h-1 bg-red-500 mx-auto'
                aria-hidden='true'></div>
              <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                Expertise in modern web development technologies including
                JavaScript, TypeScript, React, Next.js, Node.js, and more.
              </p>
            </header>

            <div className='grid md:grid-cols-2 gap-12'>
              <article>
                <h3 className='text-2xl font-bold mb-6'>Technical Skills</h3>

                <ul className='space-y-6' role='list'>
                  <li>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>JavaScript</span>
                      <span aria-label='90 percent proficiency'>90%</span>
                    </div>
                    <div
                      className='h-2 w-full bg-gray-700 rounded-full'
                      role='progressbar'
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='JavaScript skill level'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>React</span>
                      <span aria-label='85 percent proficiency'>85%</span>
                    </div>
                    <div
                      className='h-2 w-full bg-gray-700 rounded-full'
                      role='progressbar'
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='React skill level'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Node.js</span>
                      <span aria-label='80 percent proficiency'>80%</span>
                    </div>
                    <div
                      className='h-2 w-full bg-gray-700 rounded-full'
                      role='progressbar'
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='Node.js skill level'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>NestJS</span>
                      <span aria-label='60 percent proficiency'>60%</span>
                    </div>
                    <div
                      className='h-2 w-full bg-gray-700 rounded-full'
                      role='progressbar'
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='NestJS skill level'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '60%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>MySQL</span>
                      <span aria-label='70 percent proficiency'>70%</span>
                    </div>
                    <div
                      className='h-2 w-full bg-gray-700 rounded-full'
                      role='progressbar'
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='MySQL skill level'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '70%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>TypeScript</span>
                      <span aria-label='75 percent proficiency'>75%</span>
                    </div>
                    <div
                      className='h-2 w-full bg-gray-700 rounded-full'
                      role='progressbar'
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='TypeScript skill level'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Next.js</span>
                      <span aria-label='85 percent proficiency'>85%</span>
                    </div>
                    <div
                      className='h-2 w-full bg-gray-700 rounded-full'
                      role='progressbar'
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='Next.js skill level'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '85%' }}></div>
                    </div>
                  </li>
                </ul>
              </article>

              <article>
                <h3 className='text-2xl font-bold mb-6'>Professional Skills</h3>

                <div className='grid grid-cols-2 gap-6'>
                  <figure className='flex flex-col items-center'>
                    <div
                      className='relative w-32 h-32'
                      role='progressbar'
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='Communication skill 80 percent'>
                      <svg
                        className='w-full h-full'
                        viewBox='0 0 100 100'
                        aria-hidden='true'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='50.24'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>80%</span>
                      </div>
                    </div>
                    <figcaption className='mt-4 font-medium'>
                      Communication
                    </figcaption>
                  </figure>

                  <figure className='flex flex-col items-center'>
                    <div
                      className='relative w-32 h-32'
                      role='progressbar'
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='Problem Solving skill 90 percent'>
                      <svg
                        className='w-full h-full'
                        viewBox='0 0 100 100'
                        aria-hidden='true'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='25.12'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>90%</span>
                      </div>
                    </div>
                    <figcaption className='mt-4 font-medium'>
                      Problem Solving
                    </figcaption>
                  </figure>

                  <figure className='flex flex-col items-center'>
                    <div
                      className='relative w-32 h-32'
                      role='progressbar'
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='Teamwork skill 85 percent'>
                      <svg
                        className='w-full h-full'
                        viewBox='0 0 100 100'
                        aria-hidden='true'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='37.68'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>85%</span>
                      </div>
                    </div>
                    <figcaption className='mt-4 font-medium'>
                      Teamwork
                    </figcaption>
                  </figure>

                  <figure className='flex flex-col items-center'>
                    <div
                      className='relative w-32 h-32'
                      role='progressbar'
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='Creativity skill 80 percent'>
                      <svg
                        className='w-full h-full'
                        viewBox='0 0 100 100'
                        aria-hidden='true'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='50.24'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>80%</span>
                      </div>
                    </div>
                    <figcaption className='mt-4 font-medium'>
                      Creativity
                    </figcaption>
                  </figure>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id='experience'
          className='min-h-screen flex items-center py-20'
          aria-labelledby='experience-heading'>
          <div className='container mx-auto px-6'>
            <header className='mb-16 text-center'>
              <h2
                id='experience-heading'
                className='text-3xl md:text-5xl font-bold mb-4'>
                Work <span className='text-red-500'>Experience</span>
              </h2>
              <div
                className='w-20 h-1 bg-red-500 mx-auto'
                aria-hidden='true'></div>
              <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                Professional experience in full stack web development with
                companies across Nepal.
              </p>
            </header>

            <div
              className='space-y-12'
              role='list'
              aria-label='Work experience timeline'>
              {portfolioData.experience.map((exp, index) => (
                <article
                  key={index}
                  className='grid md:grid-cols-[1fr_3fr] gap-6'
                  itemScope
                  itemType='https://schema.org/OrganizationRole'
                  role='listitem'>
                  <div>
                    <div className='p-4 bg-gray-900 rounded-md border-l-4 border-red-500'>
                      <h3
                        className='text-xl font-bold'
                        itemProp='memberOf'
                        itemScope
                        itemType='https://schema.org/Organization'>
                        <span itemProp='name'>{exp.company}</span>
                      </h3>
                      <p className='text-red-500' itemProp='roleName'>
                        {exp.position}
                      </p>
                      <time
                        className='text-gray-400 text-sm'
                        itemProp='startDate'>
                        {exp.period}
                      </time>
                    </div>
                  </div>
                  <div>
                    <ul
                      className='space-y-3'
                      role='list'
                      aria-label={`Responsibilities at ${exp.company}`}>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className='flex items-start gap-2'>
                          <span
                            className='text-red-500 mt-1'
                            aria-hidden='true'>
                            •
                          </span>
                          <span itemProp='description'>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id='projects'
          className='min-h-screen flex items-center py-20'
          aria-labelledby='projects-heading'>
          <div className='container mx-auto px-6'>
            <header className='mb-16 text-center'>
              <h2
                id='projects-heading'
                className='text-3xl md:text-5xl font-bold mb-4'>
                My <span className='text-red-500'>Projects</span>
              </h2>
              <div
                className='w-20 h-1 bg-red-500 mx-auto'
                aria-hidden='true'></div>
              <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                Featured web development projects showcasing full stack
                applications built with React, Next.js, NestJS, and modern
                technologies.
              </p>
            </header>

            <div
              className='grid md:grid-cols-2 gap-8'
              role='list'
              aria-label='Portfolio projects'>
              {portfolioData.projects.map((project, index) => (
                <article
                  key={index}
                  className='bg-gray-900 p-6 rounded-lg border-l-4 border-red-500 hover:transform hover:-translate-y-2 transition-transform duration-300'
                  itemScope
                  itemType='https://schema.org/CreativeWork'
                  role='listitem'>
                  <h3 className='text-xl font-bold mb-2' itemProp='name'>
                    {project.title}
                  </h3>
                  <p className='text-gray-300 mb-4' itemProp='description'>
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-red-500 hover:text-red-400 flex items-center gap-2'
                    itemProp='url'
                    title={`View ${project.title} project`}
                    aria-label={`View ${project.title} project - opens in new tab`}>
                    View Project <span aria-hidden='true'>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id='contact'
          className='min-h-screen flex items-center py-20'
          aria-labelledby='contact-heading'>
          <div className='container mx-auto px-6'>
            <header className='mb-16 text-center'>
              <h2
                id='contact-heading'
                className='text-3xl md:text-5xl font-bold mb-4'>
                Contact <span className='text-red-500'>Me</span>
              </h2>
              <div
                className='w-20 h-1 bg-red-500 mx-auto'
                aria-hidden='true'></div>
              <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                Looking to hire a full stack developer in Nepal? Get in touch
                for web development projects, collaborations, or freelance work.
              </p>
            </header>

            <div className='grid md:grid-cols-2 gap-12'>
              <article>
                <h3 className='text-2xl font-bold mb-6'>Get In Touch</h3>
                <p className='text-gray-300 mb-8'>
                  Feel free to reach out to me for any questions or
                  opportunities. I&apos;ll try my best to get back to you as
                  soon as possible. I&apos;m available for freelance web
                  development projects and full-time positions.
                </p>

                <address className='space-y-6 not-italic'>
                  <div className='flex items-center gap-4'>
                    <div
                      className='w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center'
                      aria-hidden='true'>
                      <Mail className='text-red-500' size={20} />
                    </div>
                    <div>
                      <h4 className='font-medium'>Email</h4>
                      <a
                        href={`mailto:${portfolioData.personal.contact.email}`}
                        className='text-gray-300 hover:text-red-500 transition-colors'
                        aria-label={`Send email to ${portfolioData.personal.contact.email}`}>
                        {portfolioData.personal.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div
                      className='w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center'
                      aria-hidden='true'>
                      <Phone className='text-red-500' size={20} />
                    </div>
                    <div>
                      <h4 className='font-medium'>Phone</h4>
                      <a
                        href={`tel:${portfolioData.personal.contact.phone}`}
                        className='text-gray-300 hover:text-red-500 transition-colors'
                        aria-label={`Call ${portfolioData.personal.contact.phone}`}>
                        {portfolioData.personal.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div
                      className='w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center'
                      aria-hidden='true'>
                      <MapPin className='text-red-500' size={20} />
                    </div>
                    <div>
                      <h4 className='font-medium'>Location</h4>
                      <p className='text-gray-300'>
                        {portfolioData.personal.contact.location}
                      </p>
                    </div>
                  </div>
                </address>

                {/* Social Links for Contact Section */}
                <div className='mt-8'>
                  <h4 className='font-medium mb-4'>Connect with me</h4>
                  <nav className='flex gap-4' aria-label='Social media links'>
                    <Link
                      href={portfolioData.socialLinks.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/20 transition-colors'
                      aria-label='GitHub profile'
                      title='View GitHub Profile'>
                      <Github size={18} />
                    </Link>
                    <Link
                      href={portfolioData.socialLinks.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/20 transition-colors'
                      aria-label='LinkedIn profile'
                      title='Connect on LinkedIn'>
                      <Linkedin size={18} />
                    </Link>
                    <Link
                      href={portfolioData.socialLinks.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/20 transition-colors'
                      aria-label='Facebook profile'
                      title='Connect on Facebook'>
                      <Facebook size={18} />
                    </Link>
                    <Link
                      href={portfolioData.socialLinks.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/20 transition-colors'
                      aria-label='Instagram profile'
                      title='Follow on Instagram'>
                      <Instagram size={18} />
                    </Link>
                  </nav>
                </div>
              </article>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='py-8 border-t border-gray-800' role='contentinfo'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400'>
              &copy; {new Date().getFullYear()} {portfolioData.personal.name}.
              All rights reserved.
            </p>
            <nav className='flex gap-6' aria-label='Footer navigation'>
              <Link
                href='#about'
                className='text-gray-400 hover:text-red-500 transition-colors text-sm'>
                About
              </Link>
              <Link
                href='#projects'
                className='text-gray-400 hover:text-red-500 transition-colors text-sm'>
                Projects
              </Link>
              <Link
                href='#contact'
                className='text-gray-400 hover:text-red-500 transition-colors text-sm'>
                Contact
              </Link>
            </nav>
          </div>
          <div className='mt-4 text-center'>
            <p className='text-gray-500 text-xs'>
              Full Stack Developer | React | Next.js | Node.js | NestJS |
              TypeScript | Nepal
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
