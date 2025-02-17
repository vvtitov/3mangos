import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "3MANGOS",
  description: "We build digital solutions with passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
