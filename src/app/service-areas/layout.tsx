// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Irrigation Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | AquaArc',
  description:
    'AquaArc Irrigation serves Waco, Hewitt, Woodway, McGregor, China Spring, Killeen, Temple, Bellmead, and all of Central Texas. Flat-rate pricing, same-day service, Green Lawn Guarantee.',
  keywords: [
    'irrigation service areas Central Texas',
    'irrigation Waco TX',
    'sprinkler repair Hewitt TX',
    'irrigation Killeen TX',
    'irrigation Temple TX',
    'sprinkler installation Central Texas',
    'AquaArc Irrigation service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Irrigation Service Areas | AquaArc Irrigation — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate irrigation repair, installation, and maintenance. Same-day service available.',
    url,
    siteName: 'AquaArc Irrigation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irrigation Service Areas | AquaArc Irrigation — Central Texas',
    description: 'Serving Waco and all of Central Texas. Flat-rate pricing, same-day service, Green Lawn Guarantee.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'AquaArc Irrigation',
  url: BASE_URL,
  telephone: '+12549902020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '900 S University Parks Dr',
    addressLocality: 'Waco',
    addressRegion: 'TX',
    postalCode: '76706',
    addressCountry: 'US',
  },
  areaServed: [
    'Waco, TX', 'Hewitt, TX', 'Woodway, TX', 'McGregor, TX',
    'China Spring, TX', 'Killeen, TX', 'Temple, TX', 'Bellmead, TX',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
