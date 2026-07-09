import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/services/drip-irrigation';

export const metadata: Metadata = {
  title: "Drip Irrigation Waco TX | AquaArc Irrigation",
  description: "Drip irrigation design and installation in Waco TX for beds, trees, shrubs, and gardens. Water-efficient, plant-friendly, licensed irrigators.",
  keywords: ["drip irrigation Waco TX","drip system installation Central Texas","landscape drip irrigation Waco","water efficient irrigation Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Drip Irrigation Waco TX | AquaArc Irrigation",
    description: "Drip irrigation design and installation in Waco TX for beds, trees, shrubs, and gardens. Water-efficient, plant-friendly, licensed irrigators.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drip Irrigation Waco TX | AquaArc Irrigation",
    description: "Drip irrigation design and installation in Waco TX for beds, trees, shrubs, and gardens. Water-efficient, plant-friendly, licensed irrigators.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drip Irrigation",
  description: "Drip irrigation design and installation in Waco TX for beds, trees, shrubs, and gardens. Water-efficient, plant-friendly, licensed irrigators.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "AquaArc Irrigation",
    url: BASE_URL,
    telephone: "+12549902020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "900 S University Parks Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
  },
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
  serviceType: "Drip Irrigation",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
