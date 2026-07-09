import type { NextConfig } from "next";

const legacyRedirects = [
  { source: "/Services/index.html", destination: "/services" },
  { source: "/Services.html", destination: "/services" },
  { source: "/Services/Services", destination: "/services" },
  { source: "/Services/Services/", destination: "/services" },
  { source: "/Services/Services/index.html", destination: "/services" },
  { source: "/About-us", destination: "/about" },
  { source: "/About-us/", destination: "/about" },
  { source: "/About-us/index.html", destination: "/about" },
  { source: "/Services/About-us", destination: "/about" },
  { source: "/Services/About-us/", destination: "/about" },
  { source: "/Services/About-us/index.html", destination: "/about" },
  { source: "/Home", destination: "/" },
  { source: "/Home/", destination: "/" },
  { source: "/home", destination: "/" },
  { source: "/home/", destination: "/" },
  { source: "/index.html", destination: "/" },
  {
    source: "/Services/Diagnostics-and-Engine-Dyno-Testing",
    destination: "/services/diesel-engine-diagnostics",
  },
  {
    source: "/Services/Diagnostics-and-Engine-Dyno-Testing/",
    destination: "/services/diesel-engine-diagnostics",
  },
  {
    source: "/Services/Service-maintenance-and-Repairs",
    destination: "/services/truck-services-maintenance-and-repairs",
  },
  {
    source: "/Services/Service-maintenance-and-Repairs/",
    destination: "/services/truck-services-maintenance-and-repairs",
  },
  {
    source: "/Services/Engine-Reconditioning",
    destination: "/engines/diesel-truck-engine-reconditioning-boksburg",
  },
  {
    source: "/Services/Engine-Reconditioning/",
    destination: "/engines/diesel-truck-engine-reconditioning-boksburg",
  },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    const apexDomain = "https://dyna-mic.co.za";

    return [
      ...legacyRedirects.map((redirect) => ({
        source: redirect.source,
        has: [{ type: "host" as const, value: "www.dyna-mic.co.za" }],
        destination: `${apexDomain}${redirect.destination}`,
        statusCode: 301,
      })),
      ...legacyRedirects.map((redirect) => ({
        source: redirect.source,
        destination: redirect.destination,
        statusCode: 301,
      })),
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.dyna-mic.co.za" }],
        destination: `${apexDomain}/:path*`,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
