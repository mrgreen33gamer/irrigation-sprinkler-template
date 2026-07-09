// _archetype-library/hero-c-map-anchored/Component.tsx
//
// Hero C: Map-Anchored — left copy, right pure CSS/SVG service-area map graphic.
// Center pin, satellite pins at x/y %, pulsing radius rings. No Mapbox.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon, PinIcon } from './_shared/icons';
import styles from './styles.module.scss';

function ServiceAreaMap({
  mapCenterLabel,
  mapPins,
  coverageLabel,
}: {
  mapCenterLabel: string;
  mapPins: Array<{ label: string; x: number; y: number }>;
  coverageLabel?: string;
}) {
  return (
    <div className={styles.mapCard} role="img" aria-label={`Service area map centered on ${mapCenterLabel}`}>
      {/* Stylized map background — grid + soft terrain blobs */}
      <svg className={styles.mapSvg} viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="48%" r="55%">
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0.14)" />
            <stop offset="55%" stopColor="rgba(249, 115, 22, 0.04)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
          <pattern id="mapGrid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="400" height="320" fill="url(#mapGrid)" />
        <rect width="400" height="320" fill="url(#mapGlow)" />

        {/* Abstract road traces */}
        <path
          d="M -10 80 Q 100 60 180 120 T 410 90"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="3"
        />
        <path
          d="M 40 340 Q 120 200 220 210 T 420 160"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2.5"
        />
        <path
          d="M -20 200 Q 140 180 200 40 T 360 -10"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="2"
        />

        {/* Soft district shapes */}
        <ellipse cx="120" cy="90" rx="70" ry="48" fill="rgba(255,255,255,0.025)" />
        <ellipse cx="300" cy="230" rx="85" ry="55" fill="rgba(255,255,255,0.02)" />
        <ellipse cx="280" cy="80" rx="50" ry="36" fill="rgba(249,115,22,0.04)" />
      </svg>

      {/* Pulsing coverage rings (center) */}
      <div className={styles.rings} aria-hidden="true">
        <span className={`${styles.ring} ${styles.ring1}`} />
        <span className={`${styles.ring} ${styles.ring2}`} />
        <span className={`${styles.ring} ${styles.ring3}`} />
      </div>

      {/* Center hub pin */}
      <div className={styles.centerPin}>
        <div className={styles.centerPinIcon}>
          <PinIcon size={20} />
        </div>
        <span className={styles.centerLabel}>{mapCenterLabel}</span>
      </div>

      {/* Satellite pins */}
      {mapPins.map((pin) => (
        <div
          key={`${pin.label}-${pin.x}-${pin.y}`}
          className={styles.satPin}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <span className={styles.satDot} />
          <span className={styles.satLabel}>{pin.label}</span>
        </div>
      ))}

      {coverageLabel && (
        <div className={styles.coverageBadge}>
          <span className={styles.coverageDot} />
          {coverageLabel}
        </div>
      )}
    </div>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Irrigation Pros — Since 2012';
const headlineLines = [
  'Greener Lawns.',
  'Smarter Water.',
];
const headlineAccent = 'AquaArc Irrigation.';
const subheadline = 'Sprinklers · Drip · Smart Controllers · Repair. Flat-rate pricing. Same-day service. Green Lawn Guarantee · 2-Year Parts on New Installs. Serving Waco and Central Texas with licensed irrigators.';
const primaryCta = { label: 'Call (254) 990-2020', href: 'tel:+12549902020' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Service',
  'No Contracts',
  'Licensed Irrigator',
  '14+ Yrs Local',
  'Green Lawn Guarantee',
];
const stats = [
  {
    "value": "500+",
    "label": "Jobs Done"
  },
  {
    "value": "4.9 ★",
    "label": "Rating"
  },
  {
    "value": "15+",
    "label": "Years Local"
  },
  {
    "value": "1-Yr",
    "label": "Warranty"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak";
const meterMidLabel = "Local";
const meterBotLabel = "Base";
const particleColor = '#4ade80';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Brown rings";
const afterLabel = "Even coverage";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Repair", swatch: "#4ade80", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Zones", swatch: "#22c55e", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Drip", swatch: "#86efac", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Controller", swatch: "#16a34a", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Rain Sensor", swatch: "#15803d", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Commercial", swatch: "#14532d", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Found three leaks we never knew about. Water bill dropped and the yard filled in.";
const authorName = "Mike S.";
const authorMeta = "Irrigation repair · Woodway";
const rating = 5;
const schematicLabel = "AquaArc schematic";
const gauges = [
  { label: "Systems", value: "3,600+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Leak detect", value: "Yes" },
  { label: "Smart", value: "Supported" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "AquaArc";

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <ServiceAreaMap
            mapCenterLabel={mapCenterLabel}
            mapPins={mapPins}
            coverageLabel={coverageLabel}
          />
        </motion.div>
      </div>
    </section>
  );
}
