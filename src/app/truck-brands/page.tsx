import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  brandPositioning,
  commonFaq,
  localBusinessSchema,
  supportedTruckBrandText,
  type LinkItem,
} from "@/lib/site";
import {
  additionalTruckBrandPages,
  specialistTruckBrandPages,
  truckBrandPages,
} from "@/lib/truck-brand-pages";

export const metadata: Metadata = {
  title: { absolute: "Truck Brands Serviced in Boksburg | Dyna-Mic Diesel" },
  description:
    "Dyna-Mic Diesel services, maintains and repairs Volvo, Scania, Mercedes-Benz, MAN, DAF, Iveco, Hino, Isuzu, UD Trucks, FAW, FUSO and Renault Trucks in Boksburg.",
  alternates: { canonical: "/truck-brands" },
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Truck Brands", href: "/truck-brands" },
];

export default function TruckBrandsPage() {
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
          alt="Dyna-Mic Diesel truck brands serviced"
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
              Truck brands serviced
            </p>
            <h1 className="reveal-up-delay mt-7 max-w-6xl text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Commercial Truck Brands We Service & Repair
            </h1>
            <p className="reveal-up-delay mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
              {brandPositioning}
            </p>
            <p className="reveal-up-delay mt-5 max-w-3xl text-base leading-7 text-white/60">
              The workshop actively supports {supportedTruckBrandText} for truck
              owners, fleet operators and transport businesses across the East
              Rand and Gauteng.
            </p>
            <div className="reveal-up-delay mt-9">
              <ContactButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Specialist Experience
            </p>
            <h2 className="mt-2 max-w-4xl text-4xl font-black text-white">
              Volvo, Scania and Mercedes-Benz remain specialist strengths
            </h2>
          </div>
          <LinkGrid links={specialistTruckBrandPages.map(toLink)} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Additional Confirmed Brands
            </p>
            <h2 className="mt-2 max-w-4xl text-4xl font-black text-white">
              Service, maintenance and repairs for commercial truck operators
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/62">
              Dyna-Mic Diesel also services, maintains and repairs these
              confirmed commercial truck brands from the Anderbolt workshop.
            </p>
          </div>
          <LinkGrid links={additionalTruckBrandPages.map(toLink)} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] py-20 text-white">
        <Image
          src="/images/fleet-maintenance.jpg"
          alt="Truck brand service enquiry"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#111111]/82" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-diesel-red">
              Book a Brand-Specific Enquiry
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">
              Tell us the truck brand, model and service requirement
            </h2>
          </div>
          <Link
            href="/request-a-quote#quote-form"
            className="inline-flex h-13 items-center justify-center gap-2 rounded bg-diesel-red px-6 text-sm font-black text-[#111111] transition hover:bg-safety"
          >
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}

function toLink(brand: (typeof truckBrandPages)[number]): LinkItem {
  return {
    label: brand.title,
    href: brand.href,
    description: brand.description,
    image: brand.image,
  };
}
