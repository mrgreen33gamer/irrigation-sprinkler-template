// Irrigation Hero C — Organic green zones, pipe runs, sprinkler arc wedges
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
    <div
      className={`${styles.mapCard} ${styles.irrigMap}`}
      role="img"
      aria-label={`Service area map centered on ${mapCenterLabel}`}
    >
      <svg
        className={styles.mapSvg}
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="irrigGlow" cx="48%" cy="50%" r="58%">
            <stop offset="0%" stopColor="rgba(74, 222, 128, 0.14)" />
            <stop offset="55%" stopColor="rgba(34, 197, 94, 0.04)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>

        <rect width="400" height="320" fill="url(#irrigGlow)" />

        {/* Organic zone blobs (service zones / green coverage) */}
        <ellipse cx="110" cy="100" rx="78" ry="52" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(74, 222, 128, 0.22)" strokeWidth="1.2" />
        <ellipse cx="290" cy="90" rx="70" ry="48" fill="rgba(34, 197, 94, 0.08)" stroke="rgba(74, 222, 128, 0.18)" strokeWidth="1.2" />
        <ellipse cx="200" cy="200" rx="95" ry="62" fill="rgba(22, 163, 74, 0.09)" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1.2" />
        <ellipse cx="320" cy="230" rx="55" ry="42" fill="rgba(34, 197, 94, 0.07)" stroke="rgba(74, 222, 128, 0.16)" strokeWidth="1" />
        <ellipse cx="80" cy="230" rx="48" ry="38" fill="rgba(34, 197, 94, 0.06)" stroke="rgba(74, 222, 128, 0.14)" strokeWidth="1" />

        {/* Main pipe / lateral runs */}
        <path
          d="M40 160 C 100 150, 140 120, 200 155 S 300 200, 380 170"
          fill="none"
          stroke="rgba(134, 239, 172, 0.45)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M60 240 C 120 220, 180 250, 240 230 S 320 200, 370 220"
          fill="none"
          stroke="rgba(74, 222, 128, 0.28)"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path
          d="M120 60 L120 155 M200 70 L200 155 M280 55 L280 140"
          fill="none"
          stroke="rgba(134, 239, 172, 0.22)"
          strokeWidth="1.75"
        />

        {/* Sprinkler head arcs (coverage wedges) */}
        <path d="M120 155 A 36 36 0 0 1 150 125" fill="none" stroke="rgba(74, 222, 128, 0.55)" strokeWidth="1.5" />
        <path d="M120 155 A 28 28 0 0 1 142 132" fill="none" stroke="rgba(74, 222, 128, 0.3)" strokeWidth="1" />
        <path d="M200 155 A 40 40 0 0 0 160 125" fill="none" stroke="rgba(74, 222, 128, 0.5)" strokeWidth="1.5" />
        <path d="M200 155 A 40 40 0 0 1 245 130" fill="none" stroke="rgba(74, 222, 128, 0.5)" strokeWidth="1.5" />
        <path d="M280 140 A 34 34 0 0 1 310 112" fill="none" stroke="rgba(74, 222, 128, 0.45)" strokeWidth="1.4" />
        <path d="M240 230 A 32 32 0 0 1 270 205" fill="none" stroke="rgba(74, 222, 128, 0.4)" strokeWidth="1.3" />
        <path d="M80 230 A 30 30 0 0 0 55 205" fill="none" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.25" />

        {/* Head nodes */}
        <circle cx="120" cy="155" r="4" fill="rgba(74, 222, 128, 0.85)" />
        <circle cx="200" cy="155" r="4.5" fill="rgba(74, 222, 128, 0.95)" />
        <circle cx="280" cy="140" r="4" fill="rgba(74, 222, 128, 0.85)" />
        <circle cx="240" cy="230" r="3.5" fill="rgba(134, 239, 172, 0.8)" />
        <circle cx="80" cy="230" r="3.5" fill="rgba(134, 239, 172, 0.75)" />
      </svg>

      <div className={`${styles.rings} ${styles.greenRings}`} aria-hidden="true">
        <span className={`${styles.ring} ${styles.ring1}`} />
        <span className={`${styles.ring} ${styles.ring2}`} />
        <span className={`${styles.ring} ${styles.ring3}`} />
      </div>

      <div className={styles.centerPin}>
        <div className={`${styles.centerPinIcon} ${styles.greenHub}`}>
          <PinIcon size={20} />
        </div>
        <span className={styles.centerLabel}>{mapCenterLabel}</span>
      </div>

      {mapPins.map((pin) => (
        <div
          key={`${pin.label}-${pin.x}-${pin.y}`}
          className={styles.satPin}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <span className={`${styles.satDot} ${styles.greenDot}`} />
          <span className={styles.satLabel}>{pin.label}</span>
        </div>
      ))}

      {coverageLabel && (
        <div className={`${styles.coverageBadge} ${styles.greenBadge}`}>
          <span className={`${styles.coverageDot} ${styles.greenDot}`} />
          {coverageLabel}
        </div>
      )}
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Irrigation Pros — Since 2012";
  const headlineLines = ['Greener Lawns.', 'Smarter Water.'];
  const headlineAccent = 'AquaArc Irrigation.';
  const subheadline =
    'Sprinklers · Drip · Smart Controllers · Repair. Flat-rate pricing. Same-day service. Green Lawn Guarantee · 2-Year Parts on New Installs. Serving Waco and Central Texas with licensed irrigators.';
  const primaryCta = { label: 'Call (254) 990-2020', href: 'tel:+12549902020' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Same-Day Service',
    'No Contracts',
    'Licensed Irrigator',
    '14+ Yrs Local',
    'Green Lawn Guarantee',
  ];
  const mapCenterLabel = 'Service HQ';
  const mapPins = [
    { label: 'Waco', x: 42, y: 48 },
    { label: 'Temple', x: 68, y: 62 },
    { label: 'Killeen', x: 58, y: 72 },
  ];
  const coverageLabel = 'Central Texas coverage';

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
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
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
