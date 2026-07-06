# Google Search Console Launch Checklist

Date: 2026-07-06

Production domain:

`https://dyna-mic.co.za`

## 1. Verify The Domain

Use a Domain property in Google Search Console where possible.

1. Open Google Search Console.
2. Add property: `dyna-mic.co.za`.
3. Choose Domain verification.
4. Add the DNS TXT record supplied by Google to the domain DNS.
5. Wait for DNS propagation.
6. Click Verify in Search Console.

If DNS verification is not available, use URL-prefix verification for:

- `https://dyna-mic.co.za`
- `https://www.dyna-mic.co.za`

The codebase is prepared for HTML meta verification through:

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

## 2. Submit The New Sitemap

After launch, submit:

`https://dyna-mic.co.za/sitemap.xml`

Check that Google can fetch the sitemap and that the submitted URL count matches the production sitemap.

## 3. Inspect Important URLs

Use URL Inspection for the most important pages:

- `https://dyna-mic.co.za/`
- `https://dyna-mic.co.za/services`
- `https://dyna-mic.co.za/volvo-truck-repairs-boksburg`
- `https://dyna-mic.co.za/scania-truck-repairs-boksburg`
- `https://dyna-mic.co.za/mercedes-truck-repairs-boksburg`
- `https://dyna-mic.co.za/mercedes-actros-engine-reconditioning-boksburg`
- `https://dyna-mic.co.za/services/diesel-engine-diagnostics`
- `https://dyna-mic.co.za/services/diesel-pumps-and-injectors`
- `https://dyna-mic.co.za/services/engine-dyno-testing`
- `https://dyna-mic.co.za/fleet-maintenance`
- `https://dyna-mic.co.za/contact`
- `https://dyna-mic.co.za/request-a-quote`

Request indexing for the highest-priority pages after launch.

## 4. Monitor Indexing

For the first 2 to 6 weeks after launch:

- Review Pages indexing reports weekly.
- Watch for `Submitted URL not found (404)`.
- Watch for `Page with redirect`.
- Watch for `Duplicate without user-selected canonical`.
- Confirm that canonical URLs use `https://dyna-mic.co.za`.

## 5. Monitor 404 Errors

In Search Console:

1. Open Indexing > Pages.
2. Filter for Not found (404).
3. Export URLs if errors appear.
4. Add only relevant 301 redirects for real old URLs with useful replacements.

Do not redirect every 404 to the homepage.

## 6. Monitor Redirects

Check the old URLs listed in `LEGACY-URL-MIGRATION.md`.

Important examples:

- `https://dyna-mic.co.za/Services/` should redirect to `https://dyna-mic.co.za/services`.
- `https://www.dyna-mic.co.za/Services/` should redirect to `https://dyna-mic.co.za/services`.
- `https://www.dyna-mic.co.za/` should redirect to `https://dyna-mic.co.za/`.

Use a header checker or `curl -I` to confirm a 301 status.

## 7. Analytics And Tracking

The website is prepared for:

- GA4 via `NEXT_PUBLIC_GA_ID`
- Google Tag Manager via `NEXT_PUBLIC_GTM_ID`
- Search Console verification via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

No fake IDs should be added. Only add real production values at deployment time.

## 8. Launch Monitoring Routine

Week 1:

- Confirm sitemap can be fetched.
- Inspect top pages.
- Test legacy redirects.
- Check that no `dynamic-diesel.vercel.app` URLs appear in source or Search Console.

Weeks 2 to 6:

- Review indexing reports.
- Review 404 reports.
- Review queries and impressions for brand/service pages.
- Add redirect rules only when old URLs are confirmed and have a relevant replacement.
