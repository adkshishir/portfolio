import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shishir Adhikari - Software Developer',
  description:
    'Portfolio website of Shishir Adhikari, a Software Developer from Nepal',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <Toaster />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
