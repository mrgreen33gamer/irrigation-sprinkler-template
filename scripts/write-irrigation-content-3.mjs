/**
 * Part 3 — blogs, libs, shared components, chrome pages
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

// blog-posts
w('libs/blog-posts.ts', `// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'smart-controller-water-savings-texas',
    title:    'How Smart Irrigation Controllers Save Water in Central Texas',
    excerpt:  'Weather-based controllers can cut outdoor water use without browning your lawn. Here is how they work for Waco summers — and what installers should configure.',
    category: 'Water Savings',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Smart irrigation controller water savings guide for Central Texas',
    featured: true,
  },
  {
    slug:     'drip-vs-spray-irrigation',
    title:    'Drip vs. Spray Irrigation: Which Is Right for Your Waco Landscape?',
    excerpt:  'Beds, trees, turf, and xeriscape each need different watering. Compare drip and spray for Central Texas yards — and when a hybrid system wins.',
    category: 'Design',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/hvac-filter.jpg',
    imageAlt: 'Drip vs spray irrigation comparison for Waco TX landscapes',
  },
  {
    slug:     'how-often-run-sprinklers-summer',
    title:    'How Often Should You Run Sprinklers in a Texas Summer?',
    excerpt:  'Daily short cycles waste water. Deep, infrequent watering builds roots. A practical summer schedule guide for Waco and Central Texas lawns.',
    category: 'Maintenance',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'How often to run sprinklers in Texas summer heat',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
`);

// reviews
w('libs/local-db/reviews.ts', `// libs/local-db/reviews.ts
// Static testimonials for ${BRAND}

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Sprinkler Repair',
    text:     "Half our front yard was brown and we had a wet spot by the driveway. AquaArc found a lateral leak and two bad heads the same visit, fixed everything, and adjusted the arcs so we stopped watering the sidewalk. Clear pricing. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Smart Controllers',
    text:     'They installed a smart controller, labeled every zone, and walked us through the app. Our water bill dropped the first full month without the grass suffering. Patient, professional crew.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Sprinkler Installation',
    text:     'New construction yard with zero irrigation. AquaArc designed zones for full sun and shade beds, installed cleanly, and the Green Lawn Guarantee gave us confidence. Curb appeal went way up.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Drip Irrigation',
    text:     'Converted our flower beds from spray to drip. No more mildew on the leaves and the beds stay evenly moist. They integrated it with our existing controller perfectly.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Seasonal Tune-Ups',
    text:     'Spring start-up for our HOA common areas. They documented every zone, fixed low heads, and gave the board a clear repair list. Exactly what property management needs.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Winterization',
    text:     'They insulated our backflow and walked us through freeze shutoff before a hard freeze. Neighbors had split pipes — we did not. Worth every penny.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Sprinkler Repair',
    text:     'Zone 3 would not turn on. Bad solenoid and a wiring issue. Same-day fix, fair price, no after-hours gouge. My go-to irrigation company now.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Smart Controllers',
    text:     'Seth\\'s crew set up weather-based scheduling for our large lot. The lawn looks better and we are not guessing runtimes anymore. Excellent communication.',
  },
];

export default reviews;
`);

// Blog pages
const blogLayout = (slug, title, desc) => `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${DOMAIN}';
const url = BASE_URL + '/blogs/${slug}';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  alternates: { canonical: url },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(desc)},
    url,
    siteName: "${BRAND}",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

w('src/app/blogs/smart-controller-water-savings-texas/layout.tsx', blogLayout(
  'smart-controller-water-savings-texas',
  'Smart Irrigation Controllers & Water Savings in Central Texas',
  'How weather-based smart controllers cut outdoor water use for Waco and Central Texas lawns — and what must be configured at install.'
));

w('src/app/blogs/smart-controller-water-savings-texas/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCloudSun, faMobileScreen, faDroplet, faWrench, faChartLine, faClock, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Fixed timers water on the same schedule whether it rained overnight or hit 104°F. Smart irrigation controllers use local weather, soil type, and plant settings to skip unnecessary cycles and stretch runtimes when heat spikes. For Waco and Central Texas yards, that is one of the highest-ROI upgrades you can make to an existing sprinkler system.",
  },
  {
    type: 'cards',
    heading: 'What Makes a Controller "Smart"',
    cards: [
      { icon: faCloudSun, title: 'Weather-based adjust', body: 'ET or local weather data reduces watering after rain and increases it during heat waves.' },
      { icon: faMobileScreen, title: 'App control', body: 'Pause for parties, boost a dry zone, or check status without opening the garage panel.' },
      { icon: faDroplet, title: 'Zone-level settings', body: 'Turf, beds, and shade zones should not share one generic runtime forever.' },
      { icon: faWrench, title: 'Valve health checks', body: 'A good install includes continuity tests so you are not putting a smart brain on dead solenoids.' },
      { icon: faChartLine, title: 'Measurable savings', body: 'Many homes see double-digit outdoor water reductions after proper setup — results vary by prior overwatering.' },
      { icon: faClock, title: 'Seasonal intelligence', body: 'Smart schedules evolve through spring green-up, summer heat, and fall cutbacks without manual reprogramming every month.' },
      { icon: faHouseChimney, title: 'Works with old systems', body: 'Most valve wiring is compatible. We test before recommending a brand or model.' },
    ],
  },
  {
    type: 'table',
    heading: 'Install Checklist That Actually Saves Water',
    tableHeaders: ['Step', 'Do This', 'Avoid This'],
    tableRows: [
      ['1', 'Test every valve and solenoid first', 'Swapping the box on a broken zone'],
      ['2', 'Label zones by plant type and sun', 'Leaving factory "Zone 1" forever'],
      ['3', 'Set soil type and nozzle precipitation rates', 'Default settings for every zone'],
      ['4', 'Connect weather and enable rain skip', 'Smart hardware on a fixed schedule'],
      ['5', 'Train the homeowner on pause/boost', 'Leaving with no app walkthrough'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: A smart controller only saves water if zones are configured correctly. Call ${PHONE} for install and programming by licensed irrigators — not a box-store swap with defaults left on.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Audit current outdoor water use and dry/wet spots',
      'Fix leaking valves and broken heads before upgrading',
      'Choose a controller with enough zones and solid local support',
      'Have a licensed irrigator program soil, plant, and sun settings',
      'Review the first month of weather skips and adjust odd zones',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Smart Irrigation Controllers Save Water in Central Texas"
        description="Weather-based controllers can cut outdoor water use without browning your lawn. Here is how they work for Waco summers — and what installers should configure."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Smart irrigation controller water savings guide for Central Texas"
        category="Water Savings"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for a Smarter Schedule?"
        body="Get a smart controller installed and programmed by ${BRAND} — licensed irrigators with real zone setup, not factory defaults."
        buttonText="Schedule Controller Install"
        buttonHref="/services/smart-controllers"
      />
      <NewsletterSignup variant={1} spot="smart-controller-water-savings-blog" />
    </>
  );
}
`);

w('src/app/blogs/drip-vs-spray-irrigation/layout.tsx', blogLayout(
  'drip-vs-spray-irrigation',
  'Drip vs Spray Irrigation for Waco Landscapes',
  'Compare drip and spray irrigation for beds, trees, and turf in Central Texas — and when a hybrid system is the best design.'
));

w('src/app/blogs/drip-vs-spray-irrigation/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSeedling, faTint, faLeaf, faBan, faCheck, faTree, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Not every plant wants a spray head. Turf usually needs broad coverage. Flower beds, shrubs, and trees often thrive with slow root-zone watering from drip. In Waco heat, choosing the wrong method means wasted water, stained hardscape, and plants that still struggle.",
  },
  {
    type: 'cards',
    heading: 'Drip vs Spray at a Glance',
    cards: [
      { icon: faSeedling, title: 'Drip wins for beds', body: 'Emitters put water at the root zone with less evaporation and less leaf disease.' },
      { icon: faTint, title: 'Spray wins for turf', body: 'Rotors and sprays cover large lawn areas efficiently when spaced correctly.' },
      { icon: faLeaf, title: 'Hybrid systems are common', body: 'Many Waco yards need spray for grass and drip for beds and trees on separate zones.' },
      { icon: faBan, title: 'Avoid overspray on hardscape', body: 'Spray on beds near windows and fences often stains surfaces and wastes water.' },
      { icon: faCheck, title: 'Filters matter for drip', body: 'Proper filtration and pressure regulation keep emitters from clogging.' },
      { icon: faTree, title: 'Trees need deeper water', body: 'Drip loops or bubblers around the dripline beat a single spray pass.' },
      { icon: faHouseChimney, title: 'Controller integration', body: 'Drip and spray zones should run different runtimes on the same controller.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Decision Guide',
    tableHeaders: ['Landscape', 'Best Method', 'Why'],
    tableRows: [
      ['St. Augustine / Bermuda turf', 'Spray / rotor', 'Even canopy coverage'],
      ['Mulched flower beds', 'Drip', 'Root zone, less mildew'],
      ['Shrub borders', 'Drip', 'Targeted, less waste'],
      ['New trees', 'Drip / bubbler', 'Deep infrequent water'],
      ['Narrow side yards', 'Drip or strip spray', 'Avoid sidewalk overspray'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Converting beds from spray to drip is one of the fastest ways to cut water waste and improve plant health. Call ${PHONE} for a hybrid design by licensed irrigators.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Map which areas are turf vs beds vs trees',
      'Note hardscape staining or dry plant rings',
      'Ask for separate drip zones with filtration',
      'Pair upgrades with a smart controller if schedules are still fixed',
      'Book a design visit with ${BRAND}',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Drip vs. Spray Irrigation: Which Is Right for Your Waco Landscape?"
        description="Beds, trees, turf, and xeriscape each need different watering. Compare drip and spray for Central Texas yards — and when a hybrid system wins."
        imageSrc="/pages/blogs/hvac-filter.jpg"
        imageAlt="Drip vs spray irrigation comparison for Waco TX landscapes"
        category="Design"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Hybrid System Designed Right?"
        body="${BRAND} designs drip and spray zones that match how Central Texas plants actually use water."
        buttonText="Explore Drip Irrigation"
        buttonHref="/services/drip-irrigation"
      />
      <NewsletterSignup variant={1} spot="drip-vs-spray-blog" />
    </>
  );
}
`);

w('src/app/blogs/how-often-run-sprinklers-summer/layout.tsx', blogLayout(
  'how-often-run-sprinklers-summer',
  'How Often to Run Sprinklers in a Texas Summer',
  'A practical guide to summer watering frequency for Waco and Central Texas lawns — deep cycles, signs of overwatering, and when to adjust.'
));

w('src/app/blogs/how-often-run-sprinklers-summer/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSun, faDroplet, faTriangleExclamation, faClock, faLeaf, faGauge, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Daily five-minute cycles feel productive but train roots to stay shallow and evaporate before water reaches the soil profile. In Central Texas summers, most turf prefers deeper, less frequent watering — adjusted for soil, shade, and recent rain. Here is a practical framework for Waco homeowners.",
  },
  {
    type: 'cards',
    heading: 'Summer Watering Essentials',
    cards: [
      { icon: faSun, title: 'Heat changes everything', body: 'July and August often need more total water than April — but still not necessarily every day.' },
      { icon: faDroplet, title: 'Deep and infrequent', body: 'Aim to wet the root zone thoroughly, then let the top dry slightly between cycles.' },
      { icon: faTriangleExclamation, title: 'Overwatering signs', body: 'Mushrooms, runoff, soft soil, and fungus spots often mean too much frequency, not too little.' },
      { icon: faClock, title: 'Best run times', body: 'Early morning reduces evaporation and disease compared to evening watering.' },
      { icon: faLeaf, title: 'Shade vs sun zones', body: 'North sides and tree canopies need less water than west-facing full sun turf.' },
      { icon: faGauge, title: 'Check precipitation rate', body: 'Different nozzles apply water at different inches per hour — runtime is not universal.' },
      { icon: faHouseChimney, title: 'Smart beats static', body: 'Weather-based controllers automate the adjustments most people forget to make.' },
    ],
  },
  {
    type: 'table',
    heading: 'Starting Point (Adjust for Your Yard)',
    tableHeaders: ['Condition', 'Starting Frequency', 'Notes'],
    tableRows: [
      ['Established turf, full sun', '2–3× per week deep cycles', 'Increase during extreme heat'],
      ['New sod / seed', 'More frequent short cycles', 'Transition to deep after roots establish'],
      ['Heavy clay soil', 'Slower cycles / soak-cycle-soak', 'Reduce runoff'],
      ['Sandy soil', 'Slightly more frequent', 'Holds less moisture'],
      ['After 0.5"+ rain', 'Skip or delay', 'Smart controllers handle this well'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If water is running into the street, split the runtime into two shorter cycles (cycle-and-soak) instead of lengthening a single run. Call ${PHONE} for a seasonal tune-up and schedule audit.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Walk the yard 24 hours after watering — look for dry arcs and wet sidewalks',
      'Fix broken heads before changing schedules',
      'Separate shade and sun zones if possible',
      'Move watering to early morning',
      'Consider a smart controller for weather skips',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Run Sprinklers in a Texas Summer?"
        description="Daily short cycles waste water. Deep, infrequent watering builds roots. A practical summer schedule guide for Waco and Central Texas lawns."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="How often to run sprinklers in Texas summer heat"
        category="Maintenance"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Schedule That Fits Your Yard?"
        body="Book a seasonal tune-up with ${BRAND} — we audit coverage, nozzles, and runtimes for Central Texas heat."
        buttonText="Book a Seasonal Tune-Up"
        buttonHref="/services/seasonal-tuneups"
      />
      <NewsletterSignup variant={1} spot="how-often-run-sprinklers-blog" />
    </>
  );
}
`);

// blogs index - update lightly via reading existing after rebrand
w('src/app/blogs/page.tsx', `// ${BRAND} — Blog Index
"use client";

import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import BlogPreviewGrid from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";

export default function BlogsPage() {
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Irrigation Tips & Insights"
        subtitle="Practical guides on sprinklers, drip, smart controllers, and water savings for Waco and Central Texas homeowners."
      />
      <div className={styles.section}>
        <BlogPreviewGrid title="Latest From AquaArc" />
      </div>
      <CTABanner
        headline="Need Help With Your Irrigation System?"
        subline="Licensed irrigators. Flat-rate pricing. ${GUARANTEE}."
        primaryText="Call ${PHONE}"
        primaryLink="${TEL}"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
`);

// WelcomePage
w('components/Pages/Home/WelcomePage/WelcomePage.tsx', `'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 5 + 0.5, vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 0.25 + 0.06, o: Math.random() * 0.35 + 0.7,
      flake: Math.random() > 0.3,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.save(); ctx.globalAlpha = p.o;
        if (p.flake) {
          ctx.strokeStyle = '${ACCENT}'; ctx.lineWidth = 0.6;
          ctx.translate(p.x, p.y);
          for (let i = 0; i < 6; i++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, p.r * 3.2); ctx.stroke(); }
        } else { ctx.fillStyle = '${ACCENT}'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
        ctx.restore();
        p.x += p.vx; p.y += p.vy;
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

function TempMeter() {
  const [fill, setFill] = useState(0);
  useEffect(() => { const t = setTimeout(() => setFill(88), 750); return () => clearTimeout(t); }, []);
  return (
    <div className={styles.thermo} aria-hidden="true">
      <div className={styles.thermoColumn}>
        <div className={styles.thermoTube}>
          <motion.div
            className={styles.thermoFill}
            initial={{ height: '0%' }}
            animate={{ height: \`\${fill}%\` }}
            transition={{ duration: 2.0, delay: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
          />
        </div>
        <div className={styles.thermoBulb} />
      </div>
      <div className={styles.thermoLabels}>
        <span className={styles.thermoTop}>Green</span>
        <span className={styles.thermoMid}>Waco, TX</span>
        <span className={styles.thermoBot}>Efficient</span>
      </div>
    </div>
  );
}

const CHIPS = ['Same-Day Service', 'No Contracts', 'Licensed Irrigator', '14+ Yrs Local', 'Green Lawn Guarantee'];

export default function WelcomePage() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <ParticleCanvas />
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>

        <div className={styles.content}>
          <motion.div className={styles.badge}
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className={styles.badgeDot} />
            Waco&apos;s Most Trusted Irrigation Pros — Since ${FOUNDED}
          </motion.div>

          <motion.h1 className={styles.headline}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Greener Lawns.<br />Smarter Water.<br />
            <span className={styles.accentLine}>AquaArc Irrigation.</span>
          </motion.h1>

          <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}>
            ${TAGLINE}. Flat-rate pricing. Same-day service.
            ${GUARANTEE}. Serving Waco and Central Texas with licensed irrigators.
          </motion.p>

          <motion.div className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}>
            <a href="${TEL}" className={styles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call ${PHONE}
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Free Estimate
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div className={styles.chips}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}>
            {CHIPS.map((c) => (
              <span key={c} className={styles.chip}>{c}</span>
            ))}
          </motion.div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <TempMeter />
        </div>
      </div>
    </section>
  );
}
`);

console.log('Part 3 core done — continuing components...');

// Shared components - key rewrites
w('components/PageComponents/CTABanner/CTABanner.tsx', `'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

interface CTABannerProps {
  headline?:    string;
  subline?: string;
  primaryText?:  string;
  primaryLink?:   string;
  secondaryText?: string;
  secondaryLink?:  string;
  spot?:       string;
}

export default function CTABanner({
  headline      = "Ready for a Greener Lawn and Smarter Watering?",
  subline   = "Same-day appointments available. Flat-rate pricing — no hidden fees. Call now or grab a free estimate online.",
  primaryText  = "Call ${PHONE}",
  primaryLink   = "${TEL}",
  secondaryText = "Free Estimate",
  secondaryLink  = "/contact",
  spot = "CTABanner",
}: CTABannerProps) {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.banner} aria-label="Call to action">
      <div className={styles.grid} aria-hidden="true" />

      <motion.div
        className={styles.bgFlake}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      >
        <svg width="520" height="520" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <polyline points="8 6 12 2 16 6"/>
          <polyline points="8 18 12 22 16 18"/>
          <polyline points="6 8 2 12 6 16"/>
          <polyline points="18 8 22 12 18 16"/>
        </svg>
      </motion.div>

      <div className={styles.inner}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Central Texas Irrigation Experts Since ${FOUNDED}
          </span>
          <h2 className={styles.heading}>{headline}</h2>
          <p className={styles.sub}>{subline}</p>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <a
            href={primaryLink}
            className={styles.primaryBtn}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: primaryText, section: spot })}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {primaryText}
          </a>

          <Link
            href={secondaryLink}
            className={styles.secondaryBtn}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: secondaryText, section: spot })}
          >
            {secondaryText}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>

          <div className={styles.badges}>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              No Contracts
            </span>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              Green Lawn Guarantee
            </span>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              Flat-Rate
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`);

w('components/PageComponents/TrustBar/TrustBar.tsx', `'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface TrustBarProps {
  headline?: string;
}

const BADGES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Licensed & Insured',
    sub: 'Bonded · Full Coverage',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Same-Day Service',
    sub: 'Emergency leaks welcome',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Flat-Rate Pricing',
    sub: 'No surprises, ever',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Licensed Irrigator',
    sub: 'Bonded & Insured',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Green Lawn Guarantee',
    sub: '+ 2-Year Parts on Installs',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: '4.9★ Google Rating',
    sub: '1,050+ verified reviews',
  },
];

export default function TrustBar({ headline }: TrustBarProps) {
  return (
    <section className={styles.section} aria-label="Trust signals">
      {headline && (
        <p className={styles.headline}>{headline}</p>
      )}
      <div className={styles.grid}>
        {BADGES.map((b, i) => (
          <motion.div
            key={b.title}
            className={styles.badge}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
          >
            <span className={styles.iconWrap}>{b.icon}</span>
            <span className={styles.textWrap}>
              <span className={styles.title}>{b.title}</span>
              <span className={styles.sub}>{b.sub}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`);

console.log('Part 3 written.');
