import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/blogs/drip-vs-spray-irrigation';

export const metadata: Metadata = {
  title: "Drip vs Spray Irrigation for Waco Landscapes",
  description: "Compare drip and spray irrigation for beds, trees, and turf in Central Texas — and when a hybrid system is the best design.",
  alternates: { canonical: url },
  openGraph: {
    title: "Drip vs Spray Irrigation for Waco Landscapes",
    description: "Compare drip and spray irrigation for beds, trees, and turf in Central Texas — and when a hybrid system is the best design.",
    url,
    siteName: "AquaArc Irrigation",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
