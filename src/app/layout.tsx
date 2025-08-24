import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Website/Sidebar";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MorphixUI | A Modern UI Library for React, Next.js",
  description:
    "MorphixUI is a sleek, minimalist UI library designed for React applications, providing pre-built, customizable components to accelerate development.",
  authors: [{ name: "Saurav Tiwari", url: "https://sauravgo.fun" }],
  keywords:
    "MorphixUI, React UI library, UI components, modern UI, frontend library, React components, TailwindCSS, open-source UI library",
  openGraph: {
    type: "website",
    title: "MorphixUI | A Modern UI Library for React",
    description:
      "MorphixUI is a sleek, minimalist UI library designed for React applications, providing pre-built, customizable components to accelerate development.",
    url: "https://morphixui.sauravgo.fun",
    images: "/logo.png", // You can add a logo or image here for Open Graph
    siteName: "MorphixUI",
  },
  twitter: {
    card: "summary_large_image",
    site: "@morphix_ui", // Your Twitter handle
    creator: "@sauravgo", // Your Twitter handle
    title: "MorphixUI | A Modern UI Library for React",
    description:
      "MorphixUI is a sleek, minimalist UI library designed for React applications, providing pre-built, customizable components to accelerate development.",
    images: "/logo.png", // You can add a logo or image here for Twitter Card
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any other meta tags, links, or SEO-specific elements */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="w-full h-full ml-64">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
