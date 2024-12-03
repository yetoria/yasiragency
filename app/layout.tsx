import type { Metadata } from "next";
import { Instrument_Sans, Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument_sans",
});

const notoSansArabic = Noto_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
});

export const metadata: Metadata = {
  title: "Yasir Agency - Développement Web Sur Mesure",
  description:
    "Création de sites web professionnels et applications web sur mesure",
  keywords: "développement web, site internet, application web",
  openGraph: {
    title: "Yasir Agency",
    description: "Création de sites web professionnels",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${instrumentSans.variable} ${notoSansArabic.variable} font-sans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
