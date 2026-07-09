'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Brands & Equipment We Install',
    items: [
      { name: 'Rain Bird',   type: 'brand', icon: '💧' },
      { name: 'Hunter',      type: 'brand', icon: '💧' },
      { name: 'Toro',        type: 'brand', icon: '💧' },
      { name: 'Irritrol',    type: 'brand', icon: '💧' },
      { name: 'Rachio',      type: 'brand', icon: '💧' },
      { name: 'Hydrawise',   type: 'brand', icon: '💧' },
      { name: 'Netafim',     type: 'brand', icon: '💧' },
      { name: 'Weathermatic', type: 'brand', icon: '💧' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'Licensed Irrigator', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',   type: 'cert', icon: '✓' },
      { name: 'Green Lawn Guarantee', type: 'cert', icon: '✓' },
      { name: '2-Year Parts on Installs', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Sprinkler Install',  type: 'tool', icon: '🌱' },
      { name: 'Sprinkler Repair',   type: 'tool', icon: '🌱' },
      { name: 'Drip Systems',       type: 'tool', icon: '🌱' },
      { name: 'Smart Controllers',  type: 'tool', icon: '🌱' },
      { name: 'Winterization',      type: 'tool', icon: '🌱' },
      { name: 'Seasonal Tune-Ups',  type: 'tool', icon: '🌱' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Licensed Work, Quality Equipment',
  subtitle = 'We install and service major irrigation brands — licensed irrigators, no shortcuts on design or materials.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item} data-type={item.type}>
                    <span className={styles.itemIcon}>{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
