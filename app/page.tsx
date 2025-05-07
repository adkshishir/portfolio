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
    fetch('/cv.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'cv.pdf';
        alink.click();
      });
    });
  };

  return (
    <div className='relative min-h-screen bg-black text-white overflow-hidden'>
      {/* Network Animation Background */}
      <div className='fixed inset-0 z-0'>
        <NetworkAnimation />
      </div>

      {/* Social Media Sidebar */}
      <div className='fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6'>
        <Link
          href={portfolioData.socialLinks.instagram}
          target='_blank'
          aria-label='Instagram'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Instagram size={20} />
        </Link>
        <Link
          href={portfolioData.socialLinks.facebook}
          target='_blank'
          aria-label='Facebook'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Facebook size={20} />
        </Link>
        <Link
          href={portfolioData.socialLinks.linkedin}
          target='_blank'
          aria-label='LinkedIn'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Linkedin size={20} />
        </Link>
        <Link
          href={portfolioData.socialLinks.github}
          target='_blank'
          aria-label='GitHub'
          className='text-gray-400 hover:text-red-500 transition-colors'>
          <Github size={20} />
        </Link>
        <div className='h-20 w-[1px] bg-gray-700 mx-auto'></div>
      </div>

      {/* Logo */}
      <div className='fixed top-6 left-6 z-50'>
        <Link href='/' className=''>
          <span className=''>
            <span className='text-red-500'>
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={100}
                height={100}
              />
            </span>
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='fixed top-6 right-6 z-50 text-white'
        onClick={toggleMenu}
        aria-label='Toggle menu'>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={cn(
          'fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-500',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
        <ul className='flex flex-col items-center gap-8 text-xl'>
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={cn(
                  'capitalize hover:text-red-500 transition-colors',
                  activeSection === section ? 'text-red-500' : 'text-white'
                )}
                onClick={() => setIsMenuOpen(false)}>
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id='home' className='relative min-h-screen flex items-center'>
          <div className='container mx-auto grid md:grid-cols-2 gap-8 px-6'>
            <div className='flex flex-col justify-center z-10'>
              <motion.h1
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-xl md:text-2xl mb-8'>
                I&apos;m a{' '}
                <span className='text-red-500'>
                  {portfolioData.personal.title}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex gap-4'>
                <Button
                  className='bg-red-500 hover:bg-red-600 text-white border-none'
                  asChild>
                  <Link href='#contact'>Contact Me</Link>
                </Button>
                <Button
                  variant='outline'
                  className='border-red-500 text-red-500 '
                  asChild>
                  <Link href='#projects'>View Projects</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='relative hidden md:block'>
              <div className='relative w-full h-[500px]'>
                <Image
                  src='/images/hero-image.jpeg'
                  alt='Shishir Adhikari'
                  fill
                  className='object-cover rounded-md'
                  priority
                />
                <div className='absolute inset-0 bg-black/40 z-10'></div>
              </div>
            </motion.div>
          </div>

          <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center'>
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
        <section id='about' className='min-h-screen flex items-center py-20'>
          <div className='container mx-auto px-6'>
            <div className='mb-16 text-center'>
              <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                About <span className='text-red-500'>Me</span>
              </h2>
              <div className='w-20 h-1 bg-red-500 mx-auto'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='relative'>
                <div className='relative w-full h-[400px]'>
                  <Image
                    src='/images/shishir.jpeg'
                    alt='Shishir Adhikari - Coding'
                    fill
                    className='object-cover rounded-md'
                  />
                  <div className='absolute inset-0 border-2 border-red-500 rounded-md -translate-x-4 -translate-y-4 z-[-1]'></div>
                </div>
              </div>

              <div>
                <h3 className='text-2xl font-bold mb-4'>
                  {portfolioData.personal.title}
                </h3>
                <p className='text-gray-300 mb-6'>
                  {portfolioData.personal.profileSummary}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500'>
                      <Mail size={16} />
                    </span>
                    <p>{portfolioData.personal.contact.email}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500'>
                      <Phone size={16} />
                    </span>
                    <p>{portfolioData.personal.contact.phone}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500'>
                      <MapPin size={16} />
                    </span>
                    <p>{portfolioData.personal.contact.location}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-red-500'>
                      <Globe size={16} />
                    </span>
                    <p>{portfolioData.personal.contact.website}</p>
                  </div>
                </div>

                <Button
                  onClick={() => downloadCV()}
                  className='bg-red-500 z-50 hover:bg-red-600 text-white border-none'>
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className='min-h-screen flex items-center py-20'>
          <div className='container mx-auto px-6'>
            <div className='mb-16 text-center'>
              <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                My <span className='text-red-500'>Skills</span>
              </h2>
              <div className='w-20 h-1 bg-red-500 mx-auto'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>Technical Skills</h3>

                <div className='space-y-6'>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>JavaScript</span>
                      <span>90%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>React</span>
                      <span>85%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Node.js</span>
                      <span>80%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Nest.js</span>
                      <span>60%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '60%' }}></div>
                    </div>
                  </div>{' '}
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Mysql</span>
                      <span>70%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>TypeScript</span>
                      <span>75%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Next.js</span>
                      <span>85%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-2xl font-bold mb-6'>Professional Skills</h3>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
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
                    <span className='mt-4 font-medium'>Communication</span>
                  </div>

                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
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
                    <span className='mt-4 font-medium'>Problem Solving</span>
                  </div>

                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
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
                    <span className='mt-4 font-medium'>Teamwork</span>
                  </div>

                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
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
                    <span className='mt-4 font-medium'>Creativity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id='experience'
          className='min-h-screen flex items-center py-20'>
          <div className='container mx-auto px-6'>
            <div className='mb-16 text-center'>
              <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                Work <span className='text-red-500'>Experience</span>
              </h2>
              <div className='w-20 h-1 bg-red-500 mx-auto'></div>
            </div>

            <div className='space-y-12'>
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className='grid md:grid-cols-[1fr_3fr] gap-6'>
                  <div>
                    <div className='p-4 bg-gray-900 rounded-md border-l-4 border-red-500'>
                      <h3 className='text-xl font-bold'>{exp.company}</h3>
                      <p className='text-red-500'>{exp.position}</p>
                      <p className='text-gray-400 text-sm'>{exp.period}</p>
                    </div>
                  </div>
                  <div>
                    <ul className='space-y-3'>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className='flex items-start gap-2'>
                          <span className='text-red-500 mt-1'>•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='min-h-screen flex items-center py-20'>
          <div className='container mx-auto px-6'>
            <div className='mb-16 text-center'>
              <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                My <span className='text-red-500'>Projects</span>
              </h2>
              <div className='w-20 h-1 bg-red-500 mx-auto'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {portfolioData.projects.map((project, index) => (
                <div
                  key={index}
                  className='bg-gray-900 p-6 rounded-lg border-l-4 border-red-500 hover:transform hover:-translate-y-2 transition-transform duration-300'>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                  <Link
                    href={project.link}
                    target='_blank'
                    className='text-red-500 hover:text-red-400 flex items-center gap-2'>
                    View Project <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='min-h-screen flex items-center py-20'>
          <div className='container mx-auto px-6'>
            <div className='mb-16 text-center'>
              <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                Contact <span className='text-red-500'>Me</span>
              </h2>
              <div className='w-20 h-1 bg-red-500 mx-auto'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>Get In Touch</h3>
                <p className='text-gray-300 mb-8'>
                  Feel free to reach out to me for any questions or
                  opportunities. I'll try my best to get back to you as soon as
                  possible.
                </p>

                <div className='space-y-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center'>
                      <Mail className='text-red-500' size={20} />
                    </div>
                    <div>
                      <h4 className='font-medium'>Email</h4>
                      <p className='text-gray-300'>
                        {portfolioData.personal.contact.email}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center'>
                      <Phone className='text-red-500' size={20} />
                    </div>
                    <div>
                      <h4 className='font-medium'>Phone</h4>
                      <p className='text-gray-300'>
                        {portfolioData.personal.contact.phone}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center'>
                      <MapPin className='text-red-500' size={20} />
                    </div>
                    <div>
                      <h4 className='font-medium'>Location</h4>
                      <p className='text-gray-300'>
                        {portfolioData.personal.contact.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <input
                        type='text'
                        placeholder='Your Name'
                        className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500'
                      />
                    </div>
                    <div>
                      <input
                        type='email'
                        placeholder='Your Email'
                        className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500'
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type='text'
                      placeholder='Subject'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500'
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder='Your Message'
                      rows={6}
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500'></textarea>
                  </div>

                  <Button
                    type='submit'
                    className='bg-red-500 hover:bg-red-600 text-white border-none px-8 py-3'>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='py-8 border-t border-gray-800'>
        <div className='container mx-auto px-6 text-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
