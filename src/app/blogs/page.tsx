// AquaArc Irrigation — Blog Index
"use client";

import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import BlogPreviewGrid from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";

export default function BlogsPage() {
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Irrigation Tips & Insights"
        subtitle="Practical guides on sprinklers, drip, smart controllers, and water savings for Waco and Central Texas homeowners."
      />
      <div className={styles.section}>
        <BlogPreviewGrid title="Latest From AquaArc" />
      </div>
      <CTABanner
        headline="Need Help With Your Irrigation System?"
        subline="Licensed irrigators. Flat-rate pricing. Green Lawn Guarantee · 2-Year Parts on New Installs."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
