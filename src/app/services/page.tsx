import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { LinkGrid } from "@/components/site-shell";
import { commonFaq, servicePages, type LinkItem, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Diesel Truck Repair Services Boksburg | Dyna-Mic Diesel" },
  description:
    "Diesel truck repair services in Boksburg including diagnostics, pump repairs, injector repairs, engine dyno testing, truck services and commercial vehicle repairs.",
  alternates: { canonical: "/services" },
};

const serviceHubLinks: LinkItem[] = [
  {
    label: "Volvo Truck Repairs",
    href: "/volvo-truck-repairs-boksburg",
    description: "Volvo truck repairs, diagnostics, servicing and maintenance support from Boksburg.",
    image: "/images/volvo-brand-truck.webp",
  },
  {
    label: "Scania Truck Repairs",
    href: "/scania-truck-repairs-boksburg",
    description: "Scania truck repair enquiries, diesel diagnostics and service planning for East Rand operators.",
    image: "/images/scania-brand-truck.webp",
  },
  {
    label: "Mercedes-Benz Truck Repairs",
    href: "/mercedes-truck-repairs-boksburg",
    description: "Mercedes-Benz and Mercedes Actros diagnostics, repairs and truck tractor support.",
    image: "/images/mercedes-brand-truck.webp",
  },
  {
    label: "Engine Reconditioning",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
    description: "Mercedes Actros engine reconditioning enquiries, including OM501, OM502, OM541 and OM542.",
    image: "/images/engine-reconditioning.jpg",
  },
  {
    label: "Diesel Diagnostics",
    href: "/services/diesel-engine-diagnostics",
    description: "Diesel engine diagnostics and fault finding before repair work is scoped.",
    image: "/images/diagnostics.jpg",
  },
  {
    label: "Diesel Pumps and Injectors",
    href: "/services/diesel-pumps-and-injectors",
    description: "Diesel pump and injector enquiries for power, starting, smoke and fuel concerns.",
    image: "/images/diesel-injectors.jpg",
  },
  {
    label: "Engine Dyno Testing",
    href: "/services/engine-dyno-testing",
    description: "Engine dyno testing support for diesel engine repair and reconditioning discussions.",
    image: "/images/dyno-testing.jpg",
  },
  {
    label: "Fleet Maintenance",
    href: "/fleet-maintenance",
    description: "Preventative maintenance and repair planning for commercial vehicle fleets.",
    image: "/images/fleet-maintenance.jpg",
  },
  {
    label: "Other Commercial Truck Enquiries",
    href: "/contact",
    description: "Volvo, Scania and Mercedes-Benz are the main focus, with selected other commercial truck support upon request.",
    image: "/images/workshop-hero.jpg",
  },
];

const page: SeoPage = {
  slug: "services",
  title: "Services",
  metaTitle: "Diesel Truck Repair Services Boksburg",
  metaDescription: metadata.description as string,
  h1: "Diesel Truck Repair Services in Boksburg",
  summary:
    "Dyna-Mic Diesel provides diesel truck repair services for operators in Boksburg, Anderbolt, the East Rand and Gauteng, with a strong focus on Volvo, Scania and Mercedes-Benz trucks.",
  keywords: ["diesel truck repair services Boksburg", "commercial vehicle repairs Boksburg"],
  bullets: [
    "Volvo, Scania and Mercedes-Benz truck repair support",
    "Diesel diagnostics, pumps, injectors and engine dyno testing",
    "Truck services, preventative maintenance and fleet support",
  ],
  proof: [
    "Main service hub for brand, engine and workshop service pages",
    "Focused on confirmed truck brands with selected other commercial truck enquiries considered upon request",
  ],
  faq: commonFaq,
  internalLinks: serviceHubLinks,
};

export default function ServicesPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
    >
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Detailed Service Pages</h2>
        <p className="mt-3 max-w-3xl leading-7 text-white/62">
          Use these pages to find the right workshop support for diagnostics,
          diesel pumps and injectors, engine dyno testing, truck maintenance
          and fleet enquiries. Not operating Volvo, Scania or Mercedes-Benz?
          Contact the workshop and the team will advise whether they can assist.
        </p>
        <div className="mt-5">
          <LinkGrid
            links={servicePages.map((item) => ({
              label: item.title,
              href: `/services/${item.slug}`,
            }))}
          />
        </div>
      </div>
    </SeoPageTemplate>
  );
}
