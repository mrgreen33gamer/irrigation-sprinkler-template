// AquaArc Irrigation — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import AboutHero       from "#/PageComponents/AboutHero/AboutHero";
import AboutStory      from "#/PageComponents/AboutStory/AboutStory";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2012",
      description: "AquaArc Irrigation was founded in Waco by Seth Moreno, a licensed irrigator with deep Central Texas experience. We're not a franchise — every decision is made locally.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Property",
      description: "Every technician on our team is background-checked, a licensed irrigator, and bonded & insured. We treat every lawn like our own.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full redesign when a head and valve fix will do. Our reputation is built on straight talk and green results.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 8000, label: "Systems serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Diagnose Honestly", description: "A licensed irrigator inspects the system and explains options in plain English — not just the most expensive one.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure to proceed.", icon: faBolt },
    { number: 4, title: "Done Right, Guaranteed", description: "Quality parts, clean workmanship, Green Lawn Guarantee · 2-Year Parts on New Installs.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>
      <AboutHero cityName="Waco" />
      <AboutStory />

      <SectionIntro
        title="About AquaArc Irrigation"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2012. Sprinklers · Drip · Smart Controllers · Repair — honest work at fair prices for the families and businesses we've called neighbors for 14 years."
      />

      <TrustBar headline="8,000+ Central Texas systems serviced — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="14 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Irrigation Company — Ready When You Need Us"
        subline="Same-day service. Flat-rate pricing. Green Lawn Guarantee · 2-Year Parts on New Installs. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12549902020"
        secondaryText="Request Service Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
