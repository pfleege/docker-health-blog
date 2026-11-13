import type { Metadata } from "next";
import { Unica_One, Michroma } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = Unica_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-unica-one",
});
const sans = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "Pulse - Health Blog",
  description:
    "Sharing valueable health tips for a better life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="mx-auto w-4/5 max-w-[1200px] border-x border-carbon-600 bg-carbon-900 px-4 sm:px-6 md:px-8 py-8 min-h-[calc(100vh-4rem)] shadow-glow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}