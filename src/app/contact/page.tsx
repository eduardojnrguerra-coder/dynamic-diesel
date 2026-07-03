import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Breadcrumbs, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, Hero, PageFrame } from "@/components/site-shell";
import { business, commonFaq, localBusinessSchema, type LinkItem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Dyna-Mic Diesel | Truck Repairs Boksburg",
  description:
    "Contact Dyna-Mic Diesel at Unit 7, The Avenues, 128 14th Ave, Anderbolt, Boksburg. Call 082 547 7899 or send a WhatsApp enquiry.",
  alternates: { canonical: "/contact" },
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const quoteChecklist = [
  "Truck brand, model and registration if available",
  "Engine model or engine code if known",
  "Warning lights, fault codes or symptoms",
  "Recent repairs or service history",
  "Whether the truck is part of a fleet",
  "How urgent the repair or maintenance work is",
];

export default function ContactPage() {
  return (
    <PageFrame>
      <SeoSchemas faq={commonFaq} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />
      <div className="bg-panel">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
      <Hero
        eyebrow="Contact Dyna-Mic Diesel"
        h1="Contact Dyna-Mic Diesel"
        summary="Call, WhatsApp or email the workshop for diesel truck repairs, diagnostics, engine reconditioning, servicing or fleet maintenance support in Boksburg and the East Rand."
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="relative mb-5 min-h-72 overflow-hidden rounded border border-line bg-steel premium-shadow">
              <Image
                src="/images/workshop-hero.jpg"
                alt="Dyna-Mic Diesel workshop contact"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-safety">
                  Anderbolt, Boksburg
                </p>
                <h2 className="mt-2 text-3xl font-black">Workshop Contact</h2>
              </div>
            </div>
            <div className="space-y-4">
            <ContactCard
              icon={<Phone size={22} />}
              title="Phone"
              href={business.phoneHref}
              value={business.phone}
              copy="Call the workshop to discuss truck repair symptoms, availability and quote requirements."
            />
            <ContactCard
              icon={<MessageCircle size={22} />}
              title="WhatsApp"
              href={business.whatsappHref}
              value="Send a WhatsApp enquiry"
              copy="Send the truck details, photos if useful, symptoms and fleet information."
            />
            <ContactCard
              icon={<Mail size={22} />}
              title="Email"
              href={business.emailHref}
              value={business.email}
              copy="Email repair, servicing, engine reconditioning or fleet maintenance enquiries."
            />
            <ContactCard
              icon={<MapPin size={22} />}
              title="Address"
              href={business.mapHref}
              value={business.address}
              copy="Dyna-Mic Diesel is based in Anderbolt, Boksburg and serves the East Rand and Gauteng."
            />
            <div className="rounded border border-line bg-background p-5">
              <Clock className="text-diesel-red" size={22} aria-hidden="true" />
              <h2 className="mt-3 font-semibold text-foreground">Business Hours</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Please contact the workshop to confirm current opening hours and
                vehicle drop-off arrangements.
              </p>
            </div>
            </div>
          </div>

          <div className="rounded border border-line bg-panel p-6 premium-shadow">
            <h2 className="text-3xl font-black text-foreground">Send an Enquiry</h2>
            <p className="mt-3 leading-7 text-muted">
              Use this form for truck repairs, diagnostics, engine
              reconditioning, servicing or fleet maintenance enquiries.
            </p>
            <form className="mt-6 grid gap-4">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
              <Field label="Truck brand and model" name="truck" />
              <Field label="Service needed" name="service" />
              <label className="grid gap-2 text-sm font-semibold text-steel">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="rounded border border-line bg-background px-3 py-3 text-sm font-normal text-foreground outline-none focus:border-diesel-red"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-diesel-red px-5 text-sm font-black text-white hover:bg-steel"
              >
                Send Enquiry <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-panel py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded border border-line bg-background p-6 premium-shadow">
            <MapPin className="text-diesel-red" size={24} aria-hidden="true" />
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Find the Workshop
            </h2>
            <div className="relative mt-5 flex min-h-80 items-center justify-center overflow-hidden rounded border border-line bg-steel p-6 text-center text-white">
              <Image
                src="/images/workshop-hero.jpg"
                alt="Dyna-Mic Diesel workshop location"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-steel/70" />
              <div className="relative">
                <p className="font-black text-safety">Google Maps</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{business.address}</p>
                <a
                  href={business.mapHref}
                  className="mt-4 inline-flex items-center gap-2 font-bold text-safety hover:text-white"
                >
                  Open location in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="rounded border border-line bg-background p-6 premium-shadow">
            <FileText className="text-diesel-red" size={24} aria-hidden="true" />
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              What to Include When Requesting a Quote
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              A clear enquiry helps the workshop understand the truck, the
              symptoms and the urgency before discussing the next step.
            </p>
            <div className="mt-5 grid gap-3">
              {quoteChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded border border-line bg-background p-4 text-sm font-semibold text-steel"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-steel py-16 text-white">
        <Image
          src="/images/workshop-hero.jpg"
          alt="Dyna-Mic Diesel workshop"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-steel/80" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-safety">
              Workshop Enquiries
            </p>
            <h2 className="mt-2 text-4xl font-black">
              Speak to Dyna-Mic Diesel
            </h2>
          </div>
          <ContactButtons />
        </div>
      </section>
    </PageFrame>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  copy: string;
}) {
  return (
    <a
      href={href}
      className="block rounded border border-line bg-panel p-5 shadow-sm hover:border-diesel-red"
    >
      <div className="text-diesel-red">{icon}</div>
      <h2 className="mt-3 font-semibold text-foreground">{title}</h2>
      <p className="mt-1 text-sm font-semibold text-steel">{value}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-steel">
      {label}
      <input
        name={name}
        type={type}
        className="h-11 rounded border border-line bg-background px-3 text-sm font-normal text-foreground outline-none focus:border-diesel-red"
      />
    </label>
  );
}
