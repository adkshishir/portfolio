import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { portfolioData, siteUrl } from '@/data/portfolio-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const { personal, socialLinks, projects, knowsAbout, experience, education } =
  portfolioData;

const seoTitle = personal.seo.title;
const seoDescription = personal.seo.description;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f1115' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1115' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: '%s | Shishir Adhikari',
  },
  description: seoDescription,
  keywords: [...personal.seo.keywords],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  publisher: personal.name,
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
    siteName: `${personal.name} Portfolio`,
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${personal.name} — ${personal.title}`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} | ${personal.title}`,
    description: seoDescription,
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Portfolio Website',
};

const currentEmployer = experience.find((job) => job.current) ?? experience[0];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: personal.name,
      givenName: personal.givenName,
      familyName: personal.familyName,
      url: siteUrl,
      image: `${siteUrl}/images/shishir.jpeg`,
      sameAs: [
        socialLinks.github,
        socialLinks.linkedin,
        socialLinks.instagram,
        socialLinks.facebook,
      ],
      jobTitle: personal.title,
      worksFor: {
        '@id': `${siteUrl}/#employer`,
      },
      description: seoDescription,
      email: personal.contact.email,
      telephone: personal.contact.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pokhara',
        addressCountry: 'NP',
      },
      alumniOf: education.map((edu) => ({
        '@type': 'CollegeOrUniversity',
        name: edu.institution,
      })),
      knowsAbout: [...knowsAbout],
      hasOccupation: {
        '@type': 'Occupation',
        name: personal.title,
        occupationLocation: {
          '@type': 'City',
          name: 'Pokhara',
          addressCountry: 'NP',
        },
        skills: knowsAbout.join(', '),
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'professional',
        email: personal.contact.email,
        telephone: personal.contact.phoneDisplay,
        availableLanguage: ['English', 'Nepali', 'Hindi'],
      },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#employer`,
      name: currentEmployer.company,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pokhara',
        addressCountry: 'NP',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: `${personal.name} Portfolio`,
      description: seoDescription,
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: seoTitle,
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#person`,
      },
      description: seoDescription,
      inLanguage: 'en-US',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/og-image.jpg`,
      },
      breadcrumb: {
        '@id': `${siteUrl}/#breadcrumb`,
      },
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: [siteUrl],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#projects`,
      name: `Projects by ${personal.name}`,
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': project.schemaType,
          name: project.title,
          description: project.description,
          url: project.link,
          author: {
            '@id': `${siteUrl}/#person`,
          },
        },
      })),
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: `${personal.name} — Full Stack Development`,
      url: siteUrl,
      provider: {
        '@id': `${siteUrl}/#person`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Nepal',
      },
      serviceType: 'Full Stack Web Development',
      description: seoDescription,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`scroll-smooth ${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className='font-sans antialiased'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
