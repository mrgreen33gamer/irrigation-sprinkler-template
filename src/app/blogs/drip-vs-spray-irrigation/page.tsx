'use client';
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
    calloutText: "Pro Tip: Converting beds from spray to drip is one of the fastest ways to cut water waste and improve plant health. Call (254) 990-2020 for a hybrid design by licensed irrigators.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Map which areas are turf vs beds vs trees',
      'Note hardscape staining or dry plant rings',
      'Ask for separate drip zones with filtration',
      'Pair upgrades with a smart controller if schedules are still fixed',
      'Book a design visit with AquaArc Irrigation',
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
        body="AquaArc Irrigation designs drip and spray zones that match how Central Texas plants actually use water."
        buttonText="Explore Drip Irrigation"
        buttonHref="/services/drip-irrigation"
      />
      <NewsletterSignup variant={1} spot="drip-vs-spray-blog" />
    </>
  );
}
