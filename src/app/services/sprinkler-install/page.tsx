// AquaArc Irrigation — Sprinkler Installation Service Page
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

export default function SprinklerInstallPage() {

  const expectations = [
    { icon: faSearch, title: "Property Walk & Design", description: "We map sun exposure, slope, soil, and plant types so every zone waters what it should — not the sidewalk." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "You get a clear design scope and price before trenching starts. No surprise add-ons mid-install." },
    { icon: faCheckCircle, title: "Clean Install & Commissioning", description: "Proper depth, head spacing, pressure checks, and a full system walkthrough before we leave." },
    { icon: faShieldHalved, title: "Green Lawn Guarantee · 2-Year Parts on New Installs", description: "New installs include 2-year parts coverage and our Green Lawn Guarantee on workmanship." }
  ];

  const whyFeatures = [
    { icon: faClock, title: "Designed for Texas Heat", description: "Zone layouts and nozzle selection matched to Waco summers — not generic box-store kits." },
    { icon: faWrench, title: "Licensed Irrigators", description: "Every design and install is performed by licensed irrigators — bonded and insured." },
    { icon: faShieldHalved, title: "Smart-Ready From Day One", description: "Controllers and wiring ready for weather-based smart upgrades without redoing the system." }
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online — we schedule a free design visit.", icon: faHeadset },
    { number: 2, title: "Design On-Site", description: "We walk the property, map zones, and explain the plan in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written scope and price before any trenching begins.", icon: faFileContract },
    { number: 4, title: "Install & Warranty", description: "Clean install, pressure test, schedule setup, Green Lawn Guarantee.", icon: faCheckCircle }
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
    { feature: "Custom zone design for Texas conditions", us: "✅ Always", others: "❌ One-size kits" },
    { feature: "Green Lawn Guarantee · 2-Year Parts on New Installs", us: "✅ Every install", others: "❌ Rare or none" },
    { feature: "Licensed irrigators", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Smart-controller ready", us: "✅ Standard", others: "❌ Extra charge later" },
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly estimates" }
  ];

  const faq = [
    { question: "How much does a new sprinkler system cost in Waco?", answer: "Most residential systems range from $2,500–$6,500 depending on lot size, zones, and head types. We provide a flat-rate written quote after the design walk." },
    { question: "How long does installation take?", answer: "Most residential installs finish in 1–3 days depending on yard size and soil conditions." },
    { question: "Do you pull permits when required?", answer: "Yes — we handle local irrigation permitting requirements for Waco and surrounding cities when applicable." },
    { question: "Can you replace an old system?", answer: "Absolutely. We evaluate existing pipe and valves, salvage what makes sense, and redesign zones that never worked right." },
    { question: "Do new systems include a smart controller?", answer: "We can install a standard or smart controller. Many homeowners choose weather-based smart controllers to cut water use." },
    { question: "What is the Green Lawn Guarantee?", answer: "We stand behind install workmanship and zone coverage. If coverage issues appear from our design or install within the guarantee window, we make it right." }
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
        { label: "Sprinkler Installation" },
      ]} />

      <SectionIntro
        title="Sprinkler Installation in Waco, TX"
        subtitle={"Custom-designed sprinkler systems for Central Texas lawns — efficient zones, quality heads, smart-ready controllers, and a Green Lawn Guarantee on every new install."}
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/sprinkler-install" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Sprinkler Installation FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Sprinkler Installation Service" cityName="Waco" slug="/services/sprinkler-install" spot="sprinkler-install-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Sprinkler Installation Today?"
        subline="Green Lawn Guarantee · 2-Year Parts on New Installs. Flat-rate pricing. Licensed irrigators."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
