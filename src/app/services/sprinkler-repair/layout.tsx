import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/services/sprinkler-repair';

export const metadata: Metadata = {
  title: "Sprinkler Repair Waco TX | AquaArc Irrigation",
  description: "Same-day sprinkler repair in Waco TX — broken heads, leaks, low pressure, stuck valves, and zone failures. Flat-rate pricing. Licensed irrigators. Green Lawn Guarantee.",
  keywords: ["sprinkler repair Waco TX","broken sprinkler head Waco","irrigation leak repair Central Texas","sprinkler system not working Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Sprinkler Repair Waco TX | AquaArc Irrigation",
    description: "Same-day sprinkler repair in Waco TX — broken heads, leaks, low pressure, stuck valves, and zone failures. Flat-rate pricing. Licensed irrigators. Green Lawn Guarantee.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprinkler Repair Waco TX | AquaArc Irrigation",
    description: "Same-day sprinkler repair in Waco TX — broken heads, leaks, low pressure, stuck valves, and zone failures. Flat-rate pricing. Licensed irrigators. Green Lawn Guarantee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sprinkler Repair",
  description: "Same-day sprinkler repair in Waco TX — broken heads, leaks, low pressure, stuck valves, and zone failures. Flat-rate pricing. Licensed irrigators. Green Lawn Guarantee.",
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
  serviceType: "Sprinkler Repair",
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
