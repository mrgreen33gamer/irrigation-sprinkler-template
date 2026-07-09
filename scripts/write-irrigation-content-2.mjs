/**
 * Part 2 — homepage, industries, blogs, libs, chrome components
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

// ── Homepage ────────────────────────────────────────────────────────────────
w('src/app/page.tsx', `// ${BRAND} — Homepage
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
    },
    {
      icon: faWrench,
      title: "Sprinkler Repair",
      body: "Broken heads, leaks, low pressure, stuck valves, and dry zones. Same-day diagnosis with common parts stocked on every truck.",
      link: "/services/sprinkler-repair",
    },
    {
      icon: faSeedling,
      title: "Drip Irrigation",
      body: "Beds, trees, and gardens watered at the root zone — less waste, healthier plants, no overspray on hardscape.",
      link: "/services/drip-irrigation",
    },
    {
      icon: faCogs,
      title: "Smart Controllers",
      body: "Weather-based schedules, app control, and real water savings — installed and programmed correctly.",
      link: "/services/smart-controllers",
    },
    {
      icon: faSnowflake,
      title: "Winterization",
      body: "Freeze prep and backflow protection so short Texas freezes don't split pipes and valves overnight.",
      link: "/services/winterization",
    },
    {
      icon: faCalendarCheck,
      title: "Seasonal Tune-Ups",
      body: "Spring start-up, summer efficiency checks, and fall prep so coverage stays even and water bills stay sane.",
      link: "/services/seasonal-tuneups",
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
      title: "Locally Owned Since ${FOUNDED}",
      description: "We're not a franchise. ${BRAND} was founded in Waco by ${OWNER}. Every decision is made locally.",
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
      description: "Quality parts, clean workmanship, ${GUARANTEE}. We leave when you're satisfied.",
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
    { question: "Are you licensed?", answer: "Yes — ${LICENSE}." },
    { question: "Do you service HOAs and commercial properties?", answer: "Yes — HOA common areas, commercial campuses, and sports fields are core parts of our business." },
    { question: "What is the Green Lawn Guarantee?", answer: "We stand behind install workmanship and zone coverage. If coverage issues appear from our design or install within the guarantee window, we make it right. New installs also include 2-year parts coverage." },
    { question: "Do you offer seasonal maintenance?", answer: "Yes — spring start-ups, summer efficiency checks, winterization, and tune-ups to keep systems efficient year-round." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="4.9★ · 1,050+ reviews · 8,000+ systems serviced across Central Texas" />
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <ServiceCardComponent heading="Irrigation Services Built for Central Texas" cards={services} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose AquaArc" />
      </div>
      <CTABanner
        headline="Ready for a Greener Lawn and Smarter Watering?"
        subline="Same-day appointments available. Flat-rate pricing. ${GUARANTEE}."
        primaryText="Call ${PHONE}"
        primaryLink="${TEL}"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
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
`);

// ── Industries ──────────────────────────────────────────────────────────────
function industryLayout(slug, title, desc, keywords) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${DOMAIN}';
const url = BASE_URL + '/industries/${slug}';

export const metadata: Metadata = {
  title: "${title} Irrigation | ${BRAND} Waco TX",
  description: ${JSON.stringify(desc)},
  keywords: ${JSON.stringify(keywords)},
  alternates: { canonical: url },
  openGraph: {
    title: "${title} Irrigation | ${BRAND} Waco TX",
    description: ${JSON.stringify(desc)},
    url,
    siteName: "${BRAND}",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
}

function industryPage(cfg) {
  const pain = cfg.painPoints.map(p =>
    `    { icon: ${p.icon}, problem: ${JSON.stringify(p.problem)}, consequence: ${JSON.stringify(p.consequence)} }`
  ).join(',\n');
  const why = cfg.whyFeatures.map(p =>
    `    { icon: ${p.icon}, title: ${JSON.stringify(p.title)}, description: ${JSON.stringify(p.description)} }`
  ).join(',\n');
  const steps = cfg.processSteps.map(p =>
    `    { number: ${p.number}, title: ${JSON.stringify(p.title)}, description: ${JSON.stringify(p.description)}, icon: ${p.icon} }`
  ).join(',\n');
  const rows = cfg.comparisonRows.map(r =>
    `    { feature: ${JSON.stringify(r.feature)}, us: ${JSON.stringify(r.us)}, others: ${JSON.stringify(r.others)} }`
  ).join(',\n');
  const faq = cfg.faq.map(f =>
    `    { question: ${JSON.stringify(f.question)}, answer: ${JSON.stringify(f.answer)} }`
  ).join(',\n');
  const svcs = cfg.services.map(s =>
    `    { icon: ${s.icon}, title: ${JSON.stringify(s.title)}, body: ${JSON.stringify(s.body)}, link: ${JSON.stringify(s.link)} }`
  ).join(',\n');

  return `"use client";
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

export default function ${cfg.component}Page() {

  const painPoints = [
${pain}
  ];

  const whyFeatures = [
${why}
  ];

  const processSteps = [
${steps}
  ];

  const metrics = [
    { icon: faTrophy, value: ${cfg.m1}, label: ${JSON.stringify(cfg.m1l)}, suffix: "+", duration: 2 },
    { icon: faChartLine, value: ${cfg.m2}, label: ${JSON.stringify(cfg.m2l)}, suffix: "+", duration: 2 },
    { icon: faClock, value: 14, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
${rows}
  ];

  const faq = [
${faq}
  ];

  const services = [
${svcs}
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "${cfg.title}" }]} />
      <SectionIntro title={${JSON.stringify(cfg.introTitle)}} subtitle={${JSON.stringify(cfg.introSub)}} />
      <TrustBar headline={${JSON.stringify(cfg.trust)}} />
      <div className={styles.section}><IndustryPainPoints industry={${JSON.stringify(cfg.industryLabel)}} painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify(cfg.whyTitle)}} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services This Sector Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/${cfg.slug}" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="${cfg.title} FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Quote" cityName="Waco" slug="industries/${cfg.slug}" spot="${cfg.slug}-industry-form" formVariant={2} /></div>
      <CTABanner headline={${JSON.stringify(cfg.ctaHead)}} subline={${JSON.stringify(cfg.ctaSub)}} primaryText="Call ${PHONE}" primaryLink="${TEL}" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
`;
}

const industries = [
  {
    slug: 'hoa-communities', component: 'HoaCommunities', title: 'HOA Communities',
    industryLabel: 'HOA communities',
    desc: 'Irrigation service for HOA common areas in Waco and Central Texas — multi-zone repairs, smart controllers, seasonal plans, COIs available.',
    keywords: ['HOA irrigation Waco', 'HOA sprinkler maintenance Central Texas', 'common area irrigation service Waco', 'AquaArc Irrigation'],
    introTitle: 'Irrigation Service for HOA Communities',
    introSub: 'Common-area sprinklers, entrance beds, and multi-zone controllers managed with portfolio-friendly scheduling, COIs, and flat-rate scopes boards can approve.',
    trust: 'HOA boards and property managers trust AquaArc for common-area irrigation',
    whyTitle: 'Built for HOA Boards & Managers',
    ctaHead: 'Need an Irrigation Vendor Who Understands HOAs?',
    ctaSub: 'COIs available. Volume pricing. Single point of contact for common areas.',
    m1: 120, m1l: 'HOA common areas serviced', m2: 25, m2l: 'HOAs on standing service',
    painPoints: [
      { icon: 'faCalendarAlt', problem: 'No proactive irrigation maintenance schedule', consequence: 'Common areas fail reactively after resident complaints — driving emergency rates and brown entrances instead of planned, budgeted work.' },
      { icon: 'faFileInvoiceDollar', problem: 'Water bills spike with no clear cause', consequence: 'Leaks, overwatering, and failed sensors quietly inflate municipal water costs across the association.' },
      { icon: 'faUsers', problem: 'Residents notice brown patches first', consequence: 'Missed coverage at entrances and parks creates complaints that reliable seasonal service would prevent.' },
      { icon: 'faBuilding', problem: 'Different contractors leave inconsistent quality', consequence: 'Rotating freelancers leave mismatched heads, wrong nozzles, and no documentation for the next board.' },
      { icon: 'faClipboardList', problem: 'No single point of contact for multi-zone work', consequence: 'Coordinating separate quotes for each park and entrance wastes management time.' },
      { icon: 'faHandshake', problem: 'Vendors ignore board approval workflows', consequence: 'Access notices, owner approvals, and CapEx timelines all move on their own schedule.' },
    ],
    whyFeatures: [
      { icon: 'faCalendarAlt', title: 'Common-Area Planning', description: 'Phased schedules across parks, entrances, medians, and amenity lawns.' },
      { icon: 'faFileInvoiceDollar', title: 'Board-Ready Pricing', description: 'Clear scopes and volume-friendly rates ownership can approve with confidence.' },
      { icon: 'faUsers', title: 'Resident-Friendly Scheduling', description: 'We coordinate access windows so your office is not fielding angry calls about brown turf.' },
    ],
    processSteps: [
      { number: 1, title: 'Property Walk', description: 'We document common-area zones, controllers, and risk areas.', icon: 'faSearch' },
      { number: 2, title: 'Phased Plan & Quote', description: 'Multi-zone pricing and a schedule synced to board budgets.', icon: 'faCalendarAlt' },
      { number: 3, title: 'Execute by Area', description: 'Crews move entrance-to-park with consistent quality and testing.', icon: 'faRocket' },
      { number: 4, title: 'Standing Maintenance', description: 'Optional seasonal service so irrigation stays on a plan.', icon: 'faClipboardList' },
    ],
    comparisonRows: [
      { feature: 'HOA common-area planning', us: '✅ Full portfolio plan', others: '❌ One-off calls only' },
      { feature: 'Board-ready written scopes', us: '✅ Clear line items', others: '❌ Vague estimates' },
      { feature: 'Single point of contact', us: '✅ Dedicated lead', others: '❌ Different tech each time' },
      { feature: 'COIs on request', us: '✅ Always available', others: '❌ Delayed or missing' },
      { feature: 'Licensed irrigators', us: '✅ Always', others: '❌ Not always' },
    ],
    faq: [
      { question: 'Do you work with HOA boards and management companies?', answer: 'Yes — common areas, entrances, parks, and amenity lawns are core commercial work for us.' },
      { question: 'Can you provide certificates of insurance?', answer: 'Yes — COIs for HOAs and management companies are available on request.' },
      { question: 'Do you offer standing seasonal service?', answer: 'Yes. Spring start-ups, mid-season checks, and winterization can be scheduled on a standing plan.' },
      { question: 'Can you standardize controllers across multiple entrances?', answer: 'Yes. Consistent smart controllers and documentation are part of our multi-site approach.' },
      { question: 'What areas do you cover for HOA work?', answer: 'Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas.' },
    ],
    services: [
      { icon: 'faWrench', title: 'Sprinkler Repair', body: 'Fast common-area ticket resolution.', link: '/services/sprinkler-repair' },
      { icon: 'faTint', title: 'Sprinkler Installation', body: 'Entrance and park system redesigns.', link: '/services/sprinkler-install' },
      { icon: 'faCogs', title: 'Smart Controllers', body: 'Weather-based control for multi-zone sites.', link: '/services/smart-controllers' },
      { icon: 'faSeedling', title: 'Drip Irrigation', body: 'Bed and median drip conversions.', link: '/services/drip-irrigation' },
    ],
  },
  {
    slug: 'commercial-properties', component: 'CommercialProperties', title: 'Commercial Properties',
    industryLabel: 'commercial properties',
    desc: 'Commercial irrigation service in Waco TX for offices, retail, campuses, and multi-site portfolios. Licensed irrigators, flat-rate scopes, COIs available.',
    keywords: ['commercial irrigation Waco', 'office park sprinkler service Central Texas', 'commercial sprinkler repair Waco', 'AquaArc Irrigation'],
    introTitle: 'Irrigation for Commercial Properties',
    introSub: 'Office parks, retail centers, campuses, and multi-site portfolios — irrigation kept green, efficient, and presentable without disrupting tenants.',
    trust: 'Commercial property teams choose AquaArc for reliable irrigation service',
    whyTitle: 'Built for Commercial Property Teams',
    ctaHead: 'Need Irrigation That Protects Curb Appeal?',
    ctaSub: 'COIs available. After-hours options. Single point of contact.',
    m1: 200, m1l: 'Commercial sites serviced', m2: 40, m2l: 'Multi-site portfolios supported',
    painPoints: [
      { icon: 'faCalendarAlt', problem: 'Irrigation only gets attention after complaints', consequence: 'Brown frontage and wet parking lots become tenant and shopper issues instead of planned maintenance.' },
      { icon: 'faFileInvoiceDollar', problem: 'Water costs climb without accountability', consequence: 'Leaks and bad schedules quietly inflate operating expenses across the portfolio.' },
      { icon: 'faUsers', problem: 'Daytime work disrupts tenants', consequence: 'Without after-hours or phased scheduling, irrigation crews conflict with business hours.' },
      { icon: 'faBuilding', problem: 'Multiple vendors, zero documentation', consequence: 'No as-built notes means every new tech starts from scratch.' },
      { icon: 'faClipboardList', problem: 'CapEx surprises on aging systems', consequence: 'Controllers and mainlines fail without a multi-year replacement plan.' },
      { icon: 'faHandshake', problem: 'Vendors cannot scale across sites', consequence: 'Each property needs a new quote process instead of portfolio standards.' },
    ],
    whyFeatures: [
      { icon: 'faCalendarAlt', title: 'Tenant-Aware Scheduling', description: 'Phased or after-hours work that protects business operations.' },
      { icon: 'faFileInvoiceDollar', title: 'OpEx-Friendly Pricing', description: 'Clear scopes and multi-site rates ownership can forecast.' },
      { icon: 'faUsers', title: 'Single Account Lead', description: 'One point of contact for every site in the portfolio.' },
    ],
    processSteps: [
      { number: 1, title: 'Site Assessment', description: 'Walk common landscape, map controllers, flag leaks and risk.', icon: 'faSearch' },
      { number: 2, title: 'Scope & Schedule', description: 'Written plan synced to occupancy and budget cycles.', icon: 'faCalendarAlt' },
      { number: 3, title: 'Execute Cleanly', description: 'Crews complete work with pressure tests and zone notes.', icon: 'faRocket' },
      { number: 4, title: 'Standing Service', description: 'Optional seasonal checks keep curb appeal consistent.', icon: 'faClipboardList' },
    ],
    comparisonRows: [
      { feature: 'Multi-site portfolio support', us: '✅ Account-level planning', others: '❌ Per-ticket only' },
      { feature: 'After-hours options', us: '✅ Available', others: '❌ Daytime only' },
      { feature: 'COIs & vendor compliance', us: '✅ Fast turnaround', others: '❌ Slow' },
      { feature: 'Licensed irrigators', us: '✅ Always', others: '❌ Not always' },
    ],
    faq: [
      { question: 'Do you service multi-site commercial portfolios?', answer: 'Yes — we support offices, retail, and campus properties with consistent crews and documentation.' },
      { question: 'Can work be scheduled after hours?', answer: 'Yes for many commercial sites — we coordinate access and noise-sensitive windows with property teams.' },
      { question: 'Do you provide insurance certificates?', answer: 'Yes — COIs are available for property managers and ownership groups on request.' },
      { question: 'Can you upgrade commercial controllers?', answer: 'Yes — weather-based commercial controllers with flow sensing options where applicable.' },
    ],
    services: [
      { icon: 'faWrench', title: 'Sprinkler Repair', body: 'Leak and zone response for occupied sites.', link: '/services/sprinkler-repair' },
      { icon: 'faTint', title: 'Sprinkler Installation', body: 'Frontage redesigns and system replacements.', link: '/services/sprinkler-install' },
      { icon: 'faCogs', title: 'Smart Controllers', body: 'Commercial-grade weather control.', link: '/services/smart-controllers' },
      { icon: 'faSeedling', title: 'Drip Irrigation', body: 'Bed and planter efficiency upgrades.', link: '/services/drip-irrigation' },
    ],
  },
  {
    slug: 'sports-fields', component: 'SportsFields', title: 'Sports Fields & Schools',
    industryLabel: 'sports fields & schools',
    desc: 'Sports field and school irrigation service in Waco TX — athletic turf, campuses, and practice fields. Reliable coverage, smart control, licensed irrigators.',
    keywords: ['sports field irrigation Waco', 'school sprinkler service Central Texas', 'athletic field irrigation Waco TX', 'AquaArc Irrigation'],
    introTitle: 'Irrigation for Sports Fields & Schools',
    introSub: 'Athletic turf, practice fields, and campus grounds kept playable and green with reliable coverage, smart scheduling, and maintenance that fits school calendars.',
    trust: 'Schools and athletic programs trust AquaArc for field irrigation',
    whyTitle: 'Built for Athletic & Campus Grounds',
    ctaHead: 'Need Field Irrigation You Can Count On?',
    ctaSub: 'Game-day readiness. Seasonal plans. Licensed irrigators.',
    m1: 60, m1l: 'Fields and campus zones serviced', m2: 18, m2l: 'Schools & athletic programs served',
    painPoints: [
      { icon: 'faCalendarAlt', problem: 'Watering conflicts with practice and games', consequence: 'Wet fields, cancelled practices, and frustrated coaches when schedules are not coordinated.' },
      { icon: 'faFileInvoiceDollar', problem: 'Uneven coverage creates safety and play issues', consequence: 'Hard spots and mud zones increase injury risk and field complaints.' },
      { icon: 'faUsers', problem: 'Controllers left on wrong seasonal programs', consequence: 'Overwatering after rain or underwatering before tournaments ruins turf quality.' },
      { icon: 'faBuilding', problem: 'Aging mainlines fail mid-season', consequence: 'Emergency repairs during peak athletic season cost more and disrupt play.' },
      { icon: 'faClipboardList', problem: 'No documentation for facilities teams', consequence: 'Every new season starts with tribal knowledge instead of zone maps.' },
      { icon: 'faHandshake', problem: 'Budget cycles need predictable maintenance', consequence: 'Surprise CapEx hits after preventable valve and head failures.' },
    ],
    whyFeatures: [
      { icon: 'faCalendarAlt', title: 'Calendar-Aware Scheduling', description: 'Watering windows planned around practices, games, and events.' },
      { icon: 'faFileInvoiceDollar', title: 'School Budget Friendly', description: 'Clear scopes and seasonal plans facilities teams can plan for.' },
      { icon: 'faUsers', title: 'Turf-Focused Coverage', description: 'Head types and runtimes matched to athletic turf demands.' },
    ],
    processSteps: [
      { number: 1, title: 'Field Assessment', description: 'Coverage audit, pressure check, and controller review.', icon: 'faSearch' },
      { number: 2, title: 'Season Plan', description: 'Maintenance and watering strategy synced to the athletic calendar.', icon: 'faCalendarAlt' },
      { number: 3, title: 'Execute Repairs/Upgrades', description: 'Heads, valves, and smart control improved with minimal downtime.', icon: 'faRocket' },
      { number: 4, title: 'Ongoing Support', description: 'Mid-season checks keep fields playable.', icon: 'faClipboardList' },
    ],
    comparisonRows: [
      { feature: 'Athletic calendar coordination', us: '✅ Built into planning', others: '❌ Generic scheduling' },
      { feature: 'Coverage uniformity focus', us: '✅ Field-first', others: '❌ Residential habits' },
      { feature: 'Smart control for large sites', us: '✅ Available', others: '❌ Basic timers only' },
      { feature: 'Licensed irrigators', us: '✅ Always', others: '❌ Not always' },
    ],
    faq: [
      { question: 'Do you work with school districts and private athletic clubs?', answer: 'Yes — campuses, practice fields, and competition turf are within our commercial scope.' },
      { question: 'Can you avoid watering during events?', answer: 'Yes. We program rain delays, manual holds, and smart weather skips so fields stay playable.' },
      { question: 'Do you handle large commercial valves and mainlines?', answer: 'Yes — we service commercial valves, isolation points, and coordinate larger repairs as needed.' },
      { question: 'Can facilities get zone maps and notes?', answer: 'Yes — documentation is part of our multi-zone commercial approach.' },
    ],
    services: [
      { icon: 'faWrench', title: 'Sprinkler Repair', body: 'Mid-season field fixes and valve work.', link: '/services/sprinkler-repair' },
      { icon: 'faTint', title: 'Sprinkler Installation', body: 'Field and campus system design.', link: '/services/sprinkler-install' },
      { icon: 'faCogs', title: 'Smart Controllers', body: 'Weather-based campus control.', link: '/services/smart-controllers' },
      { icon: 'faSeedling', title: 'Seasonal Tune-Ups', body: 'Start-up and mid-season checks.', link: '/services/seasonal-tuneups' },
    ],
  },
];

for (const ind of industries) {
  w(`src/app/industries/${ind.slug}/layout.tsx`, industryLayout(ind.slug, ind.title, ind.desc, ind.keywords));
  w(`src/app/industries/${ind.slug}/page.tsx`, industryPage(ind));
}

w('src/app/industries/page.tsx', `// ${BRAND} — Industries Index
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
    { icon: faShieldHalved, title: "Licensed & Insured", description: "${LICENSE}. COIs available for property managers and boards." },
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
        primaryText="Call ${PHONE}"
        primaryLink="${TEL}"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
`);

w('src/app/industries/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${DOMAIN}';

export const metadata: Metadata = {
  title: "Industries Served | HOAs, Commercial & Sports Fields",
  description: "Irrigation services for HOA communities, commercial properties, and sports fields & schools across Waco and Central Texas.",
  alternates: { canonical: \`\${BASE_URL}/industries\` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

console.log('Homepage + industries written.');
