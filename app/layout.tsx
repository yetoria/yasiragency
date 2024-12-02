import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google"; // Import des polices
import "./globals.css";

// Configuration de Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuration de Instrument Sans
const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument_sans",
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
    <html lang="fr" className="dark">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${instrumentSans.variable} font-sans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
