import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ReactNode } from "react";

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

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
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
