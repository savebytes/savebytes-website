# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- People who run or work in small clinics in Navi Mumbai and Mumbai (doctors, clinic owners and managers) who hear about SaveBytes and visit to find out what it is and whether to get in touch.
- Partners and curious visitors who want to know what SaveBytes is building.

Their job on the site: understand in seconds that SaveBytes builds software, that its first product keeps patient records for clinics, and how to contact the founder.

## Product Purpose

savebytes.in is the company website of SaveBytes, a software company in Navi Mumbai. It presents the company and its products. SaveBytes Health is the first product; more products will follow, each with its own product page built from one standard template.

Success: a visitor knows what SaveBytes is and contacts us if interested. The site says only what is needed.

## Positioning

SaveBytes builds focused software that wastes nothing: fewer steps, less waiting. SaveBytes Health keeps a clinic's patient records in one place.

## Operating Context

- Visitors arrive from a link, WhatsApp or a search, often on a phone.
- Contact happens by the form, email (ankit.singh4x@gmail.com) or WhatsApp (+91 87892 86009).

## Capabilities and Constraints

- Stack: Next.js 14 App Router, static export, React 18. Deployed as static files.
- Pages: Home, product pages (`/health` first), About, Contact, Privacy.
- SaveBytes Health: version 1 is ready (registration, appointments and queue, vitals, consultation, signed prescription PDF). Coming soon: ABDM, laboratory, pharmacy, patient app. No dates.
- The platform behind the products, the roadmap, triggers for future work and internal plans are not public.
- Light theme only for now.

## Brand Commitments

- The SaveBytes logo (split byte mark and wordmark) is used exactly as it is and is never animated.
- Footer wording and the full-width "SaveBytes" name in the footer are kept.
- About, Contact and Privacy wording are kept.
- Home headline: "Quiet software for busy places."
- Colour: white ground, near-black ink, SaveBytes blue (#2F5BFF) only on the logo and the single action per page.
- A new typeface for the website; IBM Plex stays in the product only.
- At most one picture per page. The Health page shows one rebuilt product screen with fictional data.
- Voice: plain, calm Indian English, sentence case, no exclamation marks, no hype.

## Evidence on Hand

- Logo: `src/components/ds/index.js` Logo component (to be copied out unchanged).
- Founder portrait: `public/img/founder-sm.jpg` (112px).
- No customers, testimonials, certifications, metrics or prices exist. None may be invented.

## Product Principles

1. Say less. Every line must help the visitor understand or act.
2. One action per page: get in touch.
3. The company first, products second, each product one standard page.
4. Never reveal dates, conditions or internal plans.

## Accessibility & Inclusion

WCAG 2.2 AA: 4.5:1 text contrast, visible focus, keyboard reachable, 44px touch targets, readable without script, reduced motion respected.
