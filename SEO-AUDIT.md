# Dyna-Mic Diesel SEO Audit

Date: 2026-07-06

## Scope Reviewed

- Existing routes and sitemap coverage
- Page titles, meta descriptions, H1 focus and headings
- Internal links, breadcrumbs and crawl paths
- FAQ, breadcrumb, LocalBusiness and Article schema
- Image usage and alt text
- Robots, sitemap, canonical URLs and Open Graph defaults
- Mobile conversion paths for calls, WhatsApp and quote requests
- Page speed considerations from the current Next.js build

## Current Architecture

The site has the right commercial foundation: homepage, confirmed brand pages, Mercedes Actros engine reconditioning, core service pages, fleet maintenance, gallery/workshop page, reviews, blog, contact and request quote.

Confirmed brand focus is correctly limited to Volvo, Scania, Mercedes-Benz and Mercedes Actros. Unconfirmed brands are not being promoted as dedicated brand pages.

## Problems Found

- The blog/resource centre was too thin for the requested problem-based search cluster.
- Service pages had related service links, but not enough links back into useful advice content.
- Some breadcrumbs in dynamic generated pages pointed to non-index parent routes that do not exist.
- There was no custom 404 page to recover users into calls, WhatsApp or service navigation.
- Conversion tracking was not prepared with stable click/form identifiers.
- Dynamic page titles could inherit the global title template and risk duplicated brand suffixes.
- One customer-facing Scania section still used internal planning language.

## Opportunities

- Build authority through practical diesel-truck problem articles tied to services.
- Use related articles on service pages to create topic clusters without creating thin pages.
- Keep high-intent pages focused on calls, WhatsApp and quote requests.
- Use environment variables for GA4, GTM and Search Console verification.
- Continue improving original workshop imagery as real photos become available.

## Duplicate Keyword Targeting

High-risk duplication was avoided by assigning one primary search intent per page:

- Volvo truck repairs Boksburg: dedicated Volvo page.
- Scania truck repairs Boksburg: dedicated Scania page.
- Mercedes truck repairs Boksburg: dedicated Mercedes-Benz page.
- Mercedes Actros engine reconditioning Boksburg: dedicated Actros page.
- Diesel diagnostics Boksburg: `/services/diesel-engine-diagnostics`.
- Diesel pumps and injectors Boksburg: `/services/diesel-pumps-and-injectors`.
- Fleet maintenance East Rand: `/fleet-maintenance`.

Generated engine pages support long-tail engine intent and should stay secondary to the main Mercedes Actros engine reconditioning page.

## Missing Pages

No new service or brand pages are recommended right now.

The requested blog topics were missing and have been added through the existing `/blog/[slug]` route. This keeps the architecture controlled while improving search intent coverage.

## Internal Linking Issues

- Dynamic brand and engine breadcrumbs previously used parent URLs that were not true index pages.
- Service pages needed contextual article links.
- Articles needed stronger links to diagnostics, injectors, engine reconditioning, brand pages, fleet maintenance, contact and quote paths.

These were addressed with cleaner breadcrumbs and a reusable related-articles component.

## Technical SEO Issues

- Sitemap and robots existed and built correctly.
- Canonicals existed on key pages and generated pages.
- Open Graph defaults existed globally and generated pages inherited Open Graph metadata.
- Article schema was missing for blog posts.
- A custom 404 page was missing.
- Tracking preparation was missing.

## Image SEO

The site uses `next/image` for main imagery and descriptive alt text. Current images are professional placeholders based on supplied workshop visuals. Replace placeholders with original workshop photos over time, using descriptive filenames and accurate alt text.

## Mobile And Conversion

The sticky header, mobile menu, floating call and WhatsApp actions, quote page and contact page support conversion paths. High-intent pages now also carry stable `data-conversion` attributes for future analytics tracking.

## Recommended Priorities

1. Connect GA4, Google Search Console and optional GTM using environment variables.
2. Add real workshop, engine, diagnostics, dyno and fleet maintenance photos as they become available.
3. Confirm business hours and add them consistently across contact sections.
4. Connect the contact and quote forms to email, CRM or a booking workflow.
5. Monitor Search Console queries before creating any further pages.
