import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MimeShift - Great tool to convert files online",
  description: "MimeShift - Easy tool to convert files online. It is a very simple tool which allows you to convert and compress one or several file(s). It supports different document, image, spreadsheet, ebook, archive, presentation, audio and video formats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
