import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/industries/sports-fields';

export const metadata: Metadata = {
  title: "Sports Fields & Schools Irrigation | AquaArc Irrigation Waco TX",
  description: "Sports field and school irrigation service in Waco TX — athletic turf, campuses, and practice fields. Reliable coverage, smart control, licensed irrigators.",
  keywords: ["sports field irrigation Waco","school sprinkler service Central Texas","athletic field irrigation Waco TX","AquaArc Irrigation"],
  alternates: { canonical: url },
  openGraph: {
    title: "Sports Fields & Schools Irrigation | AquaArc Irrigation Waco TX",
    description: "Sports field and school irrigation service in Waco TX — athletic turf, campuses, and practice fields. Reliable coverage, smart control, licensed irrigators.",
    url,
    siteName: "AquaArc Irrigation",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
