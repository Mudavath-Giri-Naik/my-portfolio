import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giri Naik | Student Developer",
  description: "Portfolio of Giri Naik, a pre-final year Computer Science student specializing in AI & ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='black'%3E%3Ccircle cx='16' cy='12' r='7'/%3E%3Cellipse cx='16' cy='24' rx='12' ry='7'/%3E%3C/svg%3E" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
