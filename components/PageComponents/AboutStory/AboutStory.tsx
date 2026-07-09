// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName?: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName = 'Waco' }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              &quot;We started AquaArc because we were tired of watching homeowners get ripped off by fly-by-night irrigation contractors.&quot;
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Seth Moreno</span>
              <span className={styles.pullTitle}>Founder, AquaArc Irrigation</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2012 in Waco, TX, AquaArc Irrigation started with one truck and one principle:
              give homeowners the straight story about their system, charge a fair price, and back the
              work with a real guarantee. No hourly billing surprises, no upsell pressure, no contracts.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with a crew of licensed irrigators
              who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2012', label: 'Founded in Waco' },
                { year: '2015', label: 'Expanded crew' },
                { year: '2019', label: '5,000 systems serviced' },
                { year: '2025', label: '8,000+ systems serviced' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
