import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import JsonLd from "./jsonld";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "THREE MANGOS | Development Agency",
  description:
    "We build beautiful, functional, and high-performance websites and applications with passion. Expert web development, e-commerce, UI/UX, branding, and SEO services.",
  openGraph: {
    title: "THREE MANGOS | Development Agency",
    description:
      "We build beautiful, functional, and high-performance websites and applications with passion. Expert web development, e-commerce, UI/UX, branding, and SEO services.",
    url: "https://3mangos.site",
    siteName: "THREE MANGOS",
    images: [
      {
        url: "https://3mangos.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "THREE MANGOS | Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THREE MANGOS | Development Agency",
    description:
      "We build beautiful, functional, and high-performance websites and applications with passion. Expert web development, e-commerce, UI/UX, branding, and SEO services.",
    images: ["https://3mangos.site/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/icons/site.webmanifest",
  alternates: {
    canonical: "https://3mangos.site",
    languages: {
      "en-US": "https://3mangos.site/en",
      "es-ES": "https://3mangos.site/es",
    },
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
  },
  category: "technology",
};

export default function RootLayout({ children, params }: {
  children: ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="vZiOAqPZZ_IbYcEQVPjUfGbHBkIWXfHJhKBJCgWBgCo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <JsonLd />
            {children}
            <Toaster position="top-center" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
