import type { MetadataRoute } from "next";
import {
  blogPosts,
  brandPages,
  enginePages,
  locationPages,
  servicePages,
  siteUrl,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const confirmedBrandSlugs = new Set([
    "scania-truck-repairs",
    "volvo-truck-repairs",
    "mercedes-truck-tractor-repairs",
  ]);

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/volvo-truck-repairs-boksburg",
    "/scania-truck-repairs-boksburg",
    "/mercedes-truck-repairs-boksburg",
    "/mercedes-actros-engine-reconditioning-boksburg",
    "/services/diesel-pumps-and-injectors",
    "/services/truck-services-maintenance-and-repairs",
    "/fleet-maintenance",
    "/gallery",
    "/reviews",
    "/blog",
    "/contact",
    "/request-a-quote",
  ];

  const highPriorityRoutes = new Set([
    "",
    "/volvo-truck-repairs-boksburg",
    "/scania-truck-repairs-boksburg",
    "/mercedes-truck-repairs-boksburg",
    "/mercedes-actros-engine-reconditioning-boksburg",
    "/services/diesel-engine-diagnostics",
    "/services/diesel-pumps-and-injectors",
    "/services/engine-dyno-testing",
    "/fleet-maintenance",
  ]);

  const dynamicRoutes = [
    ...servicePages.map((page) => `/services/${page.slug}`),
    ...brandPages
      .filter((page) => confirmedBrandSlugs.has(page.slug))
      .map((page) => `/brands/${page.slug}`),
    ...enginePages.map((page) => `/engines/${page.slug}`),
    ...locationPages.map((page) => `/locations/${page.slug}`),
    ...blogPosts.map((page) => `/blog/${page.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: highPriorityRoutes.has(route)
      ? route === ""
        ? 1
        : 0.9
      : route.includes("request-a-quote")
        ? 0.85
        : 0.7,
  }));
}
