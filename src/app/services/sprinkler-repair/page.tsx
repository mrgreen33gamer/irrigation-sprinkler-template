// AquaArc Irrigation — Sprinkler Repair Service Page
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

export default function SprinklerRepairPage() {

  const expectations = [
    { icon: faSearch, title: "Same-Day Diagnosis", description: "We run zones, check pressure, and show you exactly what failed — no vague “needs work” talk." },
    { icon: faFileContract, title: "Flat-Rate Quote First", description: "Written price before we dig or replace parts. The number does not change mid-job." },
    { icon: faCheckCircle, title: "Stocked Trucks", description: "Common heads, nozzles, fittings, and solenoids on every truck — most repairs finish in one visit." },
    { icon: faShieldHalved, title: "Workmanship Backed", description: "Repairs are done right and tested under pressure before we leave." }
  ];

  const whyFeatures = [
    { icon: faClock, title: "Emergency Leak Response", description: "Active leaks waste water and money. We prioritize blowouts and major leaks." },
    { icon: faWrench, title: "All Major Brands", description: "Rain Bird, Hunter, Toro, Irritrol, and more — valves, heads, and controllers." },
    { icon: faShieldHalved, title: "Licensed Irrigators", description: "Not handymen guessing at hydraulics — licensed irrigation pros." }
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Describe the issue — broken head, leak, dry zone — we schedule fast.", icon: faHeadset },
    { number: 2, title: "Tech Arrives", description: "We inspect zones, valves, and pressure on site.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Clear options and price before any work starts.", icon: faFileContract },
    { number: 4, title: "Repair & Test", description: "Fix, re-test coverage, and confirm the schedule is right.", icon: faCheckCircle }
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
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + guesswork" },
    { feature: "Parts stocked for common failures", us: "✅ Most same-visit", others: "❌ Return trips" },
    { feature: "Licensed irrigators", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Full zone & pressure check", us: "✅ Every repair", others: "❌ Patch only" },
    { feature: "Same-day availability", us: "✅ Most days", others: "❌ Days later" }
  ];

  const faq = [
    { question: "How much does sprinkler repair cost in Waco?", answer: "Simple head or nozzle fixes often run $75–$200. Valve or lateral leaks typically $150–$450. We quote flat-rate after diagnosis." },
    { question: "Why is one zone not working?", answer: "Common causes include failed solenoids, stuck valves, wiring faults, clogged nozzles, or controller programming errors. We isolate the cause before replacing parts." },
    { question: "Do you fix underground leaks?", answer: "Yes — we locate wet spots, pressure-test laterals, and repair pipe with durable fittings." },
    { question: "Can you repair my controller?", answer: "We diagnose controllers, replace failed units, and can upgrade to smart weather-based controllers when repair is not cost-effective." },
    { question: "Do you service HOAs and commercial sites?", answer: "Yes — multi-zone commercial and HOA systems are a core part of our business." }
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
        { label: "Sprinkler Repair" },
      ]} />

      <SectionIntro
        title="Sprinkler Repair in Waco, TX"
        subtitle={"Broken heads, wet spots, dry patches, low pressure, or a zone that never turns on — we diagnose fast, quote flat-rate, and fix it the same visit whenever parts allow."}
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/sprinkler-repair" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Sprinkler Repair FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Sprinkler Repair Service" cityName="Waco" slug="/services/sprinkler-repair" spot="sprinkler-repair-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Sprinkler Repair Today?"
        subline="Green Lawn Guarantee · 2-Year Parts on New Installs. Flat-rate pricing. Licensed irrigators."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
