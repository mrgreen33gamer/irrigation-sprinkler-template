'use client';
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
    calloutText: "Pro Tip: A smart controller only saves water if zones are configured correctly. Call (254) 990-2020 for install and programming by licensed irrigators — not a box-store swap with defaults left on.",
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
        body="Get a smart controller installed and programmed by AquaArc Irrigation — licensed irrigators with real zone setup, not factory defaults."
        buttonText="Schedule Controller Install"
        buttonHref="/services/smart-controllers"
      />
      <NewsletterSignup variant={1} spot="smart-controller-water-savings-blog" />
    </>
  );
}
