import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/industries/commercial-properties';

export const metadata: Metadata = {
  title: "Commercial Properties Irrigation | AquaArc Irrigation Waco TX",
  description: "Commercial irrigation service in Waco TX for offices, retail, campuses, and multi-site portfolios. Licensed irrigators, flat-rate scopes, COIs available.",
  keywords: ["commercial irrigation Waco","office park sprinkler service Central Texas","commercial sprinkler repair Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Properties Irrigation | AquaArc Irrigation Waco TX",
    description: "Commercial irrigation service in Waco TX for offices, retail, campuses, and multi-site portfolios. Licensed irrigators, flat-rate scopes, COIs available.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
