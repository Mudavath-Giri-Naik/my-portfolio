import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giri Naik",
  description: "A personal portfolio website with PWA capabilities",
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Personal Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className + ' bg-black'}>
        <header className="w-full flex flex-col items-center pt-8 pb-2 bg-black">
          <div className="flex flex-col items-center w-full">
            <Navigation />
          </div>
        </header>
        <main className="pt-4 md:pt-8 pb-16 md:pb-0 min-h-screen flex flex-col items-center justify-start w-full bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}

