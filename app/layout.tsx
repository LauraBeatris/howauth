import type { Metadata } from "next";
import { sans } from "./fonts";

import "./globals.css";

// TODO - Improve page metadata
export const metadata: Metadata = {
  title: "howauth.com",
  description: "Interactive learning platform around web authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`bg-stone-50 w-full h-full ${sans.className}`}>
        {children}
      </body>
    </html>
  );
}
