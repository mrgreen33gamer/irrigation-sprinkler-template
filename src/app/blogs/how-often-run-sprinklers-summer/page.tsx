'use client';
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
    calloutText: "Pro Tip: If water is running into the street, split the runtime into two shorter cycles (cycle-and-soak) instead of lengthening a single run. Call (254) 990-2020 for a seasonal tune-up and schedule audit.",
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
        body="Book a seasonal tune-up with AquaArc Irrigation — we audit coverage, nozzles, and runtimes for Central Texas heat."
        buttonText="Book a Seasonal Tune-Up"
        buttonHref="/services/seasonal-tuneups"
      />
      <NewsletterSignup variant={1} spot="how-often-run-sprinklers-blog" />
    </>
  );
}
