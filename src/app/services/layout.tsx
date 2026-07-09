import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquaarcirrigation.com';

export const metadata: Metadata = {
  title: "Irrigation Services Waco TX | Sprinklers, Drip & Controllers",
  description: "Sprinkler installation, repair, drip irrigation, smart controllers, winterization, and seasonal tune-ups for Waco and Central Texas. Licensed Irrigator · Bonded & Insured.",
  alternates: { canonical: `${BASE_URL}/services` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
