import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/blogs/smart-controller-water-savings-texas';

export const metadata: Metadata = {
  title: "Smart Irrigation Controllers & Water Savings in Central Texas",
  description: "How weather-based smart controllers cut outdoor water use for Waco and Central Texas lawns — and what must be configured at install.",
  alternates: { canonical: url },
  openGraph: {
    title: "Smart Irrigation Controllers & Water Savings in Central Texas",
    description: "How weather-based smart controllers cut outdoor water use for Waco and Central Texas lawns — and what must be configured at install.",
    url,
    siteName: "AquaArc Irrigation",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
