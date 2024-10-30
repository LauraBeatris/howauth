import type { Metadata } from "next";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
