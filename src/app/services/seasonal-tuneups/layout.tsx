import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/services/seasonal-tuneups';

export const metadata: Metadata = {
  title: "Seasonal Tune-Ups Waco TX | AquaArc Irrigation",
  description: "Seasonal sprinkler tune-ups in Waco TX — spring start-up, summer efficiency checks, fall prep. Heads, nozzles, schedules, and leak detection.",
  keywords: ["sprinkler tune up Waco TX","irrigation maintenance Central Texas","spring sprinkler start up Waco","seasonal irrigation service Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Seasonal Tune-Ups Waco TX | AquaArc Irrigation",
    description: "Seasonal sprinkler tune-ups in Waco TX — spring start-up, summer efficiency checks, fall prep. Heads, nozzles, schedules, and leak detection.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seasonal Tune-Ups Waco TX | AquaArc Irrigation",
    description: "Seasonal sprinkler tune-ups in Waco TX — spring start-up, summer efficiency checks, fall prep. Heads, nozzles, schedules, and leak detection.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seasonal Tune-Ups",
  description: "Seasonal sprinkler tune-ups in Waco TX — spring start-up, summer efficiency checks, fall prep. Heads, nozzles, schedules, and leak detection.",
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
  serviceType: "Seasonal Tune-Ups",
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
