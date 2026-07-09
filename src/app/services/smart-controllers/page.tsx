// AquaArc Irrigation — Smart Controllers Service Page
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

export default function SmartControllersPage() {

  const expectations = [
    { icon: faSearch, title: "Controller Fit Assessment", description: "We match brand and zone count to your system and Wi‑Fi situation." },
    { icon: faFileContract, title: "Flat-Rate Install", description: "Swap, wire, app setup, and zone labeling included in one clear price." },
    { icon: faCheckCircle, title: "Zone Programming Done Right", description: "Runtime, seasonal adjust, and soil/plant types configured — not factory defaults." },
    { icon: faShieldHalved, title: "Owner Training", description: "We walk you through the app so you can pause, boost, or check status anytime." }
  ];

  const whyFeatures = [
    { icon: faCogs, title: "Real Water Savings", description: "Weather skip and ET adjustments routinely cut outdoor water use without stressing turf." },
    { icon: faWrench, title: "All Major Brands", description: "Hunter Hydrawise, Rain Bird, Rachio, and compatible modules for existing valves." },
    { icon: faShieldHalved, title: "Wiring Done Clean", description: "Proper labeling, surge considerations, and valve continuity checks included." }
  ];

  const processSteps = [
    { number: 1, title: "System Check", description: "We verify valves, wiring, and flow before recommending a controller.", icon: faHeadset },
    { number: 2, title: "Install & Connect", description: "Mount, wire, power, and connect to Wi‑Fi or cellular as required.", icon: faSearch },
    { number: 3, title: "Program Zones", description: "Plant type, sun exposure, and soil settings per zone.", icon: faFileContract },
    { number: 4, title: "App Handoff", description: "You leave knowing how to pause, schedule, and get alerts.", icon: faCheckCircle }
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
    { feature: "Weather-based scheduling", us: "✅ Configured fully", others: "❌ Left on default" },
    { feature: "Zone labeling & training", us: "✅ Included", others: "❌ DIY later" },
    { feature: "Valve continuity check", us: "✅ Standard", others: "❌ Swap only" },
    { feature: "Licensed irrigator install", us: "✅ Always", others: "❌ Box-store DIY" }
  ];

  const faq = [
    { question: "How much water can a smart controller save?", answer: "Many Central Texas homes see 20–50% outdoor water savings when weather-based schedules replace fixed timers — results vary by landscape and prior overwatering." },
    { question: "Will a smart controller work with my old valves?", answer: "Usually yes. We test solenoids and wiring during install and flag any valves that need repair first." },
    { question: "Do I need strong Wi‑Fi outdoors?", answer: "Indoor Wi‑Fi that reaches the controller location is enough for most installs. We can discuss options if signal is weak." },
    { question: "Can you install Rachio or Hunter Hydrawise?", answer: "Yes — we install and program major smart irrigation brands based on your needs and budget." }
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
        { label: "Smart Controllers" },
      ]} />

      <SectionIntro
        title="Smart Controllers in Waco, TX"
        subtitle={"Weather-based irrigation controllers that skip rainy days, adjust for heat, and let you manage zones from your phone — installed and programmed correctly."}
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/smart-controllers" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Smart Controllers FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Smart Controllers Service" cityName="Waco" slug="/services/smart-controllers" spot="smart-controllers-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Smart Controllers Today?"
        subline="Green Lawn Guarantee · 2-Year Parts on New Installs. Flat-rate pricing. Licensed irrigators."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
