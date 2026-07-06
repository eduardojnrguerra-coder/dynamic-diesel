# Dyna-Mic Diesel Legacy URL Migration

Date: 2026-07-06

Primary production domain for the new website:

`https://dyna-mic.co.za`

## Legacy URL Audit Notes

The known indexed legacy URL supplied for the old website is `/Services/`.

Additional legacy URLs were identified from available project information and old-site structure clues:

- Old navigation uses title-case paths such as `Services/`.
- The old services page exposes relative navigation patterns that can create nested legacy URLs such as `/Services/About-us/` and `/Services/Services/`.
- The old services content references service block names that may have been copied, bookmarked or indexed as page-style URLs.
- Common static-site variants such as `index.html` and `.html` were included where relevant.

No unconfirmed brand-specific legacy URLs were added.

## Redirect Map

| Old URL | New URL | Redirect required | Redirect type |
| --- | --- | --- | --- |
| `/Services/` | `/services` | Yes | 301 |
| `/Services` | `/services` | Yes | 301 |
| `/Services/index.html` | `/services` | Yes | 301 |
| `/Services.html` | `/services` | Yes | 301 |
| `/Services/Services/` | `/services` | Yes | 301 |
| `/Services/Services` | `/services` | Yes | 301 |
| `/Services/Services/index.html` | `/services` | Yes | 301 |
| `/About-us/` | `/about` | Yes | 301 |
| `/About-us` | `/about` | Yes | 301 |
| `/About-us/index.html` | `/about` | Yes | 301 |
| `/Services/About-us/` | `/about` | Yes | 301 |
| `/Services/About-us` | `/about` | Yes | 301 |
| `/Services/About-us/index.html` | `/about` | Yes | 301 |
| `/Home/` | `/` | Yes | 301 |
| `/Home` | `/` | Yes | 301 |
| `/home/` | `/` | Yes | 301 |
| `/home` | `/` | Yes | 301 |
| `/index.html` | `/` | Yes | 301 |
| `/Services/Diagnostics-and-Engine-Dyno-Testing/` | `/services/diesel-engine-diagnostics` | Yes | 301 |
| `/Services/Diagnostics-and-Engine-Dyno-Testing` | `/services/diesel-engine-diagnostics` | Yes | 301 |
| `/Services/Diesel-Pumps-and-Injectors/` | `/services/diesel-pumps-and-injectors` | Yes | 301 |
| `/Services/Diesel-Pumps-and-Injectors` | `/services/diesel-pumps-and-injectors` | Yes | 301 |
| `/Services/Service-maintenance-and-Repairs/` | `/services/truck-services-maintenance-and-repairs` | Yes | 301 |
| `/Services/Service-maintenance-and-Repairs` | `/services/truck-services-maintenance-and-repairs` | Yes | 301 |
| `/Services/Engine-Reconditioning/` | `/engines/diesel-truck-engine-reconditioning-boksburg` | Yes | 301 |
| `/Services/Engine-Reconditioning` | `/engines/diesel-truck-engine-reconditioning-boksburg` | Yes | 301 |
| `https://www.dyna-mic.co.za/:path*` | `https://dyna-mic.co.za/:path*` | Yes | 301 |

## Implementation

Redirects are implemented in `next.config.ts` using explicit `statusCode: 301`.

Important behaviour:

- `https://www.dyna-mic.co.za/Services/` redirects directly to `https://dyna-mic.co.za/services`.
- `https://dyna-mic.co.za/Services/` redirects to `/services`.
- `https://www.dyna-mic.co.za/:path*` redirects to the same path on `https://dyna-mic.co.za`.
- Missing unknown URLs are not redirected to the homepage; they continue to use the custom 404 page unless a relevant legacy replacement is known.

## Post-Launch Checks

After deployment, test these with an HTTP header checker:

- `https://dyna-mic.co.za/Services/`
- `https://dyna-mic.co.za/Services`
- `https://www.dyna-mic.co.za/Services/`
- `https://www.dyna-mic.co.za/about`
- `https://www.dyna-mic.co.za/`

Expected result for legacy URLs: one 301 redirect to the most relevant apex-domain replacement.
