"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faWrench, faTint, faCogs, faSeedling,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialPropertiesPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Irrigation only gets attention after complaints", consequence: "Brown frontage and wet parking lots become tenant and shopper issues instead of planned maintenance." },
    { icon: faFileInvoiceDollar, problem: "Water costs climb without accountability", consequence: "Leaks and bad schedules quietly inflate operating expenses across the portfolio." },
    { icon: faUsers, problem: "Daytime work disrupts tenants", consequence: "Without after-hours or phased scheduling, irrigation crews conflict with business hours." },
    { icon: faBuilding, problem: "Multiple vendors, zero documentation", consequence: "No as-built notes means every new tech starts from scratch." },
    { icon: faClipboardList, problem: "CapEx surprises on aging systems", consequence: "Controllers and mainlines fail without a multi-year replacement plan." },
    { icon: faHandshake, problem: "Vendors cannot scale across sites", consequence: "Each property needs a new quote process instead of portfolio standards." }
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Tenant-Aware Scheduling", description: "Phased or after-hours work that protects business operations." },
    { icon: faFileInvoiceDollar, title: "OpEx-Friendly Pricing", description: "Clear scopes and multi-site rates ownership can forecast." },
    { icon: faUsers, title: "Single Account Lead", description: "One point of contact for every site in the portfolio." }
  ];

  const processSteps = [
    { number: 1, title: "Site Assessment", description: "Walk common landscape, map controllers, flag leaks and risk.", icon: faSearch },
    { number: 2, title: "Scope & Schedule", description: "Written plan synced to occupancy and budget cycles.", icon: faCalendarAlt },
    { number: 3, title: "Execute Cleanly", description: "Crews complete work with pressure tests and zone notes.", icon: faRocket },
    { number: 4, title: "Standing Service", description: "Optional seasonal checks keep curb appeal consistent.", icon: faClipboardList }
  ];

  const metrics = [
    { icon: faTrophy, value: 200, label: "Commercial sites serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 40, label: "Multi-site portfolios supported", suffix: "+", duration: 2 },
    { icon: faClock, value: 14, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-site portfolio support", us: "✅ Account-level planning", others: "❌ Per-ticket only" },
    { feature: "After-hours options", us: "✅ Available", others: "❌ Daytime only" },
    { feature: "COIs & vendor compliance", us: "✅ Fast turnaround", others: "❌ Slow" },
    { feature: "Licensed irrigators", us: "✅ Always", others: "❌ Not always" }
  ];

  const faq = [
    { question: "Do you service multi-site commercial portfolios?", answer: "Yes — we support offices, retail, and campus properties with consistent crews and documentation." },
    { question: "Can work be scheduled after hours?", answer: "Yes for many commercial sites — we coordinate access and noise-sensitive windows with property teams." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs are available for property managers and ownership groups on request." },
    { question: "Can you upgrade commercial controllers?", answer: "Yes — weather-based commercial controllers with flow sensing options where applicable." }
  ];

  const services = [
    { icon: faWrench, title: "Sprinkler Repair", body: "Leak and zone response for occupied sites.", link: "/services/sprinkler-repair" },
    { icon: faTint, title: "Sprinkler Installation", body: "Frontage redesigns and system replacements.", link: "/services/sprinkler-install" },
    { icon: faCogs, title: "Smart Controllers", body: "Commercial-grade weather control.", link: "/services/smart-controllers" },
    { icon: faSeedling, title: "Drip Irrigation", body: "Bed and planter efficiency upgrades.", link: "/services/drip-irrigation" }
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-property irrigation work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular commercial and HOA coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Campuses and multi-site portfolios near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban HOA and commercial sites.", badge: "" },
    { town: "Woodway", benefit: "Premium HOAs and office campuses.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site and common-area systems.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Commercial Properties" }]} />
      <SectionIntro title={"Irrigation for Commercial Properties"} subtitle={"Office parks, retail centers, campuses, and multi-site portfolios — irrigation kept green, efficient, and presentable without disrupting tenants."} />
      <TrustBar headline={"Commercial property teams choose AquaArc for reliable irrigation service"} />
      <div className={styles.section}><IndustryPainPoints industry={"commercial properties"} painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Built for Commercial Property Teams"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services This Sector Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/commercial-properties" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial Properties FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Quote" cityName="Waco" slug="industries/commercial-properties" spot="commercial-properties-industry-form" formVariant={2} /></div>
      <CTABanner headline={"Need Irrigation That Protects Curb Appeal?"} subline={"COIs available. After-hours options. Single point of contact."} primaryText="Call (254) 990-2020" primaryLink="tel:+12549902020" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
