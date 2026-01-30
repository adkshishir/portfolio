import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl =
  process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || 'https://adhikarishishir.com.np';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Shishir Adhikari | Full Stack Developer | React, Next.js, Node.js Expert',
    template: '%s | Shishir Adhikari - Software Developer',
  },
  description:
    'Shishir Adhikari is a passionate Full Stack Developer from Pokhara, Nepal with 3+ years of experience in React, Next.js, NestJS, Node.js, TypeScript, and modern web technologies. Hire me for your next web development project.',
  keywords: [
    'Shishir Adhikari',
    'Full Stack Developer',
    'Software Developer Nepal',
    'Web Developer Pokhara',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'NestJS Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Frontend Developer Nepal',
    'Backend Developer Nepal',
    'Freelance Web Developer Nepal',
    'Portfolio Website',
    'Hire Web Developer',
    'Nepal Software Engineer',
    'Pokhara Developer',
    'MERN Stack Developer',
    'Svelte Developer',
    'Tailwind CSS Developer',
    'REST API Developer',
    'MySQL Developer',
    'PostgreSQL Developer',
  ],
  authors: [{ name: 'Shishir Adhikari', url: siteUrl }],
  creator: 'Shishir Adhikari',
  publisher: 'Shishir Adhikari',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Shishir Adhikari Portfolio',
    title:
      'Shishir Adhikari | Full Stack Developer | React, Next.js, Node.js Expert',
    description:
      'Passionate Full Stack Developer from Nepal with expertise in React, Next.js, NestJS, and modern web technologies. View my portfolio, projects, and experience.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shishir Adhikari - Full Stack Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shishir Adhikari | Full Stack Developer',
    description:
      'Full Stack Developer from Nepal specializing in React, Next.js, NestJS, and modern web technologies. 3+ years of experience building scalable web applications.',
    images: ['/images/og-image.jpg'],
    creator: '@shishir0605',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual Google Search Console verification code
  },
  category: 'technology',
  classification: 'Portfolio Website',
};

// JSON-LD Structured Data for Person and WebSite
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Shishir Adhikari',
      givenName: 'Shishir',
      familyName: 'Adhikari',
      url: siteUrl,
      image: `${siteUrl}/images/shishir.jpeg`,
      sameAs: [
        'https://github.com/adkshishir',
        'https://www.linkedin.com/in/shishir-adhikari-917432254/',
        'https://www.instagram.com/shishir0605/',
        'https://www.facebook.com/shishir0605',
      ],
      jobTitle: 'Full Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Aarambha',
      },
      description:
        'Passionate Full Stack Developer with expertise in React, Next.js, NestJS, Node.js, and modern web technologies.',
      email: 'adhikarishishir50@gmail.com',
      telephone: '+977 9806680725',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pokhara',
        addressCountry: 'Nepal',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Prithivi Narayan Campus',
      },
      knowsAbout: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'NestJS',
        'Svelte',
        'Tailwind CSS',
        'MySQL',
        'PostgreSQL',
        'REST API',
        'Full Stack Development',
        'Web Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Shishir Adhikari Portfolio',
      description:
        'Portfolio website of Shishir Adhikari, Full Stack Developer from Nepal',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Shishir Adhikari | Full Stack Developer Portfolio',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#person`,
      },
      description:
        'Portfolio of Shishir Adhikari showcasing skills, experience, and projects in full stack web development.',
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: [siteUrl],
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#projects`,
      name: 'Projects by Shishir Adhikari',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'Poon Hill Treks',
            description:
              'A responsive travel information site focused on the famous Poonhill trek with interactive maps and trek itinerary planning features.',
            url: 'https://poonhill.adhikarishishir.com.np',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'SoftwareSourceCode',
            name: 'Med Tracker',
            description:
              'Backend system for tracking medication schedules and patient compliance with secure API endpoints.',
            url: 'https://github.com/the-null-pointers/medtracker-backend',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'SoftwareSourceCode',
            name: 'Local Talent',
            description:
              'Full-stack web application for local talent marketplace with secure API endpoints and user authentication.',
            url: 'https://github.com/adkshishir/localtalent-frontend',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'SoftwareSourceCode',
            name: 'E-commerce Backend',
            description:
              'Backend system for ecommerce business with secure API endpoints and e-sewa payment gateway integration.',
            url: 'https://github.com/adkshishir/ecommerce-backend-node',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='canonical' href={siteUrl} />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
