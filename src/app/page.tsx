import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Gauge,
  MapPin,
  ShieldCheck,
  Settings,
  Truck,
  Wrench,
} from "lucide-react";
import { FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, Hero, LinkGrid, PageFrame } from "@/components/site-shell";
import { business, commonFaq, localBusinessSchema, type LinkItem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dyna-Mic Diesel | Diesel Truck Repairs Boksburg and East Rand",
  description:
    "Dyna-Mic Diesel in Anderbolt, Boksburg provides diesel truck repairs, diagnostics, engine reconditioning and fleet maintenance support across the East Rand and Gauteng.",
  alternates: { canonical: "/" },
};

const homeFaq = [
  ...commonFaq,
  {
    question: "Which truck brands does Dyna-Mic Diesel work on?",
    answer:
      "Dyna-Mic Diesel specialises in Volvo, Scania and Mercedes-Benz trucks, including Mercedes Actros repair and engine reconditioning enquiries. The workshop may assist with selected other commercial truck brands upon request.",
  },
];

const brandLinks: LinkItem[] = [
  {
    label: "Volvo",
    href: "/volvo-truck-repairs-boksburg",
    image: "/images/volvo-truck.jpg",
    description: "Diagnostics, servicing and repair support for Volvo truck operators.",
  },
  {
    label: "Scania",
    href: "/scania-truck-repairs-boksburg",
    image: "/images/scania-truck.jpg",
    description: "Practical Scania diesel diagnostics, repairs and maintenance.",
  },
  {
    label: "Mercedes-Benz",
    href: "/mercedes-truck-repairs-boksburg",
    image: "/images/mercedes-actros.jpg",
    description: "Mercedes-Benz and Actros truck repair support from Boksburg.",
  },
];

const workshopServices: LinkItem[] = [
  {
    label: "Mercedes Actros Engine Reconditioning",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
    image: "/images/engine-reconditioning.jpg",
    description: "Engine reconditioning enquiries for Actros diesel engines.",
  },
  {
    label: "Diesel Diagnostics",
    href: "/services/diesel-engine-diagnostics",
    image: "/images/diagnostics.jpg",
    description: "Fault finding for warning lights, starting issues and power loss.",
  },
  {
    label: "Diesel Pumps and Injectors",
    href: "/services/diesel-pumps-and-injectors",
    image: "/images/diesel-injectors.jpg",
    description: "Fuel system support for pumps, injectors, smoke and poor economy.",
  },
  {
    label: "Engine Dyno Testing",
    href: "/services/engine-dyno-testing",
    image: "/images/dyno-testing.jpg",
    description: "Engine testing support for performance and reconditioning work.",
  },
  {
    label: "Truck Services, Maintenance and Repairs",
    href: "/services/truck-services-maintenance-and-repairs",
    image: "/images/workshop-hero.jpg",
    description: "Workshop servicing and repair support for commercial vehicles.",
  },
  {
    label: "Fleet Maintenance",
    href: "/fleet-maintenance",
    image: "/images/fleet-maintenance.jpg",
    description: "Planned service support for fleet owners and commercial operators.",
  },
  {
    label: "Request a Quote",
    href: "/request-a-quote",
    image: "/images/mercedes-actros.jpg",
    description: "Send the truck details, symptoms and service requirements.",
  },
];

const commonProblems = [
  "Loss of power",
  "Starting problems",
  "Engine warning lights",
  "Injector faults",
  "Diesel pump issues",
  "Overheating",
  "Excessive smoke",
  "Poor fuel economy",
];

const reasons = [
  "30+ years of diesel workshop experience",
  "Workshop based in Anderbolt, Boksburg",
  "Practical diagnostics before repair decisions",
  "Support for owner-drivers and commercial fleets",
  "Clear call, WhatsApp and quote request options",
  "Specialists in Volvo, Scania and Mercedes-Benz trucks",
];

const trustItems = [
  ["30+ Years Experience", ShieldCheck],
  ["Volvo Specialists", Truck],
  ["Scania Specialists", Truck],
  ["Mercedes Specialists", Truck],
  ["Fleet Maintenance", Wrench],
  ["Diagnostics", Gauge],
  ["Engine Reconditioning", Settings],
  ["Diesel Pumps & Injectors", CheckCircle2],
] as const;

export default function Home() {
  return (
    <PageFrame>
      <JsonLd data={localBusinessSchema()} />
      <SeoSchemas faq={homeFaq} breadcrumbs={[{ label: "Home", href: "/" }]} />
      <Hero
        h1="Diesel Truck Repairs, Diagnostics & Engine Reconditioning in Boksburg"
        summary={`${business.name} specialises in Volvo, Scania and Mercedes-Benz truck repairs, diagnostics, servicing and engine reconditioning, while also assisting with selected other commercial truck brands upon request across Boksburg and the East Rand.`}
      />

      <section className="section-dark py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Truck Repair Specialists
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white lg:text-5xl">
              Specialist Support for Volvo, Scania & Mercedes-Benz Trucks
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              These are the core truck brands Dyna-Mic Diesel focuses on daily,
              with additional commercial vehicle support available upon request.
              Bring the symptoms, warning lights, engine code if known and
              service history, and the workshop can discuss the next sensible
              step.
            </p>
            <div className="mt-7">
              <ContactButtons />
            </div>
          </div>
          <LinkGrid links={brandLinks} />
        </div>
      </section>

      <section className="bg-[#151515] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white/10 premium-shadow">
            <Image
              src="/images/workshop-hero.jpg"
              alt="Commercial truck workshop support"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/82 to-transparent" />
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-8 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Other Commercial Trucks
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white">
              Not sure if we can help with your truck?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              While Volvo, Scania and Mercedes-Benz remain our main focus,
              Dyna-Mic Diesel may also assist with selected other truck brands
              depending on the repair, parts availability and workshop
              requirements. If you operate another commercial vehicle brand,
              contact us and our team will advise whether we can assist.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex h-13 w-fit items-center justify-center gap-2 rounded bg-diesel-red px-6 text-sm font-black text-[#111111] transition hover:-translate-y-0.5 hover:bg-safety"
            >
              Ask About Your Truck <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
                Workshop Trust
              </p>
              <h2 className="mt-2 text-4xl font-black text-white">
                Diesel engineering support operators can rely on
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(([label, Icon]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-diesel-red/50"
              >
                <Icon className="text-diesel-red" size={30} aria-hidden="true" />
                <p className="mt-5 text-lg font-black text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-y border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <AlertTriangle className="text-diesel-red" size={30} aria-hidden="true" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
                Common Problems
              </p>
              <h2 className="mt-2 text-4xl font-black text-white">
                Common diesel truck problems we help with
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-sm"
              >
                <CheckCircle2 className="shrink-0 text-diesel-red" size={20} />
                <span className="font-bold text-steel">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
                Workshop Services
              </p>
              <h2 className="mt-2 max-w-4xl text-4xl font-black text-white">
                Diagnostics, fuel system work, dyno testing and maintenance
              </h2>
            </div>
            <Link href="/services" className="font-bold text-diesel-red hover:text-white">
              View all services
            </Link>
          </div>
          <LinkGrid links={workshopServices} />
        </div>
      </section>

      <section className="bg-[#1b1b1b] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_480px] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-safety">
              Fleet Maintenance
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight lg:text-5xl">
              Fleet maintenance support for commercial vehicles
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Fleet owners can contact Dyna-Mic Diesel for truck services,
              maintenance planning, diagnostics and repair support. Share the
              number of vehicles, brands, service intervals and recurring
              faults so the workshop can understand what needs attention first.
            </p>
          </div>
          <div className="overflow-hidden rounded border border-white/15 bg-white/5 premium-shadow">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/fleet-maintenance.jpg"
                alt="Fleet maintenance support at Dyna-Mic Diesel"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Truck className="text-safety" size={30} aria-hidden="true" />
              <h3 className="mt-3 text-2xl font-black">Request fleet support</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Send the truck details, symptoms and downtime priorities by phone,
                WhatsApp or the quote form.
              </p>
              <Link
                href="/fleet-maintenance"
                className="mt-5 inline-flex items-center gap-2 font-bold text-safety hover:text-white"
              >
                Fleet maintenance <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Why Operators Call Us
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">
              Why fleet owners choose Dyna-Mic Diesel
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = [ShieldCheck, Wrench, Gauge][index % 3];
              return (
                <div key={reason} className="rounded-xl border border-white/10 bg-white/[0.035] p-6 shadow-sm transition hover:-translate-y-1 hover:border-diesel-red/50">
                  <Icon className="text-diesel-red" size={24} aria-hidden="true" />
                  <p className="mt-3 font-bold text-steel">{reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Service Areas
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">
              Serving Boksburg, Anderbolt, the East Rand and Gauteng
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              The workshop is based at {business.address}. Operators from
              Boksburg, Anderbolt and surrounding East Rand industrial areas can
              call ahead, send a WhatsApp enquiry or request a quote online.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {business.areaServed.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-5 premium-shadow transition hover:border-diesel-red/50"
              >
                <MapPin className="shrink-0 text-diesel-red" size={20} />
                <span className="font-bold text-steel">{area}</span>
              </div>
            ))}
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
            <p className="text-sm font-black uppercase tracking-[0.16em] text-safety">
              Book a Workshop Enquiry
            </p>
            <h2 className="mt-2 text-4xl font-black">
              Need diesel truck repairs in Boksburg?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              Call or WhatsApp {business.name} with the truck brand, symptoms,
              warning lights, engine code if known and fleet details.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/56">
              Not driving Volvo, Scania or Mercedes? Contact us and we&apos;ll confirm if we can assist.
            </p>
          </div>
          <ContactButtons />
        </div>
      </section>

      <FaqSection faq={homeFaq} />
    </PageFrame>
  );
}
