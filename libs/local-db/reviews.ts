// libs/local-db/reviews.ts
// Static testimonials for AquaArc Irrigation

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
    text:     'Seth\'s crew set up weather-based scheduling for our large lot. The lawn looks better and we are not guessing runtimes anymore. Excellent communication.',
  },
];

export default reviews;
