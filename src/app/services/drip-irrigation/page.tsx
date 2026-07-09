// AquaArc Irrigation — Drip Irrigation Service Page
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

export default function DripIrrigationPage() {

  const expectations = [
    { icon: faSearch, title: "Plant-First Design", description: "Emitters and tubing matched to plant water needs, mulch beds, and tree canopies." },
    { icon: faFileContract, title: "Clear Scope & Price", description: "Line layout, filters, pressure regulation, and zones priced before install." },
    { icon: faCheckCircle, title: "Filters & Pressure Right", description: "Proper filtration and pressure regulation so drippers last and flow evenly." },
    { icon: faShieldHalved, title: "Integrated With Spray Zones", description: "We design drip zones that work with your existing sprinkler controller." }
  ];

  const whyFeatures = [
    { icon: faSeedling, title: "Water Savings That Show Up", description: "Drip puts water at the root zone — less evaporation in Texas heat." },
    { icon: faWrench, title: "Cleaner Beds & Walkways", description: "No overspray staining fences, windows, or sidewalks." },
    { icon: faShieldHalved, title: "Built for Central Texas Plants", description: "Trees, shrubs, xeriscape beds, and vegetable gardens all designed correctly." }
  ];

  const processSteps = [
    { number: 1, title: "Site Review", description: "We map beds, trees, and existing irrigation.", icon: faHeadset },
    { number: 2, title: "Drip Design", description: "Emitter spacing, tubing, filters, and valves planned for your plants.", icon: faSearch },
    { number: 3, title: "Install", description: "Clean install with pressure regulation and flush points.", icon: faFileContract },
    { number: 4, title: "Schedule & Train", description: "Runtime guidance and controller setup so plants thrive.", icon: faCheckCircle }
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
    { feature: "Root-zone watering design", us: "✅ Plant-specific", others: "❌ Generic tubing runs" },
    { feature: "Filters & pressure regulation", us: "✅ Standard", others: "❌ Often skipped" },
    { feature: "Controller integration", us: "✅ Full setup", others: "❌ DIY wiring" },
    { feature: "Licensed irrigator install", us: "✅ Always", others: "❌ Handyman only" }
  ];

  const faq = [
    { question: "Is drip better than spray for flower beds?", answer: "Usually yes — drip reduces leaf wetness, evaporation, and overspray while delivering water where roots need it." },
    { question: "Can drip be added to an existing sprinkler system?", answer: "Yes. We can convert zones or add dedicated drip valves and filters to your controller." },
    { question: "Does drip clog easily?", answer: "With proper filtration and periodic flushing, modern drip systems stay reliable. We include filters and flush points in every design." },
    { question: "How often should drip run in summer?", answer: "It depends on soil, plant type, and mulch — we set a starting schedule and can pair it with a smart controller for weather adjustments." }
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
        { label: "Drip Irrigation" },
      ]} />

      <SectionIntro
        title="Drip Irrigation in Waco, TX"
        subtitle={"Precision watering for beds, trees, and gardens — less waste, healthier roots, and fewer fungus problems from overspray on foliage and hardscape."}
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/drip-irrigation" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Drip Irrigation FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Drip Irrigation Service" cityName="Waco" slug="/services/drip-irrigation" spot="drip-irrigation-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Drip Irrigation Today?"
        subline="Green Lawn Guarantee · 2-Year Parts on New Installs. Flat-rate pricing. Licensed irrigators."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
