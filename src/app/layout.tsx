import type { Metadata } from "next";
import { Unica_One, Michroma } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

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
        {children}
      </body>
    </html>
  );
}