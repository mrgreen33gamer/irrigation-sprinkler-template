// libs/blog-posts.ts
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
    imageSrc: '/pages/home/welcome/after.jpg',
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
    imageSrc: '/pages/home/services/service-2.jpg',
    imageAlt: 'Drip vs spray irrigation comparison for Waco TX landscapes',
  },
  {
    slug:     'how-often-run-sprinklers-summer',
    title:    'How Often Should You Run Sprinklers in a Texas Summer?',
    excerpt:  'Daily short cycles waste water. Deep, infrequent watering builds roots. A practical summer schedule guide for Waco and Central Texas lawns.',
    category: 'Maintenance',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
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
