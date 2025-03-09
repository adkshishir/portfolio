import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shishir Adhikari',
  description: 'This website belongs to shishir adhikari',
  keywords: [
    'Shishir',
    'Shishir Adhikari',
    'React',
    'React Developer',
    'Full Stack Developer',
    'Web Developer',
    'Adhikari Shishir',
    'adkshishir',
    'Best Full Stack Developer in Nepal',
    '',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Shishir Adhikari',
    description: 'This website belongs to Shishir Adhikari',
    siteName: 'Shishir Adhikari',
    images: [
      {
        url: '/images/shishir.jpeg',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shishir Adhikari',
    url: 'https://adhikarishishir.com.np',
    image: 'https://adhikarishishir.com.np/images/shishir.jpeg',
    sameAs: [
      'https://www.linkedin.com/in/shishir-adhikari-917432254',
      'https://github.com/adkshishir',
      'https://www.facebook.com/shishir0605',
      'https://www.instagram.com/shishir0605'
    ],
    jobTitle: 'Full Stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Aarambha IT RESEARCH PVT. LTD.'
    },
  };
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "qlgz3do11c");
          `,
          }}></script>
        
        <script type='application/ld+json'>{JSON.stringify(jsonLdData)}</script>
        <title>Shishir Adhikari</title>
        {/*main css file should not be removed */}
        <link rel='stylesheet' href='/css/index.css' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js'></script>
        {/*main css file*/}
      </head>
      <body className={inter.className}>
        <div id='all'>
          {/*mouse  follower*/}
          <div className='cursor' />
          {/*mouse  follower*/}
          {/*loader*/}
          <div id='loader'>
            <span className='color'>Shishir</span>Adhikari
          </div>
          {/*loader-end*/}
          {/*link-screen*/}
          <div id='breaker'></div>
          <div id='breaker-two'></div>

          {/*link-screen*/}
          {/*Main-Section*/}
          {/*Navigator-fullscreen*/}
          <div id='navigation-content'>
            <div className='logo'>
              <img src='/images/logo.png' alt='logo' />
            </div>
            <div className='navigation-close'>
              <span className='close-first' />
              <span className='close-second' />
            </div>
            <div className='navigation-links'>
              <a href='/' data-text='HOME' id='home-link'>
                HOME
              </a>
              <Link href='/about' data-text='ABOUT' id='about-link'>
                ABOUT
              </Link>
              <Link href='/blog' data-text='BLOG' id='blog-link'>
                BLOG
              </Link>
              <Link href='/portfolio' data-text='PORTFOLIO' id='portfolio-link'>
                PORTFOLIO
              </Link>
              <Link href='/contact' data-text='CONTACT' id='contact-link'>
                CONTACT
              </Link>
            </div>
          </div>
          {/*Navigator-Fullscreen END*/}

          {/*Menubar*/}
          <div id='navigation-bar'>
            <a href={'/'} id='logo'>
              <Image
                width={100}
                height={150}
                src='/images/logo.png'
                alt='logo'
              />
            </a>
            <div className='menubar'>
              <span className='first-span' />
              <span className='second-span' />
              <span className='third-span' />
            </div>
          </div>
          {/*Menubar End*/}
          <main>{children}</main>
          {
            <>
              <script src='/js/jquery.min.js'></script>
              <script src='/js/index.js'></script>
            </>
          }
        </div>
      </body>
    </html>
  );
}
