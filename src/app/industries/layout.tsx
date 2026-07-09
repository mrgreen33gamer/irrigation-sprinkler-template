import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';

export const metadata: Metadata = {
  title: "Industries Served | HOAs, Commercial & Sports Fields",
  description: "Irrigation services for HOA communities, commercial properties, and sports fields & schools across Waco and Central Texas.",
  alternates: { canonical: `${BASE_URL}/industries` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
