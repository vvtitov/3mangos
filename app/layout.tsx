import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata: Metadata = {
  title: "3MANGOS",
  description: "We build digital solutions with passion.",
  icons: {
    icon: [{ url: "/icon.ico", sizes: "32x32" }],
    apple: [{ url: "/icon.ico", sizes: "180x180" }],
    shortcut: "/icon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
