import type { Metadata } from "next";
import Link from "next/link";
import { Gauge, ShieldCheck, Wrench } from "lucide-react";
import { FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, Hero, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  business,
  commonFaq,
  localBusinessSchema,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Dyna-Mic Diesel | Diesel Truck Repairs Boksburg and East Rand",
  description:
    "Dyna-Mic Diesel in Anderbolt, Boksburg provides diesel truck repairs, diagnostics, engine reconditioning and fleet maintenance support across the East Rand and Gauteng.",
  alternates: { canonical: "/" },
};

const homeFaq = [
  ...commonFaq,
  {
    question: "Which truck brands does the website target?",
    answer:
      "The site focuses on confirmed Volvo, Scania, Mercedes-Benz and Mercedes Actros truck repair searches.",
  },
];

const confirmedBrandLinks = [
  { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
  { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
  { label: "Mercedes-Benz Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
  {
    label: "Mercedes Actros Engine Reconditioning",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
  },
];

const prioritySeoLinks = [
  { label: "Volvo Truck Repairs Boksburg", href: "/volvo-truck-repairs-boksburg" },
  { label: "Scania Truck Repairs Boksburg", href: "/scania-truck-repairs-boksburg" },
  { label: "Mercedes Truck Repairs Boksburg", href: "/mercedes-truck-repairs-boksburg" },
  {
    label: "Mercedes Actros Engine Reconditioning Boksburg",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
  },
  { label: "Diesel Diagnostics Boksburg", href: "/services/diesel-engine-diagnostics" },
  { label: "Diesel Pumps and Injectors Boksburg", href: "/services/diesel-pumps-and-injectors" },
  { label: "Engine Dyno Testing Boksburg", href: "/services/engine-dyno-testing" },
  { label: "Fleet Maintenance East Rand", href: "/fleet-maintenance" },
];

export default function Home() {
  return (
    <PageFrame>
      <JsonLd data={localBusinessSchema()} />
      <SeoSchemas faq={homeFaq} breadcrumbs={[{ label: "Home", href: "/" }]} />
      <Hero
        h1="Diesel Truck Repairs, Diagnostics & Engine Reconditioning in Boksburg"
        summary={`${business.name} specialises in Volvo, Scania and Mercedes-Benz truck repairs, diagnostics, servicing and engine reconditioning for fleet owners, truck operators and commercial vehicle businesses across the East Rand.`}
      />
      <section className="bg-panel py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Confirmed truck brands", "Volvo truck repairs Boksburg, Scania truck repairs Boksburg and Mercedes truck repairs Boksburg are the primary brand targets."],
              ["Actros engine focus", "Mercedes Actros engine reconditioning Boksburg is the main engine-specific SEO page, supported by OM501, OM502, OM541 and OM542 content."],
              ["Service and fleet enquiries", "Diesel diagnostics, diesel pumps and injectors, engine dyno testing and fleet maintenance paths lead to call, WhatsApp and quote CTAs."],
            ].map(([title, copy], index) => {
              const Icon = [Wrench, Gauge, ShieldCheck][index];
              return (
                <div key={title} className="rounded border border-line bg-background p-6">
                  <Icon className="text-diesel-red" size={24} aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold text-foreground">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-diesel-red">
                SEO Priorities
              </p>
              <h2 className="mt-2 text-3xl font-black text-foreground">
                The highest-value pages are linked first
              </h2>
            </div>
            <Link href="/services" className="font-semibold text-diesel-red hover:text-steel">
              View all services
            </Link>
          </div>
          <LinkGrid links={prioritySeoLinks} />
        </div>
      </section>
      <section className="bg-panel py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-diesel-red">
              Truck Brands
            </p>
            <h2 className="mt-2 text-3xl font-black text-foreground">
              Confirmed brand pages only
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              The brand SEO structure now prioritises confirmed Volvo, Scania,
              Mercedes-Benz and Mercedes Actros pages. Unconfirmed brands are
              kept out of primary navigation and homepage linking.
            </p>
            <div className="mt-6">
              <LinkGrid
                links={confirmedBrandLinks}
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-diesel-red">
              Engine Models
            </p>
            <h2 className="mt-2 text-3xl font-black text-foreground">
              Services supporting the brand pages
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Generic service pages stay active, but internal links point them
              back toward the confirmed brand and fleet-maintenance priorities.
            </p>
            <div className="mt-6">
              <LinkGrid
                links={[
                  { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
                  { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
                  { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
                  {
                    label: "Truck Services, Maintenance and Repairs",
                    href: "/services/truck-services-maintenance-and-repairs",
                  },
                  { label: "Fleet Maintenance", href: "/fleet-maintenance" },
                  { label: "Request a Quote", href: "/request-a-quote" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-steel py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-safety">
              Fleet maintenance quotes
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Need support for more than one truck?
            </h2>
          </div>
          <ContactButtons />
        </div>
      </section>
      <FaqSection faq={homeFaq} />
    </PageFrame>
  );
}
