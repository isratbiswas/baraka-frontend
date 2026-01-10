import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/compontents/Navbar";
import Footer from "@/compontents/Footer";

export const metadata: Metadata = {
  title: "Baraka E-Shop",
  description: "Baraka E shop by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-dvh">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
