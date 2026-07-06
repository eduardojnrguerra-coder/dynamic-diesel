import type { Metadata } from "next";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { Breadcrumbs, FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { Hero, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  commonFaq,
  localBusinessSchema,
  type LinkItem,
  type SeoPage,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote | Diesel Truck Repairs Boksburg",
  description:
    "Request a diesel truck repair or fleet maintenance quote from Dyna-Mic Diesel in Anderbolt, Boksburg.",
  alternates: { canonical: "/request-a-quote" },
};

const page: SeoPage = {
  slug: "request-a-quote",
  title: "Request a Quote",
  metaTitle: "Request a Diesel Truck Repair Quote Boksburg",
  metaDescription: metadata.description as string,
  h1: "Request a Diesel Truck Repair Quote",
  summary:
    "Send Dyna-Mic Diesel the truck brand, engine model, symptoms and fleet details so the workshop can respond with the right context.",
  keywords: ["diesel truck repair quote Boksburg", "fleet maintenance quote Boksburg"],
  bullets: ["Truck brand and engine model", "Symptoms and warning lights", "Fleet size and urgency"],
  proof: ["Main conversion page", "Supports call, WhatsApp and email follow-up"],
  faq: [
    ...commonFaq,
    {
      question: "Can this form submit directly?",
      answer:
        "This build provides the quote request layout. The form can be connected to email, a CRM or a booking system when the business chooses the destination.",
    },
  ],
  internalLinks: [
    { label: "Fleet maintenance", href: "/fleet-maintenance" },
    { label: "Diesel diagnostics", href: "/services/diesel-engine-diagnostics" },
    { label: "Contact", href: "/contact" },
  ],
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Request a Quote", href: "/request-a-quote" },
];

export default function RequestQuotePage() {
  return (
    <PageFrame>
      <SeoSchemas faq={page.faq} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />
      <div className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
      <Hero h1={page.h1} summary={page.summary} eyebrow="Request a quote" />
      <QuoteRequestForm />

      <section className="border-y border-white/10 bg-[#1b1b1b] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
            Useful Links
          </p>
          <h2 className="mt-2 text-4xl font-black text-white">
            Related workshop pages
          </h2>
          <div className="mt-7">
            <LinkGrid links={page.internalLinks} />
          </div>
        </div>
      </section>

      <FaqSection faq={page.faq} />
    </PageFrame>
  );
}
