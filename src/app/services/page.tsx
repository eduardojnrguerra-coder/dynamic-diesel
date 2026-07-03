import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { LinkGrid } from "@/components/site-shell";
import { commonFaq, servicePages, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diesel Truck Repair Services Boksburg | Dyna-Mic Diesel",
  description:
    "Diesel truck repair services in Boksburg including diagnostics, pump repairs, injector repairs, engine dyno testing, truck services and commercial vehicle repairs.",
  alternates: { canonical: "/services" },
};

const page: SeoPage = {
  slug: "services",
  title: "Services",
  metaTitle: "Diesel Truck Repair Services Boksburg",
  metaDescription: metadata.description as string,
  h1: "Diesel Truck Repair Services in Boksburg",
  summary:
    "Dyna-Mic Diesel provides diesel truck repair services for operators in Boksburg, Anderbolt, the East Rand and Gauteng.",
  keywords: ["diesel truck repair services Boksburg", "commercial vehicle repairs Boksburg"],
  bullets: ["Diagnostics and fault finding", "Diesel pump and injector repair enquiries", "Truck services and fleet maintenance"],
  proof: ["Workshop support for diagnostics and repairs", "Service links for brands, engines and fleet maintenance"],
  faq: commonFaq,
  internalLinks: [
    { label: "Volvo truck repairs Boksburg", href: "/volvo-truck-repairs-boksburg" },
    { label: "Scania truck repairs Boksburg", href: "/scania-truck-repairs-boksburg" },
    { label: "Mercedes truck repairs Boksburg", href: "/mercedes-truck-repairs-boksburg" },
    { label: "Mercedes Actros engine reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
    { label: "Fleet maintenance", href: "/fleet-maintenance" },
    { label: "Request a quote", href: "/request-a-quote" },
  ],
};

export default function ServicesPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
    >
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Detailed Service Pages</h2>
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
