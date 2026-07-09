# Irrigation Sprinkler Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `irrigation-sprinkler-template` into `irrigation-sprinkler-template`, sibling-cloned patterns from `garage-door-template` / `landscaping-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | AquaArc Irrigation |
| **Tagline** | Sprinklers · Drip · Smart Controllers · Repair |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2012 |
| **Owner** | Seth Moreno |
| **License** | Licensed Irrigator · Bonded & Insured |
| **Guarantee** | Green Lawn Guarantee · 2-Year Parts on New Installs |
| **Social proof** | 4.9★, 1,050+ reviews, 8,000+ systems serviced |
| **Accent hex** | `#0284c7` (blue) — `$orange` token |
| **Phone** | (254) 990-2020 / `tel:+12549902020` |
| **Email** | hello@aquaarcirrigation.com |
| **Domain** | aquaarcirrigation.com |
| **Address** | 900 S University Parks Dr, Waco, TX 76706 |

## Services (6)

| Old irrigation | New slug | Title |
|----------|----------|--------|
| ac-repair | `sprinkler-install` | Sprinkler Installation |
| heating | `sprinkler-repair` | Sprinkler Repair |
| installation | `drip-irrigation` | Drip Irrigation |
| duct-cleaning | `smart-controllers` | Smart Controllers |
| indoor-air-quality | `winterization` | Winterization |
| maintenance | `seasonal-tuneups` | Seasonal Tune-Ups |

## Industries (3)

| Old | New slug | Title |
|-----|----------|--------|
| automotive | `hoa-communities` | HOA Communities |
| manufacturing | `commercial-properties` | Commercial Properties |
| oil-gas | `sports-fields` | Sports Fields & Schools |

## Blogs (3)

1. `smart-controller-water-savings-texas`
2. `drip-vs-spray-irrigation`
3. `how-often-run-sprinklers-summer`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #0284c7`, `$lightorange: #38bdf8`, `$darkorange: #0369a1`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#0284c7`

## Done criteria

- `npm run typecheck` passes
- Grep clean of irrigation/AquaArc/old phone/Mapbox pk tokens
- Identity consistent: AquaArc Irrigation throughout
