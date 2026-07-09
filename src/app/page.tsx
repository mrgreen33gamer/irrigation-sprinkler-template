// AquaArc Irrigation — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faTint, faWrench, faSeedling, faCogs, faSnowflake, faCalendarCheck,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faTint,
      title: "Sprinkler Installation",
      body: "Custom-designed systems for Texas heat — efficient zones, quality heads, smart-ready controllers, and a Green Lawn Guarantee on every install.",
      link: "/services/sprinkler-install",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faWrench,
      title: "Sprinkler Repair",
      body: "Broken heads, leaks, low pressure, stuck valves, and dry zones. Same-day diagnosis with common parts stocked on every truck.",
      link: "/services/sprinkler-repair",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faSeedling,
      title: "Drip Irrigation",
      body: "Beds, trees, and gardens watered at the root zone — less waste, healthier plants, no overspray on hardscape.",
      link: "/services/drip-irrigation",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faCogs,
      title: "Smart Controllers",
      body: "Weather-based schedules, app control, and real water savings — installed and programmed correctly.",
      link: "/services/smart-controllers",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faSnowflake,
      title: "Winterization",
      body: "Freeze prep and backflow protection so short Texas freezes don't split pipes and valves overnight.",
      link: "/services/winterization",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faCalendarCheck,
      title: "Seasonal Tune-Ups",
      body: "Spring start-up, summer efficiency checks, and fall prep so coverage stays even and water bills stay sane.",
      link: "/services/seasonal-tuneups",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 8000, label: "Systems serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 14,   label: "Years of local irrigation experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we dig or swap parts. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed Irrigators",
      description: "Every tech is a licensed irrigator, bonded, and insured. No unlicensed freelancers guessing at your system.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2012",
      description: "We're not a franchise. AquaArc Irrigation was founded in Waco by Seth Moreno. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Diagnose On-Site",
      description: "A licensed irrigator inspects the system, explains the issue in plain English, and shows options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Guaranteed",
      description: "Quality parts, clean workmanship, Green Lawn Guarantee · 2-Year Parts on New Installs. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest System Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Beds protected, trenches restored, fittings cleaned up. Your lawn and landscape left the way we found them — or better.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Coverage That Actually Works",
      description: "We test every zone under pressure and adjust arcs so you get green grass — not wet sidewalks and dry patches.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial irrigation coverage. On our regular route.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and estates.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full irrigation service across Bell County communities.",              badge: "" },
  ];

  const faq = [
    { question: "How much does sprinkler repair cost in Waco?", answer: "Simple head or nozzle fixes often run $75–$200. Valve or lateral leaks typically $150–$450. New installs vary by lot size. We always quote flat-rate before work starts." },
    { question: "Do you install smart controllers?", answer: "Yes — Hunter Hydrawise, Rain Bird, Rachio, and other weather-based controllers, fully programmed with app training." },
    { question: "Are you licensed?", answer: "Yes — Licensed Irrigator · Bonded & Insured." },
    { question: "Do you service HOAs and commercial properties?", answer: "Yes — HOA common areas, commercial campuses, and sports fields are core parts of our business." },
    { question: "What is the Green Lawn Guarantee?", answer: "We stand behind install workmanship and zone coverage. If coverage issues appear from our design or install within the guarantee window, we make it right. New installs also include 2-year parts coverage." },
    { question: "Do you offer seasonal maintenance?", answer: "Yes — spring start-ups, summer efficiency checks, winterization, and tune-ups to keep systems efficient year-round." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="4.9★ · 1,050+ reviews · 8,000+ systems serviced across Central Texas" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Irrigation Services Built for Central Texas" cards={services} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose AquaArc" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <CTABanner
        headline="Green Lawns. Smart Water."
        subline="Sprinkler repair, seasonal start-ups, and smart controllers that stop wasting water on Texas clay."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Book Sprinkler Tech"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" />
      </div>
      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Irrigation FAQs for Waco Homeowners" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/" spot="homepage-form" formVariant={2} />
      </div>
    </main>
  );
}
