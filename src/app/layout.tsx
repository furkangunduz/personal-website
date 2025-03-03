import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import data from './data.json';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(data.seo.baseUrl),
  title: {
    default: data.seo.title,
    template: data.seo.titleTemplate,
  },
  description: data.seo.description,
  keywords: data.seo.keywords,
  authors: [{ name: data.seo.author.name, url: data.seo.author.url }],
  creator: data.seo.author.name,
  publisher: data.seo.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: data.seo.baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: data.seo.baseUrl,
    siteName: data.seo.title,
    title: data.seo.title,
    description: data.seo.description,
    images: [
      {
        url: data.seo.image.url,
        width: data.seo.image.width,
        height: data.seo.image.height,
        alt: data.seo.image.alt,
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: data.seo.title,
    description: data.seo.description,
    images: [data.seo.image.url],
    creator: data.seo.social.twitter,
    site: data.seo.social.twitter,
    creatorId: data.seo.social.twitter,
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
        url: data.seo.image.url,
        type: 'image/webp',
        sizes: '32x32',
      },
      {
        url: data.seo.image.url,
        type: 'image/webp',
        sizes: '16x16',
      },
    ],
    shortcut: [
      {
        url: data.seo.image.url,
        type: 'image/webp',
      },
    ],
    apple: [
      {
        url: data.seo.image.url,
        type: 'image/webp',
        sizes: '180x180',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: data.seo.image.url,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='canonical' href={data.seo.baseUrl} />
        <meta name='google-site-verification' content={data.seo.verification.google} />
      </head>
      <body className={inter.className}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': `${data.seo.baseUrl}/#person`,
              name: data.seo.author.name,
              givenName: 'Furkan',
              familyName: 'Gündüz',
              url: data.seo.baseUrl,
              image: {
                '@type': 'ImageObject',
                url: `${data.seo.baseUrl}${data.seo.image.url}`,
                width: data.seo.image.width,
                height: data.seo.image.height,
              },
              sameAs: [data.seo.social.github, data.seo.social.linkedin],
              jobTitle: data.seo.jobTitle,
              worksFor: {
                '@type': 'Organization',
                name: 'Self-Employed',
              },
              description: data.seo.description,
              knowsAbout: data.seo.expertise,
              address: {
                '@type': 'PostalAddress',
                addressLocality: data.seo.location.city,
                addressCountry: data.seo.location.country,
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
