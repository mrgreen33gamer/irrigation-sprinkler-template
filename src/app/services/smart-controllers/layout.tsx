import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/services/smart-controllers';

export const metadata: Metadata = {
  title: "Smart Controllers Waco TX | AquaArc Irrigation",
  description: "Smart irrigation controller install and programming in Waco TX. Weather-based schedules, app control, water savings. Hunter, Rain Bird, Rachio and more.",
  keywords: ["smart sprinkler controller Waco","Rachio install Waco TX","weather based irrigation controller Central Texas","smart irrigation Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Smart Controllers Waco TX | AquaArc Irrigation",
    description: "Smart irrigation controller install and programming in Waco TX. Weather-based schedules, app control, water savings. Hunter, Rain Bird, Rachio and more.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Controllers Waco TX | AquaArc Irrigation",
    description: "Smart irrigation controller install and programming in Waco TX. Weather-based schedules, app control, water savings. Hunter, Rain Bird, Rachio and more.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Controllers",
  description: "Smart irrigation controller install and programming in Waco TX. Weather-based schedules, app control, water savings. Hunter, Rain Bird, Rachio and more.",
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
  serviceType: "Smart Controllers",
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
