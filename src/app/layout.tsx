import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://furkangunduz.com'),
  title: {
    default: 'Furkan Gündüz - Full-Stack Developer | React, Node.js, TypeScript Expert',
    template: '%s | Furkan Gündüz - Full-Stack Developer',
  },
  description:
    'Full-Stack Developer based in Ankara, Turkey, with expertise in React, Node.js, TypeScript, and modern web technologies. Building scalable, performant web applications with a focus on user experience.',
  keywords: [
    'Furkan Gündüz',
    'Full-Stack Developer',
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'TypeScript Expert',
    'Node.js Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Ankara',
    'Turkey',
    'Web Development',
    'Software Development',
    'Tech Lead',
  ],
  authors: [{ name: 'Furkan Gündüz', url: 'https://furkangunduz.com' }],
  creator: 'Furkan Gündüz',
  publisher: 'Furkan Gündüz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://furkangunduz.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://furkangunduz.com',
    siteName: 'Furkan Gündüz - Full-Stack Developer',
    title: 'Furkan Gündüz - Full-Stack Developer | React, Node.js Expert',
    description:
      'Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building exceptional digital experiences.',
    images: [
      {
        url: '/profile.webp',
        width: 1200,
        height: 630,
        alt: 'Furkan Gündüz - Full-Stack Developer',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furkan Gündüz - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Node.js, and modern web technologies',
    images: ['/profile.webp'],
    creator: '@furkangunduz',
    site: '@furkangunduz',
    creatorId: '@furkangunduz',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/profile.webp',
        type: 'image/webp',
      },
    ],
    apple: [
      {
        url: '/profile.webp',
        type: 'image/webp',
      },
    ],
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
              '@id': 'https://furkangunduz.com/#person',
              name: 'Furkan Gündüz',
              givenName: 'Furkan',
              familyName: 'Gündüz',
              url: 'https://furkangunduz.com',
              image: {
                '@type': 'ImageObject',
                url: 'https://furkangunduz.com/profile.webp',
                width: 1200,
                height: 630,
              },
              sameAs: [
                'https://github.com/furkangunduz',
                'https://linkedin.com/in/furkangunduz',
                // Add other social profiles if available
              ],
              jobTitle: 'Full-Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Self-Employed',
              },
              description: 'Full-Stack Developer based in Ankara, Turkey, specializing in React, Node.js, and modern web technologies.',
              knowsAbout: [
                'React',
                'Node.js',
                'TypeScript',
                'JavaScript',
                'Web Development',
                'Full-Stack Development',
                'Software Architecture',
                'UI/UX Design',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ankara',
                addressCountry: 'Turkey',
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
