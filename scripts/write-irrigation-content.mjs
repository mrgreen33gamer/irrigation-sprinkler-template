/**
 * Write AquaArc Irrigation content files (services, industries, blogs, chrome, libs).
 * node scripts/write-irrigation-content.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const w = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content.replace(/\r\n/g, '\n'), 'utf8');
  console.log('wrote', rel);
};

const BRAND = 'AquaArc Irrigation';
const PHONE = '(254) 990-2020';
const TEL = 'tel:+12549902020';
const PHONE_E164 = '+12549902020';
const EMAIL = 'hello@aquaarcirrigation.com';
const DOMAIN = 'https://www.aquaarcirrigation.com';
const ADDR = '900 S University Parks Dr';
const ZIP = '76706';
const OWNER = 'Seth Moreno';
const FOUNDED = '2012';
const LICENSE = 'Licensed Irrigator · Bonded & Insured';
const GUARANTEE = 'Green Lawn Guarantee · 2-Year Parts on New Installs';
const TAGLINE = 'Sprinklers · Drip · Smart Controllers · Repair';
const ACCENT = '#0284c7';

const serviceLayout = (slug, title, desc, keywords) => `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${DOMAIN}';
const url = BASE_URL + '/services/${slug}';

export const metadata: Metadata = {
  title: "${title} Waco TX | ${BRAND}",
  description: ${JSON.stringify(desc)},
  keywords: ${JSON.stringify(keywords)},
  alternates: { canonical: url },
  openGraph: {
    title: "${title} Waco TX | ${BRAND}",
    description: ${JSON.stringify(desc)},
    url,
    siteName: "${BRAND}",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title} Waco TX | ${BRAND}",
    description: ${JSON.stringify(desc)},
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${title}",
  description: ${JSON.stringify(desc)},
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "${BRAND}",
    url: BASE_URL,
    telephone: "${PHONE_E164}",
    address: {
      "@type": "PostalAddress",
      streetAddress: "${ADDR}",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "${ZIP}",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "${title}",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
`;

const servicePage = (cfg) => `// ${BRAND} — ${cfg.title} Service Page
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

export default function ${cfg.component}Page() {

  const expectations = ${JSON.stringify(cfg.expectations, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

  const whyFeatures = ${JSON.stringify(cfg.whyFeatures, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

  const processSteps = ${JSON.stringify(cfg.processSteps, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

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

  const comparisonRows = ${JSON.stringify(cfg.comparisonRows, null, 2)};

  const faq = ${JSON.stringify(cfg.faq, null, 2)};

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
        { label: "${cfg.title}" },
      ]} />

      <SectionIntro
        title="${cfg.title} in Waco, TX"
        subtitle={${JSON.stringify(cfg.subtitle)}}
      />

      <TrustBar headline="8,000+ Central Texas irrigation systems serviced by ${BRAND}" />

      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose ${BRAND}" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="${BRAND} vs. The Other Guys" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Irrigation Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/${cfg.slug}" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${cfg.title} FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request ${cfg.title} Service" cityName="Waco" slug="/services/${cfg.slug}" spot="${cfg.slug}-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need ${cfg.title} Today?"
        subline="${GUARANTEE}. Flat-rate pricing. Licensed irrigators."
        primaryText="Call ${PHONE}"
        primaryLink="${TEL}"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
`;

// Fix icon serialization - better approach: write service pages with template literals properly
function sp(cfg) {
  const exp = cfg.expectations.map(e =>
    `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} }`
  ).join(',\n');
  const why = cfg.whyFeatures.map(e =>
    `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} }`
  ).join(',\n');
  const steps = cfg.processSteps.map(e =>
    `    { number: ${e.number}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)}, icon: ${e.icon} }`
  ).join(',\n');
  const rows = cfg.comparisonRows.map(r =>
    `    { feature: ${JSON.stringify(r.feature)}, us: ${JSON.stringify(r.us)}, others: ${JSON.stringify(r.others)} }`
  ).join(',\n');
  const faq = cfg.faq.map(f =>
    `    { question: ${JSON.stringify(f.question)}, answer: ${JSON.stringify(f.answer)} }`
  ).join(',\n');

  return `// ${BRAND} — ${cfg.title} Service Page
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

export default function ${cfg.component}Page() {

  const expectations = [
${exp}
  ];

  const whyFeatures = [
${why}
  ];

  const processSteps = [
${steps}
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
${rows}
  ];

  const faq = [
${faq}
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
        { label: "${cfg.title}" },
      ]} />

      <SectionIntro
        title="${cfg.title} in Waco, TX"
        subtitle={${JSON.stringify(cfg.subtitle)}}
      />

      <TrustBar headline="8,000+ Central Texas irrigation systems serviced by ${BRAND}" />

      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose ${BRAND}" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="${BRAND} vs. The Other Guys" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Irrigation Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/${cfg.slug}" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${cfg.title} FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request ${cfg.title} Service" cityName="Waco" slug="/services/${cfg.slug}" spot="${cfg.slug}-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need ${cfg.title} Today?"
        subline="${GUARANTEE}. Flat-rate pricing. Licensed irrigators."
        primaryText="Call ${PHONE}"
        primaryLink="${TEL}"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
`;
}

const services = [
  {
    slug: 'sprinkler-install', component: 'SprinklerInstall', title: 'Sprinkler Installation',
    desc: 'Professional sprinkler system installation in Waco and Central Texas. Custom design, efficient zones, Green Lawn Guarantee, 2-year parts on new installs. Licensed irrigators.',
    keywords: ['sprinkler installation Waco TX', 'new sprinkler system Waco', 'irrigation install Central Texas', 'lawn sprinkler installation Waco', 'AquaArc Irrigation'],
    subtitle: 'Custom-designed sprinkler systems for Central Texas lawns — efficient zones, quality heads, smart-ready controllers, and a Green Lawn Guarantee on every new install.',
    expectations: [
      { icon: 'faSearch', title: 'Property Walk & Design', description: 'We map sun exposure, slope, soil, and plant types so every zone waters what it should — not the sidewalk.' },
      { icon: 'faFileContract', title: 'Flat-Rate Written Quote', description: 'You get a clear design scope and price before trenching starts. No surprise add-ons mid-install.' },
      { icon: 'faCheckCircle', title: 'Clean Install & Commissioning', description: 'Proper depth, head spacing, pressure checks, and a full system walkthrough before we leave.' },
      { icon: 'faShieldHalved', title: GUARANTEE, description: 'New installs include 2-year parts coverage and our Green Lawn Guarantee on workmanship.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'Designed for Texas Heat', description: 'Zone layouts and nozzle selection matched to Waco summers — not generic box-store kits.' },
      { icon: 'faWrench', title: 'Licensed Irrigators', description: 'Every design and install is performed by licensed irrigators — bonded and insured.' },
      { icon: 'faShieldHalved', title: 'Smart-Ready From Day One', description: 'Controllers and wiring ready for weather-based smart upgrades without redoing the system.' },
    ],
    processSteps: [
      { number: 1, title: 'Call or Book', description: 'Phone, text, or online — we schedule a free design visit.', icon: 'faHeadset' },
      { number: 2, title: 'Design On-Site', description: 'We walk the property, map zones, and explain the plan in plain English.', icon: 'faSearch' },
      { number: 3, title: 'Flat-Rate Quote', description: 'Written scope and price before any trenching begins.', icon: 'faFileContract' },
      { number: 4, title: 'Install & Warranty', description: 'Clean install, pressure test, schedule setup, Green Lawn Guarantee.', icon: 'faCheckCircle' },
    ],
    comparisonRows: [
      { feature: 'Custom zone design for Texas conditions', us: '✅ Always', others: '❌ One-size kits' },
      { feature: GUARANTEE, us: '✅ Every install', others: '❌ Rare or none' },
      { feature: 'Licensed irrigators', us: '✅ All techs', others: '❌ Not always' },
      { feature: 'Smart-controller ready', us: '✅ Standard', others: '❌ Extra charge later' },
      { feature: 'Flat-rate price before work starts', us: '✅ Always written', others: '❌ Hourly estimates' },
    ],
    faq: [
      { question: 'How much does a new sprinkler system cost in Waco?', answer: 'Most residential systems range from $2,500–$6,500 depending on lot size, zones, and head types. We provide a flat-rate written quote after the design walk.' },
      { question: 'How long does installation take?', answer: 'Most residential installs finish in 1–3 days depending on yard size and soil conditions.' },
      { question: 'Do you pull permits when required?', answer: 'Yes — we handle local irrigation permitting requirements for Waco and surrounding cities when applicable.' },
      { question: 'Can you replace an old system?', answer: 'Absolutely. We evaluate existing pipe and valves, salvage what makes sense, and redesign zones that never worked right.' },
      { question: 'Do new systems include a smart controller?', answer: 'We can install a standard or smart controller. Many homeowners choose weather-based smart controllers to cut water use.' },
      { question: 'What is the Green Lawn Guarantee?', answer: 'We stand behind install workmanship and zone coverage. If coverage issues appear from our design or install within the guarantee window, we make it right.' },
    ],
  },
  {
    slug: 'sprinkler-repair', component: 'SprinklerRepair', title: 'Sprinkler Repair',
    desc: 'Same-day sprinkler repair in Waco TX — broken heads, leaks, low pressure, stuck valves, and zone failures. Flat-rate pricing. Licensed irrigators. Green Lawn Guarantee.',
    keywords: ['sprinkler repair Waco TX', 'broken sprinkler head Waco', 'irrigation leak repair Central Texas', 'sprinkler system not working Waco', 'AquaArc Irrigation'],
    subtitle: 'Broken heads, wet spots, dry patches, low pressure, or a zone that never turns on — we diagnose fast, quote flat-rate, and fix it the same visit whenever parts allow.',
    expectations: [
      { icon: 'faSearch', title: 'Same-Day Diagnosis', description: 'We run zones, check pressure, and show you exactly what failed — no vague “needs work” talk.' },
      { icon: 'faFileContract', title: 'Flat-Rate Quote First', description: 'Written price before we dig or replace parts. The number does not change mid-job.' },
      { icon: 'faCheckCircle', title: 'Stocked Trucks', description: 'Common heads, nozzles, fittings, and solenoids on every truck — most repairs finish in one visit.' },
      { icon: 'faShieldHalved', title: 'Workmanship Backed', description: 'Repairs are done right and tested under pressure before we leave.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'Emergency Leak Response', description: 'Active leaks waste water and money. We prioritize blowouts and major leaks.' },
      { icon: 'faWrench', title: 'All Major Brands', description: 'Rain Bird, Hunter, Toro, Irritrol, and more — valves, heads, and controllers.' },
      { icon: 'faShieldHalved', title: 'Licensed Irrigators', description: 'Not handymen guessing at hydraulics — licensed irrigation pros.' },
    ],
    processSteps: [
      { number: 1, title: 'Call or Book', description: 'Describe the issue — broken head, leak, dry zone — we schedule fast.', icon: 'faHeadset' },
      { number: 2, title: 'Tech Arrives', description: 'We inspect zones, valves, and pressure on site.', icon: 'faSearch' },
      { number: 3, title: 'Flat-Rate Quote', description: 'Clear options and price before any work starts.', icon: 'faFileContract' },
      { number: 4, title: 'Repair & Test', description: 'Fix, re-test coverage, and confirm the schedule is right.', icon: 'faCheckCircle' },
    ],
    comparisonRows: [
      { feature: 'Flat-rate price before work starts', us: '✅ Always written', others: '❌ Hourly + guesswork' },
      { feature: 'Parts stocked for common failures', us: '✅ Most same-visit', others: '❌ Return trips' },
      { feature: 'Licensed irrigators', us: '✅ All techs', others: '❌ Not always' },
      { feature: 'Full zone & pressure check', us: '✅ Every repair', others: '❌ Patch only' },
      { feature: 'Same-day availability', us: '✅ Most days', others: '❌ Days later' },
    ],
    faq: [
      { question: 'How much does sprinkler repair cost in Waco?', answer: 'Simple head or nozzle fixes often run $75–$200. Valve or lateral leaks typically $150–$450. We quote flat-rate after diagnosis.' },
      { question: 'Why is one zone not working?', answer: 'Common causes include failed solenoids, stuck valves, wiring faults, clogged nozzles, or controller programming errors. We isolate the cause before replacing parts.' },
      { question: 'Do you fix underground leaks?', answer: 'Yes — we locate wet spots, pressure-test laterals, and repair pipe with durable fittings.' },
      { question: 'Can you repair my controller?', answer: 'We diagnose controllers, replace failed units, and can upgrade to smart weather-based controllers when repair is not cost-effective.' },
      { question: 'Do you service HOAs and commercial sites?', answer: 'Yes — multi-zone commercial and HOA systems are a core part of our business.' },
    ],
  },
  {
    slug: 'drip-irrigation', component: 'DripIrrigation', title: 'Drip Irrigation',
    desc: 'Drip irrigation design and installation in Waco TX for beds, trees, shrubs, and gardens. Water-efficient, plant-friendly, licensed irrigators.',
    keywords: ['drip irrigation Waco TX', 'drip system installation Central Texas', 'landscape drip irrigation Waco', 'water efficient irrigation Waco', 'AquaArc Irrigation'],
    subtitle: 'Precision watering for beds, trees, and gardens — less waste, healthier roots, and fewer fungus problems from overspray on foliage and hardscape.',
    expectations: [
      { icon: 'faSearch', title: 'Plant-First Design', description: 'Emitters and tubing matched to plant water needs, mulch beds, and tree canopies.' },
      { icon: 'faFileContract', title: 'Clear Scope & Price', description: 'Line layout, filters, pressure regulation, and zones priced before install.' },
      { icon: 'faCheckCircle', title: 'Filters & Pressure Right', description: 'Proper filtration and pressure regulation so drippers last and flow evenly.' },
      { icon: 'faShieldHalved', title: 'Integrated With Spray Zones', description: 'We design drip zones that work with your existing sprinkler controller.' },
    ],
    whyFeatures: [
      { icon: 'faSeedling', title: 'Water Savings That Show Up', description: 'Drip puts water at the root zone — less evaporation in Texas heat.' },
      { icon: 'faWrench', title: 'Cleaner Beds & Walkways', description: 'No overspray staining fences, windows, or sidewalks.' },
      { icon: 'faShieldHalved', title: 'Built for Central Texas Plants', description: 'Trees, shrubs, xeriscape beds, and vegetable gardens all designed correctly.' },
    ],
    processSteps: [
      { number: 1, title: 'Site Review', description: 'We map beds, trees, and existing irrigation.', icon: 'faHeadset' },
      { number: 2, title: 'Drip Design', description: 'Emitter spacing, tubing, filters, and valves planned for your plants.', icon: 'faSearch' },
      { number: 3, title: 'Install', description: 'Clean install with pressure regulation and flush points.', icon: 'faFileContract' },
      { number: 4, title: 'Schedule & Train', description: 'Runtime guidance and controller setup so plants thrive.', icon: 'faCheckCircle' },
    ],
    comparisonRows: [
      { feature: 'Root-zone watering design', us: '✅ Plant-specific', others: '❌ Generic tubing runs' },
      { feature: 'Filters & pressure regulation', us: '✅ Standard', others: '❌ Often skipped' },
      { feature: 'Controller integration', us: '✅ Full setup', others: '❌ DIY wiring' },
      { feature: 'Licensed irrigator install', us: '✅ Always', others: '❌ Handyman only' },
    ],
    faq: [
      { question: 'Is drip better than spray for flower beds?', answer: 'Usually yes — drip reduces leaf wetness, evaporation, and overspray while delivering water where roots need it.' },
      { question: 'Can drip be added to an existing sprinkler system?', answer: 'Yes. We can convert zones or add dedicated drip valves and filters to your controller.' },
      { question: 'Does drip clog easily?', answer: 'With proper filtration and periodic flushing, modern drip systems stay reliable. We include filters and flush points in every design.' },
      { question: 'How often should drip run in summer?', answer: 'It depends on soil, plant type, and mulch — we set a starting schedule and can pair it with a smart controller for weather adjustments.' },
    ],
  },
  {
    slug: 'smart-controllers', component: 'SmartControllers', title: 'Smart Controllers',
    desc: 'Smart irrigation controller install and programming in Waco TX. Weather-based schedules, app control, water savings. Hunter, Rain Bird, Rachio and more.',
    keywords: ['smart sprinkler controller Waco', 'Rachio install Waco TX', 'weather based irrigation controller Central Texas', 'smart irrigation Waco', 'AquaArc Irrigation'],
    subtitle: 'Weather-based irrigation controllers that skip rainy days, adjust for heat, and let you manage zones from your phone — installed and programmed correctly.',
    expectations: [
      { icon: 'faSearch', title: 'Controller Fit Assessment', description: 'We match brand and zone count to your system and Wi‑Fi situation.' },
      { icon: 'faFileContract', title: 'Flat-Rate Install', description: 'Swap, wire, app setup, and zone labeling included in one clear price.' },
      { icon: 'faCheckCircle', title: 'Zone Programming Done Right', description: 'Runtime, seasonal adjust, and soil/plant types configured — not factory defaults.' },
      { icon: 'faShieldHalved', title: 'Owner Training', description: 'We walk you through the app so you can pause, boost, or check status anytime.' },
    ],
    whyFeatures: [
      { icon: 'faCogs', title: 'Real Water Savings', description: 'Weather skip and ET adjustments routinely cut outdoor water use without stressing turf.' },
      { icon: 'faWrench', title: 'All Major Brands', description: 'Hunter Hydrawise, Rain Bird, Rachio, and compatible modules for existing valves.' },
      { icon: 'faShieldHalved', title: 'Wiring Done Clean', description: 'Proper labeling, surge considerations, and valve continuity checks included.' },
    ],
    processSteps: [
      { number: 1, title: 'System Check', description: 'We verify valves, wiring, and flow before recommending a controller.', icon: 'faHeadset' },
      { number: 2, title: 'Install & Connect', description: 'Mount, wire, power, and connect to Wi‑Fi or cellular as required.', icon: 'faSearch' },
      { number: 3, title: 'Program Zones', description: 'Plant type, sun exposure, and soil settings per zone.', icon: 'faFileContract' },
      { number: 4, title: 'App Handoff', description: 'You leave knowing how to pause, schedule, and get alerts.', icon: 'faCheckCircle' },
    ],
    comparisonRows: [
      { feature: 'Weather-based scheduling', us: '✅ Configured fully', others: '❌ Left on default' },
      { feature: 'Zone labeling & training', us: '✅ Included', others: '❌ DIY later' },
      { feature: 'Valve continuity check', us: '✅ Standard', others: '❌ Swap only' },
      { feature: 'Licensed irrigator install', us: '✅ Always', others: '❌ Box-store DIY' },
    ],
    faq: [
      { question: 'How much water can a smart controller save?', answer: 'Many Central Texas homes see 20–50% outdoor water savings when weather-based schedules replace fixed timers — results vary by landscape and prior overwatering.' },
      { question: 'Will a smart controller work with my old valves?', answer: 'Usually yes. We test solenoids and wiring during install and flag any valves that need repair first.' },
      { question: 'Do I need strong Wi‑Fi outdoors?', answer: 'Indoor Wi‑Fi that reaches the controller location is enough for most installs. We can discuss options if signal is weak.' },
      { question: 'Can you install Rachio or Hunter Hydrawise?', answer: 'Yes — we install and program major smart irrigation brands based on your needs and budget.' },
    ],
  },
  {
    slug: 'winterization', component: 'Winterization', title: 'Winterization',
    desc: 'Irrigation winterization and freeze prep in Waco TX. Blowouts, backflow protection, controller shutdown guidance. Protect pipes and valves before freezes.',
    keywords: ['sprinkler winterization Waco TX', 'irrigation blowout Central Texas', 'freeze protect sprinkler system Waco', 'backflow winterization Waco', 'AquaArc Irrigation'],
    subtitle: 'Central Texas freezes are short but brutal. We prep systems, protect backflows, and guide shutoff so freeze events do not split pipes and valves.',
    expectations: [
      { icon: 'faSnowflake', title: 'Freeze-Ready Checklist', description: 'Controller shutdown, manual valves, backflow insulation, and vulnerable zone notes.' },
      { icon: 'faFileContract', title: 'Clear Prep Scope', description: 'You know exactly what we did and what to do if another freeze hits overnight.' },
      { icon: 'faCheckCircle', title: 'Backflow Protection', description: 'Insulation and protection for above-ground backflow assemblies that freeze first.' },
      { icon: 'faShieldHalved', title: 'Spring Restart Available', description: 'Book a spring start-up so zones are balanced when grass greens up.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'Before the Front Hits', description: 'We prioritize freeze windows so you are not scrambling after pipes split.' },
      { icon: 'faWrench', title: 'Local Freeze Knowledge', description: 'Waco freezes hit hard and fast — we know which components fail first.' },
      { icon: 'faShieldHalved', title: 'Pairs With Spring Tune-Ups', description: 'Winter prep + spring start-up keeps systems healthy year-round.' },
    ],
    processSteps: [
      { number: 1, title: 'Schedule Ahead', description: 'Book before the first hard freeze forecast.', icon: 'faHeadset' },
      { number: 2, title: 'System Prep', description: 'Shutoff guidance, drainage points, and backflow protection.', icon: 'faSearch' },
      { number: 3, title: 'Document Status', description: 'Notes on any leaks or weak valves found during prep.', icon: 'faFileContract' },
      { number: 4, title: 'Spring Restart Plan', description: 'Optional spring commission to get watering right again.', icon: 'faCheckCircle' },
    ],
    comparisonRows: [
      { feature: 'Backflow freeze protection', us: '✅ Included focus', others: '❌ Often ignored' },
      { feature: 'Owner freeze checklist', us: '✅ Written guidance', others: '❌ Verbal only' },
      { feature: 'Problem flags for spring', us: '✅ Documented', others: '❌ Forgotten' },
      { feature: 'Licensed irrigator service', us: '✅ Always', others: '❌ Handyman' },
    ],
    faq: [
      { question: 'Do sprinkler systems need winterization in Texas?', answer: 'Yes for many systems — especially above-ground backflows and exposed piping. Texas freezes are infrequent but can destroy unprotected components overnight.' },
      { question: 'Should I shut my system off for freeze nights?', answer: 'Yes. Shut off irrigation water supply and power down the controller when hard freezes are forecast. We provide a simple checklist.' },
      { question: 'Do you insulate backflow preventers?', answer: 'Yes — proper insulation (not sealed plastic bags) protects the most freeze-sensitive part of many residential systems.' },
      { question: 'When should I restart in spring?', answer: 'When freeze risk drops and turf begins active growth. Our seasonal tune-ups include spring start-up and coverage checks.' },
    ],
  },
  {
    slug: 'seasonal-tuneups', component: 'SeasonalTuneups', title: 'Seasonal Tune-Ups',
    desc: 'Seasonal sprinkler tune-ups in Waco TX — spring start-up, summer efficiency checks, fall prep. Heads, nozzles, schedules, and leak detection.',
    keywords: ['sprinkler tune up Waco TX', 'irrigation maintenance Central Texas', 'spring sprinkler start up Waco', 'seasonal irrigation service Waco', 'AquaArc Irrigation'],
    subtitle: 'Spring start-ups, mid-summer efficiency checks, and fall prep so every zone covers evenly, runs efficiently, and does not waste water.',
    expectations: [
      { icon: 'faCalendarCheck', title: 'Season-Matched Visit', description: 'Spring start-up, summer efficiency, or fall prep — the checklist fits the season.' },
      { icon: 'faFileContract', title: 'Written Findings', description: 'You get a clear list of what we adjusted and any repairs recommended.' },
      { icon: 'faCheckCircle', title: 'Heads, Nozzles & Timing', description: 'Arc adjustments, clogged nozzles, and runtime updates for weather and grass stage.' },
      { icon: 'faShieldHalved', title: 'Catch Small Issues Early', description: 'A $10 nozzle now beats a soaked foundation or dead zone later.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'Priority Scheduling', description: 'Tune-up customers get preferred slots during peak spring rush.' },
      { icon: 'faWrench', title: 'Full System Health Check', description: 'Valves, heads, controller, pressure, and visible leaks in one visit.' },
      { icon: 'faShieldHalved', title: 'Pairs With Smart Controllers', description: 'We re-optimize smart schedules after seasonal landscape changes.' },
    ],
    processSteps: [
      { number: 1, title: 'Book Seasonal Visit', description: 'Spring, summer, or fall — pick the service window you need.', icon: 'faHeadset' },
      { number: 2, title: 'Run Every Zone', description: 'We inspect coverage, heads, and pressure live.', icon: 'faSearch' },
      { number: 3, title: 'Adjust & Report', description: 'Fine-tune arcs/runtimes; report any repairs needed.', icon: 'faFileContract' },
      { number: 4, title: 'Optional Repair Same Day', description: 'Approve flat-rate fixes while we are already on site.', icon: 'faCheckCircle' },
    ],
    comparisonRows: [
      { feature: 'Full zone-by-zone inspection', us: '✅ Every visit', others: '❌ Quick glance' },
      { feature: 'Written findings report', us: '✅ Included', others: '❌ Verbal only' },
      { feature: 'Runtime optimization', us: '✅ Seasonal', others: '❌ Leave as-is' },
      { feature: 'Same-visit repair option', us: '✅ Flat-rate', others: '❌ Separate trip' },
    ],
    faq: [
      { question: 'When should I schedule a spring start-up?', answer: 'Late winter to early spring — before you need regular watering. We clear winter debris, test zones, and set runtimes for green-up.' },
      { question: 'What is included in a tune-up?', answer: 'Zone-by-zone operation, head/nozzle adjustments, controller review, visible leak check, and recommendations for repairs.' },
      { question: 'How often do I need irrigation maintenance?', answer: 'Most Central Texas lawns benefit from at least one spring visit and a mid-summer check during peak heat.' },
      { question: 'Can tune-ups reduce my water bill?', answer: 'Yes — fixing overspray, reducing overlapping cycles, and updating schedules often cuts outdoor water use without browning the lawn.' },
    ],
  },
];

// Write service layouts + pages
for (const s of services) {
  w(`src/app/services/${s.slug}/layout.tsx`, serviceLayout(s.slug, s.title, s.desc, s.keywords));
  w(`src/app/services/${s.slug}/page.tsx`, sp(s));
}

// Services index
w('src/app/services/page.tsx', `// ${BRAND} — Services Index
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
    { icon: faUsers,          title: "Locally Owned Since ${FOUNDED}", description: "Founded in Waco by ${OWNER}. Every decision is made locally — not by a call center franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Diagnose On-Site", description: "A licensed irrigator inspects the system and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Done Right, Guaranteed", description: "Quality parts, clean workmanship, ${GUARANTEE}.", icon: faCheckCircle },
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
    { question: "Do you offer same-day service?", answer: "Yes — same-day irrigation service is available most weekdays. Call ${PHONE}." },
    { question: "Are you licensed and insured?", answer: "Yes — ${BRAND} is ${LICENSE}." },
    { question: "Do you offer a guarantee?", answer: "Yes — ${GUARANTEE}." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Irrigation Services for Waco & Central Texas"
        subtitle="${TAGLINE} — designed, repaired, and optimized by licensed irrigators with flat-rate pricing and a Green Lawn Guarantee."
      />

      <TrustBar headline="8,000+ Central Texas systems serviced by ${BRAND}" />

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
        subline="Same-day appointments available. Flat-rate pricing. ${GUARANTEE}."
        primaryText="Call ${PHONE}"
        primaryLink="${TEL}"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
`);

w('src/app/services/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${DOMAIN}';

export const metadata: Metadata = {
  title: "Irrigation Services Waco TX | Sprinklers, Drip & Controllers",
  description: "Sprinkler installation, repair, drip irrigation, smart controllers, winterization, and seasonal tune-ups for Waco and Central Texas. ${LICENSE}.",
  alternates: { canonical: \`\${BASE_URL}/services\` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

console.log('Services written.');
