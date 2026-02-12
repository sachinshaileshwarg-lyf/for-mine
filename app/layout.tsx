import type { Metadata } from "next";
import { Dancing_Script, Courier_Prime } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const courierPrime = Courier_Prime({
  variable: "--font-typewriter",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Love Story",
  description: "A digital love letter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${courierPrime.variable} antialiased bg-warm-white text-gray-800 overflow-hidden`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
