import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diesel Pumps and Injectors Boksburg | Dyna-Mic Diesel",
  description:
    "Diesel pumps and injectors support for Volvo truck repairs, diesel diagnostics and commercial vehicle maintenance in Boksburg and the East Rand.",
  alternates: { canonical: "/services/diesel-pumps-and-injectors" },
};

const page: SeoPage = {
  slug: "diesel-pumps-and-injectors",
  title: "Diesel Pumps and Injectors",
  metaTitle: "Diesel Pumps and Injectors Boksburg",
  metaDescription: metadata.description as string,
  h1: "Diesel Pumps and Injectors in Boksburg",
  summary:
    "Dyna-Mic Diesel supports diesel pump and injector repair enquiries for commercial trucks where symptoms include smoke, hard starting, power loss or poor fuel economy.",
  keywords: ["diesel pumps and injectors", "diesel pump repairs Boksburg", "diesel injector repairs Boksburg"],
  bullets: ["Diesel pump issue assessment", "Injector fault symptoms", "Diagnostics before repair scope"],
  proof: ["Linked to Volvo truck repairs", "Workshop in Anderbolt, Boksburg"],
  faq: commonFaq,
  internalLinks: [
    { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
    { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ],
};

export default function DieselPumpsAndInjectorsPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
      ]}
    />
  );
}
