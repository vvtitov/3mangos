import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { inter, montserrat } from "./font";
import JsonLd from "./jsonld";

export const metadata: Metadata = {
  title: "THREE MANGOS | Web Development Agency",
  description: "We build beautiful, functional, and high-performance websites and applications with passion. Expert web development, e-commerce, UI/UX, branding, and SEO services.",
  metadataBase: new URL('https://3mangos.site'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
    },
  },
  keywords: [
    "web development", 
    "web design", 
    "e-commerce", 
    "UI/UX design", 
    "branding", 
    "SEO", 
    "responsive websites", 
    "Three Mangos", 
    "3mangos", 
    "web agency"
  ],
  authors: [{ name: "THREE MANGOS" }],
  creator: "THREE MANGOS",
  publisher: "THREE MANGOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://3mangos.site',
    siteName: 'THREE MANGOS',
    title: 'THREE MANGOS | Web Development Agency',
    description: 'We build beautiful, functional, and high-performance websites and applications with passion.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'THREE MANGOS - Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THREE MANGOS | Web Development Agency',
    description: 'We build beautiful, functional, and high-performance websites and applications with passion.',
    images: ['/og-image.jpg'],
    creator: '@3mangos',
    site: '@3mangos',
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "32x32" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16" },
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/icons/favicon.ico",
  },
  manifest: "/icons/site.webmanifest",
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
};

type LayoutProps = {
  children: ReactNode;
  params: { lang: string };
};

export default function RootLayout({ children, params }: LayoutProps) {
  const { lang } = params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`https://3mangos.site/${lang}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Favicon configuration */}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        
        <meta name="google-site-verification" content="vZiOAqPZZ_IbYcEQVPjUfGbHBkIWXfHJhKBJCgWBgCo" />
      </head>
      <body className={`${inter.className} ${montserrat.className}`} suppressHydrationWarning>
        <JsonLd />
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
