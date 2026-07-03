import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dyna-Mic Diesel | Diesel Truck Workshop Boksburg",
  description:
    "About Dyna-Mic Diesel, a diesel truck repair workshop in Anderbolt, Boksburg with 30+ years of experience serving the East Rand and Gauteng.",
  alternates: { canonical: "/about" },
};

const page: SeoPage = {
  slug: "about",
  title: "About",
  metaTitle: "About Dyna-Mic Diesel",
  metaDescription: metadata.description as string,
  h1: "About Dyna-Mic Diesel",
  summary:
    "Dyna-Mic Diesel is a practical diesel truck repair workshop based in Anderbolt, Boksburg, serving truck operators across the East Rand and Gauteng.",
  keywords: ["diesel truck repair Boksburg", "truck repair workshop Anderbolt"],
  bullets: ["30+ years of diesel experience", "Workshop in Anderbolt, Boksburg", "Built around practical truck repair enquiries"],
  proof: ["Local address published clearly", "Phone, WhatsApp and quote CTAs throughout the site"],
  faq: commonFaq,
  internalLinks: [
    { label: "Services overview", href: "/services" },
    { label: "Fleet maintenance", href: "/fleet-maintenance" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function AboutPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
    >
      <div className="mt-10 rounded border border-line bg-background p-6">
        <h2 className="text-2xl font-semibold text-foreground">Experienced, practical and local</h2>
        <p className="mt-3 leading-7 text-muted">
          The website is structured around how truck operators search: by brand,
          engine model, repair service and local area. It keeps the language
          direct and avoids unconfirmed services.
        </p>
      </div>
    </SeoPageTemplate>
  );
}
