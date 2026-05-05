import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Sora } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vantafy.dev"),
  title: {
    default: "Vanta Solutions — AI systems, automation, and full-stack software",
    template: "%s — Vanta Solutions",
  },
  description:
    "A solo software studio building AI agents, automation systems, and full-stack products from idea to launch.",
  openGraph: {
    title: "Vanta Solutions",
    description:
      "AI systems, automation tools, and full-stack software built with startup speed and engineering discipline.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/vanta-mark-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/logos/vanta-mark-192.png",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-ink-950 text-ink-50 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
