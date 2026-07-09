import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/industries/hoa-communities';

export const metadata: Metadata = {
  title: "HOA Communities Irrigation | AquaArc Irrigation Waco TX",
  description: "Irrigation service for HOA common areas in Waco and Central Texas — multi-zone repairs, smart controllers, seasonal plans, COIs available.",
  keywords: ["HOA irrigation Waco","HOA sprinkler maintenance Central Texas","common area irrigation service Waco","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "HOA Communities Irrigation | AquaArc Irrigation Waco TX",
    description: "Irrigation service for HOA common areas in Waco and Central Texas — multi-zone repairs, smart controllers, seasonal plans, COIs available.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
