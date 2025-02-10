import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://furkangunduz.com'),
  title: {
    default: 'Furkan Gündüz - Full-Stack Developer',
    template: '%s | Furkan Gündüz',
  },
  description:
    'Furkan Gündüz is a Full-Stack Developer based in Ankara, Turkey, specializing in building exceptional web applications with modern technologies like React, Node.js, and TypeScript.',
  keywords: [
    'Furkan Gündüz',
    'Full-Stack Developer',
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'TypeScript',
    'Node.js',
    'Ankara',
    'Turkey',
  ],
  authors: [{ name: 'Furkan Gündüz' }],
  creator: 'Furkan Gündüz',
  publisher: 'Furkan Gündüz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://furkangunduz.com',
    siteName: 'Furkan Gündüz',
    title: 'Furkan Gündüz - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in modern web technologies',
    images: [
      {
        url: '/profile.webp',
        width: 1200,
        height: 630,
        alt: 'Furkan Gündüz - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furkan Gündüz - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in modern web technologies',
    images: ['/profile.webp'],
    creator: '@furkangunduz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='canonical' href='https://furkangunduz.com' />
      </head>
      <body className={inter.className}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Furkan Gündüz',
              url: 'https://furkangunduz.com',
              image: 'https://furkangunduz.com/profile.webp',
              sameAs: [
                // Add your social media profiles here
                'https://github.com/furkangunduz',
                'https://linkedin.com/in/furkangunduz',
              ],
              jobTitle: 'Full-Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Self-Employed',
              },
              description: 'Full-Stack Developer based in Ankara, Turkey, specializing in building exceptional web applications.',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
