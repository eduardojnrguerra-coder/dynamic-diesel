import type { Metadata } from "next";
import { business, quoteHref, siteUrl, type LinkItem } from "@/lib/site";

export type TruckBrandPage = {
  name: string;
  slug: string;
  href: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  image: string;
  specialist: boolean;
  description: string;
};

export const truckBrandPages: TruckBrandPage[] = [
  {
    name: "Volvo",
    slug: "volvo-truck-repairs-boksburg",
    href: "/volvo-truck-repairs-boksburg",
    title: "Volvo Truck Repairs",
    seoTitle: "Volvo Truck Repairs Boksburg | Dyna-Mic Diesel",
    metaDescription: "Volvo truck repairs, servicing, diagnostics and maintenance support from Dyna-Mic Diesel in Anderbolt, Boksburg.",
    h1: "Volvo Truck Repairs in Boksburg",
    image: "/images/volvo-brand-truck.webp",
    specialist: true,
    description: "Specialist Volvo truck repair, servicing, diagnostics and maintenance support.",
  },
  {
    name: "Scania",
    slug: "scania-truck-repairs-boksburg",
    href: "/scania-truck-repairs-boksburg",
    title: "Scania Truck Repairs",
    seoTitle: "Scania Truck Repairs Boksburg | Dyna-Mic Diesel",
    metaDescription: "Scania truck repairs, servicing, diagnostics and maintenance support from Dyna-Mic Diesel in Anderbolt, Boksburg.",
    h1: "Scania Truck Repairs in Boksburg",
    image: "/images/scania-brand-truck.webp",
    specialist: true,
    description: "Specialist Scania truck repair, servicing, diagnostics and maintenance support.",
  },
  {
    name: "Mercedes-Benz",
    slug: "mercedes-truck-repairs-boksburg",
    href: "/mercedes-truck-repairs-boksburg",
    title: "Mercedes-Benz Truck Repairs",
    seoTitle: "Mercedes-Benz Truck Repairs Boksburg | Dyna-Mic Diesel",
    metaDescription: "Mercedes-Benz truck repairs, Actros diagnostics, servicing and maintenance support from Dyna-Mic Diesel in Boksburg.",
    h1: "Mercedes-Benz Truck Repairs in Boksburg",
    image: "/images/mercedes-brand-truck.webp",
    specialist: true,
    description: "Specialist Mercedes-Benz and Mercedes Actros truck repair support.",
  },
  {
    name: "Mercedes Actros",
    slug: "mercedes-actros-engine-reconditioning-boksburg",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
    title: "Mercedes Actros Engine Reconditioning",
    seoTitle: "Mercedes Actros Engine Reconditioning Boksburg | Dyna-Mic Diesel",
    metaDescription: "Mercedes Actros engine reconditioning, diagnostics and repair support from Dyna-Mic Diesel in Anderbolt, Boksburg.",
    h1: "Mercedes Actros Engine Reconditioning in Boksburg",
    image: "/images/mercedes-actros.jpg",
    specialist: true,
    description: "Specialist Mercedes Actros engine reconditioning and repair support.",
  },
  {
    name: "MAN",
    slug: "man-truck-repairs-boksburg",
    href: "/truck-brands/man-truck-repairs-boksburg",
    title: "MAN Truck Repairs",
    seoTitle: "MAN Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "MAN truck repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "MAN Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-man.svg",
    specialist: false,
    description: "MAN truck service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "DAF",
    slug: "daf-truck-repairs-boksburg",
    href: "/truck-brands/daf-truck-repairs-boksburg",
    title: "DAF Truck Repairs",
    seoTitle: "DAF Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "DAF truck repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "DAF Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-daf.svg",
    specialist: false,
    description: "DAF truck service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "Iveco",
    slug: "iveco-truck-repairs-boksburg",
    href: "/truck-brands/iveco-truck-repairs-boksburg",
    title: "Iveco Truck Repairs",
    seoTitle: "Iveco Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "Iveco truck repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "Iveco Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-iveco.svg",
    specialist: false,
    description: "Iveco truck service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "Hino",
    slug: "hino-truck-repairs-boksburg",
    href: "/truck-brands/hino-truck-repairs-boksburg",
    title: "Hino Truck Repairs",
    seoTitle: "Hino Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "Hino truck repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "Hino Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-hino.svg",
    specialist: false,
    description: "Hino truck service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "Isuzu",
    slug: "isuzu-truck-repairs-boksburg",
    href: "/truck-brands/isuzu-truck-repairs-boksburg",
    title: "Isuzu Truck Repairs",
    seoTitle: "Isuzu Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "Isuzu truck repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "Isuzu Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-isuzu.svg",
    specialist: false,
    description: "Isuzu truck service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "UD Trucks",
    slug: "ud-truck-repairs-boksburg",
    href: "/truck-brands/ud-truck-repairs-boksburg",
    title: "UD Truck Repairs",
    seoTitle: "UD Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "UD Trucks repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "UD Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-ud-trucks.svg",
    specialist: false,
    description: "UD Trucks service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "FAW",
    slug: "faw-truck-repairs-boksburg",
    href: "/truck-brands/faw-truck-repairs-boksburg",
    title: "FAW Truck Repairs",
    seoTitle: "FAW Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "FAW truck repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "FAW Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-faw.svg",
    specialist: false,
    description: "FAW truck service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "FUSO",
    slug: "fuso-truck-repairs-boksburg",
    href: "/truck-brands/fuso-truck-repairs-boksburg",
    title: "FUSO Truck Repairs",
    seoTitle: "FUSO Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "FUSO truck repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "FUSO Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-fuso.svg",
    specialist: false,
    description: "FUSO truck service, maintenance and repair support from the Anderbolt workshop.",
  },
  {
    name: "Renault Trucks",
    slug: "renault-truck-repairs-boksburg",
    href: "/truck-brands/renault-truck-repairs-boksburg",
    title: "Renault Truck Repairs",
    seoTitle: "Renault Truck Repairs Boksburg | Service & Maintenance",
    metaDescription: "Renault Trucks repairs, servicing and maintenance in Boksburg from Dyna-Mic Diesel for commercial truck operators across Gauteng.",
    h1: "Renault Truck Repairs & Servicing in Boksburg",
    image: "/images/brand-renault-trucks.svg",
    specialist: false,
    description: "Renault Trucks service, maintenance and repair support from the Anderbolt workshop.",
  },
];

export const additionalTruckBrandPages = truckBrandPages.filter((brand) => !brand.specialist);
export const specialistTruckBrandPages = truckBrandPages.filter((brand) => brand.specialist);

export function getTruckBrandPage(slug: string) {
  return additionalTruckBrandPages.find((brand) => brand.slug === slug);
}

export function truckBrandMetadata(brand: TruckBrandPage): Metadata {
  return {
    title: { absolute: brand.seoTitle },
    description: brand.metaDescription,
    alternates: { canonical: brand.href },
    openGraph: {
      title: brand.seoTitle,
      description: brand.metaDescription,
      url: `${siteUrl}${brand.href}`,
      images: [{ url: brand.image, width: 1200, height: 750 }],
    },
  };
}

export const brandServiceLinks: LinkItem[] = [
  { label: "Truck Servicing", href: "/truck-servicing-boksburg", image: "/images/truck-servicing.svg" },
  { label: "Truck Brake Repairs", href: "/truck-brake-repairs-boksburg", image: "/images/truck-brake-repairs.svg" },
  { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg", image: "/images/diagnostics.jpg" },
  { label: "Preventative Maintenance", href: "/preventative-truck-maintenance-boksburg", image: "/images/truck-health-inspection.svg" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance-boksburg", image: "/images/fleet-maintenance.jpg" },
  { label: "Request a Quote", href: quoteHref, image: "/images/mercedes-actros.jpg" },
];

export function truckBrandServiceSchema(brand: TruckBrandPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: brand.title,
    description: brand.metaDescription,
    areaServed: business.areaServed,
    provider: {
      "@type": "AutoRepair",
      name: business.name,
      telephone: business.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 7, The Avenues, 128 14th Ave",
        addressLocality: "Anderbolt, Boksburg",
        postalCode: "1459",
        addressCountry: "ZA",
      },
    },
  };
}
