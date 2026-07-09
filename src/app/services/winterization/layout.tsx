import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/services/winterization';

export const metadata: Metadata = {
  title: "Winterization Waco TX | AquaArc Irrigation",
  description: "Irrigation winterization and freeze prep in Waco TX. Blowouts, backflow protection, controller shutdown guidance. Protect pipes and valves before freezes.",
  keywords: ["sprinkler winterization Waco TX","irrigation blowout Central Texas","freeze protect sprinkler system Waco","backflow winterization Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Winterization Waco TX | AquaArc Irrigation",
    description: "Irrigation winterization and freeze prep in Waco TX. Blowouts, backflow protection, controller shutdown guidance. Protect pipes and valves before freezes.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winterization Waco TX | AquaArc Irrigation",
    description: "Irrigation winterization and freeze prep in Waco TX. Blowouts, backflow protection, controller shutdown guidance. Protect pipes and valves before freezes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Winterization",
  description: "Irrigation winterization and freeze prep in Waco TX. Blowouts, backflow protection, controller shutdown guidance. Protect pipes and valves before freezes.",
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
  serviceType: "Winterization",
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
