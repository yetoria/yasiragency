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
    "Agence de développement web spécialisée dans la création de sites et applications web modernes. Expertise en React, Next.js et design UI/UX.",
  keywords: "développement web, site internet, application web, next.js, react, ui/ux design, agence web paris",
  authors: [{ name: "Yasir Agency" }],
  creator: "Yasir Agency",
  publisher: "Yasir Agency",
  robots: "index, follow",
  openGraph: {
    title: "Yasir Agency - Développement Web Sur Mesure",
    description: "Création de sites web professionnels et applications web modernes",
    url: "https://yasiragency.com",
    siteName: "Yasir Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yasir Agency - Développement Web",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasir Agency - Développement Web Sur Mesure",
    description: "Création de sites web professionnels et applications web modernes",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yasiragency.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Yasir Agency",
              url: "https://yasiragency.com",
              description: "Agence de développement web spécialisée dans la création de sites et applications web modernes.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://yasiragency.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Yasir Agency",
              url: "https://yasiragency.com",
              logo: "https://yasiragency.com/assets/svg/logo.svg",
              sameAs: [
                "https://twitter.com/yasiragency",
                "https://www.linkedin.com/company/yasiragency",
                "https://github.com/yetoria"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-787-497-367",
                contactType: "customer service",
                email: "yasiragency@proton.me",
                areaServed: "FR",
                availableLanguage: ["French", "English", "Arabic"]
              }
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${instrumentSans.variable} ${notoSansArabic.variable} font-sans overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
