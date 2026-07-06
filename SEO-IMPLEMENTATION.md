# Dyna-Mic Diesel SEO Implementation Notes

Date: 2026-07-06

## What Changed

### SEO Architecture

- Created `SEO-AUDIT.md` with current problems, opportunities, duplicate-keyword risks, technical issues and priorities.
- Created `KEYWORD-MAP.md` assigning one primary search intent to each existing page.
- Preserved the confirmed brand focus: Volvo, Scania, Mercedes-Benz and Mercedes Actros.
- Did not add unconfirmed brand pages.

### Blog And Topic Clusters

- Expanded the existing `/blog/[slug]` route into a proper resource centre using data-driven articles.
- Added 12 practical truck-owner and fleet-manager articles:
  - Why Is My Diesel Truck Losing Power?
  - What Causes Black Smoke From a Diesel Truck?
  - What Causes Blue Smoke From a Diesel Engine?
  - Signs of Diesel Injector Problems in Trucks
  - When Does a Truck Engine Need Reconditioning?
  - Why Is My Diesel Truck Overheating?
  - Diesel Truck Hard to Start: Common Causes
  - What Does Diesel Engine Dyno Testing Tell You?
  - How Preventative Maintenance Reduces Fleet Downtime
  - Engine Reconditioning vs Engine Replacement
  - Common Causes of High Fuel Consumption in Diesel Trucks
  - What to Do When a Truck Engine Warning Light Comes On
- Added Article schema for blog posts.
- Added reusable related-article links so service pages link back to useful advice content.

### Internal Linking

- Strengthened links between problem articles, diagnostics, diesel pumps and injectors, engine reconditioning, brand pages, fleet maintenance, contact and quote pages.
- Cleaned dynamic brand and engine breadcrumbs so they point through existing pages only.
- Verified generated internal route links against prerendered build output.

### Technical SEO

- Confirmed sitemap and robots output.
- Added a custom `not-found.tsx` page with conversion paths.
- Changed generated page metadata to use absolute titles to avoid duplicate brand suffixes.
- Added LocalBusiness schema to shared generated page templates.
- Preserved FAQ schema and breadcrumb schema.

### Conversion Preparation

- Added stable `data-conversion` attributes for:
  - phone clicks
  - WhatsApp clicks
  - quote clicks
  - contact form
  - quote form
  - email clicks
- Added optional environment-driven analytics preparation:
  - `NEXT_PUBLIC_GA_ID`
  - `NEXT_PUBLIC_GTM_ID`
  - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- No fake tracking IDs were added.

## Manual Setup Still Required

- Add real GA4 measurement ID if analytics is required.
- Add Google Search Console verification value.
- Add GTM container ID only if GTM will be used.
- Connect contact and quote forms to email, CRM or a booking system.
- Confirm business hours and update contact sections.
- Replace placeholder workshop/service images with original Dyna-Mic Diesel photos over time.

## Verification Completed

- `npm run lint` passed.
- `npm run build` passed.
- Production build generated static output successfully.
- Sitemap artifact checked:
  - 49 sitemap URLs
  - no sitemap URLs missing from prerendered build output
- Internal links checked against prerendered HTML:
  - no missing internal route links found
- Metadata and schema spot checks confirmed:
  - title and meta description present
  - canonical URLs present
  - FAQ schema present where relevant
  - Breadcrumb schema present
  - LocalBusiness schema present
  - Article schema present on blog posts

## Notes

The site now has a stronger SEO architecture without creating spammy brand pages, thin location pages or unsupported service claims. Future page creation should be based on real Search Console demand, confirmed workshop capabilities and enough unique content to justify each page.
