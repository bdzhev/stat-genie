import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RelicProCanonic from 'next/font/local';
import RelicProDemotic from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const relicCanonic = RelicProCanonic({
  src: '../../public/fonts/RelicProCanonic.woff2',
  variable: '--font-relic-c',
})

const relicDemotic = RelicProDemotic({
  src: '../../public/fonts/RelicProDemotic.woff2',
  variable: '--font-relic-d',
})

export const metadata: Metadata = {
  title: "DND newbie character creator",
  description: "Generate DND character stats using a simple survey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${relicCanonic.variable} ${relicDemotic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
