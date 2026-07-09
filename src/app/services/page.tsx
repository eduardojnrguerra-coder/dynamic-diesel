import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HealthInspectionSection } from "@/components/health-inspection-section";
import { Breadcrumbs, FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  brandPositioning,
  commonFaq,
  localBusinessSchema,
  quoteHref,
  supportedTruckBrandText,
  type LinkItem,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Complete Truck Repairs, Servicing & Maintenance Boksburg" },
  description:
    "Complete truck repairs, servicing, brake repairs, diesel diagnostics, engine reconditioning, diesel pumps, injectors and fleet maintenance in Boksburg.",
  alternates: { canonical: "/services" },
};

const serviceHubLinks: LinkItem[] = [
  {
    label: "Truck Repairs",
    href: "/truck-repairs-boksburg",
    description: "Commercial truck repair support for symptoms, faults and workshop repair planning.",
    image: "/images/truck-repairs.svg",
  },
  {
    label: "Truck Servicing",
    href: "/truck-servicing-boksburg",
    description: "Minor services, major services, routine maintenance and service planning.",
    image: "/images/truck-servicing.svg",
  },
  {
    label: "Truck Brake Repairs",
    href: "/truck-brake-repairs-boksburg",
    description: "Brake inspections, brake repairs and brake maintenance support.",
    image: "/images/truck-brake-repairs.svg",
  },
  {
    label: "Diesel Diagnostics",
    href: "/diesel-diagnostics-boksburg",
    description: "Diesel diagnostics, engine diagnostics and performance fault investigation.",
    image: "/images/diagnostics.jpg",
  },
  {
    label: "Engine Reconditioning",
    href: "/engine-reconditioning-boksburg",
    description: "Diesel engine reconditioning and Mercedes Actros engine repair support.",
    image: "/images/engine-reconditioning.jpg",
  },
  {
    label: "Diesel Pumps & Injectors",
    href: "/diesel-pumps-and-injectors-boksburg",
    description: "Diesel pump and injector support for smoke, power, starting and fuel concerns.",
    image: "/images/diesel-injectors.jpg",
  },
  {
    label: "Engine Dyno Testing",
    href: "/engine-dyno-testing-boksburg",
    description: "Engine dyno testing support for repair and reconditioning discussions.",
    image: "/images/dyno-testing.jpg",
  },
  {
    label: "Fleet Maintenance",
    href: "/fleet-maintenance-boksburg",
    description: "Fleet maintenance, preventative maintenance and commercial vehicle support.",
    image: "/images/fleet-maintenance.jpg",
  },
  {
    label: "Truck Health Inspection",
    href: "/truck-health-inspection-boksburg",
    description: "Complimentary truck health inspections included with workshop visits.",
    image: "/images/truck-health-inspection.svg",
  },
];

const categories = [
  {
    title: "Truck Servicing & Maintenance",
    copy: "Service support for commercial truck operators who need practical maintenance planning from a Boksburg workshop.",
    items: ["Minor Services", "Major Services", "Routine Maintenance", "Preventative Maintenance", "Fleet Maintenance"],
    href: "/truck-servicing-boksburg",
  },
  {
    title: "Truck Brake Services",
    copy: "Brake inspection, repair and maintenance support without unconfirmed technical claims or unsafe DIY advice.",
    items: ["Truck Brake Repairs", "Brake Inspections", "Brake Maintenance"],
    href: "/truck-brake-repairs-boksburg",
  },
  {
    title: "Diesel Diagnostics",
    copy: "Fault investigation for warning lights, engine symptoms, power loss, smoke and performance problems.",
    items: ["Diesel Diagnostics", "Engine Diagnostics", "Fault Investigation", "Performance Problem Investigation"],
    href: "/diesel-diagnostics-boksburg",
  },
  {
    title: "Engine Services",
    copy: "Engine-focused workshop support for diesel engine concerns, Actros reconditioning enquiries and dyno testing.",
    items: ["Engine Reconditioning", "Mercedes Actros Engine Reconditioning", "Engine Dyno Testing"],
    href: "/engine-reconditioning-boksburg",
  },
  {
    title: "Diesel Fuel System Services",
    copy: "Diesel pump and injector support for fuel system symptoms affecting power, smoke, starting and fuel economy.",
    items: ["Diesel Pumps", "Diesel Injectors"],
    href: "/diesel-pumps-and-injectors-boksburg",
  },
  {
    title: "Fleet Services",
    copy: "Commercial truck maintenance support for operators managing service intervals, faults and downtime priorities.",
    items: ["Fleet Maintenance", "Preventative Maintenance", "Commercial Vehicle Maintenance Support"],
    href: "/fleet-maintenance-boksburg",
  },
];

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <PageFrame>
      <SeoSchemas faq={commonFaq} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />
      <div className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#111111] text-white">
        <Image
          src="/images/workshop-hero.jpg"
          alt="Dyna-Mic Diesel truck repair workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/86 to-[#111111]/34" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/50" />
        <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1480px] items-center px-4 py-24 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <p className="reveal-up inline-flex rounded border border-diesel-red/35 bg-diesel-red/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-diesel-red">
              Full-service truck workshop
            </p>
            <h1 className="reveal-up-delay mt-7 max-w-6xl text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Complete Truck Repairs, Servicing & Maintenance in Boksburg
            </h1>
            <div className="reveal-up-delay mt-7 max-w-3xl space-y-4 text-lg leading-8 text-white/76 sm:text-xl">
              <p>
                From routine truck servicing and brake repairs to advanced
                diesel diagnostics, engine reconditioning and fleet maintenance,
                Dyna-Mic Diesel provides comprehensive commercial truck workshop
                services from Anderbolt, Boksburg.
              </p>
              <p>
                With over 30 years of industry experience, our workshop
                services, maintains and repairs {supportedTruckBrandText}, with
                specialist experience in Volvo, Scania and Mercedes-Benz trucks.
              </p>
              <p>
                Every truck entering our workshop receives a complimentary health
                inspection to help identify potential maintenance concerns and
                developing problems that may require attention.
              </p>
            </div>
            <div className="reveal-up-delay mt-9">
              <ContactButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
            Service Architecture
          </p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Workshop services for immediate repairs and long-term truck care
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow transition hover:-translate-y-1 hover:border-diesel-red/50"
              >
                <h3 className="text-2xl font-black text-white">{category.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{category.copy}</p>
                <div className="mt-6 grid gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm font-bold text-white/76">
                      <CheckCircle2 size={16} className="shrink-0 text-diesel-red" />
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-diesel-red">
                  Learn More <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HealthInspectionSection />

      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              High-intent Service Pages
            </p>
            <h2 className="mt-2 max-w-4xl text-4xl font-black text-white">
              Find the right service for your truck
            </h2>
          </div>
          <LinkGrid links={serviceHubLinks} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Truck Brands Supported
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">
              Commercial truck repair support for confirmed brands
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/66">
              {brandPositioning} Use the truck brand pages to find the most
              relevant repair, servicing, diagnostics, fleet maintenance and
              quote routes for your vehicle.
            </p>
            <Link
              href="/truck-brands"
              className="mt-6 inline-flex items-center justify-center rounded bg-diesel-red px-5 py-3 text-sm font-black text-[#111111] transition hover:bg-safety"
            >
              View Truck Brands
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] py-20 text-white">
        <Image
          src="/images/workshop-hero.jpg"
          alt="Dyna-Mic Diesel workshop service booking"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#111111]/82" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-diesel-red">
              Book Your Truck In
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">
              Need truck repairs, servicing or maintenance support?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/62">
              Tell us the truck brand, symptoms, service requirement and urgency.
              The workshop can advise on the next practical step.
            </p>
          </div>
          <div>
            <ContactButtons />
            <Link
              href={quoteHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-black text-diesel-red hover:text-white"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faq={commonFaq} />
    </PageFrame>
  );
}
