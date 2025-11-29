import { ReactNode } from 'react';
import { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Shenaya Residence',
  description: 'Premium accommodation in Kandy, Sri Lanka',
};

type Props = {
  children: ReactNode;
};

// Root layout is required to have html and body tags
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical PP Pangaia fonts for better performance */}
        <link
          rel="preload"
          href="/fonts/PPPangaia-Medium-BF654c530cc86d5.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PPPangaia-Bold-BF654c530cc27f8.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        {/* Optimize font loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
