import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';

export const metadata: Metadata = {
  title: "About AquaArc Irrigation | Waco TX Licensed Irrigators Since 2012",
  description: "Meet AquaArc Irrigation — founded in Waco by Seth Moreno. Licensed irrigators, Green Lawn Guarantee · 2-Year Parts on New Installs, 8,000+ systems serviced across Central Texas.",
  alternates: { canonical: `${BASE_URL}/about` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
