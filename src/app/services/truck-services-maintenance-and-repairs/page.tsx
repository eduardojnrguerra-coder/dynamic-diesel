import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Truck Services, Maintenance and Repairs Boksburg",
  description:
    "Truck services, maintenance and repairs in Boksburg for Volvo trucks and commercial vehicle operators across the East Rand.",
  alternates: { canonical: "/services/truck-services-maintenance-and-repairs" },
};

const page: SeoPage = {
  slug: "truck-services-maintenance-and-repairs",
  title: "Truck Services, Maintenance and Repairs",
  metaTitle: "Truck Services, Maintenance and Repairs Boksburg",
  metaDescription: metadata.description as string,
  h1: "Truck Services, Maintenance and Repairs in Boksburg",
  summary:
    "Dyna-Mic Diesel supports truck service, maintenance and repair enquiries for commercial vehicle operators who need practical workshop support in Boksburg.",
  keywords: ["truck services maintenance and repairs", "Volvo truck service Boksburg", "fleet maintenance Boksburg"],
  bullets: ["Truck service planning", "Preventative maintenance", "Fleet quote support"],
  proof: ["30+ years diesel workshop experience", "Serving Boksburg and the East Rand"],
  faq: commonFaq,
  internalLinks: [
    { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
    { label: "Fleet Maintenance", href: "/fleet-maintenance" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ],
};

export default function TruckServicesMaintenanceRepairsPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        {
          label: "Truck Services, Maintenance and Repairs",
          href: "/services/truck-services-maintenance-and-repairs",
        },
      ]}
    />
  );
}
