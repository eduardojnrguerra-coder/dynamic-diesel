import type { Metadata } from "next";
import { HealthInspectionSection } from "@/components/health-inspection-section";
import { SeoPageTemplate } from "@/components/page-template";
import { commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fleet Maintenance Boksburg | Diesel Truck Fleet Quotes",
  description:
    "Fleet maintenance quote requests for diesel truck operators in Boksburg, Anderbolt, the East Rand and Gauteng.",
  alternates: { canonical: "/fleet-maintenance" },
};

const page: SeoPage = {
  slug: "fleet-maintenance",
  title: "Fleet Maintenance",
  metaTitle: "Fleet Maintenance Boksburg",
  metaDescription: metadata.description as string,
  h1: "Fleet Maintenance for Diesel Trucks in Boksburg",
  summary:
    "Fleet operators can request planned maintenance support by sharing vehicle count, brands, engine models, recurring faults and service priorities.",
  keywords: ["fleet maintenance Boksburg", "truck services Boksburg", "commercial vehicle repairs Boksburg"],
  bullets: ["Fleet quote request path", "Vehicle count and brand capture", "Service and repair planning"],
  proof: ["Main conversion goal for the website", "Local support for East Rand and Gauteng operators"],
  faq: [
    ...commonFaq,
    {
      question: "What should a fleet quote request include?",
      answer:
        "Include the number of trucks, brands, engine models, symptoms, service intervals and the urgency of each vehicle.",
    },
  ],
  internalLinks: [
    { label: "Truck servicing", href: "/truck-servicing-boksburg" },
    { label: "Truck repairs", href: "/truck-repairs-boksburg" },
    { label: "Preventative maintenance", href: "/preventative-truck-maintenance-boksburg" },
    { label: "Truck health inspection", href: "/truck-health-inspection-boksburg" },
    { label: "Request a quote", href: "/request-a-quote#quote-form" },
  ],
};

export default function FleetMaintenancePage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Fleet Maintenance", href: "/fleet-maintenance" },
      ]}
    >
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {["Vehicle list", "Recurring faults", "Downtime priorities"].map((item) => (
          <div key={item} className="rounded border border-line bg-background p-5">
            <h2 className="font-semibold text-foreground">{item}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Add this detail to the quote request so the workshop can respond
              with the right repair and service context.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <HealthInspectionSection
          compact
          copy="Fleet maintenance works best when operators understand the condition of each truck. Dyna-Mic Diesel includes a complimentary truck health inspection with workshop visits to help identify potential maintenance concerns requiring attention."
        />
      </div>
    </SeoPageTemplate>
  );
}
