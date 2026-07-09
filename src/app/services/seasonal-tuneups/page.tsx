// AquaArc Irrigation — Seasonal Tune-Ups Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTint, faSeedling, faCogs,
  faTrophy, faChartLine, faSnowflake, faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function SeasonalTuneupsPage() {

  const expectations = [
    { icon: faCalendarCheck, title: "Season-Matched Visit", description: "Spring start-up, summer efficiency, or fall prep — the checklist fits the season." },
    { icon: faFileContract, title: "Written Findings", description: "You get a clear list of what we adjusted and any repairs recommended." },
    { icon: faCheckCircle, title: "Heads, Nozzles & Timing", description: "Arc adjustments, clogged nozzles, and runtime updates for weather and grass stage." },
    { icon: faShieldHalved, title: "Catch Small Issues Early", description: "A $10 nozzle now beats a soaked foundation or dead zone later." }
  ];

  const whyFeatures = [
    { icon: faClock, title: "Priority Scheduling", description: "Tune-up customers get preferred slots during peak spring rush." },
    { icon: faWrench, title: "Full System Health Check", description: "Valves, heads, controller, pressure, and visible leaks in one visit." },
    { icon: faShieldHalved, title: "Pairs With Smart Controllers", description: "We re-optimize smart schedules after seasonal landscape changes." }
  ];

  const processSteps = [
    { number: 1, title: "Book Seasonal Visit", description: "Spring, summer, or fall — pick the service window you need.", icon: faHeadset },
    { number: 2, title: "Run Every Zone", description: "We inspect coverage, heads, and pressure live.", icon: faSearch },
    { number: 3, title: "Adjust & Report", description: "Fine-tune arcs/runtimes; report any repairs needed.", icon: faFileContract },
    { number: 4, title: "Optional Repair Same Day", description: "Approve flat-rate fixes while we are already on site.", icon: faCheckCircle }
  ];

  const metrics = [
    { icon: faTrophy,    value: 8000, label: "Irrigation systems serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "First-visit fix rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years serving Waco-area lawns", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch for sprinkler work.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full irrigation repair and install coverage.", badge: "" },
    { town: "Woodway",      benefit: "Same-day sprinkler service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full irrigation service for Bell County properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full zone-by-zone inspection", us: "✅ Every visit", others: "❌ Quick glance" },
    { feature: "Written findings report", us: "✅ Included", others: "❌ Verbal only" },
    { feature: "Runtime optimization", us: "✅ Seasonal", others: "❌ Leave as-is" },
    { feature: "Same-visit repair option", us: "✅ Flat-rate", others: "❌ Separate trip" }
  ];

  const faq = [
    { question: "When should I schedule a spring start-up?", answer: "Late winter to early spring — before you need regular watering. We clear winter debris, test zones, and set runtimes for green-up." },
    { question: "What is included in a tune-up?", answer: "Zone-by-zone operation, head/nozzle adjustments, controller review, visible leak check, and recommendations for repairs." },
    { question: "How often do I need irrigation maintenance?", answer: "Most Central Texas lawns benefit from at least one spring visit and a mid-summer check during peak heat." },
    { question: "Can tune-ups reduce my water bill?", answer: "Yes — fixing overspray, reducing overlapping cycles, and updating schedules often cuts outdoor water use without browning the lawn." }
  ];

  const crossServices = [
    { icon: faTint,           title: "Sprinkler Installation", body: "New systems designed for Texas heat and water efficiency.", link: "/services/sprinkler-install" },
    { icon: faWrench,         title: "Sprinkler Repair", body: "Broken heads, leaks, low pressure, zone failures — fixed fast.", link: "/services/sprinkler-repair" },
    { icon: faSeedling,       title: "Drip Irrigation", body: "Beds, trees, and gardens watered precisely with less waste.", link: "/services/drip-irrigation" },
    { icon: faCogs,           title: "Smart Controllers", body: "Weather-based schedules that cut water bills.", link: "/services/smart-controllers" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Seasonal Tune-Ups" },
      ]} />

      <SectionIntro
        title="Seasonal Tune-Ups in Waco, TX"
        subtitle={"Spring start-ups, mid-summer efficiency checks, and fall prep so every zone covers evenly, runs efficiently, and does not waste water."}
      />

      <TrustBar headline="8,000+ Central Texas irrigation systems serviced by AquaArc Irrigation" />

      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose AquaArc Irrigation" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="AquaArc Irrigation vs. The Other Guys" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Irrigation Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/seasonal-tuneups" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Seasonal Tune-Ups FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Seasonal Tune-Ups Service" cityName="Waco" slug="/services/seasonal-tuneups" spot="seasonal-tuneups-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Seasonal Tune-Ups Today?"
        subline="Green Lawn Guarantee · 2-Year Parts on New Installs. Flat-rate pricing. Licensed irrigators."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
