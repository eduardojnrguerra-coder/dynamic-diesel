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
import { HealthInspectionSection } from "@/components/health-inspection-section";
import { FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, Hero, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  brandPositioning,
  business,
  commonFaq,
  localBusinessSchema,
  supportedTruckBrandText,
  type LinkItem,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Dyna-Mic Diesel | Truck Repairs, Servicing & Maintenance Boksburg" },
  description:
    "Dyna-Mic Diesel in Anderbolt, Boksburg provides truck repairs, servicing, brake repairs, diesel diagnostics, engine reconditioning and fleet maintenance across the East Rand.",
  alternates: { canonical: "/" },
};

const homeFaq = [
  ...commonFaq,
  {
    question: "Which truck brands does Dyna-Mic Diesel work on?",
    answer:
      "Dyna-Mic Diesel services, maintains and repairs Volvo, Scania, Mercedes-Benz, MAN, DAF, Iveco, Hino, Isuzu, UD Trucks, FAW, FUSO and Renault Trucks, with particularly strong experience in Volvo, Scania and Mercedes-Benz trucks.",
  },
];

const brandLinks: LinkItem[] = [
  {
    label: "Volvo",
    href: "/volvo-truck-repairs-boksburg",
    image: "/images/volvo-brand-truck.webp",
    description: "Diagnostics, servicing and repair support for Volvo truck operators.",
  },
  {
    label: "Scania",
    href: "/scania-truck-repairs-boksburg",
    image: "/images/scania-brand-truck.webp",
    description: "Practical Scania diesel diagnostics, repairs and maintenance.",
  },
  {
    label: "Mercedes-Benz",
    href: "/mercedes-truck-repairs-boksburg",
    image: "/images/mercedes-brand-truck.webp",
    description: "Mercedes-Benz and Actros truck repair support from Boksburg.",
  },
];

const workshopServices: LinkItem[] = [
  {
    label: "Truck Repairs",
    href: "/truck-repairs-boksburg",
    image: "/images/service-truck-repairs-4k.webp",
    description: "Commercial truck repair support from Anderbolt, Boksburg.",
  },
  {
    label: "Truck Servicing",
    href: "/truck-servicing-boksburg",
    image: "/images/service-truck-servicing-workshop.webp",
    description: "Minor services, major services and routine maintenance support.",
  },
  {
    label: "Truck Brake Repairs",
    href: "/truck-brake-repairs-boksburg",
    image: "/images/service-truck-brake-repairs-4k.webp",
    description: "Truck brake inspections, repairs and maintenance support.",
  },
  {
    label: "Mercedes Actros Engine Reconditioning",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
    image: "/images/service-actros-engine-reconditioning-4k.webp",
    description: "Engine reconditioning enquiries for Actros diesel engines.",
  },
  {
    label: "Diesel Diagnostics",
    href: "/diesel-diagnostics-boksburg",
    image: "/images/service-diesel-diagnostics-4k.webp",
    description: "Fault finding for warning lights, starting issues and power loss.",
  },
  {
    label: "Diesel Pumps and Injectors",
    href: "/diesel-pumps-and-injectors-boksburg",
    image: "/images/service-diesel-pumps-injectors-4k.webp",
    description: "Fuel system support for pumps, injectors, smoke and poor economy.",
  },
  {
    label: "Engine Dyno Testing",
    href: "/engine-dyno-testing-boksburg",
    image: "/images/service-engine-dyno-testing-4k.webp",
    description: "Engine testing support for performance and reconditioning work.",
  },
  {
    label: "Fleet Maintenance",
    href: "/fleet-maintenance-boksburg",
    image: "/images/service-fleet-maintenance-workshop.webp",
    description: "Planned service support for fleet owners and commercial operators.",
  },
  {
    label: "Request a Quote",
    href: "/request-a-quote#quote-form",
    image: "/images/service-request-quote-4k.webp",
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
        summary={`${business.name} is a full-service commercial truck repair, servicing and maintenance workshop in Anderbolt, Boksburg. The workshop services, maintains and repairs ${supportedTruckBrandText}, with particularly strong specialist experience in Volvo, Scania and Mercedes-Benz trucks.`}
      />

      <section className="border-b border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Complete Truck Care
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white lg:text-5xl">
              From Routine Servicing to Major Diesel Repairs
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-white/66">
              <p>
                Dyna-Mic Diesel provides comprehensive truck repair, servicing
                and maintenance support from Anderbolt, Boksburg.
              </p>
              <p>
                From brake repairs and routine maintenance to diesel diagnostics,
                engine reconditioning and fleet support, our team helps
                commercial vehicle operators address immediate repair needs while
                keeping long-term vehicle condition in mind.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 rounded bg-diesel-red px-5 py-3 text-sm font-black text-[#111111] transition hover:bg-safety"
            >
              View Complete Services <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Truck Repairs", "/truck-repairs-boksburg"],
              ["Truck Servicing", "/truck-servicing-boksburg"],
              ["Truck Brake Repairs", "/truck-brake-repairs-boksburg"],
              ["Diesel Diagnostics", "/diesel-diagnostics-boksburg"],
              ["Engine Reconditioning", "/engine-reconditioning-boksburg"],
              ["Diesel Pumps & Injectors", "/diesel-pumps-and-injectors-boksburg"],
              ["Engine Dyno Testing", "/engine-dyno-testing-boksburg"],
              ["Fleet Maintenance", "/fleet-maintenance-boksburg"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 font-bold text-white/78 transition hover:-translate-y-1 hover:border-diesel-red/50 hover:text-white"
              >
                {label}
                <ArrowRight size={17} className="text-diesel-red" />
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              Volvo, Scania and Mercedes-Benz are specialist strengths at
              Dyna-Mic Diesel. The workshop also actively services and repairs
              the wider confirmed commercial truck range, with practical
              diagnostics, servicing and repair planning for operators across
              Boksburg, the East Rand and Gauteng.
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
              src="/images/truck-brands-service-yard.webp"
              alt="Commercial truck brands serviced by Dyna-Mic Diesel"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/82 to-transparent" />
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-8 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Truck Brands We Service
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white">
              Full-service support for confirmed commercial truck brands
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              {brandPositioning} Share the truck brand, model, symptoms,
              warning lights and service history so the workshop can understand
              the repair or maintenance requirement properly.
            </p>
            <Link
              href="/truck-brands"
              className="mt-7 inline-flex h-13 w-fit items-center justify-center gap-2 rounded bg-diesel-red px-6 text-sm font-black text-[#111111] transition hover:-translate-y-0.5 hover:bg-safety"
            >
              View Truck Brands <ArrowRight size={18} />
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

      <HealthInspectionSection compact />

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
                src="/images/service-fleet-maintenance-workshop.webp"
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
              Dyna-Mic Diesel services and repairs {supportedTruckBrandText}.
            </p>
          </div>
          <ContactButtons />
        </div>
      </section>

      <FaqSection faq={homeFaq} />
    </PageFrame>
  );
}
