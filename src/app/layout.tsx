// src/app/layout.tsx
// AquaArc Irrigation — root layout
import type { Metadata, Viewport } from "next";
import { Bungee, Ubuntu, Karla } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

const fontTitle = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Ubuntu({
  weight: ["400","500","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Karla({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.aquaarcirrigation.com"
  : "http://localhost:3000";

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14532d" },
    { media: "(prefers-color-scheme: dark)",  color: "#14532d" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AquaArc Irrigation | Sprinklers, Drip, Smart Controllers & Repair — Waco, TX",
    template: "%s | AquaArc Irrigation",
  },
  description:
    "AquaArc Irrigation is a Waco, TX irrigation company offering sprinkler installation, sprinkler repair, drip irrigation, smart controllers, winterization, and seasonal tune-ups for Central Texas homes and businesses. Licensed Irrigator · Bonded & Insured.",
  keywords: [
    "AquaArc Irrigation",
    "sprinkler repair Waco TX",
    "sprinkler installation Waco Texas",
    "drip irrigation Waco",
    "smart irrigation controller Central Texas",
    "irrigation company Waco TX",
    "lawn sprinkler service Hewitt TX",
    "winterization Waco",
    "HOA irrigation Waco",
  ],
  authors: [{ name: "AquaArc Irrigation", url: BASE_URL }],
  creator: "AquaArc Irrigation",
  publisher: "AquaArc Irrigation",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "AquaArc Irrigation | Sprinklers, Drip, Smart Controllers & Repair — Waco, TX",
    description:
      "Waco-based irrigation company for sprinkler install, repair, drip, smart controllers, winterization, and seasonal tune-ups across Central Texas. Licensed irrigators. Green Lawn Guarantee · 2-Year Parts on New Installs.",
    url: BASE_URL,
    siteName: "AquaArc Irrigation",
    images: [
      {
        url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`,
        width: 1200,
        height: 630,
        alt: "AquaArc Irrigation — Waco TX Sprinklers & Drip Irrigation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaArc Irrigation | Waco TX Irrigation Pros",
    description:
      "Sprinkler install, repair, drip, smart controllers & seasonal service for Central Texas. Licensed irrigators — Green Lawn Guarantee.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "AquaArc Irrigation",
  alternateName: "AquaArc Irrigation Waco",
  description:
    "Residential and commercial irrigation services in Waco and Central Texas — sprinkler installation, sprinkler repair, drip irrigation, smart controllers, winterization, and seasonal tune-ups. Licensed irrigators, bonded & insured, Green Lawn Guarantee · 2-Year Parts on New Installs.",
  url: BASE_URL,
  telephone: "+12549902020",
  email: "hello@aquaarcirrigation.com",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Seth Moreno",
    jobTitle: "Owner & Licensed Irrigator",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "900 S University Parks Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Irrigation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drip Irrigation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Controllers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Winterization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Tune-Ups" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/aquaarcirrigation",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#4ade80" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#14532d",
                }}
              >
                <PulseLoader size={50} color="#4ade80" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
