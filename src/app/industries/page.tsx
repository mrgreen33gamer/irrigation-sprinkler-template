// AquaArc Irrigation — Industries Index
"use client";

import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faBuilding, faCity, faFutbol,
  faShieldHalved, faUsers, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const cards = [
    { icon: faBuilding, title: "HOA Communities", body: "Common-area sprinklers, entrances, and multi-zone controllers with board-ready scopes and COIs.", link: "/industries/hoa-communities" },
    { icon: faCity, title: "Commercial Properties", body: "Office parks, retail, and multi-site portfolios — curb appeal and water efficiency without tenant disruption.", link: "/industries/commercial-properties" },
    { icon: faFutbol, title: "Sports Fields & Schools", body: "Athletic turf and campus grounds kept playable with calendar-aware irrigation service.", link: "/industries/sports-fields" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Account-Level Planning", description: "Portfolio schedules and documentation — not one-off tickets with no memory." },
    { icon: faShieldHalved, title: "Licensed & Insured", description: "Licensed Irrigator · Bonded & Insured. COIs available for property managers and boards." },
    { icon: faUsers, title: "Single Point of Contact", description: "One lead for multi-site work so your team is not chasing vendors." },
  ];

  const faq = [
    { question: "Do you offer commercial irrigation contracts?", answer: "Yes — standing seasonal service and multi-site agreements are available for HOAs, commercial portfolios, and campuses." },
    { question: "Can you provide certificates of insurance?", answer: "Yes — COIs are available on request for property managers, boards, and school facilities teams." },
    { question: "What industries do you serve?", answer: "HOA communities, commercial properties, and sports fields & schools across Central Texas — plus residential irrigation for homeowners." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Industries We Serve"
        subtitle="Irrigation solutions for HOAs, commercial properties, and athletic campuses across Waco and Central Texas."
      />
      <TrustBar headline="Commercial and multi-site irrigation — done right by licensed irrigators" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Sectors" cards={cards} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Teams Choose AquaArc" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Service FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Commercial Quote" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need Multi-Site Irrigation Support?"
        subline="HOAs, commercial campuses, and sports fields. Flat-rate scopes. COIs available."
        primaryText="Call (254) 990-2020"
        primaryLink="tel:+12549902020"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
