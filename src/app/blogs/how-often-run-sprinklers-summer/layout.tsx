import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';
const url = BASE_URL + '/blogs/how-often-run-sprinklers-summer';

export const metadata: Metadata = {
  title: "How Often to Run Sprinklers in a Texas Summer",
  description: "A practical guide to summer watering frequency for Waco and Central Texas lawns — deep cycles, signs of overwatering, and when to adjust.",
  alternates: { canonical: url },
  openGraph: {
    title: "How Often to Run Sprinklers in a Texas Summer",
    description: "A practical guide to summer watering frequency for Waco and Central Texas lawns — deep cycles, signs of overwatering, and when to adjust.",
    url,
    siteName: "AquaArc Irrigation",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
