// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact AquaArc Irrigation | Schedule Service in Waco & Central Texas',
  description:
    'Contact AquaArc Irrigation to schedule sprinkler repair, installation, drip, smart controllers, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 990-2020.',
  keywords: [
    'contact AquaArc Irrigation',
    'irrigation service Waco TX',
    'schedule sprinkler repair Waco',
    'irrigation estimate Central Texas',
    'AquaArc contact',
    '254-990-2020',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact AquaArc Irrigation | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, Green Lawn Guarantee, licensed irrigators.',
    url,
    siteName: 'AquaArc Irrigation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AquaArc Irrigation | Waco & Central Texas',
    description: 'Schedule irrigation service or get a free estimate. Call (254) 990-2020.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
