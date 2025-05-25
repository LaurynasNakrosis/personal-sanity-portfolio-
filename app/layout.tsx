import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Laurynas Nakrosis Portfolio",
  "url": "https://www.laurynasnakrosis.com",
  "description": "Full-stack developer specializing in React, Next.js, and TypeScript. View my projects, skills, and experience in web development.",
  "author": {
    "@type": "Person",
    "name": "Laurynas Nakrosis",
    "jobTitle": "Full Stack Developer",
    "url": "https://www.laurynasnakrosis.com"
  }
};

export const metadata: Metadata = {
  title: "Laurynas Nakrosis | Full Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, and TypeScript. View my projects, skills, and experience in web development.",
  keywords: ["Full-stack developer", "Web development", "React", "Next.js", "TypeScript", "Portfolio", "Sanity.io"],
  authors: [{ name: "Laurynas Nakrosis" }],
  creator: "Laurynas Nakrosis",
  publisher: "Laurynas Nakrosis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.laurynasnakrosis.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Laurynas Nakrosis | Full Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and TypeScript. View my projects, skills, and experience in web development.",
    url: 'https://www.laurynasnakrosis.com',
    siteName: "Laurynas Nakrosis Portfolio",
    images: [
      {
        url: 'https://www.laurynasnakrosis.com/MyLogoGold.jpg',
        width: 1200,
        height: 630,
        alt: 'Laurynas Nakrosis Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Laurynas Nakrosis | Full Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and TypeScript. View my projects, skills, and experience in web development.",
    images: ['https://www.laurynasnakrosis.com/MyLogoGold.jpg'],
    creator: '@your_twitter_handle',
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
    google: 'your-google-site-verification',
  },
  category: 'technology',
  classification: 'Portfolio',
  referrer: 'origin-when-cross-origin',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '128x128' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="128x128" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}