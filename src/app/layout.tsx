import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RelicProCanonic from 'next/font/local';
import RelicProDemotic from 'next/font/local';
import FoliesBergereBold from 'next/font/local';
import { Viewport } from "next";
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

const foliesBold= FoliesBergereBold({
  src: '../../public/fonts/FoliesBergereBold.woff2',
  variable: '--font-folies-bold',
})

export const metadata: Metadata = {
  title: "DND newbie character creator",
  description: "Generate DND character stats using a simple survey",
};

export const viewport: Viewport = {
  themeColor: '#4635B1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${relicCanonic.variable} ${relicDemotic.variable} ${foliesBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
