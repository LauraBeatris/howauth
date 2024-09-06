import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "howauth.com",
  description: "Course platform for howauth.com",
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
