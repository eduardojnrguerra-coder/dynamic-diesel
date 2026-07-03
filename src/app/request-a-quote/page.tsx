import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { business, commonFaq, type SeoPage } from "@/lib/site";

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

export default function RequestQuotePage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Request a Quote", href: "/request-a-quote" },
      ]}
    >
      <form className="mt-10 grid gap-4 rounded border border-line bg-background p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name" name="name" />
          <Field label="Phone" name="phone" />
          <Field label="Email" name="email" type="email" />
          <Field label="Company or fleet name" name="company" />
          <Field label="Truck brand" name="brand" placeholder="Volvo, Scania, Mercedes-Benz, Mercedes Actros" />
          <Field label="Engine model or code" name="engine" placeholder="OM501, OM502, OM541, OM542" />
          <Field label="Number of vehicles" name="vehicles" type="number" />
          <Field label="Location" name="location" placeholder="Boksburg, Anderbolt, East Rand, Gauteng" />
        </div>
        <label className="grid gap-2 text-sm font-semibold text-steel">
          Symptoms or quote details
          <textarea
            name="details"
            rows={6}
            className="rounded border border-line bg-panel px-3 py-3 font-normal text-foreground outline-none focus:border-diesel-red"
            placeholder="Describe warning lights, running issues, required service, engine reconditioning enquiry or fleet maintenance needs."
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={business.whatsappHref}
            className="inline-flex h-12 items-center justify-center rounded bg-diesel-red px-5 text-sm font-bold text-white hover:bg-steel"
          >
            Send WhatsApp Enquiry
          </a>
          <a
            href={business.emailHref}
            className="inline-flex h-12 items-center justify-center rounded border border-steel bg-panel px-5 text-sm font-bold text-steel hover:border-diesel-red hover:text-diesel-red"
          >
            Email Quote Details
          </a>
        </div>
      </form>
    </SeoPageTemplate>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-steel">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded border border-line bg-panel px-3 font-normal text-foreground outline-none focus:border-diesel-red"
      />
    </label>
  );
}
