// AquaArc Irrigation — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTint, faWrench, faSeedling, faCogs, faSnowflake, faCalendarCheck,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faTint,          title: "Sprinkler Installation", body: "Custom-designed systems for Texas heat — efficient zones, quality heads, smart-ready controllers, Green Lawn Guarantee.", link: "/services/sprinkler-install" },
    { icon: faWrench,        title: "Sprinkler Repair",       body: "Broken heads, leaks, low pressure, stuck valves, and dead zones. Same-day diagnosis with parts stocked on every truck.", link: "/services/sprinkler-repair" },
    { icon: faSeedling,      title: "Drip Irrigation",        body: "Beds, trees, and gardens watered at the root zone — less waste, healthier plants, no overspray on hardscape.", link: "/services/drip-irrigation" },
    { icon: faCogs,          title: "Smart Controllers",      body: "Weather-based schedules, app control, and real water savings — installed and programmed correctly.", link: "/services/smart-controllers" },
    { icon: faSnowflake,     title: "Winterization",          body: "Freeze prep, backflow protection, and shutoff guidance so short Texas freezes don't destroy your system.", link: "/services/winterization" },
    { icon: faCalendarCheck, title: "Seasonal Tune-Ups",      body: "Spring start-up, summer efficiency checks, and fall prep so coverage stays even and water bills stay sane.", link: "/services/seasonal-tuneups" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we dig or swap parts. No hourly surprises mid-job." },
    { icon: faShieldHalved,   title: "Licensed Irrigators",  description: "Every tech is a licensed irrigator, bonded, and insured — not a handyman guessing at hydraulics." },
    { icon: faUsers,          title: "Locally Owned Since 2012", description: "Founded in Waco by Seth Moreno. Every decision is made locally — not by a call center franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Diagnose On-Site", description: "A licensed irrigator inspects the system and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Done Right, Guaranteed", description: "Quality parts, clean workmanship, Green Lawn Guarantee · 2-Year Parts on New Installs.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 8000, label: "Systems serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years of local irrigation experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does irrigation service cost in Waco?", answer: "Repairs typically range from $75–$450 depending on the issue. New installs vary by lot size and zones. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work on all sprinkler brands?", answer: "Yes — Rain Bird, Hunter, Toro, Irritrol, Rachio, and more for heads, valves, and controllers." },
    { question: "What does a seasonal tune-up include?", answer: "Zone-by-zone inspection, head/nozzle adjustments, controller review, visible leak check, and recommendations for repairs." },
    { question: "Do you offer same-day service?", answer: "Yes — same-day irrigation service is available most weekdays. Call (254) 990-2020." },
    { question: "Are you licensed and insured?", answer: "Yes — AquaArc Irrigation is Licensed Irrigator · Bonded & Insured." },
    { question: "Do you offer a guarantee?", answer: "Yes — Green Lawn Guarantee · 2-Year Parts on New Installs." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Irrigation Services for Waco & Central Texas"
        subtitle="Sprinklers · Drip · Smart Controllers · Repair — designed, repaired, and optimized by licensed irrigators with flat-rate pricing and a Green Lawn Guarantee."
      />

      <TrustBar headline="8,000+ Central Texas systems serviced by AquaArc Irrigation" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose AquaArc" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Irrigation Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Irrigation Service Today?"
        subline="Same-day appointments available. Flat-rate pricing. Green Lawn Guarantee · 2-Year Parts on New Installs."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
