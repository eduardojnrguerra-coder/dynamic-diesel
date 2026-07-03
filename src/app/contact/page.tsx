import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SeoPageTemplate } from "@/components/page-template";
import { business, commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Dyna-Mic Diesel | Truck Repairs Boksburg",
  description:
    "Contact Dyna-Mic Diesel at Unit 7, The Avenues, 128 14th Ave, Anderbolt, Boksburg. Call 082 547 7899 or send a WhatsApp enquiry.",
  alternates: { canonical: "/contact" },
};

const page: SeoPage = {
  slug: "contact",
  title: "Contact",
  metaTitle: "Contact Dyna-Mic Diesel Boksburg",
  metaDescription: metadata.description as string,
  h1: "Contact Dyna-Mic Diesel",
  summary:
    "Call, WhatsApp or email Dyna-Mic Diesel for diesel truck repair, diagnostics, engine reconditioning or fleet maintenance quote enquiries.",
  keywords: ["Dyna-Mic Diesel contact", "diesel truck repairs Boksburg"],
  bullets: ["Phone and WhatsApp enquiry paths", "Workshop address published", "Quote page for fleet details"],
  proof: ["Located in Anderbolt, Boksburg", "Serves East Rand and Gauteng"],
  faq: commonFaq,
  internalLinks: [
    { label: "Request a quote", href: "/request-a-quote" },
    { label: "Services", href: "/services" },
    { label: "Location: Boksburg", href: "/locations/boksburg" },
  ],
};

export default function ContactPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
    >
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <a href={business.phoneHref} className="rounded border border-line bg-background p-5 hover:border-diesel-red">
          <Phone className="text-diesel-red" size={22} />
          <h2 className="mt-3 font-semibold text-foreground">Call</h2>
          <p className="mt-1 text-sm text-muted">{business.phone}</p>
        </a>
        <a href={business.emailHref} className="rounded border border-line bg-background p-5 hover:border-diesel-red">
          <Mail className="text-diesel-red" size={22} />
          <h2 className="mt-3 font-semibold text-foreground">Email</h2>
          <p className="mt-1 text-sm text-muted">{business.email}</p>
        </a>
        <a href={business.mapHref} className="rounded border border-line bg-background p-5 hover:border-diesel-red">
          <MapPin className="text-diesel-red" size={22} />
          <h2 className="mt-3 font-semibold text-foreground">Workshop</h2>
          <p className="mt-1 text-sm leading-6 text-muted">{business.address}</p>
        </a>
      </div>
    </SeoPageTemplate>
  );
}
