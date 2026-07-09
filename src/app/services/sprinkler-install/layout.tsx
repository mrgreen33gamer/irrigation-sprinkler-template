import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/services/sprinkler-install';

export const metadata: Metadata = {
  title: "Sprinkler Installation Waco TX | AquaArc Irrigation",
  description: "Professional sprinkler system installation in Waco and Central Texas. Custom design, efficient zones, Green Lawn Guarantee, 2-year parts on new installs. Licensed irrigators.",
  keywords: ["sprinkler installation Waco TX","new sprinkler system Waco","irrigation install Central Texas","lawn sprinkler installation Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Sprinkler Installation Waco TX | AquaArc Irrigation",
    description: "Professional sprinkler system installation in Waco and Central Texas. Custom design, efficient zones, Green Lawn Guarantee, 2-year parts on new installs. Licensed irrigators.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprinkler Installation Waco TX | AquaArc Irrigation",
    description: "Professional sprinkler system installation in Waco and Central Texas. Custom design, efficient zones, Green Lawn Guarantee, 2-year parts on new installs. Licensed irrigators.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sprinkler Installation",
  description: "Professional sprinkler system installation in Waco and Central Texas. Custom design, efficient zones, Green Lawn Guarantee, 2-year parts on new installs. Licensed irrigators.",
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
  serviceType: "Sprinkler Installation",
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
