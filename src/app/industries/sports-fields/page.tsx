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

export default function SportsFieldsPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Watering conflicts with practice and games", consequence: "Wet fields, cancelled practices, and frustrated coaches when schedules are not coordinated." },
    { icon: faFileInvoiceDollar, problem: "Uneven coverage creates safety and play issues", consequence: "Hard spots and mud zones increase injury risk and field complaints." },
    { icon: faUsers, problem: "Controllers left on wrong seasonal programs", consequence: "Overwatering after rain or underwatering before tournaments ruins turf quality." },
    { icon: faBuilding, problem: "Aging mainlines fail mid-season", consequence: "Emergency repairs during peak athletic season cost more and disrupt play." },
    { icon: faClipboardList, problem: "No documentation for facilities teams", consequence: "Every new season starts with tribal knowledge instead of zone maps." },
    { icon: faHandshake, problem: "Budget cycles need predictable maintenance", consequence: "Surprise CapEx hits after preventable valve and head failures." }
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Calendar-Aware Scheduling", description: "Watering windows planned around practices, games, and events." },
    { icon: faFileInvoiceDollar, title: "School Budget Friendly", description: "Clear scopes and seasonal plans facilities teams can plan for." },
    { icon: faUsers, title: "Turf-Focused Coverage", description: "Head types and runtimes matched to athletic turf demands." }
  ];

  const processSteps = [
    { number: 1, title: "Field Assessment", description: "Coverage audit, pressure check, and controller review.", icon: faSearch },
    { number: 2, title: "Season Plan", description: "Maintenance and watering strategy synced to the athletic calendar.", icon: faCalendarAlt },
    { number: 3, title: "Execute Repairs/Upgrades", description: "Heads, valves, and smart control improved with minimal downtime.", icon: faRocket },
    { number: 4, title: "Ongoing Support", description: "Mid-season checks keep fields playable.", icon: faClipboardList }
  ];

  const metrics = [
    { icon: faTrophy, value: 60, label: "Fields and campus zones serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 18, label: "Schools & athletic programs served", suffix: "+", duration: 2 },
    { icon: faClock, value: 14, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Athletic calendar coordination", us: "✅ Built into planning", others: "❌ Generic scheduling" },
    { feature: "Coverage uniformity focus", us: "✅ Field-first", others: "❌ Residential habits" },
    { feature: "Smart control for large sites", us: "✅ Available", others: "❌ Basic timers only" },
    { feature: "Licensed irrigators", us: "✅ Always", others: "❌ Not always" }
  ];

  const faq = [
    { question: "Do you work with school districts and private athletic clubs?", answer: "Yes — campuses, practice fields, and competition turf are within our commercial scope." },
    { question: "Can you avoid watering during events?", answer: "Yes. We program rain delays, manual holds, and smart weather skips so fields stay playable." },
    { question: "Do you handle large commercial valves and mainlines?", answer: "Yes — we service commercial valves, isolation points, and coordinate larger repairs as needed." },
    { question: "Can facilities get zone maps and notes?", answer: "Yes — documentation is part of our multi-zone commercial approach." }
  ];

  const services = [
    { icon: faWrench, title: "Sprinkler Repair", body: "Mid-season field fixes and valve work.", link: "/services/sprinkler-repair" },
    { icon: faTint, title: "Sprinkler Installation", body: "Field and campus system design.", link: "/services/sprinkler-install" },
    { icon: faCogs, title: "Smart Controllers", body: "Weather-based campus control.", link: "/services/smart-controllers" },
    { icon: faSeedling, title: "Seasonal Tune-Ups", body: "Start-up and mid-season checks.", link: "/services/seasonal-tuneups" }
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Sports Fields & Schools" }]} />
      <SectionIntro title={"Irrigation for Sports Fields & Schools"} subtitle={"Athletic turf, practice fields, and campus grounds kept playable and green with reliable coverage, smart scheduling, and maintenance that fits school calendars."} />
      <TrustBar headline={"Schools and athletic programs trust AquaArc for field irrigation"} />
      <div className={styles.section}><IndustryPainPoints industry={"sports fields & schools"} painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Built for Athletic & Campus Grounds"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services This Sector Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/sports-fields" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Sports Fields & Schools FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Quote" cityName="Waco" slug="industries/sports-fields" spot="sports-fields-industry-form" formVariant={2} /></div>
      <CTABanner headline={"Need Field Irrigation You Can Count On?"} subline={"Game-day readiness. Seasonal plans. Licensed irrigators."} primaryText="Call (254) 990-2020" primaryLink="tel:+12549902020" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
