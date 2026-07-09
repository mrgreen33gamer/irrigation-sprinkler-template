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

export default function HoaCommunitiesPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "No proactive irrigation maintenance schedule", consequence: "Common areas fail reactively after resident complaints — driving emergency rates and brown entrances instead of planned, budgeted work." },
    { icon: faFileInvoiceDollar, problem: "Water bills spike with no clear cause", consequence: "Leaks, overwatering, and failed sensors quietly inflate municipal water costs across the association." },
    { icon: faUsers, problem: "Residents notice brown patches first", consequence: "Missed coverage at entrances and parks creates complaints that reliable seasonal service would prevent." },
    { icon: faBuilding, problem: "Different contractors leave inconsistent quality", consequence: "Rotating freelancers leave mismatched heads, wrong nozzles, and no documentation for the next board." },
    { icon: faClipboardList, problem: "No single point of contact for multi-zone work", consequence: "Coordinating separate quotes for each park and entrance wastes management time." },
    { icon: faHandshake, problem: "Vendors ignore board approval workflows", consequence: "Access notices, owner approvals, and CapEx timelines all move on their own schedule." }
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Common-Area Planning", description: "Phased schedules across parks, entrances, medians, and amenity lawns." },
    { icon: faFileInvoiceDollar, title: "Board-Ready Pricing", description: "Clear scopes and volume-friendly rates ownership can approve with confidence." },
    { icon: faUsers, title: "Resident-Friendly Scheduling", description: "We coordinate access windows so your office is not fielding angry calls about brown turf." }
  ];

  const processSteps = [
    { number: 1, title: "Property Walk", description: "We document common-area zones, controllers, and risk areas.", icon: faSearch },
    { number: 2, title: "Phased Plan & Quote", description: "Multi-zone pricing and a schedule synced to board budgets.", icon: faCalendarAlt },
    { number: 3, title: "Execute by Area", description: "Crews move entrance-to-park with consistent quality and testing.", icon: faRocket },
    { number: 4, title: "Standing Maintenance", description: "Optional seasonal service so irrigation stays on a plan.", icon: faClipboardList }
  ];

  const metrics = [
    { icon: faTrophy, value: 120, label: "HOA common areas serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 25, label: "HOAs on standing service", suffix: "+", duration: 2 },
    { icon: faClock, value: 14, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "HOA common-area planning", us: "✅ Full portfolio plan", others: "❌ One-off calls only" },
    { feature: "Board-ready written scopes", us: "✅ Clear line items", others: "❌ Vague estimates" },
    { feature: "Single point of contact", us: "✅ Dedicated lead", others: "❌ Different tech each time" },
    { feature: "COIs on request", us: "✅ Always available", others: "❌ Delayed or missing" },
    { feature: "Licensed irrigators", us: "✅ Always", others: "❌ Not always" }
  ];

  const faq = [
    { question: "Do you work with HOA boards and management companies?", answer: "Yes — common areas, entrances, parks, and amenity lawns are core commercial work for us." },
    { question: "Can you provide certificates of insurance?", answer: "Yes — COIs for HOAs and management companies are available on request." },
    { question: "Do you offer standing seasonal service?", answer: "Yes. Spring start-ups, mid-season checks, and winterization can be scheduled on a standing plan." },
    { question: "Can you standardize controllers across multiple entrances?", answer: "Yes. Consistent smart controllers and documentation are part of our multi-site approach." },
    { question: "What areas do you cover for HOA work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." }
  ];

  const services = [
    { icon: faWrench, title: "Sprinkler Repair", body: "Fast common-area ticket resolution.", link: "/services/sprinkler-repair" },
    { icon: faTint, title: "Sprinkler Installation", body: "Entrance and park system redesigns.", link: "/services/sprinkler-install" },
    { icon: faCogs, title: "Smart Controllers", body: "Weather-based control for multi-zone sites.", link: "/services/smart-controllers" },
    { icon: faSeedling, title: "Drip Irrigation", body: "Bed and median drip conversions.", link: "/services/drip-irrigation" }
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "HOA Communities" }]} />
      <SectionIntro title={"Irrigation Service for HOA Communities"} subtitle={"Common-area sprinklers, entrance beds, and multi-zone controllers managed with portfolio-friendly scheduling, COIs, and flat-rate scopes boards can approve."} />
      <TrustBar headline={"HOA boards and property managers trust AquaArc for common-area irrigation"} />
      <div className={styles.section}><IndustryPainPoints industry={"HOA communities"} painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Built for HOA Boards & Managers"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services This Sector Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/hoa-communities" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="HOA Communities FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Quote" cityName="Waco" slug="industries/hoa-communities" spot="hoa-communities-industry-form" formVariant={2} /></div>
      <CTABanner headline={"Need an Irrigation Vendor Who Understands HOAs?"} subline={"COIs available. Volume pricing. Single point of contact for common areas."} primaryText="Call (254) 990-2020" primaryLink="tel:+12549902020" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
