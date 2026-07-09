// AquaArc Irrigation — Winterization Service Page
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

export default function WinterizationPage() {

  const expectations = [
    { icon: faSnowflake, title: "Freeze-Ready Checklist", description: "Controller shutdown, manual valves, backflow insulation, and vulnerable zone notes." },
    { icon: faFileContract, title: "Clear Prep Scope", description: "You know exactly what we did and what to do if another freeze hits overnight." },
    { icon: faCheckCircle, title: "Backflow Protection", description: "Insulation and protection for above-ground backflow assemblies that freeze first." },
    { icon: faShieldHalved, title: "Spring Restart Available", description: "Book a spring start-up so zones are balanced when grass greens up." }
  ];

  const whyFeatures = [
    { icon: faClock, title: "Before the Front Hits", description: "We prioritize freeze windows so you are not scrambling after pipes split." },
    { icon: faWrench, title: "Local Freeze Knowledge", description: "Waco freezes hit hard and fast — we know which components fail first." },
    { icon: faShieldHalved, title: "Pairs With Spring Tune-Ups", description: "Winter prep + spring start-up keeps systems healthy year-round." }
  ];

  const processSteps = [
    { number: 1, title: "Schedule Ahead", description: "Book before the first hard freeze forecast.", icon: faHeadset },
    { number: 2, title: "System Prep", description: "Shutoff guidance, drainage points, and backflow protection.", icon: faSearch },
    { number: 3, title: "Document Status", description: "Notes on any leaks or weak valves found during prep.", icon: faFileContract },
    { number: 4, title: "Spring Restart Plan", description: "Optional spring commission to get watering right again.", icon: faCheckCircle }
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
    { feature: "Backflow freeze protection", us: "✅ Included focus", others: "❌ Often ignored" },
    { feature: "Owner freeze checklist", us: "✅ Written guidance", others: "❌ Verbal only" },
    { feature: "Problem flags for spring", us: "✅ Documented", others: "❌ Forgotten" },
    { feature: "Licensed irrigator service", us: "✅ Always", others: "❌ Handyman" }
  ];

  const faq = [
    { question: "Do sprinkler systems need winterization in Texas?", answer: "Yes for many systems — especially above-ground backflows and exposed piping. Texas freezes are infrequent but can destroy unprotected components overnight." },
    { question: "Should I shut my system off for freeze nights?", answer: "Yes. Shut off irrigation water supply and power down the controller when hard freezes are forecast. We provide a simple checklist." },
    { question: "Do you insulate backflow preventers?", answer: "Yes — proper insulation (not sealed plastic bags) protects the most freeze-sensitive part of many residential systems." },
    { question: "When should I restart in spring?", answer: "When freeze risk drops and turf begins active growth. Our seasonal tune-ups include spring start-up and coverage checks." }
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
        { label: "Winterization" },
      ]} />

      <SectionIntro
        title="Winterization in Waco, TX"
        subtitle={"Central Texas freezes are short but brutal. We prep systems, protect backflows, and guide shutoff so freeze events do not split pipes and valves."}
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/winterization" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Winterization FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Winterization Service" cityName="Waco" slug="/services/winterization" spot="winterization-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Winterization Today?"
        subline="Green Lawn Guarantee · 2-Year Parts on New Installs. Flat-rate pricing. Licensed irrigators."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
